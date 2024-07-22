<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  // Preflight requests will include an OPTIONS method to check for CORS headers
  header('Access-Control-Max-Age: 86400'); // Cache for 1 day
  http_response_code(204);
  exit;
}

$server = 'localhost';
$user = 'valet';
$password = 'root';
$dbname = 'okok';

$con = new mysqli($server, $user, $password, $dbname);

if ($con->connect_error) {
  http_response_code(500);
  echo json_encode(['error' => 'Connection failed: ' . $con->connect_error]);
  exit;
}

$method = $_SERVER['REQUEST_METHOD'];

// Log incoming request for debugging
file_put_contents('debug.log', "Method: $method\n", FILE_APPEND);

switch ($method) {
  case 'GET':
    $limit = isset($_GET['limit']) ? intval($_GET['limit']) : 6; // Default limit to 6
    $page = isset($_GET['page']) ? intval($_GET['page']) : 1; // Default page to 1
    $offset = ($page - 1) * $limit;

    $stmt = $con->prepare("SELECT * FROM `user_accounts` LIMIT ? OFFSET ?");
    $stmt->bind_param("ii", $limit, $offset);
    $stmt->execute();
    $result = $stmt->get_result();
    $users = $result->fetch_all(MYSQLI_ASSOC);

    $countResult = $con->query("SELECT COUNT(*) as count FROM `user_accounts`");
    $totalCount = $countResult->fetch_assoc()['count'];
    $totalPages = ceil($totalCount / $limit);

    echo json_encode([
      'users' => $users,
      'totalPages' => $totalPages,
      'currentPage' => $page
    ]);
    break;

  case 'POST':
    $data = json_decode(file_get_contents('php://input'), true);
    if (!isset($data['name'], $data['email'], $data['password'])) {
      http_response_code(400);
      echo json_encode(['error' => 'Invalid input']);
      break;
    }

    $stmt = $con->prepare("INSERT INTO `user_accounts` (`name`, `email`, `password`) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $data['name'], $data['email'], $data['password']);
    if ($stmt->execute()) {
      echo json_encode(['id' => $stmt->insert_id, 'name' => $data['name'], 'email' => $data['email']]);
    } else {
      http_response_code(500);
      echo json_encode(['error' => $stmt->error]);
    }
    break;

  case 'PUT':
    $data = json_decode(file_get_contents('php://input'), true);
    if (!isset($data['id'], $data['name'], $data['email'], $data['password'])) {
      http_response_code(400);
      echo json_encode(['error' => 'Invalid input']);
      break;
    }

    // Log incoming data for debugging
    file_put_contents('debug.log', "PUT Data: ID = {$data['id']}, Name = {$data['name']}, Email = {$data['email']}, Password = {$data['password']}\n", FILE_APPEND);

    $stmt = $con->prepare("SELECT COUNT(*) as count FROM `user_accounts` WHERE `id`=?");
    $stmt->bind_param("i", $data['id']);
    $stmt->execute();
    $exists = $stmt->get_result()->fetch_assoc()['count'] > 0;

    if ($exists) {
      $stmt = $con->prepare("UPDATE `user_accounts` SET `name`=?, `email`=?, `password`=? WHERE `id`=?");
      $stmt->bind_param("sssi", $data['name'], $data['email'], $data['password'], $data['id']);
      if ($stmt->execute()) {
        echo json_encode(['success' => true, 'id' => $data['id']]);
      } else {
        http_response_code(500);
        echo json_encode(['error' => $stmt->error]);
      }
    } else {
      http_response_code(404);
      echo json_encode(['error' => 'Record not found']);
    }
    break;

  case 'DELETE':
    $data = json_decode(file_get_contents("php://input"), true);
    if (!isset($data['id'])) {
      http_response_code(400);
      echo json_encode(['error' => 'No ID provided']);
      break;
    }

    $stmt = $con->prepare("DELETE FROM `user_accounts` WHERE `id`=?");
    $stmt->bind_param("i", $data['id']);
    if ($stmt->execute()) {
      echo json_encode(['success' => true]);
    } else {
      http_response_code(500);
      echo json_encode(['error' => $stmt->error]);
    }
    break;

  default:
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    break;
}

$con->close();
?>
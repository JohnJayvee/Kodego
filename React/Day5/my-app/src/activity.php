<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

$server = 'localhost';
$user = 'valet';
$password = 'root';
$dbname = 'okok';

$con = new mysqli($server, $user, $password, $dbname);

if ($con->connect_error) {
  die('Connection failed: ' . $con->connect_error);
}

$method = $_SERVER['REQUEST_METHOD'];

// Log incoming request for debugging
file_put_contents('debug.log', "Method: $method\n", FILE_APPEND);

switch ($method) {
  case 'GET':
    $sql = 'SELECT * FROM `user_accounts`';
    $result = $con->query($sql);
    $users = array();
    while ($row = $result->fetch_assoc()) {
      $users[] = $row;
    }
    echo json_encode($users);
    break;

  case 'POST':
    $data = json_decode(file_get_contents('php://input'), true);
    $name = $con->real_escape_string($data['name']);
    $email = $con->real_escape_string($data['email']);
    $password = $con->real_escape_string($data['password']);
    $sql = "INSERT INTO `user_accounts` (`name`, `email`, `password`) VALUES ('$name', '$email', '$password')";
    if ($con->query($sql) === TRUE) {
      echo json_encode(['id' => $con->insert_id, 'name' => $name, 'email' => $email]);
    } else {
      echo json_encode(['error' => $con->error]);
    }
    break;

  case 'PUT':
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $con->real_escape_string($data['id']);
    $name = $con->real_escape_string($data['name']);
    $email = $con->real_escape_string($data['email']);
    $password = $con->real_escape_string($data['password']);
    $sql = "UPDATE `user_accounts` SET `name`='$name', `email`='$email', `password`='$password' WHERE `id`='$id'";
    if ($con->query($sql) === TRUE) {
      echo json_encode(['id' => $id, 'name' => $name, 'email' => $email]);
    } else {
      echo json_encode(['error' => $con->error]);
    }
    break;

  case 'DELETE':
    file_put_contents('debug.log', "DELETE Request Received\n", FILE_APPEND); // Debugging line
    $data = json_decode(file_get_contents("php://input"), true); // JSON data

    // Debugging: log received data
    file_put_contents('debug.log', "Received data: " . print_r($data, true) . "\n", FILE_APPEND);

    if (isset($data['id'])) {
      $id = $con->real_escape_string($data['id']);
      $sql = "DELETE FROM `user_accounts` WHERE `id`='$id'";
      if ($con->query($sql) === TRUE) {
        echo json_encode(['success' => true]);
      } else {
        echo json_encode(['error' => $con->error]);
      }
    } else {
      echo json_encode(['error' => 'No ID provided']);
    }
    break;

  default:
    echo json_encode(['error' => 'Method not allowed']);
    break;
}

$con->close();
?>
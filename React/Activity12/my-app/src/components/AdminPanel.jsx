import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Card, Nav, Container, Row, Col, Pagination } from 'react-bootstrap';
import placeholderImage from '../img/image.png'; // Ensure this path is correct
import './AdminPanel.css'; // Ensure this file exists and contains necessary styles

const API_URL = 'http://src.test/activity.php'; // Update this to your actual PHP script path

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: '', name: '', email: '', password: '' });
  const [deleteUserId, setDeleteUserId] = useState(null);

  const fetchUsers = async (page = 1) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          page,
          limit: 6 // Adjust this if needed
        }
      });
      setUsers(response.data.users);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setCurrentUser({ id: '', name: '', email: '', password: '' });
    setShow(true);
  };
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = (id) => {
    setDeleteUserId(id);
    setShowDelete(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleSave = async () => {
    try {
      if (currentUser.id) {
        // Update existing user
        await axios.put(API_URL, {
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.email,
          password: currentUser.password
        });
      } else {
        // Add new user
        await axios.post(API_URL, {
          name: currentUser.name,
          email: currentUser.email,
          password: currentUser.password
        });
      }
      handleClose();
      fetchUsers(currentPage); // Refetch users to stay on the same page
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      await axios.delete(API_URL, { data: { id: deleteUserId } });
      handleCloseDelete();
      fetchUsers(currentPage); // Refetch users to stay on the same page
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setShow(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchUsers(page);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-dark sidebar">
          <Nav defaultActiveKey="/admin" className="flex-column">
            <Nav.Link href="/admin" className="active">Users</Nav.Link>
          </Nav>
        </div>
        <div className="col-md-10">
          <div className="container mt-3">
            <h2>Admin Panel</h2>
            <Button variant="primary" onClick={handleShow}>Add User</Button>
            <Container className="mt-3">
              <Row>
                {users.map((user) => (
                  <Col md={4} key={user.id} className="mb-4">
                    <Card>
                      <Card.Img variant="top" src={placeholderImage} className="card-img-top" />
                      <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                          <strong>Email:</strong> {user.email}
                        </Card.Text>
                        <Button variant="warning" className="mr-2" onClick={() => handleEditUser(user)}>Edit</Button>
                        <Button variant="danger" onClick={() => handleShowDelete(user.id)}>Delete</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>

            {/* Pagination Controls */}
            <Pagination>
              <Pagination.Prev onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)} />
              {[...Array(totalPages)].map((_, i) => (
                <Pagination.Item
                  key={i + 1}
                  active={i + 1 === currentPage}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)} />
            </Pagination>
          </div>

          {/* User Modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{currentUser.id ? 'Edit User' : 'Add User'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={currentUser.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={currentUser.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={currentUser.password}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" onClick={handleSave}>Save Changes</Button>
            </Modal.Footer>
          </Modal>

          {/* Delete Confirmation Modal */}
          <Modal show={showDelete} onHide={handleCloseDelete}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDelete}>Cancel</Button>
              <Button variant="danger" onClick={handleDeleteUser}>Delete</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

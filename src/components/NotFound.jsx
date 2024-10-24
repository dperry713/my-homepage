import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '2rem',
    },
    content: {
      textAlign: 'center',
      color: '#2c3e50',
    },
    image: {
      maxWidth: '400px',
      width: '100%',
      marginBottom: '2rem',
    },
    button: {
      marginTop: '1rem',
    },
  };

  return (
    <Container fluid style={styles.container}>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={8} lg={6} style={styles.content}>
          <Image
            src="https://http.cat/404"
            fluid
            style={styles.image}
            alt="404 Not Found"
          />
          
          <h1>404 - Page Not Found</h1>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          
          <Button
            variant="primary"
            size="lg"
            style={styles.button}
            onClick={() => navigate('/')}
          >
            Return to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;

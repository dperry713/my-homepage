import React from 'react';
import { Container, Button, Card, Image } from 'react-bootstrap';

const HomePage = () => {
  const styles = {
    container: {
      backgroundColor: '#f8f9fa',
      padding: '2rem',
      minHeight: '100vh',
    },
    content: {
      color: '#2c3e50',
      textAlign: 'center',
    },
    button: {
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      margin: '1rem 0',
    },
    card: {
      marginTop: '2rem',
      border: '1px solid #dee2e6',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <Container fluid style={styles.container}>
      <div style={styles.content}>
        <Image
          src="https://picsum.photos/600/400"
          fluid
          className="mb-4"
          alt="Welcome"
          style={{ maxWidth: '600px' }}
        />
        
        <h1>Welcome to Our Store</h1>
        <p>Discover amazing products at great prices</p>
        
        <Button variant="primary" size="lg" style={styles.button}>
          Shop Now
        </Button>

        <Card style={styles.card}>
          <Card.Body>
            <Card.Title>Featured Products</Card.Title>
            <Card.Text>
              Check out our latest collection of trending items
            </Card.Text>
            <Button variant="outline-primary">View Collection</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default HomePage;

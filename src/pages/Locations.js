import { Container, Row, Col, Card } from 'react-bootstrap';
import './Menu.css';

const locations = [
  { 
    name: 'Pabbas - Mangalore 1', 
    address: 'Ground Floor, Sri Krishna Prasad Complex, M.G. Road, Lalbaug, Mangaluru, Karnataka 575003', 
    image: 'pabbas.jpg'
  },
  { 
    name: 'Pabbas Ideal Cafe - Mangalore', 
    address: 'Bejai Main Rd, Lalbagh, Mangaluru, Karnataka, Mangalore', 
    image: 'pi.jpg'
  },
  { 
    name: 'Ideal Cafe - Mangalore', 
    address: 'Ideal Towers, Opposite Sharavu Mahaganapathi Temple Road, Mangaluru, Karnataka 575001, Mangalore', 
    image: 'idealcafe.jpg'
  },
  { 
    name: 'Ideal 1 - Mangalore', 
    address: 'Hampankatta, Mangalore', 
    image: 'idealh.jpg'
  },
  { 
    name: 'Ideal 2 - Mangalore', 
    address: 'Opposite of Ganapati School, Mangalore', 
    image: 'idealg.jpg'
  },
];

const Locations = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Locations</h2>
      <Row>
        {locations.map((location, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <div className="image-container">
                <Card.Img 
                  variant="top" 
                  src={location.image} 
                  alt={location.name} 
                  className="store-image"
                />
              </div>
              <Card.Body>
                <Card.Title>{location.name}</Card.Title>
                <Card.Text>{location.address}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Locations;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import ListeVols from './ListeVols';

function App() {
  return (

    <div className="App">
        <Container fluid={true} >
          <Row>
            <Col sm={8} >
             <ListeVols/> 
            </Col>
            <Col sm={4}>
                <Header/>
            </Col>
          </Row>
        </Container>

    </div>
  );
}

export default App;

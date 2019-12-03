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
        <Container fluid={false} >
          <Row>
            <Col sm={9} >
             <ListeVols/> 
            </Col>
            <Col sm={3}>
                <Header/>
            </Col>
          </Row>
        </Container>

    </div>
  );
}

export default App;

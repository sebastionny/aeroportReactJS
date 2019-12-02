import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const Head = props => {
    return(
        <div>
            <Row>
                <Col sm={3} >
                    <h1>Vols</h1>
                </Col>
                <Col sm={6}>
                    <p>DERNIÉR MISE À JOUR <span>IL Y A 10 MIN</span></p>
                </Col>
                <Col sm={3}>

                </Col>
          </Row>
        </div>
    )
}

export default Head;
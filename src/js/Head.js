import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import departBtn from '../img/departBtn.png';
import arriveBtn from '../img/arriveBtn.png';


const Head = props => {
    return(
        <div className="head">
            <Row>
                <Col sm={3} >
                <h1>{props.title}</h1>
                </Col>
                <Col sm={6}>
                    <p>DERNIÉR MISE À JOUR <span>IL Y A 10 MIN</span></p>
                </Col>
                <Col sm={3} >
                    <Row>
                <a href="#" className="col-sm-6">
                    <img src={departBtn} className="img-fluid" alt="Départ"/>
                </a>
                <a href="#" className="col-sm-6">
                    <img src={arriveBtn} className="img-fluid" alt="Arrivée"/>
                </a>
                </Row>

                </Col>
          </Row>
        </div>
    )
}

export default Head;
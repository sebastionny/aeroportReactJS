import React from 'react';
import Button from 'react-bootstrap/Button'

const ButtonApp = props => {
    return(
        <Button variant={props.type} size="sm" className="col-6" >
            {props.text}
        </Button>
    
    )
}
export default ButtonApp;
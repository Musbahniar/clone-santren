import React from 'react';
// import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Logo from '../img/santrenkoding_logo.png';

const Example = (props) => {
    const divStyle = {
        position: 'absolute',
        bottom: '0px',
        width: '100%',
        height: '60px'
        // line-height: '60px', /* Vertically center the text there */
        // background-color: '#f5f5f5'
    };
    return (
            <div>
                 <div style={divStyle}>
                    <h1>Footer</h1>
                </div>
            </div>
    );
};

export default Example;
import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Logo from '../img/santrenkoding_logo.png';

const Example = (props) => {
    const divStyle = {
        widht: '100%',
        paddingRight: '65px',
        paddingLeft: '65px',
        marginRight: 'auto',
        marginLeft: 'auto'
    };
    return (
    
    <Row style={divStyle}>
        <Col>
            <Card body className="text-center" body inverse color="success">
                <CardTitle >Kegiatan</CardTitle>
                <br />
                <CardText>Koding</CardText>
                <CardText>Belajar Agama dan Al Qur'an</CardText>
                <CardText>Pendidikan Karakter</CardText>
            </Card>
        </Col>
        <Col>
            <Card body className="text-center">
                <CardTitle ><img src={Logo}></img></CardTitle>
                <CardTitle> <h3>"Memberi Manfaat Untuk Ummmat"</h3></CardTitle>
            </Card>
        </Col>
    </Row>
    );
};

export default Example;
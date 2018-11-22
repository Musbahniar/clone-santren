import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Logo from '../img/santrenkoding_logo.png';

const Example = (props) => {
    return (
    <Row >
        <Col>
            <Card body className="text-center" body inverse color="success">
                <CardTitle ></CardTitle>
                <CardTitle ></CardTitle>
                <CardTitle >Kegiatan</CardTitle>
                <CardText>Koding</CardText>
                <CardText>Belajar Agama dan Al Qur'an</CardText>
                <CardText>Pendidikan Karakter</CardText>
            </Card>
        </Col>
        <Col>
            <Card body className="text-center">
                <CardTitle ><img src={Logo}></img></CardTitle>
                <CardTitle> <h3>"Memberi Manfaat Untuk Ummat"</h3></CardTitle>
            </Card>
        </Col>
    </Row>
    );
};

export default Example;
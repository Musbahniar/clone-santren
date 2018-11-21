import React from 'react';
import { Card, CardImg, CardText, 
    CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../css/card.css';

const Example = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={props.img} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>{props.text}</CardText>
                    <CardText>
                        <p className="fontSantren">Santren Koding</p>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default Example;
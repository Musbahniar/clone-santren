import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
    return (
        <div>
            <Jumbotron className="text-center">
                <h1 className="display-3">Santren Koding</h1>
                <p className="lead">Intensive Coding Bootcamp for Yatim & Dhuafa</p>
                <p className="lead">
                    <Button color="success">Mulai Belajar</Button>
                </p>
            </Jumbotron>
        </div>
    );
};

export default Example;

import React, { Component } from 'react';
import Header from '../component/Header';
import Jumbotron from '../component/Jumbotron';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Jumbotron />
            </div>
        )
    }
}

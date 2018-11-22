import React from 'react';
// import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Logo from '../img/santrenkoding_logo.png';

const Example = (props) => {
    return (
            <div>
                <br/>
                <br/>
                <div className="text-center"><h3>Kontak</h3></div>
                <div className="row">
                    <div className="col" align="center">
                    <ul className="list-unstyled">
                        <li>082225111587</li>
                        <li>santrenkoding@gmail.com</li>
                        <br/>
                        <li>Titik Ruang Space</li>
                        <li>Jl. Ngesrep Tim. III No.67, Sumurboto, Banyumanik</li>
                        <li>Kota Semarang, Jawa Tengah 50269</li>
                    </ul>  
                    </div>
                </div>
            </div>
    );
};

export default Example;
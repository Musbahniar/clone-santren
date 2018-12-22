import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Jumbotron from '../component/Jumbotron';
import Card from '../component/Card';
import CardBottom from '../component/CardBottom';
import Kontak from '../component/Contact';
import Footer from '../component/Footer';

export default class Home extends Component {
    
    render() {
        return (
            <div>
                <Jumbotron />
                <div className="text-center"><h2>Daftar Kajian Koding Rutin Hanti</h2></div>
                <br />
                <div className="container">
                    <div className="row" >
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <Card  title="Kajian Koding #3" text="ReactJS dan Firebase Auth/Hosting" 
                                img = "https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <Card  title="Kajian Koding #2" text="html, css, boostrap dasar" 
                                img = "https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <Card  title="Kajian Koding #1" text="Belajar Laravel DasarEdit" 
                                img = "https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572"
                            />
                        </div>
                    </div>
                </div>
                <br />
                <div align="center"><Button outline color="success">Lihat Seluruh Kajian Koding Coba lagi</Button>{' '}</div>
                <hr />
                <div className="container">
                <CardBottom />
                <Kontak />
                </div>
                <Footer />
            </div>
        )
    }
}

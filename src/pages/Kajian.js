import React, { Component } from 'react';
import Card from '../component/Card';
import Footer from '../component/Footer';

export default class Kajian extends Component {
    
    render() {
        return (
            <div>
                <div className="text-center"><h2>Daftar Kajian Koding Rutin</h2></div>
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
                            <Card  title="Kajian Koding #1" text="Belajar Laravel Dasar" 
                                img = "https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572"
                            />
                        </div>
                    </div>
                </div>
                <br />
                <Footer />
            </div>
        )
    }
}

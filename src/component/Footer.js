import React from 'react';

const Example = (props) => {
    const divStyle = {
        position: 'absolute',
        backgroundColor: 'blue',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '30px'
    };
    return (
            <div>
                <footer>
                    <div className="container">
                        <h6 align="center" className="text-danger">Copyright © Santren Koding 2018. All rights reserved.</h6>
                    </div>
                </footer>
            </div>
    );
};

export default Example;
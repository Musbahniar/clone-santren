import React from 'react';
import { Jumbotron } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Page Not Found !!!</h1>
        <p className="lead">Mohon maaf, halaman yang anda cari tidak ditemukan pada sistem kami.</p>
        <hr className="my-2" />
        <p>Please Contact ......</p>
      </Jumbotron>
    </div>
  );
};

export default Example;
import React from 'react';

export default function NavBar(props){

    const {titulo} = props;
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg " alt="" width="30" height="24" className="d-inline-block align-text-top"/>
            {titulo}
          </a>
        </div>
      </nav>
    );
}
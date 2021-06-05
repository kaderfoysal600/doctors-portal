import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    return (

        <nav  className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul style = {{marginLeft:"45%"}} className="navbar-nav  ">
                    <li  className="nav-item active">
                        <a  className="nav-link " href="#">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a  style = {{marginLeft:"50%"}} className="nav-link " href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a   style = {{marginLeft:"70%"}}className="nav-link " href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a  style = {{marginLeft:"110%"}} className="nav-link text-white" href="#">Reviews</a>
                    </li>
                    <li  className="nav-item">
                        <a  style = {{marginLeft:"170%"}} className="nav-link text-white " href="#">Blogs</a>
                    </li>
                    <li className="nav-item">
                    <a  style = {{marginLeft:"140%"}} className="nav-link text-white " href="#">contactUs</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;
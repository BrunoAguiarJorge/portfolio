import React from 'react';
import './styles.scss';


const Navbar = () => (
    <nav className="row bg-primary main-nav">
        <div className="col-2 offset-1 ">
            <a href="link" className="nav-logo-text">
                <h4>Bruno Aguiar Jorge</h4>
            </a>
        </div>
        <div className="col-6 offset-3">
            <ul className="main-menu">
                
                <li>
                    <a href="link" className="active">
                        EDUCATION
                    </a>
                </li>
                <li>
                    <a href="link">
                        PROJECTS
                    </a>
                </li>
                <li>
                    <a href="link">
                        CONTACT
                    </a>
                </li>
               
               
            </ul>
        </div>
    </nav>
)



export default Navbar;
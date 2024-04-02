import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

class Header extends Component {

    // constructor() {
    //     super();
        
    // }

    render() {
        
        return (
            <header className="row py-3 mb-4 border-bottom">
                <nav className="navbar navbar-expand-md col-12" aria-label="Main Menu Navbar">
                    <a className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto" href="/">
                        <Image src='images/PN-Nail-Salon-Logo.png' fluid style={{height: '75px'}} />
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsMain" aria-controls="navbarsMain" aria-expanded="false" aria-label="Toggle Navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse row" id="navbarsMain">
                        <ul className="navbar-nav mb-2 mb-md-0 justify-content-end">
                            <li className="nav-item col-12 col-md-6 col-lg-4 col-xl-3 p-2">
                                <a className="btn btn-primary w-100" href='tel:16082035787'>Call Today (608) 203-5787</a>
                            </li>
                            <li className="nav-item col-12 col-md-3 p-2">
                                <a className="btn btn-primary w-100" href="/pricing">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>
        );
    }
}

export default Header;
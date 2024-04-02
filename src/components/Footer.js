import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

class Footer extends Component {

    constructor() {
        super();
        this.currentDate = Date.now();
        this.currentYear = new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(this.currentDate);
    }

    render() {
        
        return (
            <footer className="row footer text-center mt-4 border-top py-3">
                <div className='col-12 col-md-6 col-lg-3'>
                    <Image src='images/PN-Nail-Salon-Logo.png' fluid style={{height: '100px'}} />
                </div>
                <div className='col-12 col-md-6 col-lg-3 text-start'>
                    <h5>Location</h5>
                    <address>
                        6717 Odana Road, Suite 2<br/>Madison, WI 53719
                    </address>
                </div>
                <div className='col-12 col-md-6 col-lg-3 text-start'>
                    <h5>Phone</h5>
                    <a href='tel:16082035787'>(608) 203-5787</a>
                </div>
                <div className='col-12 col-md-6 col-lg-3 text-start'>
                    <h5>e-Mail</h5>
                    <a href='mailto:contact@pnnailsalon.com'>contact@pnnailsalon.com</a>
                </div>

                <div className='col-12'>&copy; {this.currentYear} PN Nail Salon - Madison, WI</div>
            </footer>
        );
    }
}

export default Footer;
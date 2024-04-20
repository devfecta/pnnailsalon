import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import {Facebook, Instagram} from 'react-bootstrap-icons';

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
                <div className='col-12 col-md-6 col-lg-3 pb-3 text-start'>
                    <h5>Location</h5>
                    <address>
                        <a href='https://www.google.com/maps/search/?api=1&query=6717+Odana+Road+Suite+2+Madison+WI' target='_blank'>6717 Odana Road, Suite 2<br/>Madison, WI 53719</a>
                    </address>
                    <h5>Open</h5>
                    Monday-Friday : 9:00am - 7:00pm<br/>
                    Saturday : 9:00am - 4:00pm<br/>
                </div>
                <div className='col-12 col-md-6 col-lg-3 pb-3 text-start'>
                    <h5>Phone</h5>
                    <a href='tel:16082035787'>(608) 203-5787</a>
                    <h5 className='mt-3'>e-Mail</h5>
                    <a href='mailto:contact@pnnailsalon.com'>contact@pnnailsalon.com</a>
                </div>
                <div className='col-12 col-md-6 col-lg-3 pb-3 justify-content-center fs-1'>

                <a href='https://www.facebook.com/pnnailsalon' className='m-3' target='_blank' rel='noreferrer'><Facebook /></a>
                    
                <a href='https://www.instagram.com/pnnailsalon' className='m-3' target='_blank' rel='noreferrer'><Instagram /></a>

                    
                </div>

                <div className='col-12'>&copy; {this.currentYear} PN Nail Salon - Madison, WI</div>
            </footer>
        );
    }
}

export default Footer;
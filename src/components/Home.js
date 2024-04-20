import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

class Home extends Component {

    componentDidMount() {
        //console.log(this.props);
        //document.title = this.props.title;
    }

    render() {

        return (
            <>
                <section className='row justify-content-between'>
                    <div className='col-12 col-md-7 d-flex align-items-center'>
                        <div className='col-12'>
                            <p className='fs-3'>
                            At PN Nail Salon, we offer manicures and pedicures from professional nail technicians to the Madison area. 
                            Whether you are visiting the salon for the first time or are a loyal guest, it is our goal to give you 
                            beautiful nails while you enjoy a rejuvenating and relaxing experience.</p>
                            <p className='fs-4 fst-italic'>
                            All services are performed by our highly trained and licensed staff. 
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 py-3 d-none d-md-block'>
                        <Image src='images/manicure-pedicure.jpg' fluid />
                    </div>
                </section>
                <section className='row justify-content-round'>
                    <div className='col-12 col-md-4 py-3'>
                        <Image src='images/nails1.jpg' alt='PN Nail Salon Manicure Sample 1' fluid />
                    </div>
                    <div className='col-12 col-md-4 py-3'>
                        <Image src='images/nails2.jpg' alt='PN Nail Salon Manicure Sample 2' fluid />
                    </div>
                    <div className='col-12 col-md-4 py-3'>
                        <Image src='images/nails3.jpg' alt='PN Nail Salon Manicure Sample 3' fluid />
                    </div>
                </section>
            </>
        );
    }

}

export default Home;
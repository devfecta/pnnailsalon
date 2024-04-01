import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

class Home extends Component {

    componentDidMount() {
        //console.log(this.props);
        //document.title = this.props.title;
    }

    render() {

        return (
            <section className='row justify-content-between'>
				<div className='col-12 col-md-7 d-flex align-items-center'>
					<p className='fs-2'>PN Nail Salon offers manicures and pedicures from professional nail technicians to the Madison area.</p>
				</div>
                <div className='col-12 col-md-5'>
                    <Image src='images/manicure-pedicure.jpg' fluid />
				</div>
			</section>
        );
    }

}

export default Home;
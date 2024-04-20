import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Pricing extends Component {

    componentDidMount() {
        console.log("this.props.title");
        
        document.title = this.props.title;
    };

    render() {

        return (
			<> 
				<section className='row'>
					<div className='col-12 col-md-6'>
						<Card className='mb-3'>
							<Card.Header><h4>Manicures</h4></Card.Header>
							<Card.Body>
								<ListGroup variant="flush">
									<ListGroup.Item><strong>Manicure</strong> : $25</ListGroup.Item>
									<ListGroup.Item><strong>Gel Manicure</strong> : $40</ListGroup.Item>
									<ListGroup.Item><strong>Manicure Dip</strong> : $45</ListGroup.Item>
									<ListGroup.Item><strong>Polish Change</strong> : $20</ListGroup.Item>
									<ListGroup.Item><strong>Gel Polish Change</strong> : $35</ListGroup.Item>
								</ListGroup>
							</Card.Body>
						</Card>
					</div>
					<div className='col-12 col-md-6'>
						<Card className='mb-3'>
							<Card.Header><h4>Pedicures</h4></Card.Header>
							<Card.Body>
								<ListGroup variant="flush">
									<ListGroup.Item><strong>Pedicure</strong> : $40</ListGroup.Item>
									<ListGroup.Item><strong>Gel Pedicure</strong> : $60</ListGroup.Item>
									<ListGroup.Item><strong>Pedicure Deluxe</strong> : $50</ListGroup.Item>
									<ListGroup.Item><strong>Gel Pedicure Deluxe</strong> : $70</ListGroup.Item>
									<ListGroup.Item><strong>Pedicure Deluxe Hot Stone</strong> : $65</ListGroup.Item>
									<ListGroup.Item><strong>Gel Pedicure Deluxe Hot Stone</strong> : $85</ListGroup.Item>
								</ListGroup>
							</Card.Body>
						</Card>
					</div>
				</section>
				<section className='row'>
					<caption>Children (Ages 11 & under) Free two-finger design with manicure and pedicure.</caption>
					<div className='col-12 col-md-6'>
						<Card className='mb-3'>
							<Card.Header><h4>Children Manicures</h4></Card.Header>
							<Card.Body>
								<ListGroup variant="flush">
									<ListGroup.Item><strong>Manicure</strong> : $20</ListGroup.Item>
									<ListGroup.Item><strong>Gel Manicure</strong> : $38</ListGroup.Item>
								</ListGroup>
							</Card.Body>
						</Card>
					</div>
					<div className='col-12 col-md-6'>
						<Card className='mb-3'>
							<Card.Header><h4>Children Pedicures</h4></Card.Header>
							<Card.Body>
								<ListGroup variant="flush">
									<ListGroup.Item><strong>Pedicure</strong> : $30</ListGroup.Item>
									<ListGroup.Item><strong>Gel Pedicure</strong> : $48</ListGroup.Item>
								</ListGroup>
							</Card.Body>
						</Card>
					</div>
					<div className='col-12 col-md-6'>
						<Card className='mb-3'>
							<Card.Header><h4>Children Manicure and Pedicure Packages</h4></Card.Header>
							<Card.Body>
								<ListGroup variant="flush">
									<ListGroup.Item><strong>Manicure and Pedicure</strong> : $48</ListGroup.Item>
									<ListGroup.Item><strong>Gel Manicure and Pedicure</strong> : $66</ListGroup.Item>
									<ListGroup.Item><strong>Gel Manicure and Gel Pedicure</strong> : $82</ListGroup.Item>
								</ListGroup>
							</Card.Body>
						</Card>
					</div>
				</section>
				<section className='row'>
					<div className='col-12'>
						<Card className='mb-3'>
							<Card.Header><h4>Additional Services</h4></Card.Header>
							<Card.Body>
								<ListGroup variant="flush"className='list-group-horizontal flex-wrap'>
									<ListGroup.Item className='col-12 col-md-6 border-top-0'><strong>Regular Polish Change</strong> : Hands $15 / Feet $15</ListGroup.Item>
									<ListGroup.Item className='col-12 col-md-6 border-top-0'><strong>Gel Polish Change</strong> : Hands $35 / Feet $35</ListGroup.Item>
									<ListGroup.Item className='col-12 col-md-6 border-top-0'><strong>Deep French Tips</strong> : $20+</ListGroup.Item>
									<ListGroup.Item className='col-12 col-md-6 border-top-0'><strong>French Tips</strong> : $10+</ListGroup.Item>
									<ListGroup.Item className='col-12 col-md-6 border-top-0'><strong>Gel Removal</strong> : $15</ListGroup.Item>
									<ListGroup.Item className='col-12 col-md-6 border-top-0'><strong>Acrylic/Dip Removal</strong> : $20</ListGroup.Item>
									<ListGroup.Item className='col-12 col-md-6 border-top-0'><strong>Chrome or Cat Eye Design</strong> : $15+</ListGroup.Item>
									<ListGroup.Item className='col-12 col-md-6 border-top-0'><strong>Ombre Design</strong> : $15</ListGroup.Item>
									<ListGroup.Item className='col-12 col-md-6 border-top-0'><strong>Paraffin Wax</strong> : $10</ListGroup.Item>
									<ListGroup.Item className='col-12 col-md-6 border-top-0'><strong>More Add-On Color Each</strong> : $2</ListGroup.Item>
								</ListGroup>
							</Card.Body>
						</Card>
					</div>
				</section>
			</>
        );
    }

}

export default Pricing;
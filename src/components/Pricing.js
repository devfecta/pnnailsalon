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
            <section className='row justify-content-between'>
				<div className='col-12 col-md-6'>
					<Card className='mb-3'>
						<Card.Header><h4>Manicures</h4></Card.Header>
						<Card.Body>
							<ListGroup variant="flush">
								<ListGroup.Item>Manicure Regular $25</ListGroup.Item>
								<ListGroup.Item>Manicure Gel $40</ListGroup.Item>
								<ListGroup.Item>Manicure Dip $45</ListGroup.Item>
								<ListGroup.Item>Polish Change Regular $15</ListGroup.Item>
								<ListGroup.Item>Polish Change Gel $55</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</div>
				<div className='col-12 col-md-6'>
					<Card className='mb-3'>
						<Card.Header><h4>Pedicures</h4></Card.Header>
						<Card.Body>
							<ListGroup variant="flush">
								<ListGroup.Item>Pedicure Regular $40</ListGroup.Item>
								<ListGroup.Item>Pedicure Gel $60</ListGroup.Item>
								<ListGroup.Item>Pedicure Deluxe $50</ListGroup.Item>
								<ListGroup.Item>Pedicure Deluxe Gel $70</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</div>
			</section>
        );
    }

}

export default Pricing;
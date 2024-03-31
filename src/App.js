import './App.css';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  return (
    <div className="container">

		<header class="d-flex flex-wrap justify-content-start py-3 mb-4 border-bottom">
			<nav class="navbar navbar-expand-md" aria-label="Fourth navbar example">
				<a class="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto" href="/">
					<Image src='images/PN-Nail-Salon-Logo.png' fluid style={{height: '75px'}} />
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarsExample04">
					{/* <ul class="navbar-nav me-auto mb-2 mb-md-0">
						<li class="nav-item">
						<a class="nav-link" href="/">Home</a>
						</li>
						<li class="nav-item">
						<a class="nav-link" href="#">Link</a>
						</li>
					</ul> */}
				</div>
			</nav>

		</header>

		<main>

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

		</main>

		<footer></footer>
		
    </div>
  );
}

export default App;

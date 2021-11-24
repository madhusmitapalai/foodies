import React from 'react'
import { Container,Row  } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import photo1 from '../images/img-3.jpg'
import photo2 from '../images/img-4.jpg'
import photo3 from '../images/img-5.jpg'
const ExploreFoods = () => {
    return (
        <div>
            <Container fluid className="p-4 explore-our-foods">
                <div className='card-section-header text-center'>
                    <h1>explore our foods</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting .</p>
                    <p> Various versions have evolved over the years, sometimes by accident.</p>
                </div>
                <Container className='card-section '>
                <Row>
                    <Col md={4} sm={10}>
                    <Card className='cards'>
                   <Card.Img variant="top" src={photo1} />
                        <Card.Body>
                         <Card.Text>
                         <span className='h5'>rainbow vegetable sandwich</span>
                         <span className='p'>time  15 -20 minutes | serves 1</span>
                         <span className='h2'>$10.5  </span>
                         </Card.Text>
                            <button className='buttons'>order now</button>
                       </Card.Body>
                </Card>
                    </Col>
                    <Col md={4} sm={10}>
                    <Card className='cards'>
                   <Card.Img variant="top" src={photo2} />
                        <Card.Body>
                         <Card.Text>
                         <span className='h5'>vegetable burger</span>
                         <span className='p'>time  15 -20 minutes | serves 1</span>
                         <span className='h2'>$15  </span>
                         </Card.Text>
                            <button className='buttons'>order now</button>
                       </Card.Body>
                </Card>
                    </Col>
                    <Col md={4} sm={10}>
                    <Card className='cards'>
                   <Card.Img variant="top" src={photo3} />
                        <Card.Body>
                         <Card.Text>
                         <span className='h5'>rainbow with fruit sandwich</span>
                         <span className='p'>time  15 -20 minutes | serves 1</span>
                         <span className='h2'>$14.5  </span>
                         </Card.Text>
                            <button className='buttons'>order now</button>
                       </Card.Body>
                </Card>
                    </Col>
                </Row>
                </Container>
            </Container>
        </div>
    )
}

export default ExploreFoods

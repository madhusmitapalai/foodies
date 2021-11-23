import React from 'react'
import { Container } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import img1 from '../images/review-1.jpg'
import img2 from '../images/review-2.jpg'
const Review = () => {
    return (
        <div>
            <Container  className='review'>
            <Carousel>
  <Carousel.Item>
  <Card>
    <img
      className="text-center carousel-img"
      src={img1}
      alt="Third slide"
    />
      <p>"far far away ,behind the word mountain ,far from the countries vokalia and there  live the blind texts ."</p>
      <h6>johnxf deo a web designer</h6>
    </Card>
  </Carousel.Item>
  <Carousel.Item>
  <Card>
    <img
      className="text-center carousel-img"
      src={img2}
      alt="Third slide"
    />
      <p>"far far away ,behind the word mountain ,far from the countries vokalia and there  live the blind texts ."</p>
      <h6>johnxf deo a web designer</h6>
    </Card>
  </Carousel.Item>
  <Carousel.Item>
  <Card>
  <Card.Img variant="top" src={img2}  className="text-center carousel-img"/>
  <Card.Body>
    <Card.Text>
    <p>"far far away ,behind the word mountain ,far from the countries vokalia and there  live the blind texts ."</p>
      <h6>johnxf deo a web designer</h6>
    </Card.Text>
  </Card.Body>
</Card>
    {/* <Card>
    <img
      className="text-center carousel-img"
      src={img1}
      alt="Third slide"
    />
      <p>"far far away ,behind the word mountain ,far from the countries vokalia and there  live the blind texts ."</p>
      <h6>johnxf deo a web designer</h6>
    </Card> */}
  </Carousel.Item>
</Carousel>
            </Container>
        </div>
    )
}

export default Review

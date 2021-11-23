import React from 'react'
import Home from './Home'
import { Container   
           ,Row ,Col} from 'react-bootstrap'

const Header = () => {
    return (
        <div>
        <Container fluid  className='main-header'>
        <Home/> 
                <Container >
                <Row className='header-row'>
            <Col md="6" sm="12" className='mt-5  col-first' >
                <div className='header-contex p-2'>
                    <h1>good food choices are good investment .</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div>
                        <button className='buttons'>order now  <i class="fas fa-box-open"></i></button>
                        <button className='buttons'>order now <i className="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </Col>
            <Col md="7" sm="12">
            </Col>
             </Row>
                </Container>
                </Container>
        </div>
    )
}

export default Header

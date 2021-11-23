import React from 'react'
import { Container ,Row ,Col } from 'react-bootstrap'
const Quetions = () => {
    return (
        <div>
            <Container className="quetions" >
            <h1 className='text-center'>frequently asked quetions</h1>
             <Row className='text-start p-3'>
                 <Col md={6} sm ={12}>
                     <h4>~ is foodies bread really  backed fresh each day ?</h4>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum .</p>
                     <h4>~ can i order your product online ?</h4>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum .</p>
                 </Col>
                 <Col md={6} sm={12}>
                 <h4>~ do you bake breds  containing animal fatsor products  ?</h4>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum .</p>
                     <h4>~ when are you openin a shop  me  ?</h4>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum .</p>
                 </Col>
             </Row>
            </Container>
        </div>
    )
}

export default Quetions

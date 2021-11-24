import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <div>
            <Container fluid className="text-center footer">
            <div className='d-flex text-div text-center justify-content-center'>
                <p> register</p>
                <p>forum</p>
                <p>affliate</p>
                <p>faq</p>
            </div>
                <div className='d-flex icon-div text-center justify-content-center'>
                <span><i className="fab fa-twitter"></i></span>
                <span><i className="fab fa-instagram"></i></span>
                <span><i className="fab fa-whatsapp"></i></span>
                <span><i className="fab fa-telegram-plane"></i></span>
                <span><i className="fab fa-facebook"></i></span>
                </div>
                <p>@2021 . foodies .alll right .reserved .</p>
            </Container>
        </div>
    )
}

export default Footer

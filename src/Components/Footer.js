import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Footer.css'

function Footer(){
    return(
        <footer>
            <Container fluid={true}>
                <Row className={'border-top justify-content-center p-3'}>
                    <Col className={'p-0 d-flex justify-content-center'} md={5}>
                        © 2020 Angeline's Personal Website by Angeline
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Footer.css'

function Footer(){
    return(
        <footer>
            <Container fluid={true}>
                <Row className={'border-top justify-content-between p-3'}>
                    <Col className="p-0 justify-content-start" md={1} sm={6}>
                        Angeline Wijaya
                    </Col>
                    <Col className={'p-0 d-flex justify-content-end'} md={5}>
                        This site is made by Angeline
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer
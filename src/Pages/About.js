import React from 'react';
import {Jumbotron, Container, Row,Col} from "react-bootstrap";
import '../css/About.css'

function About(){
    return (
        <Jumbotron fluid={true} className={'about-container p-3'} >
            <Container fluid>
                <h1>About Me</h1>
                <Row className={'justify-content-center'}>
                    <Col md={6}>
                        <p>
                            Hard working computer science student with 2+ years experience intern in big-scale projects.
                            Enthusiast in developing software that is maintainable and testable.
                            Always make software that helps the world become better.
                        </p>
                    </Col>
                </Row>

            </Container>
        </Jumbotron>
    )
}

export default About;
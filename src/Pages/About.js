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
                            Ever since I started to focus on coding on 2016, I found myself keep on wanting to learn more. I finally found something that keep the spark in me. I love the fact that i could create things and solving problem that I encountered in everyday life.
                        </p>
                        <p>
                            I first encountered software engineering when i took the class in my junior year. There is a bunch of theory that is taught in the class. But there is always this question hanging in my mind, When and where to implement this theory?
                        </p>
                        <p>
                            Until I start my internship in this startup that help me understand the importance of the software engineering knowledge. Since then my passion and curiosity in software engineering keeps on growing. Technology is limitless and I love to keep on learning and explore it. There are so many things that we could improved and built. And for this, I am very grateful to be a part of this world.
                        </p>
                    </Col>
                </Row>

            </Container>
        </Jumbotron>
    )
}

export default About;
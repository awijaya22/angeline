import React from 'react';
import {Container,Row} from 'react-bootstrap';

class HomePage extends React.Component {
    render(){
        return(
            <Container fluid={true} className={'justify-content-center'}>
                <Row className={'justify-content-center'}>
                    <h1>Hi! I am Angeline,</h1>
                </Row>
                <Row className={'justify-content-center'}>
                    <h1>Fresh Graduate Software Developer</h1>
                </Row>
            </Container>
        )
    }
}

export default HomePage
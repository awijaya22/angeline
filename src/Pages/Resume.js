import React from 'react';
import {Container,Row,Button} from 'react-bootstrap';
import '../css/Resume.css'

class Resume extends React.Component {
    render() {
        return(
            <Container fluid={true} className={'justify-content-center align-items-center resume-container'}>
                <Row className={'justify-content-center'}>
                    <h1>Thank you for the interest in my Resume</h1>
                </Row>
                <Row className={'justify-content-center'}>
                    <h1>Click the button below to download my resume</h1>
                </Row>
                <Row className={'justify-content-center mt-5'}>
                    <a href = {'/Resume.pdf'} download target="_blank" rel="noopener noreferrer">
                        <Button variant={'outline-dark'} size={'lg'}> Download Resume </Button>
                    </a>
                </Row>
            </Container>
        )
    }
}

export default Resume
import React from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import '../css/HomePage.css'
import linkedin from '../Media/images/linkedin-icon.svg';
import facebook from '../Media/images/facebook-icon.svg';
import github from '../Media/images/GitHub-Mark-64px.png';
import instagram from '../Media/images/240px-Instagram.png';
import youtube from '../Media/images/youtube.svg';
import myimage from '../Media/images/myimage.jpg';


class HomePage extends React.Component {
    render(){
        return(
            <Container fluid={true} className={'justify-content-center align-items-center homepage-container'}>
                <Row className={'justify-content-center align-items-center mb-5'}>
                    <Image src ={myimage} roundedCircle />
                </Row>
                <Row className={'justify-content-center'}>
                    <h1>Hi! I am Angeline,</h1>
                </Row>
                <Row className={'justify-content-center'}>
                    <h1>Fresh Graduate Software Developer</h1>
                </Row>
                <Row className={'justify-content-center mt-5'}>
                    <h1>Find Me At :</h1>
                </Row>
                <Row className={'justify-content-center align-items-center mt-5'}>
                    <Col xs={2} md={1} lg={1}>
                        <a href="https://​www.linkedin.com/in/angeline-wijaya-61a98215a"><Image src={linkedin}/></a>
                    </Col>
                    <Col xs={2} md={1} lg={1}>
                        <a href = 'https://www.facebook.com/awijaya22'> <Image src={facebook}/> </a>
                    </Col>
                    <Col xs={2} md={1} lg={1}>
                        <a href={'https://www.github.com/awijaya22'}><Image src={github}/></a>
                    </Col>
                    <Col xs={2} md={1} lg={1}>
                        <a href ='https://www.instagram.com/awijaya22'><Image src={instagram}/></a>
                    </Col>
                    <Col xs={2} md={1} lg={1}>
                        <a href ='https://www.youtube.com/channel/UCfdEPt1BrC_7L2hnIcwMpkQ?view_as=subscriber'><Image src={youtube}/></a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HomePage
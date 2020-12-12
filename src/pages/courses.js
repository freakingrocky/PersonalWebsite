import React from 'react'
import styled from '@emotion/styled'
import CPN from "../images/CPN.png"
import UOE from "../images/UOE.png"
import HX from "../images/HX.jpg"
import SO from "../images/SO.png"
import IX from "../images/IX.png"
import TAUIX from "../images/TAUIX.png"
import YALE from "../images/Yale.png"
import DU from "../images/DU.png"
import UOS from "../images/UOS.png"
import UOLRHU from "../images/UOLRHU.png"
import { CardDeck, Card, Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "bootstrap/dist/css/bootstrap.min.css"


const Heading = styled.h1`
font-size: 60px;
padding-top: 5px;
padding-bottom: 25px;`


const DIV = styled.div`
padding: 5px;`


const Home = styled.h2`
font-size: 30px;
padding-top: 15px;
padding-bottom: 15px;
background-image: linear-gradient(to bottom, #302b63 0%, rgba(245, 175, 25, 0) 100%);`


const CoursesDisplay = () => (
    <DIV>
    <div className="application">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Rocky's Courses</title>
            <link rel="canonical" href="http://freakingrocky.github.io/courses" />
        </Helmet>
    </div>
    <center><Link to="/"><Home>Go Back</Home></Link></center>
    <center><Heading>Online Courses I've Done</Heading></center><DIV>
    <Container>
    <CardDeck><Row><Col lg={3}>
                <a href="https://courses.edx.org/certificates/67135b2a444c4f42b1945be4a4c8fa00" target="_blank" rel="noreferrer noopener">
        <Card bg='dark' className='mb-3'>
            <Card.Img variant="top" src={HX} /><Card.Body>
            <Card.Title>CS50: CS50's Introduction to Computer Science</Card.Title>
            <Card.Text>by Harvard University on edX</Card.Text></Card.Body>
            <Card.Footer><small className="text-muted">Certificate Issued by edX</small></Card.Footer>
        </Card></a></Col>
                <Col lg={3}><a href="https://courses.edx.org/certificates/54bf6aa161ca4ea78df04c522fffb041" target="_blank" rel="noreferrer noopener">
        <Card bg='dark' className='mb-3'>
            <Card.Img variant="top" src={HX} /><Card.Body>
                        <Card.Title>CS50AI: CS50’s Introduction to Artificial Intelligence with Python</Card.Title>
                        <Card.Text>by Harvard University on edX</Card.Text></Card.Body>
            <Card.Footer><small className="text-muted">Certificate Issued by edX</small></Card.Footer>
        </Card></a></Col>
                <Col lg={3}><a href="https://credentials.edx.org/credentials/b0db3d8355aa44cba74cfd03c6c89c24/" target="_blank" rel="noreferrer noopener">
                    <Card bg='dark' className='mb-3'>
                        <Card.Img variant="top" src={HX} /><Card.Body>
                            <Card.Title>Computer Science for Artificial Intelligence</Card.Title>
                            <Card.Text>by Harvard University on edX</Card.Text></Card.Body>
                        <Card.Footer><small className="text-muted">Certificate Issued by edX</small></Card.Footer>
                    </Card></a></Col>
                <Col lg={3}><a href="https://github.com/freakingrocky/MLStanfordOnlineCoursera" target="_blank" rel="noreferrer noopener">
                    <Card bg='dark' className='mb-3'>
                        <Card.Img variant="top" src={SO} /><Card.Body>
                            <Card.Title>Machine Learning</Card.Title>
                            <Card.Text>by Stanford University on Coursera</Card.Text></Card.Body>
                        <Card.Footer><small className="text-muted">Certificate Issued by Coursera</small></Card.Footer>
                    </Card></a></Col></Row></CardDeck></Container></DIV>
            <DIV><Container><CardDeck>
            <Row>
                <Col lg={3}><a href="https://coursera.org/share/325f2e48ec4a8f05ccd552887317bf23" target="_blank" rel="noreferrer noopener">
                        <Card bg='dark' className='mb-3'>
                            <Card.Img variant="top" src={SO} /><Card.Body>
                                <Card.Title>Cryptography I</Card.Title>
                                <Card.Text>by Stanford University on Coursera</Card.Text></Card.Body>
                                <Card.Footer><small className="text-muted">Certificate Issued by Coursera</small></Card.Footer>
                        </Card></a></Col>
                <Col lg={3}><a href="https://courses.edx.org/certificates/c0812cf2e7d74fedb8cd4a82d88674f4" target="_blank" rel="noreferrer noopener">
                        <Card bg='dark' className='mb-3'>
                            <Card.Img variant="top" src={IX} /><Card.Body>
                            <Card.Title>Unlocking Information Security: Part Ⅰ</Card.Title>
                                <Card.Text>by Tel Aviv University/IsrealX on edX</Card.Text></Card.Body>
                                <Card.Footer><small className="text-muted">Certificate Issued by edX</small></Card.Footer>
                        </Card></a></Col>
                <Col lg={3}><a href="https://courses.edx.org/certificates/c9d6bfcf851a4bf99ce6d8c3781e4385" target="_blank" rel="noreferrer noopener">
                        <Card bg='dark' className='mb-3'>
                            <Card.Img variant="top" src={IX} /><Card.Body>
                            <Card.Title>Unlocking Information Security: Part ⅠⅠ</Card.Title>
                            <Card.Text>by Tel Aviv University/IsrealX on edX</Card.Text></Card.Body>
                            <Card.Footer><small className="text-muted">Certificate Issued by edX</small></Card.Footer>
                        </Card></a></Col>
                <Col lg={3}><a href="https://credentials.edx.org/credentials/6764e6b6bfa84db6a2a6bba0c669d213/" target="_blank" rel="noreferrer noopener">
                    <Card bg='dark' className='mb-3'>
                        <Card.Img variant="top" src={TAUIX} /><Card.Body>
                            <Card.Title>Unlocking Information Security</Card.Title>
                            <Card.Text>by Tel Aviv University/IsrealX on edX</Card.Text></Card.Body>
                        <Card.Footer><small className="text-muted">Certificate Issued by edX</small></Card.Footer>
                    </Card></a></Col>
            </Row></CardDeck></Container></DIV>
        <DIV><Container><CardDeck>
            <Row>
                <Col lg={3}><a href="https://coursera.org/share/4aca6afe9d6f6515bbf3881b717a3820" target="_blank" rel="noreferrer noopener">
                    <Card bg='dark' className='mb-3'>
                        <Card.Img variant="top" src={UOE} /><Card.Body>
                            <Card.Title>Introduction to Philosophy</Card.Title>
                            <Card.Text>by The University of Edinburgh on Coursera</Card.Text></Card.Body>
                        <Card.Footer><small className="text-muted">Certificate Issued by Coursera</small></Card.Footer>
                    </Card></a></Col>
                <Col lg={3}><a href="https://coursera.org/share/ca0c71c98f6e2f870f57d3b6029e242c" target="_blank" rel="noreferrer noopener">
                    <Card bg='dark' className='mb-3'>
                        <Card.Img variant="top" src={YALE} /><Card.Body>
                            <Card.Title>Introduction to Psychology</Card.Title>
                            <Card.Text>by Yale University on Coursera</Card.Text></Card.Body>
                        <Card.Footer><small className="text-muted">Certificate Issued by Coursera</small></Card.Footer>
                    </Card></a></Col>
                <Col lg={3}><a href="https://coursera.org/share/fead4be17411f887690efe9843a02d7d" target="_blank" rel="noreferrer noopener">
                    <Card bg='dark' className='mb-3'>
                        <Card.Img variant="top" src={DU} /><Card.Body>
                            <Card.Title>Data Science Math Skills</Card.Title>
                            <Card.Text>by Duke University on Coursera</Card.Text></Card.Body>
                        <Card.Footer><small className="text-muted">Certificate Issued by Coursera</small></Card.Footer>
                    </Card></a></Col>
                <Col lg={3}><a href="https://coursera.org/share/71efb29813f11617cf897fbb2484adbe" target="_blank" rel="noreferrer noopener">
                    <Card bg='dark' className='mb-3'>
                        <Card.Img variant="top" src={UOS} /><Card.Body>
                            <Card.Title>Introduction to Calculus</Card.Title>
                            <Card.Text>by The University of Sydney on Coursera</Card.Text></Card.Body>
                        <Card.Footer><small className="text-muted">Certificate Issued by Coursera</small></Card.Footer>
                    </Card></a></Col>
            </Row></CardDeck></Container></DIV>
        <DIV><Container><CardDeck>
            <Row>
                <Col lg={3}><a href="https://coursera.org/share/360b2ef77de2fbe3e899fa869b5b17cd" target="_blank" rel="noreferrer noopener">
                    <Card bg='dark' className='mb-3'>
                        <Card.Img variant="top" src={UOLRHU} /><Card.Body>
                            <Card.Title>Information Security: Context and Introduction</Card.Title>
                            <Card.Text>by University of London/Royal Holloway University of London on Coursera</Card.Text></Card.Body>
                        <Card.Footer><small className="text-muted">Certificate Issued by Coursera</small></Card.Footer>
                    </Card></a></Col>
                    <Col lg={3}><a href="https://coursera.org/share/b7a67afaf10d53b9f388cfcc2a31436c" target="_blank" rel="noreferrer noopener">
                    <Card bg='dark' className='mb-3'>
                        <Card.Img variant="top" src={CPN} /><Card.Body>
                            <Card.Title>Language Classification with Naive Bayes in Python</Card.Title>
                            <Card.Text>by Coursera Project Network on Coursera</Card.Text></Card.Body>
                        <Card.Footer><small className="text-muted">Certificate Issued by Coursera</small></Card.Footer>
                    </Card></a></Col>
                <Col lg={3}><a href="https://coursera.org/share/2e7c24e3c6026c658eca25b260642940" target="_blank" rel="noreferrer noopener">
                    <Card bg='dark' className='mb-3'>
                        <Card.Img variant="top" src={CPN} /><Card.Body>
                            <Card.Title>Advanced Game Development Using PyGame</Card.Title>
                            <Card.Text>by Coursera Project Network on Coursera</Card.Text></Card.Body>
                        <Card.Footer><small className="text-muted">Certificate Issued by Coursera</small></Card.Footer>
                    </Card></a></Col>
                <Col lg={3}><a href="https://coursera.org/share/2141faa808cdf20673fce5292b404aed" target="_blank" rel="noreferrer noopener">
                    <Card bg='dark' className='mb-3'>
                        <Card.Img variant="top" src={CPN} /><Card.Body>
                            <Card.Title>Detecting COVID-19 with Chest X-Ray using PyTorch</Card.Title>
                            <Card.Text>by Coursera Project Network on Coursera</Card.Text></Card.Body>
                        <Card.Footer><small className="text-muted">Certificate Issued by Coursera</small></Card.Footer>
                    </Card></a></Col>
            </Row></CardDeck></Container></DIV>
    </DIV>
)

export default CoursesDisplay


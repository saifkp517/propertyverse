import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../app/components/Navbar'
import { Card, Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function AssetMonk() {
    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col-sm">
                    <Card>
                        <Card.Header>
                            <h3>THE LANDING PHASE <span className="badge badge-success">Live</span></h3>
                            <button className='btn btn-dark'>Express Interest</button>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Navbar</Card.Title>
                            <div className="card">
                                <div className="card-header">
                                    <ul className="nav nav-tabs card-header-tabs" id="myTab">
                                        <li className="nav-item">
                                            <Link className="nav-link active" id="tab1" data-toggle="tab" href="#content1">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="tab2" data-toggle="tab" href="#content2">Documents</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="tab2" data-toggle="tab" href="#content2">Expected Earnings</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="tab2" data-toggle="tab" href="#content2">Bank Details</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="content1">
                                            <Container>
                                                <Row>
                                                    <Col md={3}>
                                                        <strong>Fund Start Date:</strong>
                                                    </Col>
                                                    <Col md={3}>
                                                        <strong>Fund End Date:</strong>
                                                    </Col>
                                                    <Col md={3}>
                                                        <strong>Min Investment:</strong>
                                                    </Col>
                                                    <Col md={3}>
                                                        <strong>Lock In Period:</strong>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={3}>End Date Value</Col>
                                                    <Col md={3}>End Date Value</Col>
                                                    <Col md={3}>Min Investment Value</Col>
                                                    <Col md={3}>Lock In Period Value</Col>
                                                </Row>
                                                <Row>
                                                    <Col md={3}>
                                                        <strong>Tenure:</strong>
                                                    </Col>
                                                    <Col md={3}>
                                                        <strong>Issue Size:</strong>
                                                    </Col>
                                                    <Col md={3}>
                                                        <strong>Expected IRR:</strong>
                                                    </Col>
                                                    <Col md={3}>
                                                        <strong>Fixed Returns:</strong>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={3}>Tenure Value</Col>
                                                    <Col md={3}>Issue Size Value</Col>
                                                    <Col md={3}>Expected IRR Value</Col>
                                                    <Col md={3}>Fixed Returns Value</Col>
                                                </Row>
                                            </Container>
                                            <Image
                                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=sean-pollock-PhYq704ffdA-unsplash.jpg"
                                                alt="Card Image"
                                                className="img-fluid mt-4"
                                                height={100}
                                                width={100}
                                                layout='responsive'
                                            />
                                            <Card.Text>
                                                <strong>Description:</strong>
                                                This is the description of the card. You can add more details and
                                                information here.
                                            </Card.Text>
                                        </div>
                                        <div className="tab-pane fade" id="content2">
                                            <h5 className="card-title">Tab 2 Content</h5>
                                            <p className="card-text">Content for the second tab goes here.</p>
                                        </div>
                                        <div className="tab-pane fade" id="content3">
                                            <h5 className="card-title">Tab 3 Content</h5>
                                            <p className="card-text">Content for the third tab goes here.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </Card.Body>
                    </Card>
                </div>
                <div className="col-sm">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Returns Calculator</h5>
                        </div>
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2">Sliders</h6>
                            <br />
                            <br />
                            <div className="form-group">
                                <h6>Total Investment</h6>
                                <div className="row">
                                    <p className='text-center'>450000</p>
                                    <input type="range" className="form-control-range" id="slider1" min="0" max="100" style={{ width: "75%" }} /> &nbsp;  &nbsp; &nbsp;<input type="text" className="form-control border-dark" aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={{ width: "15%" }} />
                                </div>
                            </div>
                            <div className="form-group">
                                <h6>Assured Return Rate (P.A)</h6>
                                <div className="row">
                                    <p className='text-center'>450000</p>
                                    <input type="range" className="form-control-range" id="slider1" min="0" max="100" style={{ width: "75%" }} /> &nbsp;  &nbsp; &nbsp;<input type="text" className="form-control border-dark" aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={{ width: "15%" }} />
                                </div>
                            </div>
                            <div className="form-group">
                                <h6>Time Period</h6>
                                <div className="row">
                                    <p className='text-center'>450000</p>
                                    <input type="range" className="form-control-range" id="slider1" min="0" max="100" style={{ width: "75%" }} /> &nbsp;  &nbsp; &nbsp;<input type="text" className="form-control border-dark" aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={{ width: "15%" }} />
                                </div>
                            </div>

                            <h6 className="card-subtitle mt-4 mb-2">Grid Information</h6>
                            <div className="row">
                                <div className="col-md-4">
                                    <strong>Investment Amount:</strong>
                                </div>
                                <div className="col-md-4">
                                    <strong>Est. Returns:</strong>
                                </div>
                                <div className="col-md-4">
                                    <strong>Total Value:</strong>
                                </div>
                            </div>

                            <h6 className="card-subtitle mt-4 mb-2">Doughnut Chart</h6>
                            <canvas id="doughnutChart" width="400" height="400"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
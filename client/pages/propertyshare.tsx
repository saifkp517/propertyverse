import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../app/components/Navbar';
import '../public/propertyshare.css'
import Image from 'next/image'
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap'
import Link from 'next/link';


export default function PropertyShare() {

    useEffect(() => {

    }, [])

    return (
        <div>

            <header>
                <Navbar />
            </header>
            <div className="container mt-4">
                <h1 className="text-center">Overview Page</h1>
                <br />
                <div className="row">
                    <div className="col-md-8">
                        <Carousel>
                            <Carousel.Item>
                                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=sean-pollock-PhYq704ffdA-unsplash.jpg" height={100} width={180} layout="responsive" alt="Subimage 1" className="Image-fluid mb-3" />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=sean-pollock-PhYq704ffdA-unsplash.jpg" height={100} width={180} layout="responsive" alt="Subimage 1" className="Image-fluid mb-3" />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=sean-pollock-PhYq704ffdA-unsplash.jpg" height={100} width={180} layout="responsive" alt="Subimage 1" className="Image-fluid mb-3" />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <br />
                    <div className="col-md-4">
                        {/* <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        Address
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">123 Main Street</h5>
                                        <p className="card-text">City, State</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        Rental Yield
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">8%</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        Returns
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">₹12,000/year</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        Price
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">₹150,000</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        Location
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">City, State</h5>
                                        <p className="card-text">Country</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <button className="btn btn-primary">FULLY FUNDED</button>
                        </div> */}
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Property Information</h5>
                                <p className="card-text">
                                    <strong>Address:</strong> 123 Main Street <br />
                                    <strong>Rental Yield:</strong> 5% <br />
                                    <strong>Returns:</strong> 10% <br />
                                    <strong>Price:</strong> $250,000 <br />
                                    <strong>Location:</strong> Beautiful City <br />
                                </p>
                                <Link href="#" className="btn btn-primary">Fully Funded</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <br />
                <br />

                <div className="row mt-8">
                    <h4> Investment Returns</h4>


                    <h6>Investment Amount: <span>₹ 1,48,09,133</span></h6>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Monthly Cash Flow</h5>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" style={{ width: "40%" }}>40%</div>
                                    <div className="progress-bar bg-success" style={{ width: "20%" }}>60%</div>
                                </div>
                                <div className="progress-info">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                                <p>Monthly Rent <br />₹ 1,48,09,133</p>
                                            </div>
                                            <div className="col-sm">
                                                <p>Property Management Fee <br />₹ 1,48,09,133</p>
                                            </div>
                                            <div className="col-sm">
                                                <p>10% TDS <br />₹ 1,48,09,133</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body calender">
                                <h5 className="card-title">Financial Model</h5>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Day 0</th>
                                            <th scope="col">Year 1</th>
                                            <th scope="col">Year 2</th>
                                            <th scope="col">Year 3</th>
                                            <th scope="col">Year 4</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Investment</th>
                                            <td>19,74,55,104</td>
                                            <td></td>
                                            <td>3,02,70,73,194</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Rent</th>
                                            <td>19,74,55,104</td>
                                            <td></td>
                                            <td></td>
                                            <td>3,02,70,73,194</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Enhanced Yeild</th>
                                            <td>19,74,55,104</td>
                                            <td></td>
                                            <td></td>
                                            <td>3,02,70,73,194</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Sale Value</th>
                                            <td>19,74,55,104</td>
                                            <td></td>
                                            <td></td>
                                            <td>3,02,70,73,194</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Total</th>
                                            <td>19,74,55,104</td>
                                            <td></td>
                                            <td></td>
                                            <td>3,02,70,73,194</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="container">

                                    <div className="row">
                                        <h5 className="card-title text-center">Capital Appreciation</h5>
                                        <input type="range" className="form-range" id="customRange1" />
                                        <div className="col-sm">
                                            <p>4%</p>
                                        </div>
                                        <div className="col-sm">
                                            <p>9.5%</p>
                                        </div>
                                        <div className="col-sm">
                                            <p>15%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Tenant Details</h5>
                                <div className="row">
                                    <div className="col-sm">
                                        <h6>Name</h6>
                                        <h5>US-Based Tech Company</h5>
                                    </div>

                                    <div className="col-sm">
                                        <h6>Country</h6>
                                        <h5>USA</h5>
                                    </div>
                                </div>
                                <br />
                                <h6>Description</h6>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod tempore architecto illum iure, deserunt quam debitis quasi eaque voluptatem similique, maiores necessitatibus error nesciunt deleniti et iusto voluptatum veritatis enim.</p>

                                <br />
                                <h6>Time Period</h6>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm">
                                            <div className="row">
                                                <div className="col-">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                    </svg>
                                                </div>
                                                <div className="col-">
                                                    <span>Lease Start Date<br /><h6>01 Apr 2023</h6></span>
                                                </div>
                                            </div>



                                        </div>
                                        <div className="col-sm">
                                            <div className="row">
                                                <div className="col-">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                    </svg>
                                                </div>
                                                <div className="col-">
                                                    <span>Lease Start Date<br /><h6>01 Apr 2023</h6></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm">
                                            <div className="row">
                                                <div className="col-">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                    </svg>
                                                </div>
                                                <div className="col-">
                                                    <span>Lease Start Date<br /><h6>01 Apr 2023</h6></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <h6>Tenant Highlights</h6>
                                <div className="col-sm">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span> <b>1,21,232 SF</b> <br /><sub>TOTAL AREA</sub></span>
                                                </div>
                                                <div className="col">
                                                    <span> <b>96</b> <br /><sub>RENT PER SF</sub></span>

                                                </div>
                                                <div className="col">
                                                    <span> <b>9 YEARS</b> <br /><sub>LEASE PERIOD</sub></span>
                                                </div>
                                                <div className="col">
                                                    <span> <b>15%</b> <br /><sub>ESCALATION</sub></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Financial Model</h5>
                                <br />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate eaque corporis debitis illo doloremque praesentium laudantium ratione autem eum eligendi, esse molestiae nulla rem. Nostrum debitis eos expedita pariatur praesentium. lore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


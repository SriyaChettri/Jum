import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input ,Button, Col } from 'reactstrap';



function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className=" row ">
                <div className="col-12 col-md-4 m-0">
                    <p><strong>Subscribe to our newsletter for offers, discounts & more..!</strong></p>
                    <Form>
                    <FormGroup row>
                                <Col md={8}>
                                    <Input type="text" id="name" name="name" placeholder="Name" />
                                   
                                </Col>
                    </FormGroup>
                    <FormGroup row>
                                <Col md={8}>
                                    <Input type="email" id="email" name="email" placeholder="Email"/>
                                   
                                </Col>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">Submit</Button>
                    </Form>
                </div>
            <div className="col-12 col-md-4 m-0 "style={{ textAlign:'center'}}>   
             
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/home'><span className="item">Home</span></Link></li>
                    <li><Link to='/aboutus'><span className="item">About Us</span></Link></li>
                    <li><Link to='/faq'><span className="item">FAQ</span></Link></li>
                    <li><Link to='/contactus'><span className="item">Contact Us</span></Link></li>
                    <li><Link to='/earn'><span className="item">Lease&Earn</span></Link></li>
                
                    </ul>
                </div>
                
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google " className="fa1" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" className="fa1" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" className="fa1" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" className="fa1" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" className="fa1" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" className="fa1" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
           
               
            </div>
          <div className="row ">
              <div className="col-12 col-md-12 " style={{ textAlign:'center'}}>
             
                  <p>© Copyright 2020 JumBike</p>
                  </div>
          </div>
            
        </div>
    </div>
    )
}

export default Footer;
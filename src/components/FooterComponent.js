

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
                    <Form action="connect.php" method="post">
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
             
                    <h5><b>Links</b></h5>
                    <ul className="list-unstyled">
                    <li><Link to='/home'><span className="item">Home</span></Link></li>
                    <li><Link to='https://docs.google.com/forms/d/1pwddTogAgISysCbxv5wTfEfhyvnXB-0FULEXXODIQog/viewform?pli=1&edit_requested=true'><span className="item">Lease&Earn</span></Link></li>
                    <li><Link to='/contactus'><span className="item">Contact Us</span></Link></li>
                    <li><Link to='/aboutus'><span className="item">About Us</span></Link></li>
                    <li><Link to='/faq'><span className="item">Help</span></Link></li>
                   
                    
                
                    </ul>
                </div>
                
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <h5><b>Follow Us</b></h5>
                        
                        <a className="btn btn-social-icon btn-facebook" className="fa1" href="https://www.facebook.com/JUM-BIKE-101002821791536/"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" className="fa1" href="https://www.linkedin.com/company/jum-bike"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-instagram" className="fa1" href="https://www.instagram.com/invites/contact/?i=1nbf2x5bpydlg&utm_content=j3lb2bt"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon" className="fa1" href="mailto: ebike.jum@gmail.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
           
               
            </div>
          <div className="row ">
              <div className="col-12 col-md-12 " style={{ textAlign:'center'}}>
             
                  <p>© Copyright 2020 JumBike</p>
                  <p>Created by Sriya & Shimran</p>
                  </div>
          </div>
            
        </div>
    </div>
    )
}

export default Footer;
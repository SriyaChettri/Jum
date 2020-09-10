import React, { Component } from 'react';
import {Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import MapSection from './MapComponent';

const required = (val) => val && val.length; //value grater than 0
const maxLength = (len) => (val) => !(val) || (val.length <= len); //ensures that the len of the value is less than or eqaul to the specified parameter 
const minLength = (len) => (val) => val && (val.length >= len); // len is greater than or equal to len
const isNumber = (val) => !isNaN(Number(val)); //check num
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val); //check that the entered val is email


const location = {
    address: 'Sikkim Manipal Institude of Technology',
    lat:27.176147,
    lng:88.528732
  }
class Contact extends Component {
    constructor(props) {
        super(props);
      
        this.handleSubmit = this.handleSubmit.bind(this);
     
    }
   

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        
    }
  
   

    render() {
        return(
           <div className="container">
               <div className="text2">
                   <br/>
                   <br/>
               <h1 style={{color:"#e6ac00"}}><b>Contact us</b></h1>
               <p>We are all ears for feedback, suggestions, partnerships & oppurtunities.</p>
               </div>
                 <div className="row row-content">
                   <div className="col-12 col-md-6 m-0">
                        <h3>Send us your message here:</h3>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                           
                            <Row className="form-group">
                             
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Enter Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(20)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 20 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(10), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 10 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                              
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control" 
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                                 /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                             
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="8"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                   </div>

                   <div className="col-12 col-md-6 m-0">
                   <MapSection location={location} zoomLevel={17} /> 
                        
               </div>
               </div>

           </div>
        );
    }
}

export default Contact;
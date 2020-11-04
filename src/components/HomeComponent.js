import React from 'react';
import { Card, CardImg, CardTitle} from 'reactstrap';
import Intro from './IntroComponent';
import {  Modal, ModalHeader, ModalBody,Button } from 'reactstrap';

  function RenderHomeItem1({test}){ 
    return (
      <Card className="card1"  width="50%">
          <div className="text2">
            <CardImg  src={test.image} style={{width:'150px', height:'200px'}} alt={test.name}/>
            <CardTitle><b>{test.name}</b></CardTitle>  
            <p>{test.feedback}</p>
          </div>
      </Card>
    ); 
   }
   

const Home = (props)=> {  
        const home=props.testimonals.map((test) => {
            return (
              <div key={test.id} className="col-12 col-md-4 m-0">
                <RenderHomeItem1 test={test}/>
              </div>
             
            );
        });
   
        return(
          <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 m-0 ">
          <br/>
          <br/>
                  <Intro/>
                  <br/>
                  <br/>
                  </div>
                  </div>
          <div className="container ">
   
          
           
                   
                    <h1 className="text2 "><b>Here's how to <span style={{color:"#e6ac00"}}>JUM</span></b></h1>
                    <p className="text2">Take a deep breath. Imagine a better world. And, go JUM.</p>
                   
                   
                      <div className="row row-content">
                        <div calssName="col-12 col-md-6 ">
                          <img src="assets/images/step1.gif" width="520px"className="img-thumbnail"style={{border:"0px"}} />
                        </div>
                        <div className="col-12 col-md-6">
                          <h3 style={{color:"#e6ac00"}}><b>STEP 1.</b></h3>
                          <p>Download the JUM app from the Appstore or Playstore</p>
                          <p>Look out for the closest bike/scooter near you or locate the jum dock nearby.</p>
                        </div>
                      </div>
                      <div className="row row-content">
                        <div className="col-12 col-md-6">
                        <img  src="assets/images/scan.gif" className="img-thumbnail"style={{border:"0px"}}/>
                        
                        </div>
                        <div className="col-12 col-md-6">
                        <h3 style={{color:"#e6ac00"}}><b>STEP 2.</b></h3>
                       
                       <p>Scan the QR Code in the vehicle to unlock</p>
                       <p>Don't wanna scan. No problem. Type the QR code number in the vehicle to unlock.</p>
                          
                        </div>
                      </div>
                      <div className="row row-content">
                      <div className="col-12 col-md-6">
                      <img src="assets/images/step3.jfif" className="img-thumbnail"style={{border:"0px"}}/>
                      </div>

                      <div className="col-12 col-md-6">
                        <h3 style={{color:"#e6ac00"}}><b>STEP 3.</b></h3>
                        <p>Enjoy the JUM ride. Feel the thrill. Follow the trafffic rules</p>
                        <p>Park responsibly & lock the smartlock to end the ride.</p>
                        <p>Park preferably at the JUM dock, so other riders can locate vehicles easily!</p>
                      </div>
                      </div>
                      </div>
                      <div className="container text-center shad"style={{background:"white",color:"black"}}>
                        <div className="row" >
                          <div className="col-12 col-md-6 align-self-center" >
                          
                            <h3 style={{color:"#e6ac00"}}>Join the movement !</h3>
                            <p>World without pollution and 
                            traffic jams. We at jum are hustling to make this possible.</p>
                            <p>We integrated Smartlock IOT + Electric Bikes & Kick-Scooters + a ride sharing application, so that you can be a superhero and save your town and city from the evils of pollution & traffic jams.</p>
                            <p>Join the movement on tiktok & instagram : #jamfreejum </p>
                          </div>
                          <div className="col-12 col-md-6">
                          <img src="assets/images/new1.gif" className="img-thumbnail"style={{border:"0px"}}/>
                        </div>
                        </div>
                        
                      </div>
                      <div>
                        
                        </div>
                     
                     
                     
                  
                                    
                      <br/>
                      <br/>
                   <h1 className='text 'style={{color:"#e6ac00"}}><b>Testimonals</b></h1>
                            <p className='text2'>We appreciate your feedback.Here's what our riders have to say :</p>
                   
                    <div className="row">
                           {home}
                           
                    </div>
                    <br/>
                    <br/>
                  <span>
                    <br/>
                    <br/>
                    <br/>
                  </span>
                </div>
               
        );
      }
  
export default Home;


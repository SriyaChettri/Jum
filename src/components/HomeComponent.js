import React from 'react';
import { Card, CardImg, CardBody,CardText,CardTitle} from 'reactstrap';
import Caro from './CarouselComponent';


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
          <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12 m-0 ">
          <br/>
                  <Caro/>
                  <br/>
                  <br/>
                  </div>
                  </div>
          <div className="container ">
   
          
           
                   
                    <h1 className="text2 "><b>Here's how to <span style={{color:"#e6ac00"}}>JUM</span></b></h1>
                    <p className="text2">Take a deep breath. Imagine a better world. And, go JUM.</p>
                   
                   
                      <div className="row row-content">
                        <div calssName="col-12 col-md-6 ">
                          <img src="assets/images/step1.gif" width="550px"className="img-thumbnail"style={{border:"0px"}} />
                        </div>
                        <div className="col-12 col-md-6">
                          <h3 style={{color:"#e6ac00"}}><b>STEP 1.</b></h3>
                          <p>Download the JUM app from the Appstore or Playstore</p>
                          <p>Look out for the closest bike/scooter near you or locate the jum dock nearby.</p>
                        </div>
                      </div>
                      <div className="row row-content">
                        <div className="col-12 col-md-6 ">
                        <img  src="assets/images/scan.gif" className="img-thumbnail"style={{border:"0px"}}/>
                        
                        </div>
                        <div className="col-12 col-md-6">
                        <h3 style={{color:"#e6ac00"}}><b>STEP 2.</b></h3>
                       
                       <p>Scan the QR Code in the vehicle to unlock</p>
                       <p>Don't wanna scan. No problem. Type the QR Codenumber in the vehicle to unlock.</p>
                          
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
                      <div className="container-fluid text-center shad"style={{background:"#f2f2f2",color:"black"}}>
                        <div className="row" >
                          <div className="col-12 col-md-6 align-self-center" >
                          
                            <h3 style={{color:"#e6ac00"}}>Join the movement !</h3>
                            <p>John Lennon once imagined a world without pollution and 
                            traffic jams. We at jum are hustling to make that possible.</p>
                            <p>We integrated Smartlock IOT + Electric Bikes & Kick-Scooters + a ride sharing application, so that you can be a superhero and save your town and city from the evils of pollution & traffic jams.</p>
                            <p>Join the movement on tiktok & instagram : #jamfreejum </p>
                          </div>
                          <div className="col-12 col-md-6">
                          <img src="assets/images/new1.gif" className="img-thumbnail"style={{border:"0px"}}/>
                        </div>
                        </div>
                      </div>
                      <br/>
                      <br/>
                   <h1 className='text 'style={{color:"#e6ac00"}}><b>Testimonials</b></h1>
                            <p className='text2'>We love your feedback and work on them. Here's what our riders have to say :</p>
                   
                    <div className="row">
                           {home}
                    </div>
                    <br/>
                    <br/>
                    <div className="row">
                      <div className="col-12 col-md-3 m-0 "></div>
                    <div className="col-12 col-md-5 m-0  shad " >
                    
                      <h1 style={{color:"#e6ac00"}}className='text '>Pricing</h1>
                    <Card >
                      <CardImg top width="100%" height="auto"src="/assets/images/pricingP.png" alt="Card image cap" />
                      <CardBody>
                        <CardText className="text2">Just top up the wallet directly from your debit/credit card and you're ready to JUM. No hold charges, no hassles! We use Stripe for payment processing, so be assured that your money is safe and protected from fraud.</CardText>
                      </CardBody>
                     
                    </Card>
                  
                  </div>
                  <div className="col-12 col-md-3 m-0 "></div>
                  </div>
                  <span>
                    <br/>
                    <br/>
                    <br/>
                  </span>
                </div>
               
        );
      }
  
export default Home;


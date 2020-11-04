import React, { Component } from 'react';
class Intro extends Component {

  render() {
    return(
<div className="container shad "style={{background:"white"}}>

<div className="row" >
  <div className="col-12 col-md-12" >
  
    <h2 style={{textAlign:"center"}}><b><span style={{color:"#e6ac00"}}>JUM</span> BIKE</b></h2>
    <p style={{textAlign:"center"}}>When in doubt. Pedal it out.</p>
  </div>
  </div>
  <div className="row">
  <div className="col-12 col-md-3"></div>
  <div className="col-12 col-md-6">
  <img src="assets/images/Bic.png" className="img-thumbnail "style={{border:"0px",paddingLeft:"50px"}}/>
  </div>
  <div className="col-12 col-md-3"></div>
</div>
</div>
                      
                     
    );
}
}
export default Intro;


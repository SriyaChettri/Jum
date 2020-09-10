import React from 'react';
import { Card, CardImg, CardTitle} from 'reactstrap';


  function RenderAboutItems({abt}){
    return (
      <Card className="card1"  width="50%" >
          <div className="container">
              <div className="row row-content">
                  <div className="col-12 col-md-6 m-0">
            <CardImg className="image-fluid" src={abt.image}  alt={abt.name} />
            </div>
            <div className="col-12 col-md-6 m-0">
            <CardTitle><b>{abt.name}</b></CardTitle>  
            <p>{abt.desp}</p>
            <p>{abt.desp2}</p>
            </div>
            </div>
          </div>
      </Card>
              
    ); 
   }
   

const About = (props)=> {  
        const about=props.aboutitems.map((abt) => {
            return (
              <div key={abt.id} className="col-12 col-md-12 m-0">
                <RenderAboutItems abt={abt}/>
              </div>
             
            );
        });
   
        return(
          <div className="container">
                     <div className=" row ">
                       <div className="text-center">
                         <br/>
                         <br/>
                    <h1 style={{color:"#e6ac00"}}><b>About our company</b></h1>
                    <p>JUM is an ambitious place but a humble one too. If you like solving hard & fundamental problems facing common people and want to solve it at scale using tech, jum.bike is the place to be.</p>
                    </div>
                    </div>
                    <div className="row">
                           {about}
                    </div>
                </div>
               
        );
      }
  
export default About;


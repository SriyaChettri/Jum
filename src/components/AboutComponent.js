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
                  <div className="container shad "style={{background:"white"}}>
                    <p>2020 came as a wake up call to all human beings and made us rethink our core values. JUM bike is our brain child which was born as an idea to save environment by reducing carbon emissions and also decrease the financial pressure among public, as people can now enjoy rides whenever they want, without actually owning a  vehicle. The idea was fueled with 4 electrical bikes running in our campus which received an amazing Response.</p>
                  </div>
                    </div>
                    </div>
                    <div className="row">
                           {about}
                    </div>
                </div>
               
        );
      }
  
export default About;


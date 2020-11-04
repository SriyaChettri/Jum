import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Faq from './FaqComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps= state =>{
    return {
      testimonals: state.testimonals,
      aboutitems: state.aboutitems
    }
}
class Main extends Component{

  constructor(props){
    super(props);
  }

 
  render(){

    return(
      
      <div>
     <Header/>
     <Switch>
              
              <Route exact path="/home" component={() => <Home testimonals={this.props.testimonals} />}/>
              <Route exact path="/faq" component={Faq}/>
              <Route exact path="/aboutus" component={() => <About aboutitems={this.props.aboutitems} />}/>
              <Route exact path="/contactus" component={Contact}/>
              <Redirect to="/home" />
          </Switch>
       <Footer/>
     </div>
    );
  }
}


export default withRouter(connect(mapStateToProps)(Main));

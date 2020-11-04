import React, { Component } from 'react';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,ModalHeader,Modal,ModalBody,Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isNavOpen: false,
        isModalOpen: false
        };
        
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      
    render() {
        return(
            <div>
                
                <Navbar light  expand="md"className="shad">
                  
                    <div className="container">
                  
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto "href="/"><img src='assets/images/jumbike.jpg' height="70" width="70" alt='Jum Bike' className="rounded-circle"/></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar >
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa fa-sm" style={{color:"black"}}><b className="item"> Home</b> </span></NavLink>
                            </NavItem>
                          
                                <NavItem>
                            <a  className="nav-link" href="https://docs.google.com/forms/d/1pwddTogAgISysCbxv5wTfEfhyvnXB-0FULEXXODIQog/viewform?pli=1&edit_requested=true">
                            <span className="fa fa fa-sm"style={{color:"black"}}><b className="item"> Lease & Earn</b></span></a>
                                </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa fa-sm"style={{color:"black"}}><b className="item"> Contact Us</b></span></NavLink>
                            </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa fa-sm"style={{color:"black"}}> <b className="item"> About Us</b></span></NavLink>
                            </NavItem>
                                <NavItem>
                                <NavLink className="nav-link"  to='/FAQ'><span className="fa fa fa-sm"style={{color:"black"}}><b className="item"> Help</b></span></NavLink>
                            </NavItem>
                            
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem >
                                <Button outline onClick={this.toggleModal} >
                                    <span className="fa fa-sign-in fa-lg"></span> Download App </Button>
                                </NavItem>
                            </Nav>
                            </Collapse>
                            
                            <Nav className="ml-auto" navbar>
                            <NavItem >
                            <img src="assets/images/associa.jpeg" className="img-thumbnail "style={{border:"0px",width:"200px",height:"70px"}}/>
                            </NavItem>
                            </Nav>
                    </div>

                </Navbar>
                   
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Download App</ModalHeader>
                    <ModalBody>
                    <a href="https://play.google.com/store/apps/details?id=com.opolislabs.jumrides">Andriod</a>
                    <br/>
                    <a href="https://www.apple.com/app-store/">iOS</a>
                    </ModalBody>
                     </Modal>
            </div>
        );
    }
}

export default Header;
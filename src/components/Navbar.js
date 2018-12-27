import React, { Component } from 'react';
import {HashRouter } from 'react-router-dom'
import {Link, Redirect} from 'react-router-dom'
import {Input, Button, Fa, Modal, ModalBody, ModalFooter } from 'mdbreact';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    
    } from 'reactstrap';
import './Navbar.css';
import {connect} from 'react-redux'  
import * as users from '../Reducers/userdata';


class Header extends Component {
    
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          modal: false,
          isOpen: false,
          email : "",
          password : ""
        };
        this.togglelogin = this.togglelogin.bind(this);
      }
      onChange = e => {
        this.setState ({
          [e.target.name] : e.target.value
        })
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      togglelogin() {
        this.setState({
          modal: !this.state.modal
        });
      }
      checkUserLogIn = () => {
        if((this.state.email === users.admin.email && this.state.password === users.admin.password) ||
          (this.state.email === users.user.email && this.state.password === users.user.password)
        ) {
         return true
        }else {
          alert('please to verify your email or pasword')
          return false }
      }
      render() {
        console.log('connected user value',this.props.connectedUser)
        return (
         
          <div >
            <Navbar color="light" fixed={`top`} light expand="md">
             
              <NavbarToggler onClick={this.toggle} />
              <Link to='/'>
                  <h3>Guest Host</h3>
                </Link>
                
              <Collapse style={{justifyContent: 'flex-end',marginRight:'7%',fontSize:'135%'}}isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem>
                  <Link to="/"><NavLink >Home</NavLink></Link>
                  </NavItem>
                  <NavItem>
                  <Link to="/contacts"><NavLink >Hosts</NavLink></Link>
                  </NavItem>
                  <NavItem>
                  <Link to='/events'> <NavLink >Events</NavLink></Link>
                  </NavItem>
                  { this.props.connectedUser !=="" ? 
                  <NavItem>
                        <NavLink href="#" onClick={this.props.onLougOut}>LOG OUT</NavLink>
                </NavItem>
                  :
                  <NavItem>
                    <NavLink href="#" onClick={this.togglelogin}>LOG IN</NavLink>
                  </NavItem>}
                  {this.props.connectedUser === "admin" && 
                  <NavItem className="nav nav-pills pull-right">
                   <Link to='/adminProfil'> <NavLink >Admin Profil</NavLink></Link>
                  </NavItem>}
                  {this.props.connectedUser === "user" && 
                  <NavItem className="nav nav-pills pull-right">
                   <Link to="/Userprofil"> <NavLink>User Profil</NavLink></Link>
                  </NavItem>}
                  
                </Nav>
              </Collapse>
            </Navbar>
         

            <Modal isOpen={this.state.modal} togglelogin={this.togglelogin} className="cascading-modal">
              <div className="modal-header primary-color white-text">
                <h4 className="title">
                  <Fa className="fa fa-pencil" /> Contact form</h4>
                <button type="button" className="close" onClick={this.togglelogin}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <ModalBody className="grey-text">
              <Input onChange={this.onChange} name="email" size="sm" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input onChange={this.onChange} name="password" size="sm" label="Your Password" icon="lock" group type="password" validate error="wrong" success="right"/>
                <span>Do you have an account?</span>
                <Link to='/inscription'>Register
                </Link>
                
                
              </ModalBody>
              <ModalFooter>
          
                <Button color="primary" onClick= {()=>{this.checkUserLogIn() &&  this.props.onLogIn({email : this.state.email, password : this.state.password})
                this.togglelogin()}}>Log In</Button>
             
              </ModalFooter>
            </Modal>
            
          </div>
        );
      }

  }
  
  const mapStateToProps = state => {
    return {
      connectedUser : state.UserReducer
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      onLogIn : user => {
        dispatch ({
          type : 'LOG_IN',
          userProfile : user
        })
      },
      onLougOut : () => {
        dispatch ({type: 'LOG_OUT' })
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)( Header);
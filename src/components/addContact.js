import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Booking from '../photos/booking.jpg';
import Divider from '@material-ui/core/Divider';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import axios from 'axios';
import './addContact.css'
class AddContact extends Component {

    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    addContact=()=>
    {
       axios.post('/contact-add',{...this.state}) 
      .then(()=>this.props.addContactReducer({...this.state})) 
      .catch((err)=>alert(err))
    }
    render() { 
        
        return ( <Grid style={{justifyContent:'center'}} className='addContainer' container spacind={24}>
        
        <Grid style={{marginTop:'5%'}}item md={12}>
            <MDBContainer>
      <MDBRow>
        <MDBCol style={{marginTop:'-4%',marginLeft:'-2%'}}md="6">
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)",
              width: "28rem"
            }}
          >
            <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="white-text mb-5 mt-4 font-weight-bold">
                  <strong>Welcome</strong>
                  <a href="#" className="green-text font-weight-bold">
                    <strong> user</strong>
                  </a>
                </h3>
              </div>
              <MDBInput name='title' onChange={this.handleChange} className="white-text font-weight-bold" label="Title" group type="text" validate />
              <MDBInput name='city' onChange={this.handleChange} className="white-text font-weight-bold" label="city" group type="text" validate />
              <MDBInput name='descreption' onChange={this.handleChange} className="white-text font-weight-bold" label="Descreption" group type="textarea" validate />
              <div className="md-form pb-3">
                
              </div>
              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                <Link to='/contacts'>
                <MDBBtn
                    color="success"
                    rounded
                    type="button"
                    className="btn-block z-depth-1"
                    onClick={this.addContact}
                  >
                    Add Host
                  </MDBBtn>
                </Link>
                 
                  
                </div>
                
              </MDBRow>
              
            </div>
            
          </MDBCard>
          
        </MDBCol>

      </MDBRow>
    </MDBContainer>
    
    </Grid>
    
    </Grid> );
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        addContactReducer:newcontact=>
        {
            dispatch({
                type:'ADD_CONTACT',
                newcontact
            })
        }
    }
}


 
export default connect(null,mapDispatchToProps)(AddContact);
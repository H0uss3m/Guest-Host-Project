import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import axios from'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Booking from '../photos/booking.jpg'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import './editContact.css';
class EditContact extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            title:"",
            city:'',
            descreption:''
        }
    }

    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    componentDidMount=()=>
    {
        this.setState({
            ...this.props.contacts.filter(el=>el._id===this.props._id)[0]
        })
    }
    editContact=()=>
    {
      axios.put(`/edit-contact/${this.state._id}`,{
        title:this.state.title,
        city:this.state.city,
        descreption:this.state.descreption
      })  
      .then(()=>this.props.editContactReducer({...this.state})) 
      .catch((err)=>alert(err))
    }
    render() { 
        console.log(this.props.contacts)
        return ( 
             <Grid style={{justifyContent:'center'}} className='editContainer' container spacind={24}>
        
        <Grid style={{marginTop:'5%'}}item md={12}>
            <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
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
              <MDBInput name='title' onChange={this.handleChange}  value={this.state.title} label="Title" group type="text" className="white-text font-weight-bold" validate />
              <MDBInput name='city' onChange={this.handleChange}   value={this.state.city} label="city" group className="white-text font-weight-bold" type="text" validate />
              <MDBInput name='descreption' onChange={this.handleChange}  value={this.state.descreption} label="Descreption" group className="white-text font-weight-bold" type="textarea" validate />
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
                    onClick={this.editContact}
                  >
                    Edit Host
                  </MDBBtn>
                </Link>
                 
                  
                </div>
                
              </MDBRow>
              
            </div>
            
          </MDBCard>
          
        </MDBCol>
        {/* <Grid item md={6} >
           <Paper> <h3>Please Fill the Form to Edit Your Host </h3></Paper>   
        </Grid> */}
      </MDBRow>
    </MDBContainer>
    
    </Grid>
    
    </Grid> 
            
         );
    }
}

const mapStateToProps=(state)=>
{
    return {
        contacts:state.contactReducer
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        editContactReducer:editcontact=>
        {
            dispatch({
                type:'EDIT_CONTACT',
                editcontact
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(EditContact);
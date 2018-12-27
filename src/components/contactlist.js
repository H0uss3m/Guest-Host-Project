import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ContactItem from './contactItem'
import Grid from'@material-ui/core/Grid';
import Background from '../photos/host background.jpg';
import Paper from'@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from 'axios';
class ContactList extends Component {
    componentDidMount=()=>{
        axios.get('/contact-get').then((res)=>this.props.refreshContactReducer(res.data))
    }
    render() { 
        const {contacts}= this.props
        

        // console.log(this.props.contacts)
        return ( 
            <Grid container spacing={24}>
                <Grid style={{textAlign:'center'}} item md={12}>
                    <Link to='/'>
                        <Button>Home</Button>
                    </Link>
                </Grid>
                <Grid item md={12}>
                        <img style={{width:'100%',height:'500px'}}src={Background} alt='background-img'/>
                </Grid>
                <Grid item md={12} style={{display:'flex',justifyContent:'center',}} className='contact-list-container'>     
                    {
                        contacts.map((el,index)=>
                        <ContactItem key={index} item={el}/>
                    )
                    }
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
        refreshContactReducer:contacts=>
        {
            dispatch({
                type:'REFRESH_CONTACT',
                contacts
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactList);
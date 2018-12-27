import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import host from'../photos/host.jpg'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

class ContactItem extends Component {

  deleteContact=()=>
  {  const {item} = this.props
  axios.delete(`/delete-contact/${item._id}`)
  .then(()=>
      this.props.deleteContactReducer(item._id))
      .catch((err)=>alert(err))
  }
    render() { 
        const {item}=this.props
        return ( 
            <Grid style={{margin:'2%',justifyContent:'center',}}  item md={3} className='contact-item-container'>
            
            
            
            <Card style={{maxWidth: '400px'}}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" style={{backgroundColor: 'red'}}>
                  {item._id}
                </Avatar>
              }
              title={item.title}
              subheader={item.city}
            />
            <CardMedia
              style={{ height: '0',paddingTop: '56.25%',}}
              image={host}
              title="Paella dish"
            />
            <CardContent>
              <Typography style={{marginBottom:'5%'}} component="p">
               {item.descreption}
              </Typography>
              <Link to={`/editcontact/${item._id}`}>
                    <Button variant="contained" color="primary" style={{textDecoration:'underline'}} size="small" color="primary">Edit</Button>
              </Link>
              <Button size="small" color="secondary"  onClick={this.deleteContact}>Delete</Button>
              <Link to='/hostInfo'>
                    <Button style={{marginLeft:'20%'}}size="small" color="primary">More Infos</Button>
              </Link>
            </CardContent>
          </Card>
          
          </Grid>

        );
      }
    }
const mapDispatchToProps=(dispatch)=>
{
    return {
        deleteContactReducer:_id=>
        {
            dispatch({
                type:'REMOVE_CONTACT',
                _id
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(ContactItem);
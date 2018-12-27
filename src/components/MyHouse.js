import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AddContact from './addContact';
import Divider from '@material-ui/core/Divider';
class MyHouse extends Component {
    render() { 
        return (<div  className='home-container'>  
        <Divider style={{marginBottom:'2%'}}/> 
       <h3>Fill this form to add a host :</h3><br/>
       <Divider/>
       <AddContact/>

        </div>);
    }
}
 
export default MyHouse;
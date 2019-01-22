import React,{Component} from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import './DiscreprionBox.css';
import Example from './Example';
import {Link} from 'react-router-dom';
import {MDBIcon} from 'mdbreact';

class DiscreptionBox extends Component {
    render() { 
        return ( <Paper style={{marginTop:'20%',marginRight:'2%'}}>
            <Grid item className='editBtn'>
                <Link to ='/admin/editProfil'>
                    <MDBIcon style={{fontSize:'160%'}}icon="edit" />
                </Link>
            </Grid>
            <Grid item md={12}>
                <Example />
            </Grid>
 </Paper> );
    }
}
 
export default DiscreptionBox;
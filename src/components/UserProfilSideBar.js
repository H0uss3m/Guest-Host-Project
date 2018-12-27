import React,{Component} from 'react';
import justin from '../photos/Justin.jpg';
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";
import './ProfilSideBar.css';
import {connect} from 'react-redux'

class UserProfilSideBar extends Component {
    render() {

        const {UserDesc}= this.props;
        
        return ( 
            <div className='SidebarHeader'>
                <Paper style={{marginLeft: '25%'}}>
                <Grid item md={10}>
                    <img className='profilPic' src={justin} alt='profil-photo'  />
                </Grid>
            
            
                <Grid item md={10} className='userName'>
                    <h3>{UserDesc[0].name}</h3>
                </Grid>
                <Grid item md={10} className='birth-date'>
                    <h3>{UserDesc[0].age}</h3>
                </Grid>
                <Grid item md={10} className='adress'>
                    <h3 style={{color:'blue'}}>{UserDesc[0].adress}</h3>
                </Grid>
                <Divider variant="middle" />
                <Grid item className='intro' md={12}>
                    <h3>ABOUT ME :</h3>
                    <p>{UserDesc[0].aboutme}</p>
                </Grid>
                <Divider variant="middle" />
                {/* interest box */}
                <Grid item  md={12} className='interestTitle'>
                        <h3>INTEREST :</h3>
                </Grid>
                <Grid  container spacing={6} className='interestList' >
                    <Grid item md={4} className='interestItem'>
                            <p>Traveling</p>
                    </Grid>
                    <Grid item md={4} className='interestItem'>
                            <p>Sport</p>
                    </Grid>
                    <Grid item md={4} className='interestItem'>
                            <p>Photographie</p>
                    </Grid>
                    <Grid item md={4} className='interestItem'>
                            <p>Camping</p>
                    </Grid>
                    <Grid item md={4} className='interestItem'>
                            <p>Surfing</p>
                    </Grid>
                </Grid>
                </Paper>
            
            

            
        </div> );
    }
}
 
const mapStateToProps=(state)=>
{
    return {
        UserDesc:state.userReducer
    }
}
 
export default connect(mapStateToProps)(UserProfilSideBar);
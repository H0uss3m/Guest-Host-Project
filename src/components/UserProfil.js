import React,{Component} from 'react';
import Grid from "@material-ui/core/Grid";
import UserProfilSideBar from'./UserProfilSideBar';
import UserDiscreprionBox from'./UserDiscreptionBox';
import './Profil.css';

class UserProfil extends Component {
    render() { 
        return ( 
        <Grid style={{marginTop:'5%'}} container spacing={24}>
            
                <Grid item className='profil-side-bar' md={4}>
                    <UserProfilSideBar/>
                </Grid>
                
                <Grid  item className='discreption-box' md={8}>
                    <UserDiscreprionBox />
                </Grid>
            
        </Grid> );
    }
}
 
export default UserProfil;
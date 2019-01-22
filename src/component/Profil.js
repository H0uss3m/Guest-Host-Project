import React,{Component} from 'react';
import Grid from "@material-ui/core/Grid";
import ProfilSideBar from'./ProfilSideBar';
import DiscreprionBox from'./DiscreprionBox';
import './Profil.css';

class Profil extends Component {
    render() { 
        return ( 
        <Grid container spacing={24}>
            
                <Grid item className='profil-side-bar' md={4}>
                    <ProfilSideBar/>
                </Grid>
                
                <Grid  item className='discreption-box' md={8}>
                    <DiscreprionBox />
                </Grid>
            
        </Grid> );
    }
}
 
export default Profil;
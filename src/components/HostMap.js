import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
class HostMap extends Component {
    
    render() { 
        return ( <Grid item md={10} style={{marginBottom:'2%',marginLeft:'10%'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21001.406641594644!2d2.2939613962064276!3d48.85485741154503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6702ec77349a9%3A0x5cf686837547ba0!2sSaint-Fran%C3%A7ois-Xavier!5e0!3m2!1sfr!2stn!4v1544751728813" style={{width:"100%", height:"550px", frameborder:"0"}}></iframe>
        </Grid> );
    }
}
 
export default HostMap;
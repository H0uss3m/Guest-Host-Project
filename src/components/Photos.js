import React,{Component} from 'react';
import justin2 from '../photos/justin2.jpg';
import justin3 from '../photos/justin3.jpg'
import Divider from '@material-ui/core/Divider'
import Grid from "@material-ui/core/Grid";
class Photos extends Component {

    render() { 
        return (
            <Grid container spacing={24} style={{marginTop:'5%'}} class="file-upload-wrapper">
            <Grid item>
                <input  type="file" id="input-file-now"  onChange={this.handlechange} class="file-upload" />
            </Grid >
            <Divider style={{width:'50%'}}/>
            <Grid container >
            <Grid item>
                <img alt='574854' style={{width:'50%',marginTop:'2%'}}src={justin2}/>
            </Grid><Grid item>
                <img alt='574854' style={{width:'50%',marginTop:'2%',marginBottom:'2%'}}src={justin3}/>
            </Grid>
            </Grid>
            
            </Grid>
        );
    }
}
 
export default Photos;
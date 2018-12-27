import React,{Component} from 'react';
import Calendar from 'react-calendar';
import Grid from '@material-ui/core/Grid';

class DisponibilityCalender extends Component {
    constructor(props){
        super(props);
        this.state={
            date: new Date(),
        }
    }
     
    onChange = date => this.setState({ date })
    render() { 
        return ( 
        <Grid item md={6} style={{marginBottom:'2%'}}>
            <h3 style={{display:'flex'}}>Disponibility :</h3>
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}/>
        </Grid>
             );
    }
}
 
export default DisponibilityCalender;
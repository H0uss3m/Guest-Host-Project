import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center',
    backgroundColor:'lightGrey',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class ProfilEditForm extends Component {


  handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    
    // editProfil=()=>
    // {
    //    this.props.editProfilReducer({...this.state,_id:''+Math.random()*100000})
    // }

  render() {
    const {profilDesc}= this.props;
    const { classes } = this.props;

    return (
      <div className={classes.container}>
     
     <Paper style={{width:'50%',marginTop:'5%',marginBottom:'5%'}}>
     <Grid container>
      <Grid style={{display:'flex',justifyContent:'center'}} item md={12}>
        <h2>Edit Profil </h2>
      </Grid>
      </Grid>
      <Divider/>
      <Grid style={{marginLeft:'10%'}}container>
        <Grid item md={12}>
        <FormControl style={{width:'35%'}}className={classes.formControl} variant="outlined">
          <InputLabel
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="component-outlined"
          >
            name
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            name='name'
            value={profilDesc[0].name}
            onChange={this.handleChange}
            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
          />
        </FormControl>
        </Grid>
        <Grid item md={12}>
        <FormControl style={{width:'50%'}} className={classes.formControl} variant="outlined">
          <InputLabel
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="component-outlined"
          >
            Adress
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={profilDesc[0].adress}
            name='adress'
            onChange={this.handleChange}
            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
          />
        </FormControl>
        </Grid>
        
        <Grid item md={12}>
        <FormControl style={{width:'75%'}}className={classes.formControl} variant="outlined">
          <TextField
          id="outlined-multiline-static"
          label="Descreption"
          value={profilDesc[0].aboutme}
          onChange={this.handleChange}
          multiline
          name='desc'
          rows="4"
          placeholder="Let us know something about you ..."
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        </FormControl>
        </Grid>
        <Grid className='editpage-btn'>
        <Link to='/adminProfil'>
          <Button variant="contained" color="primary"  className={classes.button}>Edit</Button>
        </Link>
      </Grid>
        </Grid>
        </Paper>
      </div>
    );
  }
}
// const mapDispatchToProps=(dispatch)=>
// {
//     return {
//         addProfilReducer:newprofil=>
//         {
//             dispatch({
//                 type:'ADD_CONTACT',
//                 newprofil
//             })
//         }
//     }
// }
 
const mapStateToProps=(state)=>
{
    return {
        profilDesc:state.profilReducer
    }
}
 


export default connect(mapStateToProps)(withStyles(styles)(ProfilEditForm))
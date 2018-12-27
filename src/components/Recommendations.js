import React,{Component} from 'react';
// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import Villeitem from "./villeitem"
import './Recommendations.css';
import axios from 'axios';

class Recommendations extends Component {
       constructor(){
         super()
         this.state={
           ville:[]
       }
      }

componentWillMount(){
  axios.get("/city").then(res=>{
    this.setState({
      ville:res.data
    })
  })
}
    render() { 
        return ( 
        
        <div className="">
            <center><h2>Recommendations des Villes </h2></center>
            <div className="row height">
            {this.state.ville.map((el,i)=><Villeitem key={i} el={el}/>)}
            </div>
        {/* <Grid>
  <Row className="recommendation show-grid">
    <Col xs={6} md={3}> 
      <div className="item-recommendation">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/SidBS_%2847%29.JPG/280px-SidBS_%2847%29.JPG"/>
            <div className='title-town'><h4>Tunis</h4></div>
            <div className='title-town'><h6>30€/nuit en moyenne</h6></div>
      </div>
    </Col>
    <Col xs={6} md={3}>
      <div className="item-recommendation">
      <img src="http://www.exploranta.com/wp-content/uploads/sites/5/2016/01/sousse_02.jpg"/>
            <div className='title-town'><h4>Sousse</h4></div>
            <div className='title-town'><h6>60€/nuit en moyenne</h6></div>
      </div>
    </Col>
    <Col xs={6} md={3}>
      <div className="item-recommendation">
      <figure>

      <img src="http://tn.tunisiebooking.com/theme/images/destinations/hammamet.jpg"/>
      </figure>
            <div className='title-town'><h4>Hammamet</h4></div>
            <div className='title-town'><h6>30€/nuit en moyenne</h6></div>
      </div>
    </Col>
    <Col xs={6} md={3}>
      <div className="item-recommendation">
      <img src="https://photo-thalasso-to.advences.com/Oclub-Hari-Club-aerienne.JPG" />
            <div className='title-town'><h4>Djerba</h4></div>
            <div className='title-town'><h6>30€/nuit en moyenne</h6></div>
      </div>
    </Col>
     <Col xs={6} md={3}>
      <div className="item-recommendation">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/SidBS_%2847%29.JPG/280px-SidBS_%2847%29.JPG"/>
            <div className='title-town'><h4>Tunis</h4></div>
            <div className='title-town'><h6>30€/nuit en moyenne</h6></div></div>
    </Col>
    <Col xs={6} md={3}>
      <div className="item-recommendation">
      <img src="http://tn.tunisiebooking.com/theme/images/destinations/tozeur.jpg"/>
            <div className='title-town'><h4>Tozeur</h4></div>
            <div className='title-town'><h6>30€/nuit en moyenne</h6></div></div>
    </Col> 
  </Row>
</Grid> */}
        </div>

        );
    }
}
 
export default Recommendations;
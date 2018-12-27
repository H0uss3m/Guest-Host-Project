import React,{Component} from 'react';
import RecipeReviewCard from './Card'

import axios from 'axios';

class Host extends Component {
    state ={
        host:[]

    }
    componentWillMount(){
        axios.get(`/city/${this.props.cityName}`).then(Response=>{
            this.setState({
                host:Response.data})
        })
    }
    render() { 
        return ( 
        
        <div>
            <h1>Classement</h1>
            <h6>Généralement , après une longue saison de travail ou d’études, tout le monde se plaigne du stresse et cherche un beau moment de dégustation et de convivialité pour se libérer de cette monotonie en visitant un espace immense et intime. Les hôtels sont la destination de plusieurs personnes mais ça coûte cher en plus, ils sont toujours encombrés. donc , les maison d’hôtes en Tunisie se présentent comme le refuge pour plusieurs touristes. Les maisons d’hôtes tunisienne sont des jolis espaces vastes et  chaleureux. En Tunisie , il existe plusieurs maisons d’hôtes agréables à visiter . Pour vous aider à faire le bon choix, 
            on vous présente dans cet section les meilleurs maisons d’hôtes en Tunisie.
            </h6>

            <div className="row ">
            {this.state.host.map((el,i)=><RecipeReviewCard className="cards" key={i} el={el} />)}
            </div>


            {/* <Grid>
            <Row>
            <Col xs={1} md={2}>
            <div></div> </Col> 
            <Col xs={5} md={8}>
                <img src="https://www.voyage-tunisie.info/wp-content/uploads/2018/08/piscine.-1026x500.jpg"/>
                <div><h3>N°1 </h3>
                <h5>La Maison d’Hôtes Dar El Gaïed El Maâmouri</h5></div> </Col> 
            <Col xs={1} md={2}>
            <div></div> </Col> 
            <Col xs={5} md={6}>
                <img src="https://a0.muscache.com/4ea/air/v2/pictures/76278ef3-d4f0-4fb9-b12b-9db01f52ba40.jpg?t=r:w2262-h904-sfit,e:fjpg-c90"/>
                <div><h3>N°2</h3></div></Col>
            <Col xs={1} md={1}>
            <div></div> </Col> 
            <Col xs={5} md={6}>
                <img src="https://a0.muscache.com/4ea/air/v2/pictures/72a0e6f1-15b0-479a-bde5-db5bb1489faa.jpg?t=r:w2262-h904-sfit,e:fjpg-c90"/>
                <div><h3>N°3</h3></div></Col></Row>
            </Grid> */}
        </div> );
    }
}
 
export default Host;
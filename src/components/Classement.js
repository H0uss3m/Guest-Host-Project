import React,{Component} from 'react';
import RecipeReviewCard from './Card'

import './Classement.css'
import axios from 'axios';

class Classement extends Component {
    state ={
        host:[]

    }
    componentWillMount(){
        axios.get("/host").then(Response=>{
            this.setState({
                host:Response.data})
        })
    }
    render() { 
        return ( 
        
        <div>
            <center><h1>Classement</h1>
            <h6>Généralement , après une longue saison de travail ou d’études, tout le monde se plaigne du stresse et cherche un beau moment de dégustation et de convivialité pour se libérer de cette monotonie en visitant un espace immense et intime. Les hôtels sont la destination de plusieurs personnes mais ça coûte cher en plus, ils sont toujours encombrés. donc , les maison d’hôtes en Tunisie se présentent comme le refuge pour plusieurs touristes. Les maisons d’hôtes tunisienne sont des jolis espaces vastes et  chaleureux. En Tunisie , il existe plusieurs maisons d’hôtes agréables à visiter . Pour vous aider à faire le bon choix, 
            on vous présente dans cet section les meilleurs maisons d’hôtes en Tunisie.
            </h6></center>

            <div className="row ">
            {this.state.host.map((el,i)=><RecipeReviewCard className="cards" key={i} el={el} />)}
            </div>
            {/* filter 
            */}

            <p>
  <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
</div>
        </div> );
    }
}
 
export default Classement;
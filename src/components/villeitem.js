import React,{Component} from 'react';
import {Link} from "react-router-dom";
import './villeitem.css'
class Villeitem extends Component {
    
    render() { 
        return ( 
            <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="card" style={{width: "18rem" , height:"450px" }}>
                <img className="card-img-top" src={this.props.el.image} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">{this.props.el.cityName}</h5>
                <h6 className="card-title">Région : {this.props.el.region}</h6>
                <p className="card-text">Classement : {this.props.el.rating}</p>
                <p className="card-text">Nombre des Hotes : {this.props.el.nbreHoste}</p>

                <Link to={`/city/${this.props.el.cityName}`} className="btn btn-primary">Go {this.props.el.cityName}</Link>
  </div></div>
    </div>
    

         );
    }
}
 
export default Villeitem;

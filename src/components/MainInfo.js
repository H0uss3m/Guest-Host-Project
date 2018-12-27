import React,{Component} from 'react';
import './MainInfo.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import StarRatingComponent from 'react-star-rating-component';
class Maininfo extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'Chambre charmante dans un grand appartement',
            location :'Paris',
            descreption:'Charming room (16m2), in a bright and quiet apartment, safe and secure exceptionally located near the Bastille district, Le Marais and Nation. Breakfast included with fresh french bread . Lively neighbourhoods. Supermarket, grocery stores, bakeries. Breakfast included.'
        }
    }
    
    render() {
        return (<Grid>
            <Grid item md={12} className='main-infos-container'>
                <Grid item  className='main-infos' md={6}>
                <div className='header'>
                    <h1 className='title'>{this.state.title}.</h1><br />
                    <h3 style={{display:'flex'}}className='location'>{this.state.location}</h3>
                </div>
                <div className='equipement'>
                    <h3 style={{display:'flex'}}>Equipement :</h3>
                        <ul className='equipement-list'>
                        <Grid item md={6}>
                            <li>Wifi</li>
                            <li>Elevator</li>
                            <li>Kitchen</li>
                        </Grid>
                        <Grid item md={6}>
                            <li>Breakfast</li>
                            <li>Cozy &  Friendly Laptop workspace</li>
                            <li>Smoothing Iron</li>
                        </Grid>
                        </ul>
                        <Grid item md={12}>
                            <Grid item  md={7}></Grid>
                            <Grid item  md={5}>
                                <a href='#'>Read more about the space</a>
                            </Grid>
                        </Grid>
                </div>
                <div className='descreption-box'>
                    <h3 style={{display:'flex'}}>Descreption :</h3>
                    <p>{this.state.descreption}</p>
                </div>
                <div className='rules'>
                    <h3 style={{display:'flex'}}>Rules :</h3>

                    <ul className='rules-list'>
                        <Grid item md={6}>
                            <li>No Smoking</li>
                            <li>No Party</li>
                            <li>Keep the calm after 10:00 am</li>
                        </Grid>
                        <Grid item md={6}>
                            <li>Please, keep the House clean </li>
                            <li>Pets Not allowed inside the house</li>
                            <li>No alcohol</li>
                        </Grid>
                        </ul>
                        <Grid item md={12}>
                            <Grid item md={9}></Grid>
                            <Grid item md={3}>
                                <a href='#'>Show all the rules</a>
                            </Grid>
                        </Grid>
                </div>
                <div className='contact'>
                    <Grid item md={12}>
                        <Grid item md={8}></Grid>
                        <Grid item  md={4}>
                            <Button bsStyle="primary">Contact The Host</Button>
                        </Grid>
                    </Grid>
                </div>                
                </Grid>

                <Grid item md={1}></Grid>

                <Grid item  className='profil-box' md={5}>
                    <Grid item md={12}>
                        <figure className='main-host-img'>
                            <img src='https://a0.muscache.com/im/pictures/8121183/bf65be0d_original.jpg?aki_policy=x_large'/>
                        </figure>
                    </Grid>

                    <Grid item md={12}>
                        <Grid item md={4}></Grid>
                        <Grid item md={12}>
                            <StarRatingComponent className='stars'
                                name="rate host" 
                                editing={false}
                                renderStarIcon={() => <span>⭐</span>}
                                starCount={5}
                                value={3}
                            />
                        </Grid>
                        <Grid item md={4}></Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid item md={12} className='host-img-container'>
                <Grid item  md={2}>
                <figure className='host-img'>
                    <img src="https://a0.muscache.com/im/pictures/8121913/d40e0cee_original.jpg?aki_policy=x_large"/>
                </figure>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={2}>
                <figure className='host-img'>
                    <img src="https://a0.muscache.com/im/pictures/8120872/41612baa_original.jpg?aki_policy=xx_large"/>
                </figure>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={2}>
                <figure className='host-img'>
                    <img src="https://a0.muscache.com/im/pictures/8122318/e0921f04_original.jpg?aki_policy=x_large"/>
                </figure>
                </Grid>
                <Grid item  md={1}></Grid>
                <Grid item  md={2}>
                <figure className='host-img'>
                    <img src="https://a0.muscache.com/im/pictures/8122318/e0921f04_original.jpg?aki_policy=x_large"/>
                </figure>
                </Grid>
                <Grid item  md={1}></Grid>    
            </Grid>
        </Grid>  );
    }
}
 
export default Maininfo;
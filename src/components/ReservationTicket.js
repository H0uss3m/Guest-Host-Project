import React,{Component} from 'react';
// import {Grid,Row,Col,ButtonToolbar,DropdownButton,MenuItem} from 'react-bootstrap';
import Grid from '@material-ui/core/Grid'
import StarRatingComponent from 'react-star-rating-component';



class ReservationTicket extends Component {
    constructor(props){
        super(props);
        this.state={
            PricePerNight:'68',
            Rating:'4',
            TotalPrice:'154',
            
        }}
    
    render() { 
        return ( 
        <Grid item md={6 }style={{marginBottom:'2%',}}>
            
                <Grid item ={12} style={{borderBottom:'1px solid rgba(189, 195, 199, 0.7)'}}>
                <h4>{this.state.PricePerNight}$ per night</h4>
                <StarRatingComponent 
                                name="rate host" 
                                editing={false}
                                renderStarIcon={() => <span>⭐</span>}
                                starCount={5}
                                value={this.state.Rating}
                            />
                </Grid>
                <Grid item ={12}  style={{borderBottom:'1px solid rgba(189, 195, 199, 0.7)'}}>
                    <h3>Check in :</h3>
                    <input type='date' />
                    <h3>Check out :</h3>
                    <input type='date'/>
                </Grid>
                
                <Grid item ={12}>
                <h3>Guests :</h3>
                    <Grid item ={6}>
                        <h4>Adult: </h4>
                    </Grid>
                    <Grid>
                    {/* <ButtonToolbar>
                        <DropdownButton style={{width:'130%'}} title="0 Adult " id="dropdown-size-medium">
                            <MenuItem eventKey="1">1 Adults</MenuItem>
                            <MenuItem eventKey="2">2 Adults</MenuItem>
                            <MenuItem eventKey="3">3 Adults</MenuItem>
                            <MenuItem eventKey="4">4 Adults</MenuItem>
                        </DropdownButton>
                    </ButtonToolbar>             */}
                    </Grid>
                </Grid>
                <Grid item md={12}style={{borderBottom:'1px solid rgba(189, 195, 199, 0.7)'}}>
                    <Grid item md={1}>
                        <h4>Children: </h4>
                    </Grid>
                    <Grid item md={12}>
                 {/* Grid item md={12}         */}
                    </Grid>
                </Grid>
                <Grid item md={12}>
                    <Grid item md={4}>
                        <h3>Total :{this.state.TotalPrice}$</h3>
                    </Grid>
                </Grid>
        </Grid>);
    }
}
 
export default ReservationTicket;
import React, { Component } from 'react';
import { Button, Collapse } from 'mdbreact';
import FavoritePlaces from './Favorite';
import Message from './Message';
import Hostscheck from './Hostscheck';
import Eventscheck from './Eventscheck';
class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      collapse: true,
      collapse1:false,
      collapse2:false,
      collapse3:false,
    };
  }

  toggle=()=> {
    this.setState({ collapse:!this.state.collapse,
    
    collapse1: false,
       //collapse: !this.state.collapse,
       collapse2: false,
      collapse3: false});
  }
  toggle1=() =>{
    this.setState({
      collapse:false,
      collapse1: !this.state.collapse1,
      collapse2: false,
      collapse3:false
     });
  }
  toggle2=() =>{
    this.setState({
      collapse:false,
      collapse1: false,
      collapse3:false,
      collapse2: !this.state.collapse2
     });
  }
  toggle3=() =>{
    this.setState({
      collapse1: false,
      collapse: false,
       collapse2: false,
      collapse3: !this.state.collapse3 });
  }

  render() {
    return (
      <div>
        <div>
          <div style={{display:'flex', width:'100%',justifyContent: 'space-around',}}> 
          <Button color="primary"  onClick={this.toggle} style={{ marginBottom: "1rem" }}>Messages</Button>
          <Button color="primary" onClick={this.toggle1} style={{ marginBottom: "1rem" }}>Hosts check</Button>
          <Button color="primary"  onClick={this.toggle2} style={{ marginBottom: "1rem" }}>Events check</Button>
      
          </div>
          <Collapse isOpen={this.state.collapse} >
                 <Message/>
          </Collapse>
          <Collapse isOpen={this.state.collapse1 }>
                <Hostscheck/>
          </Collapse>
          <Collapse isOpen={this.state.collapse2}>
                <Eventscheck/>
          </Collapse>
         
        </div>
      </div>
    );
  }
}
export default Example;
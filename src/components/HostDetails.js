import React, { Component } from 'react';

import MainInfo from './MainInfo';
import DisponibilityCalender from'./Calendar';
import HostMap from './HostMap';
import ReservationTicket from './ReservationTicket'
class App extends Component {
  render() {
    return (
      <div style={{marginTop:'8%'}}className="App">
        
        <MainInfo />
        <DisponibilityCalender/>
        <ReservationTicket />
        <HostMap />
      </div>
    );
  }
}

export default App;

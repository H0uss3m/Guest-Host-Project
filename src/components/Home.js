import React from 'react';
import ButtonAppBar from './Navbar';
import ButtonBases from './Slider';
import Recommendations from './Recommendations';
import Classement from './Classement';
import Events from './Events';
import Pub from './Pub';

class Home extends React.Component {
    render() { 
        return (  <div>
            <ButtonAppBar/>
            <ButtonBases />
            <Recommendations/>
            <Classement/>
            <Events/>
            <Pub/>
        </div>);
    }
}
 
export default Home;
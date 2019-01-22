import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Profil from './Profil';
import ProfilEditForm from './Form';

class Routes extends Component {
    render() { 
        return ( 
            <div className='routes-container'>
                <Route exact path='/admin' component={Profil}/>
                <Route exact path='/admin/editProfil' component={ProfilEditForm}/>
             
            </div>
         );
    }
}
 
export default Routes;
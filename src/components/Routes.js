import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from './Home'
import Host from './host';
import Recommendations from'./Recommendations';
import ContactList from './contactlist';
import AddContact from './addContact';
import EditContact from './editContact';
import AdminProfil from './AdminProfil';
import UserProfil from './UserProfil';
import ProfilEditForm from './Form';
import HostDetails from './HostDetails';
import UserEditForm from './UserEditForm';
class Routes extends Component {
    render() { 
        return ( 
            <div className='routes-container'>
             <Route exact path='/' component={Home}/>
             <Route exact path='/contacts' component={ContactList}/>
             <Route exact path='/addcontact' component={AddContact}/>
             <Route exact path='/editcontact/:_id' 
             render={props=><EditContact _id={props.match.params._id}/>}/>
             <Route exact path="/city/:name" render={(props)=><Host cityName={props.match.params.name}/>}/>
             <Route exact path="/city" render={()=><Recommendations />}/>
             <Route exact path='/adminProfil' component={AdminProfil}/>
             <Route exact path='/adminProfil/editProfil' component={ProfilEditForm}/>
             <Route exact path='/userProfil' component={UserProfil}/>
             <Route exact path='/userProfil/editProfil' component={UserEditForm}/>

             <Route exact path='/hostInfo' component={HostDetails}/>
             
            </div>
         );
    }
}
 
export default Routes;
import React, {Component} from 'react';
import LinearIndeterminate from './progressBar'
import './LoaderHOC.css';


function LoaderHOC(WrappedComponent) {
  return class LoaderHOC extends Component{
  

    render(){
    
        return this.props.loading==="0" ? <div ><div></div><div><LinearIndeterminate/></div></div> : <WrappedComponent {...this.props}/>;
    
      }
  }
}

export default LoaderHOC;
import React from 'react'

import { Route } from 'react-router-dom'

const ProtectedRoute = ({path, component, isLogged}) => {
    if(isLogged){
        return (
            <Route path={path} component={component} />
          )
    }else{
        return (
            <h1 style={{paddingTop: '20rem'}}>Please Log In first</h1>
          )
    }
  
}

export default ProtectedRoute
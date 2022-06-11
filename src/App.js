import React, { useEffect } from 'react';
import axios  from 'axios';
import {BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import LoginPage from './pages/LoginPage'

import RegisterPage from './pages/RegisterPage';
import UserInfoPage from './pages/UserInfoPage';
import { Navbaar } from './components/Navbaar';
import ProfilePage from './pages/ProfilePage';
import sendMoneyPage from './pages/sendMoneyPage'
import WithdrawPage from './pages/WithdrawPage';
import DepositPage from './pages/DepositPage';
import ClientInfoComponent from './pages/OfficerPages/ClientInfoComponent';

import {logIn} from './reduxStore/logSlice'
import ProtectedRoute from './protected/ProtectedRoute';
import LoanBackPage from './pages/LoanBackPage';
import LoanSubmit from './pages/LoanSubmit';

function App() {
  const userStatus = useSelector(state => state.logInfo);
  const disPatch = useDispatch()
  const history = useHistory()
  
  const fetchToken = async () => {
    try{
      // const result = await axios.get('/api/v1/users/checkToken')
      const result = await axios.get('https://murmuring-escarpment-26916.herokuapp.com/api/v1/users/checkToken')
      return result.data
    }catch(err){
      console.log(err.response.data.message)
      return {
        role: null,
        token: false
      }
    }
  }
  useEffect(() => {
    try{
      fetchToken().then(x => {
        if(x.token && x.role === 'client'){
          disPatch(logIn({
            role: x.role,
            loanStatus: x.loanStatus
          }))
          history.push('/profile')
        }else if(x.token && x.role === 'officer'){
          disPatch(logIn({
            role: x.role
          }))
          history.push('/checkClient')
        }else{
          history.push('/')
        }
      })
    }catch(err){
      console.log(err)
    }
    
  }, [])
  const logStatus = userStatus.isLogged
  return (
    <div className="App">
      <Navbaar/>
        <Switch>
          <Route exact path={['/', '/login']} component={LoginPage} />
          <Route path='/registration' component={RegisterPage} />
          <ProtectedRoute path='/loanBack' component={LoanBackPage} isLogged={logStatus} />
          <ProtectedRoute path='/profile' component={ProfilePage} isLogged={logStatus} />
          <ProtectedRoute path='/statement' component={UserInfoPage} isLogged={logStatus} />
          <ProtectedRoute path='/sendMoney' component={sendMoneyPage} isLogged={logStatus} />
          <ProtectedRoute path='/withdrawMoney' component={WithdrawPage} isLogged={logStatus} />
          <ProtectedRoute path='/depositMoney' component={DepositPage} isLogged={logStatus} />
          <ProtectedRoute path='/checkClient' component={ClientInfoComponent} isLogged={logStatus} />
          <ProtectedRoute path='/loanSubmission' component={LoanSubmit} isLogged={logStatus} />
        </Switch>
    </div>
  );
  
}

export default App;

// "proxy": "http://localhost:7000",

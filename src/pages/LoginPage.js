import React from 'react'
import SigninPage from './RegisterComponents/SigninPage'
const LoginPage = () => {
  return (
    <div className="main_box container-fluid">
        <div className="row">
            <div className="col">
            <p className="content">Welcome to our bankin System</p>
            </div>
        </div>
        <SigninPage />
    </div>
  )
}

export default LoginPage


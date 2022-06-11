import React from 'react'
import RegistrationPage from './RegisterComponents/RegistrationPage'

const RegisterPage = () => {
    return(
        <div className="main_box container-fluid">
            <div className="row">
                <div className="col">
                    <p className="content">Create Your Account By Providing Accurate Information</p>
                </div>
            </div>
            <RegistrationPage />
        </div>
    )
}

export default RegisterPage
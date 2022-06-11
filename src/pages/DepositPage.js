import React from 'react'

import DepositComponent from './DepostiComponent/DepositComponent'

const DepositPage = () => {
  return (
    <div className="main_box container-fluid">
        <div className="row">
            <div className="col">
                <p className="content">Deposit Money To Your Account</p>
            </div>
        </div>
        <DepositComponent />
    </div>
  )
}

export default DepositPage
import React from 'react'

import WithdrawComponent from './withdrawComponent/WithdrawComponent'

const WithdrawPage = () => {
  return (
    <div className="main_box container-fluid">
        <div className="row">
            <div className="col">
                <p className="content">Withdraw your money</p>
            </div>
        </div>
        <WithdrawComponent />
    </div>
  )
}

export default WithdrawPage
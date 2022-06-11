import React from 'react'

import MoneyComponent from './sendMoneyComponent/MoneyComponent'

const sendMoneyPage = () => {
  return (
    <div className="main_box container-fluid">
        <div className="row">
            <div className="col">
                <p className="content">Safely send money to your </p>
            </div>
        </div>
        <MoneyComponent />
    </div>
  )
}

export default sendMoneyPage


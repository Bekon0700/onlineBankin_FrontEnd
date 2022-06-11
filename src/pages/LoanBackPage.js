import React from 'react'


import LoanComponent from './LoanComponent/LoanComponent'

const LoanBackPage = () => {
    return (
        <div className="main_box container-fluid">
            <div className="row">
                <div className="col">
                    <p className="content">Loan Back</p>
                </div>
            </div>
            <LoanComponent />
        </div>
      )
}

export default LoanBackPage
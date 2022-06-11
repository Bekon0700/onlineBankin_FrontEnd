import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import FormInput from "../RegisterComponents/FormInput";

import "./../RegisterComponents/formInput.css";

const ClientInfoComponent = () => {
    const history = useHistory()
    const [isClient, setIsClient] = useState(false)

    const [accInfo, setAccInfo] = useState({
        balance: 0,
        loanAmount: 0,
      });
    const [values, setValues] = useState({
        phoneNumber: "",
        Amount: '',
      });
    
      const inputs = [
        {
          id: 1,
          name: "phoneNumber",
          type: "tel",
          placeholder: "phone Number",
          errorMessage: "Please enter your 11 digit phone number!",
          label: "Phone Number",
          pattern: "^[0-9]{11}$",
          required: true,
        },
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

      const submitChange = async (e) => {
        try{
          const result = await axios.post('https://murmuring-escarpment-26916.herokuapp.com/api/v1/bank/accountInfo', {
            phoneNumber: values.phoneNumber,
          })
          if(result.data.status === 'success'){
            setIsClient(true)
            setAccInfo(
              {
                balance: result.data.clientInfo.currentBalance ,
                loanAmount: result.data.clientInfo.loanAmount 
              }
            )
          }
        }catch(err){
          console.log(err.response.data.message)
        }
      }

      return (
      <div className="main_box container-fluid">
        <div className="row">
          <div className="col">
             <div className="app">
                <form onSubmit={handleSubmit}>
                  <h1 style={{padding: '15px'}}>Deposit Money</h1>
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  ))}
                  <button type='submit' onClick={submitChange}>Submit</button>
                  </form>
              </div> 
            </div>
          </div>
          {
            isClient ? 
            <>
              <h2 >Currently your have {accInfo.balance} taka in your account.</h2>
                {
                    accInfo.loanAmount ? 
                    <h2>Your Loan left, {accInfo.loanAmount} taka.</h2> 
                    : <button style={{width: '20%', backgroundColor: 'green', color: 'black'}} type='submit' onClick={() => history.push('/loanSubmission')}>Submit a New Loan</button>
                }
            </>
            : 
            <h2>Input for information</h2>
          }
      </div>
        
      );
    }
    
    export default ClientInfoComponent
    
    
    
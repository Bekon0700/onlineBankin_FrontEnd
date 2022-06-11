import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import FormInput from "../RegisterComponents/FormInput";

import "./../RegisterComponents/formInput.css";

import { useDispatch } from 'react-redux';
import {withdrawBalance} from './../../reduxStore/balanceSlice'

const WithdrawComponent = () => {
    const history = useHistory()
    const disPatch = useDispatch()
    const [values, setValues] = useState({
        Amount: '',
      });
    
      const inputs = [
        {
          id: 2,
          name: "Amount",
          type: "Amount",
          placeholder: "Amount",
          errorMessage:
            "Please enter your amount",
          label: "Amount",
          pattern: `^[0-9]*$`,
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
          const result = await axios.post('api/v1/transaction/withdraw', {
            withdrawAmount: values.Amount * 1
          })
          if(result.data.status === 'success'){
            disPatch(withdrawBalance({
              withdrawAmount: values.Amount * 1
            }))
            history.push('/profile')
          }
        }catch(err){
          console.log(err.response.data.message)
        }
      }

      return (
        <div className="app">
          <form onSubmit={handleSubmit}>
            <h1 style={{padding: '15px'}}>Withdraw Money</h1>
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
      );
}

export default WithdrawComponent
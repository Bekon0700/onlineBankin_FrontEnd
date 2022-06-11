import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import FormInput from "../RegisterComponents/FormInput";

import "./../RegisterComponents/formInput.css";
import { useDispatch } from 'react-redux';

import { logIn } from '../../reduxStore/logSlice';

const LoanComponent = () => {
  const disPatch = useDispatch()
    const history = useHistory()

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
          const result = await axios.post('https://murmuring-escarpment-26916.herokuapp.com/api/v1/transaction/loanPayBack', {
            returnAmount: values.Amount * 1
          })
          console.log(result.data)
          if(result.data.status === 'success'){
            history.push('/profile')
          }
          if(!result.data.loanStatus){
            disPatch(logIn({
              role: 'client',
              loanStatus: false
            }))
          }
        }catch(err){
          console.log(err.response.data.message)
        }
      }

      return (
        <div className="app">
          <form onSubmit={handleSubmit}>
            <h1 style={{padding: '15px'}}>Loan Return</h1>
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

export default LoanComponent
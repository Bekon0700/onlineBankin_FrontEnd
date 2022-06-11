import React, { useState } from 'react'

import axios from 'axios';
import { useHistory } from 'react-router-dom';

import FormInput from "./RegisterComponents/FormInput";

import "./RegisterComponents/formInput.css";

const LoanSubmit = () => {
    const history = useHistory()
    const [values, setValues] = useState({
        phoneNumber: "",
        Amount: "",
      });
    const [satus, setStatus] = useState('')    
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
        const result = await axios.post('api/v1/loan/permission', {
            phoneNumber: values.phoneNumber,
            loanAmount: values.Amount
        })
        console.log(result.data.status)
        console.log(result.data)
        if(result.data.status === 'success'){
            history.push('/checkClient')
        }
    }catch(err){
        console.log(err.response.data.message)
    }
    }

    return (
    <div style={{width: '25%', margin: '15rem 45rem', padding: '2rem'}} className="app">
        <form onSubmit={handleSubmit}>
        <h1>Loan Permission</h1>
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

export default LoanSubmit




import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import FormInput from "./FormInput";
import "./formInput.css";

import {logIn} from './../../reduxStore/logSlice'

import { useSelector, useDispatch } from "react-redux";

const SigninPage = () => {
    const disPatch = useDispatch()
    const history = useHistory()

    const [values, setValues] = useState({
        phoneNumber: "",
        password: "",
      });
    
      const inputs = [
        {
          id: 2,
          name: "phoneNumber",
          type: "tel",
          placeholder: "phone Number",
          errorMessage: "Please enter your 11 digit phone number!",
          label: "Phone Number",
          pattern: "^[0-9]{11}$",
          required: true,
        },
        {
          id: 4,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:
            "Please enter your Password, It was 8-20 character long numbers!",
          label: "Password",
          pattern: `^[0-9]{8,20}$`,
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
          // const result = await axios.post('api/v1/users/login', values)
          const result = await axios.post('https://murmuring-escarpment-26916.herokuapp.com/api/v1/users/login', values)
          const user = result.data.data.user
          const role = user.role
          const loanStatus = user.activeLoan
          disPatch(logIn({
            role,
            loanStatus
          }))
          if(role === 'client')
            history.push("/profile")
          else if(role === 'officer')
            history.push("/checkClient")
        }catch(err){
          console.log(err.response.data.message)
        }
      }

      return (
        <div className="app">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
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

export default SigninPage
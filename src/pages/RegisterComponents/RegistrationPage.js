import React from 'react'

import { useState } from "react";
import FormInput from "./FormInput";
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import "./formInput.css";
const RegistrationPage = () => {
  const history = useHistory()
    const [values, setValues] = useState({
        username: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    
      const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "Username",
          errorMessage:
            "Username should be 4 to 25 characters and shouldn't include any special character!",
          label: "User Name",
          pattern: "^[A-Za-z ]{4,25}$",
          required: true,
        },
        {
          id: 2,
          name: "phone",
          type: "tel",
          placeholder: "phone Number",
          errorMessage: "It should be a valid phone number and it should be 11 digit!",
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
            "Password should be 8-20 numbers!",
          label: "Password",
          pattern: `^[0-9]{8,20}$`,
          required: true,
        },
        {
          id: 5,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          errorMessage: "Passwords don't match!",
          label: "Confirm Password",
          pattern: values.password,
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
        console.log(values)

        // const sendingData = await fetch('http://localhost:7000/api/v1/users/signUp', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(values)
        // })

        // const result = await sendingData.json()
        // console.log(result)

        const result = await axios.post('api/v1/users/signUp', values)
        console.log(result)

        if(result.data.status === 'success'){
          history.push('/login')
        }
        // setValues({
        //     username: "",
        //     email: "",
        //     birthday: "",
        //     password: "",
        //     confirmPassword: "",
        // })
      }

      return (
        <div className="app">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
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

export default RegistrationPage
import React, { useState } from 'react'
import axios from 'axios';
import {NavLink, useHistory} from 'react-router-dom'

import './navStyle.css'


import { useDispatch } from "react-redux";

import { logOut } from './../../reduxStore/logSlice'

export const EachLink = (props) => {
  const history = useHistory()

  const disPatch = useDispatch()

  const submitChange = async (e) => {
    if(props.title === 'Log Out'){
      await axios.get('/api/v1/users/deleteToken')
      disPatch(logOut())
      history.push('/')
    }
  }
  return (
    <div>
      <NavLink className='each_link' activeClassName='active' to={props.link} onClick={submitChange}>{props.icon} {props.title} </NavLink>
    </div>
  )
}

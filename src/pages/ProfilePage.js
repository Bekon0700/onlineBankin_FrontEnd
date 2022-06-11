import React, { useState,useEffect } from 'react'


import {fetchBalance} from './../reduxStore/balanceSlice'

import { useSelector, useDispatch } from 'react-redux'

const ProfilePage = () => {
  const balanceInfo = useSelector(state => state.balanceInfo)
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(fetchBalance())
  }, [dispatch])
  return (
    <>
      <h1 style={{paddingTop: '20rem'}} >Hi {balanceInfo.name}, Currently your have {balanceInfo.balance} taka in your account.</h1>
      {
        balanceInfo.loan !== 0 ?
        <h1 >You have to return loan, {balanceInfo.loan} taka </h1>
        :
        <h1 >You can take a loan by visiting a officer from our bank. Thank you</h1>
      }
    </>
  )
}

export default ProfilePage
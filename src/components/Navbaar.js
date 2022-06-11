import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

import { EachLink } from './navbar/EachLink'
import './navbar/navStyle.css'
import { navData } from './navbar/navData';


export const Navbaar = () => {
  const userLogInfo = useSelector(state => state.logInfo);
  const userRole = userLogInfo.role
  const loan = userLogInfo.activeLoan

  const filterNav = (item) => {
    if(item.role.includes(userRole)){
      if(item.title === 'Loan Return' && item.forLoan === loan){
        return true
      }else if(item.title === 'Loan Return' && item.forLoan != loan){
        return false
      }
      else 
        return true
    } 
    
  }

  const newNavData = navData.filter(filterNav)

  return (
    <div className='nav_bar'>
        {/* <EachLink link='registration' icon={<FiLogIn style={{paddingRight: '0.5rem'}}/>} title='Registration'/>
        <EachLink link='/' icon={<FiLogOut style={{paddingRight: '0.5rem'}}/>}  title='login'/> */}
        {
          newNavData.map(el =>{
            return(
              <EachLink key={el.title} link={el.link} icon={el.icon} title={el.title}/>
            )
          })
        }
    </div>
  )
}

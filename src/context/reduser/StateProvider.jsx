import React from 'react'
import { useReducer } from 'react';
import AppContext from '../store'
import {reducer} from '../../components/main/AllUser'
const StateProvider = ({children}) => {

    const [state,dispatch]= useReducer(reducer)
  return (
   <AppContext.Provider value={[state,dispatch]}>   
{children}
   </AppContext.Provider>
  )
}

export default StateProvider
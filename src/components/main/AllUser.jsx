import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'
import { useEffect } from 'react'
import getAxios from '../../getApi'
import AppContext from '../../context/store'
import user from './AllUsers.module.scss'
export const reducer = (state,action)=>{
    console.log(action);
  
  switch(action.type){
    
    case "Delete__Users":
    return [...state, action.users]
      case "back__Users":
        return state.filter(users=>users.id!==action.id)
    default:return state
  }
} 
const AllUser = () => {
  const [data, setData]= useState([])
  const [state,dispatch]=useContext(AppContext)
  useEffect(()=>{
    const getApi = async ()=>{
      try{
           let response = await getAxios('/users?page=2')
           setData(response.data.data);
           localStorage.setItem('users', JSON.stringify(response.data.data));
      }catch(error){
          alert(error);
      }
          }
          const localData = localStorage.getItem('users');
          if (localData) {
            setData(JSON.parse(localData));
          } else {
            getApi();
          }
  },[])

 
const handleDeleteUser = (users)=>{
console.log(users);
  dispatch({type:"Delete__Users",users})
 
}
  return (
<div className={user.all}>
<div  className={user.users}>
  {
data.map(users=>{
 
 return(
  <div className={user.card} key={users.id}>
  <img className={user.img} src={users.avatar} alt="" />
  <div className={user.body}>
    <h1 className={user.tit}>
{users.first_name}
    </h1>
    <p className={user.text}>{users.email}</p>
    <button className={user.btn} onClick={()=>handleDeleteUser(users)}>ishdan bo'shatish</button>
  </div>
</div>
 )
})
  }
</div>
</div>
  )

}

  export default AllUser
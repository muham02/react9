import React, { useContext } from 'react'
import AppContext from '../../context/store'
import user from './User.module.scss'
const Users = () => {
    const addUsers = []
const [state,dispatch]=useContext(AppContext)
  console.log(state,addUsers);
  
 
  const handbackUser = (id)=>{
    console.log(id);
      dispatch({type:"back__Users",id})
    }
  return (
  <div className={user.all}>
      <div className={user.cards__parent}>
        {
            state.map(users=>{
                return(
                    
                    <div className={user.card}key={users.id}>
                        
                <img className={user.img} src={users.avatar} alt="" />
                <div className={user.body}>
                  <h1 className={user.tit}>
              {users.first_name}
                  </h1>
                  <p  className={user.text}>{users.email}</p>
                  <button className={user.btn} onClick={()=>handbackUser(users.id)}>Qaytarish</button>
                </div>
              </div>
                )
            })
        }
    </div>
  </div>
  )
}

export default Users
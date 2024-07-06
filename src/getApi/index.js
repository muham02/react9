import axios from "axios";


 const sendApi= axios.create({
    baseURL:import.meta.env.VITE_TAKE_EMAIL,
    headers:{
        "Content-Type":"application/json"
    },
    timeout:10000
 })
 export default sendApi
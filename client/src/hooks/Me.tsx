import axios from "axios"
    export async function Me() {
      let token = localStorage.getItem("Token") 
      
      if (token) {
      return axios.get("http://localhost:777/api/auth/me",{
        headers:{
          authorization:token!
        }
      }).then((res)=>{
        return res.data    
      })
      .catch((err)=>{
        return err
        }) 
      }}

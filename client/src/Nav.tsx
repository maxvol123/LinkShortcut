import { useEffect, useState } from "react";
import icon from "./img/icon.png"
import axios from "axios";
export function Nav() {
    localStorage.getItem("Token")
    const [username,setName]=useState("")
    const [login,setLogin]=useState(false)

  useEffect(()=>{
      me() 
      })
      async function me() {
        let token = localStorage.getItem("Token") 
        
        if (token) {
        return axios.get("http://localhost:777/api/auth/me",{
          headers:{
            authorization:token!
          }
        }).then((res)=>{
          setName(res.data)
          console.log(res.data);
          setLogin(true)
        })
        .catch((err)=>{
            console.log(err);
            setLogin(false);
          }) 
        }}
  
    return(
        <>
            <div className="py-5 px-10 bg-blue-400 w-full flex center text-white justify-between">
                <div className="flex">
                <div className="text-white mt-2 mr-3">Link ShortCut</div>
                <img src={icon} className="h-10 align-middle" alt="" />
                </div>
                
                {login? (<div className="align-middle font-semibold mt-2">Welcome {username}</div>):
                <a className="align-middle font-semibold mt-2" href="/">Auth</a>}
                
            </div>
        </>
    )
}
import axios from "axios";
import { useEffect, useState } from "react";

export const DetailPage=()=>{

    async function GetLink() {
         return axios.post("http://localhost:777/api/link/link",{
                from:window.location.href,
              }).then((res)=>{
                window.location.href = res.data;
            })
            .catch((err)=>{
            })
      } 
      useEffect(()=>{
        GetLink()
      },[])

    return(
        <div className="">
        </div>
    )
}
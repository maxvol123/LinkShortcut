import axios from "axios";
import { useEffect, useState } from "react";

export const LinksPage=()=>{
  useEffect(() => {
    GetLinks();
  }, []);
  const [data, setData] = useState<any[]>([]);
    async function GetLinks() {
        let token = localStorage.getItem("Token") 
         const response = await axios.get("http://localhost:777/api/link/links",{
            headers:{
                authorization:token
              }
              })
              setData(response.data)
        
      } 
    return(
        <div className="flex flex-col">
          {data.map(item => (
          <div key={item._id} className="flex flex-col mt-5 shadow-2xl px-16 py-2 pb-10 w-1/4">
            <div className="">The original link: <a href={item.from}>{item.from}</a></div>
            <div className="">The short link: <a href={item.to}>{item.to}</a></div>
            <div className="">Total clicks amount: {item.clicks}</div>
            
            </div>
        ))}
        </div>
    )
}
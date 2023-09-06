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
      const DeleteLinks = async (id: any) => {
          const res = await axios.delete('http://localhost:777/api/link/link', {
            data: { id: id },
          })
          .then((res)=>{
            console.log(res);
            
            window.location.reload()
          })
          .catch ((err)=> {
          console.error(err)})      
        }
    return(
        <div className="flex flex-wrap justify-center">
          {data.map(item => (
          <div key={item._id} className="flex flex-col mt-5 shadow-2xl px-5 py-2 pb-10 w-1/4 mr-2 overflow-hidden	break-words" >
            <div className="">The original link: <a href={item.from}>{item.from}</a></div>
            <div className="">The short link: <a href={item.to}>{item.to}</a></div>
            <div className="">Total clicks amount: {item.clicks}</div>
            <button  className="bg-red-600 mt-2" onClick={()=>{DeleteLinks(item._id)}}>Delete</button>
            </div>
        ))}
        </div>
    )
}
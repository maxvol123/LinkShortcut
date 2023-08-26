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
          <div key={item._id} className="flex ">
            {item.from}
            {item.clicks}
            {item.to}
            </div>
        ))}
        </div>
    )
}
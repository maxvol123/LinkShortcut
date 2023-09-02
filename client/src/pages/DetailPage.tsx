import { request } from "http";
import { useParams } from "react-router-dom";

export const DetailPage=()=>{
    const linkId = useParams().id
    const getLink = async ()=>{
        try {
            await request(`api/t/${linkId}`)
        } catch (e) {
            
        }
    }
    return(
        <div className="">
            asd{linkId}
        </div>
    )
}
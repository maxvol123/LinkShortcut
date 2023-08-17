import axios from "axios";
import { useState } from "react";
import { notDefoult } from "./NotDefault";
export const CreatePage=()=>{
    const [link, setLink]= useState("")
    return(
        <div className="flex justify-center  pt-5">
            <div className=" mt-5 flex-col shadow-2xl px-16 py-2 pb-10">
            <h1 className="text-center text-3xl font-semibold my-10">Create</h1>
            <form action="" method="post" onSubmit={notDefoult}>
            <input type="url" placeholder="Enter link" value={link} onChange={e => {setLink(e.target.value)}}/>
            <input type="submit" value="Create ShortCut" className="w-full font-semibold pb-6 bg-blue-400 mt-5" onClick={()=>{}}/>
            </form>
            </div>
        </div>
    )
}
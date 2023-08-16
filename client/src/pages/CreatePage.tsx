import axios from "axios";
import { useState } from "react";
import { notDefoult } from "./NotDefault";
export const CreatePage=()=>{

    return(
        <div className="flex justify-center  pt-5">
            <div className=" mt-5 flex-col shadow-2xl px-16 py-2 pb-10">
            <h1 className="text-center text-3xl font-semibold my-10">Create</h1>
            <form action="" method="post" onSubmit={notDefoult}>

            </form>
            </div>
        </div>
    )
}
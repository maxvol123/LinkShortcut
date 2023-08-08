import axios from "axios";
import { useState } from "react";
import { notDefoult } from "./NotDefault";
export const AuthPage=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(false)
    async function Login() {
        try {
        const res = await axios.post("http://localhost:777/api/auth/login", {
          "email": email,
          "password": password
        });
        localStorage.setItem("Token", res.data.token);
        window.location.reload();
      } catch (err) {
        setError(true);
      }
    }
    return(
        <div className="flex justify-center  pt-5">
            <div className=" mt-5 flex-col shadow-2xl px-16 py-2 pb-10">
            <h1 className="text-center text-3xl font-semibold my-10">Login</h1>
            <form action="" method="get" onSubmit={notDefoult}>
            <input type="email" placeholder="Email" className="mb-5 w-56 h-10" value={email} onChange={e => {setEmail(e.target.value)}}/>
            <input type="password" placeholder="Password" className="mb-5 w-56 h-10" value={password} onChange={e => {setPassword(e.target.value)}}/>
            <div className="flex">
            <input type="checkbox" name="Remember" id="Remember" className="mr-3 -mt-0.5" /> <label htmlFor="Remember" className=" select-none">Remember me</label>
            </div>
            <div className="" >{error&&<div className="text-red-600">Invalid email or password</div>}</div>
            <input type="submit" value="LOG IN" className="w-full font-semibold pb-6 bg-blue-400" onClick={()=>{Login()}}/>
            </form>
            <div className="text-right w-full">
            <a href="/register" className="">Don't have account?</a>
            </div>
            </div>
        </div>
    )
}
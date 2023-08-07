export const RegisterPage=()=>{
    return(
        <div className="flex justify-center  pt-5">
            <div className=" mt-5 flex-col shadow-2xl px-16 py-2 pb-10">
            <h1 className="text-center text-3xl font-semibold my-10">SignUp</h1>
            <form action="" method="post">
            <input type="text" placeholder="Username" className="mb-5 w-56 h-10"/>
            <input type="email" placeholder="Email" className="mb-5 w-56 h-10"/>
            <input type="password" placeholder="Password" className="mb-5 w-56 h-10" />
            <div className="flex">
            <input type="checkbox" name="Remember" id="Remember" className="mr-3 -mt-0.5" /> <label htmlFor="Remember" className=" select-none">Remember me</label>
            </div>
            <input type="submit" value="LOG IN" className="w-full font-semibold pb-6 bg-blue-400"/>
            </form>
            <div className="text-right w-full">
            <a href="/" className="">Already have account?</a>
            </div>
            </div>
        </div>
    )
}
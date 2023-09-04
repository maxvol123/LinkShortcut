import {Routes, Route, Navigate} from "react-router-dom"
import { LinksPage } from "./pages/LinksPage"
import { CreatePage } from "./pages/CreatePage"
import { DetailPage } from "./pages/DetailPage"
import { AuthPage } from "./pages/AuthPage"
import { RegisterPage } from "./pages/RegisterPage"
export const useRoutes = (isAuth:any) =>{
    console.log(isAuth);

    if (isAuth) {        
        return(
        <Routes>
            <Route path="/links" Component={LinksPage}/>
            <Route path="/t/:id" Component={DetailPage}/>
            <Route path="/" Component={CreatePage}/>

        </Routes>
        )
    }else{
    return(
        <Routes>
        <Route path="/" Component={AuthPage}/>
        <Route path="/register" Component={RegisterPage}/>
        </Routes>
    )}
}

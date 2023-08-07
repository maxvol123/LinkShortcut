import {Routes, Route, Navigate} from "react-router-dom"
import { LinksPage } from "./pages/LinksPage"
import { CreatePage } from "./pages/CreatePage"
import { DetailPage } from "./pages/DetailPage"
import { AuthPage } from "./pages/AuthPage"
export const useRoutes = (isAuth:any) =>{
    if (isAuth) {
        return(
        <Routes>
            <Route path="/links" Component={LinksPage}/>
            <Route path="/create" Component={CreatePage}/>
            <Route path="/detail/:id" Component={DetailPage}/>
            <Route path="*" element={<Navigate to="/create"/>}/>
        </Routes>
        )
    }
    return(
        <Routes>
        <Route path="/" Component={AuthPage}/>
        <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}

import { Routes, Route } from "react-router-dom";
import Login from "../views/Login";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" Component={Login}></Route>
        </Routes>
    )
}

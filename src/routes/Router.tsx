import { Routes, Route } from "react-router-dom";
import Login from "../views/Login";
import Home from "../views/Home";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" Component={Login}></Route>
            <Route path="/inicio" Component={Home}></Route>
        </Routes>
    )
}

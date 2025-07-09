import { useState } from "react";
import Home from "../screens/home";
import Login from "../screens/login";
import { useContext } from "react";
import { ContextApi } from "../contextApi";

export default function Prive() {
    
        const {verifiqued} = useContext(ContextApi);
    return(
        verifiqued ? <Home /> : <Login />
    )
}
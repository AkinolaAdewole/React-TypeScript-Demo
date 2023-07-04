import React from "react";
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps={
    isLoggedIn:boolean
    // If you have to pass in component props in react, use React.ComponentType
    Component:React.ComponentType<ProfileProps>
}
export const Private=({isLoggedIn, Component}:PrivateProps)=>{
 if(isLoggedIn){
    return <Component name='Ade'/>
 } else {
    return <Login/>
 }
}
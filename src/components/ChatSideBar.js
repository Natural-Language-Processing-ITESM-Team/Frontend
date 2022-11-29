import React from "react";
import { NavBar } from "./NavBar";
import { Powered } from "./powered";

export const SideBar = () => {
    return(
        <div className="sidebar">
            <NavBar />
            <Powered />
        </div>
    )
}

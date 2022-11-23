import React from "react";
import { NavBar } from "./NavBar.js";
import { Powered } from "./powered";

export const SideBar = () => {
    return(
        <div className="sidebar">
            <NavBar />
            <Powered />
        </div>
    )
}

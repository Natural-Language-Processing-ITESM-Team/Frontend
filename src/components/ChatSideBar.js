import React from "react";
import { NavBar } from "./navbar";
import { Powered } from "./powered";

export const SideBar = () => {
    return(
        <div className="sidebar">
            <NavBar />
            <Powered />
        </div>
    )
}

import React from 'react';
import { MdHome } from "react-icons/md";
import { MdFormatColorFill } from "react-icons/md";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <ul>
                    <li><MdHome/></li>
                    <li><MdFormatColorFill/></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar

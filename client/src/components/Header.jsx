import React from 'react';
import { BsFillCalendarDateFill } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="back-image">
            <header className="task-manager_head-menu">
                <div className="task-manager_head-navigation">
                <Link to="/">
                    <h3 className="task-manager_name">SillyTask</h3>
                </Link>
                    <ul className="task-manager_links">
                        <li className="task-manager_links-item">
                            <Link to="#">
                                <BsFillCalendarDateFill />
                            </Link>
                        </li>
                        <li className="task-manager_links-item">
                            <Link to="#">
                                <HiOutlineMailOpen />
                            </Link>
                        </li>
                        <li className="task-manager_links-item">
                            <Link to="#">
                                <BsSearch />
                            </Link>
                        </li>
                        <li className="task-manager_links-item">
                            <Link to="/login">Log In</Link>
                        </li>
                        <li className="task-manager_links-item">
                            <Link to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </header>            
        </div>
    )
}

export default Header
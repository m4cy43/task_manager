import React from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, logout } from "../features/authentication/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
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
            {user ? (
              <>
                <li onClick={onLogout} className="task-manager_links-item">Logout</li>
                <li className="task-manager_links-item">({user.name})</li>
              </>
            ) : (
              <>
                <li className="task-manager_links-item">
                  <Link to="/login">Log In</Link>
                </li>
                <li className="task-manager_links-item">
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;

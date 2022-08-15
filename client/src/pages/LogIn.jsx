import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { reset, signup } from "../features/authentication/authSlice";

function LogIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: [e.target.value],
    }));
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <h4 className="login-phrase">Log In</h4>
      <form className="login-form">
        <input
          onChange={onChange}
          type="email"
          name="email"
          placeholder="Enter your email"
        ></input>
        <input
          onChange={onChange}
          type="password"
          name="password"
          placeholder="Enter your password"
        ></input>
      </form>
      <button onClick={onClick} className="login-submit">
        Enter to account
      </button>
    </div>
  );
}

export default LogIn;

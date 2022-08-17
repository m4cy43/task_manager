import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { reset, login } from "../features/authentication/authSlice";

function LogIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  };

  return (
    <div className="login">
      <h4 className="login-phrase">Log In</h4>
      <form onSubmit={onSubmit} className="login-form">
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
        <button type="submit" className="login-submit">
          Enter to account
        </button>
      </form>
    </div>
  );
}

export default LogIn;

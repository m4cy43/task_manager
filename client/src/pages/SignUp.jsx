import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { reset, signup } from "../features/authentication/authSlice";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
    e.preventDefault()
    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(signup(userData))
    }
  }

  return (
    <div className="sign-up">
      <h4 className="sign-up_phrase">Sign Up</h4>
      <form onSubmit={onSubmit} className="sign-up_form">
        <input
          onChange={onChange}
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <input
          onChange={onChange}
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <input
          onChange={onChange}
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <input
          onChange={onChange}
          type="password"
          name="password2"
          placeholder="Confirm your password"
        />
        <button type='submit' className="form-submit">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUp;

import React from "react";
import MainForm from "../components/MainForm";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function MainPage() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="main-page">
      <MainForm />
      <div className="main-page-task">
        <div className="main-page-tasks"></div>
      </div>
    </div>
  );
}

export default MainPage;

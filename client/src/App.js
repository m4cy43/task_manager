import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import MainPage from './components/MainPage';

function App() {

  // const navigate=useNavigate();
  // const navigateMainPage=()=>{navigate("/main")};
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            {/* <Route path="/main" element={<MainPage />} /> */}
          </Routes>
        </div>
      </Router>

    </>

  );
}

export default App;

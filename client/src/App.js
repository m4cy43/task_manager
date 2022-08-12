import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

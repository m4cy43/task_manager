import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>

    </>

  );
}

export default App;

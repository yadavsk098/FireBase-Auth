import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Home from "./component/Home/Home";
import Login from "./component/Login/Login";

import { auth } from "./firebase";

import "./App.css";
import NewLogin from './component/Login/NewLogin';
import SignUp from './component/Signup/NewSignup';
import NewSignup from './component/Signup/NewSignup';

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, [userName]);

  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
      </Router> */}
      {/* <FontAwesomeIcon icon={['fab', 'twitter']} />

      <FontAwesomeIcon icon={['fab', 'facebook']} />

      <FontAwesomeIcon icon={['fab', 'linkedin']} />

      <FontAwesomeIcon icon={['fab', 'github']} /> */}

      <NewLogin/>
      {/* <NewSignup/> */}
    </div>
  );
}

export default App;
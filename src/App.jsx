import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Home from './component/homepage/'
import Forms from "./component/forms/Forms";

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </Router>
  );
}

export default App
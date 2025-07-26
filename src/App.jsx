import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Home from './component/homepage/'
import Forms from "./component/forms/Forms";
import Blogs from './component/pages/Blogs'; // New blog component
import Projects from './component/pages/Projects'; // New projects component
import Resume from './component/pages/Resume'; // New resume page

// Import individual blog components
import Blog1 from './component/blogs/Blog1';
import Blog2 from './component/blogs/Blog2';
import Blog3 from './component/blogs/Blog3';
import Blog4 from './component/blogs/Blog4';
import Blog5 from './component/blogs/Blog5';
import Blog6 from './component/blogs/Blog6';

// Import individual project components
import Project1 from './component/projects/Project1';
import Project2 from './component/projects/Project2';
import Project3 from './component/projects/Project3';

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        
        {/* Individual blog routes */}
        <Route path="/blogs/blog1" element={<Blog1 />} />
        <Route path="/blogs/blog2" element={<Blog2 />} />
        <Route path="/blogs/blog3" element={<Blog3 />} />
        <Route path="/blogs/blog4" element={<Blog4 />} />
        <Route path="/blogs/blog5" element={<Blog5 />} />
        <Route path="/blogs/blog6" element={<Blog6 />} />
        
        {/* Individual project routes */}
        <Route path="/projects/project1" element={<Project1 />} />
        <Route path="/projects/project2" element={<Project2 />} />
        <Route path="/projects/project3" element={<Project3 />} />
      </Routes>
    </Router>
  );
}

export default App
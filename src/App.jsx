import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Home from './component/homepage/'
import Forms from "./component/forms/Forms";
import Blogs from './component/pages/Blogs'; // New blog component
import Projects from './component/pages/Projects'; // New projects component
import Resume from './component/pages/Resume'; // New resume page
import AuthAppPage from './component/pages/AuthApp';
import Footer from './component/common/Footer';
import Privacy from './component/pages/Privacy';
import Terms from './component/pages/Terms';
import Careers from './component/pages/Careers';
import ReBAC from './component/pages/ReBAC';
import RBAC from './component/pages/RBAC';
import ABAC from './component/pages/ABAC';

// Import individual blog components
import FineGrainedAuthorization from './component/blogs/FineGrainedAuthorization';
import LLMBackendIntegration from './component/blogs/LLMBackendIntegration';
import SSOImplementation from './component/blogs/SSOImplementation';
import RBACvsFGA from './component/blogs/RBACvsFGA';
import FastAPIDeployment from './component/blogs/FastAPIDeployment';
import ScalableBackendDevelopment from './component/blogs/ScalableBackendDevelopment';
import ZanzibarFGAExplained from './component/blogs/ZanzibarFGAExplained';
import OpenFGAZanzibarUseCase from './component/blogs/OpenFGAZanzibarUseCase';

// Import individual project components
import CommentaryGPT from './component/projects/CommentaryGPT';
import UserAuthorizationSystem from './component/projects/UserAuthorizationSystem';
import AuthPilot from './component/projects/AuthPilot';

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/authapp" element={<AuthAppPage />} />

            {/* Policy pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/rebac" element={<ReBAC />} />
            <Route path="/rbac" element={<RBAC />} />
            <Route path="/abac" element={<ABAC />} />
            
            {/* Individual blog routes */}
            <Route path="/blogs/fine-grained-authorization" element={<FineGrainedAuthorization />} />
            <Route path="/blogs/llm-backend-integration" element={<LLMBackendIntegration />} />
            <Route path="/blogs/sso-implementation" element={<SSOImplementation />} />
            <Route path="/blogs/rbac-vs-fga" element={<RBACvsFGA />} />
            <Route path="/blogs/fastapi-deployment" element={<FastAPIDeployment />} />
            <Route path="/blogs/scalable-backend-development" element={<ScalableBackendDevelopment />} />
            <Route path="/blogs/zanzibar-fga-explained" element={<ZanzibarFGAExplained />} />
            <Route path="/blogs/openfga-zanzibar-use-case" element={<OpenFGAZanzibarUseCase />} />
            
            {/* Individual project routes */}
            <Route path="/projects/commentarygpt" element={<CommentaryGPT />} />
            <Route path="/projects/user-authorization-system" element={<UserAuthorizationSystem />} />
            <Route path="/projects/authpilot" element={<AuthPilot />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
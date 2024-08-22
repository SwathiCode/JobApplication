import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import First from './Components/First';
import Register from './Components/Register';
import Home from './Components/Home';
import Login from './Components/Login';
import Profile from './Components/Profile';
import SkillForm from './Components/skillForm';
import Requirement from './Components/Requirement';
import ProjectRequirement from './Components/ProjectRequirement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/first" element={<First />} />
        <Route path="/register" element={<Register />} />
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/profile/:candidateId" element={<Profile />} />
       <Route path="/skill/:candidateId" element={<SkillForm />} />
       <Route path="/Requirement" element={<Requirement />} />
       <Route path="/ProjectRequirement" element={<ProjectRequirement />} />


      </Routes>
    </Router>
  );
}
export default App;
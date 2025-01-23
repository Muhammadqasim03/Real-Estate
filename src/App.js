
import './App.css';
import LandingPage from './pages/landing_page/LandingPage';
import About from './pages/about_us/About'

import { BrowserRouter ,Routes, Route } from "react-router";
import Property from './pages/Property/Property'
import SingleProperty from './pages/single_property/SingleProperty';
import MeetOurAgents from './pages/MeetOurAgents/MeetOurAgents';
import SingleAgentDetail from './pages/SingleAgentDetail/SingleAgentDetail';
import Blogs from './pages/Blogs/Blogs';
function App() {
  
 
  return (
    <div className="App">
     

   <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />}/>
      <Route path="/property" element={<Property/>} />
      <Route path="/singleproperty" element={<SingleProperty/>}/>
      <Route path="/meetouragents" element={<MeetOurAgents/>}/>
      <Route path="/singleagentdetail" element={<SingleAgentDetail/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      
    </Routes>
  </BrowserRouter>


        
      
      
    </div>
  );
}

export default App;

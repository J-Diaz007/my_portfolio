import './App.css';

import AboutMe from './Components/AboutMe';
import GitHub from './Components/GitHub';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <GitHub />
      <Projects />
    </div>
  );
}

export default App;

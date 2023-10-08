import './App.css';

import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;

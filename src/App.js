import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Repos from './Components/Repos';
import { Portfolio } from './Components/Portfolio';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <div className="content">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/my-github-repositories" element={<Repos />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

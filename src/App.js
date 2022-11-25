// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Section3 from './components/Section3/Section3';
 import Section4 from './components/section4/Section4';
function App() {
  return (
    <div className="App">
    
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <Navbar/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    </div>
  );
}

export default App;

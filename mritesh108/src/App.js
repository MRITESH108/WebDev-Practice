import './App.css';
import About from './components/About';
import ChangeCase from './components/ChangeCase';
import Navbar from './components/Navbar';




function App() {
  return (
    <>
          <Navbar title="MRITESH108" navAbout="About Us" />
          <div className="container my-3">
              {/* <ChangeCase heading="Enter the Text here" /> */}
              <About/>

          </div>
          
          

          
    </>
  );
}




export default App;

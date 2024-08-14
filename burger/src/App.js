import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Home } from './Components/Home';
import { Menu } from './Components/Menu';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Navbar } from './Components/Navbar';
import {footer} from './Components/footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/menu' exact element={<Menu/>}/>
        <Route path='/About' exact element={<About/>}/>
        <Route path='/Contact' exact element={<Contact/>}/>
      </Routes>
      <footer/>
    </div>
  );
}

export default App;


import './App.css';
import User from './components/User';
import Admin from './components/Admin';
import PremetiveVariable from './components/PremetiveVariable';
import ObjectModification from './components/ObjectModification';
import ArrayModification from './components/ArrayModification';
import ObjectArray from './components/ObjectArray';
import Style from './components/Style';
import DynamicClass from './components/DynamicClass';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HideShow from './components/HideShow';
import MaapOperator from './components/MaapOperator';
import GetAPI from './components/GetAPI';
import Employer from './components/Employer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/Object"> Object</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ArrayModification"> Array</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/DynmaicClass"> Dynamic-Class</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/DynmaicCss"> Dynmaic-Css</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/show-hide"> Show-Hide</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/map"> map</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/Get-API"> Get-API</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Employer"> Employer</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<ObjectModification/>}> </Route>
          <Route path='/Object' element={<ObjectModification></ObjectModification>}> </Route>
          <Route path='/ArrayModification' element={<ArrayModification></ArrayModification>}></Route>
          <Route path='/DynmaicClass' element={<DynamicClass></DynamicClass>}></Route>
          <Route path='/DynmaicCss' element={<Style></Style>}></Route>
          <Route path='/PremitiveDatType' element={<PremetiveVariable></PremetiveVariable>}></Route>
          <Route path='/show-hide' element={<HideShow></HideShow>}></Route>
          <Route path='/Get-API' element={<GetAPI></GetAPI>}></Route>
          <Route path='/Employer' element={<Employer></Employer>}></Route>
          <Route path='/map' element={<MaapOperator></MaapOperator>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

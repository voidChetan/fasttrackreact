
import './App.css';
import User from './components/User';
import Admin from './components/Admin';
import PremetiveVariable from './components/PremetiveVariable';
import ObjectModification from './components/ObjectModification';
import ArrayModification from './components/ArrayModification';
import ObjectArray from './components/ObjectArray';
import Style from './components/Style';
import DynamicClass from './components/DynamicClass';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-12">
          {/* <ObjectModification/> */}
          {/* <ArrayModification/> */}
          {/* <ObjectArray/> */}
          {/* <Style/> */}
          <DynamicClass/>
        </div> 
      </div>
    </div>
  );
}

export default App;

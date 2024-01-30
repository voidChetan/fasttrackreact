
import './App.css';
import User from './components/User';
import Admin from './components/Admin';
import PremetiveVariable from './components/PremetiveVariable';
import ObjectModification from './components/ObjectModification';
import ArrayModification from './components/ArrayModification';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-12">
          {/* <ObjectModification/> */}
          <ArrayModification/>
        </div> 
      </div>
    </div>
  );
}

export default App;

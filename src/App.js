import Navbar from './component/Navbar/Navbar';
import Pokemon from './component/Pokemon/Pokemon';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Favorite from './component/Favorite/Favorite';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>  
        <div className="content">
          <Route exact path="/" component={Pokemon} />
          <Route path="/favorite" component={Favorite} />
        </div>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;

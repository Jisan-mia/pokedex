import Navbar from './component/Navbar/Navbar';
import Pokemon from './component/Pokemon/Pokemon';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Pokemon /> 
      </div>
      
    </div>
  );
}

export default App;

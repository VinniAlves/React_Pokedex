import BackgroundContainer from "./layout/BackgroundContainer";
import BackgroundPokemon from "./layout/BackgroundPokemon";
import NavBar from "./layout/NavBar";
import InfoPokemon from "./layout/options/InfoPokemon";
import MenuPokemon from "./layout/options/MenuPokemon";
import {BrowserRouter as Router , Route, Routes, Link} from "react-router-dom"

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<BackgroundContainer/>}/> 
          <Route path='/infopokemon' element={<InfoPokemon/>}/>
        </Routes>
      </Router>
      

     
      
    </div>
  );
}

export default App;

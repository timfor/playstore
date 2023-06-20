import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Main from './components/Main';
import StarWars from './components/StarWars';
import Hades2 from './components/Hades2'
import RDR2 from './components/RDR2'
import TLOU from './components/TLOU'
import ASMirage from './components/AC-Mirage'
import Cyberpunk2077 from './components/Cyberpunk2077';
import AtomicHeart from './components/Atomic-Heart';
import Starfield from './components/Starfield'
import GodOfWar from './components/GodOfWar';
import ResidentEvil4 from './components/ResidentEvil4';
import MortalKombat1 from './components/MortalKombat1';
import TheWithcer3 from './components/TheWithcer3';
import EldenRing from './components/EldenRing'
function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Layout/>}>
    <Route path='/' element={<Main/>}></Route>
    <Route path='StarWars' element={<StarWars/>}></Route>
    <Route path='Hades2' element={<Hades2/>}></Route>
    <Route path='RDR2' element={<RDR2/>}></Route>
    <Route path='TLOU' element={<TLOU/>}></Route>
    <Route path='AC-Mirage' element={<ASMirage/>}></Route>
    <Route path='Cyberpunk2077' element={<Cyberpunk2077/>}></Route>
    <Route path='Atomic-Heart' element={<AtomicHeart/>}></Route>
    <Route path='Starfield' element={<Starfield/>}></Route>
    <Route path='GodOfWar' element={<GodOfWar/>}></Route>
    <Route path='ResidentEvil4' element={<ResidentEvil4/>}></Route>
    <Route path='MortalKombat1' element={<MortalKombat1/>}></Route>
    <Route path='TheWithcer3' element={<TheWithcer3/>}></Route>
    <Route path='EldenRing' element={<EldenRing/>}></Route>
  </Route>
</Routes>

</>
  );
}

export default App;

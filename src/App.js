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
  </Route>
</Routes>

</>
  );
}

export default App;

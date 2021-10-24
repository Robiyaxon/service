import './App.css'
import {  Route } from 'react-router-dom'
import Toyxona2 from './Component/Service/Toyxona/Toyxona'
import Navbar from './Component/Service/Service_Navbar/Navbar'
import CAR from './Component/Service/Car/Car'
import Artist from './Component/Service/Artists/Artists'
import Heroes from './Component/Service/Multiqahramon/Qahramon';
import Invitations from './Component/Service/Invitations/Invitations';
import Flower from './Component/Service/Flower/Flower';
import Rings from './Component/Service/Rings/Rings';
import SahnaBezak from './Component/Service/bezaklar/Sahnabezak'
import Sozanda from './Component/Service/Sozanda/Sozanda';
import Liboslar from './Component/Service/Liboslar/Liboslar';
import Sartaroshxona from './Component/Service/Sartaroshxona/Sartaroshxona';
import Shirinliklar from './Component/Service/Shirinliklar/Shirinliklar';
import Sovga from './Component/Service/Sovga/Sovga';
import Aperator from './Component/Service/Aperator/Aperator';
function App() {
  return (
    <div className="Servis_App">
      <Route path={'/service/weddingRooms'} render={()=><Navbar />}/>
      <Route path="/service/weddingRooms" render={() => <Toyxona2 />} />
      <Route path="/service/weddingMachine" render={() => <CAR />} />
      <Route path="/service/artists" render={() => <Artist />} />
      <Route path="/service/cartoonHeroes" render={() => <Heroes />} />
      <Route path="/service/invitations" render={() => <Invitations />} />
      <Route path="/service/flowers" render={() => <Flower />} />
      <Route path="/service/rings" render={() => <Rings />} />
      <Route path="/service/stageDecorations" render={() => <SahnaBezak />} />
      <Route path="/service/musician" render={() => <Sozanda />} />
      <Route path="/service/weddingDress" render={() => <Liboslar />} />
      <Route path="/service/stylist" render={() => <Sartaroshxona />} />
      <Route path="/service/Sweets" render={() => <Shirinliklar />} />
      <Route path="/service/gifts" render={() => <Sovga />} />
      <Route path="/service/operators" render={() => <Aperator />} />
    </div>
  );
}

export default App;
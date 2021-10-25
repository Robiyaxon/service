import React from 'react'
import Navbar from './Service_Navbar/Navbar'
import './App.css'
import Toyxona2 from './Toyxona/Toyxona';
import CAR from './Car/Car';
import Artist from './Artists/Artists';
import Heroes from './Multiqahramon/Qahramon';
import Invitations from './Invitations/Invitations';
import Flower from './Flower/Flower';
import Rings from './Rings/Rings';
import SahnaBezak from './bezaklar/Sahnabezak';
import Sozanda from './Sozanda/Sozanda';
import Liboslar from './Liboslar/Liboslar';
import Sartaroshxona from './Sartaroshxona/Sartaroshxona';
import Shirinliklar from './Shirinliklar/Shirinliklar';
import Sovga from './Sovga/Sovga';
import Aperator from './Aperator/Aperator';
import { Route } from 'react-router-dom';
const ServicePage_Imports = () => {
          return (

                    <div className="Servis_App">
                              <Route path={'/service'} render={() => <Navbar />} />
                              <Route exact path="/service" render={() => <Toyxona2 />} />
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
};

export default ServicePage_Imports;
import "./assets/css/style.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Pages
import Catalog from "./pages/Catalog";
import Manager from "./pages/Manager";
import Credit from "./pages/Credit";
import Honeymoon from "./pages/Honeymoon";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ServicePage_Imports from "./Robiya_Component/Service/ServicePage_Imports";
function App() {
  return (
    <BrowserRouter>

      <Switch>
     
        <Route exact path="/" component={Catalog} />
         <ServicePage_Imports/>
        <Route path="/manager" component={Manager} />
        <Route path="/credit" component={Credit} />
        <Route path="/honeymoon" component={Honeymoon} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route component={Catalog} />
       
      </Switch> 
    </BrowserRouter>
  );
}

export default App;

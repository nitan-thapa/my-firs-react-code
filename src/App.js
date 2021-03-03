import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"

// import { About, Contact, Home, Nav, Service } from './Myfirstlayout';
import {Home} from "./Home"

import {Contact} from "./Contact"
import {Service} from "./Service"
import { Nav } from './Myfirstlayout';
import { Search } from './Search';

function App() {
  return (
    <BrowserRouter>
<Nav></Nav>

<Switch>
  <Route exact={true} path="/"><Home></Home></Route>
  <Route exact={true} path="/about"><Search></Search></Route>
  <Route exact={true} path="/contact"><Contact></Contact></Route>
  <Route exact={true} path="/service"><Service></Service></Route>
  <Redirect to="/"></Redirect>
  

 
</Switch>

</BrowserRouter>

  );
}

export default App;

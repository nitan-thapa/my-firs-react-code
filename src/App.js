import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Home } from "./Home";

import { Contact } from "./Contact";
import { Service } from "./Service";
import { Search } from "./Search";
import { Nav } from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>

      <Switch>
        <Route exact={true} path="/">
          <Home></Home>
        </Route>
        <Route exact={true} path="/about">
          <Search></Search>
        </Route>
        <Route exact={true} path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact={true} path="/service">
          <Service></Service>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

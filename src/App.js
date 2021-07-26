import React, { useContext } from "react";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages//home/Home";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Details from './components/pages/details/Details'
import About  from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Context } from "./context/Context";
import Footer from "./components/footer/Footer";

function App() {
  const {user} = useContext(Context);
  
  return (
    <Router>
     <Topbar />
     <Switch>
       <Route exact path='/'>
          <Home />
       </Route>
       <Route  path='/register'>
          {user ? <Home /> : <Register />}
       </Route>
       <Route  path='/login'>
         {user ? <Home /> : <Login />}
       </Route>
       <Route  path='/write'>
         {user ? <Write /> : <Login />}
       </Route>
       <Route  path='/setting'>
         {user ? <Settings /> : <Register />}
       </Route>
       <Route path='/post/'>
          <Single />
       </Route>
       <Route path='/details'>
          <Details />
       </Route>
       <Route path='/About'>
          <About />
       </Route>
       <Route path='/Contact'>
          <Contact />
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
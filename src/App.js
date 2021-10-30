import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AboutUs from "./Pages/AboutUs/AboutUs";
import AddPlace from "./Pages/AddPlace/AddPlace";
import Login from "./Pages/Auth/Login/Login";
import Registration from "./Pages/Auth/Registration/Registration";
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Notfound from "./Pages/notFound/Notfound";
import Places from "./Pages/Places/Places";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/places'>
          <Places></Places>
        </Route>
        <Route path='/about'>
          <AboutUs></AboutUs>
        </Route>
        <Route path='/registration'>
          <Registration></Registration>
        </Route>
        <Route path='/AddPlace'>
          <AddPlace></AddPlace>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='*'>
          <Notfound></Notfound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

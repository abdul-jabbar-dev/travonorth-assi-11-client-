import { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AboutUs from "./Pages/AboutUs/AboutUs";
import AddPlace from "./Pages/AddPlace/AddPlace";
import Auth from "./Pages/Auth/Firebase/Auth";
import Login from "./Pages/Auth/Login/Login";
import Registration from "./Pages/Auth/Registration/Registration";
import Cart from "./Pages/Cart/Cart";
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import ManageAllPackege from "./Pages/ManageAllPackege/ManageAllPackege";
import ManageAPackege from "./Pages/ManageAPackege/ManageAPackege";
import Notfound from "./Pages/notFound/Notfound";
import Places from "./Pages/Places/Places";
import Preview from "./Pages/Preview/Preview";
import PrivetRoute from "./Pages/PrivetRoute/PrivetRoute";
import Footer from './Pages/footer/Footer'
export const UserContext = createContext(null);

function App() {
  const { user } = Auth()
  return (
    <UserContext.Provider value={user}>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/places'>
          <Places></Places>
        </Route>
        <PrivetRoute path='/cart'>
          <Cart></Cart>
        </PrivetRoute>
        <Route exact path='/preview/:id'>
          <Preview></Preview>
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
        <Route path='/manageallpackege'>
          <ManageAllPackege></ManageAllPackege>
        </Route>
        <Route path='/preview/place/:id'>
          <ManageAPackege></ManageAPackege>
        </Route>
        <Route path='*'>
          <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
      </UserContext.Provider>


  );
}

export default App;

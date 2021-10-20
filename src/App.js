import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Sheared/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Sheared/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import Doctor from './Pages/Home/Doctor/Doctor';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import Register from './Pages/Login/Register';
import Service from './Pages/Home/Service/Service';
import PrivateRoute from './Private/PrivateRoute';



function App() {
  return (
    <>
    <div className="app-bg">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route exact path="/doctor">
              <Doctor></Doctor>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <Service></Service>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
      </div>
    </>
  );
}

export default App;

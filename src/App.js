import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { albumData, recommendedArtists } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import Rashad from './components/Pages/Rashad';




function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Best Works' data={albumData} />
      <Feature />
      <Products heading='Recommended Artists' data={recommendedArtists} />
      <Footer />
    </Router>
  );
}
/*

function App() {
  
  //commented out for this project. probably need this for insa academy site
  {/*
  const [ data, setData ] = useState("");
  useEffect(() => {
    console.log("Calling backend API")
    callBackendAPI()
    .then(res => setData(res.express))
    .catch(err => console.log(err));
  }, []);
  // fetching the GET route from the Express server which matches the GET route from server.js
  const callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message)
  }
  return body;
};
}


  return (
      <Router className="App">
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path="/rashad" component={Rashad}/>
          {/*

          <Route exact path="/linkie" component={Linkie}/>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/audiostore" component={AudioStore}/>
          <Route exact path="/mystuff" component={MyStuff}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/payment" component={Payment}/>
          <Route exact path="/checkout" component={Checkout}/>
          
          }
        </Switch>
      </Router>
  );
}
*/

export default App;

/*
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */
        
        
        /*<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
*/
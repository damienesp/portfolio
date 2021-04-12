import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import HikePool from "./pages/HikePool";
import Home from "./pages/Home";
import Mauvie from "./pages/Mauvie";
import Navigation from "./components/Navigation";
import Photographer from "./pages/Photographer";
import ScrollToTop from "./components/ScrollToTop";
import WeatherApp from "./pages/WeatherApp";
import Work from "./pages/Work";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Navigation />
          <Home />
          <About />
          <Work />
          <Contact />
        </Route>
        <Route path="/hikepool">
          <HikePool />
        </Route>
        <Route path="/photographer">
          <Photographer />
        </Route>
        <Route path="/mauvie">
          <Mauvie />
        </Route>
        <Route path="/weather-app">
          <WeatherApp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, PageNotFound } from "./pages";

function App() {
  
  return (
    <div className="App bgColor">
      <Router>
        <Navigation />
          <Switch>
            <Route path="/" exact component={(Navigation) => <Home />} />
            <Route component={PageNotFound} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

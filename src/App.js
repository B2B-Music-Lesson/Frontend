import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, PageNotFound, Login, Challenges, ChallengeExam } from "./pages";

function App() {
  
  return (
    <div className="App bgColor">
      <Router>
        <Navigation />
          <Switch>
            <Route path="/" exact component={(Navigation) => <Home />} />
            <Route path="/login" exact component={(Navigation) => <Login />} />
            <Route path="/challenges" exact component={(Navigation) => <Challenges />} />
            <Route path="/challengeExam" exact component={(Navigation) => <ChallengeExam />} />

            <Route component={PageNotFound} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

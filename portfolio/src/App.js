import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Project" exact>
          <Project />
        </Route>
        <Route path="/About" exact>
          <About />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

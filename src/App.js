import React from 'react';
import './index.css';
import GlobalStyle from 'index.css'
import { Navigation } from 'components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navigation items={[
          {
            content: "HomePage", to: "/"
          },
          {
            content: "BudgetPage", to: "/budget"
          }
        ]} />
        <Switch>
          <Route exact path="/">
            HomePage
          </Route>
          <Route path="/budget">
            BudgetPage
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;

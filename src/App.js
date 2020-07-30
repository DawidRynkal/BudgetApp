import React, { Suspense } from 'react';
import './index.css';
import GlobalStyle from 'index.css'
import { Navigation, Wrapper, LoadingIndicator } from 'components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <GlobalStyle />
      <Router>
        <Navigation
          items={
            [
              { content: "HomePage", to: "/" },
              { content: "BudgetPage", to: "/budget" }
            ]}
          RightElement={(
            <div>
              <button> pl </button>
              <button> en  </button>
            </div>
          )}
        />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              HomePage
          </Route>
            <Route path="/budget">
              BudgetPage
          </Route>
          </Switch>
        </Wrapper>
      </Router>

    </Suspense>
  );
}

export default App;

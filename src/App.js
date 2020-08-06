import React, { Suspense, useEffect } from 'react';
import './index.css';
import GlobalStyle from 'index.css'
import { Navigation, Wrapper, LoadingIndicator, Button } from 'components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App({ budget, fetchBudget, fetchBudgetedCategories }) {

  useEffect(() => {
    fetchBudget(1)
    fetchBudgetedCategories(1)
  }, [fetchBudget, fetchBudgetedCategories])
  console.log(budget)
  //do usunięcia potem
  function clickHandler() {
    alert("cycyrycy")
  }
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
              <Button variant="regular" onClick={clickHandler}>pl</Button>
              <Button variant="regular">en</Button>
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

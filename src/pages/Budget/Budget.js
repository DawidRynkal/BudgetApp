import React, { useEffect, useMemo } from "react";
import {
  fetchBudget,
  fetchBudgetedCategories,
  addTransaction,
} from "data/actions/budget.acions";
import { fetchAllCategories } from "data/actions/common.action";
import { connect } from "react-redux";
import BudgetCategoryList from "pages/Budget/components/BudgetCategoryList";
import BudgetTransactionList from "pages/Budget/components/BudgetTransactionList";
import AddTransactionForm from "./components/AddTransactionForm/AddTransactionForm";
import ShowTransactionDetails from "./components/ShowTransactionDetails/ShowTransactionDetails";
import { Grid } from "./Budget.css";
import { Button, LoadingIndicator, Modal, DetailsModal } from "components";
import { Route, Switch, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import API from "data/fetch";

function Budget({
  commonState,
  budgetState,
  selectedTransactionId,
  addTransaction,
}) {
  const { data: allCategories } = useQuery(
    "allCategories",
    API.common.fetchAllCategories
  );
  const { data: budget } = useQuery("budget", API.budget.fetchBudget);
  const history = useHistory();
  // useEffect(() => {
  //     fetchBudgetedCategories(1)
  //     fetchBudget(1)
  //     fetchAllCategories()
  // }, [fetchBudget, fetchBudgetedCategories, fetchAllCategories]);

  const isLoaded = useMemo(
    () =>
      !!commonState &&
      Object.keys(commonState).length === 0 &&
      !!budgetState &&
      Object.keys(budgetState).length === 0,
    [commonState, budgetState]
  );

  const handleOnSubmitAddTransaction = (values) => {
    addTransaction({
      budgetId: budget.id,
      values: values,
    }).then(() => history.goBack());
  };

  return (
    <>
      <Grid>
        <section>
          <BudgetCategoryList />
        </section>
        <section>
          <BudgetTransactionList />
          <Button to="/budget/transactions/new" variant="regular">
            Add new transaction
          </Button>
        </section>
      </Grid>

      <Switch>
        <Route path="/budget/transactions/new">
          <Modal>
            <AddTransactionForm
              categories={allCategories}
              groupCategoriesBy={"parentCategory.name"}
              onSubmit={handleOnSubmitAddTransaction}
            />
          </Modal>
        </Route>
        <Route path="/budget/transactions/details">
          <DetailsModal>
            <ShowTransactionDetails transaction={selectedTransactionId} />
          </DetailsModal>
        </Route>
      </Switch>
    </>
  );
}

export default connect(
  (state) => {
    return {
      budget: state.budget.budget,
      commonState: state.common.loadingState,
      budgetState: state.budget.loadingState,
      allCategories: state.common.allCategories,
      selectedTransactionId: state.budget.selectedTransactionId,
    };
  },
  {
    fetchBudget,
    fetchBudgetedCategories,
    fetchAllCategories,
    addTransaction,
  }
)(Budget);

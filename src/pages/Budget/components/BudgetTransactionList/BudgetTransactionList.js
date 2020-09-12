import React, { useMemo } from "react";
import { connect } from "react-redux";
import { useQuery } from "react-query";
import API from "data/fetch";
import { List, ListItem } from "./BudgetTransactionList.css";
import { groupBy } from "lodash";
import { formatCurrency, formatDate } from "utils/index";
import { Button } from "components";
import { setTransacionDetails } from "data/actions/budget.acions";

function BudgetTransactionList({ selectedCategoryId, setTransacionDetails }) {
  const { data: budget } = useQuery("budget", API.budget.fetchBudget);
  const { data: allCategories } = useQuery(
    "allCategories",
    API.common.fetchAllCategories
  );
  const { data: budgetedCategories } = useQuery(
    "budgetedCategories",
    API.budget.fetchBudgetedCategories
  );

  const filteredTransactionsBySelectedParentCategory = useMemo(() => {
    if (typeof selectedCategoryId === "undefined") {
      return budget.transactions;
    }

    if (selectedCategoryId === null) {
      return budget.transactions.filter((transaction) => {
        const hasBudgetedCategory = budgetedCategories.some(
          (budgetedCategory) =>
            budgetedCategory.categoryId === transaction.categoryId
        );

        return !hasBudgetedCategory;
      });
    }

    return budget.transactions.filter((transaction) => {
      try {
        const category = allCategories.find(
          (category) => category.id === transaction.categoryId
        );
        const parentCategoryName = category.parentCategory.name;

        return parentCategoryName === selectedCategoryId;
      } catch (error) {
        return false;
      }
    });
  }, [
    allCategories,
    budget.transactions,
    budgetedCategories,
    selectedCategoryId,
  ]);

  const groupedTransactions = useMemo(
    () =>
      groupBy(filteredTransactionsBySelectedParentCategory, (transaction) =>
        new Date(transaction.date).getUTCDate()
      ),
    [filteredTransactionsBySelectedParentCategory]
  );

  const handleClickTransactionDetails = (id, categoryId) => {
    setTransacionDetails({
      identity: id,
      categoryNumber: categoryId,
    });
  };

  return (
    <List>
      {Object.entries(groupedTransactions).map(([key, transactions]) => (
        <li>
          <ul>
            {transactions.map((transaction) => (
              <ListItem key={transaction.id}>
                <div>{transaction.description}</div>
                <div>{formatCurrency(transaction.amount)}</div>
                <div>{formatDate(transaction.date)}</div>
                <div>
                  {
                    (
                      allCategories.find(
                        (category) => category.id === transaction.categoryId
                      ) || {}
                    ).name
                  }
                </div>
                <Button
                  to="/budget/transactions/details"
                  variant="regular"
                  onClick={() =>
                    handleClickTransactionDetails(
                      transaction.id,
                      transaction.categoryId
                    )
                  }
                >
                  {" "}
                  Show more
                </Button>
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}

export default connect(
  (state) => ({
    selectedCategoryId: state.budget.selectedCategoryId,
    selectedTransactionId: state.budget.selectedTransactionId,
  }),
  {
    setTransacionDetails,
  }
)(BudgetTransactionList);

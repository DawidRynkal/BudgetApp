import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from './BudgetTransactionList.css';
import { groupBy } from 'lodash';
import { formatCurrency, formatDate } from 'utils/index';
import { Button } from 'components';
import { setTransacionDetails } from 'data/actions/budget.acions';
import { useQuery } from 'react-query';
import API from 'data/fetch'


function BudgetTransactionList({
    transactions, allCategories, selectedCategoryId, budgetedCategories, setTransacionDetails,
}) {
    // const { data, isLoading, error } = useQuery(['budget', { id: 1 }], API.budget.fetchBudget)


    const filteredTransactionsBySelectedParentCategory = useMemo(() => {
        if (typeof selectedCategoryId === 'undefined') {
            return transactions;
        }

        if (selectedCategoryId === null) {
            return transactions.filter(transaction => {
                const hasBudgetedCategory = budgetedCategories.some(budgetedCategory => budgetedCategory.categoryId === transaction.categoryId);

                return !hasBudgetedCategory
            })

        }

        return transactions
            .filter(transaction => {
                try {
                    const category = allCategories
                        .find(category => category.id === transaction.categoryId);
                    const parentCategoryName = category.parentCategory.name;

                    return parentCategoryName === selectedCategoryId
                } catch (error) {
                    return false;
                }

            })
    },
        [allCategories, transactions, budgetedCategories, selectedCategoryId]
    )

    const groupedTransactions = useMemo(() => groupBy(filteredTransactionsBySelectedParentCategory,
        transaction => new Date(transaction.date).getUTCDate()),
        [filteredTransactionsBySelectedParentCategory]
    )

    const handleClickTransactionDetails = (id, categoryId) => {
        setTransacionDetails({
            identity: id,
            categoryNumber: categoryId,
        });

    }


    return (
        <List>
            {Object.entries(groupedTransactions).map(([key, transactions]) => (
                <li >
                    <ul >
                        {transactions.map(transaction => (

                            <ListItem key={transaction.id}>
                                <div>{transaction.description}</div>
                                <div>{formatCurrency(transaction.amount)}</div>
                                <div>{formatDate(transaction.date)}</div>
                                <div>{(allCategories
                                    .find(category => category.id === transaction.categoryId) || {}).name}</div>
                                <Button
                                    to="/budget/transactions/details"
                                    variant='regular'
                                    onClick={() => handleClickTransactionDetails(transaction.id, transaction.categoryId)}
                                > Show more</Button>
                            </ListItem>
                        ))}

                    </ul>
                </li>
            ))}
        </List>
    )
}

export default connect(state => ({
    transactions: state.budget.budget.transactions,
    budgetedCategories: state.budget.budgetedCategories,
    allCategories: state.common.allCategories,
    selectedCategoryId: state.budget.selectedCategoryId,
    selectedTransactionId: state.budget.selectedTransactionId,
}), {
    setTransacionDetails,
})(BudgetTransactionList)
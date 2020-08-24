import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import ToggleableList from 'components/ToggleableList';
import ParentCategory from './ParentCateory';
import CategoryItem from './CategoryItem';
import 'styled-components/macro';
import { setSelectedCategoryId } from 'data/actions/budget.acions'
import { useMemo, useCallback } from 'react';

function BudgetCategoryList({ budgetedCategories, allCategories, budget, setSelectedCategoryId }) {
    const budgetedCategoriesByParent = useMemo(
        () => groupBy(
            budgetedCategories, item => allCategories.find(category => category.id === item.categoryId).parentCategory.name),
        [budgetedCategories, allCategories]
    );

    const handleClickParentCategoryRef = useRef(null)

    const handleClearParentCategory = useCallback(() => {
        setSelectedCategoryId();
        handleClickParentCategoryRef.current();
    },
        [setSelectedCategoryId, handleClickParentCategoryRef]
    )

    const handleSelectRestParentCategories = useCallback(() => {
        setSelectedCategoryId(null);
        handleClickParentCategoryRef.current();
    },
        [setSelectedCategoryId, handleClickParentCategoryRef]
    )



    const listItem = useMemo(() => Object.entries(budgetedCategoriesByParent).map(([parentName, categories]) => ({
        id: parentName,
        Trigger: ({ onClick }) => (
            <ParentCategory
                name={parentName}
                onClick={() => {
                    onClick(parentName);
                    setSelectedCategoryId(parentName);
                }}
                categories={categories}
                transactions={budget.transactions}
            />
        ),
        children: categories.map(budgetedCategory => {
            const { name } = allCategories.find(category => category.id === budgetedCategory.categoryId)

            return (
                <CategoryItem
                    key={budgetedCategory.id}
                    name={name}
                    item={budgetedCategory}
                    transactions={budget.transactions}
                />
            )
        })
    })),
        [allCategories, budget.transactions, budgetedCategoriesByParent, setSelectedCategoryId]
    )

    const totalSpent = useMemo(() => budget.transactions.reduce((acc, transaction) => acc + transaction.amount, 0),
        [budget.transactions]
    );
    const restToSpent = useMemo(() => (budget.totalAmount - totalSpent), [budget.totalAmount, totalSpent]);

    const amountTaken = useMemo(() => budgetedCategories.reduce((acc, budgetedCategory) => {
        const categoryTransactions = budget.transactions
            .filter(transaction => transaction.categoryId === budgetedCategory.id);
        const categoryExpenses = categoryTransactions
            .reduce((acc, transaction) => acc + transaction.amount, 0);

        return acc + Math.max(categoryExpenses, budgetedCategory.budget);

    }, 0),
        [budgetedCategories, budget.transactions,]
    )

    const notBudgetedTransactions = useMemo(() => budget.transactions
        .filter(transaction => {
            return !budgetedCategories
                .find(budgetedCategory => budgetedCategory.id === transaction.categoryId)
        }),
        [budget.transactions, budgetedCategories]
    )
    const notBudgetedExpenses = useMemo(() => notBudgetedTransactions.reduce((acc, transaction) => acc + transaction.amount, 0),
        [notBudgetedTransactions]
    )

    const avaibleForRestCategories = useMemo(() => (budget.totalAmount - notBudgetedExpenses - amountTaken),
        [budget.totalAmount, notBudgetedExpenses, amountTaken]
    );


    return (
        <>
            <div css={`
            background-color: lightgray;
        border-bottom: 5px solid white
        `}>
                <ParentCategory
                    name={budget.name}
                    amount={restToSpent}
                    onClick={handleClearParentCategory}
                />
            </div>
            <ToggleableList
                items={listItem}
                clickRef={handleClickParentCategoryRef}
            />
            <div css={`
            background-color: lightgray;
        border-top: 5px solid white
        `}>
                <ParentCategory
                    name="Other categories"
                    amount={avaibleForRestCategories}
                    onClick={handleSelectRestParentCategories}
                />
            </div>

        </>
    )
}

export default connect(state => ({
    budgetedCategories: state.budget.budgetedCategories,
    allCategories: state.common.allCategories,
    budget: state.budget.budget,
}),
    {
        setSelectedCategoryId,
    }
)(BudgetCategoryList)
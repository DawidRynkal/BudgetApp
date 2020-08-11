import React, { useEffect, useMemo } from 'react';
import { fetchBudget, fetchBudgetedCategories } from 'data/actions/budget.acions';
import { fetchAllCategories } from 'data/actions/common.action';
import { connect } from 'react-redux';
import BudgetCategoryList from 'pages/Budget/components/BudgetCategoryList'
import { Grid } from './Budget.css'
import { LoadingIndicator } from 'components';

function Budget({ commonState, budgetState,
    fetchBudget, fetchBudgetedCategories, fetchAllCategories }) {
    useEffect(() => {
        fetchBudgetedCategories(1)
        fetchBudget(1)
        fetchAllCategories()
    }, [fetchBudget, fetchBudgetedCategories, fetchAllCategories]);
    const isLoaded = useMemo(() => (!!commonState && Object.keys(commonState).length === 0) && (!!budgetState && Object.keys(budgetState).length === 0),
        [commonState, budgetState]
    );

    return (
        <Grid>
            <section>
                {isLoaded ? <BudgetCategoryList></BudgetCategoryList> : <LoadingIndicator></LoadingIndicator>}
            </section>
            <section>
                transaction list
            </section>
        </Grid>

    )
}

export default connect(state => {
    return {
        budget: state.budget.budget,
        commonState: state.common.loadingState,
        budgetState: state.budget.loadingState,
    }
}, {
    fetchBudget,
    fetchBudgetedCategories,
    fetchAllCategories,
})(Budget)


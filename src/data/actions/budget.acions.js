import {
    BUDGET_GET,
    BUDGETED_CATEGORIES_GET,
    SET_SELECTED_CATEGORY_ID,
    BUDGET_TRANSACTION_ADD,
    SET_TRANSACTION_DETAILS_ID,
} from 'data/constans'
import API from 'data/fetch'


export const fetchBudget = (id) => {
    const promise = API.budget.fetchBudget(id);
    return {
        type: BUDGET_GET,
        promise,
    }
}

export const fetchBudgetedCategories = (id) => {
    const promise = API.budget.fetchBudgetedCategories(id);
    return {
        type: BUDGETED_CATEGORIES_GET,
        promise,
    }
}

export const addTransaction = ({ budgetId, values }) => {
    const promise = API.budget.addTransaction({
        budgetId,
        values,
    });
    return {
        type: BUDGET_TRANSACTION_ADD,
        promise,
    }
}

export const setTransacionDetails = (details) => {

    return {
        type: SET_TRANSACTION_DETAILS_ID,
        payload: details,
    }
}

export const setSelectedCategoryId = (id) => {
    return {
        type: SET_SELECTED_CATEGORY_ID,
        payload: id,
    }
}


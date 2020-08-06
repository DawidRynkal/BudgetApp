import {
    BUDGET_REQUEST,
    BUDGET_SUCCESS,
    BUDGET_FAILURE,
    ALL_CATEGORIES_GET_REQUEST,
    ALL_CATEGORIES_GET_SUCCESS,
    ALL_CATEGORIES_GET_FAILURE,

} from 'data/constans'
import API from 'data/fetch'

export const fetchBudget = (id) => async (dispatch) => {
    dispatch({
        type: BUDGET_REQUEST,
    })

    try {
        const response = await API.budget.fetchBudget(id);
        const data = await response.json();
        dispatch({
            type: BUDGET_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: BUDGET_FAILURE,
        })
    }

}

export const fetchBudgetedCategories = (id) => async (dispatch) => {
    dispatch({
        type: ALL_CATEGORIES_GET_REQUEST,
    })

    try {
        const response = await API.budget.fetchBudgetedCategories(id);
        const data = await response.json();
        dispatch({
            type: ALL_CATEGORIES_GET_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_CATEGORIES_GET_FAILURE,
        })
    }

}


import {
    BUDGET_GET,
    BUDGET_REQUEST,
    BUDGET_SUCCESS,
    BUDGET_FAILURE,
    LOADING_STATES,
    ALL_CATEGORIES_GET_REQUEST,
    ALL_CATEGORIES_GET_SUCCESS,
    ALL_CATEGORIES_GET_FAILURE,
} from 'data/constans'

const initialState = {
    loadingState: {},
    budget: {},
    budgetedCategories: [],
}

function budget(state = initialState, action) {
    const newLoadingState = { ...state.loadingState }

    switch (action.type) {
        case BUDGET_REQUEST:
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING,
                }
            }
        case BUDGET_SUCCESS:
            delete newLoadingState.BUDGET_REQUEST;

            return {
                ...state,
                budget: action.payload,
                loadingState: newLoadingState,
            }
        case BUDGET_FAILURE:
            delete newLoadingState.BUDGET_REQUEST;
            return {
                ...state,
                loadingState: LOADING_STATES.FAILED,
                budget: {},
            }

        case ALL_CATEGORIES_GET_REQUEST:
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING,
                }
            }
        case ALL_CATEGORIES_GET_SUCCESS:
            delete newLoadingState.ALL_CATEGORIES_GET_SUCCESS;

            return {
                ...state,
                budgetedCategories: action.payload,
                loadingState: newLoadingState,
            }
        case ALL_CATEGORIES_GET_FAILURE:
            delete newLoadingState.ALL_CATEGORIES_GET_REQUEST;
            return {
                ...state,
                loadingState: LOADING_STATES.FAILED,
                budgetedCategories: {},
            }
        default:
            return state
    }

}
export default budget;

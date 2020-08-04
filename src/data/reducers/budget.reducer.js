import {
    BUDGET_GET,
    BUDGET_REQUEST,
    BUDGET_SUCCESS,
    BUDGET_FAILURE,
    LOADING_STATES,
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
        default:
            return state
    }

}
export default budget;

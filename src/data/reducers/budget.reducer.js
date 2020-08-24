import {
    BUDGET_GET_REQUEST,
    BUDGET_GET_SUCCESS,
    BUDGET_GET_FAILURE,
    LOADING_STATES,
    BUDGETED_CATEGORIES_GET_REQUEST,
    BUDGETED_CATEGORIES_GET_SUCCESS,
    BUDGETED_CATEGORIES_GET_FAILURE,
    SET_SELECTED_CATEGORY_ID,
    BUDGET_TRANSACTION_ADD_REQUEST,
    BUDGET_TRANSACTION_ADD_SUCCESS,
    SET_TRANSACTION_DETAILS_ID,
} from 'data/constans'


const initialState = {
    loadingState: null,
    budget: {},
    budgetedCategories: [],
    selectedCategoryId: undefined,
    selectedTransactionId: [],
}

function budget(state = initialState, action) {
    const newLoadingState = { ...state.loadingState }

    switch (action.type) {
        case BUDGET_GET_REQUEST:
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING,
                }
            }
        case BUDGET_GET_SUCCESS:
            delete newLoadingState.BUDGET_GET_REQUEST;

            return {
                ...state,
                budget: action.payload,
                loadingState: newLoadingState,
            }
        case BUDGET_GET_FAILURE:
            delete newLoadingState.BUDGET_GET_REQUEST;
            return {
                ...state,
                loadingState: LOADING_STATES.FAILED,
                budget: {},
            }

        case BUDGETED_CATEGORIES_GET_REQUEST:
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING,
                }
            }
        case BUDGETED_CATEGORIES_GET_SUCCESS:
            delete newLoadingState.BUDGETED_CATEGORIES_GET_REQUEST;

            return {
                ...state,
                budgetedCategories: action.payload,
                loadingState: newLoadingState,
            }
        case BUDGETED_CATEGORIES_GET_FAILURE:
            delete newLoadingState.BUDGETED_CATEGORIES_GET_REQUEST
            return {
                ...state,
                loadingState: LOADING_STATES.FAILED,
                budgetedCategories: [],
            }
        case BUDGET_TRANSACTION_ADD_REQUEST:
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING,
                }
            }
        case BUDGET_TRANSACTION_ADD_SUCCESS:
            delete newLoadingState.BUDGET_TRANSACTION_ADD_REQUEST;

            return {
                ...state,
                budget: {
                    ...state.budget,
                    transactions: [
                        action.payload,
                        ...state.budget.transactions,
                    ]
                },
                loadingState: newLoadingState,
            }
        case SET_SELECTED_CATEGORY_ID:
            return {
                ...state,
                selectedCategoryId: action.payload,
            }
        case SET_TRANSACTION_DETAILS_ID:
            return {
                ...state,
                selectedTransactionId:
                    action.payload,


            }

        default:
            return state
    }

}
export default budget;

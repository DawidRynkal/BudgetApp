
export const fetchBudget = (id) => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`);

    return promise;
}

export const fetchBudgetedCategories = (id) => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/budgetCategories`);

    return promise;
}

export const addTransaction = ({ budgetId, values }) => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${budgetId}/transactions`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });


    return promise;
}


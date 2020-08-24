import React from 'react';

function ShowTransactionDetails({ transaction }) {

    return (
        <>
            <h1>
                Details about transaction:
        </h1>
            <h2>
                <p>Identity number: {transaction.identity}</p>
                <p>Category number: {transaction.categoryNumber}</p>
            </h2>
        </>
    )
}
export default ShowTransactionDetails;
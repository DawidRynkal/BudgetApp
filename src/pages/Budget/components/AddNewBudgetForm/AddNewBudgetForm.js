import React from 'react';
import { Form, Field } from 'react-final-form'
import { noop } from 'lodash';


const required = value => (value ? undefined : 'Required')

function AddNewBudgetForm({ onSubmit = noop }) {

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="name" validate={required}>
                        {({ input, meta }) => (
                            <div>
                                <label>Name </label>
                                <input {...input} type="text" placeholder="Description" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="totalAmount" validate={required} parse={value => parseFloat(value, 10)}>
                        {({ input, meta }) => (
                            <div>
                                <label>Total amount </label>
                                <input {...input} type="number" placeholder="Amount" step='0.01' />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>

                    <div className="buttons">
                        <button type="submit" disabled={submitting}>
                            Submit
          </button>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
          </button>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )}
        />
    )
}

export default AddNewBudgetForm;
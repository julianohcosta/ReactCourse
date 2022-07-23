import './css/ExpenseForm.css';
import {useState} from 'react';


export default function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const useTitleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }

    const useAmountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }

    const useDateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }

    const submitHandler = (e) => {

        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredAmount('');

        props.onSaveExpenseData(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title
                        <input
                            id="title"
                            type="text"
                            onChange={useTitleChangeHandler}
                        />
                    </label>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount
                        <input
                            id="amount"
                            type="number"
                            min="0.1"
                            step="0.01"
                            onChange={useAmountChangeHandler}
                        />
                    </label>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date
                        <input
                            id="date"
                            type="date"
                            min="2019-01-01"
                            max="2022-12-31"
                            onChange={useDateChangeHandler}
                        />
                    </label>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" name="cancelBtn" onClick={props.onStopEditing}>Cancel</button>
                <button type='submit' name="addExpenseBtn" >Add Expense</button>
            </div>
        </form>
    )
}
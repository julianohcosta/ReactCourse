import './css/Expenses.css'
import {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";

/**
 *
 * @param {Object} props object with the following attributes: title {String}, amount {Number} and date {Date}
 * @returns {JSX.Element} The JSX element
 * @constructor
 */
export default function Expense(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const expensesFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilterChange={expensesFilterHandler} selectedYear={filteredYear}/>
                {
                    filteredExpenses.length === 0 ? <p>No Expenses found.</p> : filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}/>
                    ))}
            </Card>
        </div>
    )
}

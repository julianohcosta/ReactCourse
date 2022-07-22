import './css/Expenses.css'
import {useState} from 'react';
import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";
import ExpensesList from "./ExpensesList";

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
        <li>
            <Card className="expenses">
                <ExpensesFilter onFilterChange={expensesFilterHandler} selectedYear={filteredYear}/>
                <ExpensesList expensesContent={filteredExpenses}/>
            </Card>
        </li>
    )
}

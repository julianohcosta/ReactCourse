import './css/Expense.css'
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

/**
 *
 * @param {Object} props object with the following attributes: title {String}, amount {Number} and date {Date}
 * @returns {JSX.Element} The JSX element
 * @constructor
 */
export default function Expense(props){

    const expenses = props.expenses;

    return (
        <Card className="expenses">
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
        </Card>
    )
}
import { useState } from 'react';
import './css/ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

/**
 *
 * @param {Object} props Object with the following attributes: title {String}, amount {Number} and date {Date}
 * @returns {JSX.Element} The JSX element
 * @constructor
 */
export default function ExpenseItem(props) {

    // React Hook
    const [title, setTitle] = useState(props.title);

    const clickHandler = () =>{
        setTitle('Updated')
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">$ {props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

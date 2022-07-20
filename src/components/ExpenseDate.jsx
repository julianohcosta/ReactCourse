import './css/ExpenseDate.css'

/**
 *
 * @param {Object} props Object with the following attribute: date {Date}
 * @returns {JSX.Element} The JSX element
 */
export default function ExpenseDate(props){
    const day = props.date.toLocaleDateString('pt-BR', {day: '2-digit'});
    const month = props.date.toLocaleDateString('pt-BR', {month: 'long'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">de {month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'; // usually CSS files for the function are grouped together in the same folder

// components in React is just a JS function
// function is named in large capital to tell React this is a customized HTML.
// lower cases will be regarded as regular imported HTML elements.
function ExpenseItem(props) { // call on the paramenter. then, the name of the attributes you have given

    return (
    <div className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
    </div>
    );
}

// need to export. Otherwise, function only useful in this file.

export default ExpenseItem;
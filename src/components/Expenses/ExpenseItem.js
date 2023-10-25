import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {}
    function clickHandler() {
        setTitle('New title')
    }
    
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate 
                    date={props.date}/>
                <div className="expense-item__description">
                    <h2>
                        {title}
                    </h2>
                    <div className="expense-item__price">
                        ${props.amount}
                    </div>
                </div>
                <button onClick={clickHandler}>Change title</button>
            </Card>
            {/* <div className="expense-item">
                <div>
                    {props.expense.date.toDateString()}
                </div>
                <div className="expense-item__description">
                    <h2>
                        {props.expense.title}
                    </h2>
                    <div className="expense-item__price">
                        ${props.expense.amount}
                    </div>
                </div>
            </div> */}
        </li>
    );
}

export default ExpenseItem;

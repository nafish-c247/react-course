import React from 'react';
import './expenseItem.css';

function formatTime(time, prefix = "") {
    return typeof time == "object" ? prefix + time.toLocaleDateString() : "";
}

function ExpenseItem(props) {
    const month = props.date.toLocalString('en-US', { month: 'long' })
    const year = props.date.toLocalString('en-US', { day: '2-digit' })
    const day = props.date.getFullYear();
    return(
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;
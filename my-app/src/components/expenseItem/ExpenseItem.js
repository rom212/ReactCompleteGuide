import './ExpenseItem.css';
import ExpenseDate from '../expenseDate/ExpenseDate';
import Cards from '../cards/Cards'


function ExpenseItem(props){

    return(
        <Cards className='expense-item'>
             <ExpenseDate {...props}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Cards>
    );
}

export default ExpenseItem;
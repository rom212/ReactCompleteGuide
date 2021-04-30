import './Expenses.css'
import ExpenseItem from "../expenseItem/ExpenseItem";
import Cards from '../cards/Cards';

function Expenses(props) {
    return(
        <Cards className="expenses">
            <ExpenseItem title={props[0].title} amount={props[0].amount} date={props[0].date}/>
            <ExpenseItem title={props[1].title} amount={props[1].amount} date={props[1].date}/>
            <ExpenseItem {...props[2]} />
        </Cards>
    );
}

export default Expenses;

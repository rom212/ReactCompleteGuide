import './Cards.css'

function Cards(props){

    const classname = "card " + props.className; 

    return(
        <div className={classname}>
            {props.children}
        </div>
    );
}

export default Cards;
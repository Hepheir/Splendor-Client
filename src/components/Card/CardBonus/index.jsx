import "./style.css";


function CardBonus(props) {
    // children is gem id
    const { children: gemId } = props;
    return (
        <div className={`card-bonus skin gem-${gemId}`}/>
    );
}


export default CardBonus;

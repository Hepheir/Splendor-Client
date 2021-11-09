import "./style.css";


function CardCost(props) {
    // children is cost (count)
    const { children: count, gemId } = props;
    return (
        <div className={`card-cost skin cardcosts-${gemId}`}>
            <div className={`card-cost-count skin numbers-${count}`}/>
        </div>
    );
}


export default CardCost;

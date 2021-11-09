import "./style.css";


function CardScore(props) {
    // children is background id
    const { children } = props;
    return (
        <div className={`card-score skin numbers-${children}`}/>
    );
}


export default CardScore;

import "./style.css";


function CardArt(props) {
    // children is background id
    const { children: background } = props;
    return (
        <div className={`card-art skin card-background-${background}`}/>
    );
}


export default CardArt;

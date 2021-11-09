import "./style.css";


function CardCostFrame(props) {
    const { children } = props;
    return (
        <div className="card-cost-frame">
            {children}
        </div>
    );
}


export default CardCostFrame;

import "./style.css";


function CardRow(props) {
    const { children } = props;
    return (
        <div className="card-row">
            {children.map(child =>
                <div className="card-row-item">
                    {child}
                </div>
            )}
        </div>
    );
}


export default CardRow;

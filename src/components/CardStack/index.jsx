import "./style.css";


function CardStack(props) {
    const { children } = props;
    return (
        <div className="card-stack">
            {children ? children.map(child =>
                <div className="card-stack-item">
                    {child}
                </div>
            ) : null}
        </div>
    );
}


export default CardStack;

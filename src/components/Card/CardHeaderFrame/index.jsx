import "./style.css";


function CardHeaderFrame(props) {
    const { children } = props;
    return (
        <div className="card-header-frame">
            {children}
        </div>
    );
}


export default CardHeaderFrame;

import "./style.css";


function ActionCardFrame(props) {
    const { children } = props;
    return (
        <div className="action-card-frame">
            {children}
        </div>
    );
}


export default ActionCardFrame;

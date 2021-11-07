import "./style.css";


function ActionButton(props) {
    const { children } = props;
    return (
        <div className="action-button">
            {children}
        </div>
    );
}


export default ActionButton;

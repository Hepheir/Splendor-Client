import "./style.css";


function ActionButtonFrame(props) {
    const { children } = props;
    return (
        <div className="action-button-frame">
            {children}
        </div>
    );
}


export default ActionButtonFrame;

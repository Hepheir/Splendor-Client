import "./style.css";


function ActionFrame(props) {
    const { children } = props;
    return (
        <div className="action-frame">
            {children}
        </div>
    );
}


export default ActionFrame;

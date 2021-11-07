import "./style.css";


function ActionGuideFrame(props) {
    const { children } = props;
    return (
        <div className="action-guide-frame">
            {children}
        </div>
    );
}


export default ActionGuideFrame;

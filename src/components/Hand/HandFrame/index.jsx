import "./style.css";


function HandFrame(props) {
    const {children} = props;
    return (
        <div className="hand-frame">{children}</div>
    );
}


export default HandFrame;

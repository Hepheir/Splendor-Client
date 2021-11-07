import "./style.css";


function ActionCoinFrame(props) {
    const { children } = props;
    return (
        <div className="action-coin-frame">
            {children}
        </div>
    );
}


export default ActionCoinFrame;

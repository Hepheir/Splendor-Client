import "./style.css";


function TableCoinFrame(props) {
    const { children } = props;
    return (
        <div className="table-coin-frame">{children}</div>
    );
}


export default TableCoinFrame;

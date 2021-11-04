import "./style.css";


function TableCoinCounter(props) {
    // children is count
    const { children } = props;
    return (
        <div className="table-coin-counter">{children}</div>
    );
}


export default TableCoinCounter;

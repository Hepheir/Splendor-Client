import "./style.css";


function TableCoinButton(props) {
    const { children } = props;
    return (
        <div className="table-coin-button">{children}</div>
    );
}


export default TableCoinButton;

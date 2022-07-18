import "./style.css";


function TableCoin(props) {
    // children is gemId
    const { children } = props;
    return (
        <div className={`table-coin-coin skin coins-${children}`}/>
    );
}


export default TableCoin;

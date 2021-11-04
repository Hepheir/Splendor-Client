import "./style.css";


function TableCardFrame(props) {
    const { children } = props;
    return (
        <div className="table-card-frame">{children}</div>
    );
}


export default TableCardFrame;

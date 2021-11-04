import "./style.css";


function TableCardColumnFrame(props) {
    const { children } = props;
    return (
        <div className="table-card-column-frame">{children}</div>
    );
}


export default TableCardColumnFrame;

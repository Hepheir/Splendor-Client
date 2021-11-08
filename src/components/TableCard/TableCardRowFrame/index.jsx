import "./style.css";


function TableCardRowFrame(props) {
    const { children } = props;
    return (
        <div className="table-card-row-frame-container">
            <div className="table-card-row-frame">
                {children}
            </div>
        </div>
    );
}


export default TableCardRowFrame;

import "./style.css";


function TableCardRowFrame(props) {
    const { children } = props;
    return (
        <div className="table-card-row-frame">
            <div className="table-card-row-frame-container">
                {children}
            </div>
        </div>
    );
}


export default TableCardRowFrame;

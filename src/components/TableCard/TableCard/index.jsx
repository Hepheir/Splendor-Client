import Card from "../../Card";
import "./style.css";


function TableCard(props) {
    const { children } = props;
    return (
        <div className="table-card-card">
            <Card>{children}</Card>
        </div>
    );
}


export default TableCard;

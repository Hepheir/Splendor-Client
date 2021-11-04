import Card from "../../Card";
import "./style.css";


function TableCardDrawpile(props) {
    const { children } = props;
    return (
        <div className="table-card-drawpile">
            <Card isFlipped={true}>{children}</Card>
        </div>
    );
}


export default TableCardDrawpile;

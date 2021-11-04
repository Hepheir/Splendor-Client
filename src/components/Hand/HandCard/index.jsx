import Card from "../../Card";

import "./style.css";



function HandCard(props) {
    const {children} = props;
    return (
        <div className="hand-card">
            <Card>{children}</Card>
        </div>
    );
}


export default HandCard;

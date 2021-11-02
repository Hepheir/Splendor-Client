import classNames from "classnames";

import "./style.css";


function BodyFrame(props) {
    const { children, isVertical, hasHeader, hasSidebar } = props;
    return (
        <div className={classNames(
            "body-frame",
            {
                "is-virtical": isVertical,
                "has-header": hasHeader,
                "has-sidebar": hasSidebar,
            },
        )}>
            <div className="body-frame-container">
                {children}
            </div>
        </div>
    )
}


export default BodyFrame;

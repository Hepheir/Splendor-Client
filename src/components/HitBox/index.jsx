import React from "react";

import "./style.css";


function HitBox(props) {
    const { children, onClick, placeholder } = props;

    return (
        <div className="hit-box" onClick={onClick}>
            {children}
            <HitBoxButton>
                {placeholder ?? '+'}
            </HitBoxButton>
        </div>
    );
}


function HitBoxButton(props) {
    const { children } = props;
    return (
        <div className="hit-box-button">{children}</div>
    );
}

export default HitBox;

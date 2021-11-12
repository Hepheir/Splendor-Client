import "./style.css";


function S3RHeaderLayout(props) {
    const { children } = props;
    return (
        <div className="s3r-layout s3r-header">{children}</div>
    );
}

function S3RBodyLayout(props) {
    const { children } = props;
    return (
        <div className="s3r-layout s3r-body">{children}</div>
    );
}

function S3RFooterLayout(props) {
    const { children } = props;
    return (
        <div className="s3r-layout s3r-footer">{children}</div>
    );
}


export {
    S3RHeaderLayout,
    S3RBodyLayout,
    S3RFooterLayout,
};

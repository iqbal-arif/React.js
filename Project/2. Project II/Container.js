*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
******************SOLUTION******************
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
import clsx from "clsx";

export default function Container(props) {
    const {children, className, ...rest} = props;
    const classes = clsx("ui-container", className);

    return <div className={classes} {...rest}>{children}</div>;
}

*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
******************SUBMITTED******************
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*


import clsx from "clsx";
export default function Container(props) {
    const {children,tabIndex} = props;
    const linkClasses = clsx(props.className, "ui-container");
    return <div className={linkClasses} tabIndex={tabIndex}>{children}</div>;
}

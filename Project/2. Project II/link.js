*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
******************SOLUTION******************
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
import clsx from "clsx";

export default function Link(props) {
    const {children, className, ...rest} = props;
    const classes = clsx("ui-link", className);

    return <a className={classes} {...rest}>{children}</a>;
}


*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
******************SUBMITTED******************
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
import clsx from "clsx";
export default function Container(props) {
    const {children,tabIndex} = props;
    const linkClasses = clsx(props.className, "ui-container");
    return <div className={linkClasses}>{children}</div>;
}

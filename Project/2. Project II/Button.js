*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
******************SOLUTION******************
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
import clsx from "clsx";

export default function Button(props) {
    const {children, className, ...rest} = props;
    const classes = clsx("ui-button", className);

    return <button className={classes} {...rest}>{children}</button>;
}

*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
******************SUBMITTED******************
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

import clsx from "clsx"

export default function Button(props) {
    const {children, type,tabIndex, disabled} = props;
    const buttonClasses = clsx(props.className, "ui-button")
    return <button className={buttonClasses} type={type} tabIndex={tabIndex} disabled={disabled}>{children}</button>;
}

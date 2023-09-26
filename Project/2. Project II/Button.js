import clsx from "clsx"

export default function Button(props) {
    const {children, type,tabIndex, disabled} = props;
    const buttonClasses = clsx(props.className, "ui-button")
    return <button className={buttonClasses} type={type} tabIndex={tabIndex} disabled={disabled}>{children}</button>;
}

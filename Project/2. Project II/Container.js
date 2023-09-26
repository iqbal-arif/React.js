import clsx from "clsx";
export default function Container(props) {
    const {children,tabIndex} = props;
    const linkClasses = clsx(props.className, "ui-container");
    return <div className={linkClasses} tabIndex={tabIndex}>{children}</div>;
}

import clsx from "clsx";

export default function Link(props) {
    const {children, href, tabIndex} = props;
    const linkClasses = clsx(props.className, "ui-link")
    // console.log({disabled})
    return <a className={linkClasses} tabIndex={props.tabIndex}  href={href}>{children}</a>;
}
}

import clsx from "clsx";

export default function Link(props,classes) {
    console.log(props)
    let linkClass=classes;
    const className = clsx("ui-link",linkClass);
    console.log(className)
    const {children, ...rest} = props;

    return <a className={className} {...rest}>{children}</a>;
}
export default function Link(props){
    return (
        <>
        <a href={props.href} className="ui-link">{props.children}</a>
        </>
    )
}

/*************Solution******************/
export default function Link(props) {
    const {children, href} = props;
    return <a className="ui-link" href={href}>{children}</a>;
}

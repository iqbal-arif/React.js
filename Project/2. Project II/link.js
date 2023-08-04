import clsx from "clsx";

export default function Link(props,classes) {
    console.log(props)
    let linkClass=classes;
    const className = clsx("ui-link",linkClass);
    console.log(className)
    const {children, ...rest} = props;

    return <a className={className} {...rest}>{children}</a>;
}

import clsx from "clsx";

export default function Link(props,classes) {
    console.log(props)
    let linkClass=classes;
    const className = clsx("ui-link");
    console.log(className)
    const {children, ...rest} = props;

    return <a className={className} {...rest}>{children}</a>;
}


export default function Link(props) {
    console.log(props)
    // let linkClass=classes;
    // console.log (linkClass)
    const className = "ui-link";
    // console.log(className)
    const {children, ...rest} = props;

    return <a className={className} {...rest}>{children}</a>;
}

import clsx from "clsx";

const result = clsx({
    "link": true,
    "link-primary": false
});

console.log(result); //"link"

/*
const className = clsx({
        "text": true, // this class is always added
        "title": props.loggedIn
    });
*/
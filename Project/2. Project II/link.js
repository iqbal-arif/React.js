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

import clsx from "clsx";
export default function Link(props,className) {
    console.log(props)
    const className= clsx({"ui-link":true,class1:{className}})
    // const className = "ui-link";
    const {children,...rest} = props;
    // const {className="ui-link",...rest} = props;

    console.log (<a className={className} {...rest}>{children}</a>);
    return (<a className={className} {...rest}>{children}</a>);

}
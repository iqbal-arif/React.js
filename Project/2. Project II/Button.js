export default function Button(props) {
    const {children, type, disabled} = props;

    return <button className="ui-button" type={type} disabled={disabled}>{children}</button>;


  import clsx from "clsx";


export default function Button(props) {
    const {children, type, disabled} = props;
    console.log(props)
    let dynamicClass = children
    const classes = clsx(dynamicClass,"ui-button")
    console.log(classes)


    return <button className={classes} type={type} disabled={disabled}>{children}</button>;
}
/*
import clsx from "clsx";

const classes = clsx("class1", "class2");
console.log(classes); //"class1 class2"

This is useful because you can also use variables with it, for example:

import clsx from "clsx";

let dynamicClass = "class1";
const classes = clsx(dynamicClass, "class2");
console.log(classes); */

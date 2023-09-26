import clsx from "clsx"
export default function Input(props) {
    let type = props.type;
    if (!type){
        type = "text";
    }
    console.log(props)
    const {name, placeholder,tabIndex, value} = props;
    const inputClasses = clsx(props.className, "ui-textfield")
    return <input className={inputClasses} type={type} tabIndex={tabIndex} placeholder={props.placeholder} name={props.name} value={value}/>;
}

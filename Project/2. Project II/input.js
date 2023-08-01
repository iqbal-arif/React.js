export default function Input(props) {
    let type = props.type;
    if (!type){
        type = "text";
    }

    return <input className="ui-textfield" type={type} placeholder={props.placeholder} name={props.name} />;
}
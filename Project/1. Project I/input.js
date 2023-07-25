export default function Input(props){
    console.log(props)
    let type = props.type;
    // Nullish Coalescing Assignment (??=) Operator in JavaScript
    // if type = nullish or undefined 
        type ??= "text"
       return(
           <div className="ui-textfield" placeholder={props.placeholder} name={props.name} type={type}>{props.children}</div>
           )
  }

/*************Solution******************/

  export default function Input(props) {
    // destructuring with default value
    // https://codetogo.io/how-to-destructure-with-default-value-in-javascript/
    const {type = "text", placeholder, name} = props;
    return <input className="ui-textfield" type={type} placeholder={placeholder} name={name} />;
}

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
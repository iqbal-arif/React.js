export default function Button(props){
    console.log(props.children)
   return(
       <div className="ui-button" type={props.type} disabled={props.disabled} >{props.children}</div>) 
} 
export default function Button(props){
    console.log(props.children)
   return(
       <div className="ui-button" type={props.type} disabled={props.disabled} >{props.children}</div>) 
} 

/*************Solution******************/

export default function Button(props) {
    const {children, type, disabled} = props;
    return <button className="ui-button" type={type} disabled={disabled}>{children}</button>;
}

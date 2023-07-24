export default function Button(props){
    console.log(props)
    console.log(props.disabled)
    return( 
        <>   
    <div>
        <button type={props.type} className="ui-button" >{props.children}</button>
    </div>
    </>)
} 
export default function Button(props){
    console.log(props)
    console.log(props.children)
    return(
        <>
        <div className="ui-button">
        <button  type={props.type}>props.children</button>
         </div>
    </>) 
} 

export default function Button(props){
    console.log(props)
    console.log(props.children)
    console.log(props.children.length)
        if(props.children.length!==0){
    return(
        <>
        
        <div className="ui-button">
        <button  type={props.type}>{props.children}</button>
         </div>
    </>) 
        }
}

export default function Button(props){
    console.log(props)
    return(
        <>
        <div className="ui-button">
    console.log(props.children)
        
        <button  type={props.type}>{Pchildren}</button>
         </div>
    </>) 
} 
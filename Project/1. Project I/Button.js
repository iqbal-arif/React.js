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

export default function Button(props){
    console.log(props.disabled)
    let propsA = [props.type,props.disabled,props.text];
    console.log(propsA[0])
    // let text = props.children
   return(
       <>
       <div className="ui-button" >
       <button  type={propsA[0]} >{propsA[2]}</button>
       </div>
   </>) 
} 

export default function Button(props){
    console.log(props.disabled)
    let propsA = [props.type,props.disabled,props.text];
    console.log(propsA[0])
    // let text = props.children
   return(
       <>
       <div className="ui-button" >
       <button  type={propsA[0]} disabled={propsA[1]} >{propsA[2]}</button>
       </div>
   </>) 
} 

export default function Button(props){
    console.log(props.disabled)
    let propsA = [props.type,props.text,props.disabled];
    console.log(propsA[0])
    // let text = props.children
   return(
       <>
       <div className="ui-button" >
       <button  type={propsA[0]} disabled={propsA[1]} >{propsA[2]}</button>
       </div>
   </>) 
} 
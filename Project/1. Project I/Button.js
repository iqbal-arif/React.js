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
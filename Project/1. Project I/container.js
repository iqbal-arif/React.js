export default function Container(props){
    console.log(props.children)
   return(
       <div className="ui-container">{props.children}</div>)
}

/*************Solution******************/

export default function Container(props) {
    return <div className="ui-container">{props.children}</div>;
}

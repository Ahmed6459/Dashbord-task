import React from 'react'


import "./Card.css"

 const Card =(props)=> {
    return (
        <div  className={`${props.className} card`} style ={{minWidth:props.minWidth,minHeight:props.minHeight,marginRight:"1rem"}}>
            {props.children}
        </div>
    )
}

export default Card

import React, { useState } from 'react';

export default function Button(props) {
    const [hovering,changeHover] = useState(false);

    const buttonStyle = {
        borderRadius: '5px',
        backgroundColor: 'white',
        padding: '5px 15px',
        color: 'black',
        fontSize: '10pt',
        cursor: 'pointer',
        minWidth: '100px',
        margin: '0 5px',        
    }

    const buttonHover = {
        ...buttonStyle,
        backgroundColor: 'gray',
        color: 'white',
    }

    return <button  onMouseEnter={()=>changeHover(true)} 
                    onMouseLeave={()=>changeHover(false)} 
                    style={(hovering)?buttonHover:buttonStyle} 
                    onClick={()=>props.p.changeView(props.next,
                                                    (props.add)?props.add:props.p.add,
                                                    (props.addItem)?props.addItem:props.p.addItem,
                                                    (props.addClient)?props.addClient:props.p.addClient,
                                                    (props.status)?props.status:props.p.status
                                                )}>
            {props.text}
            </button>
}
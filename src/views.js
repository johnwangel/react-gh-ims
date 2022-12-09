import React, { useState } from 'react'
import Button from './button.js'
import {Size} from './helpers.js'

const size=Size()

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}

export function Dashboard(props) {
    const boxStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto',
        flexDirection: 'column',
    }

    const boxes = [
                    {title:'Accepted Orders',count:8},
                    {title:'Pending Orders',count:17},
                    {title:'Pending Invoices',count:14},
                    {title:'To Ship',count:10},
                  ]


    return <div>
                <h1>Inventory Management System</h1>
                <h2>Dashboard</h2>
                <div className="boxes" style={boxStyle}>
                    { boxes.map((box,key)=><DashBox key={key} data={box} />)}
                </div>
            </div>
}

export function DashBox(props) {
    const [hovering,changeHover] = useState(false);

    const boxStyle ={
        width: '150px',
        height: '150px',
        padding: '50px',
        border: '1px solid gray',
        margin: '25px',
        cursor: 'pointer',
    }

    const boxStyleH ={
        ...boxStyle,
        backgroundColor: 'lightgray',
    }

    const boxTitle = {
        fontSize: '12pt',
        marginBottom: '50px',
    }

    const boxCount = {
        fontSize: '36pt',
        fontWeight: 'bold',
    }


    return  <div 
                    style={(hovering)?boxStyleH:boxStyle} 
                    className='dashbox' 
                    onMouseEnter={()=>changeHover(true)} 
                    onMouseLeave={()=>changeHover(false)} >
                <div style={boxTitle} className='boxTitle'>{props.data.title}</div>
                <div style={boxCount} className='ItemCount'>{props.data.count}</div>
            </div>
}


export function Auth(props) {
    const linkStyle = {
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer',
    }
    return <div><span style={linkStyle} onClick={()=>props.changeView('login')}>Log In</span> or <span style={linkStyle} onClick={()=>props.changeView('register')}>Register</span></div>
}

export function Login(props) {
    const linkStyle = {
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer',
    }
    return <div><h1>Sign In</h1><UserForm type="login" next="welcome"  handleChange={props.handleChange} changeView={props.changeView} /></div>
}

export function Register(props) {
    const linkStyle = {
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer',
    }
    return <div><h1>Register</h1><UserForm  type="reg" next="rev1" handleChange={props.handleChange} changeView={props.changeView}/></div>
}

export function UserForm(props){

    const revSty={
        ...FLEX_BASE,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '50px',
    }

    const rowContSty = {
        ...FLEX_BASE,
        flexDirection: 'column',
        width: '400px',
        marginBottom: '10px',
        marginBottom: '25px',
    }

    const rowSty = {
        ...FLEX_BASE,
        flexDirection: (size.width<600)?'column':'row',
        marginBottom: '10px',
        width: '100%',
    }

    const headSty = {
        fontWeight: 'bold',
        marginRight: '8px',
        marginBottom:  (size.width<600)?'5px':'0',
    }

    const inputSty = {
        width: '173px',
        height: '20px',
        marginBottom:  (size.width<600)?'10px':'0',
    }
    
    const searchSty = {
        marginLeft: '5px'
    }

    return  <div style={revSty}>
                <div style={rowContSty}>
                    {(props.type==='reg')
                        ?   <div style={rowSty}>
                                <label style={headSty}>Name</label>
                                <input 
                                    onChange={(event)=>props.handleChange(event.target.value)} 
                                    style={inputSty} 
                                    type="text" 
                                    name='username'>
                                </input>
                            </div>
                        : null
                    }

                    <div style={rowSty}>
                        <label style={headSty}>Username (use email):</label>
                        <input 
                                    onChange={(event)=>props.handleChange(event.target.value)} 
                                    style={inputSty} 
                                    type="text" 
                                    name='username'></input>
                    </div>
                    <div style={rowSty}>
                        <label style={headSty}>Password</label>
                        <input type='password' style={inputSty}></input>
                    </div>
                 </div>
                 <Button text='Go' next={props.next} changeView={props.changeView} />
            </div>
}

export function Thanks(props) {
    const linkStyle = {
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer',
    }
    return <div>
                <h1>Thank you for Leaving a Review!</h1>
                <div style={linkStyle} onClick={()=>props.changeView('profile')}>Go to Teacher Profile</div>
            </div>
}
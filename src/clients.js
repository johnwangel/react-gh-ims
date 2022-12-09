import React, { useState } from 'react';
import Button from './button.js'
import {Size} from './helpers.js'
import {clients} from './inventory_data.js'
import {HeadCell} from './inventory.js'

const size=Size()

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}

export function Clients(props) {

    console.log('client',props)

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '25px',
    }

    const _col = {
        ...FLEX_BASE,
        flexDirection: 'column',
    }

    const columns = [ 'company', 'name', 'address', 'city', 'state', 'zip' ]
    if (props.add) columns.push('Select')

    return  <div>
                <h1>Inventory Management System</h1>
                <h2>Clients</h2>
                <table style={tableStyle} className='inventoryHeaderRow'>
                   <tr>{ columns.map( (col,k)=><HeadCell key={k} title={col} /> )  }</tr>
                   { clients.map( (item,key)=><ClientCell key={key} add={props.add} item={item} changeView={props.changeView} />  )}
                </table>
            </div>
}

export function ClientCell(props) {
    const [count,changeCount] = useState(0)

    const leftSty = {
     padding: '8px',
     border: '1px solid black',
     borderCollapse: 'collapse',
     textAlign: 'left',
    }

    const rightSty = {
        ...leftSty,
        textAlign: 'right',
    }

    const addSty = {
        ...leftSty,
    }

    const inputSty = {
        width: '25px'
    }

    return  <tr>
                <td style={leftSty} className='inventoryCell'>{props.item.company}</td>
                <td style={leftSty} className='inventoryCell'>{props.item.name}</td>
                <td style={leftSty} className='inventoryCell'>{props.item.address}</td>
                <td style={leftSty} className='inventoryCell'>{props.item.city}</td>
                <td style={leftSty} className='inventoryCell'>{props.item.state}</td>
                <td style={rightSty} className='inventoryCell'>{props.item.zip}</td>
                <td style={rightSty} className='inventoryCell'>{props.item.email}</td>
                { (props.add) 
                    ? <td style={addSty} className='addCell'>
                        <Button text='Select' addClient={true} next="purchaseOrder" changeView={props.changeView} />
                       </td> 
                    : null }
            </tr>
}

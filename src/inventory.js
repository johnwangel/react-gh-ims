import React, { useState } from 'react';
import Button from './button.js'
import {Size} from './helpers.js'
import {idata} from './inventory_data.js'

const pd=idata
const size=Size()

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}

export function Inventory(props) {

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '25px',
    }

    const _col = {
        ...FLEX_BASE,
        flexDirection: 'column',
    }

    const columns = [ 'SKU', 'Vendor', 'Type', 'Style', 'Size', 'Sale $', 'Retail $', 'Qty' ]
    columns.push((props.p.add) ? 'Add' : 'Edit')

    return  <div>
                <h1>Inventory Management System</h1>
                <h2>Active Inventory</h2>
                { (props.p.add)
                    ? <Button text='Add Selected Items to Purchase Order' next="purchaseOrder" addItem={true} p={props.p} />
                    : <>
                        <Button text='Create Purchase Order' next="purchaseOrder" p={props.p} />
                        <Button text='Add an Item' next="purchaseOrder" p={props.p} />
                      </>
                }
                
                <table style={tableStyle} className='inventoryHeaderRow'>
                   <thead><tr>{ columns.map( (col,k)=><HeadCell key={k} title={col} />)}</tr></thead>
                   <tbody>
                   { pd.map( (item,key)=><InventoryCell key={key} p={props.p} item={item} /> )}
                   </tbody>
                </table>
            </div>
}

export function HeadCell(props) {
    const invSty = {
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        borderLeft: '1px solid white',
        padding: '10px',
        textAlign: 'left',
        textTransform: 'uppercase',
    }
    const chevron = {
        padding: '0 10px 25px 10px',
        fontSize: '14pt',
    }
    return  <th style={invSty} className='inventoryHeaderRow'>{props.title}<span style={chevron}>&#8964;</span></th>
}

export function InventoryCell(props) {
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
                <td style={leftSty} className='inventoryCell'>{props.item.sku}</td>
                <td style={leftSty} className='inventoryCell'>{props.item.vendor}</td>
                <td style={leftSty} className='inventoryCell'>{props.item.type}</td>
                <td style={leftSty} className='inventoryCell'>{props.item.style}</td>
                <td style={leftSty} className='inventoryCell'>{props.item.size}</td>
                <td style={rightSty} className='inventoryCell'>${props.item.wholesale}.00</td>
                <td style={rightSty} className='inventoryCell'>${props.item.retail}.00</td>
                <td style={rightSty} className='inventoryCell'>{props.item.count}</td>
                
                { (!props.hide)
                    ? <td style={addSty} className='addCell'>
                        { (props.p.add) 
                            ? <input onChange={(event)=>changeCount(event.target.value)} style={inputSty} type="number" max={props.item.count} value={count}/>
                            : <Button text='Edit' next="inventory" p={props.p}/>
                        }
                      </td>
                    :null
                }
            </tr>
}
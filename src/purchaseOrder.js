import React, { useState } from 'react';
import Button from './button.js'
import {HeadCell,InventoryCell} from './inventory.js'
import {ClientCell} from './clients.js'
import {Size} from './helpers.js'
import {idata,clients} from './inventory_data.js'

const pd=idata.slice(4,8)
const client=clients

const size=Size()

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}

export function PurchaseOrder(props) {
    const [shippingOpt,changeShipping] = useState(true)
    const [clientOpt,changeClient] = useState(true)


    const [showView,changeView] = useState(1);
    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '25px',
    }

    const _col = {
        ...FLEX_BASE,
        flexDirection: 'column',
    }

    const selectSty = {
        padding: '10px',
        marginBottom: '25px',
        fontSize: '12pt',
    }

    const statusStyle = {
        fontWeight: 'bold',
        fontSize: '24pt',
        margin: '15px 0'
    }

    const statusLabel = {
        color: 'red',
    }

    const section = {
        borderTop: '1px solid black',
        padding: '20px',
        margin: '0 100px',
    }

    const buttonSty = {
        ...FLEX_BASE,
        ...section,
        justifyContent: 'space-around',
    } 

    const radioSty = {
        ...FLEX_BASE,
        marginBottom: '25px',
    }

    const radioRight = {
        marginLeft: '25px',
    }

    const columns = [ 'SKU', 'Vendor', 'Type', 'Style', 'Size', 'Sale $', 'Retail $', 'Qty' ]
    const columnsClient = [ 'Company', 'Contact', 'Address', 'City', 'State', 'Zip', 'Phone','Email' ]
    const columnsAddress = [ 'Contact', 'Address', 'City', 'State', 'Zip' ]

    const shipping = [
        { speed: 'Ground', cost: '$9.99'},
        { speed: 'Standard', cost: '$15.99'},
        { speed: 'Expedited', cost: '$25.99'},
        { speed: 'Overnight', cost: '$60.99'},
    ]
    
    return  <div>
                <h1>Inventory Management System</h1>
                <h2>Purchase Order</h2>

                <div style={statusStyle} className='status'>Status: <span style={statusLabel}>{props.p.status}</span></div>

                <div style={section}>
                    <h3>Client</h3>

                    <div style={radioSty}>
                        <input type='radio' name='client' checked={clientOpt} onChange={()=>changeClient(!clientOpt)} /><label>Select Client</label>
                        <input  style={radioRight} type='radio' name='client' checked={!clientOpt} onChange={()=>changeClient(!clientOpt)}/><label>Add Client</label>
                    </div>

                    { (clientOpt)
                        ?<select style={selectSty}>
                                {client.map( (item,key)=><option key={key}>{item.company}, {item.city}, {item.state}</option>)}
                            </select>
                        : <div><Button text='Add a Client' next="addClient" p={props.p} /></div>
                    }
                </div>

                <div style={section}>
                    <h3>Items</h3>
                    { (props.p.addItem)
                        ?   <>
                                <h3>Merchandise</h3>
                                <table style={tableStyle} className='inventoryHeaderRow'>
                                    <thead><tr>{ columns.map( (col,k)=><HeadCell key={k} title={col} /> )  }</tr></thead>
                                    <tbody>{ pd.map( (item,key)=><InventoryCell inv={true} hide={true} key={key} add={false} item={item} />  )}</tbody>
                                </table>
                            </>
                        : <Button text='Add Items' add={true} next="inventory" p={props.p} />
                    }
                </div>

                <div style={section}>
                    <h3>Shipping Address</h3>

                    <div style={radioSty}>
                        <input type='radio' name='shippingAdd' checked={shippingOpt} onChange={()=>changeShipping(!shippingOpt)} /><label>Select Shipping Address</label>
                        <input  style={radioRight} type='radio' name='shippingAdd' checked={!shippingOpt} onChange={()=>changeShipping(!shippingOpt)}/><label>Add Shipping Address</label>
                    </div>

                    { (shippingOpt)
                        ?   <select style={selectSty}>
                                {client.map( (item,key)=><option key={key}>{item.addresses[0].name}, {item.addresses[0].address}. {item.addresses[0].city}, {item.addresses[0].state} {item.addresses[0].zip}</option>)}
                            </select>
                        : <div><Button text='Add an Address' next="" p={props.p} /></div>
                    }
                </div>

                <div style={section}>
                    <h3>Shipping Options</h3>
                    { shipping.map((opt,key)=> <div key={key}><input type='radio' name='shipping' />{opt.speed}: {opt.cost}</div>)}
                </div>

                <div style={buttonSty}>
                    <Button text='Send PO to Client' next="sendPO" p={props.p} />
                    <Button text='Export PO' next="invoice" p={props.p} />
                </div>

            </div>
}

export function ShippingCell(props) {

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
                <td style={leftSty} className='inventoryCell'>{props.item.name}</td>
                <td style={leftSty} className='inventoryCell'>{props.item.address}</td>
                <td style={leftSty} className='inventoryCell'>{props.item.city}</td>
                <td style={leftSty} className='inventoryCell'>{props.item.state}</td>
                <td style={rightSty} className='inventoryCell'>{props.item.zip}</td>
                {(props.item.email)?<td style={rightSty} className='inventoryCell'>{props.item.email}</td>:null}
            </tr>
}

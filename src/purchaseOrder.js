import React, { useState } from 'react';
import Button from './button.js'
import {HeadCell,InventoryCell} from './inventory.js'
import {ClientCell} from './clients.js'
import {Size} from './helpers.js'
import {idata,clients} from './inventory_data.js'

const pd=idata.slice(4,8)
const client=clients.slice(1)


const size=Size()

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}

export function PurchaseOrder(props) {
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

    const buttonSty = {
        ...FLEX_BASE,
        justifyContent: 'space-around',
        margin: '25px auto',
    } 

    const columns = [ 'SKU', 'Vendor', 'Type', 'Style', 'Size', 'Sale $', 'Retail $', 'Qty' ]
    const columnsClient = [ 'Company', 'Contact', 'Address', 'City', 'State', 'Zip', 'Email' ]
    const columnsAddress = [ 'Contact', 'Address', 'City', 'State', 'Zip' ]

    const shipping = [
        { speed: 'Economy', cost: '$9.99'},
        { speed: 'Standard', cost: '$15.99'},
        { speed: 'Expedited', cost: '$25.99'},
        { speed: 'Overnight', cost: '$60.99'},
    ]
    
    return  <div>
                <h1>Inventory Management System</h1>
                <h2>Purchase Order</h2>

                <div>
                    { (props.addItem)
                        ?   <>
                                <h3>Merchandise</h3>
                                <table style={tableStyle} className='inventoryHeaderRow'>
                                    <tr>{ columns.map( (col,k)=><HeadCell key={k} title={col} /> )  }</tr>
                                    { pd.map( (item,key)=><InventoryCell inv={true} key={key} add={false} item={item} />  )}
                                </table>
                            </>
                        : <Button text='Add Items' add={true} next="inventory" changeView={props.changeView} />
                    }
                </div>

                <div>
                    { (props.addClient)
                        ? <>
                            <h3>Client</h3>
                            <table style={tableStyle} className='inventoryHeaderRow'>
                                <tr>{ columnsClient.map( (col,k)=><HeadCell key={k} title={col} /> )  }</tr>
                                { client.map( (item,key)=><ClientCell inv={true} key={key} add={false} item={item} />  )}
                            </table>
                          </>
                        : <Button text='Add Client' add={true} next="clients" changeView={props.changeView} />
                    }
                </div>

                <div>
                    { (props.addClient)
                        ? <>
                            <h3>Shipping Address</h3>
                            <table style={tableStyle} className='inventoryHeaderRow'>
                                <tr>{ columnsAddress.map( (col,k)=><HeadCell key={k} title={col} /> )  }</tr>
                                { client.map( (item,key)=><ShippingCell inv={true} key={key} add={false} item={item.addresses[0]} />  )}
                            </table>
                          </>
                        : null
                    }
                </div>

                <div>
                    <h3>Shipping Options</h3>
                    { shipping.map((opt,key)=> <div><input type='radio' name='shipping' />{opt.speed}: {opt.cost}</div>)}
                </div>

                <div style={buttonSty}>
                    <Button text='Send Invoice' next="sendInvoice" changeView={props.changeView} />
                    <Button text='Export Invoice' next="invoice" changeView={props.changeView} />
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

import React, { useState } from 'react';
import {statusChart} from './inventory_data.js' 
import { HeadCell, InventoryCell } from './inventory.js';
import Button from './button.js'
import { buildQueries } from '@testing-library/react';

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}

export function Status(props) {

    let status = (props.p.permission==='Client') ? statusChart.slice(0,3) : statusChart;

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '25px',
    }
    const _col = {
        ...FLEX_BASE,
        flexDirection: 'column',
    }

    const columns = [ 'Details', 'status', 'company', 'created', 'PO Sent', 'PO Accepted', 'Invoice Sent','Paid', 'Shipped', 'Shipper', 'Tracking' ]

    return  <div>
                <h1>Inventory Management System</h1>
                <h2>Status View for {props.p.permission}</h2>
                <table style={tableStyle} className='inventoryHeaderRow'>
                <thead><tr>{ columns.map( (col,k)=><HeadCell key={k} title={col} />)}</tr></thead>
                   <tbody>
                   { status.map( (item,key)=><StatusCell key={key} p={props.p} item={item} /> )}
                   </tbody>
                </table>
            </div>
}

export function StatusCell(props) {

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

    const daSty = {
        ...leftSty,
        whiteSpace: 'nowrap',
    }

    const addSty = {
        ...leftSty,
    }

    const trackSty = {
        ...leftSty,
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer',
    }

    const inputSty = {
        width: '25px'
    }

    let next=''
    switch (props.item.status){
        case 'Shipped':
        case 'Invoice Sent':
        case 'Paid':
            next='invoice'
            break
        case 'PO Sent':
        case 'PO Accepted':
            next='purchaseOrder'
            break
    }

    return  <tr>
                <td style={addSty} className='addCell'><Button text='View' next={next} status={props.item.status} p={props.p}/></td>
                <td style={leftSty} className='inventoryCell'>{props.item.status}</td>
                <td style={leftSty} className='inventoryCell'>{props.item.company}</td>
                <td style={daSty} className='inventoryCell'>{props.item.created}</td>
                <td style={daSty} className='inventoryCell'>{props.item.po_sent}</td>
                <td style={daSty} className='inventoryCell'>{props.item.po_accepted}</td>
                <td style={daSty} className='inventoryCell'>{props.item.inv_sent}</td>
                <td style={daSty} className='inventoryCell'>{props.item.inv_paid}</td>
                <td style={daSty} className='inventoryCell'>{props.item.shipped}</td>
                <td style={leftSty} className='inventoryCell'>{props.item.shipping_vendor}</td>
                <td style={trackSty} className='inventoryCell'>{props.item.tracking_id}</td>
            </tr>
}
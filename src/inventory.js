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

    const srch = {
        ...FLEX_BASE
      }
  
      const spc = {
        marginLeft: '5px',
        marginRight: '5px',
        cursor: 'pointer',
      }

      const srchrow = {
        ...FLEX_BASE,
        justifyContent: 'flex-start',
        width: '100%',
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
                        <Button text='Add an Item' next="addItem" p={props.p} />
                      </>
                }

                <div style={srchrow}>
                    <div style={srch}><div style={spc}>Search Inventory:</div> <input type='text'></input><div style={spc}>&#x1f50d;</div></div>
                </div>
                
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
    const [editing,changeEdit] = useState(false)

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

    const linkSty = {
        ...FLEX_BASE,
        fontSize: '18pt',
        cursor: 'pointer',
    }

    return  <tr>
                {(editing)
                    ? <>    <td style={leftSty} className='inventoryCell'><textarea>{props.item.sku}</textarea></td>
                            <td style={leftSty} className='inventoryCell'><textarea>{props.item.vendor}</textarea></td>
                            <td style={leftSty} className='inventoryCell'><textarea>{props.item.type}</textarea></td>
                            <td style={leftSty} className='inventoryCell'><textarea>{props.item.style}</textarea></td>
                            <td style={leftSty} className='inventoryCell'><textarea>{props.item.size}</textarea></td>
                            <td style={rightSty} className='inventoryCell'><textarea>{`${props.item.wholesale}.00`}</textarea></td>
                            <td style={rightSty} className='inventoryCell'><textarea>{`${props.item.retail}.00`}</textarea></td>
                            <td style={rightSty} className='inventoryCell'><textarea>{props.item.count}</textarea></td>
                            { (!props.hide)
                                ? <td style={addSty} className='addCell'>
                                    { (props.p.add) 
                                        ? <input onChange={(event)=>changeCount(event.target.value)} style={inputSty} type="number" max={props.item.count} value={count}/>
                                        : <div style={linkSty} onClick={ ()=>changeEdit(!editing) }>&#10003;</div>
                                    }
                                </td>
                                :null
                            }

                    </>
                    : <>    <td style={leftSty} className='inventoryCell'>{props.item.sku}</td>
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
                                        : <div style={linkSty} onClick={ ()=>changeEdit(!editing) }>&#9998;</div>
                                    }
                                </td>
                                :null
                            }

                      </>




                }

                

            </tr>
}

export function AddItem(props) {

    const data = {
        vendors: ['Alexander McQueen','Fendi','Givenchy','Gucci','Palm Angels','Saint Laurent','Versaci',],
        types: ['Cap','Jacket','Sandals','Sneakers','Sweatpants','Tee shirt',],
        styles: ['Black','Blue','Green','Orange','Purple','Red','White','Yellow',],
        sizes: ['S','M','L','XL']
    }

    const pad = {
        marginBottom: '15px',
    }

    const inputSty = {
        width: '150px',
        padding: '10px',
        fontSize: '12pt',
        marginLeft: '10px',
    }

    return <div>
                <h1>Inventory Management System</h1>
                <h2>Add Item</h2>
                <div>
                    <div style={pad}><b>Vendor:</b><Select opts={data.vendors} /></div>
                    <div style={pad}><b>Type:</b><Select opts={data.types} /></div>
                    <div style={pad}><b>Style:</b><Select opts={data.styles} /></div>
                    <div style={pad}><b>Size:</b><Select opts={data.sizes} /></div>
                    <div style={pad}><b>Purchase Price:</b><input style={inputSty} type='text'></input></div>
                    <div style={pad}><b>Sale Price:</b><input style={inputSty} type='text'></input></div>
                    <div style={pad}><b>Retail Price:</b><input style={inputSty} type='text'></input></div>
                    <div style={pad}><b>Quantity:</b><input style={inputSty} type='text'></input></div>
                </div>
                <Button text='Add' next="inventory" p={props.p} />
           </div>


}

export function Select(props){
    const sty = {
        padding: '10px',
        fontSize: '12pt',
        width: '250px',
        marginLeft: '5px',
    }
    return <select style={sty}>{props.opts.map((it,key)=><Option key={key} it={it} />)}</select>
}

export function Option(props){
    return <option>{props.it}</option>
}
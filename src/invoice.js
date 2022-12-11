import Button from './button.js'
import {HeadCell} from './inventory.js'
import {idata,clients} from './inventory_data.js'

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}

export function PayInvoice(props) {
    return <div>
            <h1>Inventory Management System</h1>
            <h2>Pay Invoice</h2>
            <h3>Online payment not yet available.</h3>
            <div>Please contact Merchant at 555-555-5555 to pay your invoice via telephone.</div>
           </div>
}

export function Invoice(props) {

    const section = {
        borderTop: '1px solid black',
        padding: '20px',
        margin: '0 100px',
    }

    const client=clients[1]
    const items=idata.slice(0,5)
    const columns = ['SKU', 'Vendor', 'Type', 'Style', 'Size', 'Sale $', 'Retail $', 'Qty', 'Item Total' ]

    const subtotal = items.reduce((prev,next)=>prev+next.wholesale*next.count,0)
    const total = parseFloat(subtotal)+9.99+25.00

    return  <div>
                <h1>Inventory Management System</h1>
                <h2>Invoice</h2>
                <div style={section}>
                    <h3>Invoice Number: XYX123</h3>
                    <h3>Date: 12-11-2022</h3>
                </div>

                <div style={section}>
                    <h3>Merchant</h3>
                    <div>
                        Luxury Brands<br />
                        666 Fifth Ave.<br />
                        New York, NY 01210<br />
                        555-555-5555<br />
                        moe.schmo@luxurybrands.biz
                    </div>
                </div>

                <div style={section}>
                    <h3>Billing Address</h3>
                    <div>
                        {client.name}<br />
                        {client.company}<br />
                        {client.address}<br />
                        {client.city}, {client.state} {client.zip}
                    </div>

                </div>

                <div style={section}>
                    <h3>Shipping Address</h3>
                    <div>
                        {client.addresses[0].name}<br />
                        {client.company}<br />
                        {client.addresses[0].address}<br />
                        {client.addresses[0].city}, {client.addresses[0].state} {client.addresses[0].zip}
                    </div>
                </div>

                <div style={section}>
                    <h3>Shipping Method</h3>
                    <div>
                        UPS Ground
                    </div>
                </div>  

                <div style={section}>
                    <h3>Items</h3>
                    <table className='inventoryHeaderRow'>
                        <thead><tr>{ columns.map( (col,k)=><HeadCell key={k} title={col} />)}</tr></thead>
                        <tbody>
                            { items.map( (item,key)=><InvoiceCell key={key} p={props.p} item={item} /> )}
                            <InvoiceSubrow title='Subtotal' value={`$${parseFloat(subtotal)}`} />
                            <InvoiceSubrow title='Shipping' value='$9.99' />
                            <InvoiceSubrow title='Tax' value='$25.00' />
                            <InvoiceSubrow title='Total' value={`$${total}`} />
                        </tbody>
                    </table>
                </div>

                { (props.p.permission==='Client')
                    ? <Button text='Pay Invoice' next="payInvoice" p={props.p} />
                    : <Button text='Send Invoice' next="sendInvoice" p={props.p} />
                }

            </div>
}


export function SendInvoice(props) {
    return  <div>
                <h1>Inventory Management System</h1>
                <h2>Invoice Sent!</h2>
            </div>
}

export function SendPO(props) {
    return  <div>
                <h1>Inventory Management System</h1>
                <h2>Purchase Order Sent!</h2>
            </div>
}

export function InvoiceSubrow(props) {
    const blankCell={
        border: 'none',
    }
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

    return  <tr>
                <td style={blankCell}></td>
                <td style={blankCell}></td>
                <td style={blankCell}></td>
                <td style={blankCell}></td>
                <td style={blankCell}></td>
                <td style={blankCell}></td>
                <td style={blankCell}></td>
                <td style={rightSty}><b>{props.title}</b></td>
                <td style={rightSty}>{props.value}</td>
            </tr>

}

export function InvoiceCell(props) {
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
                <td style={rightSty} className='inventoryCell'>${parseFloat(props.item.wholesale) * parseFloat(props.item.count)}.00</td>
            </tr>
}
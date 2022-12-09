import Button from './button.js'
import {Size} from './helpers.js'
import {idata} from './inventory_data.js'

const pd=idata

console.log(pd)

const size=Size()

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}

export function Invoice(props) {
    return  <div>
                <h1>Inventory Management System</h1>
                <h2>Invoice</h2>
                <Button text='Send Invoice' next="sendInvoice" changeView={props.changeView} />
                <table className='inventoryHeaderRow'>
                    
                </table>
            </div>
}


export function SendInvoice(props) {
    return  <div>
                <h1>Inventory Management System</h1>
                <h2>Invoice Sent!</h2>
            </div>
}
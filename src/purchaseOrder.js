import Button from './button.js'
import {HeadCell,InventoryCell} from './inventory.js'
import {Size} from './helpers.js'
import {idata} from './inventory_data.js'

const pd=idata.slice(4,8)

const size=Size()

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}

export function PurchaseOrder(props) {

    console.log(props)

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

    return  <div>
                <h1>Inventory Management System</h1>
                <h2>Purchase Order</h2>
                <Button text='Send Invoice' next="sendInvoice" changeView={props.changeView} />
                <Button text='Export Invoice' next="invoice" changeView={props.changeView} />
                <div>
                    <Button text='Add Items' add={true} next="inventory" changeView={props.changeView} />
                    { (props.add)
                        ?   <table style={tableStyle} className='inventoryHeaderRow'>
                                <tr>{ columns.map( (col,k)=><HeadCell key={k} title={col} /> )  }</tr>
                                { pd.map( (item,key)=><InventoryCell inv={true} key={key} add={false} item={item} />  )}
                            </table>
                        : null
                    }

                </div>

                <div>
                    <Button text='Add Client' next="clients" changeView={props.changeView} />
                </div>

                <div>

                </div>

            </div>
}

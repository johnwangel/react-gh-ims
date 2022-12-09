import Button from './button.js'
import {Size} from './helpers.js'
import {clients} from './inventory_data.js'

console.log(clients)

const size=Size()

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}

export function Clients(props) {

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '25px',
    }

    const _col = {
        ...FLEX_BASE,
        flexDirection: 'column',
    }

    return  <div>
                <h1>Inventory Management System</h1>
                <h2>Clients</h2>
                <div>
                </div>
            </div>
}

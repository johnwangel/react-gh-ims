import React, {Component} from 'react';
import {Status} from './status.js'
import {Dashboard,Auth,Login,Register,Thanks} from './views.js'
import {Inventory} from './inventory.js'
import {PurchaseOrder} from './purchaseOrder.js'
import {PayInvoice,Invoice,SendInvoice,SendPO} from './invoice.js'
import {Clients} from './clients.js'
import {Profile} from './profile.js'
import {Size} from './helpers.js';

const size = Size()

class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bodySty = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 0',
    }
    const bodyContainer = {
      width: '95vw'
    }

    return (
      <div className="body" style={bodySty}>
        <div style={bodyContainer}>
        {(this.props.view==='dashboard')?<Dashboard p={this.props} />:null}
        {(this.props.view==='auth')?<Auth p={this.props}/>:null}
        {(this.props.view==='login')?<Login p={this.props} />:null}
        {(this.props.view==='register')?<Register p={this.props} />:null}
        {(this.props.view==='inventory')?<Inventory p={this.props}/>:null}
        {(this.props.view==='purchaseOrder')?<PurchaseOrder p={this.props} />:null}
        {(this.props.view==='sendInvoice')?<SendInvoice p={this.props} />:null}
        {(this.props.view==='sendPO')?<SendPO p={this.props} />:null}
        {(this.props.view==='invoice')?<Invoice p={this.props} />:null}
        {(this.props.view==='payInvoice')?<PayInvoice p={this.props} />:null}
        {(this.props.view==='clients')?<Clients p={this.props}/>:null}
        {(this.props.view==='thanks')?<Thanks p={this.props}/>:null}
        {(this.props.view==='profile')?<Profile p={this.props}/>:null}
        {(this.props.view==='status')?<Status p={this.props}/>:null}
        </div>
      </div>
    )
  }
}

export default Body;
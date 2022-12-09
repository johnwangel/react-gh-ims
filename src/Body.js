import React, {Component} from 'react';
import {Size} from './helpers.js';
import {Dashboard,Auth,Login,Register,Thanks} from './views.js'
import {Review3,Review4,Review5} from './review.js'
import {Inventory} from './inventory.js'
import {PurchaseOrder} from './purchaseOrder.js'
import {Invoice,SendInvoice} from './invoice.js'
import {Clients} from './clients.js'
import {Profile} from './profile.js'

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
      padding: '50px 0',
    }
    const bodyContainer = {
      width: (size.width < 600 ) ? '90vw' : '50vw'
    }


    return (
      <div className="body" style={bodySty}>
        <div style={bodyContainer}>
        {(this.props.view==='dashboard')?<Dashboard changeView={this.props.changeView}/>:null}
        {(this.props.view==='auth')?<Auth changeView={this.props.changeView}/>:null}
        {(this.props.view==='login')?<Login handleChange={this.props.handleChange} changeView={this.props.changeView}/>:null}
        {(this.props.view==='register')?<Register handleChange={this.props.handleChange} changeView={this.props.changeView}/>:null}
        {(this.props.view==='inventory')?<Inventory add={(this.props.add)?true:false} changeView={this.props.changeView}/>:null}
        {(this.props.view==='purchaseOrder')?<PurchaseOrder add={this.props.add} changeView={this.props.changeView}/>:null}
        {(this.props.view==='sendInvoice')?<SendInvoice changeView={this.props.changeView}/>:null}
        {(this.props.view==='invoice')?<Invoice changeView={this.props.changeView}/>:null}
        {(this.props.view==='clients')?<Clients changeView={this.props.changeView}/>:null}
        {(this.props.view==='thanks')?<Thanks changeView={this.props.changeView}/>:null}
        {(this.props.view==='profile')?<Profile changeView={this.props.changeView}/>:null}
        </div>
      </div>
    )
  }
}

export default Body;
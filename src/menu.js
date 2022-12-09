import React, {Component} from 'react';
import Body from './Body.js'
import Button from './button.js'
import {Size} from './helpers.js';

const size=Size();

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { view: 'dashboard', username: undefined, add: false, addItem: false, addClient: false }
    this.handleClick=this.handleClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleClick(view,add=false,addItem=false,addClient=false){
    this.setState({view,add,addItem,addClient})
  }

  handleChange(username){
    this.setState({username})
  }

  render() {
    const menuSty = {
        ...FLEX_BASE,
        flexDirection: (size.width<600)?'column':'row',
        backgroundColor: 'black',
        padding: '10px 25px',
        color: 'white',
    }

    const plusStyle={
        color: 'red',
        fontSize: '24pt',
        marginLeft: '5px',
        fontWeight: 'bold',
        marginBottom: '8px',
    }

    const itemSty = {
      ...FLEX_BASE,
      marginBottom: '15px',
    }

    const srch = {
      ...FLEX_BASE
    }

    const spc = {
      marginLeft: '5px',
      marginRight: '5px',
      cursor: 'pointer',
    }

    const hm = {
      fontSize: '24pt',
      cursor: 'pointer',
    }

    return (
    <>
      <div className="menu" style={menuSty}>
        <div style={itemSty}>IMS</div>
        <div style={itemSty}>
            <div style={srch}><div style={spc}>Search:</div> <input type='text'></input><div style={spc} onClick={()=>this.handleClick('profile')}>&#x1f50d;</div></div>
        </div>
        <Button text='Dashboard' next="dashboard" changeView={this.handleClick} />
        <Button text='Inventory' next="inventory" changeView={this.handleClick} />
        <Button text='Purchase Orders' next="purchaseOrder" changeView={this.handleClick} />
        <Button text='Order Tracking' next="tracking" changeView={this.handleClick} />
        {(this.state.username)
          ? <div>Welcome {this.state.username}</div>
          : <Button text='Sign In' next="login" changeView={this.handleClick}/>
        }
        <div style={hm} onClick={()=>this.handleClick('dashboard')}>&#8962;</div>
      </div>
      <Body view={this.state.view} addItem={this.state.addItem} addClient={this.state.addClient} add={this.state.add} handleChange={this.handleChange} changeView={this.handleClick} />
    </>
    )
  }
}
export default Menu;
import React, {Component} from 'react';
import Body from './Body.js'
import {MenuItems} from './views.js'
import Button from './button.js'
import {Size} from './helpers.js';

const size = Size()

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { view: 'dashboard', 
                   username: undefined,
                   permission: 'Merchant', 
                   add: false, 
                   addItem: false, 
                   addClient: false,
                   status: 'Created',
                  }
    this.handleClick=this.handleClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleClick(view,add=false,addItem=false,addClient=false,status='Created'){
    this.setState({view,add,addItem,addClient,status})
  }

  handleChange(username){
    this.setState({username})
    if (username==='Client') this.setState({permission:'Client'})
    if (username==='Merchant') this.setState({permission:'Merchant'})
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

    return (
      <>
        <div className="menu" style={menuSty}>
          <MenuItems username={this.state.username} status={this.state.status} permission={this.state.permission} view={this.state.view} addItem={this.state.addItem} addClient={this.state.addClient} add={this.state.add} handleChange={this.handleChange} changeView={this.handleClick}  />
        </div>
        <Body status={this.state.status} permission={this.state.permission} view={this.state.view} addItem={this.state.addItem} addClient={this.state.addClient} add={this.state.add} handleChange={this.handleChange} changeView={this.handleClick} />
      </>
    )
  }
}
export default Menu;
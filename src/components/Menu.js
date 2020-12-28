import React, { Component } from 'react'
import Search from './Search.js'
import PanelAdd from './PanelAdd.js'
import './css/Menu.css'

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {newAddPanel:false};
    }

    add = ()=>{
        this.setState({
            newAddPanel:true
        })
    }

    onCancel = ()=>{
        
        this.setState({newAddPanel:false})
    }

    render() {
        
        return (
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">{this.props.title}</div>
                    <div className="search"><Search onSearch={this.props.onSearch} /></div>
                    <div className="actions">
                        <button onClick={this.add} className="button btn-blue">add item</button>
                    </div>
                </div>
                {
                    (this.state.newAddPanel) ? <PanelAdd onAdd={this.props.onAdd} onHide={this.onCancel}/> : ''
                }
            </div>
        )
    }
}

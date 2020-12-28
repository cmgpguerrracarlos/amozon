import React, { Component } from 'react'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            input:''
        }
    }

    onChangeInput = (e)=>{
        this.setState({
            input:e.target.value.toString().toLowerCase()
        })
        this.props.onSearch(this.state.input);
    }
    
    render(){
        return (
            <div>
                <input type="text" onChange={this.onChangeInput} />
            </div>
        )
    }
    
    
}

export default Search

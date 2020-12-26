import React, { Component } from 'react'
import './css/Item.css'

export default class Items extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            imagen:'',
            rating:1,
            stars:[]
        }
    }

    componentDidMount(){

        this.setState({
            id: this.props.id,
            title: this.props.title,
            image: this.props.image,
            rating: parseInt(this.props.rating),
            stars: Array(parseInt(this.props.rating)).fill(0)
        });
        console.log(this.state.rating);
        console.log(this.state.stars);
    }

    render() {
        return (
            <div className="item">
                <div className="image"><img src={'../img/' + this.state.image} alt="no found"width="100%" /></div>
                <div className="title">{this.state.title}</div>
                <div className="rating">
                    <p>
                        {
                            this.state.stars.map(star=>
                                <img src="../img/star.png" width="32" alt="no stars" />
                            )
                        }

                    </p>
                    Clasificacion:
                    <select value={this.state.rating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button>Eliminar</button>
                </div>
                    
                
            </div>
        )
    }
}

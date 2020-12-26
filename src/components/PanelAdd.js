import React from 'react';

class PanelAdd extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            title: '',
            image: '',
            rating: 1
        };

    }

    cancelAction = (e)=>{
        this.props.onHide();
    }

    onChangeTitle = (e)=>{
        this.setState({title: e.target.value});
        
    }
    onChangeImage = (e)=>{
        this.setState({image: e.target.value});
    }
    onChangeRating = (e)=>{
        const rating = parseInt(e.target.value);
        this.setState({rating: rating});
    }

    createItem = (e)=>{
        e.preventDefault();
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;
        this.props.onAdd({title: title, image: image, rating: rating});
        console.table({title: title, image: image, rating: rating});
        this.cancelAction();
    }

    render(){
        return(
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.createItem}>
                        <p>
                        <label>Título del libro</label><br />
                        <input type="text" name="title" className="input" onChange={this.onChangeTitle} />
                        </p>

                        <p>
                        <label>Nombre de imagen</label><br />
                        <input type="text" name="image" className="input" onChange={this.onChangeImage} />
                        </p>

                        <p>
                        <label>Calificación</label><br />
                        <select onChange={this.onChangeRating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar libro" />
                        <button className="button btn-normal" onClick={this.props.onHide}>Cancelar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PanelAdd;
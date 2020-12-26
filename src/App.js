import React, { Component } from 'react'
import './App.css'
import Menu from './components/Menu'
import List from './components/List'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      books:[
        {id:0, rating: 4, title: 'Harry Potter y el cáliz de fuego', image: 'libro01.jpg'},
        {id:1, rating: 3, title: 'The shining', image: 'libro02.jpg'},
        {id:2, rating: 5, title: 'Código Da Vinci', image: 'libro03.jpg'},
        {id:3, rating: 5, title: 'El principito', image: 'libro04.jpg'},
        {id:4, rating: 5, title: 'Sobrenatural', image: 'libro05.jpg'}
      ],
      copyBooks:[]
    }
  }

  setCopy =()=>{
    this.setState({copyBooks: [...this.state.books]});
  }

  componentDidMount(){
    this.setCopy();
  }

  onAdd = (item)=>{
    console.log("en el onadd")
    console.table(item)
    var temp = [...this.state.books];
    const id = temp[temp.length-1].id + 1;
    item['id'] = id;
    temp.push(item);
    this.setState({books: [...temp]});
    this.setCopy();
    console.log(this.state.books);
    console.log(this.state.copyBooks);
  }

  render() {
    return (
      <div className="app">
        <Menu title="Amozon" onAdd={this.onAdd}/>
        <List items={this.state.copyBooks}/>
      </div>
    )
  }
}
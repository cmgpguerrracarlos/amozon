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

  setCopy = ()=>{
    this.setState({copyBooks: [...this.state.books]});
  }

  fetchBooks = async ()=>{
    let res = await fetch('http://localhost:3000/api/books');
    let books = await res.json();
    this.setState({books});
  }

  async componentDidMount(){
    //this.setCopy();
    this.fetchBooks();

    this.setState({copyBooks: [...this.state.books]})
    console.log("Montado el componente");
  }

  onAdd = (item)=>{
    var temp = [...this.state.books];
    let id = temp[temp.length-1].id + 1;
    item['id'] = id;
    temp.push(item);
    console.log("valores de temp");
    temp.map((em)=>{
      console.table(em);
      return null;     
    })
    console.log("===============================");
    this.setState({books: [...temp],copyBooks: [...temp]})
    
  }

  onUpdateRating =(item)=>{
    var temp = [...this.state.books];
    const index = temp.findIndex(x => x.id === item.id);
    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    this.setState({books: [...temp],copyBooks: [...temp]});
  }

  onDelete = (id)=>{
    let temp = [...this.state.books];
    const res = temp.filter(item => item.id !== id);
    this.setState({books: [...res], copyBooks: [...res]});
    
  }
  
  onSearch = (query)=>{
    var temp = [...this.state.books];
    const res = [];

    if(query === ''){
      this.setState({copyBooks: [...this.state.books]});  
    }else{
      
      temp.forEach(item => {
        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      })   
    }

    this.setState({copyBooks:[...res]});
  }

  render() {
    return (
      <div className="app">
        <Menu title="Amozon" onAdd={this.onAdd} onSearch={this.onSearch}/>
        <List items={this.state.copyBooks} onUpdateRating={this.onUpdateRating} onDelete={this.onDelete}/>
      </div>
    )
  }
}
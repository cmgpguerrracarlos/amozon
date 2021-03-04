import React, { Component } from 'react'
import './App.css'
import Menu from './components/Menu'
import List from './components/List'
import axios from 'axios'

const api = axios.create({
  baseURl:'http://localhost:3050/books'
});

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      books:[],
      copyBooks:[]
    }
  }

  setCopy = ()=>{
    this.setState({copyBooks: [...this.state.books]});
  }

  fetchBooks = async ()=>{
    api.get('/').then(res=>{
      console.log(res.data);
      this.setState({
        books:res.data
      });
    }).catch(error=>{console.error(error)});
    this.setState({copyBooks:this.state.books});
  }

  async componentDidMount(){
    this.fetchBooks();
    console.log("Montado el componente");
  }

  onAdd = (item)=>{
    var temp = [...this.state.copyBooks];
    let id = temp[temp.length-1].id + 2;
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

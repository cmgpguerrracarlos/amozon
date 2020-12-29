const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3050;
const app = express();

app.use(bodyParser.json());
//Create connection
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'books'
});

//Create routes
app.get('/',(req,res)=>{
    res.send('Access-Control-Allow-Origin:*');
});

app.get('/books',(req,res)=>{
    const query = 'SELECT * FROM bookstable';
    connection.query(query,(error,result)=>{
        if(error) throw error;
        if(result.length > 0){
            res.setHeader('Access-Control-Allow-Origin','*');
            res.json(result);
        }else{
            res.send('No books in the table')
        }
    });
});

app.get('/books/:id',(req,res)=>{
    res.send("Get book  by an id");
});

app.post('/add',(req,res)=>{
    res.send('New book added');
});

app.put(`/update/:id`,(req,res)=>{
    res.send('Updated book');
});

app.delete('/delete/:id',(req,res)=>{
    res.send('Deleted book');
});

//Checked the connection
connection.connect(err => {
    if(err) throw err;
    console.log('Database server running!');
});

app.listen(PORT,()=>console.log(`server running on port ${PORT}!`));
const rec = require('./arit');

const http = require('http');

const handleServer = (req,res)=>{
	res.writeHead(200,{"Content-type":"text/html"});
	res.write("<h2>Welcome</h2>");
	res.end();
}

const server = http.createServer(handleServer);

server.listen(3000,()=>{
	console.log("server corriendo en puerto 3000");
});

console.log(rec.sumar(3,4));
console.log(rec.restar(3,4));
console.log(rec.multiplicar(3,4));
console.log(rec.dividir(3,4));

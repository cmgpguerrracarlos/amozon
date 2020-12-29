

exports.sumar = (a,b)=> {
	if(a !== null && b !== null){
		return a+b;
	}else{
		return "Error";
	}
	
}
exports.restar = (a,b)=> {
	if(a !== null && b !== null){
		return a-b;
	}else{
		return "Error";
	}
}
exports.multiplicar = (a,b)=>{
	if(a !== null && b !== null){
		return a*b;
	}else{
		return "Error";
	}
}
exports.dividir = (a,b)=>{
	if(a !== null && b !== null && b!==0){
		return a+b;
	}else{
		return "Error";
	}
}


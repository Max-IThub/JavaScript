function sheckArrayType (array) {
	let result = [];
	if(typeof array[i] == 'boolean'){
		result[i] = "bool";
	}else if (typeof array[i] == 'string') {
		result[i] = "str";
	}else if (typeof array[i] == 'number') {
		result[i] = "num";
	}else{
		console.log("")
	}
}sheckArrayType([1,false,"something"])
const _ = require("lodash");

//.then(val => console.log(val));
//, {method: 'Get'}
//.catch(err => console.error(err));

function getGreeting() {
	return fetch('/api/greeting/banani')
	.then(resp => resp.json())
	.then(function(data) {
		//handle data
		return data.greeting;
	});
	//.then(console.log);
	
}

async function myFunction(){
	var greeting = await getGreeting();
	console.log(greeting);
	return greeting;
 }

function component() {
	//Sækjum greeting/banani
		//ToImplement
	
	let element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'there!'], ' ');

	return element;
}
document.body.appendChild(component());
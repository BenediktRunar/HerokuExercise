const _ = require("lodash");

function getGreeting() {
	return fetch('/greeting/banani')
    .then(res => res.json())
	.then(val => console.log(val));
}

function component() {
	//Sækjum greeting/banani
	var greeting = getGreeting();
	let element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'there!'], ' ');
	return element;
}
document.body.appendChild(component());
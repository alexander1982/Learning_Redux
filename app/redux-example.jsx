var redux = require('redux');

console.log('Starting redux example');

//function add(a, b) {
//	return a + b;
//}
//
//var a = 3;
//function add1(b) {
//	return a + b;
//}
//
//var result;
//function add2(a, b) {
//	result = a + b;
//	return result;
//}
//
//function add3(a, b) {
//	return a + b + new Date().getSeconds();
//}
//
//function changeProps(obj) {
//	return {
//		...obj,
//		name: 'Do'
//	};
////	obj.name = 'Al';
////	return obj;
//}
//
//var startingValue = {
//	name: 'Alex',
//	age: 34
//};
//
//var res = changeProps(startingValue);
//console.log(startingValue);
//console.log(res);

var reducer = (state = {name: 'Anonymous'}, action) => {
	return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('Current state ' + currentState);




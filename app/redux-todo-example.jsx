var redux = require('redux');

console.log('Starting redux example 2');

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

var stateDefault = { name: 'Anonymous', searchText: '', showCompleted: false, todos: [] };
var reducer = (state = stateDefault, action) => {
	switch(action.type){
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
			};
		case 'CHANGE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText
			};
		default:
			return state;
	}
};
var store = redux.createStore(reducer);
console.log('Current state', store.getState());

store.dispatch({
	               type: 'CHANGE_NAME',
	               name: 'Alex'
               });
store.dispatch({
	               type: 'CHANGE_SEARCH_TEXT',
	               searchText: 'Hello world!'
               });

console.log('Name should be Alex', store.getState());
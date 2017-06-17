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

var stateDefault = {
	name         : 'Anonymous',
	searchText   : '',
	showCompleted: false,
	todos        : [],
	hobbies      : [],
	movies       : []
};

var nextHobbyId = 1;
var nextMovieId = 1;

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
		case 'ADD_HOBBY':
			return {
				...state,
				hobbies: [
					...state.hobbies,
					{
						id   : nextHobbyId++,
						hobby: action.hobby
					}
				]
			};
		case 'REMOVE_HOBBY':
			return {
					...state,
					hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
			};
		case 'ADD_MOVIE':
			return {
				...state,
				movies: [
					...state.movies,
					{
						id   : nextMovieId++,
						movie: action.movie,
						genre: action.genre
					}
				]
			};
		case 'REMOVE_MOVIE':
			return {
				...state,
				movies: state.movies.filter((movie) => movie.id != action.id)
			};
		default:
			return state;
	}
};
var store = redux.createStore(reducer, redux.compose(
window.devToolsExtension? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
	var state = store.getState();
	console.log('Name is ', state.name);
	document.getElementById('app').innerHTML = state.name;
});
store.subscribe(() => {
	var state = store.getState();
	console.log('Text is ', state.searchText);
	document.getElementById('app').innerHTML = state.searchText + ' ' + state.name;
	console.log('Current state', store.getState());
});

store.dispatch({
	               type: 'CHANGE_NAME',
	               name: 'Alex'
               });

store.dispatch({
	               type: 'CHANGE_NAME',
	               name: 'Sasha'
               });

store.dispatch({
	               type      : 'CHANGE_SEARCH_TEXT',
	               searchText: 'Hello world!'
               });

store.dispatch({
	               type : 'ADD_HOBBY',
	               hobby: 'Gym'
               });

store.dispatch({
	               type : 'ADD_HOBBY',
	               hobby: 'Walking'
               });

store.dispatch({
	               type : 'REMOVE_HOBBY',
	               id: 1
               });


store.dispatch({
	               type      : 'CHANGE_SEARCH_TEXT',
	               searchText: 'Hell!'
               });

store.dispatch({
	               type : 'ADD_MOVIE',
	               movie: 'Naked lunch',
	               genre: 'Drama'
               });

store.dispatch({
	               type : 'ADD_MOVIE',
	               movie: 'Batman',
	               genre: 'Drama'
               });

store.dispatch({
	               type : 'REMOVE_MOVIE',
	               id: 1
               });


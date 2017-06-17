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

var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = 'Anonymous', action) => {
	switch(action.type){
		case 'CHANGE_NAME':
			return action.name;
		default:
			return state;
	}
};

var hobbyReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_HOBBY':
			return [
				...state,
				{
					id   : nextHobbyId++,
					hobby: action.hobby
				}
			];
		case 'REMOVE_HOBBY':
			return state.filter((hobby) => hobby.id !== action.id);
		default:
			return state;
	}
};

var movieReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_MOVIE':
			return [
				...state,
				{
					id: nextMovieId++,
					movie: action.movie
				}
			];
		case 'REMOVE_MOVIE':
			return state.filter((movie) => movie.id !== action.id);
		default:
			return state;
	}
};

var reducer = redux.combineReducers({
	                                    name : nameReducer,
	                                    hobbies: hobbyReducer,
																			movies: movieReducer
                                    });

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
	               type: 'REMOVE_HOBBY',
	               id  : 1
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
	               type: 'REMOVE_MOVIE',
	               id  : 1
               });


var redux = require('redux');
var axios = require('axios');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();


var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('New State', store.getState());

    if(state.map.isFetching){
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url){
        document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'" target="_blank">View Your Location</a>'
    }
});


var currentState = store.getState();

console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Qiply'));

store.dispatch(actions.addHobby('running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('faza'));

store.dispatch(actions.addMovie('Mad Max', 'Action'));
store.dispatch(actions.addMovie('Starwars', 'Actions'));
store.dispatch(actions.removeMovie(1));
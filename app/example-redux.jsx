var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};
var nextHobbyID = 1;
var nextMovieID = 1;

// var reducer = (state = stateDefault, action) => {
//     switch(action.type){
//         case 'CHANGE_NAME':
//             return{
//                 ...state,
//                 name: action.name
//             };
//         case 'ADD_HOBBIES':
//             return{
//                 ...state,
//                hobbies: [
//                    ...state.hobbies, 
//                    {
//                        id: nextHobbyID++,
//                        hobby: action.hobby
//                    }
//                ]
//             };
//         case 'REMOVE_HOBBIES':
//             return{
//                 ...state,
//                hobbies: state.hobbies.filter((hobby) =>hobby.id !== action.id)
//             };
//         case 'ADD_MOVIE':
//             return{
//                 ...state,
//                movies: [
//                    ...state.movies, 
//                    {
//                        id: nextMovieID++,
//                        title: action.title,
//                        genre: action.genre
//                    }
//                ]
//             };
//         case 'REMOVE_MOVIE':
//             return{
//                 ...state,
//                movies: state.movies.filter((movie) =>movie.id !== action.id)
//             };
//             default:
//             return state;
//     }
// };

var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type){
        case 'CHANGE_NAME': 
            return action.name;
        default:
            return state;
    };
};

var hobbiesReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_HOBBY': 
            return [
                   ...state, 
                   {
                       id: nextHobbyID++,
                       hobby: action.hobby
                   }
               ];
               case 'REMOVE_HOBBY':
               return state.filter((hobby) =>hobby.id !== action.id)
               default:
               return state;
    };
};

var moviesReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_MOVIE': 
            return [
                   ...state, 
                   {
                       id: nextMovieID++,
                       title: action.title,
                       genre: action.genre
                   }
               ];
               case 'REMOVE_MOVIE':
               return state.filter((movie) =>movie.id !== action.id)
               default:
               return state;
    };
};


var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});


var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;

    console.log('New State', store.getState());
});
var currentState = store.getState();

console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Andrew'
});

store.dispatch({
    type: 'ADD_HOBBIES',
    hobby: 'Running'
});

store.dispatch({
    type: 'ADD_HOBBIES',
    hobby: 'Walking'
});

store.dispatch({
    type: 'REMOVE_HOBBIES',
    id: 2
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Faza'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Mad Max',
    genre: 'action'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Star Wars',
    genre: 'action'
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
});
var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};

var reducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'CHANGE_SEARCH_TEXT':
            return{
                ...state,
                searchText: action.searchText
            };
        default: 
        return state;
    }

};

// ini untuk menyambungkan ke redux devtools
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to change
store.subscribe(() => {
    var state = store.getState();

    document.getElementById('app').innerHTML = state.searchText;
});

console.log('currentState', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'work'
});


store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Studying'
});


store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Swimming'
});

// console.log('SearchText should be "work"', store.getState());
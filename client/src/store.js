import thunk from "redux-thunk";
import {createStore, combineReducers,applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
import appReducer from './Reducers/appReducer';
import homeReducer from './Reducers/homeReducer';
//combineReducers allows you to merge substates into store
//redux is not an application framework and does not dictate how events should be handled
//this is where middleware kicks in
//the middleware thunk handles asynchronous tasks
const allReducers = combineReducers(
    {app: appReducer,home:homeReducer},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk, promise,createLogger({predicate: true,collapsed: true})),)

const rootReducer = (state,action)=>{
    if (action.type=== 'RESET_STATE'){
        state=undefined;
    }
    return allReducers(state,action);
}
const store = createStore(
    rootReducer
    );
store.subscribe(()=>{
    console.log('Redux store set up')
})

export default store;
"use client"
import {configureStore} from '@reduxjs/toolkit';
import appReducer from './Reducers/appReducer';
import homeReducer from './Reducers/homeReducer';
import donateReducer from './Reducers/donateReducer';
import beAnAllieReducer from './Reducers/beAnAllieReducer';
//combineReducers allows you to merge substates into store
//redux is not an application framework and does not dictate how events should be handled
//this is where middleware kicks in
//the middleware thunk handles asynchronous tasks
// const allReducers = combineReducers(
//     ,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk, promise,createLogger({predicate: true,collapsed: true})),)

// const rootReducer = (state,action)=>{
//     if (action.type=== 'RESET_STATE'){
//         state=undefined;
//     }
//     return allReducers(state,action);
// }
const store = configureStore({
    reducer:{app: appReducer,home:homeReducer,donate:donateReducer,beAnAllie:beAnAllieReducer}
});
store.subscribe(()=>{
    console.log('Redux store set up')
})

export default store;
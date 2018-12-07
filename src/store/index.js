import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = applyMiddleware(thunk);

const store = createStore(
    reducer,
    enhancer

    // 这里禁用了 Redux DevTools，否则会报错（Error: You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.）
    /*
    composeEnhancers(
        applyMiddleware(thunk)
    )
    */
);

export default store;
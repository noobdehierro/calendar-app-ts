import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { rootReducer } from '../reducer/rootReducer';

const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store:any = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
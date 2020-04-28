import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'; 
import bikesReducer from '../reducers/bikes';
import adminReducer from '../reducers/admin';
import bikeIdReducer from '../reducers/bikeId';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import stockReducer from '../reducers/stock';
import videoReducer from '../reducers/video';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
const store = createStore(combineReducers(
        {
        bikeId: bikeIdReducer,
        bikes: bikesReducer,
        filters: filtersReducer,
        auth: authReducer,
        stock: stockReducer,
        videos: videoReducer,
        admin: adminReducer
       
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
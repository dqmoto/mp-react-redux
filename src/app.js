//install -> imoprt -> use
// import validator from 'validator';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter , {history} from './routers/AppRouter';
import {startSetBikes} from './actions/bikes';
import {startSetIsAdmin} from './actions/admin';
import {getStockBikes} from './actions/stock';
import {getVideos} from './actions/video';
import {login, logout} from './actions/auth';
import getVisibleBikes from './selectors/bikes';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';

import {firebase} from './firebase/firebase';


const store = configureStore();

store.subscribe(()=>{
    const state = store.getState();
    const visibleBikes= getVisibleBikes(state.bikes, state.filters);
})

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(getVideos());
store.dispatch(getStockBikes());

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
            ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      store.dispatch(login(user.uid));
      console.log('uid', user.uid);
    store.dispatch(startSetIsAdmin())   
    store.dispatch(startSetBikes()).then(() => {
       renderApp()
       if (history.location.pathname === '/') {
         history.push('/dashboard');
       }
       
      });
  } else {
      store.dispatch(logout());
      renderApp()
    history.push('/');
  }
});

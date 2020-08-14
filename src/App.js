import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

  UNSAFE_componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDFmRBtIP7xIjfhlR1uMXHh4ONcpNN6MWg',
      authDomain: 'manager-e20a8.firebaseapp.com',
      databaseURL: 'https://manager-e20a8.firebaseio.com',
      projectId: 'manager-e20a8',
      storageBucket: 'manager-e20a8.appspot.com',
      messagingSenderId: '865101317394',
      appId: '1:865101317394:web:79c55ded9c779b46721fcb',
      measurementId: 'G-W7M0Y9QTPL'
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      // firebase.analytics();
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
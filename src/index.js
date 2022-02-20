import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'
const titleSlice = createSlice({
  name: 'title',
  initialState: {
    value: 'kimbocorp'
  },
  reducers: {
    pagetitle: state => {
      state.value = 'kimbocorp1'
    }
  }
})
// export const { pagetitle } = titleSlice.actions
const store = configureStore({
  reducer: titleSlice.reducer
})
// store.dispatch(pagetitle())
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

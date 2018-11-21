import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


// if (module.hot) {
//   module.hot.accept();
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// import store from './store'
// import { addToCart, updateCart, deleteFromCart} from './actions/cartActions'

// // console.log("initial state: ", store.getState());

// let unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });

// store.dispatch(addToCart('coffee 500gm', 1, 250))
// store.dispatch(addToCart('Flour 1kg', 2, 110))
// store.dispatch(addToCart('Juice 2L', 1, 300))

// store.dispatch(updateCart('Flour 1kg', 5, 110))
// store.dispatch(deleteFromCart('Coffee 500gm'));


// //监听store事件的更改
// unsubscribe();

// const App = <h1>Redux Shopping Cart</h1>

// ReactDOM.render(
//     <Provider store={store}>
//         {App}
//     </Provider>,
//     document.getElementById('root')
// );
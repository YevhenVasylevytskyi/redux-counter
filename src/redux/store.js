import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// const initialState = {
//     counter: {
//         value: 0,
//         step: 1,
//     }
// };

// const reducer = (state = initialState, {type, payload}) => {
//     switch (type) {
//         case 'counter/Increment':
//             return {
//                 ...state,
//                 counter: {
//                     ...state.counter,
//                     value: state.counter.value + payload,
//                 }
//             };

//         case 'counter/Decrement':
//             return {
//                 ...state,
//                 counter: {
//                     ...state.counter,
//                     value: state.counter.value - payload,
//                 }
//             };

//         default:
//             return state;
//     }
// };

// const counterInitialState = {
//     value: 0,
//     step: 1,
// }

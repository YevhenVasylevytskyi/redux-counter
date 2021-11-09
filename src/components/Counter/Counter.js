// import React, { Component } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/counter/counter-actions';
import Controls from './Controls';
import Value from './Value';
import styles from './Counter.module.css';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className={styles.Counter}>
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// export default class Counter extends Component {
// static defaultProps = {
//   initialValue: 0,
// };

// state = {
//   value: this.props.initialValue,
// };

// handleIncrement = () => {
//   this.setState(({ value }) => ({ value: value + 1 }));
// };

// handleDecrement = () => {
//   this.setState(({ value }) => ({ value: value - 1 }));
// };

//   render() {
//     const { value } = this.state;
//     return (
//       <div className={styles.Counter}>
//         <Value value={value} />
//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }

// export default function Counter() {
//   const [counterA, setCounterA] = useState(0);

//   const handleCounterIncrement = () => {
//     console.log(counterA);
//     setCounterA(state => state + 1);
//   };

//   const handleCounterDecrement = () => {
//     setCounterA(state => state + 1);
//   };

//   const Value = ({ value }) => <span>{value}</span>;

//   return (
//     <>
//      <div>
//     <button className={styles.btn} type="button" onClick={handleCounterDecrement}>
//       Уменьшить на 1
//     </button>
//     <button className={styles.btn} type="button" onClick={handleCounterIncrement}>
//       Увеличить на 1
//     </button>
//   </div>
//     </>
//   );
// }

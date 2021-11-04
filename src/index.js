import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// class Counter extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState(prevState => ({ value: prevState.value + 1 }));
//   };

//   render() {
//     const { value } = this.state;

//     return (
//       <div className="Counter">
//         <span className="Counter__value">{value}</span>

//         <div className="Counter__controls">
//           <button type="button" onClick={this.handleIncrement}>
//             Увеличить на 1
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Counter initialValue={1} /> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

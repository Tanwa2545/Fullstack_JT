import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('My message blah');

  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(obj =>{
        setMessage(obj.message);
    })
  },[]); // [] is for run 1 time only

  return (
    <div className="App">
      {message}
    </div>
  );
}

// type AppState = {
//   message: string;
// };
// class App extends React.Component<{}, AppState> {
//   state: AppState = {
//     message: 'Default message',
//   };
  
//   componentDidMount() {
//       fetch('http://localhost:3000/courses')
//         .then(res => res.json())
//         .then(obj =>{
//           this.setState({message: obj.message});
//         })
//   }

//   render() {
//     return (
//       <div>
//         {this.state.message}
//       </div>
//     );
//   }
// }

export default App;

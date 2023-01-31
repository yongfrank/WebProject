/*
 * @Author: Frank Chu
 * @Date: 2023-01-20 22:56:37
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-26 18:40:56
 * @FilePath: /WebProject/my-app/src/App.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  const age = 30
  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Frank Chu' age={26 + 10} />
      <Hello name="George" age='20' />
      <Hello name='Answer' age={age} />
    </>
  )
}

/*
struct App: View {
    var body: some View {
        Text("Greetings")")
        Hello()
    }
}

struct Hello: View {
    var body: some View {
        Text("Hello, world!")
    }
}

*/
export default App;

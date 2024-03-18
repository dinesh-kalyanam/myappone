import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <table className="table" border={"2px solid"}>
         
           <tr> <th>
            <form action="/action_page.php">
  <input type="file" id="myFile" name="filename"/>
  <input type="submit"/>
</form></th></tr>
          
            <th>
                Name
                
            </th>
            <th>
               Group
                
            </th>
            <th>
               Value
                
            </th>
            <th>
                Low
                
            </th>
            <th>
                Normal
                
            </th>
            <th>
                High
                
            </th>
            <tr>
              <td>
                Varma
              </td>
              <td>
                
              </td>
              <td>
                1
              </td>
              <td>
                1
              </td>
              <td>
                1
              </td>
              <td>
                1
              </td>
            </tr>
            <tr>
              <td>
                Suresh
              </td>
              <td>
                2
              </td>
              <td>
                2
              </td>
              <td>
                2
              </td>
              <td>
                2
              </td>
              <td>
                2
              </td>
            </tr>
            <tr>
              <td>
                Sushma
              </td>
              <td>
                3
              </td>
              <td>
                3
              </td>
              <td>
                3
              </td>
              <td>
                3
              </td>
              <td>
                3
              </td>
            </tr>
        </table>
      
      {/* <header className="App-header">
        <h1>Hi This Is Dinesh</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

import React from 'react';
import Navigation from '../components/Navigation';

function Home(){
    return (
        <div className="App-home"> 
          <Navigation/>
          <div className="App-home-text">
            <header>
              <h1>
                Derek Casini
              </h1>
            </header>
            <body>
              <p>
                A self motivated, AI interested computer science major at Oregon State University
              </p>
            </body>
          </div>
        </div>
      );
}

export default Home;
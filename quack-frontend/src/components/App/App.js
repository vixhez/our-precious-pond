import React from 'react';

import DuckDirectory from '../Directory/DuckDirectory.js';
import Quiz from '../Quiz/Quiz.js'

function App() {
  return (
    <div className="App">
      <p>ello ello ello, it's the quiz</p>
      <Quiz />

      <p>eyup it's the directory</p>
      <DuckDirectory />
    </div>
  );
}

export default App;

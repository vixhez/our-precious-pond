import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

import RecordList from "./components/recordList";

const App = () => {
  return (
    <div>
      <div style={{ margin: 20 }}>
      <Routes>
        <Route exact path="/" element={<RecordList />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;

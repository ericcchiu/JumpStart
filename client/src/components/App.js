import React, { useState } from 'react';
import NavigationBar from './NavBar';
const App = () => {

  const [ID, setID] = useState(0);

  return (
    <div className="App">
      <NavigationBar />
    </div>
  );
}

export default App;
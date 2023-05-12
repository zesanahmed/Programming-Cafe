import React from 'react';
import Header from './components/Header/Header';
import Cafe from './components/Cafe/Cafe';
import Answer from './Questions/Answer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Cafe></Cafe>
      <Answer></Answer>
    </div>
  );
};

export default App;
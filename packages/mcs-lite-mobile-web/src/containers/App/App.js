import React from 'react';
import './style';
import Header from '../../components/Header';

const App = ({ children }) =>
  <div>
    <Header />
    {children}
  </div>;

export default App;

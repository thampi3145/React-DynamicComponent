import React, { Component } from 'react';
import BlocksLoop from './blocksLoop';
import Dashboard from './dashboard';

export default class App extends Component {
  constructor(props) {
    super(props);
   
  }

 
  render() {
    return (
      <div>React simple starter
        <BlocksLoop title='text' />
        <Dashboard whichcomponent='./dynamiccomponent' />
        
      </div>
      
    );
  }
}

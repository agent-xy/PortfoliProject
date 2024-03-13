import React, { Component } from 'react';
import Home from './pages/Home.tsx';
import NavMenu from './components/NavMenu/NavMenu.tsx';
import './CostumeStyle.css';


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>
        <NavMenu/>
        <Home></Home>
      </>
    );
  }
}

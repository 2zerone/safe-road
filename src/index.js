import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import SideBar from './sidebar/sidebar';
import { ReactComponent as Seoul } from './Seoul.svg';
import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  return (
    <div id='App'>
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />

      <div id='page-wrap'>
        <HeaderContainer />
        <Seoul />
      </div>
      </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

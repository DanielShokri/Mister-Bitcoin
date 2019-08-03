import React from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import AppHeader from './components/AppHeader/AppHeader';
import StatisticPage from './pages/StatisticPage';
import HomePage from './pages/HomePage'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <AppHeader></AppHeader>
        <HomePage></HomePage>
        {/* <ContactList></ContactList> */}
        {/* <StatisticPage></StatisticPage> */}
      </div>
    );
  }

}

export default App;

import React from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import AppHeader from './components/AppHeader/AppHeader';
import StatisticPage from './pages/StatisticPage';
import HomePage from './pages/HomePage'
import { ContactPage } from './pages/ContactPage';
import ContactDetails from './pages/ContactDetails';
import ContactEdit from './pages/ContactEdit/ContactEditPage';

import { HashRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <AppHeader></AppHeader>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route path="/statistics" component={StatisticPage} />

            <Route path="/contact/:id" render={({ match }) => (
              <ContactDetails contactId={match.params.id} />
            )} />

            <Route path="/contact/edit/:id?" render={({ match }) => (
              <ContactEdit contactId={match.params.id} />
            )} />
          </div>
        </Switch>
      </Router>
    );
  }

}

export default App;

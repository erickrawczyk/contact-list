import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Contacts from './components/Contacts.jsx'

injectTapEventPlugin();

String.prototype.capitalize = function() {
    return this.split(' ').map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <Contacts />
      </MuiThemeProvider>
    );
  }
}

render(<App/>, document.getElementById('app'));

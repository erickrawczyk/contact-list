import React from 'react';
import AppBar from 'material-ui/AppBar';
import ContactList from './ContactList.jsx'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


class Contacts extends React.Component {

  constructor() {
    super();
    this.addButtonStyle = {
      position: 'fixed',
      bottom: '1.25em',
      right: '1.25em'
    }
  }

  render () {
    return (
      <div>
        <AppBar title="Contacts"/>
        <ContactList />
        <FloatingActionButton style={this.addButtonStyle}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

export default Contacts;

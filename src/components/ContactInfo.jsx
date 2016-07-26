import React from 'react';
import {List, ListItem} from 'material-ui/List';

import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import Divider from 'material-ui/Divider';


class ContactInfo extends React.Component {

  getAddress() {
    return `
      ${this.props.contact.location.street.capitalize()}\n
       ${this.props.contact.location.city.capitalize()},
       ${this.props.contact.location.state.capitalize()} ${this.props.contact.location.postcode}
    `
  }

  render() {
    return (
      <div>
        <Divider />
        <List>
          <ListItem
            primaryText={this.props.contact.phone}
            secondaryText="Home"
            leftIcon={<CommunicationCall />}
          />
          <ListItem
            primaryText={this.props.contact.cell}
            secondaryText="Cell"
            insetChildren={true}
          />
          <ListItem
            primaryText={this.props.contact.email}
            secondaryText="Primary"
            leftIcon={<CommunicationEmail />}
          />
          <ListItem
            primaryText={this.getAddress()}
            secondaryText="Home"
            leftIcon={<CommunicationLocationOn />}
          />
        </List>
      </div>
    );
  }
}

export default ContactInfo;

import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import ContactInfo from './ContactInfo.jsx';


class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    return (
      <Card>
        <CardHeader
          title={
            this.props.contact.name.first.capitalize()
            + ' ' +
            this.props.contact.name.last.capitalize()
          }
          subtitle={this.props.contact.phone}
          actAsExpander={true}
          showExpandableButton={true}
          avatar={this.props.contact.picture.thumbnail}
        />
        <CardText expandable={true}>
          <ContactInfo contact={this.props.contact}/>
        </CardText>
      </Card>
    );
  }
}

export default Contact;

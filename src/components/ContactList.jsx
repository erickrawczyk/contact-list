import React from 'react';
import Contact from './Contact.jsx';

class ContactList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    var _this = this;
    const USER_SEED = '7b34eedd6473b219';
    const NUM_USERS = 20;
    const LOCALE    = 'us'
    const USER_URL  = `https://randomuser.me/api?results=${NUM_USERS}&seed=${USER_SEED}&nat=${LOCALE}`;
    this.serverRequest = fetch(USER_URL)
      .then(res => res.json())
      .then((data) => {
        _this.setState({
          contacts: data.results
        })
      })
      .catch(err => console.error("Error fetching contacts! Reason: " + err))
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        {this.state.contacts.map((contact) => {
          return <Contact contact={contact} key={contact.login.md5}/>
        })}
      </div>
    );
  }
}

export default ContactList;

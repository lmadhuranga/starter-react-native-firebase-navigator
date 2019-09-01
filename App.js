import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';

import LoginPage from './screens/LoginPage';
import LogoutBtn from './screens/LogoutBtn';
import Todos from './Todos';

class App extends React.Component {

  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      user: null,
    };
  }

  /**
   * Listen for any auth state changes and update component state
   */
  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {
    if (!this.state.user) {
      return <LoginPage />;
    }

    return (
      <View>
        <View>
          <Text>Welcome to my awesome app {this.state.user.email}!</Text>
          <LogoutBtn />
        </View>
        <View>
          <Todos />
        </View>
      </View>
    );
  }

}

export default App;
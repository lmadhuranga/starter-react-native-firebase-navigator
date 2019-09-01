import React, { Component } from 'react';
import { View, TextInput, Button, ActivityIndicator, Text } from 'react-native'; 
import firebase from 'react-native-firebase';

class LoginPage extends Component {
  constructor() {
    super(); 
    this.firestoreUnsubscriber = null;
    this.authUnsubscriber = null;
    this.state = {
      emailValue: '',
      passwordValue: '',
    };
  }

  onChangeLogin = (e, type) => {
    this.setState({ [`${type}Value`]: e });
  };

  onLogin = async () => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(this.state.emailValue, this.state.passwordValue);
      console.log(response);
      if (response.error) {
        throw new Error(response);
      } 
    } catch (error) {
      console.log(error); 
    }
  };

  render() {

    return (
      <View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus
          value={this.state.emailValue}
          onChangeText={e => this.onChangeLogin(e, 'email')}
          keyboardType="email-address"
          placeholder="partner@benestudio.co"
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          value={this.state.passwordValue}
          onChangeText={e => this.onChangeLogin(e, 'password')}
          placeholder="Password"
        />
        <Button title="Login" onPress={this.onLogin} />  
      </View>
    );
  }
} 

export default LoginPage;

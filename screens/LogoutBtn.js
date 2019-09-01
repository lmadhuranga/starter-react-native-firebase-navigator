import React, { Component } from 'react';
import { View, Button } from 'react-native'; 
import firebase from 'react-native-firebase';

class LogoutBtn extends Component {
  constructor() {
    super();  
  }
 
  onLogOut = async () => {
    try {
      firebase.auth().signOut(); 
    } catch (error) { 
    }
  };

  render() {

    return (
      <View> 
        <Button title="Logout" onPress={this.onLogOut} />  
      </View>
    );
  }
} 

export default LogoutBtn;

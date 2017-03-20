import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const timer = require('react-native-timer');

class Round extends Component {
    state = {
        count: 5
    };

    componentWillMount = () => {
        this.showMsg();
    }

    componentWillUnmount = () => {
        timer.clearTimeout(this);
    }

    showMsg = () => {
        this.setState(
            { count:2 }, 
            () => timer.setInterval(
                this, 
                'hideMsg', 
                () => this.setState({ count:this.state.count+1 }), 
                2000
        ));
    }

    render = () => {
        return (
            <Text style = {styles.myText}>{this.state.count}</Text>
        );
    }
}

export default Round;

const styles = StyleSheet.create ({
   myText: {
      marginTop: 50,
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30
   }
})
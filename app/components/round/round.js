import React, { Component } from 'react';
import { Text } from 'react-native';

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
            <Text>{this.state.count}</Text>
        );
    }
}

export default Round;
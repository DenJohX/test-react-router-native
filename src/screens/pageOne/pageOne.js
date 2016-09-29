import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export class PageOne extends Component {
  static propTypes = {
    toggle: React.PropTypes.func.isRequired,
    txtColor: React.PropTypes.string.isRequired
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.props.toggle} >
            Click this text for action1
        </Text>
        <Text style={[styles.hello, {color: this.props.txtColor}]}>
          Hello World
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  hello: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
});


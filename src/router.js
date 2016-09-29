import React, { Component } from 'react'
import { connect } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import {
  Header,
  Link,
  nativeHistory,
  Route,
  Router as NativeRouter,
  StackRoute,
  withRouter,
} from 'react-router-native'

// screens
import PageOne from './screens/pageOne'


import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  component: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  }
})

const Master = (props) => (
  <View style={styles.component}>
    {props.children}
  </View>
)

export class Router extends Component {
    render() {
        console.log('rendering router')
        return (
            <NativeRouter history={nativeHistory} addressBar>
                <StackRoute path="master" component={Master} >
                    <Route path="/" component={PageOne} />
                </StackRoute>
            </NativeRouter>
        )
    }
}

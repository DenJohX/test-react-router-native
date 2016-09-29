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
  },
  home: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  detailCard: {
    height: 100,
    margin: 20,
    width: 100,
  },
})

const Master = (props) => (
  <View style={styles.component}>
    {props.children}
  </View>
)

const HomeHeader = withRouter((props) => {
  const handleRightButtonPress = () => {
    props.router.push('/detail/gray')
  };

  return (
    <Header
      {...props}
      style={{ backgroundColor: '#26BBE5' }}
      title="Feed"
      rightButtonText="Gray"
      onRightButtonPress={handleRightButtonPress}
    />
  )
})

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

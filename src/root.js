import React, { Component } from 'react'
import { Provider } from 'react-redux'
import appStore from './store'
import { Router } from './router'

// redux
const store = appStore({})

export class Root extends Component {
    render() {
        console.log('rendering root')
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default Root

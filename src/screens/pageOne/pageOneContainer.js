import React, { Component } from 'react'
import { PageOne } from './pageOne'
import {connect} from 'react-redux'
import { push } from 'react-router-redux'
import { actions } from './reducer'

const mstp = state => ({
    txtColor: state.pageone.flag ? 'red' : 'green'
})

let mdtp = {
    toggle: actions.toggle
}

const component = connect(mstp,mdtp)(PageOne)

export default component

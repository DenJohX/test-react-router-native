import React, { Component } from 'react'
import { PageOne } from './pageOne'
import {connect} from 'react-redux'
import { push } from 'react-router-redux'
import * as actions from './actions'

const mstp = state => ({
})

let mdtp = {
    action1: actions.action1,
    action2: actions.action2
}

const component = connect(mstp,mdtp)(PageOne)

export default component

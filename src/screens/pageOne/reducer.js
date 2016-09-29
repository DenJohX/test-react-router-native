// ------------------------------------
// Constants
// ------------------------------------
PAGEONE_TOGGLE = 'PAGEONE_TOGGLE'

// ------------------------------------
// Actions
// ------------------------------------

export const toggle = () => ({
    type: PAGEONE_TOGGLE
})

export const actions = {
    toggle
}
// ------------------------------------
// Action Handlers
// ------------------------------------

const initialState = {
    flag: true
}

const ACTION_HANDLERS = {
    [PAGEONE_TOGGLE]: (state, action) => ({...state, flag: !state.flag}),
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}

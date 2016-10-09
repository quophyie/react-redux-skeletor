'use strict'
// Actions
const LOAD = 'my-react-redux-app/widgets/LOAD'
const CREATE = 'my-react-redux-app/widgets/CREATE'
const UPDATE = 'my-react-redux-app/widgets/UPDATE'
const REMOVE = 'my-react-redux-app/widgets/REMOVE'

// Reducer
export default function reducer (state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state
  }
}

// Action Creators
export function loadWidgets () {
  return { type: LOAD }
}

export function createWidget (widget) {
  return { type: CREATE, widget }
}

export function updateWidget (widget) {
  return { type: UPDATE, widget }
}

export function removeWidget (widget) {
  return { type: REMOVE, widget }
}

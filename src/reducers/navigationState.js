import * as NavigationStateUtils from 'NavigationStateUtils'

export const NAV_PUSH = 'NAV_PUSH'
export const NAV_POP = 'NAV_POP'
export const NAV_JUMP_TO_KEY = 'NAV_JUMP_TO_KEY'
export const NAV_JUMP_TO_INDEX = 'NAV_JUMP_TO_INDEX'
export const NAV_RESET = 'NAV_RESET'

const initialState = {
  index: 0,
  routes: [
    { key: 'First', title: 'First'}
  ]
}

// actions
export function navigatePush(state) {
  state = typeof state === 'string' ? { key: state, title: state } : state
  return { type: NAV_PUSH, state }
}

export function navigatePop() {
  return { type: NAV_POP }
}

export function navigateJumpToKey(key) {
  return { type: NAV_JUMP_TO_KEY, key }
}

export function navigateJumpToIndex(index) {
  return { type: NAV_JUMP_TO_INDEX, index }
}

export function navigateReset(routes, index) {
  return { type: NAV_RESET, index, routes }
}

// reducers
export function navigationState(state=initialState, action) {
  switch (action.type) {
    case 'NAV_PUSH':
      if (state.routes[state.index].key === (action.state && action.state.key)) return state
      return NavigationStateUtils.push(state, action.state)

    case 'NAV_POP':
      if (state.index === 0 || state.routes.length === 1) return state
      return NavigationStateUtils.pop(state)

    case 'NAV_JUMP_TO_KEY':
      return NavigationStateUtils.jump(state, action.key)

    case 'NAV_JUMP_TO_INDEX':
      return NavigationStateUtils.jumpToIndex(state, action.index)

    case 'NAV_RESET':
      return {
        ...state,
        index: action.index,
        routes: action.routes
      }

    default:
      return state
  }
}

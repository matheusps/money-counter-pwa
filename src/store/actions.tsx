export interface Action {
  type: string
}

export const actions = {
  reset: 'RESET',
  loading: 'LOADING',
  success: 'SUCCESS',
  fail: 'FAIL',
}

export const reset: Action = {
  type: actions.reset,
}

export const loading: Action = {
  type: actions.loading,
}

export const success: Action = {
  type: actions.success,
}

export const fail: Action = {
  type: actions.fail,
}

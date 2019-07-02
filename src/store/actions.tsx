export interface Action {
  type: string
  payload?: any
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

export const success = (payload: any): Action => ({
  type: actions.success,
  payload: payload,
})

export const fail: Action = {
  type: actions.fail,
}

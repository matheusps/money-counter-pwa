import { useReducer } from 'react'
import { actions, Action, reset, loading, success, fail } from './actions'
import { messages, emojis, btnTexts } from './data'

const initialState = {
  message: messages.static,
  emoji: emojis.static,
  btnText: btnTexts.static,
  btnAction: loading,
  btnDisabled: false,
}

type State = typeof initialState

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case actions.reset:
      return {
        ...state,
        message: messages.static,
        emoji: emojis.static,
        btnText: btnTexts.static,
        btnAction: loading,
        btnDisabled: false,
      }
    case actions.loading:
      return {
        ...state,
        message: messages.loading,
        emoji: emojis.loading,
        btnText: btnTexts.loading,
        btnAction: success,
        btnDisabled: true,
      }
    case actions.success:
      return {
        ...state,
        message: `${messages.success} ${action.payload}`,
        emoji: emojis.success,
        btnText: btnTexts.success,
        btnAction: fail,
        btnDisabled: false,
      }
    case actions.fail:
      return {
        ...state,
        message: messages.fail,
        emoji: emojis.fail,
        btnText: btnTexts.fail,
        btnAction: reset,
        btnDisabled: false,
      }

    default:
      return state
  }
}

//@ts-ignore
const useStore = () => useReducer(reducer, initialState)
export default useStore

import { useReducer } from 'react'
import { actions, Action, reset, loading, success, fail } from './actions'
import { messages, images, btnTexts } from './data'

const initialState = {
  message: messages.static,
  image: images.static,
  btnText: btnTexts.static,
  btnAction: loading,
}

type State = typeof initialState

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case actions.reset:
      return {
        ...state,
        message: messages.static,
        image: images.static,
        btnText: btnTexts.static,
        btnAction: loading,
      }
    case actions.loading:
      return {
        ...state,
        message: messages.loading,
        image: images.loading,
        btnText: btnTexts.loading,
        btnAction: success,
      }
    case actions.success:
      return {
        ...state,
        message: messages.success,
        image: images.success,
        btnText: btnTexts.success,
        btnAction: fail,
      }
    case actions.fail:
      return {
        ...state,
        message: messages.fail,
        image: images.fail,
        btnText: btnTexts.fail,
        btnAction: reset,
      }

    default:
      return state
  }
}

const useStore = () => useReducer(reducer, initialState)
export default useStore

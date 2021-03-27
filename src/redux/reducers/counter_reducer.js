import {INCREMENT, DECREMENT} from '../action_type'

const initState = 0
export default function counterReducer(preState = initState, action) {
  const {type, data} = action
  let newState
  switch (type) {
    case INCREMENT:
      newState = preState + data
      return newState
    case DECREMENT:
      newState = preState - data
      return newState
    default:
      return preState
  }

}
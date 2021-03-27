import {INCREMENT,DECREMENT} from '../action_type'
export const increment = value => ({type:INCREMENT,data:value});
export const decrement = value => ({type:DECREMENT,data:value});
export const asyncIncrement = (value,timer) => {
  return (dispatch) => {
      setTimeout(() => {
        dispatch(increment(value))
      },timer)
  }
}

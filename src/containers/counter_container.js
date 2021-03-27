import {connect} from 'react-redux';
import {increment,decrement,asyncIncrement} from '../redux/actions/counter_action'
import Counter from "../components/counter";
export default connect(state=>({count:state.count}),{
  increment,
  decrement,
  asyncIncrement
})(Counter)
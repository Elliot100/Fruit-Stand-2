import { connect } from 'react-redux';
import FruitStand from './fruit_stand';
import { addApple, addOrange, clear } from '../actions';

const mapStateToProps = (state) => ({
  fruits: state.fruits
});

const mapDispatchToProps = dispatch => ({
  addApple: () => dispatch(addApple()),
  addOrange: () => dispatch(addOrange()),
  clear: () => dispatch(clear())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FruitStand);
import { connect } from 'react-redux';
import FruitStand from './fruit_stand';
import { addApple, addOrange, clear } from '../actions';

const mapStateToProps = (state) => ({
  fruits: state.fruits
});

export default connect(
  mapStateToProps
)(FruitStand);
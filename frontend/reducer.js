const _defaultState = {
  fruits: []
}


const reducer = (oldState = _defaultState, action) => {
  switch(action.type)
  {
    case "ADD_FRUIT":
      return {
        fruits: [...oldState, action.fruits]
      }
    case "CLEAR":
      return _defaultState;
    default:
      return oldState;
  }
};

export default reducer;
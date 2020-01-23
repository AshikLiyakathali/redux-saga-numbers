const numberReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_ASYNC":
      return action.num1 + action.num2;
    case "SUB_ASYNC":
      return action.num1 - action.num2;
    case "MUL":
      return action.num1 * action.num2;
    case "DIV":
      return action.num1 / action.num2;
    default:
      return state;
  }
};

export default numberReducer;

const numberReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return action.num1 + action.num2;
    case "SUB":
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

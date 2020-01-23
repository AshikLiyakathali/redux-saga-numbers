export const add = (a, b) => {
  return {
    type: "ADD",
    num1: a,
    num2: b
  };
};

export const sub = (a, b) => {
  return {
    type: "SUB",
    num1: a,
    num2: b
  };
};

export const mul = (a, b) => {
  return {
    type: "MUL",
    num1: a,
    num2: b
  };
};

export const div = (a, b) => {
  return {
    type: "DIV",
    num1: a,
    num2: b
  };
};

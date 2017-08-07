// @flow

type Fn = () => void;

const emptyFunction: Fn = e => {
  if (e && e.preventDefault) e.preventDefault();
};

export default emptyFunction;

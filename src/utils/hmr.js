/* eslint-disable no-console */

export default function setup() {
  // See https://github.com/gaearon/react-hot-loader/issues/298
  const error = console.error;
  console.error = (...args) => {
    function isSafeError() {
      return args &&
        args.length === 1 &&
        typeof args[0] === 'string' &&
        args[0].indexOf('You cannot change <Router routes>;') > -1;
    }
    if (!isSafeError()) {
      error.apply(console, args);
    }
  };
}

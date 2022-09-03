const generator = (() => {
  let i = 1;
  return function (arr, reset = false) {
    if (reset) i = 1;
    if (i === 3) i = 0;
    // eslint-disable-next-line no-plusplus
    return arr[i++];
  };
})();

export default generator;

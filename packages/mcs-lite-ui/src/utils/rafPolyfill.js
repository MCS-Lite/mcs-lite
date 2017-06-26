/* global window */

if (!window.requestAnimationFrame) {
  const polyfill = (() => {
    let clock = Date.now();

    return callback => {
      const currentTime = Date.now();

      if (currentTime - clock > 16) {
        clock = currentTime;
        callback(currentTime);
      } else {
        setTimeout(() => {
          polyfill(callback);
        }, 0);
      }
    };
  })();

  window.requestAnimationFrame = polyfill;
  window.cancelAnimationFrame = id => clearTimeout(id);
}

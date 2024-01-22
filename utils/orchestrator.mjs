// implement messaging system between MF's
const listeners = {};

// - broadcast message
export function broadcast(action, data) {
  window.parent.postMessage({ action, data });
  console.log("broadcast", { action, data });
}

// - listen to message & attach callback
export function listen(action, callback) {
  window.parent.addEventListener("message", (event) => {
    const { data } = event;

    if (data.action === action) {
      callback(data.data);
    }
  });
}

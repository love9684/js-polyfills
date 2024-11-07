// Implement Throttle
throttle(fn, timeout) {
  let timerInProgress = false;
  return (...inputs) => {
    if (timerInProgress) return;

    fn.apply(this, inputs);
    timerInProgress = true;
    setTimeout(() => {
      timerInProgress = false;
    }, timeout);
  };
}

// How to use

nameChange = throttle(submitName, 1000);

function submitName(name) {
  console.log('Name submitted', name);
}

function onNameChange(event) {
  nameChange(event.target.value);
}

// <input type="text" onkeyup="onNameChange($event)">

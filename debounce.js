// Implement Debounce
function debounce(fn, timeout) {
  let timer;
  return (...inputs) => {
    clearInterval(timer);
    timer = setTimeout(() => {
      fn.apply(this, inputs);
    }, timeout);
  };
}

// How to use

nameChange = debounce(submitName, 1000);

function submitName(name) {
  console.log('Name submitted', name);
}

function onNameChange(event) {
  nameChange(event.target.value);
}

// <input type="text" onkeyup="onNameChange($event)">

const { keyboard, Key, mouse, left, right, up, down, screen } = require("@nut-tree/nut-js");
const ioHook = require('iohook');

const state = {
  working: false,
}

ioHook.on("keyup",function(keyPress){
  console.log(keyPress.keycode)
  // f2
  if (keyPress.keycode === 60) {
    state.working = true
    console.log('working', state.working)
  }
  // f3
  if (keyPress.keycode === 61) {
    state.working = false
    console.log('working', state.working)
  }
});

ioHook.start();

setInterval(() => { if (state.working) keyboard.pressKey(Key.PageUp)}, 300)
setInterval(() => {console.log(state.working)}, 3000)

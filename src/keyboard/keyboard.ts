const keyDownEvents: { key: keys; callback: () => any }[] = [];
const keyUpEvents: { key: keys; callback: () => any }[] = [];
const keysCurrentlyDown: string[] = [];

export const checkKeyboardEvents = () => {
  for (let i = 0; i < keyDownEvents.length; i++) {
    if (keysCurrentlyDown.includes(keyDownEvents[i].key)) {
      keyDownEvents[i].callback();
    }
  }
};

export const listenForKeyboard = () => {
  document.addEventListener('keydown', (e) => {
    if (!keysCurrentlyDown.includes(e.key)) keysCurrentlyDown.push(e.key);
  });
  document.addEventListener('keyup', (e) => {
    keysCurrentlyDown.forEach((key, index) => {
      if (key === e.key) keysCurrentlyDown.splice(index, 1);
    });
    for (let i = 0; i < keyUpEvents.length; i++) {
      if (keyUpEvents[i].key === e.key) {
        keyUpEvents[i].callback();
      }
    }
  });
};

export const onKeyDown = (key: keys, callback: () => any) => {
  for (let i = 0; i < keyDownEvents.length; i++) {
    if (keyDownEvents[i].key === key) {
      keyDownEvents.splice(i, 1);
    }
  }
  keyDownEvents.push({ key, callback });
};

export const onKeyUp = (key: keys, callback: () => any) => {
  for (let i = 0; i < keyUpEvents.length; i++) {
    if (keyUpEvents[i].key === key) {
      keyUpEvents.splice(i, 1);
    }
  }
  keyUpEvents.push({ key, callback });
};

type keys =
  | 'Backspace'
  | 'Tab'
  | 'Enter'
  | 'Shift'
  | 'Shift'
  | 'Control'
  | 'Control'
  | 'Alt'
  | 'Alt'
  | 'Pause'
  | 'CapsLock'
  | 'Escape'
  | 'PageUp'
  | 'PageDown'
  | 'Home'
  | 'End'
  | 'ArrowLeft'
  | 'ArrowUp'
  | 'ArrowRight'
  | 'ArrowDown'
  | 'PrintScreen'
  | 'Insert'
  | 'Delete'
  | '1'
  | '0'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'
  | 'Meta'
  | 'Meta'
  | 'ContextMenu'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '*'
  | '+'
  | '-'
  | '.'
  | '/'
  | 'F1'
  | 'F2'
  | 'F3'
  | 'F4'
  | 'F5'
  | 'F6'
  | 'F7'
  | 'F8'
  | 'F9'
  | 'F10'
  | 'F11'
  | 'F12'
  | 'NumLock'
  | 'ScrollLock'
  | 'AudioVolumeMute'
  | 'AudioVolumeDown'
  | 'AudioVolumeUp'
  | 'LaunchMediaPlayer'
  | 'LaunchApplication1'
  | 'LaunchApplication2'
  | ';'
  | '='
  | ','
  | '-'
  | '.'
  | '/'
  | '`'
  | '['
  | '\\'
  | ']'
  | "'";

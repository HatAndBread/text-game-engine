const keyDownEvents = [];
const keyUpEvents = [];
const keysCurrentlyDown = [];
export const checkKeyboardEvents = () => {
    for (let i = 0; i < keyDownEvents.length; i++) {
        if (keysCurrentlyDown.includes(keyDownEvents[i].key)) {
            keyDownEvents[i].callback();
        }
    }
};
export const listenForKeyboard = () => {
    document.addEventListener('keydown', (e) => {
        if (!keysCurrentlyDown.includes(e.key))
            keysCurrentlyDown.push(e.key);
    });
    document.addEventListener('keyup', (e) => {
        keysCurrentlyDown.forEach((key, index) => {
            if (key === e.key)
                keysCurrentlyDown.splice(index, 1);
        });
        for (let i = 0; i < keyUpEvents.length; i++) {
            if (keyUpEvents[i].key === e.key) {
                keyUpEvents[i].callback();
            }
        }
    });
};
export const onKeyDown = (key, callback) => {
    for (let i = 0; i < keyDownEvents.length; i++) {
        if (keyDownEvents[i].key === key) {
            keyDownEvents.splice(i, 1);
        }
    }
    keyDownEvents.push({ key, callback });
};
export const onKeyUp = (key, callback) => {
    for (let i = 0; i < keyUpEvents.length; i++) {
        if (keyUpEvents[i].key === key) {
            keyUpEvents.splice(i, 1);
        }
    }
    keyUpEvents.push({ key, callback });
};

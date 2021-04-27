const keyDownEvents = [];
const keyUpEvents = [];
export const listenForKeyboard = () => {
    document.addEventListener('keydown', (e) => {
        for (let i = 0; i < keyDownEvents.length; i++) {
            if (keyDownEvents[i].key === e.key)
                keyDownEvents[i].callback();
        }
    });
    document.addEventListener('keyup', (e) => {
        for (let i = 0; i < keyUpEvents.length; i++) {
            if (keyUpEvents[i].key === e.key)
                keyUpEvents[i].callback();
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

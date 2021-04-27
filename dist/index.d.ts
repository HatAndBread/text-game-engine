import Game from './game/game.js';
import Sprite from './sprite/sprite.js';
import { onKeyDown, onKeyUp } from './keyboard/keyboard.js';
declare const s: {
    Game: typeof Game;
    Sprite: typeof Sprite;
    onKeyDown: (key: "a" | "b" | "i" | "p" | "q" | "s" | "u" | "g" | "Backspace" | "Tab" | "Enter" | "Shift" | "Control" | "Alt" | "Pause" | "CapsLock" | "Escape" | "PageUp" | "PageDown" | "Home" | "End" | "ArrowLeft" | "ArrowUp" | "ArrowRight" | "ArrowDown" | "PrintScreen" | "Insert" | "Delete" | "1" | "0" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "c" | "d" | "e" | "f" | "h" | "j" | "k" | "l" | "m" | "n" | "o" | "r" | "t" | "v" | "w" | "x" | "y" | "z" | "Meta" | "ContextMenu" | "*" | "+" | "-" | "." | "/" | "F1" | "F2" | "F3" | "F4" | "F5" | "F6" | "F7" | "F8" | "F9" | "F10" | "F11" | "F12" | "NumLock" | "ScrollLock" | "AudioVolumeMute" | "AudioVolumeDown" | "AudioVolumeUp" | "LaunchMediaPlayer" | "LaunchApplication1" | "LaunchApplication2" | ";" | "=" | "," | "`" | "[" | "\\" | "]" | "'", callback: () => any) => void;
    onKeyUp: (key: "a" | "b" | "i" | "p" | "q" | "s" | "u" | "g" | "Backspace" | "Tab" | "Enter" | "Shift" | "Control" | "Alt" | "Pause" | "CapsLock" | "Escape" | "PageUp" | "PageDown" | "Home" | "End" | "ArrowLeft" | "ArrowUp" | "ArrowRight" | "ArrowDown" | "PrintScreen" | "Insert" | "Delete" | "1" | "0" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "c" | "d" | "e" | "f" | "h" | "j" | "k" | "l" | "m" | "n" | "o" | "r" | "t" | "v" | "w" | "x" | "y" | "z" | "Meta" | "ContextMenu" | "*" | "+" | "-" | "." | "/" | "F1" | "F2" | "F3" | "F4" | "F5" | "F6" | "F7" | "F8" | "F9" | "F10" | "F11" | "F12" | "NumLock" | "ScrollLock" | "AudioVolumeMute" | "AudioVolumeDown" | "AudioVolumeUp" | "LaunchMediaPlayer" | "LaunchApplication1" | "LaunchApplication2" | ";" | "=" | "," | "`" | "[" | "\\" | "]" | "'", callback: () => any) => void;
};
export { Game, Sprite, onKeyDown, onKeyUp };
export default s;

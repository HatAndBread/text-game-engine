const clickObjects = [];
const handleClick = function (e) {
    if (e.target instanceof HTMLDivElement) {
        const x = e.target.dataset.x ? parseInt(e.target.dataset.x, 10) : undefined;
        const y = e.target.dataset.y ? parseInt(e.target.dataset.y, 10) : undefined;
        let callbackFound = false;
        if (x && y) {
            clickObjects.forEach((obj) => {
                obj.sprite.currentCoords.forEach((coord) => {
                    if (coord.x === x && coord.y === y) {
                        obj.callback({ x, y });
                        callbackFound = true;
                    }
                });
            });
            if (!callbackFound) {
                clickCallback({ x, y });
            }
        }
        callbackFound = false;
    }
};
export function listenForMouse() {
    document.addEventListener('click', handleClick);
}
export const onSpriteClicked = (sprite, callback) => {
    clickObjects.push({ sprite, callback });
};
let clickCallback = (coords) => {
    console.log(coords);
};
export const onClick = (callback) => {
    clickCallback = callback;
};

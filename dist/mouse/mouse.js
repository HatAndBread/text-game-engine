export const clickObjects = [];
const handleClick = function (e) {
    if (e.target instanceof HTMLDivElement) {
        const x = e.target.dataset.x ? parseInt(e.target.dataset.x, 10) : undefined;
        const y = e.target.dataset.y ? parseInt(e.target.dataset.y, 10) : undefined;
        if (x && y) {
            clickObjects.forEach((obj) => {
                obj.sprite.currentCoords.forEach((coord) => {
                    if (coord.x === x && coord.y === y) {
                        obj.callback();
                    }
                });
            });
        }
    }
};
export function listenForMouse() {
    document.addEventListener('click', handleClick);
}
export const onClick = (sprite, callback) => clickObjects.push({ sprite, callback });

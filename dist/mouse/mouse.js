const clickObjects = [];
export const listenForMouse = () => {
    document.addEventListener('click', (e) => {
        if (e.target instanceof HTMLDivElement) {
            const x = e.target.dataset.x;
            const y = e.target.dataset.y;
            if (x && y) {
                clickObjects.forEach((obj) => {
                    obj.sprite.currentCoords.forEach((coord) => {
                        if (coord.x === parseInt(x, 10) && coord.y === parseInt(x, 10)) {
                            obj.callback();
                        }
                    });
                });
            }
        }
    });
};
export const onClick = (sprite, callback) => clickObjects.push({ sprite, callback });

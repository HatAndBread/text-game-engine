class Pixel {
    width: number
    brush: string
    constructor(width: number, brush: string){
        this.width = width;
        this.brush = brush;
    }
    create(){
        const element = document.createElement('div');
        element.id = 'pixel'
        element.style.width = `${this.width}px`;
        element.innerText = this.brush;
    }
}


export default Pixel;
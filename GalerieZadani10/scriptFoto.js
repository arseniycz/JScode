class Galerie {
    constructor(obrazky) {
        this.index = 0; 
        this.obrazky = obrazky; 
        this.img = document.createElement('img'); 
        document.body.appendChild(this.img); 
        this.updateImg(); 
    }

    next() {
        if (this.index < this.obrazky.length - 1) {
            this.index++; 
        } else {
            this.index = 0; 
        }
        this.updateImg(); 
    }

    prev() {
        if (this.index > 0) {
            this.index--; 
        } else {
            this.index = this.obrazky.length - 1;
        }
        this.updateImg(); 
    }

    updateImg() {
        this.img.src = this.obrazky[this.index]; 
    }
}

let obrazky = [
    'https://picsum.photos/id/10/600/300',
    'https://picsum.photos/id/20/600/300',
    'https://picsum.photos/id/60/600/300',
    'https://picsum.photos/id/70/600/300',
    'https://picsum.photos/id/40/600/300',
    'https://picsum.photos/id/80/600/300',
    'https://picsum.photos/id/90/600/300'
];
let galerie = new Galerie(obrazky);




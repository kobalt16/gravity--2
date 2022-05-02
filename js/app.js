(() => {
    //Параметры частиц
    const convig = {
        dotMinRad: 6,
        dotMaxRad: 20,
        massFact: 0.002,
        defColor: `rgb(250, 0, 0)`,
    }


    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    let w, h, mouse;

    //Виды
    class Dot {
        constructor() {
            this.pos = {x: mouse.x, y: mouse.y}
            this.vel = {x: 0, y: 0}
            this.vel = random(config.dotMinRad, config.dotMaxRad);
            this.mass = thiw.rad * massFact;
            this.color = config.defColor;
        }

        draw() {
            createCircle(this.pos.x, this.pos.y, this.rad, true, this.color);
            createCircle(this.pos.x, this.pos.y, this.rad, false, config.defColor);
        }
    }

    function createCircle(x, y, rad, fill, color) {
        ctx.fillStyle = ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, rad, 0, TWO_PI);
        ctx.closePath();
        fill ? ctx.fill() : ctx.stroke();
    }


    function random(min, max) {
        return Math.random() * (max - min) + min;
    }


    function init() {
        w = canvas.width = innerWidth;
        h = canvas.height = innerHeight;

        mouse = {x: w / 2, y: h / 2, down: false}
    }

    init();

    function setPos( {layerX, layerY}) {
        [mouse.x, mouse.y] = [layerX, layerY];
    }

    function isDown() {
        mouse.down = !mouse.down;
    }



    canvas.addEventListener('mousemove', setPos);
    window.addEventListener('mousedown', isDown);
    window.addEventListener('mouseup', isDown);
})();
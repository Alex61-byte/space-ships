class ship {
    constructor(color,src) {
        this.color = color;
        this.active = false;
        this.src=src;
    }
    createShipElement() {
        let imgEL = document.createElement('img');
        imgEL.src=this.src
        imgEL.style.width = "100px";
        imgEL.style.display = "block";
        imgEL.style.marginTop = "10px";
        return imgEL;
    }
    
    display(parentEL) {
        this.shipElement = this.createShipElement();
        this.shipElement.style.position = "relative"
        this.shipElement.style.left = "100px";
        this.shipElement.style.top="100px";
        this.shipElement.style.backgroundColor = "white";
        this.shipElement.style.opacity = "60%";

        parentEL.append(this.shipElement);
        this.registerClickEvetn();
    }
    registerClickEvetn() {
        const self = this;
        this.shipElement.addEventListener('click', () => {
            this.active = !this.active;
            this.shipElement.style.backgroundColor = this.active ? "grey" : "white";

        })
    }
    moveRight() {
        if (this.active) {
            const left = parseInt(this.shipElement.style.left, 10);
            this.shipElement.style.left = left + 5 + "px";
        }
    }
    moveToLeft() {
        if (this.active) {
            const left = parseInt(this.shipElement.style.left, 10);
            this.shipElement.style.left = left - 5 + "px";
        }
    }
    moveToTop() {
        if (this.active) {
            const top = parseInt(this.shipElement.style.top, 10);
            this.shipElement.style.top = top - 5 + "px";
        }
    }
    moveDown(){
        if(this.active){
            const top=parseInt(this.shipElement.style.top,10);
            this.shipElement.style.top = top + 5 + "px";
        }
    }
}


document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowRight") {
        shipList.forEach((ship) => {
            ship.moveRight();

        });
    }
})

document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowLeft") {
        shipList.forEach((ship) => {
            ship.moveToLeft();

        });
    }
})
document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowUp") {
        shipList.forEach((ship) => {
            ship.moveToTop();

        });
    }
})

document.addEventListener("keydown",function(event){
    if(event.code==="ArrowDown"){
        shipList.forEach((ship)=>{
            ship.moveDown();
        })
    }
})

const ship1 = new ship("red","assets/red-spaceship.png");
const ship2 = new ship("green","assets/green-spaceship.png");
const ship3 = new ship("blue","assets/blue-spaceship.png");
const shipList = [ship1, ship2, ship3];
shipList.forEach((ship) => ship.display(document.body));

var shipIndex=Math.floor(Math.random()*shipList.length)
var genShip = shipList[shipIndex];

const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click', function (event) {
    
    var newShip = genShip;
   

    console.log(newShip)
    shipList.push(newShip);
    newShip.display(document.body);
    return newShip;

});

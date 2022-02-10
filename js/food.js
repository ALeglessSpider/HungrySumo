/*
Student: Talha Farid - M00795345
Description: food.js (contains food class and constructor for all food items in the game)
*/

// food class

class Food {
    x0 = 0;
    y0 = 0;
    width = 60;
    height = 40;
    speed = 3;
    direction = 1;
    edible = true;
    deadly = false;

    //  constructor

    constructor (x0,y0,width,height,speed,direction,edible,deadly=false) {
        this.x0 = x0;
        this.y0 = y0;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = direction;
        this.edible = edible;
        this.deadly = deadly;
    }

    drawFood(image, contex) {
        contex.drawImage(image, this.x0, this.y0, this.width, this.height );
    }

}


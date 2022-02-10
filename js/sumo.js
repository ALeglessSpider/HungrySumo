/*
Student: Talha Farid - M00795345
Description: sumo.js (the main game JS file with all the game objects and functions)
*/

let backGround = new Audio("../sounds/background.mp3");
let fishSting = new Audio("../sounds/fishSting.mp3");
let munchFood = new Audio("../sounds/munchFood.mp3");
let munchRotten = new Audio("../sounds/munchRotten.mp3");
let scream = new Audio("../sounds/scream.mp3");
let gameisOver = new Audio("../sounds/gameOver.mp3");

window.onload  = () => {
    let canvas = document.getElementById("gameFrame");
    let contex = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;

    // declaring game objects character, food, score and lives

    let gameBoard = document.getElementById("board");
    let fatman = document.getElementById("fatman");
    let food1 = document.getElementById("food1");
    let food2 = document.getElementById("food2");
    let food3 = document.getElementById("food3");
    let rottenFood1 = document.getElementById("rottenFood1")
    let rottenFood2 = document.getElementById("rottenFood2")
    let killerFish1 = document.getElementById("killerFish1")
    let killerFish2 = document.getElementById("killerFish2")
    let scores = document.getElementById("scores");
    let life = document.getElementById("lives");
    
    
    let cheeseburger = new Food(0, 0, 60, 40, 3, 1, true)
    let chicken = new Food(canvas.width, 0, 60, 40, 3, 3, true)
    let pizza = new Food(canvas.width, canvas.height, 60, 40, 3, 2, true)

    let rottenCheeseburger = new Food(canvas.width/3, 0, 60, 40, 3, 1, false)
    let rottenPizza = new Food(canvas.width/6, 0, 60, 40, 3, 1, false)
    let blowFishL = new Food(0, canvas.height/4, 60, 40, 3, 4, false, true)
    let blowFishR = new Food(canvas.width/2, 0, 60, 40, 3, 3, false, true)

    // score and lives variables

    let score = 0;
    let lives = 4;


    // fatman character

    let fatmanObj = {
        "x0": 500,
        "y0": 500,
        "speed":20,
    }

    // drawing images on canvas

    contex.drawImage(gameBoard, 0, 0, canvas.width, canvas.height );
    contex.drawImage(fatman, fatmanObj.x0, fatmanObj.y0, fatman.width, fatman.height );
    cheeseburger.drawFood(food1, contex);
    chicken.drawFood(food2, contex);
    pizza.drawFood(food3, contex);
    rottenCheeseburger.drawFood(rottenFood1, contex);
    rottenPizza.drawFood(rottenFood2, contex);
    blowFishL.drawFood(killerFish1, contex);
    blowFishR.drawFood(killerFish2, contex);

    


    // movement function

    let movingCheeseburger = (food) => {

            if (food.direction == 1 && food.x0 < (canvas.width - food.width)) {
                food.x0 += food.speed;
            } else if (food.direction == 2 && food.y0 < (canvas.height - food.height)) {
                food.y0 += food.speed;
            } else if (food.direction == 3 && food.x0 > 0) {
                food.x0 -= food.speed;
            } else if (food.direction == 4 && food.y0 > 0) {
                food.y0 -= food.speed;
            } else {
                food.direction = Math.floor(Math.random() * 4 + 1);
                if (food.direction == 1) {
                    food.y0 = Math.floor(Math.random() * (canvas.height - food.height));
                    food.x0 = 0;
                } else if (food.direction == 2) {
                    food.y0 = 0;
                    food.x0 = Math.floor(Math.random() * (canvas.width - food.width));
                } else if (food.direction == 3) {
                    food.x0 = canvas.width;
                    food.y0 = Math.floor(Math.random() * (canvas.height - food.height));
                } else if (food.direction == 4) {
                    food.x0 = canvas.height;
                    food.y0 = Math.floor(Math.random() * (canvas.width - food.width));
                }
                
            }
            refreshCanvas();
    }

    // collision function

    let hCollisionFunction = (food) => {
        if ((food.x0 > (fatmanObj.x0 + fatman.width) || (food.x0 + food.width) < fatmanObj.x0) || ((food.y0 > (fatmanObj.y0 + fatman.width)) || (fatmanObj.y0 > (food.y0 + food.width)))) {
            return false;
        } else {
            if (food.edible == true) {
                score += 10
                munchFood.play();
            } else if (food.edible == false && food.deadly == false) {
                score -= 5;
                munchRotten.play();
                if (score < 0) {
                    scream.play();
                    lives -= 1;
                }
            } else if (food.edible == false && food.deadly == true) {
                lives -= 1;
                fishSting.play();
            }
            if ( lives === 0) {
                scream.play();
                gameOver();
            }
            food.y0 = Math.floor(Math.random() * (canvas.height - food.height));
            food.x0 = 0;
        }
    }

    // for refreshing the canvas

    let refreshCanvas = () => {
        contex.clearRect(0, 0, canvas.width, canvas.height);
        contex.drawImage(gameBoard, 0, 0, canvas.width, canvas.height );
        contex.drawImage(fatman, fatmanObj.x0, fatmanObj.y0, fatman.width, fatman.height );
        cheeseburger.drawFood(food1, contex);
        chicken.drawFood(food2, contex);
        pizza.drawFood(food3, contex);
        rottenCheeseburger.drawFood(rottenFood1, contex);
        rottenPizza.drawFood(rottenFood2, contex);
        blowFishL.drawFood(killerFish1, contex);
        blowFishR.drawFood(killerFish2, contex);
    }

    // Character Movements

    window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight" && fatmanObj.x0 < (canvas.width - fatman.width)) {
            fatmanObj.x0 += fatmanObj.speed;
            
        }
        if (event.key === "ArrowLeft" && fatmanObj.x0 > 0) {
            fatmanObj.x0 -= fatmanObj.speed;
            
        }
        if (event.key === "ArrowUp" && fatmanObj.y0 > 0) {
            fatmanObj.y0 -= fatmanObj.speed;
            
        }
        if (event.key === "ArrowDown" && fatmanObj.y0 < (canvas.height - fatman.height)) {
            fatmanObj.y0 += fatmanObj.speed;
            
        }
        refreshCanvas();
    });

    // game running

    let runGame = () => {
        refreshCanvas();
        movingCheeseburger(cheeseburger);
        movingCheeseburger(chicken);
        movingCheeseburger(pizza);
        movingCheeseburger(rottenCheeseburger);
        movingCheeseburger(rottenPizza);
        movingCheeseburger(blowFishL);
        movingCheeseburger(blowFishR);
        hCollisionFunction(cheeseburger);
        hCollisionFunction(chicken);
        hCollisionFunction(pizza);
        hCollisionFunction(rottenCheeseburger);
        hCollisionFunction(rottenPizza);
        hCollisionFunction(blowFishL);
        hCollisionFunction(blowFishR);
        scores.innerText = score;
        life.innerText = lives;
        backGround.play()
    }

    // game over function

    function gameOver() {
        gameisOver.play();
        const player = JSON.parse(localStorage.getItem(sessionStorage.getItem("signed_in_user")));
        player.maxscore<score?player.maxscore=score:false;
        localStorage.setItem(player.usrName, JSON.stringify(player));
        clearInterval(game);
        alert("Try again.")
    }

    let game = setInterval(runGame, 5);
}

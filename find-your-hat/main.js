const read = require('prompt-sync')({ sigint: true });
const clearScreen = require("clear-screen");

class Field {
    PLAYER_MOVE_UP = "moveUp";
    PLAYER_MOVE_DOWN = "moveDown";
    PLAYER_MOVE_LEFT = "moveLeft";
    PLAYER_MOVE_RIGHT = "moveRight";

    USER_MOVE_UP = "w";
    USER_MOVE_DOWN = "s";
    USER_MOVE_LEFT = "a";
    USER_MOVE_RIGHT = "d";

    HAT = '^';
    HOLE = 'O';
    FIELD_CHARACTER = '░';
    PLAYER_PATH_CHARACTER = '*';

    constructor(field) {
        this.field = field;
        this.player = {
            x: 0,
            y: 0,
            moveUp() {
                this.x--;
            },
            moveDown() {
                this.x++;
            },
            moveLeft() {
                this.y--;
            },
            moveRight() {
                this.y++;
            },
        }
        this.isGameOver = false;

        this.generateMap();

        this.gameStart();
    }

    generateMap() {
        let width = this.field.length;
        let height = this.field[0].length;


        let playerIndexX = null;
        let playerIndexY = null;

        let hatIndexX = null;
        let hatIndexY = null;
        // replace player and hat
        while (true) {
            playerIndexX = Field.randomIndex(0, width);
            playerIndexY = Field.randomIndex(0, height);

            hatIndexX = Field.randomIndex(0, width);
            hatIndexY = Field.randomIndex(0, height);

            let isSamePosition = playerIndexX === hatIndexX && playerIndexY === hatIndexY;
            if (!isSamePosition) {
                break;
            }
        }

        this.player.x = playerIndexX;
        this.player.y = playerIndexY;

        // file player and hat
        this.field[playerIndexX][playerIndexY] = this.PLAYER_PATH_CHARACTER;
        this.field[hatIndexX][hatIndexY] = this.HAT;

    }

    movePlayer(moveOrder) {
        // move plaer
        switch (moveOrder) {
            case this.PLAYER_MOVE_UP:
                this.player.moveUp();
                break;
            case this.PLAYER_MOVE_DOWN:
                this.player.moveDown();
                break;
            case this.PLAYER_MOVE_LEFT:
                this.player.moveLeft();
                break;
            case this.PLAYER_MOVE_RIGHT:
                this.player.moveRight();
                break;
        }
        this.checkCollision();
    }

    checkCollision() {
        // get next move (x, y) for detect collision.
        let playerX = this.player.x;
        let playerY = this.player.y;

        // first check if player move to out of fields;
        if (this.detectOutOfField(playerX, playerY)) {
            console.log("Game Over!, You attempts to move “outside” the field.");
            this.gameOver();
            return;
        }

        // get current object that player move on to.
        let whatObject = this.field[playerX][playerY];

        // if found hat
        if (this.detectHat(whatObject)) {
            console.log("Yeah, I Got it!");
            this.gameOver();
            return;
        }

        // if found hole
        if (this.detectHole(whatObject)) {
            console.log("Game Over!, You falling in a hole.");
            this.gameOver();
            return;
        }

        // if not found anything just moving on.
        this.field[playerX][playerY] = this.PLAYER_PATH_CHARACTER;
    }

    inputFormUser() {
        let userInput = read("Which way ? (w, a, s, d) : ").trim().toLowerCase();
        switch (userInput) {
            case this.USER_MOVE_UP:
                this.movePlayer(this.PLAYER_MOVE_UP);
                break;
            case this.USER_MOVE_DOWN:
                this.movePlayer(this.PLAYER_MOVE_DOWN)
                break;
            case this.USER_MOVE_LEFT:
                this.movePlayer(this.PLAYER_MOVE_LEFT)
                break;
            case this.USER_MOVE_RIGHT:
                this.movePlayer(this.PLAYER_MOVE_RIGHT)
                break;
        }
    }

    gameStart() {
        while (!this.isGameOver) {
            this.print();
            this.inputFormUser();
        }
    }

    gameOver() {
        this.isGameOver = true;
        // console.log("GameOver() called");
        // this.gameStart();
    }

    detectOutOfField(x, y) {
        let height = this.field.length;
        let width = this.field[0].length
        let xOut = x < 0 || x >= height;
        let yOut = y < 0 || y >= width;
        return xOut || yOut;
    }

    detectHole(obj) {
        return obj === this.HOLE;
    }

    detectHat(obj) {
        return obj === this.HAT;
    }

    print() {
        clearScreen();
        this.field.forEach((e) => {
            console.log(e.join(""))
        });
    }

    static randomIndex(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    static generateField(width, height, percentage = 0.4) {
        let HAT = '^';
        let HOLE = 'O';
        let FIELD_CHARACTER = '░';
        let PLAYER_PATH_CHARACTER = '*';

        let field = [];
        // first generate background.
        for (let i = 0; i < width; i++) {
            let eachRow = [];
            for (let j = 0; j < height; j++) {
                eachRow.push(FIELD_CHARACTER);
            }
            field.push(eachRow);
        }

        // fill hole
        let availableSlots = Math.floor((width * height - 2) * percentage);

        for (let i = 0; i < availableSlots; i++) {
            let holeIndexX = Field.randomIndex(0, width);
            let holeIndexY = Field.randomIndex(0, height);

            let whatObject = field[holeIndexX][holeIndexY];
            if (whatObject === HAT || whatObject === PLAYER_PATH_CHARACTER) continue;

            field[holeIndexX][holeIndexY] = HOLE;
        }

        // let availableSlots = (width * height) - 2;

        // let playerIndexX = null;
        // let playerIndexY = null;

        // let hatIndexX = null;
        // let hatIndexY = null;
        // // replace player and hat
        // while (true) {
        //     playerIndexX = this.randomIndex(0, width);
        //     playerIndexY = this.randomIndex(0, height);

        //     hatIndexX = this.randomIndex(0, width);
        //     hatIndexY = this.randomIndex(0, height);

        //     let isSamePosition = playerIndexX === hatIndexX && playerIndexY === hatIndexY;
        //     if (!isSamePosition) {
        //         break;
        //     }
        // }

        // // add to field
        // field[playerIndexX][playerIndexY] = PLAYER_PATH_CHARACTER;
        // field[hatIndexX][hatIndexY] = HAT;


        // const myField = [
        //     ['*', '░', '░'],
        //     ['░', '░', '░'],
        //     ['░', '^', '░'],
        // ];
        return field;
    }
}

const player = new Player(0, 0);
new Field(Field.generateField(4, 10, 0.4));
const read = require('prompt-sync')({sigint: true});
const clearScreen = require("clear-screen");

class Player {
	static DEFAULT_ICON = "😈";

	constructor(x = 0, y = 0, icon = Player.DEFAULT_ICON) {
		this.x = x;
		this.y = y;
		this.icon = icon;
	}

	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}

	setX() {
		this.x = x;
	}

	setY() {
		this.y = y;
	}

	setLocation(x, y) {
		this.x = x;
		this.y = y;
	}

	moveUp() {
		this.x--;	
	}

	moveDown() {
		this.x++;	
	}

	moveLeft() {
		this.y--;	
	}

	moveRight() {
		this.y++;
	}

	setIcon(icon) {
		this.icon = icon;
	}

	getIcon() {
		return this.icon;
	}
}

class Game {

	MOVE_UP = "w";
	MOVE_DOWN = "s";
	MOVE_LEFT = "a";
	MOVE_RIGHT = "d";

	static HAT = '💀';
	static HOLE = '🍎';
	static FIELD = '⬜';

	constructor(map, player, hardMode = false) {
		this.player = player;
		this.map = map;
		this.userCommand = null;
		this.isGameOver = false;
		this.hardMode = hardMode;
	}

	generateHole() {
		// this function should not place new hole on player and hat positions.
		let mapRowSize = this.map.length;
		let mapColumnSize = this.map[0].length;
		
		while (true) {
			let newHoleX = Game.randomIndex(0, mapRowSize);
			let newHoleY = Game.randomIndex(0, mapColumnSize);

			let object = this.getObject(newHoleX, newHoleY);
			let isSamePositionSomething = this.detectHat(object) || this.detectHole(object) || object === this.player.getIcon();
			if (isSamePositionSomething) continue;

			this.addHole(newHoleX, newHoleY);
			break;
		}
	}

	addHole(x, y) {
		this.map[x][y] = Game.HOLE;
	}

	randomPlayerAndHatLocation() {
		while (true) {
			let [playerX, playerY] = this.randomPlayerLocation();
			let [hatX, hatY] = this.randomHatLocation();

			// if player and hat position same hole position, we dont care.
			let isSamePosition = playerX !== hatX && playerY !== hatY;
			if (!isSamePosition) {

				this.player.setLocation(playerX, playerY);

				this.map[playerX][playerY] = this.player.getIcon();
				this.map[hatX][hatY] = Game.HAT;

				break;
			}
		}	
	}

	randomHatLocation() {
		let mapRowSize =  this.map.length;
		let mapColumnSize = this.map[0].length;
		let hatX = Game.randomIndex(0, mapRowSize);
		let hatY = Game.randomIndex(0, mapColumnSize);
		return [hatX, hatY];
	}

	randomPlayerLocation() {
		let mapRowSize =  this.map.length;
		let mapColumnSize = this.map[0].length;
		let playerX = Game.randomIndex(0, mapRowSize);
		let playerY = Game.randomIndex(0, mapColumnSize);
		return [playerX, playerY];
	}

	readInputFromUser() {
		let userCommand = read("Which way ? (w = up, s = down, a = left, r = right) : ").trim().toLowerCase();	
		switch (userCommand) {
			case this.MOVE_UP:
				this.userCommand = userCommand;
				break;
			case this.MOVE_DOWN:
				this.userCommand = userCommand;
				break;
			case this.MOVE_LEFT:
				this.userCommand = userCommand;
				break;
			case this.MOVE_RIGHT:
				this.userCommand = userCommand;
				break;
		}
	}

	checkCollision() {
		
		let isDetectSomething = false;
		let gameOverMessage = "";
		
		if (this.detectOutOfMap(this.player.getX(), this.player.getY())) {
			
			gameOverMessage = "Game Over!, You attempts to move “outside” the field.";
			isDetectSomething = true;
			
		} else {
			
			let identifyObject = this.getObject(this.player.getX(), this.player.getY());
			
			if (this.detectHole(identifyObject)) {
				gameOverMessage = "Game Over!, You falling in a hole.";
				isDetectSomething = true;
			}
			
			if (this.detectHat(identifyObject)) {
				gameOverMessage = "Yeah, I Got it!";
				isDetectSomething = true;
			}
		}

		if (isDetectSomething) {
			this.gameOver(gameOverMessage);
		}

		return isDetectSomething;
	}

	updatePlayerPath() {
		this.map[this.player.getX()][this.player.getY()] = this.player.getIcon();
	}

	getObject(x, y) {
		return this.map[x][y];
	}

	detectHole(object) {
		return object === Game.HOLE;
	}

	detectHat(object) {
		return object === Game.HAT;
	}

	detectOutOfMap(x, y) {
		let mapRowSize = this.map.length;
		let mapColumnSize = this.map[0].length;
		let isPlayerMoveOutOfMapX = x < 0 || x >= mapRowSize;
		let isPlayerMoveOutOfMapY = y < 0 || y >= mapColumnSize;
		return isPlayerMoveOutOfMapX || isPlayerMoveOutOfMapY
	}

	movePlayer(userCommand) {
		switch (userCommand) {
			case this.MOVE_UP:
				this.player.moveUp();
				break;
			case this.MOVE_DOWN:
				this.player.moveDown();
				break;
			case this.MOVE_LEFT:
				this.player.moveLeft();
				break;
			case this.MOVE_RIGHT:
				this.player.moveRight();
				break;
		}
	}

	displayMap() {
		this.map.forEach((element) => console.log(element.join("")));
	}

	gameStart() {
		this.randomPlayerAndHatLocation();
		while (!this.isGameOver) {
			clearScreen();
			
			this.displayMap();
			this.readInputFromUser();
			this.movePlayer(this.userCommand);

			if (!this.checkCollision()) {
				this.updatePlayerPath();
			}

			if (this.hardMode) {
				this.generateHole();
			}
		}
	}

	gameOver(message = "Game Over!") {
		this.isGameOver= true;
		console.log(message);
	}

	static randomIndex(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	/** 
	Only generate field and hole.
	*/
	static generateMap(row = 10, column = 10, fieldPercentage = 85) {
		let invalidSize = row < 3 || column < 3;
		
		if (invalidSize) {
			console.log(row, column);
			throw Error("Both row and column must greather than 3 or equals.");
		}

		const map = [];

		// fill hole. 100% of row * column. (whole map).
		for (let i = 1; i <= row; i++) {
			let eachRow = [];
			for (let j = 1; j <= column; j++) {
				eachRow.push(Game.HOLE);
			}
			map.push(eachRow);
		}

		// generate field 85% of hole.
		
		let availableSlot = (row * column); 
		// fill field
		let totalField = availableSlot * fieldPercentage * 0.01; 
		while (totalField > 0) {
			let fieldX = Game.randomIndex(0, row);
			let fieldY = Game.randomIndex(0, column);
			let isHolePosition = map[fieldX][fieldY];
			if (isHolePosition === Game.HOLE)  {
				map[fieldX][fieldY] = Game.FIELD;
				totalField--;
			}
		}
		return map;
	}
}


// ================ testing program =========================
function running() {	
	console.log("============= Find Your Hat! ==============")


	
	// row map size input.
	let row = Number(read("Enter a row size : "));
	if (!row || isNaN(row)) row = 10;

	
	// column map size input.
	let column = Number(read("Enter a column size : "));
	if (!column || isNaN(column)) column = 10;
	// console.log(row, column);


	// hard mode input.
	console.log("Hard mode? (default: no) (every move will generate single hole) (y = yes, n = no)");
	let hardMode = read("> ").trim().toLowerCase() ?? "n";
	let mappingMode = { "y" : true, "n" : false}
	if (!hardMode || undefined) {
		hardMode = "n";
	}
	
	hardMode = mappingMode[hardMode];
	console.log(hardMode);

	// create a new player
	const player = new Player();
	player.setIcon("😎");

	// create game and generate map and put player into it, and hardmode toggle.
	new Game(Game.generateMap(row, column), player, hardMode).gameStart();
}

running();

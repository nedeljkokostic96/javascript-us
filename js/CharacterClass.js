const MAX_POINT_POSITION = 10;
const MIN_POINT_POSITION = 0;

class Character {

    static pointCounter = 0;

    constructor(){
        if(this.constructor === Character){
            throw new TypeError('Can not construct abstract class!');
        }
        this.xPosition = Math.floor(Math.random() * MAX_POINT_POSITION) + 1;
        this.yPosition = Math.floor(Math.random() * MAX_POINT_POSITION) + 1;
        Character.pointCounter++;
    }

    setPosition(x = 0, y = 0){
        if (x < MIN_POINT_POSITION || x > MAX_POINT_POSITION) {
            throw Error(`Invalid value for xPosition!`);
        }
        if (y < MIN_POINT_POSITION || y > MAX_POINT_POSITION) {
            throw Error(`Invalid value for yPosition!`);
        }
        this.xPosition = x;;
        this.yPosition = y;
    }

    get getPositionX(){
        return this.xPosition;
    }

    get getPositionY(){
        return this.yPosition;
    }

    toString(){
        return `[x = ${this.xPosition}, y = ${this.yPosition}]`;
    }

    static numberOfPoints(){
        return Character.pointCounter;
    }

}


class PlayerCharacter extends Character{
    constructor(role){
        super();
        this.role = role;
    }

    toString(){
        return 'Player: ' + this.role + ' at the position: ' + super.toString();
    }
}

class NonPlayerCharacter extends Character{
    constructor(goalsRecived){
        super();
        this.goalsRecived = goalsRecived;
    }

    toString(){
        return "Goalkeeper! Goals recived: " + this.goalsRecived;
    }
}

let newPlayer = new PlayerCharacter('WF');
newPlayer.setPosition(2, 2);

let goalkeeper = new NonPlayerCharacter(20);

console.log(newPlayer.toString());
console.log(goalkeeper.toString());

console.log(Character.numberOfPoints());
const MAX_POINT_POSITION = 10;
const MIN_POINT_POSITION = 0;

let Character = function() {
    if (this.constructor === Character) {
        throw new Error('Can not construct Character!');
    }
}

Character.prototype.init = function(){
    this.xPosition = Math.floor(Math.random() * MAX_POINT_POSITION) + 1;
    this.yPosition = Math.floor(Math.random() * MAX_POINT_POSITION) + 1;
    Character.characterCounter = ++Character.characterCounter || 1;
};

Character.prototype.setPosition = function(x, y){
    if (x < MIN_POINT_POSITION || x > MAX_POINT_POSITION) {
        throw Error('Invalid xPosition value!');
    }
    if (y < MIN_POINT_POSITION || y > MAX_POINT_POSITION) {
        throw Error('Invalid yPosition value!');
    }
    this.xPosition = x;
    this.yPosition = y;
};

Character.prototype.getPosition = function(){
    return `[ x = ${this.xPosition}, y = ${this.yPosition} ]`;
};

let PlayerCharacter = function(role){
    this.init();
    this.role = role;
};

PlayerCharacter.prototype = Object.create(Character.prototype);

PlayerCharacter.prototype.toString = function(){
    return `Player: ${this.role} at position: ${this.getPosition()}`;
};

let NonPlayerCharacter = function(goalsRecived){
    this.init();
    this.goalsRecived = goalsRecived;
};

NonPlayerCharacter.prototype = Object.create(Character.prototype);

NonPlayerCharacter.prototype.toString = function(){
    return `Goalkeeper with recived ${this.goalsRecived} goals at the position: ${this.getPosition()}`;
};
let mf = new PlayerCharacter();
console.log(mf);

let wf = new PlayerCharacter('wf', 1, 2);
console.log(new PlayerCharacter('rwf').toString());
console.log(new PlayerCharacter('mwf').toString());
console.log(new NonPlayerCharacter(20).toString());
console.log(new NonPlayerCharacter(13).toString());
console.log(new NonPlayerCharacter(3).toString());
console.log(wf);

console.log(Character.characterCounter);
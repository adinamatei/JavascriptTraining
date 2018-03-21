// The 4 stones puzzle

class Stone {
    // name: the stone name <String>
    // face: the initial face name <String>
    // stones: an array of stones
    constructor(name, face, stones) {
        this.name = name;
        this.face = face;
        this.stones = stones;
        this.faces = ["A", "B", "C"];
        this.rotation = 0;
    }
    getName() {
        // console.log(`The stone name is: ${this.name}`);
        return this.name;
    }
    getFaceIndex(){
        for(let i = 0; i < this.faces.length; i++){
            if(this.face === this.faces[i]){
                return i;
            }
        }
    }
    // create a function that will rotate the current stone and the other stones that are linked to it
    rotate(){
        let index = this.getFaceIndex();
        if(index === 2) {
            index = 0;
        }
        else {
            index++
        }
        this.face = this.faces[index];
        this.rotation++;
        this.alsoRotates();
    }
    // create a function that returns the face name
    getFaceName(){
        return this.face;
    }
    // create a function that returns the number of rotations
    getRotations() {
        return this.rotation;
    }
    // create a function that links the stones to other
    alsoRotates(){
        for(let i = 0, len = this.stones.length; i < len; i++) {
            let stone = this.stones[i];
            stone.rotate();
        }
    }
}


const stone4 = new Stone("stone4", "B", []);
const stone3 = new Stone("stone3", "C", [stone4]);
const stone2 = new Stone("stone2", "B", [stone3, stone4]);
const stone1 = new Stone("stone1", "C", [stone2, stone3, stone4]);

// stone1.rotate();


const STONES = [stone1, stone2, stone3, stone4];
const SUCCESS = ["A", "B", "C", "A"];

// create an algorithm to achieve the SUCCESS result
for(let i = 0, len = STONES.length; i < len; i++){
    while(STONES[i].getFaceName() !== SUCCESS[i]) {
        STONES[i].rotate();
    }
}

console.log(`${stone1.getName()} - Face ${stone1.getFaceName()} and has rotated ${stone1.getRotations()} times`);
console.log(`${stone2.getName()} - Face ${stone2.getFaceName()} and has rotated ${stone2.getRotations()} times`);
console.log(`${stone3.getName()} - Face ${stone3.getFaceName()} and has rotated ${stone3.getRotations()} times`);
console.log(`${stone4.getName()} - Face ${stone4.getFaceName()} and has rotated ${stone4.getRotations()} times`);

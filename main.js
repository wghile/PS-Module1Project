//Naming PC
let pcName = prompt("Enter name of player")
pcName = pcName.toLocaleLowerCase()

class Player{
    constructor(name, accuracy){
        this.name = name,
        this.accuracy = accuracy;
    }
}

const cpu = new Player('Gambit', Math.random())
const pc = new Player(pcName, 0.75)

const playerName = document.querySelector('#pc-name')
playerName.textContent = pcName

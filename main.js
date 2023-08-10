//Naming PC
// let pcName = prompt("Enter player name")
let pcName = 'joe'

class Player{
    constructor(name, accuracy){
        this.name = name;
        this.accuracy = accuracy;
    }
    accuracyCheck(){
        if(this.accuracy >= Math.random()){
            alert('Press anywhere on the board to throw your dart')
            board.addEventListener('click', this.throwDart)
        }else{
            alert('Your dart will be randomly thrown!')
            let randomZone = Math.floor(Math.random() * 20 + 1)
            pcScore[round].textContent = randomZone
        }
    }
    throwDart(evt){
        for(let i = 0; i < zones.length; i++){
            if(evt.target === zones[i]){
                pcScore[round].textContent = zoneNums[i]
            }else if(evt.target === center){
                pcScore[round].textContent = '25'
            }else if(evt.target === bullsEye){
                pcScore[round].textContent = '50'
            }
        }
    }

}

const cpu = new Player('Gambit', Math.random())
const pc = new Player(pcName, 0.65)

const playerName = document.querySelector('#pc-name')
playerName.textContent = `${pcName}\'s`
const cpuName = document.querySelector('#cpu-name')
cpuName.textContent = `${cpu.name}\'s `

const zones = [...document.querySelectorAll('.zone')]
const zoneLabel = document.querySelectorAll('.zone-labels')
const pcScore = [...document.querySelectorAll('.pc-score')]
console.log(pcScore)

const board = document.querySelector('#dart-board')
const center = document.querySelector('#board-center')
const bullsEye = document.querySelector('#bulls-eye')

const button = document.querySelector('button')

let zoneNums = []
zoneLabel.forEach((element) =>{
    zoneNums.push(element.textContent)
})


//Actions
button.addEventListener('click', pc.accuracyCheck)











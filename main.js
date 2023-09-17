//Naming PC
let pcName = prompt("Enter player name")

class Player{
    constructor(name, accuracy){
        this.name = name;
        this.accuracy = accuracy;
    }
    accuracyCheck(){
        if(pc.accuracy > Math.random()){
            alert('Press anywhere on the board to throw your dart')
            board.addEventListener('click', pc.throwDart)
        }else{
            alert('Your dart will be randomly thrown!')
            let randomZone = Math.floor(Math.random() * 20 + 1)     //random # between 1 and 20
            pcScore[roundsArray[0]].textContent = randomZone
            if(pcDartList.hasChildNodes()){
                pcDartList.removeChild(pcDartList.children[0])
            }
            alert(`Now it\'s ${cpu.name}\'s turn`)
            cpu.randomGenerator()
        }
    }
    throwDart(evt){
        for(let i = 0; i < zones.length; i++){
            if(evt.target === zones[i]){
                pcScore[roundsArray[0]].textContent = zoneNums[i]
            }else if(evt.target === center){
                pcScore[roundsArray[0]].textContent = '25'
            }else if(evt.target === bullsEye){
                pcScore[roundsArray[0]].textContent = '50'
            }
        }
        // document.addEventListener('click', pcArrowThrow)
        if(pcDartList.hasChildNodes()){
            pcDartList.removeChild(pcDartList.children[0])
        }
        alert(`Now it\'s ${cpu.name}\'s turn`)
        cpu.randomGenerator()
    }
    randomGenerator(){
        if(this.accuracy >= Math.random()){
            let randomNums = [25, 50]
            let randomPick = randomNums[Math.floor(Math.random() * 2)]
            cpuScore[roundsArray[0]].textContent = randomPick
        }else{
            alert(`${cpu.name}\'s dart will be randomly thrown!`)
            let randomZone = Math.floor(Math.random() * 10 + 1)     //random # between 1 and 10
            cpuScore[roundsArray[0]].textContent = randomZone
        }
        if(cpuDartList.hasChildNodes()){
            cpuDartList.removeChild(cpuDartList.children[0])
        }
        button.textContent = 'Next Round'
        roundsArray.shift()
        if(roundsArray.length > 0){
            return
        }else{
            this.results()
            button.textContent = 'Game Over - Play again?'
            button.style.fontSize = '20px'
            button.removeEventListener('click', pc.accuracyCheck)
            button.addEventListener('click', this.gameReset)
        }
    }
    gameReset(){
        let reset = prompt('Would you like to play again?')
        reset = reset.toLocaleLowerCase()
        if(reset === 'yes'){
            location.reload()
        }else if(reset === 'no'){
            window.alert('Thanks for playing!')
        }else{
            this.gameReset()
        }
    }
    results(){
        let pcRoundScores = []
        let cpuRoundScores = []
        let y = 0
        while(y < 5){
            pcRoundScores.push(Number(pcScore[y].textContent))
            cpuRoundScores.push(Number(cpuScore[y].textContent))
            y++
        }
        const pcTotal = pcRoundScores.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        const cpuTotal = cpuRoundScores.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        cpuDartList.textContent = `Total: ${cpuTotal}`
        cpuDartList.style.marginLeft = '125px'
        pcDartList.textContent = `Total: ${pcTotal}`
        if(pcTotal > cpuTotal){
            title.textContent = 'YOU WON!'
        }else if(pcTotal < cpuTotal){
            title.textContent = `YOU LOST`
        }else{
            title.textContent = 'IT\'S A TIE!'
        }
    }
}

const cpu = new Player('Gambit', Math.random())
const pc = new Player(pcName, 0.6)
console.log(cpu.accuracy)
console.log(pc.accuracy)

const playerName = document.querySelector('#pc-name')
playerName.textContent = `${pcName}\'s`
const cpuName = document.querySelector('#cpu-name')
cpuName.textContent = `${cpu.name}\'s `

const zones = [...document.querySelectorAll('.zone')]
const zoneLabel = document.querySelectorAll('.zone-labels')
const pcScore = [...document.querySelectorAll('.pc-score')]
const cpuScore = [...document.querySelectorAll('.cpu-score')]

const board = document.querySelector('#dart-board')
const center = document.querySelector('#board-center')
const bullsEye = document.querySelector('#bulls-eye')

const button = document.querySelector('button')

const pcDartList = document.querySelector('#pc-darts')
const pcDarts = [...document.querySelectorAll('.pc-dart')]
const cpuDartList = document.querySelector('#cpu-darts')
const cpuDarts = [...document.querySelectorAll('.cpu-dart')]

const title = document.querySelector('#title')

const main = document.querySelector('main')

let zoneNums = []
zoneLabel.forEach((element) =>{
    zoneNums.push(element.textContent)
})

//Actions
let roundsArray = [0, 1, 2, 3, 4]
button.addEventListener('click', pc.accuracyCheck)

// function pcArrowThrow(evt){
//     const pcArrow = document.createElement('div')
//     pcArrow.setAttribute('class', 'arrow')
//     pcArrow.textContent = '🔹'
//     pcArrow.style.zIndex = '2'
//     pcArrow.left = evt.pageX
//     pcArrow.top = evt.pageY
//     main.appendChild(pcArrow)
// }
// function cpuArrowThrow(evt){
//     const cpuArrow = document.createElement('div')
//     cpuArrow.textContent = '🔸'
//     cpuArrow.style.visibility = "visible";
//     cpuArrow.left = evt.pageX
//     cpuArrow.top = evt.pageY
// }








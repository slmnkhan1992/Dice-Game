const rollDice = document.querySelector('#rollDice')
const diceImage = document.querySelector('#dice img')
const score = document.querySelectorAll('h2')
const totalScore = document.querySelector('#totalScore')
const totalScore2 = document.querySelector('#totalScore2')
const hold = document.querySelector('#hold')

let currentPlayer = 1;

let dice = [
    {catagory:1, image: 'https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FNljHxzJBzz78N74Qg6E1%2Fuploads%2FG41sjO00fBxSd2QLybOT%2F1.png?alt=media&token=dff66b6f-26e4-4a5c-a682-e437a8d023dd'},
    {catagory:2, image: 'https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FNljHxzJBzz78N74Qg6E1%2Fuploads%2FlGijs8wtSAcqIKxlO9S9%2F2.png?alt=media&token=fe3d5911-6e7f-4103-a3d0-72155060fddc'},
    {catagory:3, image: 'https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FNljHxzJBzz78N74Qg6E1%2Fuploads%2FgJSXqzQmRJ8HzJ5BIG3E%2F3.png?alt=media&token=8534e2f4-f917-47fa-aa8b-6cee2fa44b9d'},
    {catagory:4, image: 'https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FNljHxzJBzz78N74Qg6E1%2Fuploads%2FB8JCrgLAxqWhECnnQbKY%2F4.png?alt=media&token=8fe5e993-a7aa-4666-8e95-37c105473500'},
    {catagory:5, image: 'https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FNljHxzJBzz78N74Qg6E1%2Fuploads%2FacuuJ1z5er9ZDfxiG3KI%2F5.png?alt=media&token=8132e89e-1094-4eec-87d5-357f73551017'},
    {catagory:6, image: './asset/6.png'}
]
 
rollDice.addEventListener('click', ()=> {
    let number = Math.ceil(Math.random() * 6)
    console.log(number);

    dice.forEach((item)=> {
        if(item.catagory ==number) {
            diceImage.src = item.image
            score[currentPlayer - 1].innerHTML = +score[currentPlayer - 1].innerHTML + number
        } 
    })

    if (number === 1) {
        score[currentPlayer - 1].innerHTML = 0;
        // Switch players
        switchPlayers();
    }

    if ((+totalScore.innerHTML || +totalScore2.innerHTML) >= 100) {
        alert(`${currentPlayer} is win the game`)
    }

})


//Hold button function
hold.addEventListener('click', ()=> {
    if(currentPlayer === 1) {
        totalScore.innerHTML = +totalScore.innerHTML +  +score[0].innerHTML
    } 
    else if (currentPlayer === 2) {
        totalScore2.innerHTML = +totalScore2.innerHTML + +score[1].innerHTML;
    }
    score[currentPlayer - 1].innerHTML = 0;
    switchPlayers();

})


// Switch Player function
function switchPlayers() {
    // Toggle between player 1 and player 2
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    console.log(`Switched to Player ${currentPlayer}`);
}


// New Game Button Function
document.querySelector('#newGame').addEventListener('click', ()=> {
    score[0].innerHTML = 0
    score[1].innerHTML = 0
    totalScore.innerHTML = 0
    totalScore2.innerHTML = 0
})





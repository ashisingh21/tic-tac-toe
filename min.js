let box = document.querySelectorAll('.box')
let turn = 'X';
let isGameOver = false;
let boxtext = document.getElementsByClassName('boxText')
let turnMusic = new Audio('ting.mp3')
let winMusic = new Audio("gameover.mp3")
let bgMusic = new Audio("music.mp3")

let giphyEmbed = document.querySelector('.giphy-embed')



// bgMusic.play()

let changeTurn = () => {
    return turn === 'X' ? 'O' : 'X';
}

const checkWin = () => {


    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    win.forEach(e => {

        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')) {
            let boxWinBox1 = box[e[0]]
            let boxWinBox2 = box[e[1]]
            let boxWinBox3 = box[e[2]]

            boxWinBox1.style.backgroundColor = 'green';
            boxWinBox2.style.backgroundColor = 'green';
            boxWinBox3.style.backgroundColor = 'green';
            boxWinBox1.style.color = 'white';
            boxWinBox2.style.color = 'white';
            boxWinBox3.style.color = 'white';

            document.getElementById('info').innerText = boxtext[e[0]].innerText + ' Won';
            document.getElementById('info').style.color = 'green';
            giphyEmbed.style.display = 'inline-block';
            winMusic.play()
            isGameOver = true;
        }


    })
}





Array.from(box).forEach(box => {

    let boxText = box.querySelector('.boxText')

    box.addEventListener("click", function () {
        if (boxText.innerText === '') {

            boxText.innerText = turn;
            turn = changeTurn();

            checkWin()

            if (!isGameOver) {
                turnMusic.play()

                document.getElementById('info').innerText = "Turn of " + turn;
            }


        }
    })


})
// RESET GAME

const reset = document.getElementById('reset');
reset.addEventListener('click', function () {
    let boxtext = document.getElementsByClassName('boxText')

    Array.from(boxtext).forEach(e => {
        e.innerText = '';
        isGameOver = false;
    })

    giphyEmbed.style.display = 'none';
    document.getElementById('info').innerText = "Turn of " + turn;
    Array.from(box).forEach(e => {
        e.style.backgroundColor = 'white';
        e.style.color = 'black';
    })


})

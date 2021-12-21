const holes = $('.hole'); //trous
const scoreBoard = $('.score');
const moles = $('.mole'); //taupe
let lastHole = 0;

//choose random holes
function randomHole() {
    const r = Math.floor(Math.random() * 6);
    return $(holes.get(r));
}

//up the hole
function hello () {
    const hole = randomHole();
    hole.addClass('up');
    holes.fadeTo(800);
    holes.click(function (){
        $(this).removeClass('up');
        scoreBoard.text(parseInt(scoreBoard.text())+1);
    });
}

//calcul the time

setTimeout(function(){
    let time = 0;
    time++;
    if (time === 10) {
        clearTimeout()
        alert('fin de partie');
    }
});

$('button').click(function startGame(){
    if( $('.hole.up').get().length === 0) {
        lastHole = 0;
        scoreBoard.text(0);
        hello();
    }
});
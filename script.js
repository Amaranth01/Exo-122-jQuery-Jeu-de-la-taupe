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
    setInterval(function (){
        Math.floor(Math.random() * 600 + 200);
    },1000)
    holes.click(function (){
        $(this).removeClass('up');
        scoreBoard.text(parseInt(scoreBoard.text())+1);
    });
}

//calcul the time
let time = 0
function timerChange(){
    setTimeout(function (){
        time--;
        if(time > 0){
            timerChange();
        }
        else if(time === 0) {
            alert('connasse de taupe !');
            location.reload();
        }
        console.log(time);
    },1000);
}

$('button').click(function startGame(){
    if( $('.hole.up').get().length === 0) {
        lastHole = 0;
        scoreBoard.text(0);
        hello();
        timerChange();
    }

    let time = 0;
    function timerChange(){
        setTimeout(function (){
            time--;
            if(time > 0){
                timerChange();
            }
            else if(time === 0) {
                alert('connasse de taupe !');
                location.reload();
            }
        },1000);
    }
    timerChange();
});
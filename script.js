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
    setTimeout(function (){
        hole.addClass('up');
    },10);


    holes.click(function (){
        $(this).removeClass('up');
        scoreBoard.text(parseInt(scoreBoard.text())+1);
    });
}

$('button').click(function startGame(){
    if( $('.hole.up').get().length === 0) {
        lastHole = 0;
        scoreBoard.text(0);

        //calcul the time
        let time = 10;
        let interval = setInterval(function (){
            hello();
            if(time > 0){
                time--;
            }
            else {
                clearInterval(interval);
            }
        },1000);
    }

});

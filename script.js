const holes = $('.hole');
const scoreBoard = $('.score');
const moles = $('.mole');

//choose random holes
function randomHole() {
    const r = Math.floor(Math.random() * 6);
    return $(holes.get(r));
}

//up the hole
function hello () {
    const hole = randomHole();
    //calcul for the speed
    let speed = Math.floor(Math.random()*(1000-200) +200 )
    setTimeout(function (){
        hole.addClass('up');
    },speed);
}
//down the moles and add the score
moles.click(function (){
    $(this).removeClass('up');
    scoreBoard.text(parseInt(scoreBoard.text())+1);
});

$('button').click(function startGame(){
    if( $('.hole.up').get().length === 0) {
        scoreBoard.text(0);

        //calcul the time of the party
        let time = 10;
        let interval = setInterval(function (){
            hello();
            holes.removeClass('up');
            if(time > 0){
                time--;
            }
            else {
                clearInterval(interval);
            }
        },1000);
    }
});
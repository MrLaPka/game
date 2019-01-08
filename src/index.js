import res from './res.js';
import spr from './sprite.js';
res();
spr();

let requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

// Create the canvas
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 1300;
canvas.height = 700;
document.body.appendChild(canvas);

// The main game loop

let windowName;
let nameArea;
let enteredNameYet = false;
let startMenu = document.createElement('div');
startMenu.style.width = 1900+'px';
startMenu.style.height = 930+'px';
startMenu.align = 'center';
startMenu.style.background = "url(img/fon_lenty_radiaciya_opasnost_stena_18526_1280x1280[1].jpg)";
startMenu.style.backgroundSize = "100%";

let playButton = document.createElement('button');
playButton.innerText = "Play";
playButton.style.backgroundColor = "yellow";
playButton.style.width = 200+'px';
playButton.style.height = 90+'px';
startMenu.appendChild(playButton);
let scoreButton = document.createElement('button');
scoreButton.innerText = "Score";
scoreButton.style.backgroundColor = "yellow";
scoreButton.style.width = 200+'px';
scoreButton.style.height = 90+'px';
startMenu.appendChild(scoreButton);
let screenButton = document.createElement('button');
screenButton.innerText = "A screenshot of gameplay";
screenButton.style.backgroundColor = "yellow";
screenButton.style.width = 200+'px';
screenButton.style.height = 90+'px';
startMenu.appendChild(screenButton);
document.body.appendChild(startMenu);
function init() {
    startMenu.style.display = 'block';
screenButton.addEventListener('click',function(){
screenButton.style.display ='none';
playButton.style.display ='none';
scoreButton.style.display ='none';
startMenu.style.position = 'absolute';
let imageGameplay = document.createElement('img');
imageGameplay.src = 'img/Gameplay.jpg';
imageGameplay.style.position = 'absolute';
imageGameplay.style.zIndex = '1000';
imageGameplay.style.align = 'center';
document.body.appendChild(imageGameplay);
});
playButton.addEventListener('click',function(){
    startMenu.style.display = 'none';
    canvas.style.display = 'block';
    enterName();
});
}

resources.load([
    'img/terrain.png'
]);
resources.onReady(init);  
// Game state


function toRun(){
    //document.getElementById('instructions').style.display = 'block';
    let playInGame = document.createElement('div');
    playInGame.style.marginTop = '100px';
    playInGame.style.marginLeft= '300px';
    playInGame.style.width = '1300px';
    playInGame.style.height = '700px';
    playInGame.style.background = "url(img/terrain.png)";
    playInGame.style.backgroundSize = "100%";
    playInGame.style.position = "absolute";
    let gg = document.createElement('div');
    let monster = document.createElement('div');
    let spellBook = document.createElement('button');
    ggRender(gg);
    spellBookButtonRender(spellBook);
    monsterRender(monster);
    document.body.appendChild(playInGame);
    document.body.appendChild(gg);
    document.body.appendChild(spellBook);
    document.body.appendChild(monster);
    spellBook.addEventListener('click', function(){
        spellBookRender();

    })
}


function monsterRender(monster){
let monsterHeaders = ["img/monster1.png,img/monster2.png,img/monster3.png"];
monster.style.position = "absolute";
monster.style.zIndex = "1000";
monster.style.marginLeft = "750px";
monster.style.marginTop = "400px";
monster.style.width = '175px';
monster.style.height = '160px';
monster.style.backgroundSize = '100%';
}

function ggRender(gg){
gg.style.position = "absolute";
gg.style.zIndex = "1000";
gg.style.marginLeft = "350px";
gg.style.marginTop = "400px";
gg.style.width = '175px';
gg.style.height = '160px';
gg.style.background = "url(img/gg.png)";
gg.style.backgroundSize = '100%';
}

function spellBookButtonRender(spellBook){
    spellBook.innerText = "Spellbook";
    spellBook.style.marginLeft = "940px";
    spellBook.style.marginTop = '130px';
    spellBook.style.position = "absolute";
    spellBook.style.zIndex = "1000";

}

function spellBookRender(){
    let spellBookMain = document.createElement('div');
    spellBookMain.style.marginTop = '20px';
    spellBookMain.style.marginLeft= '450px';
    spellBookMain.style.zIndex = "1000";
    spellBookMain.style.width = '1050px';
    spellBookMain.style.height = '800px';
    spellBookMain.style.background = "url(img/spellbook.png)";
    spellBookMain.style.backgroundSize = "100%";
    spellBookMain.style.position = "absolute";
    let pToChoose = document.createElement('p');
    pToChoose.innerText = 'Please select a spell';
    pToChoose.style.align = 'center';
    pToChoose.style.display = 'block';
    pToChoose.style.paddingTop = '180px';
    pToChoose.style.paddingLeft= '225px';
    pToChoose.style.fontSize = '40px';
    pToChoose.style.fontFamily = 'COMMERCIALSCRIPT BT';
    pToChoose.style.color = '#0000ff';
    spellBookMain.appendChild(pToChoose);
    let ariphmeticButton = document.createElement('button');
    ariphmeticButton.innerText = "Solve the example";
    ariphmeticButton.style.display = 'inline-block';
    ariphmeticButton.style.backgroundColor = "yellow";
    ariphmeticButton.style.width = 200+'px';
    ariphmeticButton.style.height = 90+'px';
    ariphmeticButton.style.marginLeft= '250px';
    spellBookMain.appendChild(ariphmeticButton);
    let puzzleButton = document.createElement('button');
    puzzleButton.innerText = "Guess the puzzle";
    puzzleButton.style.display = 'inline-block';
    puzzleButton.style.backgroundColor = "yellow";
    puzzleButton.style.width = 200+'px';
    puzzleButton.style.height = 90+'px';         
    puzzleButton.style.marginLeft= '100px';
    spellBookMain.appendChild(puzzleButton);
    document.body.appendChild(spellBookMain);
}

function enterName() {
    if(!enteredNameYet){
    windowName = document.createElement('div');
    windowName.style.display = 'none';
    windowName.style.zIndex = '1';
    windowName.style.bottom = '0';
    windowName.style.right = '0';
    windowName.style.left = '0';
    windowName.style.top = '0';
    windowName.style.position = 'absolute';
    windowName.style.height = '200px';
    windowName.style.width = '512px';
    windowName.style.margin = 'auto';
    windowName.style.backgroundColor = 'black';
    windowName.style.opacity = '.5';
    windowName.style.color = 'white';
    windowName.style.textAlign = 'center';
    windowName.style.display = 'block';
    let enterH2 = document.createElement('h2');
    enterH2.style.fontSize = '3em';
    enterH2.style.fontFamily = 'sans-serif';
    enterH2.innerText = "Enter your name: ";
    nameArea = document.createElement('textarea');
    nameArea.setAttribute("required",true);
    let enterButton = document.createElement('button');
    enterButton.innerText = "Enter";
    enterButton.style.fontSize = '1.5em';
    windowName.appendChild(enterH2);
    windowName.appendChild(nameArea);
    windowName.appendChild(enterButton);
    document.body.appendChild(windowName);
    enterButton.addEventListener('click',function(){
        enteredNameYet = true;
        windowName.style.display = 'none';
        toRun();
    })
}
else{
    toRun();
}
}




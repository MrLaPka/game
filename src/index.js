import res from './res.js';
import spr from './sprite.js';
import getMonsterName from './randomName.js';
import getOperation from './ariphmeticTask.js';
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

init();

let hpGg;
let hpMonster;

function toRun(){
    let playInGame = document.createElement('div');
    playInGame.style.marginTop = '100px';
    playInGame.style.marginLeft= '300px';
    playInGame.style.width = '1400px';
    playInGame.style.height = '700px';
    playInGame.style.background = "url(img/terrain.png)";
    playInGame.style.backgroundSize = "100%";
    playInGame.style.position = "absolute";
    let gg = document.createElement('div');
    let monster = document.createElement('div');
    let spellBook = document.createElement('button');
    hpGg = 201;
    hpMonster = 201;
    ggRender(gg);
    spellBookButtonRender(spellBook);
    monsterRender(monster);
    interfaceGgRender(hpGg);
    interfaceMonsterRender(hpMonster);
    document.body.appendChild(playInGame);
    document.body.appendChild(gg);
    document.body.appendChild(spellBook);
    document.body.appendChild(monster);
    spellBook.addEventListener('click', function(){
        spellBook.disabled = true;
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

function interfaceGgRender(hpGg){  
let hp = document.createElement('div');
hp.style.marginTop = '150px';
hp.style.marginLeft = '330px';
hp.id = 'gghp'; 
hp.style.width = hpGg+'px';
hp.style.height = '20px';
hp.style.background = "repeating-linear-gradient(-45deg,#606dbc,#606dbc 10px,#465298 10px,#465298 20px)";
hp.style.zIndex = '1000';
hp.style.display = "inline-block";
hp.style.position = "absolute";
document.body.appendChild(hp);
let nameGg = document.createElement('div');
nameGg.style.marginTop = '70px';
nameGg.style.marginLeft = '350px'; 
nameGg.style.width = '300px';
nameGg.style.height = '30px';
nameGg.style.zIndex = '1000';
nameGg.style.display = "inline-block";
nameGg.style.position = "absolute";
let pName = document.createElement('p');
pName.innerText = nameArea.value;
pName.style.color = 'white';
pName.style.fontSize = '30px';
pName.style.fontFamily = 'matura mt script capitals';
nameGg.appendChild(pName);
document.body.appendChild(nameGg);
}

function interfaceMonsterRender(hpMonster){  
    let hp = document.createElement('div');
    hp.style.marginTop = '150px';
    hp.id = 'monsterhp';
    hp.style.marginLeft = '1370px'; 
    hp.style.width = hpMonster+'px';
    hp.style.height = '20px';
    hp.style.background = "repeating-linear-gradient(45deg,#606dbc,#606dbc 10px,#465298 10px,#465298 20px)";
    hp.style.zIndex = '1000';
    hp.style.display = "inline-block";
    hp.style.position = "absolute";
    document.body.appendChild(hp);
    let nameMonster = document.createElement('div');
    nameMonster.style.marginTop = '70px';
    nameMonster.style.marginLeft = '1270px'; 
    nameMonster.style.width = '400px';
    nameMonster.style.height = '30px';
    nameMonster.style.zIndex = '1000';
    nameMonster.style.display = "inline-block";
    nameMonster.style.position = "absolute";
    let pName = document.createElement('p');
    pName.innerText = getMonsterName();
    pName.style.color = 'white';
    pName.style.fontSize = '30px';
    pName.style.fontFamily = 'matura mt script capitals';
    nameMonster.appendChild(pName);
document.body.appendChild(nameMonster);
    }
    

function spellBookButtonRender(spellBook){
    spellBook.innerText = "Spellbook";
    spellBook.style.marginLeft = "940px";
    spellBook.style.marginTop = '130px';
    spellBook.style.position = "absolute";
    spellBook.style.zIndex = "1000";
    spellBook.id = 'spellbook';

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
    ariphmeticButton.addEventListener('click',function(){
    taskGeneration();
    spellBookMain.style.display = 'none';
    });
    spellBookMain.appendChild(ariphmeticButton);
    let puzzleButton = document.createElement('button');
    puzzleButton.innerText = "Guess the puzzle";
    puzzleButton.style.display = 'inline-block';
    puzzleButton.style.backgroundColor = "yellow";
    puzzleButton.style.width = 200+'px';
    puzzleButton.style.height = 90+'px';         
    puzzleButton.style.marginLeft= '100px';
    puzzleButton.addEventListener('click',function(){

    });
    spellBookMain.appendChild(puzzleButton);
    document.body.appendChild(spellBookMain);
}

let numberTask;

function taskGeneration(){
    let taskWindow = document.createElement('div');
    taskWindow.style.display = 'none';
    taskWindow.style.zIndex = '1';
    taskWindow.style.bottom = '0';
    taskWindow.style.right = '0';
    taskWindow.style.left = '0';
    taskWindow.style.top = '0';
    taskWindow.style.position = 'absolute';
    taskWindow.style.height = '400px';
    taskWindow.style.width = '512px';
    taskWindow.style.margin = 'auto';
    taskWindow.style.backgroundColor = 'black';
    taskWindow.style.opacity = '.5';
    taskWindow.style.color = 'white';
    taskWindow.style.textAlign = 'center';
    taskWindow.style.display = 'block';
    let enterH2 = document.createElement('h2');
    enterH2.style.fontSize = '3em';
    enterH2.style.fontFamily = 'sans-serif';
    enterH2.innerText = "Write the solution in an empty field";
    let capacity = 2;
    let task = document.createElement('h3');
    task.style.fontFamily = 'sans-serif';
    numberTask = getOperation(capacity);
    task.innerText = numberTask;
    let solutionArea = document.createElement('textarea');
    solutionArea.setAttribute("required",true);
    let enterButton = document.createElement('button');
    enterButton.innerText = "Enter";
    enterButton.style.fontSize = '1.5em';
    taskWindow.appendChild(enterH2);
    taskWindow.appendChild(task);
    taskWindow.appendChild(solutionArea);
    taskWindow.appendChild(enterButton);
    document.body.appendChild(taskWindow);
    enterButton.addEventListener('click',function(){
        if(solutionArea.value.match(/\D/g) || !solutionArea.value.match(/\d/) ){
        alert("Please enter correctly you solution to continue!");
        }
        else{
        check(parseInt(solutionArea.value));
        taskWindow.style.display = 'none';
        document.getElementById('spellbook').disabled = false;
        }
    })
}

function check(solution){
Math.round(solution);
let taskArr = numberTask.split(' ');
let firstNumber = Math.round(parseInt(taskArr[0]));
let secondNumber = Math.round(parseInt(taskArr[2]));
let trueAnswer = 0;
if(taskArr[1] == '+'){
    trueAnswer = firstNumber+secondNumber;
}
else if(taskArr[1] == '-'){
    trueAnswer = firstNumber-secondNumber;
}

else if(taskArr[1] == '*'){
    trueAnswer = firstNumber*secondNumber;
}
if(solution === trueAnswer){
    faerbolRender();   
}
else if(solution != trueAnswer){
    monsterFaerbolRender();
}
}

function faerbolRender(){
    let faerbol = document.createElement('img');
    faerbol.src = 'img/faerbol.gif';
    faerbol.style.width = '160px';
    faerbol.style.height = '70px';
    faerbol.style.position = 'absolute';
    faerbol.style.zIndex = '1000';
    faerbol.style.marginLeft = '410px';
    faerbol.style.marginTop = '458px';
    document.body.appendChild(faerbol);
    $(faerbol).animate({left: "+=800"}, 2000);
    $(faerbol).queue(function() {
        $(this).hide();
        $(this).dequeue();
        });
        $(faerbol).queue(function() {
        hpMonster -= 67;
        document.getElementById('gghp').style.width= hpMonster + 'px';
        $(this).dequeue();
        }); 
}

function monsterFaerbolRender(){
    let faerbol = document.createElement('img');
    faerbol.src = 'img/monsterfaerbol1.gif';
    faerbol.style.width = '160px';
    faerbol.style.height = '70px';
    faerbol.style.position = 'absolute';
    faerbol.style.zIndex = '1000';
    faerbol.style.marginLeft = '1250px';
    faerbol.style.marginTop = '458px';
    document.body.appendChild(faerbol);
    $(faerbol).animate({left: "-=815"}, 2000);
    $(faerbol).queue(function() {
        $(this).hide();
        $(this).dequeue();
        });
    $(faerbol).queue(function() {
        hpGg -= 67;
        document.getElementById('gghp').style.width= hpGg + 'px';
        $(this).dequeue();
        });
}

function enterName() {
    if(!enteredNameYet){
    windowName = document.createElement('div');
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
        if(!nameArea.value.match(/\w/)){
        alert("Please enter you nickname to continue!")
        }
        else{
        enteredNameYet = true;
        windowName.style.display = 'none';        
        toRun();
        }
    })
}
else{
    toRun();
}
}

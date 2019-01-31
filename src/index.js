import getMonsterName from './randomName.js';
import getOperation from './ariphmeticTask.js';
import monsterRender from './monsterGeneration.js';
const riddles = {
    "mouse":  `I live in the house.
    I eat everything.
    I am small and grey.
    Cats eat me.`,

    "pig":  `I oink.
    I give you bacon.
    I like mud and dirt.
    I am pink.`,

    "cat":  `I am a pet.
    I like mice.
    I have nine lives.
    I purr and meow.`,

    "dog":  `I’m a pet that has four legs
    And a tail at the end
    You might hear me barking
    And I’m known as man’s best friend.`,

    "rain":  `I am asked to come,
    I am waited for;
    But I make you hide
    When I knock at the door.`,

    "frost":  `Without hands it can paint,
    Without teeth it can bite.`,

    "watermelon":  `I am one color outside.
    I am another color inside.
    I grow in the summer.
    I am sweet.
    You cannot eat my outside.
    My skin has stripes.`
};

const keys = Object.keys(riddles);

function randomRiddles(){
    return riddles[keys[Math.floor(Math.random() * keys.length)]];
}


function getKeyByValue( obj, value ) {
    for (let prop in obj) {
        if( obj.hasOwnProperty( prop ) ) {
             if( obj[ prop ] === value )
                 return prop;
        }
    }
}



// The main game loop
let beginGame = true;
let users = 0;
let score;
let windowName;
let nameArea;
let tableScore = [];
let enteredNameYet = false;
let playerName = [];
let startMenu = document.createElement('div');
startMenu.style.width = 1900+'px';
startMenu.style.height = 930+'px';
startMenu.align = 'center';
startMenu.style.background = "url(img/fon_lenty_radiaciya_opasnost_stena_18526_1280x1280[1].jpg)";
startMenu.style.backgroundSize = "100%";
let isMainaudio = true;

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
let audio = document.createElement('div');
let innerAudio = `<object width="0" height="0" align="center" id = "mainaudio">
<param name="movie" value="audio/BGsound.mp3">
<embed src="audio/BGsound.mp3"
autostart="true"
width="0"
height="0"
align="center"
type="audio/mid"
pluginspage="http://www.macromedia.com/go/getflashplayer">
</object>`;
audio.innerHTML = innerAudio;
startMenu.appendChild(audio);
document.body.appendChild(startMenu);


function init() {
scoreButton.addEventListener('click', function(){
    let additionalWindow = document.createElement('div');
    additionalWindow.id = 'additionalWindow';
    additionalWindow.style.position = 'absolute';
    additionalWindow.style.width = 1900+'px';
    additionalWindow.style.height = 930+'px';
    screenButton.style.display ='none';
    playButton.style.display ='none';
    scoreButton.style.display ='none';
    startMenu.style.position = 'absolute';
    if(users){
    let scoreTable = document.createElement('table');
    let trName = document.createElement('tr');
    let tdName = document.createElement('td');
    tdName.innerText = 'Name';
    trName.appendChild(tdName);
    let tdScore = document.createElement('td');
    tdScore.innerText = 'Score';
    trName.appendChild(tdScore);
    scoreTable.appendChild(trName);
    for(let i = 0;i<users;i++){
    let trToTh = document.createElement('tr');
    let tdToName = document.createElement('td');
    tdToName.innerText = playerName[i];
    trToTh.appendChild(tdToName);
    let tdToScore = document.createElement('td');
    tdToScore.innerText = tableScore[i];
    trToTh.appendChild(tdToScore);
    scoreTable.appendChild(trToTh);
    }
    scoreTable.style.position = 'relative';
    scoreTable.style.zIndex = '1000';
    additionalWindow.style.display = 'block';
    scoreTable.style.margin = 'auto';
    additionalWindow.appendChild(scoreTable);  
}
document.body.appendChild(additionalWindow);
createReturnButton();
})
startMenu.style.display = 'block';
screenButton.addEventListener('click',function(){
let additionalWindow = document.createElement('div');
additionalWindow.id = 'additionalWindow';
additionalWindow.style.position = 'absolute';
additionalWindow.style.width = 1900+'px';
additionalWindow.style.height = 930+'px';
additionalWindow.style.top = 0;
screenButton.style.display ='none';
playButton.style.display ='none';
scoreButton.style.display ='none';
startMenu.style.position = 'absolute';
let imageGameplay = document.createElement('img');
imageGameplay.src = 'img/Gameplay.jpg';
imageGameplay.style.position = 'absolute';
imageGameplay.style.zIndex = '1000';
imageGameplay.style.align = 'center';
additionalWindow.style.display = 'block';
additionalWindow.appendChild(imageGameplay);
document.body.appendChild(additionalWindow);
createReturnButton();
});
playButton.addEventListener('click',function(){
    startMenu.style.display = 'none';
    document.getElementById('info').display = 'none';
    isMainaudio = true;
    enterName();
});
}
function startTheGame(){
if(beginGame === true)
init();
}
startTheGame();

let hpGg = 201;
let hpMonster = hpGg;

function createReturnButton(){
    let ReturnButton = document.createElement('button');
    ReturnButton.innerHTML = "&#9668";
    ReturnButton.style.backgroundColor = "yellow";
    ReturnButton.style.width = 50+'px';
    ReturnButton.style.height = 25+'px';
    ReturnButton.style.position = 'absolute';
    ReturnButton.style.zIndex = '1000';
    ReturnButton.addEventListener('click', function(){
        ReturnButton.remove();
        document.getElementById('additionalWindow').remove();
        screenButton.style.display = 'inline-block';
        playButton.style.display = 'inline-block';
        scoreButton.style.display = 'inline-block';
    })
    document.body.appendChild(ReturnButton);   
}

function toRun(){
    if(isMainaudio){
    document.getElementById("mainaudio").remove();
    }
    let globalPlayWindow = document.createElement('div');
    globalPlayWindow.id = 'globalPlayWindow';
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
    globalPlayWindow.appendChild(playInGame);
    globalPlayWindow.appendChild(gg);
    globalPlayWindow.appendChild(spellBook);
    globalPlayWindow.appendChild(monster);
    let audioPlay = document.createElement('div');
    audioPlay.innerHTML = `<object width="0" height="0" align="center" id = "mortalCombat">
                                   <param name="movie" value="audio/glavnaya-tema-iz-8-bitnoy-igry-mortal-kombat.mp3">
                                   <embed src="audio/glavnaya-tema-iz-8-bitnoy-igry-mortal-kombat.mp3"
                                   autostart="true"
                                   loop = "true"
                                   width="0"
                                   height="0"
                                   align="center"
                                   type="audio/mid"
                                    pluginspage="http://www.macromedia.com/go/getflashplayer">
                                    </object>`;
    globalPlayWindow.appendChild(audioPlay);
    document.body.appendChild(globalPlayWindow);
    ggRender(gg);
    spellBookButtonRender(spellBook);
    monsterRender(monster);
    interfaceGgRender(hpGg);
    interfaceMonsterRender(hpMonster);
    spellBook.addEventListener('click', function(){
        spellBook.disabled = true;
        spellBookRender();
    })
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
document.getElementById('globalPlayWindow').appendChild(hp);
let nameGg = document.createElement('div');
nameGg.style.marginTop = '70px';
nameGg.style.marginLeft = '350px'; 
nameGg.style.width = '300px';
nameGg.style.height = '30px';
nameGg.style.zIndex = '1000';
nameGg.style.display = "inline-block";
nameGg.style.position = "absolute";
nameGg.id = 'namegg';
let pName = document.createElement('p');
pName.innerText = nameArea.value;
pName.style.color = 'white';
pName.style.fontSize = '30px';
pName.style.fontFamily = 'matura mt script capitals';
nameGg.appendChild(pName);
document.getElementById('globalPlayWindow').appendChild(nameGg);
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
    document.getElementById('globalPlayWindow').appendChild(hp);
    let nameMonster = document.createElement('div');
    nameMonster.style.marginTop = '70px';
    nameMonster.style.marginLeft = '1270px'; 
    nameMonster.style.width = '400px';
    nameMonster.style.height = '30px';
    nameMonster.style.zIndex = '1000';
    nameMonster.style.display = "inline-block";
    nameMonster.style.position = "absolute";
    nameMonster.id = 'namemonster';
    let pName = document.createElement('p');
    pName.innerText = getMonsterName();
    pName.style.color = 'white';
    pName.style.fontSize = '30px';
    pName.style.fontFamily = 'matura mt script capitals';
    nameMonster.appendChild(pName);
document.getElementById('globalPlayWindow').appendChild(nameMonster);
    }
    

function spellBookButtonRender(spellBook){
    spellBook.innerText = "Spellbook";
    spellBook.style.marginLeft = "940px";
    spellBook.style.marginTop = '130px';
    spellBook.style.position = "absolute";
    spellBook.style.zIndex = "1010";
    spellBook.id = 'spellbutton';

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
    spellBookMain.id ='spellbook';
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
    riddlesGeneration();
    spellBookMain.style.display = 'none';
    });
    spellBookMain.appendChild(puzzleButton);
    document.getElementById('globalPlayWindow').appendChild(spellBookMain);
}

let numberTask;
let capacity = 1;

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
    document.getElementById('globalPlayWindow').appendChild(taskWindow);
    enterButton.addEventListener('click',function(){
        if(solutionArea.value.match(/\D/g) || !solutionArea.value.match(/\d/) ){
        alert("Please enter correctly you solution to continue!");
        }
        else{
        check(parseInt(solutionArea.value));
        taskWindow.style.display = 'none';
        document.getElementById('spellbook').remove();
        }
    })
}

function riddlesGeneration(){
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
    enterH2.innerText = "Write the solution in small letters in an empty field";
    let task = document.createElement('h3');
    task.style.fontFamily = 'sans-serif';
    numberTask = randomRiddles();
    task.innerText = String(numberTask);
    let solutionArea = document.createElement('textarea');
    solutionArea.setAttribute("required",true);
    let enterButton = document.createElement('button');
    enterButton.innerText = "Enter";
    enterButton.style.fontSize = '1.5em';
    taskWindow.appendChild(enterH2);
    taskWindow.appendChild(task);
    taskWindow.appendChild(solutionArea);
    taskWindow.appendChild(enterButton);
    document.getElementById('globalPlayWindow').appendChild(taskWindow);
    enterButton.addEventListener('click',function(){     
        checkSolutionRiddle(solutionArea.value);
        taskWindow.style.display = 'none';
        document.getElementById('spellbook').remove();
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

function checkSolutionRiddle(solution){
if(getKeyByValue(riddles, numberTask) == solution){
    faerbolRender();
}
else if(getKeyByValue(riddles, numberTask) != solution){
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
    faerbol.style.marginTop = '430px';
    document.getElementById('globalPlayWindow').appendChild(faerbol);
    $(faerbol).animate({left: "+=940"}, 2000);
    $(faerbol).queue(function() {
        $(this).hide();
        $(this).dequeue();
        });
        $(faerbol).queue(function() {
        hpMonster -= 67;
        document.getElementById('monsterhp').style.width= hpMonster + 'px';
        if(hpMonster == 0){
            document.getElementById('mortalCombat').remove();
            let audioMonsterDie = `<object width="0" height="0" align="center"style="position:relative;" id = "MonsterDie">
                                   <param name="movie" value="audio/krik-orka.mp3">
                                   <embed src="audio/krik-orka.mp3"
                                   autostart="true"
                                   width="0"
                                   height="0"
                                   align="center"
                                   type="audio/mid"
                                    pluginspage="http://www.macromedia.com/go/getflashplayer">
                                    </object>`;
            document.getElementById('globalPlayWindow').innerHTML += audioMonsterDie;
            setTimeout(endWindow,1500);
        }
        else{
            document.getElementById('spellbutton').disabled = false;
        }
        $(this).dequeue();
        });
    let audioGetDamage = document.createElement('div');
        $(faerbol).queue(function() {
            audioGetDamage.innerHTML = `    <object width="0" height="0" align="center" style="position:relative;" id = "getdamage">
                                   <param name="movie" value="audio/muzhskie-stony (mp3cut.ru).mp3">
                                   <embed src="audio/muzhskie-stony (mp3cut.ru).mp3"
                                   autostart="true"
                                   width="0"
                                   height="0"
                                   align="center"
                                   type="audio/mid"
                                   pluginspage="http://www.macromedia.com/go/getflashplayer">
                                   </object>`;
            document.getElementById('globalPlayWindow').appendChild(audioGetDamage);
            faerbol.remove();
            $(this).dequeue();
            });
    $(audioGetDamage).queue(function () {
        audioGetDamage.remove();
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
    faerbol.style.marginTop = '430px';
    document.getElementById('globalPlayWindow').appendChild(faerbol);
    $(faerbol).animate({left: "-=815"}, 2000);
    $(faerbol).queue(function() {
        $(this).hide();
        $(this).dequeue();
        });
    $(faerbol).queue(function() {
        hpGg -= 67;
        document.getElementById('gghp').style.width= hpGg + 'px';
        if(hpGg == 0){
            document.getElementById('mortalCombat').remove();
            endWindow();
            }
        else{
            document.getElementById('spellbutton').disabled = false;
        }
        $(this).dequeue();
        });
    let audioGetDamage = document.createElement('div');
    $(faerbol).queue(function() {
        audioGetDamage.innerHTML = `    <object width="0" height="0" align="center" id = "getdamage">
                                   <param name="movie" value="audio/muzhskie-stony (mp3cut.ru).mp3">
                                   <embed src="audio/muzhskie-stony (mp3cut.ru).mp3"
                                   autostart="true"
                                   width="0"
                                   height="0"
                                   align="center"
                                   type="audio/mid"
                                   pluginspage="http://www.macromedia.com/go/getflashplayer">
                                   </object>`;
        document.getElementById('globalPlayWindow').appendChild(audioGetDamage);
            faerbol.remove();
            $(this).dequeue();
            });
    $(audioGetDamage).queue(function () {
        audioGetDamage.remove();
        $(this).dequeue();
    });
}

function enterName() {
    if(!enteredNameYet){
    score = 0;
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
        playerName[users] = nameArea.value;
        tableScore[users] = score; 
        users += 1; 
        windowName.style.display = 'none';        
        toRun();
        }
    })
}
else{
    toRun();
}
}
function endWindow(){
    score = Math.floor((201 - hpMonster)/2);
    tableScore[users-1] += score;
    score = 0;
    let windowEnd = document.createElement('div');
    windowEnd.style.zIndex = '1';
    windowEnd.style.bottom = '0';
    windowEnd.style.right = '0';
    windowEnd.style.left = '0';
    windowEnd.style.top = '0';
    windowEnd.style.position = 'absolute';
    windowEnd.style.height = '200px';
    windowEnd.style.width = '512px';
    windowEnd.style.margin = 'auto';
    windowEnd.style.backgroundColor = 'black';
    windowEnd.style.opacity = '.5';
    windowEnd.style.color = 'white';
    windowEnd.style.textAlign = 'center';
    windowEnd.style.display = 'block';
    let enterH2 = document.createElement('h2');
    enterH2.style.fontSize = '3em';
    enterH2.style.fontFamily = 'sans-serif';
    if(hpMonster === 0){
    if(capacity<3){
        capacity+=1;
        }
        windowEnd.innerHTML += `<object width="0" height="0" align="center" id = "victory">
                                   <param name="movie" value="audio/Sound_15630.mp3">
                                   <embed src="audio/Sound_15630.mp3"
                                   autostart="true"
                                   width="0"
                                   height="0"
                                   align="center"
                                   type="audio/mid"
                                    pluginspage="http://www.macromedia.com/go/getflashplayer">
                                    </object>`;
    enterH2.innerText = "VICTORY";
    let NextRoundButton = document.createElement('button');
    NextRoundButton.innerText = "NEXT ROUND";
    NextRoundButton.style.fontSize = '1.5em';
    windowEnd.appendChild(enterH2);
    windowEnd.appendChild(NextRoundButton);
    NextRoundButton.addEventListener('click',function(){
        windowEnd.remove();
        hpGg = 201;
        hpMonster = hpGg;
        document.getElementById('globalPlayWindow').remove();
        isMainaudio = false;
        toRun();
    }); 
    }
    else{
    windowEnd.innerHTML += `<object width="0" height="0" align="center" id = "fail">
                                <param name="movie" value="audio/pole_chudes_-_zvuk_proigrysha_(SongHouse.me).mp3">
                                <embed src="audio/pole_chudes_-_zvuk_proigrysha_(SongHouse.me).mp3"
                                autostart="true"
                                width="0"
                                height="0"
                                align="center"
                                type="audio/mid"
                                pluginspage="http://www.macromedia.com/go/getflashplayer">
                                </object>`;
    enterH2.innerText = "GAME OVER!";
    let ScorePlace = document.createElement('h3');
    ScorePlace.innerText = "Score: " + tableScore[users - 1];
    ScorePlace.style.fontFamily = 'sans-serif';   
    let playAgainButton = document.createElement('button');
    playAgainButton.innerText = "PLAY AGAIN";
    playAgainButton.style.fontSize = '1.5em';
    windowEnd.appendChild(enterH2);
    windowEnd.appendChild(ScorePlace); 
    windowEnd.appendChild(playAgainButton);
    playAgainButton.addEventListener('click',function(){
        windowEnd.remove();
        hpGg = 201;
        hpMonster = hpGg;
        document.getElementById('globalPlayWindow').remove();
        isMainaudio = false;
        toRun();
        }); 
    }
    let mainMenuButton = document.createElement('button');
    mainMenuButton.innerText = "MENU";
    mainMenuButton.style.fontSize = '1.5em';
    windowEnd.appendChild(mainMenuButton);
    document.body.appendChild(windowEnd);
    beginGame = false;
    mainMenuButton.addEventListener('click',function(){
        if(hpGg === 0){
        let cnf = confirm("If you exit the menu, the game will start again. Continue?");
        if(cnf){
        enteredNameYet = false;
        capacity = 1;
        hpGg = 201;
        hpMonster = hpGg;
        windowEnd.remove();
        document.getElementById('globalPlayWindow').remove();
        startMenu.style.display = 'block';
        document.getElementById('info').display = 'block'
        audio.innerHTML = innerAudio;
        }
    }
    else if (hpMonster === 0){
        hpGg = 201;
        hpMonster = hpGg;
        windowEnd.remove();
        document.getElementById('globalPlayWindow').remove();
        startMenu.style.display = 'block';
        audio.innerHTML = innerAudio;
    }
        });   
}
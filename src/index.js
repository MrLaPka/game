import getMonsterName from './randomName.js';
import getOperation from './ariphmeticTask.js';
import monsterRender from './monsterGeneration.js';
import randomBackground from './backgroundsGeneration.js';
import ggRender from './ggRender.js';
import interfaceGgRender from './interfaceGgRender.js';
import interfaceMonsterRender from './interfaceMonsterRender.js';
import spellBookButtonRender from './spellBookButtonRender.js';

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

    "spider": `I am small.
    I can be scary.
    I have eight legs.
    I spin a web.`,

    "rainbow": `I am purple, yellow, red, and green
    The King cannot reach me and neither can the Queen.
    I show my colours after the rain
    And only when the sun comes out again.`,

    "sky": `Higher than a house,
    Higher than a tree –
    Oh, whatever can that be?`,

    "potato": `I am the most popular vegetable.
    I grow underground.
    I cannot be eaten raw.
    You can cook me in many ways.
    Children adore me.`,

    "teacher": `I use markers or chalk.
    I work in a school.
    I have students.
    I give homework.`,

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
let startFaerbol = document.createElement('img');
startFaerbol.src = 'img/rotate.gif'
startFaerbol.style.width = '31.250em';
startFaerbol.style.height = '43.750em';
startFaerbol.style.zIndex  = '1010';
startFaerbol.style.margin  = 'auto';
startFaerbol.style.display = 'block';
let startMenu = document.createElement('div');
startMenu.style.width = 100+'%';
startMenu.style.height = 100+'%';
startMenu.align = 'center';
startMenu.style.background = "url(img/fon_lenty_radiaciya_opasnost_stena_18526_1280x1280[1].jpg)";
startMenu.style.backgroundSize = "100%";
let isMainaudio = true;
const information = document.getElementById("info");
let getDamageYet = false;
let nameOfGame = document.createElement('h1');
nameOfGame.innerText = 'MONSTER KILL';
nameOfGame.id = 'nameOfGame';
startMenu.appendChild(nameOfGame);
let playButton = document.createElement('button');
playButton.innerText = "Play";
playButton.style.width = '12.500em';
playButton.style.height = '5.625em';
startMenu.appendChild(playButton);
let scoreButton = document.createElement('button');
scoreButton.innerText = "Score";
scoreButton.style.width = '12.500em';
scoreButton.style.height = '5.625em';
startMenu.appendChild(scoreButton);
let screenButton = document.createElement('button');
screenButton.innerText = "A screenshot of gameplay";
screenButton.style.width = '12.500em';
screenButton.style.height = '5.625em';
screenButton.style.paddingTop = '1.48em';
startMenu.appendChild(screenButton);
let audio = document.createElement('div');
audio.style.width  = '0%';
audio.style.height = '0%';
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
startMenu.appendChild(startFaerbol);
document.body.appendChild(startMenu);


function init() {
scoreButton.addEventListener('click', function(){
    let additionalWindow = document.createElement('div');
    additionalWindow.id = 'additionalWindow';
    additionalWindow.style.position = 'absolute';
    additionalWindow.style.width = 100+'%';
    additionalWindow.style.height = 100+'%';
    screenButton.style.display ='none';
    playButton.style.display ='none';
    scoreButton.style.display ='none';
    document.getElementById('nameOfGame').style.display = 'none';
    startFaerbol.style.display = 'none';
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
additionalWindow.style.width = 100+'%';
additionalWindow.style.height = 100+'%';
additionalWindow.style.top = 0;
additionalWindow.style.bottom = 0;
screenButton.style.display ='none';
playButton.style.display ='none';
scoreButton.style.display ='none';
startFaerbol.style.display = 'none';
startMenu.style.position = 'absolute';
let imageGameplay = document.createElement('img');
imageGameplay.src = 'img/Gameplay.png';
imageGameplay.style.zIndex   = '1000';
imageGameplay.style.height   = '70%';
imageGameplay.style.width    = '80%';
imageGameplay.style.margin   = 'auto';
imageGameplay.style.display  = 'block';
additionalWindow.style.display = 'block';
additionalWindow.appendChild(imageGameplay);
document.body.appendChild(additionalWindow);
createReturnButton();
});
playButton.addEventListener('click',function(){
    startMenu.style.display = 'none';
    document.getElementById("info").remove();
    isMainaudio = true;
    enterName();
});
}
function startTheGame(){
if(beginGame === true)
init();
}
startTheGame();

function enterName() {
    if (!enteredNameYet) {
        score = 0;
        windowName = document.createElement('div');
        windowName.style.zIndex = '1';
        windowName.style.bottom = '0';
        windowName.style.right = '0';
        windowName.style.left = '0';
        windowName.style.top = '0';
        windowName.style.position = 'absolute';
        windowName.style.height = '25.000em';
        windowName.style.width = '32.000em';
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
        nameArea.style.display = 'inline-block';
        let enterButton = document.createElement('button');
        enterButton.innerText = "Enter";
        enterButton.style.fontSize = '1.5em';
        enterButton.style.display = 'inline-block';
        enterButton.style.margin = '0.625em';
        windowName.appendChild(enterH2);
        windowName.appendChild(nameArea);
        windowName.appendChild(enterButton);
        document.body.appendChild(windowName);
        enterButton.addEventListener('click', function () {
            if (!nameArea.value.match(/\w/)) {
                alert("Please enter you nickname to continue!")
            }
            else {
                enteredNameYet = true;
                playerName[users] = nameArea.value;
                tableScore[users] = score;
                users += 1;
                windowName.style.display = 'none';
                toRun();
            }
        })
    }
    else {
        toRun();
    }
}

let hpGg = 12.563;
let hpMonster = hpGg;

function createReturnButton(){
    let ReturnButton = document.createElement('button');
    ReturnButton.innerHTML = "&#9668";
    ReturnButton.style.width = '3.125em';
    ReturnButton.style.height = '1.563em';
    ReturnButton.style.position = 'absolute';
    ReturnButton.style.zIndex = '1000';
    ReturnButton.addEventListener('click', function(){
        ReturnButton.remove();
        document.getElementById('additionalWindow').remove();
        screenButton.style.display = 'inline-block';
        playButton.style.display = 'inline-block';
        scoreButton.style.display = 'inline-block';
        startFaerbol.style.display = 'block';
        document.getElementById('nameOfGame').style.display = 'block';
    })
    document.body.appendChild(ReturnButton);   
}

function toRun(){
    windowName.remove();
    if(isMainaudio){
    document.getElementById("mainaudio").remove();
    }
    let globalPlayWindow = document.createElement('div');
    globalPlayWindow.id = 'globalPlayWindow';
    globalPlayWindow.style.width = '100%';
    globalPlayWindow.style.height = '100%';
    globalPlayWindow.style.background = `url(${randomBackground()})`;
    globalPlayWindow.style.backgroundSize = "100%";
    let gg = document.createElement('img');
    let monster = document.createElement('div');
    let spellBook = document.createElement('button');
    globalPlayWindow.appendChild(gg);
    globalPlayWindow.appendChild(spellBook);
    globalPlayWindow.appendChild(monster);
    let audioPlay = document.createElement('div');
    audioPlay.style.width = '0%';
    audioPlay.style.height = '0%';
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
    interfaceGgRender(hpGg, nameArea.value);
    interfaceMonsterRender(hpMonster, getMonsterName());
    spellBook.addEventListener('click', function(){
        spellBook.disabled = true;
        spellBookRender();
    })
}



function spellBookRender(){
    if(getDamageYet){
        document.getElementById('getDamage').remove();
        getDamageYet = false;
    }
    let spellBookMain = document.createElement('div');
    spellBookMain.style.marginTop = '1.250em';
    spellBookMain.style.marginLeft = '28.125em';
    spellBookMain.style.zIndex = "1000";
    spellBookMain.style.width = '65.625em';
    spellBookMain.style.height = '47.000em';
    spellBookMain.style.background = "url(img/spellbook.png)";
    spellBookMain.style.backgroundSize = "100%";
    spellBookMain.style.position = "absolute";
    spellBookMain.id ='spellbook';
    let pToChoose = document.createElement('p');
    pToChoose.innerText = 'Please select a spell';
    pToChoose.style.align = 'center';
    pToChoose.style.display = 'block';
    pToChoose.style.paddingTop = '4.250em';
    pToChoose.style.paddingLeft = '5.5em';
    pToChoose.style.fontSize = '2.500em';
    pToChoose.style.fontFamily = 'COMMERCIALSCRIPT BT';
    pToChoose.style.color = '#0000ff';
    spellBookMain.appendChild(pToChoose);
    let ariphmeticButton = document.createElement('button');
    ariphmeticButton.innerText = "Solve the example";
    ariphmeticButton.style.display = 'inline-block';
    ariphmeticButton.style.backgroundColor = "yellow";
    ariphmeticButton.style.width = '12.500em';
    ariphmeticButton.style.height = '5.625em';
    ariphmeticButton.style.marginLeft = '15.625em';
    ariphmeticButton.addEventListener('click',function(){
    taskGeneration();
    spellBookMain.style.display = 'none';
    });
    spellBookMain.appendChild(ariphmeticButton);
    let puzzleButton = document.createElement('button');
    puzzleButton.innerText = "Guess the puzzle";
    puzzleButton.style.display = 'inline-block';
    puzzleButton.style.backgroundColor = "yellow";
    puzzleButton.style.width = '12.500em';
    puzzleButton.style.height = '5.625em';         
    puzzleButton.style.marginLeft = '6.250em';
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
    taskWindow.style.height = '25.000em';
    taskWindow.style.width = '32.000em';
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
    taskWindow.style.height = '31.250em';
    taskWindow.style.width = '32.000em';
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
    faerbol.style.width = '10.000em';
    faerbol.style.height = '4.375em';
    faerbol.style.position = 'absolute';
    faerbol.style.zIndex = '1000';
    faerbol.style.marginLeft = '25.625em';
    faerbol.style.marginTop = '26.875em';
    document.getElementById('globalPlayWindow').appendChild(faerbol);
    $(faerbol).animate({left: "+=940"}, 2000);
    $(faerbol).queue(function() {
        $(this).hide();
        $(this).dequeue();
        });
        $(faerbol).queue(function() {
        hpMonster -= 4.1876;
        document.getElementById('monsterhp').style.width= hpMonster + 'em';
        if(Math.round(hpMonster) === 0){
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
                setTimeout(function () {
                    monster.style.marginLeft = "88.938em";
                    monster.style.marginTop = "20em";
                    monster.innerHTML = '<img src ="img/vzrbIV.gif">';
                }, 500);
            setTimeout(function () {
                monster.style.marginTop = "9em";
                monster.style.marginLeft = "83em";
                monster.innerHTML = '<img src ="img/faer.gif">';
            }, 1500);
            setTimeout(function () {
                endWindow();
            }, 500);
        }
        else{
            document.getElementById('spellbutton').disabled = false;
        }
        $(this).dequeue();
        });
    let audioGetDamage = document.createElement('div');
    audioGetDamage.style.width = '0%';
    audioGetDamage.style.height = '0%';
    audioGetDamage.id = 'getDamage';
        $(faerbol).queue(function() {
            getDamageYet = true;
            audioGetDamage.innerHTML = `<object width="0" height="0" align="center" style="position:relative;" id = "getdamage">
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
            document.getElementById('monster').style.filter = 'hue-rotate(290deg)';
            setTimeout(function(){
            document.getElementById('monster').style.filter = 'hue-rotate(360deg)';   
            },1000);
            $(this).dequeue();
            });
    $(faerbol).queue(function () {
        faerbol.remove();
        $(this).dequeue(); 
    });
}

function monsterFaerbolRender(){
    let faerbol = document.createElement('img');
    faerbol.src = 'img/monsterfaerbol1.gif';
    faerbol.style.width = '10.000em';
    faerbol.style.height = '4.375em';
    faerbol.style.position = 'absolute';
    faerbol.style.zIndex = '1000';
    faerbol.style.marginLeft = '78.125em';
    faerbol.style.marginTop = '26.875em';
    document.getElementById('globalPlayWindow').appendChild(faerbol);
    $('#leftArm').toggleClass('transform');
    $('#weapon').toggleClass('transform');
    setTimeout($(faerbol).animate({left: "-=815"}, 2000),600);
    setTimeout(function(){
        $('#leftArm').toggleClass('transform');
        setTimeout(function () {
        $('#weapon').toggleClass('transform');
        }, 0);  
    }, 600);
    $(faerbol).queue(function() {
        $(this).hide();
        $(this).dequeue();
        });
    $(faerbol).queue(function() {
        hpGg -= 4.1876;
        document.getElementById('gghp').style.width= hpGg + 'em';
        if(Math.round(hpGg) === 0){
            document.getElementById('mortalCombat').remove();
            endWindow();
            }
        else{
            document.getElementById('spellbutton').disabled = false;
        }
        $(this).dequeue();
        });
    let audioGetDamage = document.createElement('div');
    audioGetDamage.style.width = '0%';
    audioGetDamage.style.height = '0%';
    audioGetDamage.id = 'getDamage';
    $(faerbol).queue(function() {
        getDamageYet = true;
        audioGetDamage.innerHTML = `<object width="0" height="0" align="center" id = "getdamage">
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
        document.getElementById('ggId').style.filter = 'hue-rotate(290deg)';
        if (Math.round(hpGg) != 0){
        setTimeout(function () {
            document.getElementById('ggId').style.filter = 'hue-rotate(360deg)';
        }, 1000);
    }
            $(this).dequeue();
            });
    $(faerbol).queue(function () {
        faerbol.remove();
        $(this).dequeue();
    });
}

function endWindow(){
    score = Math.round(100 - hpMonster * 7.9598);
    let windowEnd = document.createElement('div');
    windowEnd.style.zIndex = '1';
    windowEnd.style.bottom = '0';
    windowEnd.style.right = '0';
    windowEnd.style.left = '0';
    windowEnd.style.top = '0';
    windowEnd.style.position = 'absolute';
    windowEnd.style.height = '12.500em';
    windowEnd.style.width = '32.000em';
    windowEnd.style.margin = 'auto';
    windowEnd.style.backgroundColor = 'black';
    windowEnd.style.opacity = '.5';
    windowEnd.style.color = 'white';
    windowEnd.style.textAlign = 'center';
    windowEnd.style.display = 'block';
    let enterH2 = document.createElement('h2');
    enterH2.style.fontSize = '3em';
    enterH2.style.fontFamily = 'sans-serif';
    if (Math.round(hpMonster) === 0){
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
        tableScore[users - 1] += score;
        score = 0;
        windowEnd.remove();
        hpGg = 12.563;
        hpMonster = hpGg;
        document.getElementById('globalPlayWindow').remove();
        isMainaudio = false;
        getDamageYet = false;
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
    let totalScore = tableScore[users - 1] + score;
    ScorePlace.innerText = "Score: " + totalScore;
    ScorePlace.style.fontFamily = 'sans-serif';   
    let playAgainButton = document.createElement('button');
    playAgainButton.innerText = "PLAY AGAIN";
    playAgainButton.style.fontSize = '1.5em';
    windowEnd.appendChild(enterH2);
    windowEnd.appendChild(ScorePlace); 
    windowEnd.appendChild(playAgainButton);
    playAgainButton.addEventListener('click',function(){
        windowEnd.remove();
        score = 0;
        hpGg = 12.563;
        hpMonster = hpGg;
        tableScore[users]-=score;
        document.getElementById('globalPlayWindow').remove();
        isMainaudio = false;
        getDamageYet = false;
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
        getDamageYet = false;
        if(Math.round(hpGg) === 0){
        let cnf = confirm("If you exit the menu, the game will start again. Continue?");
        if(cnf){
        tableScore[users - 1] += score;
        score = 0;
        enteredNameYet = false;
        capacity = 1;
        hpGg = 12.563;
        hpMonster = hpGg;
        windowEnd.remove();
        document.getElementById('globalPlayWindow').remove();
        startMenu.style.display = 'block';
        audio.innerHTML = innerAudio;
        document.body.appendChild(information);
        }
    }
    else if (Math.round(hpMonster) === 0){
        hpGg = 12.563;
        hpMonster = hpGg;
        tableScore[users - 1] += score;
        score = 0;
        windowEnd.remove();
        document.getElementById('globalPlayWindow').remove();
        startMenu.style.display = 'block';
        audio.innerHTML = innerAudio;
        document.body.appendChild(information);
    }
        });   
}
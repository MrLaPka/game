import res from './res.js';
import spr from './sprite.js';
import inp from './in.js';
res();
spr();
inp();

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
let lastTime;
function main() {
        let now = Date.now();
    let dt = (now - lastTime) / 1000.0;    
    update(dt);
    render();
        lastTime = now;
        requestAnimFrame(main);
};
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
document.body.appendChild(startMenu);
function init() {
    startMenu.style.display = 'block';
    document.getElementById('instructions').style.display = 'none';
    scoreEl.style.display = 'none';
playButton.addEventListener('click',function(){
    startMenu.style.display = 'none';
    canvas.style.display = 'block';
    enterName();
});
}

resources.load([
    'img/sprites.png',
    'img/terrain.png'
]);
resources.onReady(init);  
// Game state
let player = {
    pos: [0, 0],
    sprite: new Sprite('img/sprites.png', [0, 0], [39, 39], 16, [0, 1])
};

let bullets = [];
let enemies = [];
let explosions = [];

let lastFire = Date.now();
let gameTime = 0;
let isGameOver;
let terrainPattern;

let score = 0;
let scoreEl = document.getElementById('score');

// Speed in pixels per second
let playerSpeed = 200;
let bulletSpeed = 500;
let enemySpeed = 100;

// Update game objects
function update(dt) {
    gameTime += dt;

    handleInput(dt);
    updateEntities(dt);

    // It gets harder over time by adding enemies using this
    // equation: 1-.993^gameTime
    if(Math.random() < 1 - Math.pow(.993, gameTime)) {
        enemies.push({
            pos: [canvas.width,
                  Math.random() * (canvas.height - 39)],
            sprite: new Sprite('img/sprites.png', [0, 78], [80, 39],
                               6, [0, 1, 2, 3, 2, 1])
        });
    }

    checkCollisions();

    scoreEl.innerHTML = score;
};

function handleInput(dt) {
    if(input.isDown('DOWN') || input.isDown('s')) {
        player.pos[1] += playerSpeed * dt;
    }

    if(input.isDown('UP') || input.isDown('w')) {
        player.pos[1] -= playerSpeed * dt;
    }

    if(input.isDown('LEFT') || input.isDown('a')) {
        player.pos[0] -= playerSpeed * dt;
    }

    if(input.isDown('RIGHT') || input.isDown('d')) {
        player.pos[0] += playerSpeed * dt;
    }

    if(input.isDown('SPACE') &&
       !isGameOver &&
       Date.now() - lastFire > 100) {
        let x = player.pos[0] + player.sprite.size[0] / 2;
        let y = player.pos[1] + player.sprite.size[1] / 2;

        bullets.push({ pos: [x, y],
                       dir: 'forward',
                       sprite: new Sprite('img/sprites.png', [0, 39], [18, 8]) });
        bullets.push({ pos: [x, y],
                       dir: 'up',
                       sprite: new Sprite('img/sprites.png', [0, 50], [9, 5]) });
        bullets.push({ pos: [x, y],
                       dir: 'down',
                       sprite: new Sprite('img/sprites.png', [0, 60], [9, 5]) });

        lastFire = Date.now();
    }
}

function updateEntities(dt) {
    // Update the player sprite animation
    player.sprite.update(dt);

    // Update all the bullets
    for(let i=0; i<bullets.length; i++) {
        let bullet = bullets[i];

        switch(bullet.dir) {
        case 'up': bullet.pos[1] -= bulletSpeed * dt; break;
        case 'down': bullet.pos[1] += bulletSpeed * dt; break;
        default:
            bullet.pos[0] += bulletSpeed * dt;
        }

        // Remove the bullet if it goes offscreen
        if(bullet.pos[1] < 0 || bullet.pos[1] > canvas.height ||
           bullet.pos[0] > canvas.width) {
            bullets.splice(i, 1);
            i--;
        }
    }

    // Update all the enemies
    for(let i=0; i<enemies.length; i++) {
        enemies[i].pos[0] -= enemySpeed * dt;
        enemies[i].sprite.update(dt);

        // Remove if offscreen
        if(enemies[i].pos[0] + enemies[i].sprite.size[0] < 0) {
            enemies.splice(i, 1);
            i--;
        }
    }

    // Update all the explosions
    for(let i=0; i<explosions.length; i++) {
        explosions[i].sprite.update(dt);

        // Remove if animation is done
        if(explosions[i].sprite.done) {
            explosions.splice(i, 1);
            i--;
        }
    }
}

// Collisions

function collides(x, y, r, b, x2, y2, r2, b2) {
    return !(r <= x2 || x > r2 ||
             b <= y2 || y > b2);
}

function boxCollides(pos, size, pos2, size2) {
    return collides(pos[0], pos[1],
                    pos[0] + size[0], pos[1] + size[1],
                    pos2[0], pos2[1],
                    pos2[0] + size2[0], pos2[1] + size2[1]);
}
let globalscore = 0;
function checkCollisions() {
    checkPlayerBounds();
    
    // Run collision detection for all enemies and bullets
    for(let i=0; i<enemies.length; i++) {
        let pos = enemies[i].pos;
        let size = enemies[i].sprite.size;

        for(let j=0; j<bullets.length; j++) {
            let pos2 = bullets[j].pos;
            let size2 = bullets[j].sprite.size;

            if(boxCollides(pos, size, pos2, size2)) {
                // Remove the enemy
                enemies.splice(i, 1);
                i--;

                // Add score
                score += 100;
                globalscore = score;

                // Add an explosion
                explosions.push({
                    pos: pos,
                    sprite: new Sprite('img/sprites.png',
                                       [0, 117],
                                       [39, 39],
                                       16,
                                       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                       null,
                                       true)
                });

                // Remove the bullet and stop this iteration
                bullets.splice(j, 1);
                break;
            }
        }

        if(boxCollides(pos, size, player.pos, player.sprite.size)) {
            gameOver();
        }
    }
}

function checkPlayerBounds() {
    // Check bounds
    if(player.pos[0] < 0) {
        player.pos[0] = 0;
    }
    else if(player.pos[0] > canvas.width - player.sprite.size[0]) {
        player.pos[0] = canvas.width - player.sprite.size[0];
    }

    if(player.pos[1] < 0) {
        player.pos[1] = 0;
    }
    else if(player.pos[1] > canvas.height - player.sprite.size[1]) {
        player.pos[1] = canvas.height - player.sprite.size[1];
    }
}

// Draw everything
function render() {
    ctx.fillStyle = terrainPattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render the player if the game isn't over
    if(!isGameOver) {
        renderEntity(player);
    }

    renderEntities(bullets);
    renderEntities(enemies);
    renderEntities(explosions);
};

function renderEntities(list) {
    for(let i=0; i<list.length; i++) {
        renderEntity(list[i]);
    }    
}

function renderEntity(entity) {
    ctx.save();
    ctx.translate(entity.pos[0], entity.pos[1]);
    entity.sprite.render(ctx);
    ctx.restore();
}

// Game over
function gameOver() {
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('score-in-game-over').innerHTML = `Score: ${globalscore}`;
    document.getElementById('game-over-overlay').style.display = 'block';
    isGameOver = true;
}

function toRun(){
    document.getElementById('instructions').style.display = 'block';
    scoreEl.style.display = 'block';
    terrainPattern = ctx.createPattern(resources.get('img/terrain.png'), 'repeat');            
    document.getElementById('play-again').addEventListener('click', function() {
        reset();
    });

    document.getElementById('menu').addEventListener('click', function() {
        canvas.style.display = 'none';
      reset();
     init();
    });
    reset();
    lastTime = Date.now();
    main();
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

// Reset game to original state
function reset() {
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('game-over-overlay').style.display = 'none';
    isGameOver = false;
    gameTime = 0;
    score = 0;
globalscore = 0;
    enemies = [];
    bullets = [];

    player.pos = [50, canvas.height / 2];
};


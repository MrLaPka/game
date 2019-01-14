function monsterRender(monster){
    let monsterHeaders = ["img/monster1.png","img/monster2.png","img/monster3.png"];
    let randomHead = monsterHeaders[Math.floor(Math.random() * monsterHeaders.length)];
    monster.style.position = "absolute";
    monster.style.zIndex = "1000";
    monster.style.marginLeft = "1450px";
    monster.style.marginTop = "380px";
    monster.style.width = '60px';
    monster.style.height = '72px';
    monster.style.background = `url(${randomHead})`;
    monster.style.backgroundSize = '100%';
    }
    
    export default monsterRender;
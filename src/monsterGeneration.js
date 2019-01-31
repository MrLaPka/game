function monsterRender(monster) {
    const monsterHeaders = ["img/Monster_parts/head01.png", "img/Monster_parts/head02.png", "img/Monster_parts/head03.png"];
    const monsterBodies  = ["img/Monster_parts/body01.png", "img/Monster_parts/body02.png", "img/Monster_parts/body03.png"];
    const monsterArms    = ["img/Monster_parts/arm01.png", "img/Monster_parts/arm02.png", "img/Monster_parts/arm03.png"];
    const monsterLegs    = ["img/Monster_parts/leg01.png", "img/Monster_parts/leg02.png", "img/Monster_parts/leg03.png"];
    const monsterWeapons = ["img/Monster_parts/weapon01.png", "img/Monster_parts/weapon02.png", "img/Monster_parts/weapon03.png"];
    let randomHead = monsterHeaders[Math.floor(Math.random() * monsterHeaders.length)];
    let randomBody = monsterBodies[Math.floor(Math.random() * monsterBodies.length)];
    let randomArms = monsterArms[Math.floor(Math.random() * monsterArms.length )];
    let randomLegs = monsterLegs[Math.floor(Math.random() * monsterLegs.length)];
    let randomWeapon = monsterWeapons[Math.floor(Math.random() * monsterWeapons.length)];
    let Head = document.createElement('div');
    Head.style.position = "absolute";
    Head.style.zIndex = "1010";
    Head.style.marginLeft = "1450px";
    Head.style.marginTop = "380px";
    Head.style.width = '60px';
    Head.style.height = '57px';
    Head.style.background = `url(${randomHead})`;
    Head.style.backgroundSize = "100%";
    let Body = document.createElement('div');
    Body.style.position = "absolute";
    Body.style.zIndex = "1000";
    Body.style.marginLeft = "1437px";
    Body.style.marginTop = "410px";
    Body.style.width = '80px';
    Body.style.height = '85px';
    Body.style.background = `url(${randomBody})`;
    Body.style.backgroundSize = "100%";
    let leftArm = document.createElement('div');
    leftArm.style.position = "absolute";
    leftArm.style.zIndex = "900";
    leftArm.style.marginLeft = "1423px";
    leftArm.style.marginTop = "425px";
    leftArm.style.width = '35px';
    leftArm.style.height = '60px';
    leftArm.style.background = `url(${randomArms})`;
    leftArm.style.backgroundSize = '100%';
    let rightArm = document.createElement('div');
    rightArm.style.position = "absolute";
    rightArm.style.zIndex = "1010";
    rightArm.style.marginLeft = "1497px";
    rightArm.style.marginTop = "430px";
    rightArm.style.width = '35px';
    rightArm.style.height = '56px';
    if (randomArms === "img/Monster_parts/arm01.png"){
        rightArm.style.background = `url(img/Monster_parts/arm06.png)`;
    }
    else if (randomArms === "img/Monster_parts/arm02.png"){
        rightArm.style.background = `url(img/Monster_parts/arm05.png)`;
    }
    else if (randomArms === "img/Monster_parts/arm03.png"){
        rightArm.style.background = `url(img/Monster_parts/arm04.png)`;
    }
    rightArm.style.backgroundSize = '100%';
    let leftLeg = document.createElement('div');
    leftLeg.style.position = "absolute";
    leftLeg.style.zIndex = "900";
    leftLeg.style.marginLeft = "1447px";
    leftLeg.style.marginTop = "483px";
    leftLeg.style.width = '35px';
    leftLeg.style.height = '50px';
    leftLeg.style.background = `url(${randomLegs})`;
    leftLeg.style.backgroundSize = '100%';
    let rightLeg = document.createElement('div');
    rightLeg.style.position = "absolute";
    rightLeg.style.zIndex = "910";
    rightLeg.style.marginLeft = "1470px";
    rightLeg.style.marginTop = "487px";
    rightLeg.style.width = '35px';
    rightLeg.style.height = '49px';
    if (randomLegs === "img/Monster_parts/leg01.png") {
        rightLeg.style.background = `url(img/Monster_parts/leg04.png)`;
    }
    else if (randomLegs === "img/Monster_parts/leg02.png") {
        rightLeg.style.background = `url(img/Monster_parts/leg05.png)`;
    }
    else if (randomLegs === "img/Monster_parts/leg03.png") {
        rightLeg.style.background = `url(img/Monster_parts/leg06.png)`;
    }
    rightLeg.style.backgroundSize = '100%';
    let Weapon = document.createElement('div');
    Weapon.style.position = "absolute";
    Weapon.style.zIndex = "1010";
    Weapon.style.marginLeft = "1372px";
    Weapon.style.marginTop = "432px";
    Weapon.style.width = '160px';
    Weapon.style.height = '112px';
    Weapon.style.background = `url(${randomWeapon}) no-repeat`;
    Weapon.style.backgroundSize = "50%";
    monster.appendChild(Head);
    monster.appendChild(Body);
    monster.appendChild(leftArm);
    monster.appendChild(rightArm);
    monster.appendChild(leftLeg);
    monster.appendChild(rightLeg);
    monster.appendChild(Weapon);
}

export default monsterRender;
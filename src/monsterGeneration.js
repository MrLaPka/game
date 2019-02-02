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
    Head.style.marginLeft = "90.625em";
    Head.style.marginTop = "23.750em";
    Head.style.width = '3.750em';
    Head.style.height = '3.563em';
    Head.style.background = `url(${randomHead})`;
    Head.style.backgroundSize = "100%";
    let Body = document.createElement('div');
    Body.style.position = "absolute";
    Body.style.zIndex = "1000";
    Body.style.marginLeft = "89.813em";
    Body.style.marginTop = "25.625em";
    Body.style.width = '5.000em';
    Body.style.height = '5.313em';
    Body.style.background = `url(${randomBody})`;
    Body.style.backgroundSize = "100%";
    let leftArm = document.createElement('div');
    leftArm.id  = 'leftArm';
    leftArm.style.position = "absolute";
    leftArm.style.zIndex = "900";
    leftArm.style.marginLeft = "88.938em";
    leftArm.style.marginTop = "26.563em";
    leftArm.style.width = '2.188em';
    leftArm.style.height = '3.750em';
    leftArm.style.background = `url(${randomArms})`;
    leftArm.style.backgroundSize = '100%';
    let rightArm = document.createElement('div');
    rightArm.style.position = "absolute";
    rightArm.style.zIndex = "1010";
    rightArm.style.marginLeft = "93.563em";
    rightArm.style.marginTop = "26.875em";
    rightArm.style.width = '2.188em';
    rightArm.style.height = '3.500em';
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
    leftLeg.style.marginLeft = "90.438em";
    leftLeg.style.marginTop = "30.188em";
    leftLeg.style.width = '2.188em';
    leftLeg.style.height = '3.125em';
    leftLeg.style.background = `url(${randomLegs})`;
    leftLeg.style.backgroundSize = '100%';
    let rightLeg = document.createElement('div');
    rightLeg.style.position = "absolute";
    rightLeg.style.zIndex = "910";
    rightLeg.style.marginLeft = "91.875em";
    rightLeg.style.marginTop = "30.438em";
    rightLeg.style.width = '2.188em';
    rightLeg.style.height = '3.063em';
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
    Weapon.id = 'weapon';
    Weapon.style.position = "absolute";
    Weapon.style.zIndex = "1010";
    Weapon.style.marginLeft = "85.750em";
    Weapon.style.marginTop = "27.000em";
    Weapon.style.width = '10.000em';
    Weapon.style.height = '7.000em';
    Weapon.style.background = `url(${randomWeapon}) no-repeat`;
    Weapon.style.backgroundSize = "50%";
    monster.style.position = 'absolute';
    monster.id = 'monster';
    monster.appendChild(Head);
    monster.appendChild(Body);
    monster.appendChild(leftArm);
    monster.appendChild(rightArm);
    monster.appendChild(leftLeg);
    monster.appendChild(rightLeg);
    monster.appendChild(Weapon);
}

export default monsterRender;
export default function interfaceMonsterRender(hpMonster, getMonsterName){  
    let hp = document.createElement('div');
    hp.style.marginTop = '9.375em';
    hp.id = 'monsterhp';
    hp.style.marginLeft = '85.625em'; 
    hp.style.width = hpMonster+'em';
    hp.style.height = '1.250em';
    hp.style.background = "repeating-linear-gradient(45deg,#606dbc,#606dbc 0.625em,#465298 0.625em,#465298 1.250em)";
    hp.style.zIndex = '1000';
    hp.style.display = "inline-block";
    hp.style.position = "absolute";
    document.getElementById('globalPlayWindow').appendChild(hp);
    let nameMonster = document.createElement('div');
    nameMonster.style.marginTop = '4.375em';
    nameMonster.style.marginLeft = '79.375em'; 
    nameMonster.style.width = '25.000em';
    nameMonster.style.height = '1.875em';
    nameMonster.style.zIndex = '1000';
    nameMonster.style.display = "inline-block";
    nameMonster.style.position = "absolute";
    nameMonster.id = 'namemonster';
    let pName = document.createElement('p');
    pName.innerText = getMonsterName;
    pName.style.color = 'OrangeRed';
    pName.style.fontSize = '1.875em';
    nameMonster.appendChild(pName);
document.getElementById('globalPlayWindow').appendChild(nameMonster);
    }
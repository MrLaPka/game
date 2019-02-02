export default function interfaceGgRender(hpGg, value) {
    let hp = document.createElement('div');
    hp.style.marginTop = '9.375em';
    hp.style.marginLeft = '20.625em';
    hp.id = 'gghp';
    hp.style.width = hpGg + 'em';
    hp.style.height = '1.250em';
    hp.style.background = "repeating-linear-gradient(-45deg,#606dbc,#606dbc 0.625em,#465298 0.625em,#465298 1.250em)";
    hp.style.zIndex = '1000';
    hp.style.display = "inline-block";
    hp.style.position = "absolute";
    document.getElementById('globalPlayWindow').appendChild(hp);
    let nameGg = document.createElement('div');
    nameGg.style.marginTop = '4.375em';
    nameGg.style.marginLeft = '21.875em';
    nameGg.style.width = '18.750em';
    nameGg.style.height = '1.875em';
    nameGg.style.zIndex = '1000';
    nameGg.style.display = "inline-block";
    nameGg.style.position = "absolute";
    nameGg.id = 'namegg';
    let pName = document.createElement('p');
    pName.innerText = value;
    pName.style.color = 'Lime';
    pName.style.fontSize = '1.875em';
    nameGg.appendChild(pName);
    document.getElementById('globalPlayWindow').appendChild(nameGg);
}
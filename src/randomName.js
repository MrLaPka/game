const firstName = [ 
    'Vicious', 
    'Terrible', 
    'Huge', 
    'Smelly', 
    'Snotty', 
    'Stuped', 
    'Fierce', 
    'Poisonous', 
    'Thorny', 
    'Toothy'
    ]; 
    
    const secondName = [ 
        'Ogre', 
        'Gnome', 
        'Elf', 
        'Giant', 
        'Troll', 
        'Zombie', 
        'Orc', 
        'Trent', 
        'Centaur', 
        'Spirit'
    ]; 
    
    const thirdName = [ 
    'Pharaoph', 
    'Egor Kreed', 
    'Drake', 
    'Lil Pump', 
    'Face', 
    'Eljey', 
    'Kizaru', 
    'Obladaet', 
    'Poroshenko', 
    'Tramp' 
    ]; 
    
    function randomName(arr) { 
    return arr[Math.floor(Math.random() * arr.length)]; 
    } 

    export default function getMonsterName() { 
        return `${randomName(firstName)} ${randomName(secondName)} ${randomName(thirdName)}`; 
        }
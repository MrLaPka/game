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

export default function randomRiddles(){
    return String(riddles[keys[Math.floor(Math.random() * keys.length)]]);
}
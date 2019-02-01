const backgrounds = ["img/backgrounds/BGLAYERS_EXAMPLE[1].png", "img/backgrounds/desert_day[1].jpg", "img/backgrounds/terrain.png","img/backgrounds/fon14[1].png"];
export default function randomBackground() {
    return backgrounds[Math.floor(Math.random() * backgrounds.length)];
}

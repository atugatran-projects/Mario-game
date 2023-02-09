import { mergeImg, anims } from "../functions/allFunc"
import { winLose } from "../screenText/winLoseStart"
import { game } from "./game"
const addBg = () => {
    const playerAnims = {
        player: anims
    };

    const corpusAnims = {
        corpus: anims
    };


    // load assets
    loadSpriteAtlas("sprites/person/spritemerge_corpus.png", corpusAnims)
    // load and merge body and leather armor 
    mergeImg(["sprites/person/spritemerge_corpus.png", "sprites/person/spritemerge_chest.png"]).then((img) =>
        loadSpriteAtlas(img, playerAnims)
    );
    // Enemies
    loadSprite("ghosty", "sprites/enemies/ghosty.png")
    loadSprite("spike", "sprites/enemies/spike.png")
    // Land
    loadSprite("grass", "sprites/land/grass.png")
    loadSprite("prize", "sprites/land/jumpy.png")
    // Points
    loadSprite("apple", "sprites/points/apple.png")
    loadSprite("coin", "sprites/points/coin.png")
    // transport
    loadSprite("portal", "sprites/transport/portal.png")
    // arrows
    loadSprite("arrowUp", "sprites/arrow/arrowUp.png")
    loadSprite("arrowDown", "sprites/arrow/arrowDown.png")
    loadSprite("arrowLeft", "sprites/arrow/arrowLeft.png")
    loadSprite("arrowRight", "sprites/arrow/arrowRight.png")


    // Sounds
    loadSound("coin", "sounds/score.mp3")
    loadSound("powerup", "/sounds/powerup.mp3")
    loadSound("blip", "sounds/blip.mp3")
    loadSound("hit", "sounds/hit.mp3")
    loadSound("portal", "sounds/portal.mp3")

    game()
    winLose()
    go("level")

}

module.exports = { addBg }
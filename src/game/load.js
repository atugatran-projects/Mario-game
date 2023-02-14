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
    loadSprite("tooth", "sprites/enemies/tooth.png")
    loadSprite("spike", "sprites/enemies/spike.png")
    loadSprite("spike2", "sprites/enemies/spike2.png")
    // Land
    loadSprite("grass", "sprites/land/grass.png")
    loadSprite("t-b", "sprites/land/Stone/top-bottom.png")
    loadSprite("t-l", "sprites/land/Stone/top-left.png")
    loadSprite("t-r", "sprites/land/Stone/top-right.png")
    loadSprite("b-b", "sprites/land/Stone/bottom-bottom.png")
    loadSprite("b-l", "sprites/land/Stone/bottom-left.png")
    loadSprite("b-r", "sprites/land/Stone/bottom-right.png")
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
    // Trees
    loadSprite("s-p", "sprites/trees/palm.png")
    loadSprite("b-p", "sprites/trees/large-palm.png")
    loadSprite("l-p", "sprites/trees/left-palm.png")
    // Clouds
    loadSprite("cloud", "sprites/clouds/cloud.png")
    
    // Sounds
    loadSound("coin", "sounds/score.mp3")
    loadSound("powerup", "sounds/powerup.mp3")
    loadSound("blip", "sounds/blip.mp3")
    loadSound("hit", "sounds/hit.mp3")
    loadSound("portal", "sounds/portal.mp3")

    game()
    winLose()
    go("level")

}

module.exports = { addBg }
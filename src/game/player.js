import { mergeImg , anims } from "./functions/allFunc"

const addPlayer = () => {
    // Variables
    let SPEED = 120

    const playerAnims = {
        player: anims
    };

    const corpusAnims = {
        corpus: anims
    };

    loadSpriteAtlas("img/person/spritemerge_corpus.png", corpusAnims)
    // load and merge body and leather armor 
    mergeImg(["img/person/spritemerge_corpus.png", "img/person/spritemerge_chest.png"]).then((img) =>
        loadSpriteAtlas(img, playerAnims)
    );

    let DIRECTION = 'down';
    gravity(0)

    // Add a Player
    const player = add([
        sprite('player'),
        pos(center()),
        origin("center"),
        area(),
        body()
    ])

    player.play("idle-down")


    // Controls
    onKeyDown('left', () => {
        DIRECTION = 'left';
        switchAnimation('walk');
        player.move(-SPEED, 0)
        // camPos(player.pos)
    })
    onKeyDown('right', () => {
        DIRECTION = 'right';
        switchAnimation('walk');
        player.move(SPEED, 0)
        // camPos(player.pos)
    })
    onKeyDown('down', () => {
        DIRECTION = 'down';
        switchAnimation('walk');
        player.move(0, SPEED)
        // camPos(player.pos)
    })
    onKeyDown('up', () => {
        DIRECTION = 'up';
        switchAnimation('walk');
        player.move(0, -SPEED)
        // camPos(player.pos)
    })


    onKeyRelease(['left', 'right', 'down', 'up'], () => {
        switchAnimation('idle');
    })

    function switchAnimation(type) {
        if (player.curAnim() !== type + '-' + DIRECTION) {
            player.play(type + '-' + DIRECTION, { loop: true });
        }
    }

    // Frame Text
    const getInfo = () =>
        // Anim: ${player.curAnim()}
        `Frame: ${player.frame}`.trim()

    const label = add([
        text(getInfo()),
        pos(4),
        fixed()
    ])

    label.onUpdate(() => {
        label.text = getInfo()
    })
}

module.exports = { addPlayer }
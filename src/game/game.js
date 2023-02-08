import { LEVELS, levelConf } from "./levels"
import { big } from "../functions/allFunc"
const game = () =>{ 
 // define some constants
    const JUMP_FORCE = 1320
    const MOVE_SPEED = 480
    const FALL_DEATH = 2400

scene("game", ({ levelId, coins } = { levelId: 0, coins: 0 }) => {

    gravity(3200)

    // add level to scene
    const level = addLevel(LEVELS[levelId ?? 0], levelConf)

    // define player object
    const player = add([
        sprite("player"),
        pos(0, 0),
        area(),
        scale(1),
        // makes it fall to gravity and jumpable
        body(),
        // the custom component we defined above
        big(),
        origin("bot"),
    ])

    // action() runs every frame
    player.onUpdate(() => {
        // center camera to player
        camPos(player.pos)
        // check fall death
        if (player.pos.y >= FALL_DEATH) {
            go("lose")
        }
    })

    // if player onCollide with any obj with "danger" tag, lose
    player.onCollide("danger", () => {
        go("lose")
        play("hit")
    })

    player.onCollide("portal", () => {
        play("portal")
        if (levelId + 1 < LEVELS.length) {
            go("game", {
                levelId: levelId + 1,
                coins: coins,
            })
        } else {
            go("win")
        }
    })

    player.onGround((l) => {
        if (l.is("enemy")) {
            player.jump(JUMP_FORCE * 1.5)
            destroy(l)
            addKaboom(player.pos)
            play("powerup")
        }
    })

    player.onCollide("enemy", (e, col) => {
        // if it's not from the top, die
        if (!col.isBottom()) {
            go("lose")
            play("hit")
        }
    })

    let hasApple = false

    // grow an apple if player's head bumps into an obj with "prize" tag
    player.onHeadbutt((obj) => {
        if (obj.is("prize") && !hasApple) {
            const apple = level.spawn("#", obj.gridPos.sub(0, 1))
            apple.jump()
            hasApple = true
            play("blip")
        }
    })

    // player grows big onCollide with an "apple" obj
    player.onCollide("apple", (a) => {
        destroy(a)
        // as we defined in the big() component
        player.biggify(3)
        hasApple = false
        play("powerup")
    })

    let coinPitch = 0

    onUpdate(() => {
        if (coinPitch > 0) {
            coinPitch = Math.max(0, coinPitch - dt() * 100)
        }
    })

    player.onCollide("coin", (c) => {
        destroy(c)
        play("coin", {
            detune: coinPitch,
        })
        coinPitch += 100
        coins += 1
        coinsLabel.text = coins
    })

    const coinsLabel = add([
        text(coins),
        pos(30, 10),
        fixed(),
        scale(4)
    ])


    DIRECTION = 'right';
    switchAnimation('idle');
    // Controls
    onKeyPress("space", () => {
        // these 2 functions are provided by body() component
        if (player.isGrounded()) {
            player.jump(JUMP_FORCE)
        }
    })

    onKeyDown("left", () => {
        player.move(-MOVE_SPEED, 0)
        DIRECTION = 'left';
        switchAnimation('walk');
    })

    onKeyDown("right", () => {
        player.move(MOVE_SPEED, 0)
        DIRECTION = 'right';
        switchAnimation('walk');
    })

    onKeyPress("down", () => {
        player.weight = 3
    })

    onKeyRelease("down", () => {
        player.weight = 1
    })

    onKeyPress("f", () => {
        fullscreen(!fullscreen())
    })

    function switchAnimation(type) {
        if (player.curAnim() !== type + '-' + DIRECTION) {
            player.play(type + '-' + DIRECTION, { loop: true });
        }
    }
    onKeyRelease(['left', 'right', 'down', 'up'], () => {
        switchAnimation('idle');
    })
})
}
module.exports = { game }
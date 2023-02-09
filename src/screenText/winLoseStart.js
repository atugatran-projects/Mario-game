const winLose = () => {
    scene("lose", () => {
        add([
            pos(width() / 2 - 100, height() / 2 - 50),
            text("You Lose"),
            scale(3)
        ])
        onKeyPress(() => go("game"))
    })

    scene("win", () => {
        add([
            pos(width() / 2 - 100, height() / 2 - 50),
            text("You Win"),
            scale(3)
        ])
        onKeyPress(() => go("game"))
    })
    scene("level", ({ levelId, coins } = { levelId: 0, coins: 0 }) => {
        onKeyPress("f", () => {
            fullscreen(!fullscreen())
        })
        add([
            pos(width() / 2 - 100, height() / 2 - 200),
            text("Level = " + levelId),
            scale(3)
        ])
        add([
            pos(width() / 2 - 100, height() / 2 - 150),
            text("(<) left "),
            scale(3)
        ])
        add([
            pos(width() / 2 - 100, height() / 2 - 100),
            text("(>) right "),
            scale(3)
        ])
        add([
            pos(width() / 2 - 100, height() / 2 - 50),
            text("(space) jump "),
            scale(3)
        ])
        add([
            pos(width() / 2 - 100, height() / 2),
            text("(f) fullscreen "),
            scale(3)
        ])
        add([
            pos(width() / 2 - 100, height() / 2 + 50),
            text("(a) Enter "),
            scale(3)
        ])
        onKeyDown("a", () => {
            go("game", {
                levelId: levelId,
                coins: coins,
            })
        })
    })
}

module.exports = { winLose }
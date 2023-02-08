const winLose = () =>{
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
}

module.exports = { winLose }
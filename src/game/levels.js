import { patrol } from "../functions/allFunc"

/*

(=) Grass
($) coin
(>) monster
(%) bonus
(@) porter
(#) apple
(^) blade
← ↑ → ↓
*/

const LEVELS = [
    [
        "                          $",
        "                          $",
        "                          $",
        "                          $",
        "                          $",
        "           $$         =   $",
        "         ====         =   $",
        "                      =   $",
        "                      =    ",
        " →     ^^     = >    ^=   @",
        "===========================",
    ],
    [
        "     $    $    $    $     $",
        "     $    $    $    $     $",
        "                           ",
        "                           ",
        "                           ",
        "                           ",
        "  →                        ",
        "  ^^^>^^^^>^^^^>^^^^>^^^^^@",
        "===========================",
    ],
    [
        "             $            ",
        "                          ",
        "                          @",
        "                        ===",
        "     $           =         ",
        "           =               ",
        "                           ",
        "               $           ",
        "    ==                    $",
        "                           ",
        "           =               ",
        "                  =        ",
        "                         ==",
        "                         $=",
        "                         $=",
        "=              >      >↑ $=",
        "===========================",
    ],
]

// define what each symbol means in the level graph
const levelConf = {
    // grid size
    width: 64,
    height: 64,
    // define each object as a list of components
    "=": () => [
        sprite("grass"),
        area(),
        solid(),
        origin("bot"),
    ],
    "$": () => [
        sprite("coin"),
        area(),
        pos(0, -9),
        origin("bot"),
        "coin",
    ],
    "%": () => [
        sprite("prize"),
        area(),
        solid(),
        origin("bot"),
        "prize",
    ],
    "^": () => [
        sprite("spike"),
        area(),
        solid(),
        origin("bot"),
        "danger",
    ],
    "#": () => [
        sprite("apple"),
        area(),
        origin("bot"),
        body(),
        "apple",
    ],
    ">": () => [
        sprite("ghosty"),
        area(),
        origin("bot"),
        body(),
        patrol(),
        "enemy",
    ],
    "@": () => [
        sprite("portal"),
        area({ scale: 0.5, }),
        origin("bot"),
        pos(0, -12),
        "portal",
    ],

    "↑": () => [
        sprite("arrowUp"),
        area({ scale: 0.5, }),
        origin("bot"),
        pos(0, -12),
        "bot",
    ],
    "↓": () => [
        sprite("arrowDown"),
        area({ scale: 0.5, }),
        origin("bot"),
        pos(0, -12),
        "bot",
    ],
    "←": () => [
        sprite("arrowLeft"),
        area({ scale: 0.5, }),
        origin("bot"),
        pos(0, -12),
        "bot",
    ],
    "→": () => [
        sprite("arrowRight"),
        area({ scale: 0.5, }),
        origin("bot"),
        pos(0, -12),
        "bot",
    ],
}

module.exports = { LEVELS, levelConf }
import { patrol } from "../functions/allFunc"

/*
//  Land
(=) Grass
(≈) stone-top-bottom
(≤) stone-top-left
(≥) stone-top-right
(≗) stone-bottom-bottom
(≦) stone-bottom-left
(≧) stone-bottom-right

// Points
($) coin
(%) bonus
(#) apple
// Enimies
(>) monster
(웃) tooth
(ὣ) spike
(Ѷ) spike2
// pORTER
(@) porter
// Arrows
(←) arrowLeft 
(↑) arrowTop
(→) arrowRight 
(↓) arrowDown
// trees
(▴) Small palm
(▲) big palm
(◄) left palm
(►) right palm
// clouds
(☁) right palm

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
        " →     ὣὣ     = Ü    ὣ=   @",
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
        "  ὣὣὣÜὣὣὣὣÜὣὣὣὣÜὣὣὣὣÜὣὣὣὣὣ@",
        "===========================",
    ],
    [
        "                     $            @",
        "                              =====",
        "            $          =           ",
        "                                   ",
        "                =                  ",
        "                                   ",
        "                        $    $     ",
        "         ==                       $",
        "               =                   ",
        "                                   ",
        "                      =            ",
        "                            =      ",
        "                 $     $         ==",
        "                                 $=",
        "                                 $=",
        "     →             ὣὣὣ  Üὣὣὣ  Ü↑ $=",
        "===================================",
    ],
    [
        "                                       =",
        "                                       =",
        "                 =      =              =",
        "            $    =  $   =  $           =",
        "         =       =      =              =",
        "     →   = Ü Ü   = Ü Ü  = Ü Ü  ὣ       =",
        "=====================================  =",
        "=                                      =",
        "=        $           $          $      =",
        "=                                      =",
        "=     =Ü Ü ὣ   =   Ü Ü ὣ   =   Ü Ü ὣ   =",
        "=  =====================================",
        "=        $      $      $      $        =",
        "=                                      =",
        "=                                      =",
        "=    ὣ  Ü  ὣ Ü   ὣ  Ü  ὣ  Ü  ὣ        @=",
        "========================================",
    ],
    // [
    //     "                                                   ",
    //     "                                                   ",
    //     "☁ ☁ ☁ ☁ ☁ ☁ ☁ ☁ ☁ ☁ ☁ ☁ ☁ ☁ ☁ ☁ ☁ ☁ ☁ ☁ ☁ ",
    //     "                                                   ",
    //     "                                                   ",
    //     "                                                   ",
    //     "                                                   ",
    //     "                                                   ",
    //     "    ▴▲▴                                            ",
    //     "≤≈≈≈≈≈≈≈≈≈≥       ≤≈≈≈≈≈≈≈≈≈≥",
    // ],
]

// define what each symbol means in the level graph
const levelConf = {
    // grid size
    width: 64,
    height: 64,
    // Land
    "=": () => [
        sprite("grass"),
        area(),
        solid(),
        origin("bot"),
    ],
    "≈": () => [
        sprite("t-b"),
        area(),
        solid(),
        origin("bot"),
    ],
    "≤": () => [
        sprite("t-l"),
        area(),
        solid(),
        origin("bot"),
    ],
    "≥": () => [
        sprite("t-r"),
        area(),
        solid(),
        origin("bot"),
    ],

    "≗": () => [
        sprite("b-b"),
        area(),
        solid(),
        origin("bot"),
    ],
    "≦": () => [
        sprite("b-l"),
        area(),
        solid(),
        origin("bot"),
    ],
    "≧": () => [
        sprite("b-r"),
        area(),
        solid(),
        origin("bot"),
    ],
    "%": () => [
        sprite("prize"),
        area(),
        solid(),
        origin("bot"),
        "prize",
    ],
    // points
    "$": () => [
        sprite("coin"),
        area(),
        pos(0, -9),
        origin("bot"),
        rotate(10),
        "coin",
    ],
    "#": () => [
        sprite("apple"),
        area(),
        origin("bot"),
        body(),
        "apple",
    ],
    // Enemies
    "ὣ": () => [
        sprite("spike"),
        area(),
        solid(),
        origin("bot"),
        "danger",
    ],
    "Ѷ": () => [
        sprite("spike2"),
        area(),
        solid(),
        origin("bot"),
        "danger",
    ],
    "Ü": () => [
        sprite("ghosty"),
        area(),
        origin("bot"),
        body(),
        patrol(),
        "enemy",
    ],
    "웃": () => [
        sprite("tooth"),
        area(),
        origin("bot"),
        body(),
        patrol(),
        "enemy",
    ],
    // Portals
    "@": () => [
        sprite("portal"),
        area({ scale: 0.5, }),
        origin("bot"),
        pos(0, -12),
        "portal",
    ],
    // Arrows
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
    // trees
    "▴": () => [
        sprite("s-p"),
        area(),
        // solid(),
        origin("bot"),
    ],
    "▲": () => [
        sprite("b-p"),
        area(),
        // solid(),
        origin("bot"),
    ],
    "◄": () => [
        sprite("l-p"),
        area(),
        solid(),
        origin("bot"),
    ],
    "►": () => [
        sprite("r-p"),
        area(),
        // solid(),
        origin("bot"),
    ],
    // cloud
    "☁": () => [
        sprite("cloud"),
        area(),
        // solid(),
        origin("bot"),
    ],
}

module.exports = { LEVELS, levelConf }
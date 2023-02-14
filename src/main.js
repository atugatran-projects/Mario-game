import kaboom from "kaboom"
import { addBg } from "./game/load"

// Start a kaboom game
kaboom({
	font: "sinko",
	background: [113, 188, 225]
})

addBg()
import playerController from "./modules/playerController.js";
import gameStart from "./modules/frameGeneration.js";
import { userHaveTouchScreen } from "./modules/globalVariables.js";
import { drawTargetBoxes } from "./modules/drawObjects.js";

userHaveTouchScreen();
drawTargetBoxes();
playerController();
gameStart();

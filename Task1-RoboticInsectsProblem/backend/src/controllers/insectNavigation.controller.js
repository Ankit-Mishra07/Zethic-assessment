import { navigateInsect } from "../utils/InsectNavigation.js";

export const getInputAndShowNavigationResult = (req, res) => {
  let Input = req.body.input.trim().split(",");
  let numberOfInsects = (Input.length - 1) / 2;
  let [roomSizeX, roomSizeY] = Input[0].trim().split(" ").map(Number);
  let line = 1;
  let result = [];
  for (let t = 0; t < numberOfInsects; t++) {
    let insectPosition = Input[line++].trim().split(" ");
    let commands = Input[line++].trim().split("");
    result.push(navigateInsect(insectPosition, commands));
  }
  return res.status(200).send(result);
};

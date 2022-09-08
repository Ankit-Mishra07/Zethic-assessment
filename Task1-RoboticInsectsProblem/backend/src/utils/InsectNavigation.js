export const navigateInsect = (insectPosition, commands) => {
  let x = +insectPosition[0];
  let y = +insectPosition[1];
  let initialDirection = insectPosition[2];
  let directions = ["N", "E", "S", "W"];
  let indexOfDrections = directions.indexOf(initialDirection);
  for (var currentIndex = 0; currentIndex < commands.length; currentIndex++) {
    if (commands[currentIndex] == "F" && directions[indexOfDrections] == "N") {
      y++;
    } else if (
      commands[currentIndex] == "F" &&
      directions[indexOfDrections] == "S"
    ) {
      y--;
    } else if (
      commands[currentIndex] == "F" &&
      directions[indexOfDrections] == "E"
    ) {
      x++;
    } else if (
      commands[currentIndex] == "F" &&
      directions[indexOfDrections] == "W"
    ) {
      x--;
    } else if (commands[currentIndex] == "L") {
      if (indexOfDrections == 0) {
        indexOfDrections = 3;
      } else {
        indexOfDrections--;
      }
    } else if (commands[currentIndex] == "R") {
      if (indexOfDrections == 3) {
        indexOfDrections = 0;
      } else {
        indexOfDrections++;
      }
    }
  }
  return [x, y, directions[indexOfDrections]];
};

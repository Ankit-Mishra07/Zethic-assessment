import { toast } from "react-toastify";

export const handleRun = (size, inputs) => {
  size = size.split(" ");

  // Room Size Validation;
  if (size.length !== 2) {
    toast.error("Room Size is invalid!");
    return false;
  }

  let flagSize = true;
  size.forEach((elem) => {
    if (isNaN(Number(elem))) {
      toast.error("Room Size should be valid number");
      flagSize = false;
    }
  });
  if (flagSize === false) return false;

  for (let i = 0; i < inputs.length; i++) {
    let position = inputs[i].position.split(" ");
    if (position.length !== 3) {
      toast.error("Invalid Initial Position");
      return false;
    }
    if (position.length === 3) {
      if (
        typeof +position[0] !== "number" ||
        typeof +position[1] !== "number" ||
        typeof position[2] !== "string"
      ) {
        toast.error("Invalid Initial Position");
        return false;
      }
    }

    let commands = inputs[i].command.trim().toUpperCase();
    if (commands.split().length !== 1) {
      toast.error("Invalid command");
      return false;
    } else if (commands.split(" ").length > 1) {
      toast.error("Invalid command");
      return false;
    } else if (commands.split().length === 1) {
      for (let k of commands) {
        if (k === "L" || k === "R" || k === "F") {
        } else {
          toast.error("Invalid command");
          return false;
        }
      }
    }
  }

  return true;
};

export const convertPayload = (size, inputs) => {
  let payload = [];
  payload.push(size);

  for (let elem of inputs) {
    payload.push(elem.position.toUpperCase());
    payload.push(elem.command.toUpperCase());
  }

  return {
    input: payload.join(","),
  };
};

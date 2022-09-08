import React from "react";
import { useState } from "react";
import styles from "./inputform.module.css";
import { v4 as uuidv4 } from "uuid";
import { handleRun } from "../../utils/runFunction";
import { useDispatch } from "react-redux";
import { convertPayload } from "../../utils/convertPayload";
import { toast } from "react-toastify";
import { makeResultAction } from "../../Redux/InsectNavigate/action";
const InputForm = () => {
  const [inputs, setInputs] = useState([
    { position: "", command: "", id: uuidv4() },
  ]);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const handleAddInput = () => {
    setInputs([...inputs, { position: "", command: "", id: uuidv4() }]);
  };
  const handleRemoveInput = (index) => {
    const values = [...inputs];
    values.splice(index, 1);
    setInputs(values);
  };
  const handleChange = (event, id) => {
    let newInputs = inputs.map((el) => {
      if (id === el.id) {
        el[event.target.name] = event.target.value;
      }
      return el;
    });

    setInputs(newInputs);
  };

  const handleInputRun = () => {
    let checkInputs = handleRun(size, inputs);
    if (checkInputs) {
      let payload = convertPayload(size, inputs);
      console.log(payload);
      dispatch(makeResultAction(payload));
    } else {
      toast("Please refer given input format");
    }
  };

  return (
    <div className={styles.main_form_box}>
      <h4>Enter Input: </h4>
      <div className={styles.form__box}>
        <div className={styles.roomInput}>
          <label htmlFor="room">Room Size</label>
          <input
            type="text"
            id="room"
            placeholder="5 5"
            onChange={(e) => setSize(e.target.value)}
            value={size}
          />
        </div>
        <div className={styles.inputbox}>
          {inputs.map((el, index) => (
            <div key={el.id} className={styles.each__inputbox}>
              <div>
                <input
                  type="text"
                  placeholder="1 2 N"
                  value={el.position}
                  name="position"
                  onChange={(event) => handleChange(event, el.id)}
                />
                <div>Initial Position</div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="LFLFLFLFF"
                  value={el.command}
                  name="command"
                  onChange={(event) => handleChange(event, el.id)}
                />
                <div>Commands to Follow</div>
              </div>
              <button onClick={handleAddInput}>Add Field</button>
              {index > 0 && (
                <button onClick={() => handleRemoveInput(index)}>Remove</button>
              )}
            </div>
          ))}
        </div>
        <button onClick={() => handleInputRun()}>Run ➤</button>
      </div>
    </div>
  );
};

export default InputForm;

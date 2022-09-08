import React from "react";
import styles from "./output.module.css";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
const Output = () => {
  const { isLoading, isError, output } = useSelector(
    (state) => state.outputState
  );
  return (
    <>
      {isLoading ? (
        <div className={styles.main__outputbox}>
          <Loading />
        </div>
      ) : (
        <div className={styles.main__outputbox}>
          <h4>Output: </h4>
          <br />

          {output && output?.map((elem) => <div>{elem.join(" ")}</div>)}
        </div>
      )}
    </>
  );
};

export default Output;

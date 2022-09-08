import "./App.css";
import ProblemStatement from "./components/ProblemStatement/ProblemStatement";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputForm from "./components/Form/InputForm";
import Output from "./components/Output/Output";
function App() {
  return (
    <>
      <ToastContainer />
      <div className="main__container">
        <ProblemStatement />
        <div className="input__output">
          <InputForm />
          <Output />
        </div>
      </div>
    </>
  );
}

export default App;

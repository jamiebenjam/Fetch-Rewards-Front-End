import "./App.css";
import { useEffect, useState } from "react";
import Form from "./Form";

function App() {
  // const [occupations, setOccupations] = useState([]);
  // const [states, setStates] = useState([]);

  // useEffect(() => {
  //   fetch("https://frontend-take-home.fetchrewards.com/form")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setOccupations(data.occupations);
  //       setStates(data.states);
  //     });
  // }, []);

  // console.log(occupations);
  // console.log(states);

  return (
    <div className="App">
      im making a form yay
      <Form />
    </div>
  );
}

export default App;

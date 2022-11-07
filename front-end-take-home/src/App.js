import "./App.css";
import { useState } from "react";
import UserForm from "./UserForm";
import UserFormSuccess from "./UserFormSuccess";
import Main from "./Main";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="app">
      {isSubmitted ? (
        <UserFormSuccess />
      ) : (
        <UserForm setIsSubmitted={setIsSubmitted} />
      )}
      <Main />
    </div>
  );
}

export default App;

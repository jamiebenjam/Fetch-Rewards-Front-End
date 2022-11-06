import "./App.css";
import { useState } from "react";
import UserForm from "./UserForm";
import FormSuccess from "./FormSuccess";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log(isSubmitted);
  return (
    <div className="app">
      {!isSubmitted ? (
        <UserForm setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} />
      ) : (
        <FormSuccess />
      )}
    </div>
  );
}

export default App;

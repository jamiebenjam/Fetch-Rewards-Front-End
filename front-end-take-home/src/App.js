import "./App.css";
import { useState } from "react";
import UserForm from "./UserForm";
import FormSuccess from "./FormSuccess";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="app">
      {isSubmitted ? (
        <FormSuccess />
      ) : (
        <UserForm setIsSubmitted={setIsSubmitted} />
      )}
    </div>
  );
}

export default App;

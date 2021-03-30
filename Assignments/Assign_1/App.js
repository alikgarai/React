import { useState } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

function App() {
  let [userName, setUserName] = useState("Ankit");

  const onChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <UserInput change={onChangeHandler} currName={userName} />
      <UserOutput uname={userName} />
      <UserOutput uname="Alik" />
    </div>
  );
}

export default App;

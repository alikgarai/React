import "./UserInput.css";

const userInput = (props) => {
  return (
    <form className="Frame">
      <label>Enter Name:&ensp;</label>
      <input
        style={{ fontSize: "25px" }}
        type="text"
        onChange={props.change}
        value={props.currName}></input>
    </form>
  );
};

export default userInput;

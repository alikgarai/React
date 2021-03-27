import "./UserOutput.css";

const style = {
  fontWeight: "bold",
  color: "orange",
};

const userOutput = (props) => {
  return (
    <div className="Body">
      <p>
        Hello <span style={style}>{props.uname}</span>, Welcome to React Course
      </p>
      <p>This is Assignment 1</p>
    </div>
  );
};

export default userOutput;

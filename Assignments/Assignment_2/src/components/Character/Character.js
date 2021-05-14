const style = {
  display: "inline-block",
  padding: "16px",
  textAlign: "center",
  margin: "16px",
  border: "1px solid black",
  fontSize: "20px",
};

const component = (props) => {
  return (
    <div onClick={props.clickEvent} style={style}>
      {props.displayChar}
    </div>
  );
};

export default component;

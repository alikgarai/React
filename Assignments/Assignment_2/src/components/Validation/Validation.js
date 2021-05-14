import "../../containers/App.css";

const component = (props) => {
  let str = props.count > 5 ? "Text long enough" : "Text too short";
  return <p className="Main">{str}</p>;
};

export default component;

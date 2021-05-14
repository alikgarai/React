import { Component } from "react";
import "./App.css";
import Validation from "../components/Validation/Validation";
import Character from "../components/Character/Character";

class App extends Component {
  state = {
    sText: "",
  };

  onChangeHandler = (event) => {
    this.setState({ sText: event.target.value });
  };

  onClickHandler = (index) => {
    const charArray = this.state.sText.split("");
    charArray.splice(index, 1);
    let finalString = charArray.join("");
    // let finalString = "";
    // for (let str of charArray) {
    //   finalString += str;
    // }
    this.setState({ sText: finalString });
  };

  render() {
    const charList = this.state.sText.split("").map((character, index) => {
      return (
        <Character
          key={index}
          displayChar={character}
          clickEvent={() => this.onClickHandler(index)}
        />
      );
    });
    return (
      <div className="App">
        <input
          style={{ marginTop: "16px", fontSize: "20px" }}
          type="text"
          onChange={this.onChangeHandler}
          value={this.state.sText}></input>
        <Validation count={this.state.sText.length} />
        {charList}
      </div>
    );
  }
}

// Using Functional Component and useState for state management

// function App() {
//   let [sText, setText] = useState("");
//   let charArray = sText.split("");

//   const onChangeHandler = (event) => {
//     setText(event.target.value);
//   };

//   const onClickHandler = (index) => {
//     charArray.splice(index, 1);
//     let finalString = charArray.join("");
//     // let finalString = "";
//     // for (let str of charArray) {
//     //   finalString += str;
//     // }
//     setText(finalString);
//   };

//   const charList = charArray.map((character, index) => {
//     return (
//       <Character
//         key={index}
//         displayChar={character}
//         clickEvent={() => onClickHandler(index)}
//       />
//     );
//   });

//   return (
//     <div className="App">
//       <input
//         style={{ marginTop: "16px", fontSize: "20px" }}
//         type="text"
//         onChange={onChangeHandler}
//         value={sText}></input>
//       <Validation count={sText.length} />
//       {charList}
//     </div>
//   );
// }

export default App;

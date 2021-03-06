## How to use?

1. Download the project folder.
2. Run "npm install" in the extracted folder
3. Run "npm start" to view the project


## Assign_1
  1. Create TWO new components: Userlnput and UserOutput 
  2. Userlnput should hold an input element, UserOutput two paragraphs 
  3. Output multiple UserOutput components in the App component (any paragraph texts of your choice) 
  4. Pass a username (of your choice) to UserOutput via props and display it there 
  5. Add state to the App component (=> the username) and pass the username to the UserOutput component 
  6. Add a method to manipulate the state an event-handler method) 
  7. Pass the event-handler method reference to the Userlnput component and bind it to the input-change event 
  8. Ensure that the new input entered by the user overwrites the old username passed to UserOutput 
  9. Add two-way-binding to your input (in Userlnput) to also display the starting username 
  10. Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets


## Assign_2
  1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph). 
  2. Create a new component ValidationComponent) which receives the text length as a prop 
  3. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length) 
  4. Create another component CharComponent) and style it as an inline box display: inline-block, padding: 16px, text-align: center, margin: 16px, border: Ipx solid 
  black). 
  5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop. 
  6. When you click a CharComponent, it should be removed from the entered text. 
 
    Hint: Keep in mind that JavaScript strings are basically arrays!

## References
- Udemy Course - [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

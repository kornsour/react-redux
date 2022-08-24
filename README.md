# React Redux Sandbox

Various projects using React

## Development

From the terminal, cd into a project and run `npm start`

## Helpful Links

- [React](https://reactjs.org/)
- [semantic-ui](http://semantic-ui.com/)
- [babel](https://babeljs.io/)
- [Redux](https://redux.js.org/)
- [Unsplash API](https://unsplash.com)
- [Axios NPM Package](https://www.npmjs.com/package/axios)

## Notes

### Class vs Function Based Components

- Class components
  - Have easier code organization
  - Can use 'state' (another React system)
    - Easier to handle user input
  - Understands lifecycle events
    - Easier to do things when the app first starts
- Rules of Class Components
  - Must be a Javascript class
  - Must extend (subclass) React.Component
  - Must define a 'render' method that returns some amount of JSX

### Rules of State

- Only usable with class components
  - Technically some exceptions
- You will confuse props with state
- 'State' is a JS object that contains data relevatnt to a component to (almost) instantly rerender
- State must be initialized when a component is created
- State can only be updated using the function 'setState'

### Component Lifecycle

- constructor
- render
  - content visible on screen
- componentDidMound
  - sit and wait for updates
- componentDidUpdate
  - sit and wait until this component is no longer shown
- componentWillUnmount

### Other lifecycle methods (rarely used)

- shouldCompoentUpdate
- getDerivedStateFromProps
- getSnapshotBeforeUpdate

### Controlled vs Uncontrolled Elements

- Example Controlled Element Flow
  - User types in input
  - Callback gets invoked
  - We call setState with the new value
  - Component rerenders
  - Input is told what its value is (coming from state)
- Uncontrolled Elements
  - Don't really know what the value of the input is right now
  - The source of truth is in the HTML document, not the react component
- Controlled Elements
  - The React side of the app is driving all the data flowing through our app
  - Not storing data inside the DOM
  - We can look directly at the React component and see the value of the input

### Understanding "this" in JavaScript

What is "this" used for in a class?

- "this" refers to an instance of the SearchBar class
- So you could access the instance's state with "this.state"

How is the value of "this" determined in a function?

- An instance of the class is instantiated followed by a function call

        class Car {
            setDriveSound(sound) {
                this.sound = sound;
            }

            drive() {
                return this.sound;
            }
        }

        const car = new Car();
        car.setDriveSound('Vroom!');

- But what happens when we set a variable as a function itself?

        const drive = car.drive;
        drive(); // Cannot read property 'sound' of undefined

- So when you get an error in React similar to "Cannot read property 'state' of undefined", the same type of thing is happening
  - At that point in time, "this" is undefined

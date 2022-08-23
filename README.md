# React Redux Sandbox

Various projects using React

## Development

From the terminal, cd into a project and run `npm start`

## Helpful Links

- [React](https://reactjs.org/)
- [semantic-ui](http://semantic-ui.com/)
- [babel](https://babeljs.io/)
- [Redux](https://redux.js.org/)

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

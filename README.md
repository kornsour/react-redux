# React Redux Sandbox

Various projects using React

## Development

From the terminal, cd into a project and run `npm start`

## Helpful Links

- [React](https://reactjs.org/)
- [semantic-ui](http://semantic-ui.com/)
- [babel](https://babeljs.io/)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Unsplash API](https://unsplash.com)
- [Axios NPM Package](https://www.npmjs.com/package/axios)
- [YouTube Data API](https://developers.google.com/youtube/v3/docs/search/list)
- [lodash](https://lodash.com/)
- [React Router](https://reactrouter.com/en/main)
- [Redux Form](https://redux-form.com/8.3.0/)

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

### Event Handlers

- Anytime you have a callback function, use arrow function syntax to bind a function and make sure it has the appropriate value of "this"
- With props, we only communicate from a parent compoenent to a child component
  - To go from a child to a parent, we pass a callback from the parent to the child and the child then calls the callback
- Will most likely want to use the "map" function when rendering lists
  - Make sure to define a unique "key" for each list item
- If we want to reach into the DOM and interact with an individual element, we're going to create a ref inside the constructor and wire it up to the individual element by passing it as a ref property

### Hooks System

- useState
  - Function that lets you use state in a functional componenet
- useEffect
  - Function that lets you use something like lifecycle methods in a functional component
  - We can configure the hook to run some code automatically in one of three scenarios:
    - When the component is rendered for the first time only
      - An empty array [] as the second argument of useEffect
    - When the component is rendered for the first time and whenever it re-renders
      - Nothing passed as second arugment
    - When the component is rendered for the irst time and (whenever it re-renders and some piece of data has changed)
      - An array with data in it [data] as the second argument
- useRef
  - Function that lets you create a 'ref'in a function component
- Hooks are a way to write usable code, instead of more classic techniques like inheritance
- Use primative hooks to create custom hooks

### Custom Hooks

- Best way to create reusable code in a React project (besides components)
- Created by extracting hook-related code out of a function component
- Custom hooks always make use of at least one primitive hook internally
- Each custom hook should have one purpose
- Data-fetching is a great thing to try to make reusable
- Process for creating reusable hooks
  - NOTE: custom hooks are not a one size fits all kind of thing
    - So this process may not cut it for every situtation
  - Identify each line of code related to some single purpose
  - Identify the inputs to that code
  - Identify the outputs of that code
  - Extract all of the code into a separate function, receiving the inputs as aguments and returning the outputs

### Redux

- What is it?
  - State management library
  - Makes creating complex applications easier
  - Not required to create a React app
  - Not explicitly designed to work with React
- Cycle Analogy
  - Action Creator
    - Can think of it like a customer of a company dropping off a form
  - Action
    - Like a form that wants to change some sort of data at the company
  - Dispatch
    - Like a form receiver that makes copies of the form and hands it off to different departments in the company
  - Reducers
    - Like departments in the company that have their own separate policies, claims, etc (separate slices of data)
    - When changing something inside a reducer, always avoid modifying existing data structures
    - In ES2015, using something like `...myArray, action.payload` takes an existing array (myArray) and moves all the records in that array to a new array (action.payload)
  - State
    - Like compiled department data
- Redux Notes
  - Cycle
    - To change state of our app, we call an Action Creator
      - The Action Creator produces an Action
        - The Action gets fed to dispatch
          - Dispatch forwards the action to Reducers
            - The Reducer creates new State
              - The app waits until we need to update state again and the process starts over
  - One of the main goals of Redux is to have a much more stable level of complexity as your app grows
    - We can only modify our data through Action Creators, so our app is more self documenting
    - Clearer for engineers who start on your project
    - We want a very small, set number of ways that we can modify our data
  - Redux does not automatically detect action creators being called
    - Redux does not automatically detect a function returning an object that is an 'action'
  - Packages
    - redux: the redux library
    - react-redux: integration layer between react and redux
    - axios: helps us make network requests
    - redux-thunk: middleware to help us make requests in a redux application
  - General Data Loading with Redux
    - Component gets rendered onto the screen
    - Component's 'componentDidMount' lifecycle method gets called
    - We call action creator from 'componentDidMount'
    - Action creator runs code to make an API request
    - API responds with data
    - Action creator returns an 'action' with the fetched data on the 'payload' property
    - Some reducer sees the action, returns the data off the 'payload'
    - Because we generated some new state object, redux/react-redux cause our React app to be rerendered
  - Action creators must return plain JS objects with a type property
- Middleware in Redux
  - Function that getrs called with every action we dispatch
  - Has the ability to STOP, MODIFY, or otherwise mess around with actions
  - Tons of open source middleware exist
  - Most popular use of middleware is for dealing with async actions
  - We are going to use middleware called 'Redux-Thunk' to solve our async issues
- Redux Thunk
  - Normal Rules
    - Action Creators must return action objects
    - Actions must have a type property
    - Actions can optionally have a 'payload'
  - Rules with Redux Thunk
    - Action Creators can return action objects
    - OR Action Creators can return functions
      - If an action object gets returns, it must have a type
      - If an action objects gets returned, it can optionally have a 'payload'
- Rules of Reducers
  - Must return any value besides 'undefined'
  - Produces 'state' or data to be used inside of your app using only previous state and the action (reducers are pure)
  - Must not return reach 'out of itself' to decide what value to return
  - Must not mutate its input 'state' argument
    - Misleading, its easier to tell beginners "don't mutate state ever" than to tell them when they can/can't
    - Corner case for when mutaing state will result in an error
      - NOTE: Best practice is to not mutate state but this helps better understand what is happening behind the scenes of Redux
      - If you accidentally return the same value for state, your React app will never re-render
- Navigation
  - User wants to navigate to another page in our app
  - User clicks a "Link" tag
  - React Router prevents the browser from navigating to the new page and fetching new index.html file
  - URL still changes
  - "History" sees updated URL, takes URL and sends it to BrowserRouter
  - BrowserRouter communicates the URL to Route components
  - Different router types:
    - BrowserRouter
      - Uses everything after the TLD (.com, .net, etc) or port as the "path"
      - localhost:3000/pagetwo
    - HashRouter
      - Uses everything after a "#" as the "path"
      - localhost:3000/#/pagetwo
    - MemoryRouter
      - Doesn't use the URL to track navigation
      - localhost:3000/
- OAuth for Servers
  - Results in a 'token' that a server can use to make requests on behalf of the user
  - Usually used when we have an app that needs to access user data when they are not logged in
  - Difficult to setup because we need to store a lot of info about the user
- OAuth for JS Browser Apps
  - Results in a 'token' that a browser app can use to make requests on behalf of the user
  - Usually used when we have an app that only needs to access user data while they are logged in
  - Very easy to set up thanks to Google's JS lib to automate flow

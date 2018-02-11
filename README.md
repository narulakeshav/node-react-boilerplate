# Node/React Boilerplate
A minimal boilerplate for MERN Stack (Mongo, Express, React/Redux, and Node)

##  Getting Started
Clone this repository
```
git clone https://github.com/narulakeshav/node-react-boilerplate.git
```

Then to run the boilerplate, do:
```
cd node-react-boilerplate
yarn && yarn dev
```
## Pre-Reqs
Make sure you have these things installed, with at least these version numbers:
- [Yarn](https://yarnpkg.com) `>=1.3.*`
- [NodeJS](https://nodejs.org) `>=8.*.*`
- [MongoDB](https://www.mongodb.com/) `>=3.4.*`

## Dev Environment
For the front-end, we're just the `create-react-app` script that scaffolding the directory. In this instance, we've integrated `scss` which updates and re-renders a css file on any changes.

## Architecture
The boilerplate is divided into two main sections:
- `client`: which handles the client-side code, with React and Redux
- `server`: which handles the server-side code, with Express and Mongo

We'll be going over the architecture for both client and server in detail. The client-side code runs on port `3000` and the server-side code runs on port `8080`.

They're connected through a `proxy`. Here's the snippet that you can find in package.json file in the client:
```json
"proxy": {
  "/api/*": {
    "target": "http://localhost:8080"
  }
}
```

Essentially, any call to `/api/some-route` route will proxy the request to `http://localhost:8080`, which is the port our server-side is running on.

## Client
The `client` folder is where all of your React and Redux code goes. It is scaffolded from the `create-react-app` command.

The client includes **public** folder, which contains all of your assets like images, your `index.html` file, and `manifest.json` file (the typical).

The meat of the client side code lies in the `src` directory. This is the breakdown of the folder:
- `actions`: action creators for redux
- `components`: components to render out data from containers
- `containers`: connected to redux store; all the data is handled here
- `reducers`: functions that update the state of the redux store
- `scss`: default scss files for global use (**_colors**, **_font**, **_mixins**, **_base**, etc)
- `utils`: utility functions for general frontend

#### Notice
As you may have noticed, we're following the "Presentational vs Container components" pattern, which simply states that we use Containers to handle our data (Redux in this case), and we handle the UI and the looks of the component (the Presentational).

Check out this [this article on Medium](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) that goes in depth about the difference.

### Components
All the presentational components are in the ./src/components directory and containers are in ./src/containers directory.

#### Creating a Component
If you need to create a component, for example, `Car.js`, create a `Car` folder in `src/components`. Inside the `Car` folder, create `index.js` file.

#### Adding Styles to Components
If you need to add styling to your component, create a `styles.scss` file within the same component.
```
components
├── Car
│   └── index.js
│   └── styles.scss
```

In the `styles.scss` file, import this:
```scss
@import 'scss/_base';
```

When you save this file, a `styles.css` file will automatically be generated. Import the generated `css` file in the component's `index.js` file.

### Creating a Container
If you need to create a container, for example, for Cars, name the file, `CarContainer.js` and put it inside the `src/containers/` folder.

Once done handling the data, pass it to its corresponding component in the `render` method.
```jsx
// src/containers/CarContainer.js
class CarContainer extends Component {
  // Fetch/Manipulate data ...

  render() {
    return <Car car={this.props.someCar} />
  }
}
```

```js
// src/components/Car/index.js
import './styles.scss';

const Car = ({ car }) => (
  <div>
    <h1>{car.name}</h1>
    <p>{car.model}</p>
  </div>
);
```

## Server
The server side is very straightfoward. This is the internal structure.
```
server
├── config
├── middlewares
├── models
├── routes
└── index.js
```
- `config`: has all the keys for the project.
- `middlewares`: custom designed middleware for external validations
- `models`: schemas designed for Mongo and Mongoose
- `routes`: routes for the entire backend app
- `index.js`: main server file

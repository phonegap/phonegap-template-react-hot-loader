# React Hot Reloading Template

React.js Cordova / PhoneGap Template with Babel, Webpack and Hot Reloading

## Getting Started

### Prerequisites

To use this template, you'll need Node.js v4 or newer.

### Installation

@TODO (template instructions)
`npm install`

### Run the app in the browser / simulator

Run this to start the development webpack server:

```
npm start
```

You can then open the app in your browser by visiting [localhost:8080](http://localhost:8080)

Open it in the iOS Simulator by running (in another terminal):

```
npm run ios
```

In this mode, the app will live-reload changes to React components using [react-hot-loader](https://github.com/gaearon/react-hot-loader) and CSS changes using the Webpack CSS loader.

### Build the app for production

To prepare the app for packaging, run:

```
npm run prepare
```

This will switch your `config.xml` file to production mode, build the app bundle to `/www` using Webpack, and run `cordova prepare` for you.

After that, the normal Cordova / PhoneGap commands can be used such as `phonegap serve`, or `cordova run ios`, etc.

# License

MIT. Copyright (c) 2016 Jed Watson.

# picture-tour-app

Example React.js Cordova / PhoneGap App with Babel, Webpack and Hot Reloading

## Background

This is a modern rebuild of the app I wrote to propose to my wife back in September 2012, written as a demo for my PhoneGap Day US talk in January 2016.

The app was a companion for a walk-around-Sydney day out I designed, at the last step of which I proposed (she said yes!)

Each destination had a "hint" image; the next hint was revealed as we reached the previous one. The mobile app polls an API to detect when the next step has been unlocked.

This project includes a Node.js server for storing the available steps, and a clone of the React.js Cordova app I installed on her phone.

The original images and steps haven't been included, instead there are some photos we took on the day with a configurable number of steps.

## Getting Started

### Prerequisites

To run this app, you'll need Node.js v4 or newer, and the `cordova` package installed globally.

If you want to run it in the iOS simulator, you'll also need a Mac with XCode and the `ios-sim` package installed globally.

It _should_ work on Android as well, but I haven't had a chance to test it yet.

### Installation

Clone or download this repo, then run `npm install` in the root folder. You'll also need to add your target platform with the cordova CLI.

```
git clone https://github.com/JedWatson/picture-tour-app.git
cd picture-tour-app
npm install
cordova platforms add ios
```

### Start the API Server

You'll need to first start the node.js API server:

```
npm run server
```

This will start the API server on port `3000`. You can use your browser to control the state of the application by visiting [localhost:3000](http://localhost:3000)

**NOTE** The app currently expects to hit the API server on localhost, so it'll only run locally for now. I'll fix this soon, or a PR would be very welcome!

### Run the app in the browser / simulator

Run this to start the development webpack server:

```
npm start
```

You can then open the app in your browser by visiting [localhost:8080](http://localhost:8080)

Open it in the iOS Simulator by running:

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

You can then open the iOS project `/platforms/ios/Picture Tour.xcodeproj` and build and run it in XCode.

# License

MIT. Copyright (c) 2016 Jed Watson.

# IP Address Tracker

This is a React application that tracks and displays the location of a given IP address using the IP Geolocation API by IPify and LeafletJS for map rendering.

## Depolyments

This repository is deployed on Netlify here: https://react-ip-address-geolocator.netlify.app/

## Layout Previews

![Desktop view](./src/images/desktop-design.jpg)

![Mobile view](./src/images/mobile-design.jpg)

## Getting Started

### Requirements

- Node.js, NPM, and Vite

- An IP Geolocation API key from IPify https://geo.ipify.org/ storeded in an environment variable name VITE_API_KEY

- A web browser for testing

### Install

#### Clone the repo

```
git clone https://github.com/shanosha/mod-11.git
```

#### Navigate into project

```
cd mod-11
```

#### Install dependencies

```
npm install
```

### Usage

#### Add your API key

- Create a file in the root directory called ".env".

- In the file, add the following line of code with your API key:

```javascript
VITE_API_KEY = "YOUR_API_KEY_HERE"
```

#### Run in development mode

```
npm run dev
```

Open the app in your browser at the URL address displayed in your terminal. You can begin using and testing the app.

#### Build for production

```
npm run build
```

This outputs a production bundle to dist/.

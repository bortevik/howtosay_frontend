'use strict';

require('./index.html');

const Elm = require('./Main.elm');
const app = Elm.Main.fullscreen();

// Ports
app.ports.storeToStorage.subscribe(([key, value]) => {
  localStorage.setItem(key, value);
});

app.ports.requestLoadFromStorage.subscribe(key => {
  app.ports.loadFromStorage.send(localStorage.getItem(key));
});


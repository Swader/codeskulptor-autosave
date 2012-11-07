window.manifest = {
  "name": "Codeskulptor Autosave",
  "icon": "../../icon48.png",
  "settings": [
    {
      "tab": "Main settings",
      "group": "Frequency settings",
      "name": "freq",
      "type": "slider",
      "label": "Frequency in minutes:",
      "min": 1,
      "max": 100,
      "step": 1,
      "display": true,
      "displayModifier": function (value) {
        return value + "min";
      },
      "default": 3
    }
  ]
};

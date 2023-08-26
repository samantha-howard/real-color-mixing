import { r as registerInstance, j as forceUpdate, h, e as Host, g as getElement } from './index-95755a3f.js';

const HTMLClasses = {
  colorSwatch: "color-swatch"
};

const colorSwatchScss = ".color-swatch{width:20rem;height:20rem;margin-left:auto;margin-right:auto}";

let ColorSwatch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.value = { red: 0, green: 0, blue: 0 };
    this.convertedColor = "#000000";
  }
  onValueChange(newValue) {
    const convertedColor = `#${(newValue.red * 255).toString(16).slice(0, 2)}${(newValue.green * 255).toString(16).slice(0, 2)}${(newValue.blue * 255).toString(16).slice(0, 2)}`;
    this.convertedColor = convertedColor;
    forceUpdate(this.hostElement);
  }
  render() {
    return (h(Host, null, h("div", { style: { background: this.convertedColor }, class: HTMLClasses.colorSwatch }), h("h1", { class: HTMLClasses.colorSwatch }, this.convertedColor)));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "value": ["onValueChange"]
  }; }
};
ColorSwatch.style = colorSwatchScss;

export { ColorSwatch as color_swatch };

import { r as registerInstance, i as createEvent, h, e as Host } from './index-95755a3f.js';

const colorPickerScss = "input,h1{width:18rem;height:18rem;margin:2rem;margin-top:0.5rem}";

let ColorPicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.colorPickerValueChange = createEvent(this, "colorPickerValueChange", 7);
    this.value = { red: 0, green: 0, blue: 0 };
    this.onColorPickerChange = () => {
      const selectedValue = this.colorPickerReference.value.replace("#", "");
      this.value = {
        red: parseInt(selectedValue.slice(0, 2), 16),
        green: parseInt(selectedValue.slice(2, 4), 16),
        blue: parseInt(selectedValue.slice(4, 6), 16)
      };
      this.colorPickerValueChange.emit({ rgb: this.value, id: this.uniqueId });
    };
  }
  /**
   * Renders the home page and subsequent components
   * @category Private
   * @returns {VNode} the rendered page
   */
  render() {
    return (h(Host, null, h("input", { ref: (el) => this.colorPickerReference = el, type: "color", name: this.label, id: this.uniqueId, value: "#000000", onChange: this.onColorPickerChange }), h("h1", null, `#${(this.value.red * 255).toString(16).slice(0, 2)}${(this.value.green * 255).toString(16).slice(0, 2)}${(this.value.blue * 255).toString(16).slice(0, 2)}`)));
  }
};
ColorPicker.style = colorPickerScss;

export { ColorPicker as color_picker };

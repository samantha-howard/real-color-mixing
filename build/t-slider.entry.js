import { r as registerInstance, i as createEvent, h, e as Host } from './index-95755a3f.js';

const tSliderScss = "";

let TSlider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sliderValueChange = createEvent(this, "sliderValueChange", 7);
    this.value = "3";
  }
  tSliderChange() {
    console.log(this.tSliderReference);
    this.value = this.tSliderReference.value;
    console.log(this.value);
    this.sliderValueChange.emit(parseInt(this.value));
  }
  render() {
    return (h(Host, null, h("input", { ref: (el) => this.tSliderReference = el, type: "range", name: this.label, id: this.uniqueId, min: "1", max: "10", onChange: this.tSliderChange }), h("h1", null, this.value)));
  }
};
TSlider.style = tSliderScss;

export { TSlider as t_slider };

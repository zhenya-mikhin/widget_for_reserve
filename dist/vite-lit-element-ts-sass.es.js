import { css, LitElement, html } from "lit";
import { property, customElement } from "lit/decorators.js";
var index = css``;
var styles = ":root {\n  --body-background-dark: #0d1117;\n  --body-background-light: #fff;\n  --body-background-default: var(--body-background-light);\n  --components-background-dark: #4f4f4f;\n  --components-background-light: #fff;\n  --components-background-default: var(--components-background-light);\n  --components-box-shadow-dark: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);\n  --card-background-dark: #2e3035;\n  --card-background-light: rgba(71, 147, 255, 0.2);\n  --card-background-default: var(--card-background-light);\n  --card-box-shadow-dark: 0px 3px 20px rgba(5, 5, 5, 0.28);\n  --card-box-shadow-light: 0px 3px 20px rgba(147, 144, 144, 0.28);\n  --card-box-shadow-default: var(--card-box-shadow-light);\n  --text-color-dark: #44413e;\n  --text-color-light: #fff;\n  --text-color-default: var(--text-color-light);\n}\n\n:host .reserve-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  min-width: 300px;\n  padding: 30px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  text-align: center;\n}\n\n:host .reserve-form__title {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 500;\n  color: #44413e;\n}\n\n:host .reserve-form__input {\n  padding: 10px 20px;\n  border: solid 1px #ddd;\n  border-radius: 4px;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 300;\n  transition: border-color 0.2s;\n}\n\n:host .reserve-form__input:hover {\n  border-color: #e16640;\n}\n\n:host .reserve-form__button {\n  padding: 13px 0;\n  border: none;\n  border-radius: 4px;\n  background-color: #e16640;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 500;\n  color: #fff;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background-color 0.2s, opacity 0.2s;\n}\n\n:host .reserve-form__button:hover {\n  background-color: #d0613e;\n}\n\n:host .reserve-form__button:active {\n  opacity: 0.8;\n}";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let MyElement = class extends LitElement {
  constructor() {
    super(...arguments);
    this.date = new Date();
  }
  render() {
    return html`
      <form class="reserve-form">
        <h2 class="reserve-form__title">Make a reservation</h2>

        <select class="reserve-form__input">
          <option>2 guests</option>
        </select>

        <input class="reserve-form__input" type="date">

        <select class="reserve-form__input">
          <option>08:00 PM</option>
        </select>

        <button class="reserve-form__button">
          Reserve now
        </button>
      </form>
    `;
  }
};
MyElement.styles = styles;
__decorateClass([
  property()
], MyElement.prototype, "date", 2);
MyElement = __decorateClass([
  customElement("my-element")
], MyElement);
let date = new Date();
console.log(date.getFullYear(), date.getMonth() + 1, date.getDate());
export { MyElement };

import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import './styles/index.scss'
import styles from './my-element.scss'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = styles

  @property({ type: Date }) today = new Date()

  private _getToday() {
    const year = this.today.getFullYear()
    const month: string | number = `${this.today.getMonth()}`.length === 1 ? '0' + (this.today.getMonth() + 1) : this.today.getMonth()
    const day = this.today.getDate()

    return `${year}-${month}-${day}`
  }

  render() {
    return html`
      <form class="reserve-form">
        <h2 class="reserve-form__title">Make a reservation</h2>

        <select class="reserve-form__input">
          <option>2 guests</option>
        </select>

        <input class="reserve-form__input"
               type="date" min="${this._getToday()}"
               value="${this._getToday()}">

        <select class="reserve-form__input">
          <option>08:00 PM</option>
        </select>

        <button class="reserve-form__button">
          Reserve now
        </button>
      </form>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}

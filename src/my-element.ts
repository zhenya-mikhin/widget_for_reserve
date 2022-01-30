import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { DateTime } from 'luxon'

import './styles/index.scss'
import styles from './my-element.scss'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = styles

  @property()
  dt = DateTime.now()
  dtFormat = this.dt.setLocale("en").toFormat("MMM dd, yyyy")

  private _getToday() {
    const year = this.dt.year
    const month = `${this.dt.month}`.length === 1 ? '0' + this.dt.month : this.dt.month
    const day = this.dt.day

    return `${year}-${month}-${day}`
  }

  render() {
    return html`
      <form class="reserve-form">
        <h2 class="reserve-form__title">Make a reservation</h2>

        <section class="reserve-form__input-container">
          <select class="reserve-form__input reserve-form__input--select">
            <option value="2">2 guests</option>
          </select>
          <span class="reserve-form__text">2 guests</span>
          <div class="reserve-form__minus">
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.6 9.4h16.8a.6.6 0 0 1 0 1.2H1.6a.6.6 0 0 1 0-1.2z" fill="#000" fill-rule="evenodd" opacity=".5"/>
            </svg>
          </div>
          <div class="reserve-form__plus">
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="m9.412 9.419-7.863.037a.552.552 0 0 0-.55.548.538.538 0 0 0 .545.544l7.945-.038-.037 7.946a.539.539 0 0 0 .544.544.552.552 0 0 0 .548-.549l.038-7.862 7.87-.039a.55.55 0 0 0 .548-.547.541.541 0 0 0-.544-.544l-7.952.038.037-7.953A.541.541 0 0 0 9.997 1a.55.55 0 0 0-.547.548l-.038 7.871z" fill="#000" fill-rule="evenodd" opacity=".5"/>
            </svg>
          </div>
        </section>

        <section class="reserve-form__input-container">
          <input class="reserve-form__input reserve-form__input--select"
                 type="date" min="${this._getToday()}"
                 value="${this._getToday()}">
          <span class="reserve-form__text">${this.dtFormat}</span>
          <div class="reserve-form__drop">
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="m14.297 7.5-4.304 4.13-.459-.44-3.82-3.667L5 8.207 9.993 13 15 8.195l-.703-.695z" fill="#000" fill-rule="evenodd" opacity=".5"/>
            </svg>
          </div>
        </section>

        <section class="reserve-form__input-container reserve-form__input-container--last-child">
          <select class="reserve-form__input reserve-form__input--select">
            <option>${this.dt.setLocale("en").toLocaleString(DateTime.TIME_SIMPLE)}</option>
          </select>
          <span class="reserve-form__text">${this.dt.setLocale("en").toLocaleString(DateTime.TIME_SIMPLE)}</span>
          <div class="reserve-form__drop">
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="m14.297 7.5-4.304 4.13-.459-.44-3.82-3.667L5 8.207 9.993 13 15 8.195l-.703-.695z" fill="#000" fill-rule="evenodd" opacity=".5"/>
            </svg>
          </div>
        </section>

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

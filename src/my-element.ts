import { html, LitElement, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { DateTime } from 'luxon'

import './styles/index.scss'
import styles from './my-element.scss'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = unsafeCSS(styles)

  @property()
  date = ''

  @property()
  dt = DateTime.now()
  dtFormat = this.dt.setLocale("en").toFormat("MMM dd, yyyy")

  @property()
  guests = 2
  minAndMaxGuests = {MIN: 1, MAX: 100}
  guestsArray = Array.from(Array(100).keys())

  private _getToday() {
    return this.dt.toLocaleString().split('.').reverse().join('-')
  }

  private _selectGuests(evt: any) {
    const action = evt.currentTarget.dataset.action

    if (this.guests < this.minAndMaxGuests.MIN) throw new Error('Minimum number of guests 1')
    if (this.guests > this.minAndMaxGuests.MAX) throw new Error('Maximum number of guests 100')
    
    switch (action) {
      case 'minus':
        return this.guests--
      case 'plus':
        return this.guests++
    }

    return
  }

  private _changeSelect(evt: any) {
    const value = evt.currentTarget.value
    this.guests = value
  }

  private _changeDate(evt: any) {
    let value = evt.currentTarget.value
    this.date = DateTime.fromISO(value).toFormat("MMM dd, yyyy")
  }

  render() {
    return html`
      <form class="reserve-form">
        <h2 class="reserve-form__title">Make a reservation</h2>

        <section class="reserve-form__input-container">
          <select @change="${this._changeSelect}" class="reserve-form__input reserve-form__input--select">
            ${
              this.guestsArray.map(i => html`<option value="${i+1}">${i+1} guests</option>`)
            }
          </select>
          <span class="reserve-form__text">${this.guests} guests</span>
          <div class="reserve-form__minus" @click="${this._selectGuests}" data-action="minus">
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.6 9.4h16.8a.6.6 0 0 1 0 1.2H1.6a.6.6 0 0 1 0-1.2z" fill="#000" fill-rule="evenodd" opacity=".5"/>
            </svg>
          </div>
          <div class="reserve-form__plus" @click="${this._selectGuests}" data-action="plus">
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="m9.412 9.419-7.863.037a.552.552 0 0 0-.55.548.538.538 0 0 0 .545.544l7.945-.038-.037 7.946a.539.539 0 0 0 .544.544.552.552 0 0 0 .548-.549l.038-7.862 7.87-.039a.55.55 0 0 0 .548-.547.541.541 0 0 0-.544-.544l-7.952.038.037-7.953A.541.541 0 0 0 9.997 1a.55.55 0 0 0-.547.548l-.038 7.871z" fill="#000" fill-rule="evenodd" opacity=".5"/>
            </svg>
          </div>
        </section>

        <section class="reserve-form__input-container">
          <input class="reserve-form__input reserve-form__input--select"
                 type="date" min="${this._getToday()}"
                 value="${this._getToday()}"
                 @change="${this._changeDate}">
          <span class="reserve-form__text">${this.date || this.dtFormat}</span>
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

import { LitElement } from 'lit';
import { DateTime } from 'luxon';
import './styles/index.scss';
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResult;
    date: string;
    dt: DateTime;
    dtFormat: string;
    guests: number;
    minAndMaxGuests: {
        MIN: number;
        MAX: number;
    };
    guestsArray: number[];
    private _getToday;
    private _selectGuests;
    private _changeSelect;
    private _changeDate;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}

import { LitElement } from 'lit';
import { DateTime } from 'luxon';
import './styles/index.scss';
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResult;
    time: string;
    dt: DateTime;
    dtFormat: string;
    timeArray: never[];
    date: DateTime;
    initialTimeArray: DateTime[];
    guests: number;
    minAndMaxGuests: {
        MIN: number;
        MAX: number;
    };
    guestsArray: number[];
    private _getTimeArray;
    private _getToday;
    private _selectGuests;
    private _changeSelect;
    private _changeDate;
    private _changeTime;
    private _getSoon;
    private _fetchData;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}

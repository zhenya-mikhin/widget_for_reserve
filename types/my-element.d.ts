import { LitElement } from 'lit';
import { DateTime } from 'luxon';
import './styles/index.scss';
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResultGroup;
    dt: DateTime;
    dtFormat: string;
    private _getToday;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}

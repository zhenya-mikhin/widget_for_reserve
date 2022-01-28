import { LitElement } from 'lit';
import './styles/index.scss';
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResultGroup;
    today: Date;
    private _getToday;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}

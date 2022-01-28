import{r as c,e as l,h as f,T as u,n as p}from"./vendor.480e8d82.js";const g=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};g();var y=c``,h=`:root {
  --body-background-dark: #0d1117;
  --body-background-light: #fff;
  --body-background-default: var(--body-background-light);
  --components-background-dark: #4f4f4f;
  --components-background-light: #fff;
  --components-background-default: var(--components-background-light);
  --components-box-shadow-dark: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  --card-background-dark: #2e3035;
  --card-background-light: rgba(71, 147, 255, 0.2);
  --card-background-default: var(--card-background-light);
  --card-box-shadow-dark: 0px 3px 20px rgba(5, 5, 5, 0.28);
  --card-box-shadow-light: 0px 3px 20px rgba(147, 144, 144, 0.28);
  --card-box-shadow-default: var(--card-box-shadow-light);
  --text-color-dark: #44413e;
  --text-color-light: #fff;
  --text-color-default: var(--text-color-light);
}

:host .reserve-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 300px;
  padding: 30px;
  border-radius: 4px;
  background-color: #ffffff;
  text-align: center;
}

:host .reserve-form__title {
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #44413e;
}

:host .reserve-form__input {
  padding: 10px 20px;
  border: solid 1px #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;
  transition: border-color 0.2s;
}

:host .reserve-form__input:hover {
  border-color: #e16640;
}

:host .reserve-form__button {
  padding: 13px 0;
  border: none;
  border-radius: 4px;
  background-color: #e16640;
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s, opacity 0.2s;
}

:host .reserve-form__button:hover {
  background-color: #d0613e;
}

:host .reserve-form__button:active {
  opacity: 0.8;
}`,b=Object.defineProperty,m=Object.getOwnPropertyDescriptor,i=(a,o,n,t)=>{for(var e=t>1?void 0:t?m(o,n):o,r=a.length-1,s;r>=0;r--)(s=a[r])&&(e=(t?s(o,n,e):s(e))||e);return t&&e&&b(o,n,e),e};let d=class extends f{constructor(){super(...arguments);this.today=new Date}_getToday(){const a=this.today.getFullYear(),o=`${this.today.getMonth()}`.length===1?"0"+(this.today.getMonth()+1):this.today.getMonth(),n=this.today.getDate();return`${a}-${o}-${n}`}render(){return u`
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
    `}};d.styles=h;i([l({type:Date})],d.prototype,"today",2);d=i([p("my-element")],d);

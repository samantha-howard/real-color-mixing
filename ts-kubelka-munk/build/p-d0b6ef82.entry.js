import{r as t,h as s,g as i}from"./p-f8d51b4d.js";import{m as h,a as o}from"./p-2a2c80d3.js";import{A as e}from"./p-81099acf.js";import"./p-4d64b7b7.js";let c=class{constructor(s){t(this,s),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const s=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!s)return this.previousMatch=this.match,this.match=h(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!o(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?s(this.component,Object.assign({},t)):void 0}get el(){return i(this)}static get watchers(){return{location:["computeMatch"]}}};e.injectProps(c,["location","history","historyType","routeViewsUpdated"]),c.style="stencil-route.inactive{display:none}";export{c as stencil_route}
import{r as t,a as s,h as e,g as o}from"./p-f8d51b4d.js";import{s as n,a,c as i,b as r,h,d as c,e as l,f as u,l as p}from"./p-4d64b7b7.js";import{s as d,a as f,b as g,g as y,c as b,d as m}from"./p-cd8296b0.js";import{A as P}from"./p-81099acf.js";const w=(t,...s)=>{t||console.warn(...s)},v=()=>{let t,s=[];return{setPrompt:s=>(w(null==t,"A history supports only one prompt at a time"),t=s,()=>{t===s&&(t=null)}),confirmTransitionTo:(s,e,o,n)=>{if(null!=t){const a="function"==typeof t?t(s,e):t;"string"==typeof a?"function"==typeof o?o(a,n):(w(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),n(!0)):n(!1!==a)}else n(!0)},appendListener:t=>{let e=!0;const o=(...s)=>{e&&t(...s)};return s.push(o),()=>{e=!1,s=s.filter((t=>t!==o))}},notifyListeners:(...t)=>{s.forEach((s=>s(...t)))}}},k=(t,s="scrollPositions")=>{let e=new Map;const o=(s,o)=>{if(e.set(s,o),d(t,"sessionStorage")){const s=[];e.forEach(((t,e)=>{s.push([e,t])})),t.sessionStorage.setItem("scrollPositions",JSON.stringify(s))}};if(d(t,"sessionStorage")){const o=t.sessionStorage.getItem(s);e=o?new Map(JSON.parse(o)):e}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:o,get:t=>e.get(t),has:t=>e.has(t),capture:s=>{o(s,[t.scrollX,t.scrollY])}}},j={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+u(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:u,decodePath:a},slash:{encodePath:a,decodePath:a}},H=(t,s)=>{const e=0==t.pathname.indexOf(s)?"/"+t.pathname.slice(s.length):t.pathname;return Object.assign({},t,{pathname:e})},O={browser:(t,s={})=>{let e=!1;const o=t.history,u=t.location,p=t.navigator,d=f(t),m=!g(p),P=k(t),j=null!=s.forceRefresh&&s.forceRefresh,H=null!=s.getUserConfirmation?s.getUserConfirmation:y,O=null!=s.keyLength?s.keyLength:6,L=s.basename?n(a(s.basename)):"",S=()=>{try{return t.history.state||{}}catch(t){return{}}},U=t=>{t=t||{};const{key:s,state:e}=t,{pathname:o,search:n,hash:a}=u;let l=o+n+a;return w(!L||h(l,L),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+l+'" to begin with "'+L+'".'),L&&(l=c(l,L)),i(l,e,s||r(O))},A=v(),T=t=>{P.capture(V.location.key),Object.assign(V,t),V.location.scrollPosition=P.get(V.location.key),V.length=o.length,A.notifyListeners(V.location,V.action)},E=t=>{b(p,t)||x(U(t.state))},R=()=>{x(U(S()))},x=t=>{if(e)e=!1,T();else{const s="POP";A.confirmTransitionTo(t,s,H,(e=>{e?T({action:s,location:t}):B(t)}))}},B=t=>{let s=M.indexOf(V.location.key),o=M.indexOf(t.key);-1===s&&(s=0),-1===o&&(o=0);const n=s-o;n&&(e=!0,N(n))},C=U(S());let M=[C.key],Y=0,F=!1;const J=t=>L+l(t),N=t=>{o.go(t)},q=s=>{Y+=s,1===Y?(t.addEventListener("popstate",E),m&&t.addEventListener("hashchange",R)):0===Y&&(t.removeEventListener("popstate",E),m&&t.removeEventListener("hashchange",R))},V={length:o.length,action:"POP",location:C,createHref:J,push:(t,s)=>{w(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const e="PUSH",n=i(t,s,r(O),V.location);A.confirmTransitionTo(n,e,H,(t=>{if(!t)return;const s=J(n),{key:a,state:i}=n;if(d)if(o.pushState({key:a,state:i},"",s),j)u.href=s;else{const t=M.indexOf(V.location.key),s=M.slice(0,-1===t?0:t+1);s.push(n.key),M=s,T({action:e,location:n})}else w(void 0===i,"Browser history cannot push state in browsers that do not support HTML5 history"),u.href=s}))},replace:(t,s)=>{w(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const e="REPLACE",n=i(t,s,r(O),V.location);A.confirmTransitionTo(n,e,H,(t=>{if(!t)return;const s=J(n),{key:a,state:i}=n;if(d)if(o.replaceState({key:a,state:i},"",s),j)u.replace(s);else{const t=M.indexOf(V.location.key);-1!==t&&(M[t]=n.key),T({action:e,location:n})}else w(void 0===i,"Browser history cannot replace state in browsers that do not support HTML5 history"),u.replace(s)}))},go:N,goBack:()=>N(-1),goForward:()=>N(1),block:(t="")=>{const s=A.setPrompt(t);return F||(q(1),F=!0),()=>(F&&(F=!1,q(-1)),s())},listen:t=>{const s=A.appendListener(t);return q(1),()=>{q(-1),s()}},win:t};return V},hash:(t,s={})=>{let e=!1,o=null,u=0,d=!1;const f=t.location,g=t.history,b=m(t.navigator),P=null!=s.keyLength?s.keyLength:6,{getUserConfirmation:k=y,hashType:H="slash"}=s,O=s.basename?n(a(s.basename)):"",{encodePath:L,decodePath:S}=j[H],U=()=>{const t=f.href,s=t.indexOf("#");return-1===s?"":t.substring(s+1)},A=t=>{const s=f.href.indexOf("#");f.replace(f.href.slice(0,s>=0?s:0)+"#"+t)},T=()=>{let t=S(U());return w(!O||h(t,O),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+O+'".'),O&&(t=c(t,O)),i(t,void 0,r(P))},E=v(),R=t=>{Object.assign(V,t),V.length=g.length,E.notifyListeners(V.location,V.action)},x=()=>{const t=U(),s=L(t);if(t!==s)A(s);else{const t=T(),s=V.location;if(!e&&p(s,t))return;if(o===l(t))return;o=null,B(t)}},B=t=>{if(e)e=!1,R();else{const s="POP";E.confirmTransitionTo(t,s,k,(e=>{e?R({action:s,location:t}):C(t)}))}},C=t=>{let s=J.lastIndexOf(l(V.location)),o=J.lastIndexOf(l(t));-1===s&&(s=0),-1===o&&(o=0);const n=s-o;n&&(e=!0,N(n))},M=U(),Y=L(M);M!==Y&&A(Y);const F=T();let J=[l(F)];const N=t=>{w(b,"Hash history go(n) causes a full page reload in this browser"),g.go(t)},q=(t,s)=>{u+=s,1===u?t.addEventListener("hashchange",x):0===u&&t.removeEventListener("hashchange",x)},V={length:g.length,action:"POP",location:F,createHref:t=>"#"+L(O+l(t)),push:(t,s)=>{w(void 0===s,"Hash history cannot push state; it is ignored");const e="PUSH",n=i(t,void 0,r(P),V.location);E.confirmTransitionTo(n,e,k,(t=>{if(!t)return;const s=l(n),a=L(O+s);if(U()!==a){o=s,(t=>{f.hash=t})(a);const t=J.lastIndexOf(l(V.location)),i=J.slice(0,-1===t?0:t+1);i.push(s),J=i,R({action:e,location:n})}else w(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),R()}))},replace:(t,s)=>{w(void 0===s,"Hash history cannot replace state; it is ignored");const e="REPLACE",n=i(t,void 0,r(P),V.location);E.confirmTransitionTo(n,e,k,(t=>{if(!t)return;const s=l(n),a=L(O+s);U()!==a&&(o=s,A(a));const i=J.indexOf(l(V.location));-1!==i&&(J[i]=s),R({action:e,location:n})}))},go:N,goBack:()=>N(-1),goForward:()=>N(1),block:(s="")=>{const e=E.setPrompt(s);return d||(q(t,1),d=!0),()=>(d&&(d=!1,q(t,-1)),e())},listen:s=>{const e=E.appendListener(s);return q(t,1),()=>{q(t,-1),e()}},win:t};return V}};let L=class{constructor(e){t(this,e),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const s=this.history.win.document.getElementById(t.scrollToId);if(s)return s.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=s(this,"isServer"),this.queue=s(this,"queue")}componentWillLoad(){this.history=O[this.historyType](this.el.ownerDocument.defaultView),this.history.listen((t=>{t=H(t,this.root),this.location=t})),this.location=H(this.history.location,this.root)}scrollTo(t){const s=this.history;if(null!=t&&!this.isServer&&s)return"POP"===s.action&&Array.isArray(s.location.scrollPosition)?this.queue.write((()=>{s&&s.location&&Array.isArray(s.location.scrollPosition)&&s.win.scrollTo(s.location.scrollPosition[0],s.location.scrollPosition[1])})):this.queue.write((()=>{s.win.scrollTo(0,t)}))}render(){if(this.location&&this.history)return e(P.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},e("slot",null))}get el(){return o(this)}};export{L as stencil_router}
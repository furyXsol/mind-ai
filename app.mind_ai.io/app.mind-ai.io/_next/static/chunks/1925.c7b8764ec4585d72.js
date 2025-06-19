try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d6e74c92-05d8-470f-a85a-0c02df6b9dfc",e._sentryDebugIdIdentifier="sentry-dbid-d6e74c92-05d8-470f-a85a-0c02df6b9dfc")}catch(e){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1925],{1507:(e,t,r)=>{var o=r(85896),i=r(98410),a=r(39652);r(24772);var s=r(71084),l=r(47327);r(47824);let n=(0,o.AH)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var c=function(e,t,r,o){var i,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(a<3?i(s):a>3?i(t,r,s):i(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let u=class extends o.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return(0,o.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,a.J)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?(0,o.qy)` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};u.styles=[s.W5,s.fD,n],c([(0,i.MZ)()],u.prototype,"logo",void 0),c([(0,i.MZ)()],u.prototype,"name",void 0),c([(0,i.MZ)()],u.prototype,"align",void 0),c([(0,i.MZ)()],u.prototype,"tabIdx",void 0),c([(0,i.MZ)({type:Boolean})],u.prototype,"disabled",void 0),u=c([(0,l.E)("wui-list-social")],u)},30112:(e,t,r)=>{r.d(t,{Up:()=>p});var o=r(58051),i=r(73442),a=r(66254),s=r(70417),l=r(67869),n=r(65374),c=r(12319),u=r(58653);async function h(){l.I.push("ConnectingFarcaster");let e=a.a.getAuthConnector();if(e&&!o.U.state.farcasterUrl)try{let{url:t}=await e.provider.getFarcasterUri();o.U.setFarcasterUrl(t,i.W.state.activeChain)}catch(e){l.I.goBack(),n.P.showError(e)}}async function d(e){l.I.push("ConnectingSocial");let t=a.a.getAuthConnector(),r=null;try{let a=setTimeout(()=>{throw Error("Social login timed out. Please try again.")},45e3);if(t&&e){if(c.w.isTelegram()||(r=function(){try{return c.w.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw Error("Could not open social popup")}}()),r)o.U.setSocialWindow(r,i.W.state.activeChain);else if(!c.w.isTelegram())throw Error("Could not create social popup");let{uri:s}=await t.provider.getSocialRedirectUri({provider:e});if(!s)throw r?.close(),Error("Could not fetch the social redirect uri");if(r&&(r.location.href=s),c.w.isTelegram()){u.i.setTelegramSocialProvider(e);let t=c.w.formatTelegramSocialLoginUrl(s);c.w.openHref(t,"_top")}clearTimeout(a)}}catch(e){r?.close(),n.P.showError(e?.message)}}async function p(e){o.U.setSocialProvider(e,i.W.state.activeChain),s.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),"farcaster"===e?await h():await d(e)}},34563:(e,t,r)=>{var o=r(85896),i=r(98410);r(22394),r(45166);var a=r(52769);function s(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let l={generate({uri:e,size:t,logoSize:r,dotColor:i="#141414"}){let l=[],n=function(e,t){let r=Array.prototype.slice.call(a.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),o=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%o==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),c=t/n.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach(({x:e,y:t})=>{let r=(n.length-7)*c*e,a=(n.length-7)*c*t;for(let e=0;e<u.length;e+=1){let t=c*(7-2*e);l.push((0,o.JW)`
            <rect
              fill=${2===e?i:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${i}
              stroke-width=${5*(0===e)}
              height=${0===e?t-5:t}
              x= ${0===e?a+c*e+2.5:a+c*e}
              y= ${0===e?r+c*e+2.5:r+c*e}
            />
          `)}});let h=Math.floor((r+25)/c),d=n.length/2-h/2,p=n.length/2+h/2-1,f=[];n.forEach((e,t)=>{e.forEach((e,r)=>{!n[t][r]||t<7&&r<7||t>n.length-8&&r<7||t<7&&r>n.length-8||t>d&&t<p&&r>d&&r<p||f.push([t*c+c/2,r*c+c/2])})});let g={};return f.forEach(([e,t])=>{g[e]?g[e]?.push(t):g[e]=[t]}),Object.entries(g).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!s(e,t,c)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{l.push((0,o.JW)`<circle cx=${e} cy=${t} fill=${i} r=${c/2.5} />`)})}),Object.entries(g).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>s(e,t,c)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>s(e,t,c)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{l.push((0,o.JW)`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${i}
                stroke-width=${c/1.25}
                stroke-linecap="round"
              />
            `)})}),l}};var n=r(71084),c=r(47327);let u=(0,o.AH)`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var h=function(e,t,r,o){var i,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(a<3?i(s):a>3?i(t,r,s):i(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let d=class extends o.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??"#3396ff"}
    `,(0,o.qy)`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return(0,o.JW)`
      <svg height=${e} width=${e}>
        ${l.generate({uri:this.uri,size:e,logoSize:this.arenaClear?0:e/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?(0,o.qy)`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?(0,o.qy)`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:(0,o.qy)`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};d.styles=[n.W5,u],h([(0,i.MZ)()],d.prototype,"uri",void 0),h([(0,i.MZ)({type:Number})],d.prototype,"size",void 0),h([(0,i.MZ)()],d.prototype,"theme",void 0),h([(0,i.MZ)()],d.prototype,"imageSrc",void 0),h([(0,i.MZ)()],d.prototype,"alt",void 0),h([(0,i.MZ)()],d.prototype,"color",void 0),h([(0,i.MZ)({type:Boolean})],d.prototype,"arenaClear",void 0),h([(0,i.MZ)({type:Boolean})],d.prototype,"farcaster",void 0),d=h([(0,c.E)("wui-qr-code")],d)},41699:(e,t,r)=>{r(40396)},47824:(e,t,r)=>{var o=r(85896),i=r(98410);r(22394);var a=r(71084),s=r(47327);let l=(0,o.AH)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var n=function(e,t,r,o){var i,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(a<3?i(s):a>3?i(t,r,s):i(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let c=class extends o.WF{constructor(){super(...arguments),this.logo="google"}render(){return(0,o.qy)`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};c.styles=[a.W5,l],n([(0,i.MZ)()],c.prototype,"logo",void 0),c=n([(0,s.E)("wui-logo")],c)},88072:e=>{var t={single_source_shortest_paths:function(e,r,o){var i,a,s,l,n,c,u,h={},d={};d[r]=0;var p=t.PriorityQueue.make();for(p.push(r,0);!p.empty();)for(s in a=(i=p.pop()).value,l=i.cost,n=e[a]||{})n.hasOwnProperty(s)&&(c=l+n[s],u=d[s],(void 0===d[s]||u>c)&&(d[s]=c,p.push(s,c),h[s]=a));if(void 0!==o&&void 0===d[o])throw Error(["Could not find a path from ",r," to ",o,"."].join(""));return h},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],o=t;o;)r.push(o),e[o],o=e[o];return r.reverse(),r},find_path:function(e,r,o){var i=t.single_source_shortest_paths(e,r,o);return t.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(e){var r,o=t.PriorityQueue,i={};for(r in e=e||{},o)o.hasOwnProperty(r)&&(i[r]=o[r]);return i.queue=[],i.sorter=e.sorter||o.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t}}]);
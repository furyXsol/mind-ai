try{let t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},e=(new t.Error).stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="52b8c435-951e-44f9-a53f-fbe6444255cd",t._sentryDebugIdIdentifier="sentry-dbid-52b8c435-951e-44f9-a53f-fbe6444255cd")}catch(t){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3776],{2354:(t,e,i)=>{i.d(e,{H:()=>r});var n=i(52321),a=i(32973);let r=(0,a.u$)(class extends a.WL{constructor(t){if(super(t),t.type!==a.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let i=t.element.classList;for(let t of this.st)t in e||(i.remove(t),this.st.delete(t));for(let t in e){let n=!!e[t];n===this.st.has(t)||this.nt?.has(t)||(n?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return n.c0}})},3515:(t,e,i)=>{i.d(e,{w:()=>a});var n=i(66575);function a(t){return(0,n.M)({...t,state:!0,attribute:!1})}},22394:(t,e,i)=>{var n=i(85896),a=i(98410),r=i(52321),s=i(34777),o=i(84984);class l{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class c{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(t=>this.q=t)}resume(){this.q?.(),this.Z=this.q=void 0}}var h=i(32973);let d=t=>!(0,s.sO)(t)&&"function"==typeof t.then;class w extends o.Kq{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new l(this),this._$CX=new c}render(...t){return t.find(t=>!d(t))??r.c0}update(t,e){let i=this._$Cbt,n=i.length;this._$Cbt=e;let a=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){let r=e[t];if(!d(r))return this._$Cwt=t,r;t<n&&r===i[t]||(this._$Cwt=0x3fffffff,n=0,Promise.resolve(r).then(async t=>{for(;s.get();)await s.get();let e=a.deref();if(void 0!==e){let i=e._$Cbt.indexOf(r);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}}))}return r.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}let f=(0,h.u$)(w);class g{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}}let u=new g;var v=i(71084),p=i(47327);let y=(0,n.AH)`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var b=function(t,e,i,n){var a,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(s=(r<3?a(s):r>3?a(e,i,s):a(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let m={add:async()=>(await i.e(3909).then(i.bind(i,73909))).addSvg,allWallets:async()=>(await i.e(4778).then(i.bind(i,24778))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(372).then(i.bind(i,10372))).arrowBottomCircleSvg,appStore:async()=>(await i.e(5093).then(i.bind(i,75093))).appStoreSvg,apple:async()=>(await i.e(634).then(i.bind(i,10634))).appleSvg,arrowBottom:async()=>(await i.e(3321).then(i.bind(i,43321))).arrowBottomSvg,arrowLeft:async()=>(await i.e(9723).then(i.bind(i,49723))).arrowLeftSvg,arrowRight:async()=>(await i.e(5796).then(i.bind(i,45796))).arrowRightSvg,arrowTop:async()=>(await i.e(4385).then(i.bind(i,54385))).arrowTopSvg,bank:async()=>(await i.e(1460).then(i.bind(i,41460))).bankSvg,browser:async()=>(await i.e(8474).then(i.bind(i,98474))).browserSvg,card:async()=>(await i.e(5668).then(i.bind(i,85668))).cardSvg,checkmark:async()=>(await i.e(63).then(i.bind(i,80063))).checkmarkSvg,checkmarkBold:async()=>(await i.e(905).then(i.bind(i,90905))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(103).then(i.bind(i,92484))).chevronBottomSvg,chevronLeft:async()=>(await i.e(3777).then(i.bind(i,73777))).chevronLeftSvg,chevronRight:async()=>(await i.e(1146).then(i.bind(i,21146))).chevronRightSvg,chevronTop:async()=>(await i.e(5779).then(i.bind(i,25779))).chevronTopSvg,chromeStore:async()=>(await i.e(1332).then(i.bind(i,91332))).chromeStoreSvg,clock:async()=>(await i.e(3020).then(i.bind(i,63020))).clockSvg,close:async()=>(await i.e(8558).then(i.bind(i,38558))).closeSvg,compass:async()=>(await i.e(9354).then(i.bind(i,69354))).compassSvg,coinPlaceholder:async()=>(await i.e(6576).then(i.bind(i,16576))).coinPlaceholderSvg,copy:async()=>(await i.e(9499).then(i.bind(i,39499))).copySvg,cursor:async()=>(await i.e(7243).then(i.bind(i,44862))).cursorSvg,cursorTransparent:async()=>(await i.e(8167).then(i.bind(i,48167))).cursorTransparentSvg,desktop:async()=>(await i.e(7730).then(i.bind(i,37730))).desktopSvg,disconnect:async()=>(await i.e(1840).then(i.bind(i,1840))).disconnectSvg,discord:async()=>(await i.e(7090).then(i.bind(i,97090))).discordSvg,etherscan:async()=>(await i.e(9556).then(i.bind(i,47175))).etherscanSvg,extension:async()=>(await i.e(9403).then(i.bind(i,79403))).extensionSvg,externalLink:async()=>(await i.e(2508).then(i.bind(i,32508))).externalLinkSvg,facebook:async()=>(await i.e(4078).then(i.bind(i,24078))).facebookSvg,farcaster:async()=>(await i.e(1995).then(i.bind(i,31995))).farcasterSvg,filters:async()=>(await i.e(4757).then(i.bind(i,14757))).filtersSvg,github:async()=>(await i.e(8153).then(i.bind(i,68153))).githubSvg,google:async()=>(await i.e(6753).then(i.bind(i,56753))).googleSvg,helpCircle:async()=>(await i.e(1403).then(i.bind(i,13784))).helpCircleSvg,image:async()=>(await i.e(2627).then(i.bind(i,2627))).imageSvg,id:async()=>(await i.e(683).then(i.bind(i,10683))).idSvg,infoCircle:async()=>(await i.e(2157).then(i.bind(i,2157))).infoCircleSvg,lightbulb:async()=>(await i.e(3413).then(i.bind(i,63413))).lightbulbSvg,mail:async()=>(await i.e(2473).then(i.bind(i,2473))).mailSvg,mobile:async()=>(await i.e(5088).then(i.bind(i,35088))).mobileSvg,more:async()=>(await i.e(7175).then(i.bind(i,39556))).moreSvg,networkPlaceholder:async()=>(await i.e(2788).then(i.bind(i,22788))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(8147).then(i.bind(i,8147))).nftPlaceholderSvg,off:async()=>(await i.e(9355).then(i.bind(i,9355))).offSvg,playStore:async()=>(await i.e(3324).then(i.bind(i,3324))).playStoreSvg,plus:async()=>(await i.e(5378).then(i.bind(i,55378))).plusSvg,qrCode:async()=>(await i.e(4257).then(i.bind(i,74257))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(1386).then(i.bind(i,91386))).recycleHorizontalSvg,refresh:async()=>(await i.e(3397).then(i.bind(i,93397))).refreshSvg,search:async()=>(await i.e(6782).then(i.bind(i,46782))).searchSvg,send:async()=>(await i.e(740).then(i.bind(i,70740))).sendSvg,swapHorizontal:async()=>(await i.e(8245).then(i.bind(i,48245))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(2694).then(i.bind(i,2694))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(430).then(i.bind(i,20430))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(1413).then(i.bind(i,91413))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(4208).then(i.bind(i,31827))).swapVerticalSvg,telegram:async()=>(await i.e(573).then(i.bind(i,573))).telegramSvg,threeDots:async()=>(await i.e(7149).then(i.bind(i,7149))).threeDotsSvg,twitch:async()=>(await i.e(8817).then(i.bind(i,68817))).twitchSvg,twitter:async()=>(await i.e(6594).then(i.bind(i,56594))).xSvg,twitterIcon:async()=>(await i.e(612).then(i.bind(i,40612))).twitterIconSvg,verify:async()=>(await i.e(411).then(i.bind(i,411))).verifySvg,verifyFilled:async()=>(await i.e(2394).then(i.bind(i,13))).verifyFilledSvg,wallet:async()=>(await i.e(4803).then(i.bind(i,24803))).walletSvg,walletConnect:async()=>(await i.e(1631).then(i.bind(i,21631))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(1631).then(i.bind(i,21631))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(1631).then(i.bind(i,21631))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(5171).then(i.bind(i,35171))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(6253).then(i.bind(i,16253))).warningCircleSvg,x:async()=>(await i.e(6594).then(i.bind(i,56594))).xSvg,info:async()=>(await i.e(8606).then(i.bind(i,8606))).infoSvg,exclamationTriangle:async()=>(await i.e(9778).then(i.bind(i,59778))).exclamationTriangleSvg,reown:async()=>(await i.e(5643).then(i.bind(i,25643))).reownSvg};async function S(t){if(u.has(t))return u.get(t);let e=(m[t]??m.copy)();return u.set(t,e),e}let $=class extends n.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
      --local-aspect-ratio: ${this.aspectRatio}
    `,(0,n.qy)`${f(S(this.name),(0,n.qy)`<div class="fallback"></div>`)}`}};$.styles=[v.W5,v.ck,y],b([(0,a.MZ)()],$.prototype,"size",void 0),b([(0,a.MZ)()],$.prototype,"name",void 0),b([(0,a.MZ)()],$.prototype,"color",void 0),b([(0,a.MZ)()],$.prototype,"aspectRatio",void 0),$=b([(0,p.E)("wui-icon")],$)},24772:(t,e,i)=>{var n=i(85896),a=i(98410),r=i(2354),s=i(71084),o=i(47327);let l=(0,n.AH)`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var c=function(t,e,i,n){var a,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(s=(r<3?a(s):r>3?a(e,i,s):a(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let h=class extends n.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){let t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,(0,n.qy)`<slot class=${(0,r.H)(t)}></slot>`}};h.styles=[s.W5,l],c([(0,a.MZ)()],h.prototype,"variant",void 0),c([(0,a.MZ)()],h.prototype,"color",void 0),c([(0,a.MZ)()],h.prototype,"align",void 0),c([(0,a.MZ)()],h.prototype,"lineClamp",void 0),h=c([(0,o.E)("wui-text")],h)},32973:(t,e,i)=>{i.d(e,{OA:()=>n,WL:()=>r,u$:()=>a});let n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=t=>(...e)=>({_$litDirective$:t,values:e});class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},34777:(t,e,i)=>{i.d(e,{Rt:()=>r,sO:()=>a});let{I:n}=i(52321).ge,a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,r=t=>void 0===t.strings},66575:(t,e,i)=>{i.d(e,{M:()=>s});var n=i(98502);let a={attribute:!0,type:String,converter:n.W3,reflect:!1,hasChanged:n.Ec},r=(t=a,e,i)=>{let{kind:n,metadata:r}=i,s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(i.name,t),"accessor"===n){let{name:n}=i;return{set(i){let a=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,a,t)},init(e){return void 0!==e&&this.P(n,void 0,t),e}}}if("setter"===n){let{name:n}=i;return function(i){let a=this[n];e.call(this,i),this.requestUpdate(n,a,t)}}throw Error("Unsupported decorator location: "+n)};function s(t){return(e,i)=>"object"==typeof i?r(t,e,i):((t,e,i)=>{let n=e.hasOwnProperty(i);return e.constructor.createProperty(i,n?{...t,wrapped:!0}:t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}},79380:(t,e,i)=>{i.d(e,{J:()=>a});var n=i(52321);let a=t=>t??n.s6},84984:(t,e,i)=>{i.d(e,{Kq:()=>d});var n=i(34777),a=i(32973);let r=(t,e)=>{let i=t._$AN;if(void 0===i)return!1;for(let t of i)t._$AO?.(e,!1),r(t,e);return!0},s=t=>{let e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while(0===i?.size)},o=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),h(e)}};function l(t){void 0!==this._$AN?(s(this),this._$AM=t,o(this)):this._$AM=t}function c(t,e=!1,i=0){let n=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size){if(e){if(Array.isArray(n))for(let t=i;t<n.length;t++)r(n[t],!1),s(n[t]);else null!=n&&(r(n,!1),s(n))}else r(this,t)}}let h=t=>{t.type==a.OA.CHILD&&(t._$AP??=c,t._$AQ??=l)};class d extends a.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),o(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(r(this,t),s(this))}setValue(t){if((0,n.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},98410:(t,e,i)=>{i.d(e,{MZ:()=>n.M,wk:()=>a.w});var n=i(66575),a=i(3515)}}]);
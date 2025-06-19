try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2973737c-023f-45cb-8aad-85e97413d353",e._sentryDebugIdIdentifier="sentry-dbid-2973737c-023f-45cb-8aad-85e97413d353")}catch(e){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2435],{20026:(e,t,r)=>{r.r(t),r.d(t,{W3mWalletReceiveView:()=>$});var i=r(85896),o=r(98410),a=r(39652),s=r(58051),n=r(73442),l=r(65374),c=r(14744),d=r(45069),u=r(67869),h=r(12319),p=r(36211);r(37822),r(22394),r(45166),r(24772),r(38534);var g=r(71084),w=r(47327);let v=(0,i.AH)`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var f=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let y=class extends i.WF{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return(0,i.qy)`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){let e=this.networkImages.slice(0,5);return(0,i.qy)` <wui-flex class="networks">
      ${e?.map(e=>i.qy` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`)}
    </wui-flex>`}};y.styles=[g.W5,g.fD,v],f([(0,o.MZ)({type:Array})],y.prototype,"networkImages",void 0),f([(0,o.MZ)()],y.prototype,"text",void 0),y=f([(0,w.E)("wui-compatible-network")],y),r(40575),r(34563),r(41163);var b=r(73537);let m=(0,i.AH)`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var x=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let $=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.address=s.U.state.address,this.profileName=s.U.state.profileName,this.network=n.W.state.activeCaipNetwork,this.preferredAccountType=s.U.state.preferredAccountType,this.unsubscribe.push(s.U.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):l.P.showError("Account not found")}),n.W.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-wallet-receive-view: No account provided");let e=c.$.getNetworkImage(this.network);return(0,i.qy)` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${p.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:4*!this.profileName,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${d.W.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${(0,a.J)(d.W.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=n.W.getAllRequestedCaipNetworks(),t=n.W.checkIfSmartAccountEnabled(),r=n.W.state.activeCaipNetwork;if(this.preferredAccountType===b.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return r?(0,i.qy)`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[c.$.getNetworkImage(r)??""]}
      ></wui-compatible-network>`:null;let o=(e?.filter(e=>e?.assets?.imageId)?.slice(0,5)).map(c.$.getNetworkImage).filter(Boolean);return(0,i.qy)`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${o}
    ></wui-compatible-network>`}onReceiveClick(){u.I.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(h.w.copyToClopboard(this.address),l.P.showSuccess("Address copied"))}catch{l.P.showError("Failed to copy")}}};$.styles=m,x([(0,o.wk)()],$.prototype,"address",void 0),x([(0,o.wk)()],$.prototype,"profileName",void 0),x([(0,o.wk)()],$.prototype,"network",void 0),x([(0,o.wk)()],$.prototype,"preferredAccountType",void 0),$=x([(0,p.EM)("w3m-wallet-receive-view")],$)},34563:(e,t,r)=>{var i=r(85896),o=r(98410);r(22394),r(45166);var a=r(52769);function s(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let n={generate({uri:e,size:t,logoSize:r,dotColor:o="#141414"}){let n=[],l=function(e,t){let r=Array.prototype.slice.call(a.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),i=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%i==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),c=t/l.length,d=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];d.forEach(({x:e,y:t})=>{let r=(l.length-7)*c*e,a=(l.length-7)*c*t;for(let e=0;e<d.length;e+=1){let t=c*(7-2*e);n.push((0,i.JW)`
            <rect
              fill=${2===e?o:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${o}
              stroke-width=${5*(0===e)}
              height=${0===e?t-5:t}
              x= ${0===e?a+c*e+2.5:a+c*e}
              y= ${0===e?r+c*e+2.5:r+c*e}
            />
          `)}});let u=Math.floor((r+25)/c),h=l.length/2-u/2,p=l.length/2+u/2-1,g=[];l.forEach((e,t)=>{e.forEach((e,r)=>{!l[t][r]||t<7&&r<7||t>l.length-8&&r<7||t<7&&r>l.length-8||t>h&&t<p&&r>h&&r<p||g.push([t*c+c/2,r*c+c/2])})});let w={};return g.forEach(([e,t])=>{w[e]?w[e]?.push(t):w[e]=[t]}),Object.entries(w).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!s(e,t,c)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{n.push((0,i.JW)`<circle cx=${e} cy=${t} fill=${o} r=${c/2.5} />`)})}),Object.entries(w).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>s(e,t,c)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>s(e,t,c)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{n.push((0,i.JW)`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${o}
                stroke-width=${c/1.25}
                stroke-linecap="round"
              />
            `)})}),n}};var l=r(71084),c=r(47327);let d=(0,i.AH)`
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
`;var u=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let h=class extends i.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??"#3396ff"}
    `,(0,i.qy)`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return(0,i.JW)`
      <svg height=${e} width=${e}>
        ${n.generate({uri:this.uri,size:e,logoSize:this.arenaClear?0:e/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?(0,i.qy)`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?(0,i.qy)`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:(0,i.qy)`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};h.styles=[l.W5,d],u([(0,o.MZ)()],h.prototype,"uri",void 0),u([(0,o.MZ)({type:Number})],h.prototype,"size",void 0),u([(0,o.MZ)()],h.prototype,"theme",void 0),u([(0,o.MZ)()],h.prototype,"imageSrc",void 0),u([(0,o.MZ)()],h.prototype,"alt",void 0),u([(0,o.MZ)()],h.prototype,"color",void 0),u([(0,o.MZ)({type:Boolean})],h.prototype,"arenaClear",void 0),u([(0,o.MZ)({type:Boolean})],h.prototype,"farcaster",void 0),h=u([(0,c.E)("wui-qr-code")],h)},37822:(e,t,r)=>{var i=r(85896),o=r(98410);r(22394),r(45166),r(24772);var a=r(71084),s=r(47327);let n=(0,i.AH)`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var l=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let c=class extends i.WF{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){let e="sm"===this.size?"small-600":"paragraph-600";return(0,i.qy)`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?(0,i.qy)`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};c.styles=[a.W5,a.fD,n],l([(0,o.MZ)()],c.prototype,"variant",void 0),l([(0,o.MZ)()],c.prototype,"imageSrc",void 0),l([(0,o.MZ)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,o.MZ)()],c.prototype,"icon",void 0),l([(0,o.MZ)()],c.prototype,"size",void 0),l([(0,o.MZ)()],c.prototype,"text",void 0),c=l([(0,s.E)("wui-chip-button")],c)},38534:(e,t,r)=>{var i=r(85896),o=r(98410),a=r(71084),s=r(8821),n=r(47327);let l=(0,i.AH)`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var c=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let d=class extends i.WF{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&s.Z.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&s.Z.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&s.Z.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&s.Z.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&s.Z.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&s.Z.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&s.Z.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&s.Z.getSpacingStyles(this.margin,3)};
    `,(0,i.qy)`<slot></slot>`}};d.styles=[a.W5,l],c([(0,o.MZ)()],d.prototype,"flexDirection",void 0),c([(0,o.MZ)()],d.prototype,"flexWrap",void 0),c([(0,o.MZ)()],d.prototype,"flexBasis",void 0),c([(0,o.MZ)()],d.prototype,"flexGrow",void 0),c([(0,o.MZ)()],d.prototype,"flexShrink",void 0),c([(0,o.MZ)()],d.prototype,"alignItems",void 0),c([(0,o.MZ)()],d.prototype,"justifyContent",void 0),c([(0,o.MZ)()],d.prototype,"columnGap",void 0),c([(0,o.MZ)()],d.prototype,"rowGap",void 0),c([(0,o.MZ)()],d.prototype,"gap",void 0),c([(0,o.MZ)()],d.prototype,"padding",void 0),c([(0,o.MZ)()],d.prototype,"margin",void 0),d=c([(0,n.E)("wui-flex")],d)},39652:(e,t,r)=>{r.d(t,{J:()=>i.J});var i=r(79380)},40575:(e,t,r)=>{r(38534)},41163:(e,t,r)=>{r(24772)},45166:(e,t,r)=>{var i=r(85896),o=r(98410),a=r(71084),s=r(47327);let n=(0,i.AH)`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var l=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let c=class extends i.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,(0,i.qy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};c.styles=[a.W5,a.ck,n],l([(0,o.MZ)()],c.prototype,"src",void 0),l([(0,o.MZ)()],c.prototype,"alt",void 0),l([(0,o.MZ)()],c.prototype,"size",void 0),c=l([(0,s.E)("wui-image")],c)},88072:e=>{var t={single_source_shortest_paths:function(e,r,i){var o,a,s,n,l,c,d,u={},h={};h[r]=0;var p=t.PriorityQueue.make();for(p.push(r,0);!p.empty();)for(s in a=(o=p.pop()).value,n=o.cost,l=e[a]||{})l.hasOwnProperty(s)&&(c=n+l[s],d=h[s],(void 0===h[s]||d>c)&&(h[s]=c,p.push(s,c),u[s]=a));if(void 0!==i&&void 0===h[i])throw Error(["Could not find a path from ",r," to ",i,"."].join(""));return u},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],i=t;i;)r.push(i),e[i],i=e[i];return r.reverse(),r},find_path:function(e,r,i){var o=t.single_source_shortest_paths(e,r,i);return t.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(e){var r,i=t.PriorityQueue,o={};for(r in e=e||{},i)i.hasOwnProperty(r)&&(o[r]=i[r]);return o.queue=[],o.sorter=e.sorter||i.default_sorter,o},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t}}]);
try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="dd658362-3639-4924-8bc7-d41df78bf70a",e._sentryDebugIdIdentifier="sentry-dbid-dd658362-3639-4924-8bc7-d41df78bf70a")}catch(e){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5565],{20840:(e,t,i)=>{i.r(t),i.d(t,{W3mTransactionsView:()=>a});var r=i(85896),o=i(36211);i(40575),i(24790);let s=(0,r.AH)`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`,a=class extends r.WF{render(){return(0,r.qy)`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};a.styles=s,a=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a}([(0,o.EM)("w3m-transactions-view")],a)},38534:(e,t,i)=>{var r=i(85896),o=i(98410),s=i(71084),a=i(8821),l=i(47327);let n=(0,r.AH)`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var c=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends r.WF{render(){return this.style.cssText=`
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
      padding-top: ${this.padding&&a.Z.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&a.Z.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&a.Z.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&a.Z.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&a.Z.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&a.Z.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&a.Z.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&a.Z.getSpacingStyles(this.margin,3)};
    `,(0,r.qy)`<slot></slot>`}};d.styles=[s.W5,n],c([(0,o.MZ)()],d.prototype,"flexDirection",void 0),c([(0,o.MZ)()],d.prototype,"flexWrap",void 0),c([(0,o.MZ)()],d.prototype,"flexBasis",void 0),c([(0,o.MZ)()],d.prototype,"flexGrow",void 0),c([(0,o.MZ)()],d.prototype,"flexShrink",void 0),c([(0,o.MZ)()],d.prototype,"alignItems",void 0),c([(0,o.MZ)()],d.prototype,"justifyContent",void 0),c([(0,o.MZ)()],d.prototype,"columnGap",void 0),c([(0,o.MZ)()],d.prototype,"rowGap",void 0),c([(0,o.MZ)()],d.prototype,"gap",void 0),c([(0,o.MZ)()],d.prototype,"padding",void 0),c([(0,o.MZ)()],d.prototype,"margin",void 0),d=c([(0,l.E)("wui-flex")],d)},39652:(e,t,i)=>{i.d(t,{J:()=>r.J});var r=i(79380)},40396:(e,t,i)=>{var r=i(85896),o=i(98410),s=i(47327);let a=(0,r.AH)`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var l=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let n=class extends r.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,(0,r.qy)`<slot></slot>`}};n.styles=[a],l([(0,o.MZ)()],n.prototype,"width",void 0),l([(0,o.MZ)()],n.prototype,"height",void 0),l([(0,o.MZ)()],n.prototype,"borderRadius",void 0),l([(0,o.MZ)()],n.prototype,"variant",void 0),n=l([(0,s.E)("wui-shimmer")],n)},40575:(e,t,i)=>{i(38534)},41163:(e,t,i)=>{i(24772)},45166:(e,t,i)=>{var r=i(85896),o=i(98410),s=i(71084),a=i(47327);let l=(0,r.AH)`
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
`;var n=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends r.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,(0,r.qy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};c.styles=[s.W5,s.ck,l],n([(0,o.MZ)()],c.prototype,"src",void 0),n([(0,o.MZ)()],c.prototype,"alt",void 0),n([(0,o.MZ)()],c.prototype,"size",void 0),c=n([(0,a.E)("wui-image")],c)},48352:(e,t,i)=>{var r=i(85896),o=i(98410),s=i(39652);i(24772);var a=i(71084),l=i(47327);let n=(0,r.AH)`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var c=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends r.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return(0,r.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,s.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};d.styles=[a.W5,a.fD,n],c([(0,o.MZ)()],d.prototype,"tabIdx",void 0),c([(0,o.MZ)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,o.MZ)()],d.prototype,"color",void 0),d=c([(0,l.E)("wui-link")],d)},64406:(e,t,i)=>{var r=i(85896);i(40396),i(38534);var o=i(71084),s=i(47327);let a=(0,r.AH)`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,l=class extends r.WF{render(){return(0,r.qy)`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};l.styles=[o.W5,a],l=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a}([(0,s.E)("wui-transaction-list-item-loader")],l)},84042:(e,t,i)=>{var r=i(85896),o=i(98410);i(22394);var s=i(71084),a=i(47327);let l=(0,r.AH)`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var n=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends r.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e=this.iconSize||this.size,t="lg"===this.size,i="xl"===this.size,o="gray"===this.background,s="opaque"===this.background,a="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s,l=`var(--wui-color-${this.backgroundColor})`;return a?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${l};
       --local-bg-mix: ${a||o?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":i?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,(0,r.qy)` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};c.styles=[s.W5,s.fD,l],n([(0,o.MZ)()],c.prototype,"size",void 0),n([(0,o.MZ)()],c.prototype,"backgroundColor",void 0),n([(0,o.MZ)()],c.prototype,"iconColor",void 0),n([(0,o.MZ)()],c.prototype,"iconSize",void 0),n([(0,o.MZ)()],c.prototype,"background",void 0),n([(0,o.MZ)({type:Boolean})],c.prototype,"border",void 0),n([(0,o.MZ)()],c.prototype,"borderColor",void 0),n([(0,o.MZ)()],c.prototype,"icon",void 0),c=n([(0,a.E)("wui-icon-box")],c)},90721:(e,t,i)=>{i(84042)}}]);
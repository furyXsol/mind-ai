try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7d04f2ea-f119-4de2-a4c0-f5e6861eee62",e._sentryDebugIdIdentifier="sentry-dbid-7d04f2ea-f119-4de2-a4c0-f5e6861eee62")}catch(e){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7723],{36790:(e,t,r)=>{var o=r(85896);r(22394),r(24772),r(38534);var i=r(71084),a=r(47327);let l=(0,o.AH)`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`,n=class extends o.WF{render(){return(0,o.qy)`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};n.styles=[i.W5,i.fD,l],n=function(e,t,r,o){var i,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(l=(a<3?i(l):a>3?i(t,r,l):i(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l}([(0,a.E)("wui-ux-by-reown")],n)},40396:(e,t,r)=>{var o=r(85896),i=r(98410),a=r(47327);let l=(0,o.AH)`
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
`;var n=function(e,t,r,o){var i,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(l=(a<3?i(l):a>3?i(t,r,l):i(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l};let s=class extends o.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,(0,o.qy)`<slot></slot>`}};s.styles=[l],n([(0,i.MZ)()],s.prototype,"width",void 0),n([(0,i.MZ)()],s.prototype,"height",void 0),n([(0,i.MZ)()],s.prototype,"borderRadius",void 0),n([(0,i.MZ)()],s.prototype,"variant",void 0),s=n([(0,a.E)("wui-shimmer")],s)},45166:(e,t,r)=>{var o=r(85896),i=r(98410),a=r(71084),l=r(47327);let n=(0,o.AH)`
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
`;var s=function(e,t,r,o){var i,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(l=(a<3?i(l):a>3?i(t,r,l):i(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l};let c=class extends o.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,(0,o.qy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};c.styles=[a.W5,a.ck,n],s([(0,i.MZ)()],c.prototype,"src",void 0),s([(0,i.MZ)()],c.prototype,"alt",void 0),s([(0,i.MZ)()],c.prototype,"size",void 0),c=s([(0,l.E)("wui-image")],c)},48352:(e,t,r)=>{var o=r(85896),i=r(98410),a=r(39652);r(24772);var l=r(71084),n=r(47327);let s=(0,o.AH)`
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
`;var c=function(e,t,r,o){var i,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(l=(a<3?i(l):a>3?i(t,r,l):i(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l};let u=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return(0,o.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,a.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};u.styles=[l.W5,l.fD,s],c([(0,i.MZ)()],u.prototype,"tabIdx",void 0),c([(0,i.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,i.MZ)()],u.prototype,"color",void 0),u=c([(0,n.E)("wui-link")],u)},64731:(e,t,r)=>{var o=r(85896),i=r(98410),a=r(71084),l=r(47327);let n=(0,o.AH)`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var s=function(e,t,r,o){var i,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(l=(a<3?i(l):a>3?i(t,r,l):i(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l};let c=class extends o.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return(0,o.qy)`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};c.styles=[a.W5,n],s([(0,i.MZ)({type:Number})],c.prototype,"radius",void 0),c=s([(0,l.E)("wui-loading-thumbnail")],c)},65685:(e,t,r)=>{var o=r(85896),i=r(55480),a=r(36211);r(40575),r(41163),r(36790);let l=(0,o.AH)`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
    margin-top: var(--wui-spacing-s);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`,n=class extends o.WF{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=i.H.state,r=i.H.state.features?.legalCheckbox;return(e||t)&&!r?(0,o.qy)`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        <wui-ux-by-reown></wui-ux-by-reown>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=i.H.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=i.H.state;return e?(0,o.qy)`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=i.H.state;return e?(0,o.qy)`<a href=${e}>Privacy Policy</a>`:null}};n.styles=[l],n=function(e,t,r,o){var i,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(l=(a<3?i(l):a>3?i(t,r,l):i(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l}([(0,a.EM)("w3m-legal-footer")],n)},77237:(e,t,r)=>{r(22394)},82886:(e,t,r)=>{var o=r(85896),i=r(55480),a=r(36211),l=r(98410),n=r(39652),s=r(88409);r(22394);var c=r(71084),u=r(47327);let d=(0,o.AH)`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;var p=function(e,t,r,o){var i,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(l=(a<3?i(l):a>3?i(t,r,l):i(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l};let h=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,s._)(),this.checked=void 0}render(){return(0,o.qy)`
      <label>
        <input
          ${(0,s.K)(this.inputElementRef)}
          ?checked=${(0,n.J)(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};h.styles=[c.W5,d],p([(0,l.MZ)({type:Boolean})],h.prototype,"checked",void 0),h=p([(0,u.E)("wui-checkbox")],h),r(41163);let g=(0,o.AH)`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`,f=class extends o.WF{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=i.H.state,r=i.H.state.features?.legalCheckbox;return(e||t)&&r?(0,o.qy)`
      <wui-checkbox data-testid="wui-checkbox">
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=i.H.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=i.H.state;return e?(0,o.qy)`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=i.H.state;return e?(0,o.qy)`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}};f.styles=[g],f=function(e,t,r,o){var i,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(l=(a<3?i(l):a>3?i(t,r,l):i(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l}([(0,a.EM)("w3m-legal-checkbox")],f)},90721:(e,t,r)=>{r(84042)}}]);
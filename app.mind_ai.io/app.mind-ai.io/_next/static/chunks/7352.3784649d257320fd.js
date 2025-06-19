try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7269b89a-1b54-4b5a-8067-5e234eee870e",e._sentryDebugIdIdentifier="sentry-dbid-7269b89a-1b54-4b5a-8067-5e234eee870e")}catch(e){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7352],{5089:(e,t,i)=>{var a=i(85896),r=i(98410),n=i(2354),o=i(39652),l=i(88409);i(22394);var s=i(71084),u=i(47327);let c=(0,a.AH)`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var d=function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let p=class extends a.WF{constructor(){super(...arguments),this.inputElementRef=(0,l._)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){let e=`wui-padding-right-${this.inputRightPadding}`,t={[`wui-size-${this.size}`]:!0,[e]:!!this.inputRightPadding};return(0,a.qy)`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,l.K)(this.inputElementRef)}
        class=${(0,n.H)(t)}
        type=${this.type}
        enterkeyhint=${(0,o.J)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${(0,o.J)(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?(0,a.qy)`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};p.styles=[s.W5,s.fD,c],d([(0,r.MZ)()],p.prototype,"size",void 0),d([(0,r.MZ)()],p.prototype,"icon",void 0),d([(0,r.MZ)({type:Boolean})],p.prototype,"disabled",void 0),d([(0,r.MZ)()],p.prototype,"placeholder",void 0),d([(0,r.MZ)()],p.prototype,"type",void 0),d([(0,r.MZ)()],p.prototype,"keyHint",void 0),d([(0,r.MZ)()],p.prototype,"value",void 0),d([(0,r.MZ)()],p.prototype,"inputRightPadding",void 0),d([(0,r.MZ)()],p.prototype,"tabIdx",void 0),p=d([(0,u.E)("wui-input-text")],p)},48352:(e,t,i)=>{var a=i(85896),r=i(98410),n=i(39652);i(24772);var o=i(71084),l=i(47327);let s=(0,a.AH)`
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
`;var u=function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let c=class extends a.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return(0,a.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,n.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};c.styles=[o.W5,o.fD,s],u([(0,r.MZ)()],c.prototype,"tabIdx",void 0),u([(0,r.MZ)({type:Boolean})],c.prototype,"disabled",void 0),u([(0,r.MZ)()],c.prototype,"color",void 0),c=u([(0,l.E)("wui-link")],c)},48876:(e,t,i)=>{var a=i(85896),r=i(98410),n=i(39652);i(24772);var o=i(71084),l=i(47327);i(5089);let s=(0,a.AH)`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var u=function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let c=class extends a.WF{constructor(){super(...arguments),this.disabled=!1}render(){return(0,a.qy)`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,n.J)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?(0,a.qy)`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};c.styles=[o.W5,s],u([(0,r.MZ)()],c.prototype,"errorMessage",void 0),u([(0,r.MZ)({type:Boolean})],c.prototype,"disabled",void 0),u([(0,r.MZ)()],c.prototype,"value",void 0),u([(0,r.MZ)()],c.prototype,"tabIdx",void 0),c=u([(0,l.E)("wui-email-input")],c)},74971:(e,t,i)=>{i.r(t),i.d(t,{W3mEmailLoginView:()=>V,W3mEmailVerifyDeviceView:()=>D,W3mEmailVerifyOtpView:()=>$,W3mUpdateEmailPrimaryOtpView:()=>z,W3mUpdateEmailSecondaryOtpView:()=>j,W3mUpdateEmailWalletView:()=>M});var a=i(70417),r=i(73442),n=i(3824),o=i(55480),l=i(81701),s=i(12319),u=i(36211),c=i(85896),d=i(98410),p=i(67869),h=i(66254),w=i(65374);i(40575),i(48352),i(75484),i(38534);var g=i(71084),m=i(8821),v=i(47327);let f=(0,c.AH)`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var b=function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let y=class extends c.WF{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return(0,c.qy)`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};y.styles=[g.W5,g.fD,f],b([(0,d.MZ)({type:Boolean})],y.prototype,"disabled",void 0),b([(0,d.MZ)({type:String})],y.prototype,"value",void 0),y=b([(0,v.E)("wui-input-numeric")],y);let x=(0,c.AH)`
  :host {
    position: relative;
    display: block;
  }
`;var E=function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let I=class extends c.WF{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(e=>""!==e),this.handleKeyDown=(e,t)=>{let i=e.target,a=this.getInputElement(i);if(!a)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let r=a.selectionStart;switch(e.key){case"ArrowLeft":r&&a.setSelectionRange(r+1,r+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===a.value?this.focusInputField("prev",t):this.updateInput(a,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1;if(!this.shouldInputBeEnabled(e))return;let i=this.numerics[e<this.length?e:t],a=i?this.getInputElement(i):void 0;a&&(a.disabled=!1,a.focus())}if("prev"===e){let e=t-1,i=this.numerics[e>-1?e:t],a=i?this.getInputElement(i):void 0;a&&a.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return(0,c.qy)`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>(0,c.qy)`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,i){let a=this.numerics[t],r=e||(a?this.getInputElement(a):void 0);r&&(r.value=i,this.values=this.values.map((e,a)=>a===t?i:e))}selectInput(e){let t=e.target;if(t){let e=this.getInputElement(t);e?.select()}}handleInput(e,t){let i=e.target,a=this.getInputElement(i);if(a){let i=a.value;"insertFromPaste"===e.inputType?this.handlePaste(a,i,t):m.Z.isNumber(i)&&e.data?(this.updateInput(a,t,e.data),this.focusInputField("next",t)):this.updateInput(a,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,i){let a=t[0];if(a&&m.Z.isNumber(a)){this.updateInput(e,i,a);let r=t.substring(1);if(i+1<this.length&&r.length){let e=this.numerics[i+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,r,i+1)}else this.focusInputField("next",i)}else this.updateInput(e,i,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};I.styles=[g.W5,x],E([(0,d.MZ)({type:Number})],I.prototype,"length",void 0),E([(0,d.MZ)({type:String})],I.prototype,"otp",void 0),E([(0,d.wk)()],I.prototype,"values",void 0),I=E([(0,v.E)("wui-otp")],I),i(41163);var O=i(17389);let k=(0,c.AH)`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var C=function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let R=class extends c.WF{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=O.Q.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=p.I.state.data?.email,this.authConnector=h.a.getAuthConnector()}render(){if(!this.email)throw Error("w3m-email-otp-widget: No email provided");let e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return(0,c.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?(0,c.qy)`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:(0,c.qy)` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?(0,c.qy)`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=O.Q.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=O.Q.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{!this.loading&&(this.otp=e.detail,this.authConnector&&6===this.otp.length&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(e){this.error=s.w.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!h.a.getAuthConnector()||!this.email)throw Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),w.P.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){w.P.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};R.styles=k,C([(0,d.wk)()],R.prototype,"loading",void 0),C([(0,d.wk)()],R.prototype,"timeoutTimeLeft",void 0),C([(0,d.wk)()],R.prototype,"error",void 0),R=C([(0,u.EM)("w3m-email-otp-widget")],R);let $=class extends R{constructor(){super(...arguments),this.onOtpSubmit=async e=>{try{if(this.authConnector){if(await this.authConnector.provider.connectOtp({otp:e}),a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),r.W.state.activeChain)await n.x.connectExternal(this.authConnector,r.W.state.activeChain);else throw Error("Active chain is not set on ChainControll");a.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),o.H.state.siwx||l.W.close()}}catch(e){throw a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:s.w.parseError(e)}}),e}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};$=function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}([(0,u.EM)("w3m-email-verify-otp-view")],$),i(90721);let A=(0,c.AH)`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var T=function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let D=class extends c.WF{constructor(){super(),this.email=p.I.state.data?.email,this.authConnector=h.a.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw Error("w3m-email-verify-device-view: No auth connector provided");return(0,c.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),a.E.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),p.I.replace("EmailVerifyOtp",{email:this.email})}catch(e){p.I.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),w.P.showSuccess("Code email resent")}}catch(e){w.P.showError(e)}finally{this.loading=!1}}};D.styles=A,T([(0,d.wk)()],D.prototype,"loading",void 0),D=T([(0,u.EM)("w3m-email-verify-device-view")],D);var P=i(88409);i(41028),i(48876);let S=(0,c.AH)`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var _=function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let M=class extends c.WF{constructor(){super(...arguments),this.formRef=(0,P._)(),this.initialEmail=p.I.state.data?.email??"",this.redirectView=p.I.state.data?.redirectView,this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){return(0,c.qy)`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,P.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=h.a.getAuthConnector();if(!t)throw Error("w3m-update-email-wallet: Auth connector not found");let i=await t.provider.updateEmail({email:this.email});a.E.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===i.action?p.I.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):p.I.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(e){w.P.showError(e),this.loading=!1}}buttonsTemplate(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?(0,c.qy)`
      <wui-flex gap="s">
        <wui-button size="md" variant="neutral" fullWidth @click=${p.I.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="main"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:(0,c.qy)`
        <wui-button
          size="md"
          variant="main"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};M.styles=S,_([(0,d.wk)()],M.prototype,"email",void 0),_([(0,d.wk)()],M.prototype,"loading",void 0),M=_([(0,u.EM)("w3m-update-email-wallet-view")],M);let z=class extends R{constructor(){super(),this.email=p.I.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),p.I.replace("UpdateEmailSecondaryOtp",p.I.state.data))}catch(e){throw a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:s.w.parseError(e)}}),e}},this.onStartOver=()=>{p.I.replace("UpdateEmailWallet",p.I.state.data)}}};z=function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}([(0,u.EM)("w3m-update-email-primary-otp-view")],z);let j=class extends R{constructor(){super(),this.email=p.I.state.data?.newEmail,this.redirectView=p.I.state.data?.redirectView,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&p.I.reset(this.redirectView))}catch(e){throw a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:s.w.parseError(e)}}),e}},this.onStartOver=()=>{p.I.replace("UpdateEmailWallet",p.I.state.data)}}};j=function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}([(0,u.EM)("w3m-update-email-secondary-otp-view")],j);var F=i(45553),L=i(30948),N=function(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let V=class extends c.WF{constructor(){super(),this.authConnector=h.a.getAuthConnector(),this.isEmailEnabled=o.H.state.features?.email,this.isAuthEnabled=this.checkIfAuthEnabled(h.a.state.connectors),this.connectors=h.a.state.connectors,h.a.subscribeKey("connectors",e=>{this.connectors=e,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw Error("w3m-email-login-view: No auth connector provided");return(0,c.qy)`<wui-flex
      flexDirection="column"
      .padding=${["3xs","m","m","m"]}
      gap="l"
    >
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(e){let t=e.filter(e=>e.type===L.o.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return F.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}};N([(0,d.wk)()],V.prototype,"connectors",void 0),V=N([(0,u.EM)("w3m-email-login-view")],V)},75484:(e,t,i)=>{i(21129)},90721:(e,t,i)=>{i(84042)}}]);
try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="3305a06c-9136-4485-b36d-dd21cad3f59e",e._sentryDebugIdIdentifier="sentry-dbid-3305a06c-9136-4485-b36d-dd21cad3f59e")}catch(e){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6331],{16331:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Y});var i,o=a(95155),r=a(12115),s=a(15239),n=a(20063),l=a(90871),c=a(37574),d=a(46624),u=a(20878),b=a(43126),h=a(7687),p=a(34448),f=a(1220),g=a(98866),w=a(12319),v=a(32464),m=a(72880),y=a(87358);let C={SECURE_SITE_ORIGIN:(void 0!==y&&void 0!==y.env?y.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",Socials:["google","github","apple","facebook","x","discord","farcaster"],Email:"email",WalletButtonsIds:{coinbase:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",metamask:"c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",trust:"4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",okx:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",bitget:"38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",binance:"8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4",uniswap:"c03dfee351b6fcc421b4494ea33b9d4b92a984f87aa76d1663bb28705e95034a",safepal:"0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150",rainbow:"1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369",bybit:"15c8b91ade1a4e58f3ce4e7a0dd7f42b47db0c8df7e0d84f63eb39bcb96c4e0f",tokenpocket:"20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66",ledger:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927","timeless-x":"344d0e58b139eb1b6da0c29ea71d52a8eace8b57897c6098cb9b46012665c193",safe:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",zerion:"ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18",oneinch:"c286eebc742a537cd1d6818363e9dc53b21759a1e8e5d9b263d0c03ec7703576","crypto-com":"f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d",imtoken:"ef333840daf915aafdc4a004525502d6d49d77bd9c65e0642dbaefb3c2893bef",kraken:"18450873727504ae9315a084fa7624b5297d2fe5880f0982979c17345a138277",ronin:"541d5dcd4ede02f3afaf75bf8e3e4c4f1fb09edb5fa6c4377ebf31c2785d9adf",robinhood:"8837dd9413b1d9b585ee937d27a816590248386d9dbf59f5cd3422dbbb65683e",exodus:"e9ff15be73584489ca4a66f64d32c4537711797e30b6660dbcb71ea72a42b1f4",argent:"bc949c5d968ae81310268bf9193f9c9fb7bb4e1283e1284af8f2bd4992535fd6",jupiter:"0ef262ca2a56b88d179c93a21383fee4e135bd7bc6680e5c2356ff8e38301037",solflare:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",phantom:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",coin98:"2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01","magic-eden":"8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",backpack:"2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",frontier:"85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",xverse:"2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",leather:"483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13"}},x=w.w.getApiUrl(),k=new v.Z({baseUrl:x,clientId:null}),E=(0,f.BX)({walletButtons:[],fetching:!1}),W={state:E,subscribeKey:(e,t)=>(0,g.u$)(E,e,t),async fetchWalletButtons(){if(E.fetching)return;E.fetching=!0;let e=Object.values(C.WalletButtonsIds),{data:t}=await k.get({path:"/getWallets",params:{...m.N._getSdkProperties(),page:"1",entries:String(e.length),include:e?.join(",")}}),a=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(a.map(e=>m.N._fetchWalletImage(e))),E.walletButtons=t}};(0,f.BX)({ready:!1,pending:!1});var S=a(65103),j=a(45553),$=a(66254),I=a(81701),A=a(67869),R=a(73442),z=a(3824),_=a(58051),N=a(70417),O=a(58653);!function(e){e.Google="google",e.Github="github",e.Apple="apple",e.Facebook="facebook",e.X="x",e.Discord="discord",e.Farcaster="farcaster"}(i||(i={}));let L={connectWalletConnect:({walletConnect:e,wallet:t,connector:a})=>new Promise(async(i,o)=>{e&&$.a.setActiveConnector(a),await I.W.open(),A.I.push("ConnectingWalletConnect",{wallet:t});let r=I.W.subscribeKey("open",e=>{e||("Connect"!==A.I.state.view&&A.I.push("Connect"),r(),o(Error("Modal closed")))}),s=R.W.subscribeKey("activeCaipAddress",e=>{e&&(I.W.close(),s(),i(S.C.parseCaipAddress(e)))})}),connectExternal:e=>new Promise((t,a)=>{let i=R.W.subscribeKey("activeCaipAddress",e=>{e&&(I.W.close(),i(),t(S.C.parseCaipAddress(e)))});z.x.connectExternal(e,e.chain).catch(()=>{i(),a(Error("Connection rejected"))})}),connectSocial(e){let t=_.U.state.socialWindow,a=_.U.state.socialProvider,o=!1,r=null,s=R.W.subscribeKey("activeCaipAddress",e=>{e&&(I.W.close(),s())});return new Promise((s,n)=>{async function l(e){if(e.data?.resultUri){if(e.origin===C.SECURE_SITE_ORIGIN){window.removeEventListener("message",l,!1);try{let i=$.a.getAuthConnector();if(i&&!o){t&&(t.close(),_.U.setSocialWindow(void 0,R.W.state.activeChain),t=_.U.state.socialWindow),o=!0;let r=e.data.resultUri;if(a&&N.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:a}}),await i.provider.connectSocial(r),a){O.i.setConnectedSocialProvider(a),await z.x.connectExternal(i,i.chain);let e=R.W.state.activeCaipAddress;if(!e){n(Error("Failed to connect"));return}s(S.C.parseCaipAddress(e)),N.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:a}})}}}catch(e){n(Error("Failed to connect")),a&&N.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:a}})}}else a&&N.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:a}})}}!async function(){if(e&&(_.U.setSocialProvider(e,R.W.state.activeChain),a=_.U.state.socialProvider,N.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:a}})),a===i.Farcaster){I.W.open({view:"ConnectingFarcaster"});let t=I.W.subscribeKey("open",a=>{a||"farcaster"!==e||(n(Error("Popup closed")),A.I.push("Connect"),t())}),a=$.a.getAuthConnector();if(a&&!_.U.state.farcasterUrl)try{let{url:e}=await a.provider.getFarcasterUri();_.U.setFarcasterUrl(e,R.W.state.activeChain)}catch{n(Error("Failed to connect to farcaster"))}}else{let e=$.a.getAuthConnector();r=w.w.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(e&&a){let{uri:i}=await e.provider.getSocialRedirectUri({provider:a});if(r&&i){_.U.setSocialWindow(r,R.W.state.activeChain),t=_.U.state.socialWindow,r.location.href=i;let e=setInterval(()=>{t?.closed&&!o&&(n(Error("Popup closed")),clearInterval(e))},1e3);window.addEventListener("message",l,!1)}else r?.close(),n(Error("Failed to initiate social connection"))}}catch{n(Error("Failed to initiate social connection")),r?.close()}}}()})},connectEmail:()=>new Promise(async(e,t)=>{await I.W.open(),A.I.push("EmailLogin");let a=I.W.subscribeKey("open",e=>{e||("Connect"!==A.I.state.view&&A.I.push("Connect"),a(),t(Error("Modal closed")))}),i=R.W.subscribeKey("activeCaipAddress",t=>{t&&(I.W.close(),i(),e(S.C.parseCaipAddress(t)))})}),async updateEmail(){let e=O.i.getConnectedConnectorId(R.W.state.activeChain),t=$.a.getAuthConnector();if(!t)throw Error("No auth connector found");if(e!==j.o.CONNECTOR_ID.AUTH)throw Error("Not connected to email or social");let a=t.provider.getEmail()??"";return await I.W.open(),A.I.push("UpdateEmailWallet",{email:a,redirectView:void 0}),new Promise((e,i)=>{let o=setInterval(()=>{let i=t.provider.getEmail()??"";i!==a&&(I.W.close(),clearInterval(o),r(),e({email:i}))},1e3),r=I.W.subscribeKey("open",e=>{e||("Connect"!==A.I.state.view&&A.I.push("Connect"),clearInterval(o),r(),i(Error("Modal closed")))})})}},B={getWalletButton(e){let t=C.WalletButtonsIds;if(e in t)return W.state.walletButtons.find(a=>a.id===t[e])},isWalletButtonReady:e=>!(e in C.WalletButtonsIds)||!!B.getWalletButton(e)};a(98502),a(52321);var M=a(43997),T=a(66575),U=a(3515),P=a(79380),Z=a(14744),F=a(36211),D=a(85896),q=a(98410);a(22394),a(45166),a(21129),a(24772),a(84042);var G=a(71084),K=a(47327);let X=(0,D.AH)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  :host > button {
    min-width: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: var(--wui-wallet-button-bg);
    column-gap: var(--wui-spacing-2xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    height: var(--wui-spacing-3xl);
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    box-shadow:
      0px 8px 22px -6px var(--wui-color-gray-glass-010),
      0px 14px 64px -4px var(--wui-color-gray-glass-010);
  }

  :host > button > wui-text {
    text-transform: capitalize;
  }

  :host > button > wui-image {
    height: 24px;
    width: 24px;
    border-radius: var(--wui-border-radius-s);
  }

  :host([data-error='true']) > button {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  /* -- Disabled state --------------------------------------------------- */
  :host > button:disabled {
    cursor: default;
  }

  :host > button:disabled > wui-icon {
    filter: grayscale(1);
  }
`;var H=function(e,t,a,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(r<3?o(s):r>3?o(t,a,s):o(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s};let V=class extends D.WF{constructor(){super(...arguments),this.imageSrc="",this.name="",this.walletConnect=!1,this.loading=!1,this.error=!1,this.disabled=!1,this.shake=!1}render(){return this.dataset.error=`${this.error}`,(0,D.qy)`
      <button ?disabled=${this.disabled}>
        ${this.leftViewTemplate()} ${this.rightViewTemplate()}
      </button>
    `}leftViewTemplate(){return this.error?(0,D.qy)`<wui-icon-box
        icon="warningCircle"
        iconColor="error-100"
        backgroundColor="error-100"
        size="sm"
        iconSize="xs"
      ></wui-icon-box>`:this.loading?(0,D.qy)`<wui-loading-spinner size="md" color="fg-100"></wui-loading-spinner>`:this.icon?(0,D.qy)`<wui-icon
        size=${this.iconSize??"xl"}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:this.imageSrc?(0,D.qy)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:(0,D.qy)`<wui-icon size="xl" color="fg-100" name="walletPlaceholder"></wui-icon>`}rightViewTemplate(){return(0,D.qy)`
      <wui-text variant="paragraph-500" color="fg-100">${this.name||"Unknown"} </wui-text>
    `}};V.styles=[G.W5,G.fD,X],H([(0,q.MZ)()],V.prototype,"imageSrc",void 0),H([(0,q.MZ)()],V.prototype,"name",void 0),H([(0,q.MZ)({type:Boolean})],V.prototype,"walletConnect",void 0),H([(0,q.MZ)()],V.prototype,"icon",void 0),H([(0,q.MZ)()],V.prototype,"iconSize",void 0),H([(0,q.MZ)({type:Boolean})],V.prototype,"loading",void 0),H([(0,q.MZ)({type:Boolean})],V.prototype,"error",void 0),H([(0,q.MZ)({type:Boolean})],V.prototype,"disabled",void 0),H([(0,q.MZ)({type:Boolean})],V.prototype,"shake",void 0),V=H([(0,K.E)("wui-wallet-button")],V);var J=function(e,t,a,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(r<3?o(s):r>3?o(t,a,s):o(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s};let Q=class extends M.WF{constructor(){super(),this.unsubscribe=[],this.wallet="metamask",this.connectors=$.a.state.connectors,this.caipAddress=R.W.state.activeCaipAddress,this.loading=!1,this.error=!1,this.ready=B.isWalletButtonReady(this.wallet),this.modalLoading=I.W.state.loading,this.unsubscribe.push(I.W.subscribeKey("loading",e=>this.modalLoading=e),$.a.subscribeKey("connectors",e=>this.connectors=e),R.W.subscribeKey("activeCaipAddress",e=>{e&&(this.error=!1),this.caipAddress=e}),W.subscribeKey("walletButtons",()=>{this.ready=B.isWalletButtonReady(this.wallet)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){B.isWalletButtonReady(this.wallet)||W.fetchWalletButtons()}render(){if("email"===this.wallet)return this.emailTemplate();if(C.Socials.some(e=>e===this.wallet))return this.socialTemplate();let e=B.getWalletButton(this.wallet),t=e?$.a.getConnector(e.id,e.rdns):void 0;return t?this.externalTemplate(t):this.walletButtonTemplate()}walletButtonTemplate(){let e="walletConnect"===this.wallet,t=e?this.loading:this.loading||!this.ready,a=B.getWalletButton(this.wallet),i=Z.$.getWalletImageById(a?.image_id),o="walletConnect"===this.wallet?"WalletConnect":a?.name;return(0,M.qy)`
      <wui-wallet-button
        data-testid="apkt-wallet-button"
        name=${(this.ready||e)&&!this.modalLoading?(0,P.J)(o):"Loading..."}
        @click=${async()=>{this.loading=!0,await L.connectWalletConnect({walletConnect:"walletConnect"===this.wallet,wallet:a,connector:this.connectors.find(e=>"walletConnect"===e.id)}).catch(()=>{}).finally(()=>this.loading=!1)}}
        .icon=${(0,P.J)("walletConnect"===this.wallet?"walletConnect":void 0)}
        .imageSrc=${(0,P.J)(i)}
        ?disabled=${!!this.caipAddress||t||this.modalLoading}
        ?loading=${t||this.modalLoading}
      ></wui-wallet-button>
    `}externalTemplate(e){let t=B.getWalletButton(this.wallet),a=Z.$.getWalletImageById(t?.image_id),i=Z.$.getConnectorImage(e);return(0,M.qy)`
      <wui-wallet-button
        data-testid="apkt-wallet-button-external"
        name=${this.modalLoading?"Loading...":(0,P.J)(e.name)}
        @click=${async()=>{this.loading=!0,this.error=!1,await L.connectExternal(e).catch(()=>this.error=!0).finally(()=>this.loading=!1)}}
        .imageSrc=${(0,P.J)(a??i)}
        ?disabled=${!!this.caipAddress||this.loading||this.modalLoading}
        ?loading=${this.loading||this.modalLoading}
        ?error=${this.error}
      ></wui-wallet-button>
    `}socialTemplate(){return(0,M.qy)`<wui-wallet-button
      data-testid="apkt-wallet-button-social"
      name=${this.modalLoading?"Loading...":this.wallet}
      @click=${async()=>{this.loading=!0,this.error=!1,await L.connectSocial(this.wallet).catch(()=>this.error=!0).finally(()=>this.loading=!1)}}
      .icon=${this.wallet}
      ?disabled=${!!this.caipAddress||this.loading||this.modalLoading}
      ?loading=${this.loading||this.modalLoading}
      ?error=${this.error}
    ></wui-wallet-button>`}emailTemplate(){return(0,M.qy)`<wui-wallet-button
      data-testid="apkt-wallet-button-email"
      name=${this.modalLoading?"Loading...":"Email"}
      @click=${async()=>{this.loading=!0,this.error=!1,await L.connectEmail().catch(()=>this.error=!0).finally(()=>this.loading=!1)}}
      .icon=${"mail"}
      .iconSize=${"lg"}
      ?disabled=${!!this.caipAddress||this.loading||this.modalLoading}
      ?loading=${this.loading||this.modalLoading}
      ?error=${this.error}
    ></wui-wallet-button>`}};J([(0,T.M)()],Q.prototype,"wallet",void 0),J([(0,U.w)()],Q.prototype,"connectors",void 0),J([(0,U.w)()],Q.prototype,"caipAddress",void 0),J([(0,U.w)()],Q.prototype,"loading",void 0),J([(0,U.w)()],Q.prototype,"error",void 0),J([(0,U.w)()],Q.prototype,"ready",void 0),J([(0,U.w)()],Q.prototype,"modalLoading",void 0),Q=J([(0,F.EM)("appkit-wallet-button")],Q);let Y=()=>{var e,t;let a=u.F.useUtils(),{isSigned:i,isAdmin:f,isSessionLoading:g,data:w}=(0,d.A)(),v=(0,n.useRouter)(),{mutateAsync:m,isPending:y}=u.F.twitter.disconnectMyAccount.useMutation(),{mutateAsync:C}=u.F.twitter.getMyAccountAuthUrl.useMutation(),{data:x,status:k}=u.F.appSetting.twitterLoginStatus.useQuery(void 0,{enabled:!!i}),{data:E,isLoading:W,error:S}=u.F.twitter.getMyAccount.useQuery(void 0,{enabled:!!i&&(null==x?void 0:x.status),staleTime:3e5,retry:1}),[j,$]=(0,r.useState)(!1),I=(0,r.useRef)(null),{walletInfo:A}=(0,l.XV)(),{data:{event:R}}=(0,l.Ks)(),{open:z,close:_}=(0,l.JS)(),{disconnect:N}=(0,l.uP)(),O=(null==A?void 0:A.name)?(0,c.yI)(A.name):"",L=async e=>await z({view:e}),B=async()=>{let e=await C();document.cookie="twitterRedirect=".concat(window.location.href,"; path=/;"),window.open(e,"_self")},M=async()=>{await m(),a.twitter.getMyAccount.reset(),$(!1)},T=async()=>{try{await N(),await _()}catch(e){console.error(e)}};return(0,r.useEffect)(()=>{switch(R){case"CONNECT_ERROR":T();break;case"DISCONNECT_SUCCESS":case"SIWX_AUTH_SUCCESS":v.refresh()}},[R]),(0,o.jsx)("div",{className:"mx-10 flex flex-col items-center overflow-visible bg-transparent pt-4","data-sentry-component":"Header","data-sentry-source-file":"Header.tsx",children:(0,o.jsxs)("section",{className:"w-full max-w-7xl",children:[(0,o.jsx)("header",{className:"w-full bg-transparent",children:(0,o.jsx)("div",{className:"flex flex-col items-center justify-end gap-3 sm:flex-row",children:(0,o.jsx)("div",{className:"flex gap-4 whitespace-nowrap max-md:flex-wrap",children:g?(0,o.jsx)(p.A,{}):i?(0,o.jsxs)("div",{className:"flex flex-wrap justify-end gap-2 text-white sm:flex-nowrap",children:[(null==x?void 0:x.status)&&"success"===k?(0,o.jsx)("div",{children:E?(0,o.jsxs)("button",{ref:I,className:"flex h-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-transparent px-4 text-violet-500",onClick:()=>$(!j),children:[(0,o.jsx)(h.A,{loading:"lazy",src:E.data.profile_image_url,alt:"User profile",className:"aspect-square max-w-12 shrink-0 rounded-full md:max-w-36",width:30,height:30}),(0,o.jsx)("div",{children:E.data.name})]}):W?(0,o.jsx)(p.A,{}):S?(0,o.jsx)("div",{children:"Twitter error"}):(0,o.jsx)(b.A,{className:"m-0 h-full",onClick:B,text:"Connect twitter"})}):null,f?(0,o.jsx)("button",{onClick:()=>v.push("/admin"),className:"flex h-10 min-w-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-transparent p-2 text-violet-500",children:(0,o.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"https://www.w3.org/2000/svg",stroke:"#8757e8",children:[(0,o.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,o.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z",fill:"#1C274C"})," "]})]})}):null,(0,o.jsxs)("button",{onClick:()=>L("Account"),className:"flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-transparent px-4 py-2 text-violet-500 sm:w-full",children:[(0,o.jsx)("div",{className:"[&>svg]:h-5 [&>svg]:w-5",children:O?(0,o.jsx)(s.default,{src:O,width:20,height:20,alt:"wallet icon"}):null}),(null==w?void 0:w.address)&&(0,o.jsx)("span",{className:"hidden md:block",children:(0,c.W5)(w.address,15)})]})]}):(0,o.jsxs)("div",{className:"flex flex-wrap items-center gap-4",children:[(0,o.jsx)("appkit-wallet-button",{wallet:"binance"}),(0,o.jsx)("appkit-button",{balance:"hide"})]})})})}),j&&(0,o.jsx)("div",{className:"absolute z-50 mt-1 rounded-xl bg-gray-200 p-1",style:{left:null===(e=I.current)||void 0===e?void 0:e.getBoundingClientRect().left,top:null===(t=I.current)||void 0===t?void 0:t.getBoundingClientRect().bottom},children:(0,o.jsx)("div",{className:"py-1",children:(0,o.jsx)("button",{onClick:M,className:"block w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50",disabled:y,children:"Disconnect"})})})]})})}},21129:(e,t,a)=>{var i=a(85896),o=a(98410),r=a(71084),s=a(47327);let n=(0,i.AH)`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var l=function(e,t,a,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(r<3?o(s):r>3?o(t,a,s):o(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s};let c=class extends i.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${"inherit"===this.color?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,(0,i.qy)`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};c.styles=[r.W5,n],l([(0,o.MZ)()],c.prototype,"color",void 0),l([(0,o.MZ)()],c.prototype,"size",void 0),c=l([(0,s.E)("wui-loading-spinner")],c)},45166:(e,t,a)=>{var i=a(85896),o=a(98410),r=a(71084),s=a(47327);let n=(0,i.AH)`
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
`;var l=function(e,t,a,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(r<3?o(s):r>3?o(t,a,s):o(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s};let c=class extends i.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,(0,i.qy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};c.styles=[r.W5,r.ck,n],l([(0,o.MZ)()],c.prototype,"src",void 0),l([(0,o.MZ)()],c.prototype,"alt",void 0),l([(0,o.MZ)()],c.prototype,"size",void 0),c=l([(0,s.E)("wui-image")],c)},46624:(e,t,a)=>{a.d(t,{A:()=>r});var i=a(90871),o=a(36489);let r=()=>{var e,t,a,r,s,n;let{isConnected:l}=(0,i.G8)(),{data:c,status:d}=(0,o.useSession)(),u=null==c?void 0:null===(e=c.user)||void 0===e?void 0:e.isAdmin,b=null==c?void 0:null===(t=c.user)||void 0===t?void 0:t.plan,h=Number(null!==(s=null==c?void 0:null===(a=c.user)||void 0===a?void 0:a.amountOfTokens)&&void 0!==s?s:0),p=Number(null!==(n=null==c?void 0:null===(r=c.user)||void 0===r?void 0:r.amountOfStakedTokens)&&void 0!==n?n:0);return{isSigned:l&&(null==c?void 0:c.address),isAdmin:u,isSessionLoading:"loading"===d,data:c,plan:b,amountOfTokens:h,amountOfStakedTokens:p}}},84042:(e,t,a)=>{var i=a(85896),o=a(98410);a(22394);var r=a(71084),s=a(47327);let n=(0,i.AH)`
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
`;var l=function(e,t,a,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(r<3?o(s):r>3?o(t,a,s):o(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s};let c=class extends i.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e=this.iconSize||this.size,t="lg"===this.size,a="xl"===this.size,o="gray"===this.background,r="opaque"===this.background,s="accent-100"===this.backgroundColor&&r||"success-100"===this.backgroundColor&&r||"error-100"===this.backgroundColor&&r||"inverse-100"===this.backgroundColor&&r,n=`var(--wui-color-${this.backgroundColor})`;return s?n=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(n=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${n};
       --local-bg-mix: ${s||o?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":a?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,(0,i.qy)` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};c.styles=[r.W5,r.fD,n],l([(0,o.MZ)()],c.prototype,"size",void 0),l([(0,o.MZ)()],c.prototype,"backgroundColor",void 0),l([(0,o.MZ)()],c.prototype,"iconColor",void 0),l([(0,o.MZ)()],c.prototype,"iconSize",void 0),l([(0,o.MZ)()],c.prototype,"background",void 0),l([(0,o.MZ)({type:Boolean})],c.prototype,"border",void 0),l([(0,o.MZ)()],c.prototype,"borderColor",void 0),l([(0,o.MZ)()],c.prototype,"icon",void 0),c=l([(0,s.E)("wui-icon-box")],c)}}]);
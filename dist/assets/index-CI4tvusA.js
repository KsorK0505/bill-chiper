const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-PGg5iibf.js","assets/index-gB0U5_HN.js","assets/index-CkXXzWm4.css"])))=>i.map(i=>d[i]);
import{_ as fe}from"./index-gB0U5_HN.js";const pe=Symbol(),Z=Object.getPrototypeOf,J=new WeakMap,me=e=>e&&(J.has(e)?J.get(e):Z(e)===Object.prototype||Z(e)===Array.prototype),ge=e=>me(e)&&e[pe]||null,ee=(e,t=!0)=>{J.set(e,t)},q=e=>typeof e=="object"&&e!==null,L=new WeakMap,x=new WeakSet,he=(e=Object.is,t=(o,h)=>new Proxy(o,h),s=o=>q(o)&&!x.has(o)&&(Array.isArray(o)||!(Symbol.iterator in o))&&!(o instanceof WeakMap)&&!(o instanceof WeakSet)&&!(o instanceof Error)&&!(o instanceof Number)&&!(o instanceof Date)&&!(o instanceof String)&&!(o instanceof RegExp)&&!(o instanceof ArrayBuffer),n=o=>{switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:throw o}},l=new WeakMap,c=(o,h,I=n)=>{const y=l.get(o);if((y==null?void 0:y[0])===h)return y[1];const v=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o));return ee(v,!0),l.set(o,[h,v]),Reflect.ownKeys(o).forEach(D=>{if(Object.getOwnPropertyDescriptor(v,D))return;const W=Reflect.get(o,D),A={value:W,enumerable:!0,configurable:!0};if(x.has(W))ee(W,!1);else if(W instanceof Promise)delete A.value,A.get=()=>I(W);else if(L.has(W)){const[b,z]=L.get(W);A.value=c(b,z(),I)}Object.defineProperty(v,D,A)}),Object.preventExtensions(v)},d=new WeakMap,f=[1,1],E=o=>{if(!q(o))throw new Error("object required");const h=d.get(o);if(h)return h;let I=f[0];const y=new Set,v=(i,a=++f[0])=>{I!==a&&(I=a,y.forEach(r=>r(i,a)))};let D=f[1];const W=(i=++f[1])=>(D!==i&&!y.size&&(D=i,b.forEach(([a])=>{const r=a[1](i);r>I&&(I=r)})),I),A=i=>(a,r)=>{const g=[...a];g[1]=[i,...g[1]],v(g,r)},b=new Map,z=(i,a)=>{if(y.size){const r=a[3](A(i));b.set(i,[a,r])}else b.set(i,[a])},X=i=>{var a;const r=b.get(i);r&&(b.delete(i),(a=r[1])==null||a.call(r))},de=i=>(y.add(i),y.size===1&&b.forEach(([r,g],U)=>{const k=r[3](A(U));b.set(U,[r,k])}),()=>{y.delete(i),y.size===0&&b.forEach(([r,g],U)=>{g&&(g(),b.set(U,[r]))})}),H=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),R=t(H,{deleteProperty(i,a){const r=Reflect.get(i,a);X(a);const g=Reflect.deleteProperty(i,a);return g&&v(["delete",[a],r]),g},set(i,a,r,g){const U=Reflect.has(i,a),k=Reflect.get(i,a,g);if(U&&(e(k,r)||d.has(r)&&e(k,d.get(r))))return!0;X(a),q(r)&&(r=ge(r)||r);let V=r;if(r instanceof Promise)r.then(C=>{r.status="fulfilled",r.value=C,v(["resolve",[a],C])}).catch(C=>{r.status="rejected",r.reason=C,v(["reject",[a],C])});else{!L.has(r)&&s(r)&&(V=E(r));const C=!x.has(V)&&L.get(V);C&&z(a,C)}return Reflect.set(i,a,V,g),v(["set",[a],r,k]),!0}});d.set(o,R);const ue=[H,W,c,de];return L.set(R,ue),Reflect.ownKeys(o).forEach(i=>{const a=Object.getOwnPropertyDescriptor(o,i);"value"in a&&(R[i]=o[i],delete a.value,delete a.writable),Object.defineProperty(H,i,a)}),R})=>[E,L,x,e,t,s,n,l,c,d,f],[ye]=he();function P(e={}){return ye(e)}function j(e,t,s){const n=L.get(e);let l;const c=[],d=n[3];let f=!1;const o=d(h=>{c.push(h),l||(l=Promise.resolve().then(()=>{l=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,o()}}function ve(e,t){const s=L.get(e),[n,l,c]=s;return c(n,l(),t)}const u=P({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),ce={state:u,subscribe(e){return j(u,()=>e(u))},push(e,t){e!==u.view&&(u.view=e,t&&(u.data=t),u.history.push(e))},reset(e){u.view=e,u.history=[e]},replace(e){u.history.length>1&&(u.history[u.history.length-1]=e,u.view=e)},goBack(){if(u.history.length>1){u.history.pop();const[e]=u.history.slice(-1);u.view=e}},setData(e){u.data=e}},m={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return m.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return m.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},formatNativeUrl(e,t,s){if(m.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!m.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;if(n.startsWith("https://t.me")){const c=Buffer.from(t).toString("base64").replace(/[=]/g,"");n.endsWith("/")&&(n=n.slice(0,-1)),this.setWalletConnectDeepLink(n,s);const d=new URL(n);return d.searchParams.set("startapp",c),d.toString()}n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){const s=this.isTelegram()?"_blank":t;window.open(e,s,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(m.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(m.WCM_VERSION,"2.7.0")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=ce.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},be=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),p=P({enabled:be,userSessionId:"",events:[],connectedWalletId:void 0}),we={state:p,subscribe(e){return j(p.events,()=>e(ve(p.events[p.events.length-1])))},initialize(){p.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(p.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){p.connectedWalletId=e},click(e){if(p.enabled){const t={type:"CLICK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},track(e){if(p.enabled){const t={type:"TRACK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},view(e){if(p.enabled){const t={type:"VIEW",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}}},O=P({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),w={state:O,subscribe(e){return j(O,()=>e(O))},setChains(e){O.chains=e},setWalletConnectUri(e){O.walletConnectUri=e},setIsCustomDesktop(e){O.isCustomDesktop=e},setIsCustomMobile(e){O.isCustomMobile=e},setIsDataLoaded(e){O.isDataLoaded=e},setIsUiLoaded(e){O.isUiLoaded=e},setIsAuth(e){O.isAuth=e}},B=P({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),$={state:B,subscribe(e){return j(B,()=>e(B))},setConfig(e){var t,s;we.initialize(),w.setChains(e.chains),w.setIsAuth(!!e.enableAuthMode),w.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),w.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),m.setModalVersionInStorage(),Object.assign(B,e)}};var Ie=Object.defineProperty,te=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,se=(e,t,s)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,We=(e,t)=>{for(var s in t||(t={}))Oe.call(t,s)&&se(e,s,t[s]);if(te)for(var s of te(t))_e.call(t,s)&&se(e,s,t[s]);return e};const Y="https://explorer-api.walletconnect.com",G="wcm",Q="js-2.7.0";async function K(e,t){const s=We({sdkType:G,sdkVersion:Q},t),n=new URL(e,Y);return n.searchParams.append("projectId",$.state.projectId),Object.entries(s).forEach(([c,d])=>{d&&n.searchParams.append(c,String(d))}),(await fetch(n)).json()}const M={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${Y}/w3m/v1/getWalletImage/${e}?projectId=${$.state.projectId}&sdkType=${G}&sdkVersion=${Q}`},getAssetImageUrl(e){return`${Y}/w3m/v1/getAssetImage/${e}?projectId=${$.state.projectId}&sdkType=${G}&sdkVersion=${Q}`}};var Ee=Object.defineProperty,ne=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,oe=(e,t,s)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Pe=(e,t)=>{for(var s in t||(t={}))Ce.call(t,s)&&oe(e,s,t[s]);if(ne)for(var s of ne(t))Le.call(t,s)&&oe(e,s,t[s]);return e};const re=m.isMobile(),_=P({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),ke={state:_,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=$.state;if(e==="NONE"||t==="ALL"&&!e)return _.recomendedWallets;if(m.isArray(e)){const n={recommendedIds:e.join(",")},{listings:l}=await M.getAllListings(n),c=Object.values(l);c.sort((d,f)=>{const E=e.indexOf(d.id),o=e.indexOf(f.id);return E-o}),_.recomendedWallets=c}else{const{chains:s,isAuth:n}=w.state,l=s==null?void 0:s.join(","),c=m.isArray(t),d={page:1,sdks:n?"auth_v1":void 0,entries:m.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:f}=re?await M.getMobileListings(d):await M.getDesktopListings(d);_.recomendedWallets=Object.values(f)}return _.recomendedWallets},async getWallets(e){const t=Pe({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=$.state,{recomendedWallets:l}=_;if(n==="ALL")return _.wallets;l.length?t.excludedIds=l.map(I=>I.id).join(","):m.isArray(s)&&(t.excludedIds=s.join(",")),m.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),w.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:d}=e,{listings:f,total:E}=re?await M.getMobileListings(t):await M.getDesktopListings(t),o=Object.values(f),h=d?"search":"wallets";return _[h]={listings:[..._[h].listings,...o],total:E,page:c??1},{listings:o,total:E}},getWalletImageUrl(e){return M.getWalletImageUrl(e)},getAssetImageUrl(e){return M.getAssetImageUrl(e)},resetSearch(){_.search={listings:[],total:0,page:1}}},T=P({open:!1}),F={state:T,subscribe(e){return j(T,()=>e(T))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:n}=w.state;if(m.removeWalletConnectDeepLink(),w.setWalletConnectUri(e==null?void 0:e.uri),w.setChains(e==null?void 0:e.chains),ce.reset("ConnectWallet"),s&&n)T.open=!0,t();else{const l=setInterval(()=>{const c=w.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),T.open=!0,t())},200)}})},close(){T.open=!1}};var Ae=Object.defineProperty,ae=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,ie=(e,t,s)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,je=(e,t)=>{for(var s in t||(t={}))Me.call(t,s)&&ie(e,s,t[s]);if(ae)for(var s of ae(t))Se.call(t,s)&&ie(e,s,t[s]);return e};function De(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const N=P({themeMode:De()?"dark":"light"}),le={state:N,subscribe(e){return j(N,()=>e(N))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(N.themeMode=t),s&&(N.themeVariables=je({},s))}},S=P({open:!1,message:"",variant:"success"}),Ne={state:S,subscribe(e){return j(S,()=>e(S))},openToast(e,t){S.open=!0,S.message=e,S.variant=t},closeToast(){S.open=!1}};class Ue{constructor(t){this.openModal=F.open,this.closeModal=F.close,this.subscribeModal=F.subscribe,this.setTheme=le.setThemeConfig,le.setThemeConfig(t),$.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await fe(()=>import("./index-PGg5iibf.js"),__vite__mapDeps([0,1,2]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),w.setIsUiLoaded(!0)}}}const Re=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Ue},Symbol.toStringTag,{value:"Module"}));export{m as C,ke as E,F as M,w as O,ce as R,le as T,Ne as a,we as b,$ as c,Re as i};

import{o as Ra,R as Gn}from"./vendor-DjDUeN9M.js";/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=()=>{};var gi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let i=r.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},xa=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const i=r[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const u=r[t++];e[s++]=String.fromCharCode((i&31)<<6|u&63)}else if(i>239&&i<365){const u=r[t++],l=r[t++],c=r[t++],g=((i&7)<<18|(u&63)<<12|(l&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],l=r[t++];e[s++]=String.fromCharCode((i&15)<<12|(u&63)<<6|l&63)}}return e.join("")},Kn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<r.length;i+=3){const u=r[i],l=i+1<r.length,c=l?r[i+1]:0,g=i+2<r.length,v=g?r[i+2]:0,P=u>>2,S=(u&3)<<4|c>>4;let N=(c&15)<<2|v>>6,D=v&63;g||(D=64,l||(N=64)),s.push(t[P],t[S],t[N],t[D])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(no(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):xa(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<r.length;){const u=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;const v=i<r.length?t[r.charAt(i)]:64;++i;const S=i<r.length?t[r.charAt(i)]:64;if(++i,u==null||c==null||v==null||S==null)throw new Ca;const N=u<<2|c>>4;if(s.push(N),v!==64){const D=c<<4&240|v>>2;if(s.push(D),S!==64){const M=v<<6&192|S;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Ca extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ka=function(r){const e=no(r);return Kn.encodeByteArray(e,!0)},so=function(r){return ka(r).replace(/\./g,"")},io=function(r){try{return Kn.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=()=>Oa().__FIREBASE_DEFAULTS__,Da=()=>{if(typeof process>"u"||typeof gi>"u")return;const r=gi.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Ua=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&io(r[1]);return e&&JSON.parse(e)},Ma=()=>{try{return Na()||La()||Da()||Ua()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Fa=r=>{var e;return(e=Ma())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ba(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function ja(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $a(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Ha(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oo(){try{return typeof indexedDB=="object"}catch{return!1}}function qa(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var u;e(((u=i.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="FirebaseError";class Je extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Wa,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tt.prototype.create)}}class Tt{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,u=this.errors[e],l=u?za(u,s):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new Je(i,c,s)}}function za(r,e){try{let t=0,s="";for(;t<r.length;){const i=r.indexOf("{$",t);if(i===-1){s+=r.substring(t);break}const u=r.indexOf("}",i+2);if(u===-1){s+=r.substring(t);break}const l=r.substring(i+2,u),c=e[l];s+=r.substring(t,i)+(c!=null?String(c):`<${l}?>`),t=u+1}return s}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ga(r,e){const t=new Ka(r,e);return t.subscribe.bind(t)}class Ka{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Ja(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Sn),i.error===void 0&&(i.error=Sn),i.complete===void 0&&(i.complete=Sn);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ja(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Sn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}class ze{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(F||(F={}));const Ya={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Xa=F.INFO,Qa={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Za=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),i=Qa[e];if(i)console[i](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yr{constructor(e){this.name=e,this._logLevel=Xa,this._logHandler=Za,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ya[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(tu(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function tu(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Un="@firebase/app",_i="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=new Yr("@firebase/app"),ru="@firebase/app-compat",nu="@firebase/analytics-compat",su="@firebase/analytics",iu="@firebase/app-check-compat",ou="@firebase/app-check",au="@firebase/auth",uu="@firebase/auth-compat",lu="@firebase/database",hu="@firebase/data-connect",cu="@firebase/database-compat",fu="@firebase/functions",pu="@firebase/functions-compat",du="@firebase/installations",gu="@firebase/installations-compat",mu="@firebase/messaging",_u="@firebase/messaging-compat",yu="@firebase/performance",wu="@firebase/performance-compat",vu="@firebase/remote-config",Eu="@firebase/remote-config-compat",Tu="@firebase/storage",Iu="@firebase/storage-compat",Au="@firebase/firestore",bu="@firebase/ai",Vu="@firebase/firestore-compat",Pu="firebase",Su="12.19.0",Ru={[Un]:"fire-core",[ru]:"fire-core-compat",[su]:"fire-analytics",[nu]:"fire-analytics-compat",[ou]:"fire-app-check",[iu]:"fire-app-check-compat",[au]:"fire-auth",[uu]:"fire-auth-compat",[lu]:"fire-rtdb",[hu]:"fire-data-connect",[cu]:"fire-rtdb-compat",[fu]:"fire-fn",[pu]:"fire-fn-compat",[du]:"fire-iid",[gu]:"fire-iid-compat",[mu]:"fire-fcm",[_u]:"fire-fcm-compat",[yu]:"fire-perf",[wu]:"fire-perf-compat",[vu]:"fire-rc",[Eu]:"fire-rc-compat",[Tu]:"fire-gcs",[Iu]:"fire-gcs-compat",[Au]:"fire-fst",[Vu]:"fire-fst-compat",[bu]:"fire-vertex","fire-js":"fire-js",[Pu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new Map,xu=new Map,yi=new Map;function wi(r,e){try{r.container.addComponent(e)}catch(t){ke.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Ge(r){const e=r.name;if(yi.has(e))return ke.debug(`There were multiple attempts to register component ${e}.`),!1;yi.set(e,r);for(const t of Nu.values())wi(t,r);for(const t of xu.values())wi(t,r);return!0}function tt(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Tt("app","Firebase",Cu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=Su;function xe(r,e,t){let s=Ru[r]??r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),u=e.match(/\s|\//);if(i||u){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&u&&l.push("and"),u&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ke.warn(l.join(" "));return}Ge(new ze(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="firebase-heartbeat-database",Ou=1,Jt="firebase-heartbeat-store";let Rn=null;function lo(){return Rn||(Rn=Ra(ku,Ou,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Jt)}catch(t){console.warn(t)}}}}).catch(r=>{throw Jn.create("idb-open",{originalErrorMessage:r.message})})),Rn}async function Lu(r){try{const t=(await lo()).transaction(Jt),s=await t.objectStore(Jt).get(ho(r));return await t.done,s}catch(e){if(e instanceof Je)ke.warn(e.message);else{const t=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ke.warn(t.message)}}}async function vi(r,e){try{const s=(await lo()).transaction(Jt,"readwrite");await s.objectStore(Jt).put(e,ho(r)),await s.done}catch(t){if(t instanceof Je)ke.warn(t.message);else{const s=Jn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ke.warn(s.message)}}}function ho(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=1024,Uu=30;class Mu{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Bu(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Ei();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(l=>l.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:i}),this._heartbeatsCache.heartbeats.length>Uu){const l=ju(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ke.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ei(),{heartbeatsToSend:s,unsentEntries:i}=Fu(this._heartbeatsCache.heartbeats),u=so(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return ke.warn(t),""}}}function Ei(){return new Date().toISOString().substring(0,10)}function Fu(r,e=Du){const t=[];let s=r.slice();for(const i of r){const u=t.find(l=>l.agent===i.agent);if(u){if(u.dates.push(i.date),Ti(t)>e){u.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ti(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Bu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oo()?qa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Lu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return vi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return vi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ti(r){return so(JSON.stringify({version:2,heartbeats:r})).length}function ju(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(r){Ge(new ze("platform-logger",e=>new eu(e),"PRIVATE")),Ge(new ze("heartbeat",e=>new Mu(e),"PRIVATE")),xe(Un,_i,r),xe(Un,_i,"esm2020"),xe("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$u("");var Hu="firebase",qu="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe(Hu,qu,"app");function co(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wu=co,fo=new Tt("auth","Firebase",co());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Yr("@firebase/auth");function Nn(r,...e){Or.logLevel<=F.WARN&&Or.warn(`Auth (${Xr}): ${r}`,...e)}function Nr(r,...e){Or.logLevel<=F.ERROR&&Or.error(`Auth (${Xr}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(r,...e){throw Xn(r,...e)}function po(r,...e){return Xn(r,...e)}function Yn(r,e,t){const s={...Wu(),[e]:t};return new Tt("auth","Firebase",s).create(e,{appName:r.name})}function xr(r){return Yn(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xn(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return fo.create(r,...e)}function U(r,e,...t){if(!r)throw Xn(e,...t)}function Ht(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Nr(e),new Error(e)}function Lr(r,e){r||Ht(e)}function zu(){return Ai()==="http:"||Ai()==="https:"}function Ai(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zu()||$a()||"connection"in navigator)?navigator.onLine:!0}function Ku(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t){this.shortDelay=e,this.longDelay=t,Lr(t>e,"Short delay should be less than long delay!"),this.isMobile=Ba()||Ha()}get(){return Gu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(r,e){Lr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Qu=new ir(3e4,6e4);function mo(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Qr(r,e,t,s,i={}){return _o(r,i,async()=>{let u={},l={};s&&(e==="GET"?l=s:u={body:JSON.stringify(s)});const c=ao({...l,key:r.config.apiKey}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const v={method:e,headers:g,...u};return ja()||(v.referrerPolicy="strict-origin-when-cross-origin"),r.emulatorConfig&&uo(r.emulatorConfig.host)&&(v.credentials="include"),go.fetch()(await yo(r,r.config.apiHost,t,c),v)})}async function _o(r,e,t){r._canInitEmulator=!1;const s={...Yu,...e};try{const i=new Zu(r),u=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const l=await u.json();if("needConfirmation"in l)throw Ar(r,"account-exists-with-different-credential",l);if(u.ok&&!("errorMessage"in l))return l;{const c=u.ok?l.errorMessage:l.error.message,[g,v]=c.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ar(r,"credential-already-in-use",l);if(g==="EMAIL_EXISTS")throw Ar(r,"email-already-in-use",l);if(g==="USER_DISABLED")throw Ar(r,"user-disabled",l);const P=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Yn(r,P,v);Ii(r,P)}}catch(i){if(i instanceof Je)throw i;Ii(r,"network-request-failed",{message:String(i)})}}async function yo(r,e,t,s){const i=`${e}${t}?${s}`,u=r,l=u.config.emulator?Ju(r.config,i):`${r.config.apiScheme}://${i}`;return Xu.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(l).toString():l}class Zu{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(po(this.auth,"network-request-failed")),Qu.get())})}}function Ar(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=po(r,e,s);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(r,e){return Qr(r,"POST","/v1/accounts:delete",e)}async function Dr(r,e){return Qr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tl(r,e=!1){const t=ot(r),s=await t.getIdToken(e),i=wo(s);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const u=typeof i.firebase=="object"?i.firebase:void 0,l=u==null?void 0:u.sign_in_provider;return{claims:i,token:s,authTime:qt(xn(i.auth_time)),issuedAtTime:qt(xn(i.iat)),expirationTime:qt(xn(i.exp)),signInProvider:l||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function xn(r){return Number(r)*1e3}function wo(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Nr("JWT malformed, contained fewer than 3 sections"),null;try{const i=io(t);return i?JSON.parse(i):(Nr("Failed to decode base64 JWT payload"),null)}catch(i){return Nr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bi(r){const e=wo(r);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Je&&rl(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function rl({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qt(this.lastLoginAt),this.creationTime=qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(r){var S;const e=r.auth,t=await r.getIdToken(),s=await Mn(r,Dr(e,{idToken:t}));U(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const u=(S=i.providerUserInfo)!=null&&S.length?vo(i.providerUserInfo):[],l=il(r.providerData,u),c=r.isAnonymous,g=!(r.email&&i.passwordHash)&&!(l!=null&&l.length),v=c?g:!1,P={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Fn(i.createdAt,i.lastLoginAt),isAnonymous:v};Object.assign(r,P)}async function sl(r){const e=ot(r);await Ur(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function il(r,e){return[...r.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function vo(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ol(r,e){const t=await _o(r,{},async()=>{const s=ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:u}=r.config,l=await yo(r,i,"/v1/token",`key=${u}`),c=await r._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:c,body:s};return r.emulatorConfig&&uo(r.emulatorConfig.host)&&(g.credentials="include"),go.fetch()(l,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function al(r,e){return Qr(r,"POST","/v2/accounts:revokeToken",mo(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=bi(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:u}=await ol(e,t);this.updateTokensAndExpiration(s,i,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:u}=t,l=new mt;return s&&(U(typeof s=="string","internal-error",{appName:e}),l.refreshToken=s),i&&(U(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),u&&(U(typeof u=="number","internal-error",{appName:e}),l.expirationTime=u),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mt,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(r,e){U(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ve{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new nl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Mn(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tl(this,e)}reload(){return sl(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ve({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ur(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await Mn(this,el(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,u=t.phoneNumber??void 0,l=t.photoURL??void 0,c=t.tenantId??void 0,g=t._redirectEventId??void 0,v=t.createdAt??void 0,P=t.lastLoginAt??void 0,{uid:S,emailVerified:N,isAnonymous:D,providerData:M,stsTokenManager:q}=t;U(S&&q,e,"internal-error");const H=mt.fromJSON(this.name,q);U(typeof S=="string",e,"internal-error"),He(s,e.name),He(i,e.name),U(typeof N=="boolean",e,"internal-error"),U(typeof D=="boolean",e,"internal-error"),He(u,e.name),He(l,e.name),He(c,e.name),He(g,e.name),He(v,e.name),He(P,e.name);const oe=new Ve({uid:S,auth:e,email:i,emailVerified:N,displayName:s,isAnonymous:D,photoURL:l,phoneNumber:u,tenantId:c,stsTokenManager:H,createdAt:v,lastLoginAt:P});return M&&Array.isArray(M)&&(oe.providerData=M.map(Te=>({...Te}))),g&&(oe._redirectEventId=g),oe}static async _fromIdTokenResponse(e,t,s=!1){const i=new mt;i.updateFromServerResponse(t);const u=new Ve({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ur(u),u}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];U(i.localId!==void 0,"internal-error");const u=i.providerUserInfo!==void 0?vo(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(u!=null&&u.length),c=new mt;c.updateFromIdToken(s);const g=new Ve({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:l}),v={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new Fn(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Map;function rt(r){Lr(r instanceof Function,"Expected a class definition");let e=Vi.get(r);return e?(Lr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Vi.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Eo.type="NONE";const Pi=Eo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(r,e,t){return`firebase:${r}:${e}:${t}`}class st{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:u}=this.auth;this.fullUserKey=Cn(this.userKey,i.apiKey,u),this.fullPersistenceKey=Cn("persistence",i.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Dr(this.auth,{idToken:e}).catch(()=>{});return t?Ve._fromGetAccountInfoResponse(this.auth,t,e):null}return Ve._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,s="authUser"){if(!t.length)return new st(rt(Pi),e,s);const i=(await Promise.all(t.map(async v=>{try{if(await v._isAvailable())return v}catch{return}}))).filter(v=>v);let u=i[0]||rt(Pi);const l=Cn(s,e.config.apiKey,e.name);let c=null;for(const v of t)try{const P=await v._get(l);if(P){let S;if(typeof P=="string"){const N=await Dr(e,{idToken:P}).catch(()=>{});if(!N)break;S=await Ve._fromGetAccountInfoResponse(e,N,P)}else S=Ve._fromJSON(e,P);v!==u&&(c=S),u=v;break}}catch{}const g=i.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new st(u,e,s):(u=g[0],c&&await u._set(l,c.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(l)}catch{}})),new st(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ul(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pl(e))return"Blackberry";if(dl(e))return"Webos";if(ll(e))return"Safari";if((e.includes("chrome/")||hl(e))&&!e.includes("edge/"))return"Chrome";if(fl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ul(r=Pe()){return/firefox\//i.test(r)}function ll(r=Pe()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hl(r=Pe()){return/crios\//i.test(r)}function cl(r=Pe()){return/iemobile/i.test(r)}function fl(r=Pe()){return/android/i.test(r)}function pl(r=Pe()){return/blackberry/i.test(r)}function dl(r=Pe()){return/webos/i.test(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(r,e=[]){let t;switch(r){case"Browser":t=Si(Pe());break;case"Worker":t=`${Si(Pe())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((l,c)=>{try{const g=e(u);l(g)}catch(g){c(g)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(r,e={}){return Qr(r,"GET","/v2/passwordPolicy",mo(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=6;class yl{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??_l,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ri(this),this.idTokenSubscription=new Ri(this),this.beforeStateQueue=new gl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rt(t)),this._initializationPromise=this.queue(async()=>{var s,i,u;if(!this._deleted){try{this.persistenceManager=await st.create(this,e)}catch(l){Nn(`Failed to initialize persistence: ${l}`),this.persistenceManager=await st.create(this,[])}finally{(s=this._resolvePersistenceManagerAvailable)==null||s.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(l){Nn(`Failed to initialize current user: ${l}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Dr(this,{idToken:e}),s=await Ve._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(tt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(u=this.redirectUser)==null?void 0:u._redirectEventId,c=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!l||l===c)&&(g!=null&&g.user)&&(s=g.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ur(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ku()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tt(this.app))return Promise.reject(xr(this));const t=e?ot(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tt(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ml(this),t=new yl(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Tt("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await al(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rt(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await st.create(this,[rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{l||u(this.currentUser)}).catch(g=>{if(!l)if(typeof t!="function"&&t.error)t.error(g);else if(s)s(g);else throw g}),typeof t=="function"){const g=e.addObserver(t,s,i);return()=>{l=!0,g()}}else{const g=e.addObserver(t);return()=>{l=!0,g()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const s=(t==null?void 0:t.message)||String(t),i=Yn(this,"internal-error",`An internal AuthError has occurred: ${s}`);throw i.customData={originalError:t},i}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=To(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Nn(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function vl(r){return ot(r)}class Ri{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ga(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function El(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(rt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new ir(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ir(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ir(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ir(5e3,15e3);var Ni="@firebase/auth",xi="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Al(r){Ge(new ze("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=s.options;U(l&&!l.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:l,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:To(r)},v=new wl(s,i,u,g);return El(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ge(new ze("auth-internal",e=>{const t=vl(e.getProvider("auth").getImmediate());return(s=>new Tl(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xe(Ni,xi,Il(r)),xe(Ni,xi,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=300;Fa("authIdTokenMaxAge");Al("Browser");var Ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qn;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,f){function d(){}d.prototype=f.prototype,y.F=f.prototype,y.prototype=new d,y.prototype.constructor=y,y.D=function(w,_,T){for(var p=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)p[ie-2]=arguments[ie];return f.prototype[_].apply(w,p)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,f,d){d||(d=0);const w=Array(16);if(typeof f=="string")for(var _=0;_<16;++_)w[_]=f.charCodeAt(d++)|f.charCodeAt(d++)<<8|f.charCodeAt(d++)<<16|f.charCodeAt(d++)<<24;else for(_=0;_<16;++_)w[_]=f[d++]|f[d++]<<8|f[d++]<<16|f[d++]<<24;f=y.g[0],d=y.g[1],_=y.g[2];let T=y.g[3],p;p=f+(T^d&(_^T))+w[0]+3614090360&4294967295,f=d+(p<<7&4294967295|p>>>25),p=T+(_^f&(d^_))+w[1]+3905402710&4294967295,T=f+(p<<12&4294967295|p>>>20),p=_+(d^T&(f^d))+w[2]+606105819&4294967295,_=T+(p<<17&4294967295|p>>>15),p=d+(f^_&(T^f))+w[3]+3250441966&4294967295,d=_+(p<<22&4294967295|p>>>10),p=f+(T^d&(_^T))+w[4]+4118548399&4294967295,f=d+(p<<7&4294967295|p>>>25),p=T+(_^f&(d^_))+w[5]+1200080426&4294967295,T=f+(p<<12&4294967295|p>>>20),p=_+(d^T&(f^d))+w[6]+2821735955&4294967295,_=T+(p<<17&4294967295|p>>>15),p=d+(f^_&(T^f))+w[7]+4249261313&4294967295,d=_+(p<<22&4294967295|p>>>10),p=f+(T^d&(_^T))+w[8]+1770035416&4294967295,f=d+(p<<7&4294967295|p>>>25),p=T+(_^f&(d^_))+w[9]+2336552879&4294967295,T=f+(p<<12&4294967295|p>>>20),p=_+(d^T&(f^d))+w[10]+4294925233&4294967295,_=T+(p<<17&4294967295|p>>>15),p=d+(f^_&(T^f))+w[11]+2304563134&4294967295,d=_+(p<<22&4294967295|p>>>10),p=f+(T^d&(_^T))+w[12]+1804603682&4294967295,f=d+(p<<7&4294967295|p>>>25),p=T+(_^f&(d^_))+w[13]+4254626195&4294967295,T=f+(p<<12&4294967295|p>>>20),p=_+(d^T&(f^d))+w[14]+2792965006&4294967295,_=T+(p<<17&4294967295|p>>>15),p=d+(f^_&(T^f))+w[15]+1236535329&4294967295,d=_+(p<<22&4294967295|p>>>10),p=f+(_^T&(d^_))+w[1]+4129170786&4294967295,f=d+(p<<5&4294967295|p>>>27),p=T+(d^_&(f^d))+w[6]+3225465664&4294967295,T=f+(p<<9&4294967295|p>>>23),p=_+(f^d&(T^f))+w[11]+643717713&4294967295,_=T+(p<<14&4294967295|p>>>18),p=d+(T^f&(_^T))+w[0]+3921069994&4294967295,d=_+(p<<20&4294967295|p>>>12),p=f+(_^T&(d^_))+w[5]+3593408605&4294967295,f=d+(p<<5&4294967295|p>>>27),p=T+(d^_&(f^d))+w[10]+38016083&4294967295,T=f+(p<<9&4294967295|p>>>23),p=_+(f^d&(T^f))+w[15]+3634488961&4294967295,_=T+(p<<14&4294967295|p>>>18),p=d+(T^f&(_^T))+w[4]+3889429448&4294967295,d=_+(p<<20&4294967295|p>>>12),p=f+(_^T&(d^_))+w[9]+568446438&4294967295,f=d+(p<<5&4294967295|p>>>27),p=T+(d^_&(f^d))+w[14]+3275163606&4294967295,T=f+(p<<9&4294967295|p>>>23),p=_+(f^d&(T^f))+w[3]+4107603335&4294967295,_=T+(p<<14&4294967295|p>>>18),p=d+(T^f&(_^T))+w[8]+1163531501&4294967295,d=_+(p<<20&4294967295|p>>>12),p=f+(_^T&(d^_))+w[13]+2850285829&4294967295,f=d+(p<<5&4294967295|p>>>27),p=T+(d^_&(f^d))+w[2]+4243563512&4294967295,T=f+(p<<9&4294967295|p>>>23),p=_+(f^d&(T^f))+w[7]+1735328473&4294967295,_=T+(p<<14&4294967295|p>>>18),p=d+(T^f&(_^T))+w[12]+2368359562&4294967295,d=_+(p<<20&4294967295|p>>>12),p=f+(d^_^T)+w[5]+4294588738&4294967295,f=d+(p<<4&4294967295|p>>>28),p=T+(f^d^_)+w[8]+2272392833&4294967295,T=f+(p<<11&4294967295|p>>>21),p=_+(T^f^d)+w[11]+1839030562&4294967295,_=T+(p<<16&4294967295|p>>>16),p=d+(_^T^f)+w[14]+4259657740&4294967295,d=_+(p<<23&4294967295|p>>>9),p=f+(d^_^T)+w[1]+2763975236&4294967295,f=d+(p<<4&4294967295|p>>>28),p=T+(f^d^_)+w[4]+1272893353&4294967295,T=f+(p<<11&4294967295|p>>>21),p=_+(T^f^d)+w[7]+4139469664&4294967295,_=T+(p<<16&4294967295|p>>>16),p=d+(_^T^f)+w[10]+3200236656&4294967295,d=_+(p<<23&4294967295|p>>>9),p=f+(d^_^T)+w[13]+681279174&4294967295,f=d+(p<<4&4294967295|p>>>28),p=T+(f^d^_)+w[0]+3936430074&4294967295,T=f+(p<<11&4294967295|p>>>21),p=_+(T^f^d)+w[3]+3572445317&4294967295,_=T+(p<<16&4294967295|p>>>16),p=d+(_^T^f)+w[6]+76029189&4294967295,d=_+(p<<23&4294967295|p>>>9),p=f+(d^_^T)+w[9]+3654602809&4294967295,f=d+(p<<4&4294967295|p>>>28),p=T+(f^d^_)+w[12]+3873151461&4294967295,T=f+(p<<11&4294967295|p>>>21),p=_+(T^f^d)+w[15]+530742520&4294967295,_=T+(p<<16&4294967295|p>>>16),p=d+(_^T^f)+w[2]+3299628645&4294967295,d=_+(p<<23&4294967295|p>>>9),p=f+(_^(d|~T))+w[0]+4096336452&4294967295,f=d+(p<<6&4294967295|p>>>26),p=T+(d^(f|~_))+w[7]+1126891415&4294967295,T=f+(p<<10&4294967295|p>>>22),p=_+(f^(T|~d))+w[14]+2878612391&4294967295,_=T+(p<<15&4294967295|p>>>17),p=d+(T^(_|~f))+w[5]+4237533241&4294967295,d=_+(p<<21&4294967295|p>>>11),p=f+(_^(d|~T))+w[12]+1700485571&4294967295,f=d+(p<<6&4294967295|p>>>26),p=T+(d^(f|~_))+w[3]+2399980690&4294967295,T=f+(p<<10&4294967295|p>>>22),p=_+(f^(T|~d))+w[10]+4293915773&4294967295,_=T+(p<<15&4294967295|p>>>17),p=d+(T^(_|~f))+w[1]+2240044497&4294967295,d=_+(p<<21&4294967295|p>>>11),p=f+(_^(d|~T))+w[8]+1873313359&4294967295,f=d+(p<<6&4294967295|p>>>26),p=T+(d^(f|~_))+w[15]+4264355552&4294967295,T=f+(p<<10&4294967295|p>>>22),p=_+(f^(T|~d))+w[6]+2734768916&4294967295,_=T+(p<<15&4294967295|p>>>17),p=d+(T^(_|~f))+w[13]+1309151649&4294967295,d=_+(p<<21&4294967295|p>>>11),p=f+(_^(d|~T))+w[4]+4149444226&4294967295,f=d+(p<<6&4294967295|p>>>26),p=T+(d^(f|~_))+w[11]+3174756917&4294967295,T=f+(p<<10&4294967295|p>>>22),p=_+(f^(T|~d))+w[2]+718787259&4294967295,_=T+(p<<15&4294967295|p>>>17),p=d+(T^(_|~f))+w[9]+3951481745&4294967295,y.g[0]=y.g[0]+f&4294967295,y.g[1]=y.g[1]+(_+(p<<21&4294967295|p>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+T&4294967295}s.prototype.v=function(y,f){f===void 0&&(f=y.length);const d=f-this.blockSize,w=this.C;let _=this.h,T=0;for(;T<f;){if(_==0)for(;T<=d;)i(this,y,T),T+=this.blockSize;if(typeof y=="string"){for(;T<f;)if(w[_++]=y.charCodeAt(T++),_==this.blockSize){i(this,w),_=0;break}}else for(;T<f;)if(w[_++]=y[T++],_==this.blockSize){i(this,w),_=0;break}}this.h=_,this.o+=f},s.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var f=1;f<y.length-8;++f)y[f]=0;f=this.o*8;for(var d=y.length-8;d<y.length;++d)y[d]=f&255,f/=256;for(this.v(y),y=Array(16),f=0,d=0;d<4;++d)for(let w=0;w<32;w+=8)y[f++]=this.g[d]>>>w&255;return y};function u(y,f){var d=c;return Object.prototype.hasOwnProperty.call(d,y)?d[y]:d[y]=f(y)}function l(y,f){this.h=f;const d=[];let w=!0;for(let _=y.length-1;_>=0;_--){const T=y[_]|0;w&&T==f||(d[_]=T,w=!1)}this.g=d}var c={};function g(y){return-128<=y&&y<128?u(y,function(f){return new l([f|0],f<0?-1:0)}):new l([y|0],y<0?-1:0)}function v(y){if(isNaN(y)||!isFinite(y))return S;if(y<0)return H(v(-y));const f=[];let d=1;for(let w=0;y>=d;w++)f[w]=y/d|0,d*=4294967296;return new l(f,0)}function P(y,f){if(y.length==0)throw Error("number format error: empty string");if(f=f||10,f<2||36<f)throw Error("radix out of range: "+f);if(y.charAt(0)=="-")return H(P(y.substring(1),f));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const d=v(Math.pow(f,8));let w=S;for(let T=0;T<y.length;T+=8){var _=Math.min(8,y.length-T);const p=parseInt(y.substring(T,T+_),f);_<8?(_=v(Math.pow(f,_)),w=w.j(_).add(v(p))):(w=w.j(d),w=w.add(v(p)))}return w}var S=g(0),N=g(1),D=g(16777216);r=l.prototype,r.m=function(){if(q(this))return-H(this).m();let y=0,f=1;for(let d=0;d<this.g.length;d++){const w=this.i(d);y+=(w>=0?w:4294967296+w)*f,f*=4294967296}return y},r.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(M(this))return"0";if(q(this))return"-"+H(this).toString(y);const f=v(Math.pow(y,6));var d=this;let w="";for(;;){const _=lt(d,f).g;d=oe(d,_.j(f));let T=((d.g.length>0?d.g[0]:d.h)>>>0).toString(y);if(d=_,M(d))return T+w;for(;T.length<6;)T="0"+T;w=T+w}},r.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function M(y){if(y.h!=0)return!1;for(let f=0;f<y.g.length;f++)if(y.g[f]!=0)return!1;return!0}function q(y){return y.h==-1}r.l=function(y){return y=oe(this,y),q(y)?-1:M(y)?0:1};function H(y){const f=y.g.length,d=[];for(let w=0;w<f;w++)d[w]=~y.g[w];return new l(d,~y.h).add(N)}r.abs=function(){return q(this)?H(this):this},r.add=function(y){const f=Math.max(this.g.length,y.g.length),d=[];let w=0;for(let _=0;_<=f;_++){let T=w+(this.i(_)&65535)+(y.i(_)&65535),p=(T>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);w=p>>>16,T&=65535,p&=65535,d[_]=p<<16|T}return new l(d,d[d.length-1]&-2147483648?-1:0)};function oe(y,f){return y.add(H(f))}r.j=function(y){if(M(this)||M(y))return S;if(q(this))return q(y)?H(this).j(H(y)):H(H(this).j(y));if(q(y))return H(this.j(H(y)));if(this.l(D)<0&&y.l(D)<0)return v(this.m()*y.m());const f=this.g.length+y.g.length,d=[];for(var w=0;w<2*f;w++)d[w]=0;for(w=0;w<this.g.length;w++)for(let _=0;_<y.g.length;_++){const T=this.i(w)>>>16,p=this.i(w)&65535,ie=y.i(_)>>>16,Ye=y.i(_)&65535;d[2*w+2*_]+=p*Ye,Te(d,2*w+2*_),d[2*w+2*_+1]+=T*Ye,Te(d,2*w+2*_+1),d[2*w+2*_+1]+=p*ie,Te(d,2*w+2*_+1),d[2*w+2*_+2]+=T*ie,Te(d,2*w+2*_+2)}for(y=0;y<f;y++)d[y]=d[2*y+1]<<16|d[2*y];for(y=f;y<2*f;y++)d[y]=0;return new l(d,0)};function Te(y,f){for(;(y[f]&65535)!=y[f];)y[f+1]+=y[f]>>>16,y[f]&=65535,f++}function Le(y,f){this.g=y,this.h=f}function lt(y,f){if(M(f))throw Error("division by zero");if(M(y))return new Le(S,S);if(q(y))return f=lt(H(y),f),new Le(H(f.g),H(f.h));if(q(f))return f=lt(y,H(f)),new Le(H(f.g),f.h);if(y.g.length>30){if(q(y)||q(f))throw Error("slowDivide_ only works with positive integers.");for(var d=N,w=f;w.l(y)<=0;)d=De(d),w=De(w);var _=fe(d,1),T=fe(w,1);for(w=fe(w,2),d=fe(d,2);!M(w);){var p=T.add(w);p.l(y)<=0&&(_=_.add(d),T=p),w=fe(w,1),d=fe(d,1)}return f=oe(y,_.j(f)),new Le(_,f)}for(_=S;y.l(f)>=0;){for(d=Math.max(1,Math.floor(y.m()/f.m())),w=Math.ceil(Math.log(d)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),T=v(d),p=T.j(f);q(p)||p.l(y)>0;)d-=w,T=v(d),p=T.j(f);M(T)&&(T=N),_=_.add(T),y=oe(y,p)}return new Le(_,y)}r.B=function(y){return lt(this,y).h},r.and=function(y){const f=Math.max(this.g.length,y.g.length),d=[];for(let w=0;w<f;w++)d[w]=this.i(w)&y.i(w);return new l(d,this.h&y.h)},r.or=function(y){const f=Math.max(this.g.length,y.g.length),d=[];for(let w=0;w<f;w++)d[w]=this.i(w)|y.i(w);return new l(d,this.h|y.h)},r.xor=function(y){const f=Math.max(this.g.length,y.g.length),d=[];for(let w=0;w<f;w++)d[w]=this.i(w)^y.i(w);return new l(d,this.h^y.h)};function De(y){const f=y.g.length+1,d=[];for(let w=0;w<f;w++)d[w]=y.i(w)<<1|y.i(w-1)>>>31;return new l(d,y.h)}function fe(y,f){const d=f>>5;f%=32;const w=y.g.length-d,_=[];for(let T=0;T<w;T++)_[T]=f>0?y.i(T+d)>>>f|y.i(T+d+1)<<32-f:y.i(T+d);return new l(_,y.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=v,l.fromString=P,Qn=l}).apply(typeof Ci<"u"?Ci:typeof self<"u"?self:typeof window<"u"?window:{});var br=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,e=Object.defineProperty;function t(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof br=="object"&&br];for(var o=0;o<n.length;++o){var a=n[o];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var s=t(this);function i(n,o){if(o)e:{var a=s;n=n.split(".");for(var h=0;h<n.length-1;h++){var E=n[h];if(!(E in a))break e;a=a[E]}n=n[n.length-1],h=a[n],o=o(h),o!=h&&o!=null&&e(a,n,{configurable:!0,writable:!0,value:o})}}i("Symbol.dispose",function(n){return n||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(n){return n||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(n){return n||function(o){var a=[],h;for(h in o)Object.prototype.hasOwnProperty.call(o,h)&&a.push([h,o[h]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},l=this||self;function c(n){var o=typeof n;return o=="object"&&n!=null||o=="function"}function g(n,o,a){return n.call.apply(n.bind,arguments)}function v(n,o,a){return v=g,v.apply(null,arguments)}function P(n,o){var a=Array.prototype.slice.call(arguments,1);return function(){var h=a.slice();return h.push.apply(h,arguments),n.apply(this,h)}}function S(n,o){function a(){}a.prototype=o.prototype,n.Z=o.prototype,n.prototype=new a,n.prototype.constructor=n,n.Ob=function(h,E,I){for(var V=Array(arguments.length-2),x=2;x<arguments.length;x++)V[x-2]=arguments[x];return o.prototype[E].apply(h,V)}}var N=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?n=>n&&AsyncContext.Snapshot.wrap(n):n=>n;function D(n){const o=n.length;if(o>0){const a=Array(o);for(let h=0;h<o;h++)a[h]=n[h];return a}return[]}function M(n,o){for(let h=1;h<arguments.length;h++){const E=arguments[h];var a=typeof E;if(a=a!="object"?a:E?Array.isArray(E)?"array":a:"null",a=="array"||a=="object"&&typeof E.length=="number"){a=n.length||0;const I=E.length||0;n.length=a+I;for(let V=0;V<I;V++)n[a+V]=E[V]}else n.push(E)}}class q{constructor(o,a){this.i=o,this.j=a,this.h=0,this.g=null}get(){let o;return this.h>0?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function H(n){l.setTimeout(()=>{throw n},0)}function oe(){var n=y;let o=null;return n.g&&(o=n.g,n.g=n.g.next,n.g||(n.h=null),o.next=null),o}class Te{constructor(){this.h=this.g=null}add(o,a){const h=Le.get();h.set(o,a),this.h?this.h.next=h:this.g=h,this.h=h}}var Le=new q(()=>new lt,n=>n.reset());class lt{constructor(){this.next=this.g=this.h=null}set(o,a){this.h=o,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let De,fe=!1,y=new Te,f=()=>{const n=Promise.resolve(void 0);De=()=>{n.then(d)}};function d(){for(var n;n=oe();){try{n.h.call(n.g)}catch(a){H(a)}var o=Le;o.j(n),o.h<100&&(o.h++,n.next=o.g,o.g=n)}fe=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(n,o){this.type=n,this.g=this.target=o,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var T=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var n=!1,o=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const a=()=>{};l.addEventListener("test",a,o),l.removeEventListener("test",a,o)}catch{}return n})();function p(n){return/^[\s\xa0]*$/.test(n)}function ie(n,o){_.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n&&this.init(n,o)}S(ie,_),ie.prototype.init=function(n,o){const a=this.type=n.type,h=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;this.target=n.target||n.srcElement,this.g=o,o=n.relatedTarget,o||(a=="mouseover"?o=n.fromElement:a=="mouseout"&&(o=n.toElement)),this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=n.pointerType,this.state=n.state,this.i=n,n.defaultPrevented&&ie.Z.h.call(this)},ie.prototype.h=function(){ie.Z.h.call(this);const n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ye="closure_listenable_"+(Math.random()*1e6|0),Jo=0;function Yo(n,o,a,h,E){this.listener=n,this.proxy=null,this.src=o,this.type=a,this.capture=!!h,this.ha=E,this.key=++Jo,this.da=this.fa=!1}function fr(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function pr(n,o,a){for(const h in n)o.call(a,n[h],h,n)}function Xo(n,o){for(const a in n)o.call(void 0,n[a],a,n)}function ms(n){const o={};for(const a in n)o[a]=n[a];return o}const _s="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ys(n,o){let a,h;for(let E=1;E<arguments.length;E++){h=arguments[E];for(a in h)n[a]=h[a];for(let I=0;I<_s.length;I++)a=_s[I],Object.prototype.hasOwnProperty.call(h,a)&&(n[a]=h[a])}}function dr(n){this.src=n,this.g={},this.h=0}dr.prototype.add=function(n,o,a,h,E){const I=n.toString();n=this.g[I],n||(n=this.g[I]=[],this.h++);const V=rn(n,o,h,E);return V>-1?(o=n[V],a||(o.fa=!1)):(o=new Yo(o,this.src,I,!!h,E),o.fa=a,n.push(o)),o};function tn(n,o){const a=o.type;if(a in n.g){var h=n.g[a],E=Array.prototype.indexOf.call(h,o,void 0),I;(I=E>=0)&&Array.prototype.splice.call(h,E,1),I&&(fr(o),n.g[a].length==0&&(delete n.g[a],n.h--))}}function rn(n,o,a,h){for(let E=0;E<n.length;++E){const I=n[E];if(!I.da&&I.listener==o&&I.capture==!!a&&I.ha==h)return E}return-1}var nn="closure_lm_"+(Math.random()*1e6|0),sn={};function ws(n,o,a,h,E){if(Array.isArray(o)){for(let I=0;I<o.length;I++)ws(n,o[I],a,h,E);return null}return a=Ts(a),n&&n[Ye]?n.J(o,a,c(h)?!!h.capture:!1,E):Qo(n,o,a,!1,h,E)}function Qo(n,o,a,h,E,I){if(!o)throw Error("Invalid event type");const V=c(E)?!!E.capture:!!E;let x=an(n);if(x||(n[nn]=x=new dr(n)),a=x.add(o,a,h,V,I),a.proxy)return a;if(h=Zo(),a.proxy=h,h.src=n,h.listener=a,n.addEventListener)T||(E=V),E===void 0&&(E=!1),n.addEventListener(o.toString(),h,E);else if(n.attachEvent)n.attachEvent(Es(o.toString()),h);else if(n.addListener&&n.removeListener)n.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Zo(){function n(a){return o.call(n.src,n.listener,a)}const o=ea;return n}function vs(n,o,a,h,E){if(Array.isArray(o))for(var I=0;I<o.length;I++)vs(n,o[I],a,h,E);else h=c(h)?!!h.capture:!!h,a=Ts(a),n&&n[Ye]?(n=n.i,I=String(o).toString(),I in n.g&&(o=n.g[I],a=rn(o,a,h,E),a>-1&&(fr(o[a]),Array.prototype.splice.call(o,a,1),o.length==0&&(delete n.g[I],n.h--)))):n&&(n=an(n))&&(o=n.g[o.toString()],n=-1,o&&(n=rn(o,a,h,E)),(a=n>-1?o[n]:null)&&on(a))}function on(n){if(typeof n!="number"&&n&&!n.da){var o=n.src;if(o&&o[Ye])tn(o.i,n);else{var a=n.type,h=n.proxy;o.removeEventListener?o.removeEventListener(a,h,n.capture):o.detachEvent?o.detachEvent(Es(a),h):o.addListener&&o.removeListener&&o.removeListener(h),(a=an(o))?(tn(a,n),a.h==0&&(a.src=null,o[nn]=null)):fr(n)}}}function Es(n){return n in sn?sn[n]:sn[n]="on"+n}function ea(n,o){if(n.da)n=!0;else{o=new ie(o,this);const a=n.listener,h=n.ha||n.src;n.fa&&on(n),n=a.call(h,o)}return n}function an(n){return n=n[nn],n instanceof dr?n:null}var un="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ts(n){return typeof n=="function"?n:(n[un]||(n[un]=function(o){return n.handleEvent(o)}),n[un])}function te(){w.call(this),this.i=new dr(this),this.M=this,this.G=null}S(te,w),te.prototype[Ye]=!0,te.prototype.removeEventListener=function(n,o,a,h){vs(this,n,o,a,h)};function ne(n,o){var a,h=n.G;if(h)for(a=[];h;h=h.G)a.push(h);if(n=n.M,h=o.type||o,typeof o=="string")o=new _(o,n);else if(o instanceof _)o.target=o.target||n;else{var E=o;o=new _(h,n),ys(o,E)}E=!0;let I,V;if(a)for(V=a.length-1;V>=0;V--)I=o.g=a[V],E=gr(I,h,!0,o)&&E;if(I=o.g=n,E=gr(I,h,!0,o)&&E,E=gr(I,h,!1,o)&&E,a)for(V=0;V<a.length;V++)I=o.g=a[V],E=gr(I,h,!1,o)&&E}te.prototype.N=function(){if(te.Z.N.call(this),this.i){var n=this.i;for(const o in n.g){const a=n.g[o];for(let h=0;h<a.length;h++)fr(a[h]);delete n.g[o],n.h--}}this.G=null},te.prototype.J=function(n,o,a,h){return this.i.add(String(n),o,!1,a,h)},te.prototype.K=function(n,o,a,h){return this.i.add(String(n),o,!0,a,h)};function gr(n,o,a,h){if(o=n.i.g[String(o)],!o)return!0;o=o.concat();let E=!0;for(let I=0;I<o.length;++I){const V=o[I];if(V&&!V.da&&V.capture==a){const x=V.listener,J=V.ha||V.src;V.fa&&tn(n.i,V),E=x.call(J,h)!==!1&&E}}return E&&!h.defaultPrevented}function ta(n,o){if(typeof n!="function")if(n&&typeof n.handleEvent=="function")n=v(n.handleEvent,n);else throw Error("Invalid listener argument");return Number(o)>2147483647?-1:l.setTimeout(n,o||0)}function Is(n){n.g=ta(()=>{n.g=null,n.i&&(n.i=!1,Is(n))},n.l);const o=n.h;n.h=null,n.m.apply(null,o)}class ra extends w{constructor(o,a){super(),this.m=o,this.l=a,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:Is(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bt(n){w.call(this),this.h=n,this.g={}}S(bt,w);var As=[];function bs(n){pr(n.g,function(o,a){this.g.hasOwnProperty(a)&&on(o)},n),n.g={}}bt.prototype.N=function(){bt.Z.N.call(this),bs(this)},bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ln=l.JSON.stringify,na=l.JSON.parse,sa=class{stringify(n){return l.JSON.stringify(n,void 0)}parse(n){return l.JSON.parse(n,void 0)}};function Vs(){}function ia(){}var Vt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function hn(){_.call(this,"d")}S(hn,_);function cn(){_.call(this,"c")}S(cn,_);var ht={},Ps=null;function fn(){return Ps=Ps||new te}ht.Ia="serverreachability";function Ss(n){_.call(this,ht.Ia,n)}S(Ss,_);function Pt(n){const o=fn();ne(o,new Ss(o))}ht.STAT_EVENT="statevent";function Rs(n,o){_.call(this,ht.STAT_EVENT,n),this.stat=o}S(Rs,_);function se(n){const o=fn();ne(o,new Rs(o,n))}ht.Ja="timingevent";function Ns(n,o){_.call(this,ht.Ja,n),this.size=o}S(Ns,_);function St(n,o){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){n()},o)}function Rt(){this.g=!0}Rt.prototype.ua=function(){this.g=!1};function oa(n,o,a,h,E,I){n.info(function(){if(n.g)if(I){var V="",x=I.split("&");for(let B=0;B<x.length;B++){var J=x[B].split("=");if(J.length>1){const Y=J[0];J=J[1];const Ae=Y.split("_");V=Ae.length>=2&&Ae[1]=="type"?V+(Y+"="+J+"&"):V+(Y+"=redacted&")}}}else V=null;else V=I;return"XMLHTTP REQ ("+h+") [attempt "+E+"]: "+o+`
`+a+`
`+V})}function aa(n,o,a,h,E,I,V){n.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+E+"]: "+o+`
`+a+`
`+I+" "+V})}function ct(n,o,a,h){n.info(function(){return"XMLHTTP TEXT ("+o+"): "+la(n,a)+(h?" "+h:"")})}function ua(n,o){n.info(function(){return"TIMEOUT: "+o})}Rt.prototype.info=function(){};function la(n,o){if(!n.g)return o;if(!o)return null;try{const I=JSON.parse(o);if(I){for(n=0;n<I.length;n++)if(Array.isArray(I[n])){var a=I[n];if(!(a.length<2)){var h=a[1];if(Array.isArray(h)&&!(h.length<1)){var E=h[0];if(E!="noop"&&E!="stop"&&E!="close")for(let V=1;V<h.length;V++)h[V]=""}}}}return ln(I)}catch{return o}}var pn={NO_ERROR:0,TIMEOUT:8},ha={},xs;function dn(){}S(dn,Vs),dn.prototype.g=function(){return new XMLHttpRequest},xs=new dn;function Nt(n){return encodeURIComponent(String(n))}function ca(n){var o=1;n=n.split(":");const a=[];for(;o>0&&n.length;)a.push(n.shift()),o--;return n.length&&a.push(n.join(":")),a}function Ue(n,o,a,h){this.j=n,this.i=o,this.l=a,this.S=h||1,this.V=new bt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Cs}function Cs(){this.i=null,this.g="",this.h=!1}var ks={},gn={};function mn(n,o,a){n.M=1,n.A=_r(Ie(o)),n.u=a,n.R=!0,Os(n,null)}function Os(n,o){n.F=Date.now(),mr(n),n.B=Ie(n.A);var a=n.B,h=n.S;Array.isArray(h)||(h=[String(h)]),Gs(a.i,"t",h),n.C=0,a=n.j.L,n.h=new Cs,n.g=ci(n.j,a?o:null,!n.u),n.P>0&&(n.O=new ra(v(n.Y,n,n.g),n.P)),o=n.V,a=n.g,h=n.ba;var E="readystatechange";Array.isArray(E)||(E&&(As[0]=E.toString()),E=As);for(let I=0;I<E.length;I++){const V=ws(a,E[I],h||o.handleEvent,!1,o.h||o);if(!V)break;o.g[V.key]=V}o=n.J?ms(n.J):{},n.u?(n.v||(n.v="POST"),o["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.B,n.v,n.u,o)):(n.v="GET",n.g.ea(n.B,n.v,null,o)),Pt(),oa(n.i,n.v,n.B,n.l,n.S,n.u)}Ue.prototype.ba=function(n){n=n.target;const o=this.O;o&&Be(n)==3?o.j():this.Y(n)},Ue.prototype.Y=function(n){try{if(n==this.g)e:{const x=Be(this.g),J=this.g.ya(),B=this.g.ca();if(!(x<3)&&(x!=3||this.g&&(this.h.h||this.g.la()||ei(this.g)))){this.K||x!=4||J==7||(J==8||B<=0?Pt(3):Pt(2)),_n(this);var o=this.g.ca();this.X=o;var a=fa(this);if(this.o=o==200,aa(this.i,this.v,this.B,this.l,this.S,x,o),this.o){if(this.U&&!this.L){t:{if(this.g){var h,E=this.g;if((h=E.g?E.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(h)){var I=h;break t}}I=null}if(n=I)ct(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,yn(this,n);else{this.o=!1,this.m=3,se(12),Xe(this),xt(this);break e}}if(this.R){n=!0;let Y;for(;!this.K&&this.C<a.length;)if(Y=pa(this,a),Y==gn){x==4&&(this.m=4,se(14),n=!1),ct(this.i,this.l,null,"[Incomplete Response]");break}else if(Y==ks){this.m=4,se(15),ct(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}else ct(this.i,this.l,Y,null),yn(this,Y);if(Ls(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),x!=4||a.length!=0||this.h.h||(this.m=1,se(16),n=!1),this.o=this.o&&n,!n)ct(this.i,this.l,a,"[Invalid Chunked Response]"),Xe(this),xt(this);else if(a.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),Vn(V),V.P=!0,se(11))}}else ct(this.i,this.l,a,null),yn(this,a);x==4&&Xe(this),this.o&&!this.K&&(x==4?ai(this.j,this):(this.o=!1,mr(this)))}else Pa(this.g),o==400&&a.indexOf("Unknown SID")>0?(this.m=3,se(12)):(this.m=0,se(13)),Xe(this),xt(this)}}}catch{}finally{}};function fa(n){if(!Ls(n))return n.g.la();const o=ei(n.g);if(o==="")return"";let a="";const h=o.length,E=Be(n.g)==4;if(!n.h.i){if(typeof TextDecoder>"u")return Xe(n),xt(n),"";n.h.i=new l.TextDecoder}for(let I=0;I<h;I++)n.h.h=!0,a+=n.h.i.decode(o[I],{stream:!(E&&I==h-1)});return o.length=0,n.h.g+=a,n.C=0,n.h.g}function Ls(n){return n.g?n.v=="GET"&&n.M!=2&&n.j.Aa:!1}function pa(n,o){var a=n.C,h=o.indexOf(`
`,a);return h==-1?gn:(a=Number(o.substring(a,h)),isNaN(a)?ks:(h+=1,h+a>o.length?gn:(o=o.slice(h,h+a),n.C=h+a,o)))}Ue.prototype.cancel=function(){this.K=!0,Xe(this)};function mr(n){n.T=Date.now()+n.H,Ds(n,n.H)}function Ds(n,o){if(n.D!=null)throw Error("WatchDog timer not null");n.D=St(v(n.aa,n),o)}function _n(n){n.D&&(l.clearTimeout(n.D),n.D=null)}Ue.prototype.aa=function(){this.D=null;const n=Date.now();n-this.T>=0?(ua(this.i,this.B),this.M!=2&&(Pt(),se(17)),Xe(this),this.m=2,xt(this)):Ds(this,this.T-n)};function xt(n){n.j.I==0||n.K||ai(n.j,n)}function Xe(n){_n(n);var o=n.O;o&&typeof o.dispose=="function"&&o.dispose(),n.O=null,bs(n.V),n.g&&(o=n.g,n.g=null,o.abort(),o.dispose())}function yn(n,o){try{var a=n.j;if(a.I!=0&&(a.g==n||wn(a.h,n))){if(!n.L&&wn(a.h,n)&&a.I==3){try{var h=a.Ba.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var E=h;if(E[0]==0){e:if(!a.v){if(a.g)if(a.g.F+3e3<n.F)Tr(a),vr(a);else break e;bn(a),se(18)}}else a.xa=E[1],0<a.xa-a.K&&E[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=St(v(a.Va,a),6e3));Fs(a.h)<=1&&a.ta&&(a.ta=void 0)}else Ze(a,11)}else if((n.L||a.g==n)&&Tr(a),!p(o))for(E=a.Ba.g.parse(o),o=0;o<E.length;o++){let B=E[o];const Y=B[0];if(!(Y<=a.K))if(a.K=Y,B=B[1],a.I==2)if(B[0]=="c"){a.M=B[1],a.ba=B[2];const Ae=B[3];Ae!=null&&(a.ka=Ae,a.j.info("VER="+a.ka));const et=B[4];et!=null&&(a.za=et,a.j.info("SVER="+a.za));const je=B[5];je!=null&&typeof je=="number"&&je>0&&(h=1.5*je,a.O=h,a.j.info("backChannelRequestTimeoutMs_="+h)),h=a;const $e=n.g;if($e){const Ir=$e.g?$e.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ir){var I=h.h;I.g||Ir.indexOf("spdy")==-1&&Ir.indexOf("quic")==-1&&Ir.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(vn(I,I.h),I.h=null))}if(h.G){const Pn=$e.g?$e.g.getResponseHeader("X-HTTP-Session-Id"):null;Pn&&(h.wa=Pn,j(h.J,h.G,Pn))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-n.F,a.j.info("Handshake RTT: "+a.T+"ms")),h=a;var V=n;if(h.na=hi(h,h.L?h.ba:null,h.W),V.L){Bs(h.h,V);var x=V,J=h.O;J&&(x.H=J),x.D&&(_n(x),mr(x)),h.g=V}else ii(h);a.i.length>0&&Er(a)}else B[0]!="stop"&&B[0]!="close"||Ze(a,7);else a.I==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?Ze(a,7):An(a):B[0]!="noop"&&a.l&&a.l.qa(B),a.A=0)}}Pt(4)}catch{}}var da=class{constructor(n,o){this.g=n,this.map=o}};function Us(n){this.l=n||10,l.PerformanceNavigationTiming?(n=l.performance.getEntriesByType("navigation"),n=n.length>0&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ms(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Fs(n){return n.h?1:n.g?n.g.size:0}function wn(n,o){return n.h?n.h==o:n.g?n.g.has(o):!1}function vn(n,o){n.g?n.g.add(o):n.h=o}function Bs(n,o){n.h&&n.h==o?n.h=null:n.g&&n.g.has(o)&&n.g.delete(o)}Us.prototype.cancel=function(){if(this.i=js(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function js(n){if(n.h!=null)return n.i.concat(n.h.G);if(n.g!=null&&n.g.size!==0){let o=n.i;for(const a of n.g.values())o=o.concat(a.G);return o}return D(n.i)}var $s=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ga(n,o){if(n){n=n.split("&");for(let a=0;a<n.length;a++){const h=n[a].indexOf("=");let E,I=null;h>=0?(E=n[a].substring(0,h),I=n[a].substring(h+1)):E=n[a],o(E,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Me(n){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let o;n instanceof Me?(this.l=n.l,Ct(this,n.j),this.o=n.o,this.g=n.g,kt(this,n.u),this.h=n.h,En(this,Ks(n.i)),this.m=n.m):n&&(o=String(n).match($s))?(this.l=!1,Ct(this,o[1]||"",!0),this.o=Ot(o[2]||""),this.g=Ot(o[3]||"",!0),kt(this,o[4]),this.h=Ot(o[5]||"",!0),En(this,o[6]||"",!0),this.m=Ot(o[7]||"")):(this.l=!1,this.i=new Dt(null,this.l))}Me.prototype.toString=function(){const n=[];var o=this.j;o&&n.push(Lt(o,Hs,!0),":");var a=this.g;return(a||o=="file")&&(n.push("//"),(o=this.o)&&n.push(Lt(o,Hs,!0),"@"),n.push(Nt(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&n.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&n.push("/"),n.push(Lt(a,a.charAt(0)=="/"?ya:_a,!0))),(a=this.i.toString())&&n.push("?",a),(a=this.m)&&n.push("#",Lt(a,va)),n.join("")},Me.prototype.resolve=function(n){const o=Ie(this);let a=!!n.j;a?Ct(o,n.j):a=!!n.o,a?o.o=n.o:a=!!n.g,a?o.g=n.g:a=n.u!=null;var h=n.h;if(a)kt(o,n.u);else if(a=!!n.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var E=o.h.lastIndexOf("/");E!=-1&&(h=o.h.slice(0,E+1)+h)}if(E=h,E==".."||E==".")h="";else if(E.indexOf("./")!=-1||E.indexOf("/.")!=-1){h=E.lastIndexOf("/",0)==0,E=E.split("/");const I=[];for(let V=0;V<E.length;){const x=E[V++];x=="."?h&&V==E.length&&I.push(""):x==".."?((I.length>1||I.length==1&&I[0]!="")&&I.pop(),h&&V==E.length&&I.push("")):(I.push(x),h=!0)}h=I.join("/")}else h=E}return a?o.h=h:a=n.i.toString()!=="",a?En(o,Ks(n.i)):a=!!n.m,a&&(o.m=n.m),o};function Ie(n){return new Me(n)}function Ct(n,o,a){n.j=a?Ot(o,!0):o,n.j&&(n.j=n.j.replace(/:$/,""))}function kt(n,o){if(o){if(o=Number(o),isNaN(o)||o<0)throw Error("Bad port number "+o);n.u=o}else n.u=null}function En(n,o,a){o instanceof Dt?(n.i=o,Ea(n.i,n.l)):(a||(o=Lt(o,wa)),n.i=new Dt(o,n.l))}function j(n,o,a){n.i.set(o,a)}function _r(n){return j(n,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),n}function Ot(n,o){return n?o?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Lt(n,o,a){return typeof n=="string"?(n=encodeURI(n).replace(o,ma),a&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function ma(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Hs=/[#\/\?@]/g,_a=/[#\?:]/g,ya=/[#\?]/g,wa=/[#\?@]/g,va=/#/g;function Dt(n,o){this.h=this.g=null,this.i=n||null,this.j=!!o}function Qe(n){n.g||(n.g=new Map,n.h=0,n.i&&ga(n.i,function(o,a){n.add(decodeURIComponent(o.replace(/\+/g," ")),a)}))}r=Dt.prototype,r.add=function(n,o){Qe(this),this.i=null,n=ft(this,n);let a=this.g.get(n);return a||this.g.set(n,a=[]),a.push(o),this.h+=1,this};function qs(n,o){Qe(n),o=ft(n,o),n.g.has(o)&&(n.i=null,n.h-=n.g.get(o).length,n.g.delete(o))}function Ws(n,o){return Qe(n),o=ft(n,o),n.g.has(o)}r.forEach=function(n,o){Qe(this),this.g.forEach(function(a,h){a.forEach(function(E){n.call(o,E,h,this)},this)},this)};function zs(n,o){Qe(n);let a=[];if(typeof o=="string")Ws(n,o)&&(a=a.concat(n.g.get(ft(n,o))));else for(n=Array.from(n.g.values()),o=0;o<n.length;o++)a=a.concat(n[o]);return a}r.set=function(n,o){return Qe(this),this.i=null,n=ft(this,n),Ws(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[o]),this.h+=1,this},r.get=function(n,o){return n?(n=zs(this,n),n.length>0?String(n[0]):o):o};function Gs(n,o,a){qs(n,o),a.length>0&&(n.i=null,n.g.set(ft(n,o),D(a)),n.h+=a.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],o=Array.from(this.g.keys());for(let h=0;h<o.length;h++){var a=o[h];const E=Nt(a);a=zs(this,a);for(let I=0;I<a.length;I++){let V=E;a[I]!==""&&(V+="="+Nt(a[I])),n.push(V)}}return this.i=n.join("&")};function Ks(n){const o=new Dt;return o.i=n.i,n.g&&(o.g=new Map(n.g),o.h=n.h),o}function ft(n,o){return o=String(o),n.j&&(o=o.toLowerCase()),o}function Ea(n,o){o&&!n.j&&(Qe(n),n.i=null,n.g.forEach(function(a,h){const E=h.toLowerCase();h!=E&&(qs(this,h),Gs(this,E,a))},n)),n.j=o}function Ta(n,o){const a=new Rt;if(l.Image){const h=new Image;h.onload=P(Fe,a,"TestLoadImage: loaded",!0,o,h),h.onerror=P(Fe,a,"TestLoadImage: error",!1,o,h),h.onabort=P(Fe,a,"TestLoadImage: abort",!1,o,h),h.ontimeout=P(Fe,a,"TestLoadImage: timeout",!1,o,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=n}else o(!1)}function Ia(n,o){const a=new Rt,h=new AbortController,E=setTimeout(()=>{h.abort(),Fe(a,"TestPingServer: timeout",!1,o)},1e4);fetch(n,{signal:h.signal}).then(I=>{clearTimeout(E),I.ok?Fe(a,"TestPingServer: ok",!0,o):Fe(a,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(E),Fe(a,"TestPingServer: error",!1,o)})}function Fe(n,o,a,h,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),h(a)}catch{}}function Aa(){this.g=new sa}function Tn(n){this.i=n.Sb||null,this.h=n.ab||!1}S(Tn,Vs),Tn.prototype.g=function(){return new yr(this.i,this.h)};function yr(n,o){te.call(this),this.H=n,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(yr,te),r=yr.prototype,r.open=function(n,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=n,this.D=o,this.readyState=1,Mt(this)},r.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const o={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};n&&(o.body=n),(this.H||l).fetch(new Request(this.D,o)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ut(this)),this.readyState=0},r.Pa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Mt(this)),this.g&&(this.readyState=3,Mt(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Js(this)}else n.text().then(this.Oa.bind(this),this.ga.bind(this))};function Js(n){n.j.read().then(n.Ma.bind(n)).catch(n.ga.bind(n))}r.Ma=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var o=n.value?n.value:new Uint8Array(0);(o=this.B.decode(o,{stream:!n.done}))&&(this.response=this.responseText+=o)}n.done?Ut(this):Mt(this),this.readyState==3&&Js(this)}},r.Oa=function(n){this.g&&(this.response=this.responseText=n,Ut(this))},r.Na=function(n){this.g&&(this.response=n,Ut(this))},r.ga=function(){this.g&&Ut(this)};function Ut(n){n.readyState=4,n.l=null,n.j=null,n.B=null,Mt(n)}r.setRequestHeader=function(n,o){this.A.append(n,o)},r.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],o=this.h.entries();for(var a=o.next();!a.done;)a=a.value,n.push(a[0]+": "+a[1]),a=o.next();return n.join(`\r
`)};function Mt(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(yr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function Ys(n){let o="";return pr(n,function(a,h){o+=h,o+=":",o+=a,o+=`\r
`}),o}function In(n,o,a){e:{for(h in a){var h=!1;break e}h=!0}h||(a=Ys(a),typeof n=="string"?a!=null&&Nt(a):j(n,o,a))}function z(n){te.call(this),this.headers=new Map,this.L=n||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(z,te);var ba=/^https?$/i,Va=["POST","PUT"];r=z.prototype,r.Fa=function(n){this.H=n},r.ea=function(n,o,a,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);o=o?o.toUpperCase():"GET",this.D=n,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():xs.g(),this.g.onreadystatechange=N(v(this.Ca,this));try{this.B=!0,this.g.open(o,String(n),!0),this.B=!1}catch(I){Xs(this,I);return}if(n=a||"",a=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var E in h)a.set(E,h[E]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const I of h.keys())a.set(I,h.get(I));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),E=l.FormData&&n instanceof l.FormData,!(Array.prototype.indexOf.call(Va,o,void 0)>=0)||h||E||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,V]of a)this.g.setRequestHeader(I,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(n),this.v=!1}catch(I){Xs(this,I)}};function Xs(n,o){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=o,n.o=5,Qs(n),wr(n)}function Qs(n){n.A||(n.A=!0,ne(n,"complete"),ne(n,"error"))}r.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=n||7,ne(this,"complete"),ne(this,"abort"),wr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wr(this,!0)),z.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Zs(this):this.Xa())},r.Xa=function(){Zs(this)};function Zs(n){if(n.h&&typeof u<"u"){if(n.v&&Be(n)==4)setTimeout(n.Ca.bind(n),0);else if(ne(n,"readystatechange"),Be(n)==4){n.h=!1;try{const I=n.ca();e:switch(I){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var a;if(!(a=o)){var h;if(h=I===0){let V=String(n.D).match($s)[1]||null;!V&&l.self&&l.self.location&&(V=l.self.location.protocol.slice(0,-1)),h=!ba.test(V?V.toLowerCase():"")}a=h}if(a)ne(n,"complete"),ne(n,"success");else{n.o=6;try{var E=Be(n)>2?n.g.statusText:""}catch{E=""}n.l=E+" ["+n.ca()+"]",Qs(n)}}finally{wr(n)}}}}function wr(n,o){if(n.g){n.m&&(clearTimeout(n.m),n.m=null);const a=n.g;n.g=null,o||ne(n,"ready");try{a.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Be(n){return n.g?n.g.readyState:0}r.ca=function(){try{return Be(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(n){if(this.g){var o=this.g.responseText;return n&&o.indexOf(n)==0&&(o=o.substring(n.length)),na(o)}};function ei(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.F){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Pa(n){const o={};n=(n.g&&Be(n)>=2&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<n.length;h++){if(p(n[h]))continue;var a=ca(n[h]);const E=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=o[E]||[];o[E]=I,I.push(a)}Xo(o,function(h){return h.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ft(n,o,a){return a&&a.internalChannelParams&&a.internalChannelParams[n]||o}function ti(n){this.za=0,this.i=[],this.j=new Rt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ft("failFast",!1,n),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ft("baseRetryDelayMs",5e3,n),this.Za=Ft("retryDelaySeedMs",1e4,n),this.Ta=Ft("forwardChannelMaxRetries",2,n),this.va=Ft("forwardChannelRequestTimeoutMs",2e4,n),this.ma=n&&n.xmlHttpFactory||void 0,this.Ua=n&&n.Rb||void 0,this.Aa=n&&n.useFetchStreams||!1,this.O=void 0,this.L=n&&n.supportsCrossDomainXhr||!1,this.M="",this.h=new Us(n&&n.concurrentRequestLimit),this.Ba=new Aa,this.S=n&&n.fastHandshake||!1,this.R=n&&n.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=n&&n.Pb||!1,n&&n.ua&&this.j.ua(),n&&n.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&n&&n.detectBufferingProxy||!1,this.ia=void 0,n&&n.longPollingTimeout&&n.longPollingTimeout>0&&(this.ia=n.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=ti.prototype,r.ka=8,r.I=1,r.connect=function(n,o,a,h){se(0),this.W=n,this.H=o||{},a&&h!==void 0&&(this.H.OSID=a,this.H.OAID=h),this.F=this.X,this.J=hi(this,null,this.W),Er(this)};function An(n){if(ri(n),n.I==3){var o=n.V++,a=Ie(n.J);if(j(a,"SID",n.M),j(a,"RID",o),j(a,"TYPE","terminate"),Bt(n,a),o=new Ue(n,n.j,o),o.M=2,o.A=_r(Ie(a)),a=!1,l.navigator&&l.navigator.sendBeacon)try{a=l.navigator.sendBeacon(o.A.toString(),"")}catch{}!a&&l.Image&&(new Image().src=o.A,a=!0),a||(o.g=ci(o.j,null),o.g.ea(o.A)),o.F=Date.now(),mr(o)}li(n)}function vr(n){n.g&&(Vn(n),n.g.cancel(),n.g=null)}function ri(n){vr(n),n.v&&(l.clearTimeout(n.v),n.v=null),Tr(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&l.clearTimeout(n.m),n.m=null)}function Er(n){if(!Ms(n.h)&&!n.m){n.m=!0;var o=n.Ea;De||f(),fe||(De(),fe=!0),y.add(o,n),n.D=0}}function Sa(n,o){return Fs(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=o.G.concat(n.i),!0):n.I==1||n.I==2||n.D>=(n.Sa?0:n.Ta)?!1:(n.m=St(v(n.Ea,n,o),ui(n,n.D)),n.D++,!0)}r.Ea=function(n){if(this.m)if(this.m=null,this.I==1){if(!n){this.V=Math.floor(Math.random()*1e5),n=this.V++;const E=new Ue(this,this.j,n);let I=this.o;if(this.U&&(I?(I=ms(I),ys(I,this.U)):I=this.U),this.u!==null||this.R||(E.J=I,I=null),this.S)e:{for(var o=0,a=0;a<this.i.length;a++){t:{var h=this.i[a];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(o+=h,o>4096){o=a;break e}if(o===4096||a===this.i.length-1){o=a+1;break e}}o=1e3}else o=1e3;o=si(this,E,o),a=Ie(this.J),j(a,"RID",n),j(a,"CVER",22),this.G&&j(a,"X-HTTP-Session-Id",this.G),Bt(this,a),I&&(this.R?o="headers="+Nt(Ys(I))+"&"+o:this.u&&In(a,this.u,I)),vn(this.h,E),this.Ra&&j(a,"TYPE","init"),this.S?(j(a,"$req",o),j(a,"SID","null"),E.U=!0,mn(E,a,null)):mn(E,a,o),this.I=2}}else this.I==3&&(n?ni(this,n):this.i.length==0||Ms(this.h)||ni(this))};function ni(n,o){var a;o?a=o.l:a=n.V++;const h=Ie(n.J);j(h,"SID",n.M),j(h,"RID",a),j(h,"AID",n.K),Bt(n,h),n.u&&n.o&&In(h,n.u,n.o),a=new Ue(n,n.j,a,n.D+1),n.u===null&&(a.J=n.o),o&&(n.i=o.G.concat(n.i)),o=si(n,a,1e3),a.H=Math.round(n.va*.5)+Math.round(n.va*.5*Math.random()),vn(n.h,a),mn(a,h,o)}function Bt(n,o){n.H&&pr(n.H,function(a,h){j(o,h,a)}),n.l&&pr({},function(a,h){j(o,h,a)})}function si(n,o,a){a=Math.min(n.i.length,a);const h=n.l?v(n.l.Ka,n.l,n):null;e:{var E=n.i;let x=-1;for(;;){const J=["count="+a];x==-1?a>0?(x=E[0].g,J.push("ofs="+x)):x=0:J.push("ofs="+x);let B=!0;for(let Y=0;Y<a;Y++){var I=E[Y].g;const Ae=E[Y].map;if(I-=x,I<0)x=Math.max(0,E[Y].g-100),B=!1;else try{I="req"+I+"_"||"";try{var V=Ae instanceof Map?Ae:Object.entries(Ae);for(const[et,je]of V){let $e=je;c(je)&&($e=ln(je)),J.push(I+et+"="+encodeURIComponent($e))}}catch(et){throw J.push(I+"type="+encodeURIComponent("_badmap")),et}}catch{h&&h(Ae)}}if(B){V=J.join("&");break e}}V=void 0}return n=n.i.splice(0,a),o.G=n,V}function ii(n){if(!n.g&&!n.v){n.Y=1;var o=n.Da;De||f(),fe||(De(),fe=!0),y.add(o,n),n.A=0}}function bn(n){return n.g||n.v||n.A>=3?!1:(n.Y++,n.v=St(v(n.Da,n),ui(n,n.A)),n.A++,!0)}r.Da=function(){if(this.v=null,oi(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var n=4*this.T;this.j.info("BP detection timer enabled: "+n),this.B=St(v(this.Wa,this),n)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,se(10),vr(this),oi(this))};function Vn(n){n.B!=null&&(l.clearTimeout(n.B),n.B=null)}function oi(n){n.g=new Ue(n,n.j,"rpc",n.Y),n.u===null&&(n.g.J=n.o),n.g.P=0;var o=Ie(n.na);j(o,"RID","rpc"),j(o,"SID",n.M),j(o,"AID",n.K),j(o,"CI",n.F?"0":"1"),!n.F&&n.ia&&j(o,"TO",n.ia),j(o,"TYPE","xmlhttp"),Bt(n,o),n.u&&n.o&&In(o,n.u,n.o),n.O&&(n.g.H=n.O);var a=n.g;n=n.ba,a.M=1,a.A=_r(Ie(o)),a.u=null,a.R=!0,Os(a,n)}r.Va=function(){this.C!=null&&(this.C=null,vr(this),bn(this),se(19))};function Tr(n){n.C!=null&&(l.clearTimeout(n.C),n.C=null)}function ai(n,o){var a=null;if(n.g==o){Tr(n),Vn(n),n.g=null;var h=2}else if(wn(n.h,o))a=o.G,Bs(n.h,o),h=1;else return;if(n.I!=0){if(o.o)if(h==1){a=o.u?o.u.length:0,o=Date.now()-o.F;var E=n.D;h=fn(),ne(h,new Ns(h,a)),Er(n)}else ii(n);else if(E=o.m,E==3||E==0&&o.X>0||!(h==1&&Sa(n,o)||h==2&&bn(n)))switch(a&&a.length>0&&(o=n.h,o.i=o.i.concat(a)),E){case 1:Ze(n,5);break;case 4:Ze(n,10);break;case 3:Ze(n,6);break;default:Ze(n,2)}}}function ui(n,o){let a=n.Qa+Math.floor(Math.random()*n.Za);return n.isActive()||(a*=2),a*o}function Ze(n,o){if(n.j.info("Error code "+o),o==2){var a=v(n.bb,n),h=n.Ua;const E=!h;h=new Me(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ct(h,"https"),_r(h),E?Ta(h.toString(),a):Ia(h.toString(),a)}else se(2);n.I=0,n.l&&n.l.pa(o),li(n),ri(n)}r.bb=function(n){n?(this.j.info("Successfully pinged google.com"),se(2)):(this.j.info("Failed to ping google.com"),se(1))};function li(n){if(n.I=0,n.ja=[],n.l){const o=js(n.h);(o.length!=0||n.i.length!=0)&&(M(n.ja,o),M(n.ja,n.i),n.h.i.length=0,D(n.i),n.i.length=0),n.l.oa()}}function hi(n,o,a){var h=a instanceof Me?Ie(a):new Me(a);if(h.g!="")o&&(h.g=o+"."+h.g),kt(h,h.u);else{var E=l.location;h=E.protocol,o=o?o+"."+E.hostname:E.hostname,E=+E.port;const I=new Me(null);h&&Ct(I,h),o&&(I.g=o),E&&kt(I,E),a&&(I.h=a),h=I}return a=n.G,o=n.wa,a&&o&&j(h,a,o),j(h,"VER",n.ka),Bt(n,h),h}function ci(n,o,a){if(o&&!n.L)throw Error("Can't create secondary domain capable XhrIo object.");return o=n.Aa&&!n.ma?new z(new Tn({ab:a})):new z(n.ma),o.Fa(n.L),o}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function fi(){}r=fi.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function pe(n,o){te.call(this),this.g=new ti(o),this.l=n,this.h=o&&o.messageUrlParams||null,n=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(n?n["X-WebChannel-Content-Type"]=o.messageContentType:n={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.sa&&(n?n["X-WebChannel-Client-Profile"]=o.sa:n={"X-WebChannel-Client-Profile":o.sa}),this.g.U=n,(n=o&&o.Qb)&&!p(n)&&(this.g.u=n),this.A=o&&o.supportsCrossDomainXhr||!1,this.v=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!p(o)&&(this.g.G=o,n=this.h,n!==null&&o in n&&(n=this.h,o in n&&delete n[o])),this.j=new pt(this)}S(pe,te),pe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},pe.prototype.close=function(){An(this.g)},pe.prototype.o=function(n){var o=this.g;if(typeof n=="string"){var a={};a.__data__=n,n=a}else this.v&&(a={},a.__data__=ln(n),n=a);o.i.push(new da(o.Ya++,n)),o.I==3&&Er(o)},pe.prototype.N=function(){this.g.l=null,delete this.j,An(this.g),delete this.g,pe.Z.N.call(this)};function pi(n){hn.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var o=n.__sm__;if(o){e:{for(const a in o){n=a;break e}n=void 0}(this.i=n)&&(n=this.i,o=o!==null&&n in o?o[n]:void 0),this.data=o}else this.data=n}S(pi,hn);function di(){cn.call(this),this.status=1}S(di,cn);function pt(n){this.g=n}S(pt,fi),pt.prototype.ra=function(){ne(this.g,"a")},pt.prototype.qa=function(n){ne(this.g,new pi(n))},pt.prototype.pa=function(n){ne(this.g,new di)},pt.prototype.oa=function(){ne(this.g,"b")},pe.prototype.send=pe.prototype.o,pe.prototype.open=pe.prototype.m,pe.prototype.close=pe.prototype.close,pn.NO_ERROR=0,pn.TIMEOUT=8,pn.HTTP_ERROR=6,ha.COMPLETE="complete",ia.EventType=Vt,Vt.OPEN="a",Vt.CLOSE="b",Vt.ERROR="c",Vt.MESSAGE="d",te.prototype.listen=te.prototype.J,z.prototype.listenOnce=z.prototype.K,z.prototype.getLastError=z.prototype.Ha,z.prototype.getLastErrorCode=z.prototype.ya,z.prototype.getStatus=z.prototype.ca,z.prototype.getResponseJson=z.prototype.La,z.prototype.getResponseText=z.prototype.la,z.prototype.send=z.prototype.ea,z.prototype.setWithCredentials=z.prototype.Fa}).apply(typeof br<"u"?br:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or="12.19.0";function Vl(r){or=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new Yr("@firebase/firestore");function we(r,...e){if(wt.logLevel<=F.DEBUG){const t=e.map(Zn);wt.debug(`Firestore (${or}): ${r}`,...t)}}function Io(r,...e){if(wt.logLevel<=F.ERROR){const t=e.map(Zn);wt.error(`Firestore (${or}): ${r}`,...t)}}function Zr(r,...e){if(wt.logLevel<=F.WARN){const t=e.map(Zn);wt.warn(`Firestore (${or}): ${r}`,...t)}}function Zn(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Ao(r,s,t)}function Ao(r,e,t){let s=`FIRESTORE (${or}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Io(s),new Error(s)}function k(r,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,r||Ao(e,i,s)}function Pl(r,e){return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=Sl(40);for(let u=0;u<i.length;++u)s.length<20&&i[u]<t&&(s+=e.charAt(i[u]%62))}return s}}function G(r,e){return r<e?-1:r>e?1:0}function Bn(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const i=r.charAt(s),u=e.charAt(s);if(i!==u)return kn(i)===kn(u)?G(i,u):kn(i)?1:-1}return G(r.length,e.length)}const Nl=55296,xl=57343;function kn(r){const e=r.charCodeAt(0);return e>=Nl&&e<=xl}function Cl(r,e,t){return r.length===e.length&&r.every(((s,i)=>t(s,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t){this.comparator=e,this.root=t||Z.EMPTY}insert(e,t){return new Mr(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Z.BLACK,null,null))}remove(e){return new Mr(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Z.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vr(this.root,e,this.comparator,!0)}}class Vr{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&i&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Z{constructor(e,t,s,i,u){this.key=e,this.value=t,this.color=s??Z.RED,this.left=i??Z.EMPTY,this.right=u??Z.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,u){return new Z(e??this.key,t??this.value,s??this.color,i??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const u=s(e,i.key);return i=u<0?i.copy(null,null,null,i.left.insert(e,t,s),null):u===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Z.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Z.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1;Z.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,t,s,i,u){return this}insert(e,t,s){return new Z(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.comparator=e,this.data=new Mr(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ki(this.data.getIterator())}getIteratorFrom(e){return new ki(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Fr)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,u=s.getNext().key;if(this.comparator(i,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Fr(this.comparator);return t.data=e,t}}class ki{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class C extends Je{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="__name__";class be{constructor(e,t,s){t===void 0?t=0:t>e.length&&$(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&$(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return be.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof be?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const u=be.compareSegments(e.get(i),t.get(i));if(u!==0)return u}return G(e.length,t.length)}static compareSegments(e,t){const s=be.isNumericId(e),i=be.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?be.extractNumericId(e).compare(be.extractNumericId(t)):Bn(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qn.fromString(e.substring(4,e.length-2))}}class le extends be{construct(e,t,s){return new le(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new C(O.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((i=>i.length>0)))}return new le(t)}static emptyPath(){return new le([])}}const kl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let it=class dt extends be{construct(e,t,s){return new dt(e,t,s)}static isValidIdentifier(e){return kl.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yt}static keyField(){return new dt([Yt])}static fromServerFormat(e){const t=[];let s="",i=0;const u=()=>{if(s.length===0)throw new C(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let l=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new C(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[i+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new C(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,i+=2}else c==="`"?(l=!l,i++):c!=="."||l?(s+=c,i++):(u(),i++)}if(u(),l)throw new C(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(t)}static emptyPath(){return new dt([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function es(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Ol(r,e){const t=[];for(const s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.push(e(r[s],s,r));return t}function Ll(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.path=e}static fromPath(e){return new qe(le.fromString(e))}static fromName(e){return new qe(le.fromString(e).popFirst(5))}static empty(){return new qe(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new qe(new le(e.slice()))}}function Dl(r,e,t,s){if(e===!0&&s===!0)throw new C(O.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ar(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function bo(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":$(12329,{type:typeof r})}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(r,e){const t={typeString:r};return e&&(t.value=e),t}function ur(r,e){if(!ar(r))throw new C(O.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const i=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const l=r[s];if(i&&typeof l!==i){t=`JSON field '${s}' must be a ${i}.`;break}if(u!==void 0&&l!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new C(O.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=-62135596800,Li=1e6;class W{static now(){return W.fromMillis(Date.now())}static fromDate(e){return W.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Li);return new W(t,s)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new C(O.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return W._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,s;if(e>=0n)t=Number(e/1000000000n),s=Number(e%1000000000n);else{const i=e%1000000000n;i===0n?(t=Number(e/1000000000n),s=0):(t=Number(e/1000000000n-1n),s=Number(i+1000000000n))}return new W(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new C(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new C(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Oi)throw new C(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Li}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new C(O.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:W._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ur(e,W._jsonSchema))return new W(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Oi;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}W._jsonSchemaVersion="firestore/timestamp/1.0",W._jsonSchema={type:K("string",W._jsonSchemaVersion),seconds:K("number"),nanoseconds:K("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Ul("Invalid base64 string: "+u):u}})(e);return new me(t)}static fromUint8Array(e){const t=(function(i){let u="";for(let l=0;l<i.length;++l)u+=String.fromCharCode(i[l]);return u})(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const Ml=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vt(r){if(k(!!r,39018),typeof r=="string"){let e=0;const t=Ml.exec(r);if(k(!!t,46558,{timestamp:r}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:X(r.seconds),nanos:X(r.nanos)}}function X(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function jr(r){return typeof r=="string"?me.fromBase64String(r):me.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="server_timestamp",Bl="__type__",jl="__previous_value__",$l="__local_write_time__";function ts(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Bl])==null?void 0:s.stringValue)===Fl}function Vo(r){const e=r.mapValue.fields[jl];return ts(e)?Vo(e):e}function Xt(r){const e=vt(r.mapValue.fields[$l].timestampValue);return new W(e.seconds,e.nanos)}const Di="(default)";class $r{constructor(e,t){this.projectId=e,this.database=t||Di}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database===Di}isEqual(e){return e instanceof $r&&e.projectId===this.projectId&&e.database===this.database}}function Hl(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new C(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(r.options.projectId,e)}function Qt(r){return r===0&&1/r==-1/0}function ql(r){return typeof r=="number"&&Number.isInteger(r)&&!Qt(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}function Wl(r){return typeof r=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="__type__",zl="__max__",Pr={mapValue:{}},So="__vector__",Hr="value",qr={nullValue:"NULL_VALUE"},he={booleanValue:!0},Q={booleanValue:!1};function re(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ts(r)?4:Gl(r)?9007199254740991:zr(r)?10:11:$(28295,{value:r})}function Wr(r,e,t){if(r===e)return!0;const s=re(r);if(s!==re(e))return!1;switch(s){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Xt(r).isEqual(Xt(e));case 3:return(function(u,l){if(typeof u.timestampValue=="string"&&typeof l.timestampValue=="string"&&u.timestampValue.length===l.timestampValue.length)return u.timestampValue===l.timestampValue;const c=vt(u.timestampValue),g=vt(l.timestampValue);return c.seconds===g.seconds&&c.nanos===g.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(u,l){return jr(u.bytesValue).isEqual(jr(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(u,l){return X(u.geoPointValue.latitude)===X(l.geoPointValue.latitude)&&X(u.geoPointValue.longitude)===X(l.geoPointValue.longitude)})(r,e);case 2:return(function(u,l,c){if("integerValue"in u&&"integerValue"in l)return X(u.integerValue)===X(l.integerValue);let g,v;if("doubleValue"in u&&"doubleValue"in l)g=X(u.doubleValue),v=X(l.doubleValue);else{if(!(c!=null&&c.i))return!1;g=X(u.integerValue??u.doubleValue),v=X(l.integerValue??l.doubleValue)}return g===v?!!(c!=null&&c.o)||Qt(g)===Qt(v):!!(c===void 0||c.u)&&isNaN(g)&&isNaN(v)})(r,e,t);case 9:return Cl(r.arrayValue.values||[],e.arrayValue.values||[],((i,u)=>Wr(i,u,t)));case 10:case 11:return(function(u,l,c){const g=u.mapValue.fields||{},v=l.mapValue.fields||{};if(Br(g)!==Br(v))return!1;for(const P in g)if(g.hasOwnProperty(P)&&(v[P]===void 0||!Wr(g[P],v[P],c)))return!1;return!0})(r,e,t);default:return $(52216,{left:r})}}function Re(r,e){if(r===e)return 0;const t=re(r),s=re(e);if(t!==s)return G(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(r.booleanValue,e.booleanValue);case 2:return(function(u,l){const c=X(u.integerValue||u.doubleValue),g=X(l.integerValue||l.doubleValue);return c<g?-1:c>g?1:c===g?0:isNaN(c)?isNaN(g)?0:-1:1})(r,e);case 3:return Ui(r.timestampValue,e.timestampValue);case 4:return Ui(Xt(r),Xt(e));case 5:return Bn(r.stringValue,e.stringValue);case 6:return(function(u,l){const c=jr(u),g=jr(l);return c.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(u,l){const c=u.split("/"),g=l.split("/");for(let v=0;v<c.length&&v<g.length;v++){const P=G(c[v],g[v]);if(P!==0)return P}return G(c.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,l){const c=G(X(u.latitude),X(l.latitude));return c!==0?c:G(X(u.longitude),X(l.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Mi(r.arrayValue,e.arrayValue);case 10:return(function(u,l){var N,D,M,q;const c=u.fields||{},g=l.fields||{},v=(N=c[Hr])==null?void 0:N.arrayValue,P=(D=g[Hr])==null?void 0:D.arrayValue,S=G(((M=v==null?void 0:v.values)==null?void 0:M.length)||0,((q=P==null?void 0:P.values)==null?void 0:q.length)||0);return S!==0?S:Mi(v,P)})(r.mapValue,e.mapValue);case 11:return(function(u,l){if(u===Pr.mapValue&&l===Pr.mapValue)return 0;if(u===Pr.mapValue)return 1;if(l===Pr.mapValue)return-1;const c=u.fields||{},g=Object.keys(c),v=l.fields||{},P=Object.keys(v);g.sort(),P.sort();for(let S=0;S<g.length&&S<P.length;++S){const N=Bn(g[S],P[S]);if(N!==0)return N;const D=Re(c[g[S]],v[P[S]]);if(D!==0)return D}return G(g.length,P.length)})(r.mapValue,e.mapValue);default:throw $(23264,{l:t})}}function Ui(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return G(r,e);const t=vt(r),s=vt(e),i=G(t.seconds,s.seconds);return i!==0?i:G(t.nanos,s.nanos)}function Mi(r,e){const t=r.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const u=Re(t[i],s[i]);if(u!==void 0&&u!==0)return u}return G(t.length,s.length)}function gt(r){return!!r&&"integerValue"in r}function nt(r){return!!r&&"doubleValue"in r}function Et(r){return gt(r)||nt(r)}function jn(r){return!!r&&"arrayValue"in r}function ve(r){return!!r&&"nullValue"in r}function _e(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function _t(r){return!!r&&"mapValue"in r}function zr(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Po])==null?void 0:s.stringValue)===So}function $n(r){var e,t;return(t=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Hr])==null?void 0:t.arrayValue}function Wt(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return es(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Wt(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wt(r.arrayValue.values[t]);return e}return{...r}}function Gl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===zl}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.value=e}static empty(){return new Gr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!_t(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wt(t)}setAll(e){let t=it.emptyPath(),s={},i=[];e.forEach(((l,c)=>{if(!t.isImmediateParentOf(c)){const g=this.getFieldsMap(t);this.applyChanges(g,s,i),s={},i=[],t=c.popLast()}l?s[c.lastSegment()]=Wt(l):i.push(c.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,i)}delete(e){const t=this.field(e.popLast());_t(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Wr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];_t(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){es(t,((i,u)=>e[i]=u));for(const i of s)delete e[i]}clone(){return new Gr(Wt(this.value))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qt(e)?"-0":e}}function Kl(r){return{integerValue:""+r}}function Jl(r,e,t){return ql(e)?Kl(e):Ro(r,e)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{static fromTimestamp(e){return new zt(e)}static min(){return new zt(new W(0,0))}static max(){return new zt(new W(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t=null,s=[],i=[],u=null,l="F",c=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=u,this.limitType=l,this.startAt=c,this.endAt=g,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function Xl(r){return new Yl(r)}function Ql(r){const e=Pl(r);if(e.A===null){e.A=[];const t=new Set;for(const u of e.explicitOrderBy)e.A.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new Fr(it.comparator);return l.filters.forEach((g=>{g.getFlattenedFilters().forEach((v=>{v.isInequality()&&(c=c.add(v.field))}))})),c})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.A.push(new Fi(u,s))})),t.has(it.keyField().canonicalString())||e.A.push(new Fi(it.keyField(),s))}return e.A}function Zl(r){return(e,t)=>{let s=!1;for(const i of Ql(r)){const u=eh(i,e,t);if(u!==0)return u;s=s||i.field.isKeyField()}return 0}}function eh(r,e,t){const s=r.field.isKeyField()?qe.comparator(e.key,t.key):(function(u,l,c){const g=l.data.field(u),v=c.data.field(u);return g!==null&&v!==null?Re(g,v):$(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return $(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bi,L;(L=Bi||(Bi={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Qn([4294967295,4294967295],0);function Cr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function No(r){const e=vt(r);return new W(e.seconds,e.nanos)}function th(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function On(r,e){return Cr(r,e.toTimestamp())}function xo(r,e){return rh(r,e).canonicalString()}function rh(r,e){const t=(function(i){return new le(["projects",i.projectId,"databases",i.database])})(r).child("documents");return e===void 0?t:t.child(e)}function nh(r,e){return xo(r.databaseId,e.path)}function Co(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}function Zt(r,e){const t={fields:{}};return e.forEach(((s,i)=>{if(typeof i!="string")throw new Error(`Cannot encode map with non-string key: ${i}`);t.fields[i]=s._toProto(r)})),{mapValue:t}}function ko(r){return{stringValue:r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ye(me.fromBase64String(e))}catch(t){throw new C(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ye(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ye._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ur(e,ye._jsonSchema))return ye.fromBase64String(e.bytes)}}ye._jsonSchemaVersion="firestore/bytes/1.0",ye._jsonSchema={type:K("string",ye._jsonSchemaVersion),bytes:K("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new C(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function sh(){return new rs(Yt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new C(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new C(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ce._jsonSchemaVersion}}static fromJSON(e){if(ur(e,Ce._jsonSchema))return new Ce(e.latitude,e.longitude)}}Ce._jsonSchemaVersion="firestore/geoPoint/1.0",Ce._jsonSchema={type:K("string",Ce._jsonSchemaVersion),latitude:K("number"),longitude:K("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ue.UNAUTHENTICATED=new ue(null),ue.GOOGLE_CREDENTIALS=new ue("google-credentials-uid"),ue.FIRST_PARTY=new ue("first-party-uid"),ue.MOCK_USER=new ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ue.UNAUTHENTICATED)))}shutdown(){}}class ah{constructor(e){this.De=e,this.currentUser=ue.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){k(this.Ce===void 0,42304);let s=this.xe;const i=g=>this.xe!==s?(s=this.xe,t(g)):Promise.resolve();let u=new Gt;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),u.resolve(),u=new Gt,e.enqueueRetryable((()=>i(this.currentUser)))};const l=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await i(this.currentUser)}))},c=g=>{we("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),l())};this.De.onInit((g=>c(g))),setTimeout((()=>{if(!this.auth){const g=this.De.getImmediate({optional:!0});g?c(g):(we("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Gt)}}),0),l()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.xe!==e?(we("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(k(typeof s.accessToken=="string",31837,{Oe:s}),new ih(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return k(e===null||typeof e=="string",2055,{Me:e}),new ue(e)}}class uh{constructor(e,t,s){this.Ne=e,this.Le=t,this.Be=s,this.type="FirstParty",this.user=ue.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class lh{constructor(e,t,s){this.Ne=e,this.Le=t,this.Be=s}getToken(){return Promise.resolve(new uh(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable((()=>t(ue.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ji{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hh{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,tt(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){k(this.Ce===void 0,3512);const s=u=>{u.error!=null&&we("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const l=u.token!==this.$e;return this.$e=u.token,we("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(u.token):Promise.resolve()};this.Ce=u=>{e.enqueueRetryable((()=>s(u)))};const i=u=>{we("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit((u=>i(u))),setTimeout((()=>{if(!this.appCheck){const u=this.qe.getImmediate({optional:!0});u?i(u):we("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.Ke)return Promise.resolve(new ji(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(k(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new ji(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}function ch(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}class fh{constructor(e,t,s=1e3,i=1.5,u=6e4){this.Ct=e,this.timerId=t,this.Ft=s,this.Ot=i,this.Mt=u,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),s=Math.max(0,Date.now()-this.Bt),i=Math.max(0,t-s);i>0&&we("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,i,(()=>(this.Bt=Date.now(),e()))),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="ComponentProvider",$i=new Map;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=41943040;function gh(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=1048576;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="firestore.googleapis.com",Hi=!0;class qi{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new C(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_h,this.ssl=Hi}else this.host=e.host,this.ssl=e.ssl??Hi;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=dh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mh)throw new C(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(Dl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ch(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new C(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new C(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new C(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new C(O.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(s,i){if(s===i)return!0;if(!s||!i)return!1;const u=Object.keys(s),l=Object.keys(i);if(u.length!==l.length)return!1;for(const c of u)if(s[c]!==i[c])return!1;return!0})(this._customHeaders,e._customHeaders)}}let yh=class{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qi({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new C(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new C(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qi(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new oh;switch(s.type){case"firstParty":return new lh(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new C(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=$i.get(t);s&&(we(ph,"Removing Datastore"),$i.delete(t),s.terminate())})(this),Promise.resolve()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ns(this.firestore,e,this._query)}}class de{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ss(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new de(this.firestore,e,this._key)}toJSON(){return{type:de._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ur(t,de._jsonSchema))return new de(e,s||null,new qe(le.fromString(t.referencePath)))}}de._jsonSchemaVersion="firestore/documentReference/1.0",de._jsonSchema={type:K("string",de._jsonSchemaVersion),referencePath:K("string")};class ss extends ns{constructor(e,t,s){super(e,t,Xl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new de(this.firestore,null,new qe(e))}withConverter(e){return new ss(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==i[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ge._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ur(e,ge._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ge(e.vectorValues);throw new C(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ge._jsonSchemaVersion="firestore/vectorValue/1.0",ge._jsonSchema={type:K("string",ge._jsonSchemaVersion),vectorValues:K("object")};function wh(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{dataSource:r})}}function er(r,e,t){if(Do(r=ot(r)))return Eh("Unsupported field value:",e,r),vh(r,e);if(r instanceof Oo)return(function(i,u){if(!wh(u.dataSource))throw u.createError(`${i._methodName}() can only be used with update() and set()`);if(!u.path)throw u.createError(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(u);l&&u.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(i,u){const l=[];let c=0;for(const g of i){let v=er(g,u.childContextForArray(c));v==null&&(v={nullValue:"NULL_VALUE"}),l.push(v),c++}return{arrayValue:{values:l}}})(r,e)}return(function(i,u,l){if((i=ot(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Jl(u.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const c=W.fromDate(i);return{timestampValue:Cr(u.serializer,c)}}if(i instanceof W){const c=new W(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Cr(u.serializer,c)}}if(Lo(i)){const c=W.fromInstant(i),g=new W(c.seconds,1e3*Math.floor(c.nanoseconds/1e3));return{timestampValue:Cr(u.serializer,g)}}if(i instanceof Ce)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ye)return{bytesValue:th(u.serializer,i._byteString)};if(i instanceof de){const c=u.databaseId,g=i.firestore._databaseId;if(!g.isEqual(c))throw u.createError(`Document reference is for database ${g.projectId}/${g.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:xo(i.firestore._databaseId||u.databaseId,i._key.path)}}if(i instanceof ge)return(function(g,v){const P=g instanceof ge?g.toArray():g;return{mapValue:{fields:{[Po]:{stringValue:So},[Hr]:{arrayValue:{values:P.map((N=>{if(typeof N!="number")throw v.createError("VectorValues must only contain numeric values.");return Ro(v.serializer,N)}))}}}}}})(i,u);if(Co(i))return i._toProto(u.serializer);throw u.createError(`Unsupported field value: ${bo(i)}`)})(r,e)}function vh(r,e){const t={};return Ll(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(r,((s,i)=>{const u=er(i,e.childContextForField(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Lo(r){if(typeof r!="object"||r===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&r instanceof Temporal.Instant)return!0;const e=r;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function Do(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof W||r instanceof Ce||r instanceof ye||r instanceof de||r instanceof Oo||r instanceof ge||Lo(r)||Co(r))}function Eh(r,e,t){if(!Do(t)||!ar(t)){const s=bo(t);throw s==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+s)}}function is(r,e,t){if((e=ot(e))instanceof rs)return e._internalPath;if(typeof e=="string")return Ih(r,e);throw Hn("Field path arguments must be of type string or ",r)}const Th=new RegExp("[~\\*/\\[\\]]");function Ih(r,e,t){if(e.search(Th)>=0)throw Hn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new rs(...e.split("."))._internalPath}catch{throw Hn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function Hn(r,e,t,s,i){let u=`Function ${e}() called with invalid data`;u+=". ";let l="";return new C(O.INVALID_ARGUMENT,u+r+l)}function Ah(r){return typeof r._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const s=Gr.empty();for(const i in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(i)){const u=this.optionDefinitions[i];if(i in e){const l=e[i];let c;u.nestedOptions&&ar(l)?c={mapValue:{fields:new ce(u.nestedOptions).getOptionsProto(t,l)}}:l&&(c=er(l,t)??void 0),c&&s.set(it.fromServerFormat(u.serverName),c)}}return s}getOptionsProto(e,t,s){const i=this._getKnownOptions(t,e);if(s){const u=new Map(Ol(s,((l,c)=>[it.fromServerFormat(c),l!==void 0?er(l,e):null])));i.setAll(u)}return i.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(r){return typeof r=="object"&&r!==null&&!!("nullValue"in r&&(r.nullValue===null||r.nullValue==="NULL_VALUE")||"booleanValue"in r&&(r.booleanValue===null||typeof r.booleanValue=="boolean")||"integerValue"in r&&(r.integerValue===null||typeof r.integerValue=="number"||typeof r.integerValue=="string")||"doubleValue"in r&&(r.doubleValue===null||typeof r.doubleValue=="number")||"timestampValue"in r&&(r.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(r.timestampValue))||"stringValue"in r&&(r.stringValue===null||typeof r.stringValue=="string")||"bytesValue"in r&&(r.bytesValue===null||r.bytesValue instanceof Uint8Array)||"referenceValue"in r&&(r.referenceValue===null||typeof r.referenceValue=="string")||"geoPointValue"in r&&(r.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(r.geoPointValue))||"arrayValue"in r&&(r.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(r.arrayValue))||"mapValue"in r&&(r.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!ar(t.fields))})(r.mapValue))||"fieldReferenceValue"in r&&(r.fieldReferenceValue===null||typeof r.fieldReferenceValue=="string")||"functionValue"in r&&(r.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(r.functionValue))||"pipelineValue"in r&&(r.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(r.pipelineValue)))}function Vh(r){return new ge(r)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(r){let e;return r instanceof ut?r:(e=ar(r)?kh(r):r instanceof Array?Oh(r):Uo(r,void 0),e)}function Ln(r){if(r instanceof ut)return r;if(r instanceof ge)return tr(r);if(Array.isArray(r))return tr(Vh(r));throw new Error("Unsupported value: "+typeof r)}function os(r){return Wl(r)?Rh(r):b(r)}class ut{constructor(){this._protoValueType="ProtoValue"}add(e){return new A("add",[this,b(e)],"add")}asBoolean(){if(this instanceof Ke)return this;if(this instanceof lr)return new Mo(this);if(this instanceof as)return new Ch(this);if(this instanceof A)return new xh(this);throw new C("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new A("subtract",[this,b(e)],"subtract")}multiply(e){return new A("multiply",[this,b(e)],"multiply")}divide(e){return new A("divide",[this,b(e)],"divide")}mod(e){return new A("mod",[this,b(e)],"mod")}equal(e){return new A("equal",[this,b(e)],"equal").asBoolean()}notEqual(e){return new A("not_equal",[this,b(e)],"notEqual").asBoolean()}lessThan(e){return new A("less_than",[this,b(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new A("less_than_or_equal",[this,b(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new A("greater_than",[this,b(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new A("greater_than_or_equal",[this,b(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const s=[e,...t].map((i=>b(i)));return new A("array_concat",[this,...s],"arrayConcat")}arrayContains(e){return new A("array_contains",[this,b(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new jt(e.map(b),"arrayContainsAll"):e;return new A("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new jt(e.map(b),"arrayContainsAny"):e;return new A("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new A("array_reverse",[this])}arrayLength(){return new A("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new jt(e.map(b),"equalAny"):e;return new A("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new jt(e.map(b),"notEqualAny"):e;return new A("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new A("exists",[this],"exists").asBoolean()}charLength(){return new A("char_length",[this],"charLength")}like(e){return new A("like",[this,b(e)],"like").asBoolean()}regexContains(e){return new A("regex_contains",[this,b(e)],"regexContains").asBoolean()}regexFind(e){return new A("regex_find",[this,b(e)],"regexFind")}regexFindAll(e){return new A("regex_find_all",[this,b(e)],"regexFindAll")}regexMatch(e){return new A("regex_match",[this,b(e)],"regexMatch").asBoolean()}stringContains(e){return new A("string_contains",[this,b(e)],"stringContains").asBoolean()}startsWith(e){return new A("starts_with",[this,b(e)],"startsWith").asBoolean()}endsWith(e){return new A("ends_with",[this,b(e)],"endsWith").asBoolean()}toLower(){return new A("to_lower",[this],"toLower")}toUpper(){return new A("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(b(e)),new A("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(b(e)),new A("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(b(e)),new A("rtrim",t,"rtrim")}type(){return new A("type",[this])}isType(e){return new A("is_type",[this,tr(e)],"isType").asBoolean()}stringConcat(e,...t){const s=[e,...t].map(b);return new A("string_concat",[this,...s],"stringConcat")}stringIndexOf(e){return new A("string_index_of",[this,b(e)],"stringIndexOf")}stringRepeat(e){return new A("string_repeat",[this,b(e)],"stringRepeat")}stringReplaceAll(e,t){return new A("string_replace_all",[this,b(e),b(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new A("string_replace_one",[this,b(e),b(t)],"stringReplaceOne")}concat(e,...t){const s=[e,...t].map(b);return new A("concat",[this,...s],"concat")}reverse(){return new A("reverse",[this],"reverse")}arrayFilter(e,t){return new A("array_filter",[this,b(e),t],"arrayFilter")}arrayTransform(e,t){return new A("array_transform",[this,b(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,s){return new A("array_transform",[this,b(e),b(t),s],"arrayTransformWithIndex")}arraySlice(e,t){const s=[this,b(e)];return t!==void 0&&s.push(b(t)),new A("array_slice",s,"arraySlice")}arrayFirst(){return new A("array_first",[this],"arrayFirst")}arrayFirstN(e){return new A("array_first_n",[this,b(e)],"arrayFirstN")}arrayLast(){return new A("array_last",[this],"arrayLast")}arrayLastN(e){return new A("array_last_n",[this,b(e)],"arrayLastN")}arrayMaximum(){return new A("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new A("maximum_n",[this,b(e)],"arrayMaximumN")}arrayMinimum(){return new A("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new A("minimum_n",[this,b(e)],"arrayMinimumN")}arrayIndexOf(e){return new A("array_index_of",[this,b(e),b("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new A("array_index_of",[this,b(e),b("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new A("array_index_of_all",[this,b(e)],"arrayIndexOfAll")}byteLength(){return new A("byte_length",[this],"byteLength")}ceil(){return new A("ceil",[this])}floor(){return new A("floor",[this])}abs(){return new A("abs",[this])}exp(){return new A("exp",[this])}mapGet(e){return new A("map_get",[this,tr(e)],"mapGet")}mapSet(e,t,...s){const i=[this,b(e),b(t),...s.map(b)];return new A("map_set",i,"mapSet")}mapKeys(){return new A("map_keys",[this],"mapKeys")}mapValues(){return new A("map_values",[this],"mapValues")}mapEntries(){return new A("map_entries",[this],"mapEntries")}getField(e){return new A("get_field",[this,b(e)],"get_field")}count(){return ae._create("count",[this],"count")}sum(){return ae._create("sum",[this],"sum")}average(){return ae._create("average",[this],"average")}minimum(){return ae._create("minimum",[this],"minimum")}maximum(){return ae._create("maximum",[this],"maximum")}first(){return ae._create("first",[this],"first")}last(){return ae._create("last",[this],"last")}arrayAgg(){return ae._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return ae._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return ae._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const s=[e,...t];return new A("maximum",[this,...s.map(b)],"logicalMaximum")}logicalMinimum(e,...t){const s=[e,...t];return new A("minimum",[this,...s.map(b)],"minimum")}vectorLength(){return new A("vector_length",[this],"vectorLength")}cosineDistance(e){return new A("cosine_distance",[this,Ln(e)],"cosineDistance")}dotProduct(e){return new A("dot_product",[this,Ln(e)],"dotProduct")}euclideanDistance(e){return new A("euclidean_distance",[this,Ln(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new A("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new A("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new A("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new A("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new A("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new A("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new A("timestamp_add",[this,b(e),b(t)],"timestampAdd")}timestampSubtract(e,t){return new A("timestamp_subtract",[this,b(e),b(t)],"timestampSubtract")}timestampDiff(e,t){return new A("timestamp_diff",[this,os(e),b(t)],"timestampDiff")}timestampExtract(e,t){const s=[this,b(e)];return t&&s.push(b(t)),new A("timestamp_extract",s,"timestampExtract")}documentId(){return new A("document_id",[this],"documentId")}parent(){return new A("parent",[this],"parent")}substring(e,t){const s=b(e);return new A("substring",t===void 0?[this,s]:[this,s,b(t)],"substring")}arrayGet(e){return new A("array_get",[this,b(e)],"arrayGet")}isError(){return new A("is_error",[this],"isError").asBoolean()}ifError(e){const t=new A("if_error",[this,b(e)],"ifError");return e instanceof Ke?t.asBoolean():t}isAbsent(){return new A("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new A("map_remove",[this,b(e)],"mapRemove")}mapMerge(e,...t){const s=b(e),i=t.map(b);return new A("map_merge",[this,s,...i],"mapMerge")}pow(e){return new A("pow",[this,b(e)])}trunc(e){return e===void 0?new A("trunc",[this]):new A("trunc",[this,b(e)],"trunc")}round(e){return e===void 0?new A("round",[this]):new A("round",[this,b(e)],"round")}collectionId(){return new A("collection_id",[this])}length(){return new A("length",[this])}ln(){return new A("ln",[this])}sqrt(){return new A("sqrt",[this])}stringReverse(){return new A("string_reverse",[this])}ifAbsent(e){return new A("if_absent",[this,b(e)],"ifAbsent")}ifNull(e){return new A("if_null",[this,b(e)],"ifNull")}coalesce(e,...t){return new A("coalesce",[this,b(e),...t.map(b)],"coalesce")}join(e){return new A("join",[this,b(e)],"join")}log10(){return new A("log10",[this])}arraySum(){return new A("sum",[this])}split(e){return new A("split",[this,b(e)])}timestampTruncate(e,t){const s=[this,b(e)];return t&&s.push(b(t)),new A("timestamp_trunc",s)}ascending(){return Lh(this)}descending(){return Dh(this)}as(e){return new Sh(this,e,"as")}}class ae{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,s){const i=new ae(e,t);return i._methodName=s,i}as(e){return new Ph(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class Ph{constructor(e,t,s){this.aggregate=e,this.alias=t,this._methodName=s}_readUserData(e){this.aggregate._readUserData(e)}}class Sh{constructor(e,t,s){this.expr=e,this.alias=t,this._methodName=s,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class jt extends ut{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map((t=>t._toProto(e)))}}}_readUserData(e){this.cr.forEach((t=>t._readUserData(e)))}}class as extends ut{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new A("geo_distance",[this,b(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Rh(r){return Nh(r,"field")}function Nh(r,e){return new as(typeof r=="string"?Yt===r?sh()._internalPath:is("field",r):r._internalPath,e)}class lr extends ut{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new lr(e,void 0);return t._protoValue=e,t}_toProto(e){return k(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,bh(this._protoValue)||(this._protoValue=er(this.value,e))}}function tr(r,e){return Uo(r,"constant")}function Uo(r,e){const t=new lr(r,e);return typeof r=="boolean"?new Mo(t):t}class A extends ut{constructor(e,t,s,i){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,s!==void 0&&(this._methodName=s),i!==void 0&&(this._options=i)}get _optionsUtil(){return new ce({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((s=>s._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Ke extends ut{get _methodName(){return this._expr._methodName}countIf(){return ae._create("count_if",[this],"countIf")}not(){return new A("not",[this],"not").asBoolean()}conditional(e,t){return new A("conditional",[this,e,t],"conditional")}ifError(e){const t=b(e),s=new A("if_error",[this,t],"ifError");return t instanceof Ke?s.asBoolean():s}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class xh extends Ke{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Mo extends Ke{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class Ch extends Ke{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function kh(r,e){const t=[];for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s)){const i=r[s];t.push(tr(s)),t.push(b(i))}return new A("map",t,"map")}function Oh(r){return(function(t,s){return new A("array",t.map((i=>b(i))),s)})(r,"array")}function Lh(r){return new Fo(os(r),"ascending","ascending")}function Dh(r){return new Fo(os(r),"descending","descending")}class Fo{constructor(e,t,s){this.expr=e,this.direction=t,this._methodName=s,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:ko(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Uh extends Ne{get _name(){return"add_fields"}get _optionsUtil(){return new ce({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Zt(e,this.fields)]}}_readUserData(e){super._readUserData(e),at(this.fields,e)}}class Mh extends Ne{get _name(){return"aggregate"}get _optionsUtil(){return new ce({})}constructor(e,t,s){super(s),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Zt(e,this.accumulators),Zt(e,this.groups)]}}_readUserData(e){super._readUserData(e),at(this.groups,e),at(this.accumulators,e)}}class Fh extends Ne{get _name(){return"distinct"}get _optionsUtil(){return new ce({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Zt(e,this.groups)]}}_readUserData(e){super._readUserData(e),at(this.groups,e)}}class Bh extends Ne{get _name(){return"collection"}get _optionsUtil(){return new ce({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class jh extends Ne{get _name(){return"collection_group"}get _optionsUtil(){return new ce({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class $h extends Ne{get _name(){return"database"}get _optionsUtil(){return new ce({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Hh extends Ne{get _name(){return"documents"}get _optionsUtil(){return new ce({})}constructor(e,t){if(super(t),!e||e.length===0)throw new C(O.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const s=e.map((u=>u.startsWith("/")?u:"/"+u)),i=new Set(s);if(i.size!==s.length)throw new C(O.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=s,this.Pr=i}_toProto(e){return{...super._toProto(e),args:this.Tr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class qh extends Ne{get _name(){return"select"}get _optionsUtil(){return new ce({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Zt(e,this.selections)]}}_readUserData(e){super._readUserData(e),at(this.selections,e)}}class Wh extends Ne{get _name(){return"sort"}get _optionsUtil(){return new ce({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),at(this.orderings,e)}}class us extends Ne{get _name(){return"replace_with"}get _optionsUtil(){return new ce({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),ko(us.Ir)]}}_readUserData(e){super._readUserData(e),at(this.map,e)}}us.Ir="full_replace";function at(r,e){return Ah(r)?r._readUserData(e):Array.isArray(r)?r.forEach((t=>t._readUserData(e))):r instanceof Map?r.forEach((t=>t._readUserData(e))):Object.values(r).forEach((t=>t._readUserData(e))),r}// Copyright 2024 Google LLC* @license
class zh{constructor(e,t,s){this.serializer=e,this.stages=t,this.listenOptions=s,this.isCorePipeline=!0}getPipelineCollection(){return Bo(this)}getPipelineCollectionGroup(){return jo(this)}getPipelineCollectionId(){return Gh(this)}getPipelineDocuments(){return Kh(this)}getPipelineFlavor(){return(function(t){let s="exact";return t.stages.forEach(((i,u)=>{i._name!==Fh.name&&i._name!==Mh.name||(s="keyless"),i._name===qh.name&&s==="exact"&&(s="augmented"),i._name===Uh.name&&u<t.stages.length-1&&s==="exact"&&(s="augmented")})),s})(this)}getPipelineSourceType(){return hr(this)}}function hr(r){const e=r.stages[0];return e instanceof Bh||e instanceof jh||e instanceof $h||e instanceof Hh?e._name:"unknown"}function Bo(r){if(hr(r)==="collection")return r.stages[0].hr}function jo(r){if(hr(r)==="collection_group")return r.stages[0].collectionId}function Gh(r){switch(hr(r)){case"collection":return le.fromString(Bo(r)).lastSegment();case"collection_group":return jo(r);default:return}}function Kh(r){if(hr(r)==="documents")return r.stages[0].Tr}class m{constructor(e,t){this.type=e,this.value=t}static mr(){return new m("ERROR",void 0)}static pr(){return new m("UNSET",void 0)}static gr(){return new m("NULL",qr)}static newValue(e){return ve(e)?new m("NULL",qr):(function(s){return!!s&&"booleanValue"in s})(e)?new m("BOOLEAN",e):gt(e)?new m("INT",e):nt(e)?new m("DOUBLE",e):(function(s){return!!s&&"timestampValue"in s&&!!s.timestampValue})(e)?new m("TIMESTAMP",e):(function(s){return!!s&&"stringValue"in s})(e)?new m("STRING",e):(function(s){return!!s&&"bytesValue"in s})(e)?new m("BYTES",e):e.referenceValue?new m("REFERENCE",e):e.geoPointValue?new m("GEO_POINT",e):jn(e)?new m("ARRAY",e):zr(e)?new m("VECTOR",e):_t(e)?new m("MAP",e):new m("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function Wi(r){if(!r.yr())return r.value}function Jh(r){return r instanceof Ke?r._expr:r}function R(r){if((r=Jh(r))instanceof as)return new Yh(r);if(r instanceof lr)return new Xh(r);if(r instanceof jt)return new Qh(r);if(r instanceof A){if(r.name==="add")return new tc(r);if(r.name==="subtract")return new rc(r);if(r.name==="multiply")return new nc(r);if(r.name==="divide")return new sc(r);if(r.name==="mod")return new ic(r);if(r.name==="and")return new oc(r);if(r.name==="equal")return new yc(r);if(r.name==="not_equal")return new wc(r);if(r.name==="less_than")return new vc(r);if(r.name==="less_than_or_equal")return new Ec(r);if(r.name==="greater_than")return new Tc(r);if(r.name==="greater_than_or_equal")return new Ic(r);if(r.name==="array_concat")return new Ac(r);if(r.name==="array_reverse")return new bc(r);if(r.name==="array_contains")return new Vc(r);if(r.name==="array_contains_all")return new Pc(r);if(r.name==="array_contains_any")return new Sc(r);if(r.name==="array_length")return new Rc(r);if(r.name==="array_element")return new Nc(r);if(r.name==="equal_any")return new $o(r);if(r.name==="not_equal_any")return new uc(r);if(r.name==="is_nan")return new lc(r);if(r.name==="is_not_nan")return new hc(r);if(r.name==="is_null")return new cc(r);if(r.name==="is_not_null")return new fc(r);if(r.name==="is_error")return new pc(r);if(r.name==="exists")return new dc(r);if(r.name==="not")return new en(r);if(r.name==="or")return new ac(r);if(r.name==="xor")return new ls(r);if(r.name==="conditional")return new gc(r);if(r.name==="maximum")return new mc(r);if(r.name==="minimum")return new _c(r);if(r.name==="reverse")return new xc(r);if(r.name==="replace_first")return new Cc(r);if(r.name==="replace_all")return new kc(r);if(r.name==="char_length")return new Oc(r);if(r.name==="byte_length")return new Lc(r);if(r.name==="like")return new Dc(r);if(r.name==="regex_contains")return new Uc(r);if(r.name==="regex_match")return new Mc(r);if(r.name==="string_contains")return new Fc(r);if(r.name==="starts_with")return new Bc(r);if(r.name==="ends_with")return new jc(r);if(r.name==="to_lower")return new $c(r);if(r.name==="to_upper")return new Hc(r);if(r.name==="trim")return new qc(r);if(r.name==="string_concat")return new Wc(r);if(r.name==="map_get")return new zc(r);if(r.name==="cosine_distance")return new Gc(r);if(r.name==="dot_product")return new Kc(r);if(r.name==="euclidean_distance")return new Jc(r);if(r.name==="vector_length")return new Yc(r);if(r.name==="unix_micros_to_timestamp")return new tf(r);if(r.name==="timestamp_to_unix_micros")return new sf(r);if(r.name==="unix_millis_to_timestamp")return new rf(r);if(r.name==="timestamp_to_unix_millis")return new of(r);if(r.name==="unix_seconds_to_timestamp")return new nf(r);if(r.name==="timestamp_to_unix_seconds")return new af(r);if(r.name==="timestamp_add")return new uf(r);if(r.name==="timestamp_subtract")return new lf(r)}throw new Error(`Unknown Expr : ${r}`)}class Yh{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Yt)return m.newValue({referenceValue:nh(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return m.newValue({timestampValue:On(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return m.newValue({timestampValue:On(e.serializer,t.createTime)});const s=t.data.field(this.expr._fieldPath);return s?ts(s)?m.newValue((function(u,l){if(u.serverTimestampBehavior==="estimate")return{timestampValue:On(u.serializer,zt.fromTimestamp(Xt(l)))};if(u.serverTimestampBehavior==="previous"){const c=Vo(l);if(c)return c}return{nullValue:"NULL_VALUE"}})(e,s)):m.newValue(s):m.pr()}}class Xh{constructor(e){this.expr=e}evaluate(e,t){return m.newValue(this.expr._getValue())}}class Qh{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.cr.map((i=>R(i).evaluate(e,t)));return s.some((i=>i.yr()))?m.mr():m.newValue({arrayValue:{values:s.map((i=>i.value))}})}}function ee(r){return nt(r)?Number(r.doubleValue):Number(r.integerValue)}function Se(r){return BigInt(r.integerValue)}const Zh=BigInt("0x7fffffffffffffff"),ec=-BigInt("0x8000000000000000");class cr{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length>=2,24778);const s=R(this.expr.params[0]).evaluate(e,t),i=R(this.expr.params[1]).evaluate(e,t);let u=this.br(s,i);for(const l of this.expr.params.slice(2)){const c=R(l).evaluate(e,t);u=this.br(u,c)}return u}br(e,t){if(e.yr()||t.yr())return m.mr();if(e.wr()||t.wr())return m.gr();const s=e.value,i=t.value;if(!nt(s)&&!gt(s)||!nt(i)&&!gt(i))return m.mr();if(nt(s)||nt(i)){const u=this.Sr(s,i);return u?m.newValue(u):m.mr()}if(gt(s)&&gt(i)){const u=this.vr(s,i);return u===void 0?m.mr():typeof u=="number"?m.newValue({doubleValue:u}):u<ec||u>Zh?m.mr():m.newValue({integerValue:`${u}`})}return m.mr()}}function Oe(r,e){return re(r)!==re(e)?"TYPE_MISMATCH":_e(r)||_e(e)?"NOT_EQ":ve(r)&&ve(e)?"EQ":ve(r)||ve(e)?"NULL":jn(r)&&jn(e)?(function(s,i){var l,c,g;if(((l=s.values)==null?void 0:l.length)!==((c=i.values)==null?void 0:c.length))return"NOT_EQ";let u=!1;for(let v=0;v<(((g=s.values)==null?void 0:g.length)??0);v++){const P=s.values[v],S=i.values[v];switch(Oe(P,S)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":u=!0;break;default:$(44609,{Dr:P,Cr:S})}}return u?"NULL":"EQ"})(r.arrayValue,e.arrayValue):zr(r)&&zr(e)||_t(r)&&_t(e)?(function(s,i){const u=s.fields||{},l=i.fields||{};if(Br(u)!==Br(l))return"NOT_EQ";let c=!1;for(const g in u)if(u.hasOwnProperty(g)){if(l[g]===void 0)return"NOT_EQ";switch(Oe(u[g],l[g])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":c=!0}}return c?"NULL":"EQ"})(r.mapValue,e.mapValue):(function(s,i){return Wr(s,i,{u:!1,i:!0,o:!0})})(r,e)?"EQ":"NOT_EQ"}class tc extends cr{vr(e,t){return Se(e)+Se(t)}Sr(e,t){return{doubleValue:ee(e)+ee(t)}}}class rc extends cr{constructor(e){super(e),this.expr=e}vr(e,t){return Se(e)-Se(t)}Sr(e,t){return{doubleValue:ee(e)-ee(t)}}}class nc extends cr{constructor(e){super(e),this.expr=e}vr(e,t){return Se(e)*Se(t)}Sr(e,t){return{doubleValue:ee(e)*ee(t)}}}class sc extends cr{constructor(e){super(e),this.expr=e}vr(e,t){const s=Se(t);if(s!==BigInt(0))return Se(e)/s}Sr(e,t){const s=ee(t);return s===0?{doubleValue:Qt(s)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:ee(e)/s}}}class ic extends cr{constructor(e){super(e),this.expr=e}vr(e,t){const s=Se(t);if(s!==BigInt(0))return Se(e)%s}Sr(e,t){const s=ee(t);if(s!==0)return{doubleValue:ee(e)%s}}}class oc{constructor(e){this.expr=e}evaluate(e,t){var u;let s=!1,i=!1;for(const l of this.expr.params){const c=R(l).evaluate(e,t);switch(c.type){case"BOOLEAN":if(!((u=c.value)!=null&&u.booleanValue))return m.newValue(Q);break;case"NULL":i=!0;break;default:s=!0}}return s?m.mr():i?m.gr():m.newValue(he)}}class en{constructor(e){this.expr=e}evaluate(e,t){var i;k(this.expr.params.length===1,9634);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BOOLEAN":return m.newValue({booleanValue:!((i=s.value)!=null&&i.booleanValue)});case"NULL":return m.gr();default:return m.mr()}}}class ac{constructor(e){this.expr=e}evaluate(e,t){var u;let s=!1,i=!1;for(const l of this.expr.params){const c=R(l).evaluate(e,t);switch(c.type){case"BOOLEAN":if((u=c.value)!=null&&u.booleanValue)return m.newValue(he);break;case"NULL":i=!0;break;default:s=!0}}return s?m.mr():i?m.gr():m.newValue(Q)}}class ls{constructor(e){this.expr=e}evaluate(e,t){var u;let s=!1,i=!1;for(const l of this.expr.params){const c=R(l).evaluate(e,t);switch(c.type){case"BOOLEAN":s=ls.xor(s,!!((u=c.value)!=null&&u.booleanValue));break;case"NULL":i=!0;break;default:return m.mr()}}return i?m.gr():m.newValue({booleanValue:s})}static xor(e,t){return(e||t)&&!(e&&t)}}class $o{constructor(e){this.expr=e}evaluate(e,t){var l,c;k(this.expr.params.length===2,55094);let s=!1;const i=R(this.expr.params[0]).evaluate(e,t);switch(i.type){case"NULL":s=!0;break;case"ERROR":case"UNSET":return m.mr()}const u=R(this.expr.params[1]).evaluate(e,t);switch(u.type){case"ARRAY":break;case"NULL":s=!0;break;default:return m.mr()}if(s)return m.gr();for(const g of((c=(l=u.value)==null?void 0:l.arrayValue)==null?void 0:c.values)??[])switch(ve(i.value)&&ve(g)?"EQ":Oe(i.value,g)){case"EQ":return m.newValue(he);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:$(44608,{value:i.value,candidate:g})}return s?m.gr():m.newValue(Q)}}class uc{constructor(e){this.expr=e}evaluate(e,t){return new en(new A("not",[new A("equal_any",this.expr.params)])).evaluate(e,t)}}class lc{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,23322);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"INT":return m.newValue(Q);case"DOUBLE":return m.newValue({booleanValue:isNaN(ee(s.value))});case"NULL":return m.gr();default:return m.mr()}}}class hc{constructor(e){this.expr=e}evaluate(e,t){return k(this.expr.params.length===1,50406),new en(new A("not",[new A("is_nan",this.expr.params)])).evaluate(e,t)}}class cc{constructor(e){this.expr=e}evaluate(e,t){switch(k(this.expr.params.length===1,23123),R(this.expr.params[0]).evaluate(e,t).type){case"NULL":return m.newValue(he);case"UNSET":case"ERROR":return m.mr();default:return m.newValue(Q)}}}class fc{constructor(e){this.expr=e}evaluate(e,t){return k(this.expr.params.length===1,23167),new en(new A("not",[new A("is_null",this.expr.params)])).evaluate(e,t)}}class pc{constructor(e){this.expr=e}evaluate(e,t){return k(this.expr.params.length===1,5228),R(this.expr.params[0]).evaluate(e,t).type==="ERROR"?m.newValue(he):m.newValue(Q)}}class dc{constructor(e){this.expr=e}evaluate(e,t){switch(k(this.expr.params.length===1,6877),R(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return m.mr();case"UNSET":return m.newValue(Q);default:return m.newValue(he)}}}class gc{constructor(e){this.expr=e}evaluate(e,t){var i;k(this.expr.params.length===3,11706);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BOOLEAN":return(i=s.value)!=null&&i.booleanValue?R(this.expr.params[1]).evaluate(e,t):R(this.expr.params[2]).evaluate(e,t);case"NULL":return R(this.expr.params[2]).evaluate(e,t);default:return m.mr()}}}class mc{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((u=>R(u).evaluate(e,t)));let i;for(const u of s)switch(u.type){case"ERROR":case"UNSET":case"NULL":continue;default:i=i===void 0||Re(u.value,i.value)>0?u:i}return i===void 0?m.gr():i}}class _c{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((u=>R(u).evaluate(e,t)));let i;for(const u of s)switch(u.type){case"ERROR":case"UNSET":case"NULL":continue;default:i=i===void 0||Re(u.value,i.value)<0?u:i}return i===void 0?m.gr():i}}class It{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return m.mr()}const i=R(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ERROR":case"UNSET":return m.mr()}return this.Fr(s,i)}}class yc extends It{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return m.newValue(he);if(e.wr()||t.wr()||_e(e.value)||_e(t.value)||re(e.value)!==re(t.value))return m.newValue(Q);switch(Oe(e.value,t.value)){case"EQ":return m.newValue(he);case"NOT_EQ":return m.newValue(Q);case"NULL":return m.gr();default:$(44615,{left:e,right:t})}}}class wc extends It{constructor(e){super(e),this.expr=e}Fr(e,t){switch(Oe(e.value,t.value)){case"EQ":return m.newValue(Q);case"NOT_EQ":case"TYPE_MISMATCH":return m.newValue(he);case"NULL":return m.gr();default:$(44614,{left:e,right:t})}}}class vc extends It{constructor(e){super(e),this.expr=e}Fr(e,t){return re(e.value)!==re(t.value)||_e(e.value)||_e(t.value)?m.newValue(Q):m.newValue({booleanValue:Re(e.value,t.value)<0})}}class Ec extends It{constructor(e){super(e),this.expr=e}Fr(e,t){return re(e.value)!==re(t.value)||_e(e.value)||_e(t.value)?m.newValue(Q):Oe(e.value,t.value)==="EQ"?m.newValue(he):m.newValue({booleanValue:Re(e.value,t.value)<0})}}class Tc extends It{constructor(e){super(e),this.expr=e}Fr(e,t){return re(e.value)!==re(t.value)||_e(e.value)||_e(t.value)?m.newValue(Q):m.newValue({booleanValue:Re(e.value,t.value)>0})}}class Ic extends It{constructor(e){super(e),this.expr=e}Fr(e,t){return re(e.value)!==re(t.value)||_e(e.value)||_e(t.value)?m.newValue(Q):Oe(e.value,t.value)==="EQ"?m.newValue(he):m.newValue({booleanValue:Re(e.value,t.value)>0})}}class Ac{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class bc{constructor(e){this.expr=e}evaluate(e,t){var i;k(this.expr.params.length===1,216);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return m.gr();case"ARRAY":{const u=((i=s.value.arrayValue)==null?void 0:i.values)??[];return m.newValue({arrayValue:{values:[...u].reverse()}})}default:return m.mr()}}}class Vc{constructor(e){this.expr=e}evaluate(e,t){return k(this.expr.params.length===2,52884),new $o(new A("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class Pc{constructor(e){this.expr=e}evaluate(e,t){var g,v,P,S;k(this.expr.params.length===2,1392);let s=!1;const i=R(this.expr.params[0]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return m.mr()}const u=R(this.expr.params[1]).evaluate(e,t);switch(u.type){case"ARRAY":break;case"NULL":s=!0;break;default:return m.mr()}if(s)return m.gr();const l=((v=(g=u.value)==null?void 0:g.arrayValue)==null?void 0:v.values)??[],c=((S=(P=i.value)==null?void 0:P.arrayValue)==null?void 0:S.values)??[];for(const N of l){let D=!1;s=!1;for(const M of c){switch(ve(N)&&ve(M)?"EQ":Oe(N,M)){case"EQ":D=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:$(44613,{value:M,search:N})}if(D)break}if(!D)return m.newValue(Q)}return m.newValue(he)}}class Sc{constructor(e){this.expr=e}evaluate(e,t){var g,v,P,S;k(this.expr.params.length===2,2680);let s=!1;const i=R(this.expr.params[0]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return m.mr()}const u=R(this.expr.params[1]).evaluate(e,t);switch(u.type){case"ARRAY":break;case"NULL":s=!0;break;default:return m.mr()}if(s)return m.gr();const l=((v=(g=u.value)==null?void 0:g.arrayValue)==null?void 0:v.values)??[],c=((S=(P=i.value)==null?void 0:P.arrayValue)==null?void 0:S.values)??[];for(const N of c)for(const D of l)switch(ve(N)&&ve(D)?"EQ":Oe(N,D)){case"EQ":return m.newValue(he);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:$(60403,{value:N,search:D})}return s?m.gr():m.newValue(Q)}}class Rc{constructor(e){this.expr=e}evaluate(e,t){var i,u,l;k(this.expr.params.length===1,38605);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return m.gr();case"ARRAY":return m.newValue({integerValue:`${((l=(u=(i=s.value)==null?void 0:i.arrayValue)==null?void 0:u.values)==null?void 0:l.length)??0}`});default:return m.mr()}}}class Nc{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class xc{constructor(e){this.expr=e}evaluate(e,t){var i,u;k(this.expr.params.length===1,1508);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return m.gr();case"BYTES":{const l=(i=s.value)==null?void 0:i.bytesValue;if(typeof l=="string"){const c=me.fromBase64String(l).toUint8Array();return c.reverse(),m.newValue({bytesValue:me.fromUint8Array(c).toBase64()})}return m.newValue({bytesValue:new Uint8Array(l).reverse()})}case"STRING":{const l=(u=s.value)==null?void 0:u.stringValue,c=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(l),g=Array.from(c,(v=>v.segment)).reverse();return m.newValue({stringValue:g.join("")})}default:return m.mr()}}}class Cc{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class kc{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Oc{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,19400);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return m.gr();case"STRING":{const i=(function(l){let c=0;for(let g=0;g<l.length;g++){const v=l.codePointAt(g);if(v===void 0)return;if(v<=65535)if(v>=55296&&v<=57343)if(v<=56319){const P=l.codePointAt(g+1);P!==void 0&&P>=56320&&P<=57343?(c+=1,g++):c+=1}else c+=1;else c+=1;else{if(!(v<=1114111))return;c+=1,g++}}return c})(s.value.stringValue);return i===void 0?m.mr():m.newValue({integerValue:i})}default:return m.mr()}}}class Lc{constructor(e){this.expr=e}evaluate(e,t){var i,u;k(this.expr.params.length===1,8486);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BYTES":{const l=(i=s.value)==null?void 0:i.bytesValue;return typeof l=="string"?m.newValue({integerValue:me.fromBase64String(l).toUint8Array().length}):m.newValue({integerValue:new Uint8Array(l).length})}case"STRING":{const l=(function(g){let v=0;for(let P=0;P<g.length;P++){const S=g.codePointAt(P);if(S===void 0)return;if(S>=55296&&S<=57343){if(!(S<=56319))return;{const N=g.codePointAt(P+1);if(N===void 0||!(N>=56320&&N<=57343))return;v+=4,P++}}else if(S<=127)v+=1;else if(S<=2047)v+=2;else if(S<=65535)v+=3;else{if(!(S<=1114111))return;v+=4,P++}}return v})((u=s.value)==null?void 0:u.stringValue);return l===void 0?m.mr():m.newValue({integerValue:l})}case"NULL":return m.gr();default:return m.mr()}}}class At{constructor(e){this.expr=e}evaluate(e,t){var l,c;k(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let s=!1;const i=R(this.expr.params[0]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":s=!0;break;default:return m.mr()}const u=R(this.expr.params[1]).evaluate(e,t);switch(u.type){case"STRING":break;case"NULL":s=!0;break;default:return m.mr()}return s?m.gr():this.Or((l=i.value)==null?void 0:l.stringValue,(c=u.value)==null?void 0:c.stringValue)}}class Dc extends At{Or(e,t){try{const s=(function(l){let c="";for(let g=0;g<l.length;g++){const v=l.charAt(g);switch(v){case"_":c+=".";break;case"%":c+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":c+="\\"+v;break;default:c+=v}}return"^"+c+"$"})(t),i=Gn.compile(s);return m.newValue({booleanValue:i.matches(e)})}catch(s){return Zr(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${s}`),m.mr()}}}class Uc extends At{Or(e,t){try{const s=Gn.compile(t);return m.newValue({booleanValue:s.test(e)})}catch{return Zr(`Invalid regex pattern found in regex_contains: ${t}, returning error`),m.mr()}}}class Mc extends At{Or(e,t){try{return m.newValue({booleanValue:Gn.compile(t).matches(e)})}catch{return Zr(`Invalid regex pattern found in regex_match: ${t}, returning error`),m.mr()}}}class Fc extends At{Or(e,t){return m.newValue({booleanValue:e.includes(t)})}}class Bc extends At{Or(e,t){return m.newValue({booleanValue:e.startsWith(t)})}}class jc extends At{Or(e,t){return m.newValue({booleanValue:e.endsWith(t)})}}class $c{constructor(e){this.expr=e}evaluate(e,t){var i,u;k(this.expr.params.length===1,29079);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return m.newValue({stringValue:(u=(i=s.value)==null?void 0:i.stringValue)==null?void 0:u.toLowerCase()});case"NULL":return m.gr();default:return m.mr()}}}class Hc{constructor(e){this.expr=e}evaluate(e,t){var i,u;k(this.expr.params.length===1,60487);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return m.newValue({stringValue:(u=(i=s.value)==null?void 0:i.stringValue)==null?void 0:u.toUpperCase()});case"NULL":return m.gr();default:return m.mr()}}}class qc{constructor(e){this.expr=e}evaluate(e,t){var i,u;k(this.expr.params.length===1,28544);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return m.newValue({stringValue:(u=(i=s.value)==null?void 0:i.stringValue)==null?void 0:u.trim()});case"NULL":return m.gr();default:return m.mr()}}}class Wc{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((l=>R(l).evaluate(e,t)));let i="",u=!1;for(const l of s)switch(l.type){case"STRING":i+=l.value.stringValue;break;case"NULL":u=!0;break;default:return m.mr()}return u?m.gr():m.newValue({stringValue:i})}}class zc{constructor(e){this.expr=e}evaluate(e,t){var l,c,g,v;k(this.expr.params.length===2,4483);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"UNSET":return m.pr();case"MAP":break;default:return m.mr()}const i=R(this.expr.params[1]).evaluate(e,t);if(i.type!=="STRING")return m.mr();const u=(v=(c=(l=s.value)==null?void 0:l.mapValue)==null?void 0:c.fields)==null?void 0:v[(g=i.value)==null?void 0:g.stringValue];return u===void 0?m.pr():m.newValue(u)}}class hs{constructor(e){this.expr=e}evaluate(e,t){var v,P;k(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let s=!1;const i=R(this.expr.params[0]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":s=!0;break;default:return m.mr()}const u=R(this.expr.params[1]).evaluate(e,t);switch(u.type){case"VECTOR":break;case"NULL":s=!0;break;default:return m.mr()}if(s)return m.gr();const l=$n(i.value),c=$n(u.value);if(l===void 0||c===void 0||((v=l.values)==null?void 0:v.length)!==((P=c.values)==null?void 0:P.length))return m.mr();const g=this.Mr(l,c);return g===void 0||isNaN(g)?m.mr():m.newValue({doubleValue:g})}}class Gc extends hs{Mr(e,t){const s=(e==null?void 0:e.values)??[],i=(t==null?void 0:t.values)??[];if(s.length===0)return;let u=0,l=0,c=0;for(let v=0;v<s.length;v++){if(!Et(s[v])||!Et(i[v]))return;const P=ee(s[v]),S=ee(i[v]);u+=P*S,l+=P*P,c+=S*S}const g=Math.sqrt(l)*Math.sqrt(c);if(g!==0)return 1-Math.max(-1,Math.min(1,u/g))}}class Kc extends hs{Mr(e,t){const s=(e==null?void 0:e.values)??[],i=(t==null?void 0:t.values)??[];if(s.length===0)return 0;let u=0;for(let l=0;l<s.length;l++){if(!Et(s[l])||!Et(i[l]))return;u+=ee(s[l])*ee(i[l])}return u}}class Jc extends hs{Mr(e,t){const s=(e==null?void 0:e.values)??[],i=(t==null?void 0:t.values)??[];if(s.length===0)return 0;let u=0;for(let l=0;l<s.length;l++){if(!Et(s[l])||!Et(i[l]))return;const c=ee(s[l]),g=ee(i[l]);u+=Math.pow(c-g,2)}return Math.sqrt(u)}}class Yc{constructor(e){this.expr=e}evaluate(e,t){var i;k(this.expr.params.length===1,39044);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":{const u=$n(s.value);return m.newValue({integerValue:((i=u==null?void 0:u.values)==null?void 0:i.length)??0})}case"NULL":return m.gr();default:return m.mr()}}}const rr=BigInt(-62135596800),nr=BigInt(253402300799),Kr=BigInt(1e3),We=BigInt(1e6),Xc=rr*Kr,Qc=nr*Kr+BigInt(999),Zc=rr*We,ef=nr*We+BigInt(999999);function cs(r){return r>=Zc&&r<=ef}function Ho(r){return r>=rr&&r<=nr}function sr(r,e){const t=BigInt(r);return!(t<rr||t>nr)&&!(e<0||e>=1e9)&&(t!==rr||e===0)&&!(t===nr&&e>999999999)}function qo(r,e){return e<0?{seconds:r-1,nanos:e+1e9}:{seconds:r,nanos:e}}function fs(r){return BigInt(r.seconds)*We+BigInt(Math.trunc(r.nanoseconds/1e3))}class ps{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"INT":return this.toTimestamp(BigInt(s.value.integerValue));case"NULL":return m.gr();default:return m.mr()}}}class tf extends ps{toTimestamp(e){if(!cs(e))return m.mr();let t=Number(e/We),s=Number(e%We*BigInt(1e3));const i=qo(t,s);return t=i.seconds,s=i.nanos,sr(t,s)?m.newValue({timestampValue:{seconds:t,nanos:s}}):m.mr()}}class rf extends ps{toTimestamp(e){if(!(function(l){return l>=Xc&&l<=Qc})(e))return m.mr();let t=Number(e/Kr),s=Number(e%Kr*BigInt(1e6));const i=qo(t,s);return t=i.seconds,s=i.nanos,sr(t,s)?m.newValue({timestampValue:{seconds:t,nanos:s}}):m.mr()}}class nf extends ps{toTimestamp(e){if(!Ho(e))return m.mr();const t=Number(e);return m.newValue({timestampValue:{seconds:t,nanos:0}})}}class ds{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const s=R(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":return m.gr();default:return m.mr()}const i=No(s.value.timestampValue);return sr(i.seconds,i.nanoseconds)?this.Nr(i):m.mr()}}class sf extends ds{Nr(e){const t=fs(e);return cs(t)?m.newValue({integerValue:`${t.toString()}`}):m.mr()}}class of extends ds{Nr(e){const t=fs(e),s=t/BigInt(1e3),i=t%BigInt(1e3);return s>BigInt(0)||i===BigInt(0)?m.newValue({integerValue:s.toString()}):m.newValue({integerValue:(s-BigInt(1)).toString()})}}class af extends ds{Nr(e){const t=BigInt(e.seconds);return Ho(t)?m.newValue({integerValue:t.toString()}):m.mr()}}class Wo{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let s=!1;const i=R(this.expr.params[0]).evaluate(e,t);switch(i.type){case"TIMESTAMP":break;case"NULL":s=!0;break;default:return m.mr()}const u=R(this.expr.params[1]).evaluate(e,t);let l;switch(u.type){case"STRING":if(l=(function(Te){switch(Te){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(u.value.stringValue),l===void 0)return m.mr();break;case"NULL":s=!0;break;default:return m.mr()}const c=R(this.expr.params[2]).evaluate(e,t);switch(c.type){case"INT":break;case"NULL":s=!0;break;default:return m.mr()}if(s)return m.gr();const g=BigInt(c.value.integerValue);let v;try{switch(l){case"microsecond":v=g;break;case"millisecond":v=g*BigInt(1e3);break;case"second":v=g*BigInt(1e6);break;case"minute":v=g*BigInt(6e7);break;case"hour":v=g*BigInt(36e8);break;case"day":v=g*BigInt(864e8);break;default:return m.mr()}if(l!=="microsecond"&&g!==BigInt(0)&&v/g!==BigInt(this.Lr(l)))return m.mr()}catch(oe){return Zr(`Error during timestamp arithmetic: ${oe}`),m.mr()}const P=No(i.value.timestampValue);if(!sr(P.seconds,P.nanoseconds))return m.mr();const S=fs(P),N=this.Br(S,v);if(!cs(N))return m.mr();const D=Number(N/We),M=N%We,q=Number((M<0?M+We:M)*BigInt(1e3)),H=M<0?D-1:D;return sr(H,q)?m.newValue({timestampValue:{seconds:H,nanos:q}}):m.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class uf extends Wo{Br(e,t){return e+t}}class lf extends Wo{Br(e,t){return e-t}}function hf(r){return r instanceof zh}function cf(r){const e=(function(s){for(let i=s.stages.length-1;i>=0;i--){const u=s.stages[i];if(u instanceof Wh)return u.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(r);return(t,s)=>{for(const i of e){const u=Wi(R(i.expr).evaluate({serializer:r.serializer},t)),l=Wi(R(i.expr).evaluate({serializer:r.serializer},s)),c=Re(u||qr,l||qr);if(c!==0)return i.direction==="ascending"?c:-c}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t,s,i,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=u,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,u){const l=Date.now()+s,c=new gs(e,t,l,i,u);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dn(){return typeof document<"u"?document:null}var zi;(function(r){r.Default="default",r.Cache="cache"})(zi||(zi={}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo=class{constructor(e,t,s,i,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new de(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ff(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(is("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},ff=class extends zo{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="AsyncQueue";class Ki{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new fh(this,"async_queue_retry"),this.Hc=()=>{const s=Dn();s&&we(Gi,"Visibility state changed to "+s.visibilityState),this.Ht.$t()},this.Jc=e;const t=Dn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=Dn();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise((()=>{}));const t=new Gt;return this.Zc((()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.$c.push(e),this.Xc())))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!gh(e))throw e;we(Gi,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt((()=>this.Xc()))}}Zc(e){const t=this.Jc.then((()=>(this.Gc=!0,e().catch((s=>{throw this.Wc=s,this.Gc=!1,Io("INTERNAL UNHANDLED ERROR: ",Ji(s)),s})).then((s=>(this.Gc=!1,s))))));return this.Jc=t,t}enqueueAfterDelay(e,t,s){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const i=gs.createAndSchedule(this,e,t,s,(u=>this.el(u)));return this.Qc.push(i),i}Yc(){this.Wc&&$(47125,{tl:Ji(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then((()=>{this.Qc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()}))}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function Ji(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class pf extends yh{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Ki,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ki(e),this._firestoreClient=void 0,await e}}}class Sr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yt extends zo{constructor(e,t,s,i,u,l){super(e,t,s,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new kr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(is("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new C(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=yt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}yt._jsonSchemaVersion="firestore/documentSnapshot/1.0",yt._jsonSchema={type:K("string",yt._jsonSchemaVersion),bundleSource:K("string","DocumentSnapshot"),bundleName:K("string"),bundle:K("string")};class kr extends yt{data(e={}){return super.data(e)}}class Kt{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Sr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new kr(this._firestore,this._userDataWriter,s.key,s,new Sr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new C(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,u){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map((c=>{hf(i._snapshot.query)?cf(i._snapshot.query):Zl(i.query._query);const g=new kr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Sr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:g,oldIndex:-1,newIndex:l++}}))}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>u||c.type!==3)).map((c=>{const g=new kr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Sr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let v=-1,P=-1;return c.type!==0&&(v=l.indexOf(c.doc.key),l=l.delete(c.doc.key)),c.type!==1&&(l=l.add(c.doc),P=l.indexOf(c.doc.key)),{type:df(c.type),doc:g,oldIndex:v,newIndex:P}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new C(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Kt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Rl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],i=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),i.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function df(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:r})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt._jsonSchemaVersion="firestore/querySnapshot/1.0",Kt._jsonSchema={type:K("string",Kt._jsonSchemaVersion),bundleSource:K("string","QuerySnapshot"),bundleName:K("string"),bundle:K("string")};const Yi="@firebase/firestore",Xi="4.17.2";(function(e,t=!0){Vl(Xr),Ge(new ze("firestore",((s,{instanceIdentifier:i,options:u})=>{const l=s.getProvider("app").getImmediate(),c=new pf(new ah(s.getProvider("auth-internal")),new hh(l,s.getProvider("app-check-internal")),Hl(l,i),l);return u={useFetchStreams:t,...u},c._setSettings(u),c}),"PUBLIC").setMultipleInstances(!0)),xe(Yi,Xi,e),xe(Yi,Xi,"esm2020")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Map,mf={activated:!1,tokenObservers:[]};function Ee(r){return gf.get(r)||{...mf}}const Qi={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,s,i,u){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=u,this.pending=null,this.nextErrorWaitInterval=i,i>u)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new mi,this.pending.promise.catch(t=>{}),await yf(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new mi,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function yf(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Jr=new Tt("appCheck","AppCheck",wf);function Go(r){if(!Ee(r).activated)throw Jr.create("use-before-activation",{appName:r.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="firebase-app-check-database",Ef=1,qn="firebase-app-check-store";let Rr=null;function Tf(){return Rr||(Rr=new Promise((r,e)=>{try{const t=indexedDB.open(vf,Ef);t.onsuccess=s=>{r(s.target.result)},t.onerror=s=>{var i;e(Jr.create("storage-open",{originalErrorMessage:(i=s.target.error)==null?void 0:i.message}))},t.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(qn,{keyPath:"compositeKey"})}}}catch(t){e(Jr.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),Rr)}function If(r,e){return Af(bf(r),e)}async function Af(r,e){const s=(await Tf()).transaction(qn,"readwrite"),u=s.objectStore(qn).put({compositeKey:r,value:e});return new Promise((l,c)=>{u.onsuccess=g=>{l()},s.onerror=g=>{var v;c(Jr.create("storage-set",{originalErrorMessage:(v=g.target.error)==null?void 0:v.message}))}})}function bf(r){return`${r.options.appId}-${r.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new Yr("@firebase/app-check");function Zi(r,e){return oo()?If(r,e).catch(t=>{Wn.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf={error:"UNKNOWN_ERROR"};function Pf(r){return Kn.encodeString(JSON.stringify(r),!1)}async function zn(r,e=!1,t=!1){const s=r.app;Go(s);const i=Ee(s);let u=i.token,l;if(u&&!$t(u)&&(i.token=void 0,u=void 0),!u){const v=await i.cachedTokenPromise;v&&($t(v)?u=v:await Zi(s,void 0))}if(!e&&u&&$t(u))return{token:u.token};let c=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),c=!0),u=await Ee(s).exchangeTokenPromise}catch(v){v.code==="appCheck/throttled"||v.code==="appCheck/initial-throttle"?Wn.warn(v.message):t&&Wn.error(v),l=v}let g;return u?l?$t(u)?g={token:u.token,internalError:l}:g=to(l):(g={token:u.token},i.token=u,await Zi(s,u)):g=to(l),c&&xf(s,g),g}async function Sf(r){const e=r.app;Go(e);const{provider:t}=Ee(e);{const{token:s}=await t.getToken(!0);return{token:s}}}function Rf(r,e,t,s){const{app:i}=r,u=Ee(i),l={next:t,error:s,type:e};if(u.tokenObservers=[...u.tokenObservers,l],u.token&&$t(u.token)){const c=u.token;Promise.resolve().then(()=>{t({token:c.token}),eo(r)}).catch(()=>{})}u.cachedTokenPromise.then(()=>eo(r))}function Ko(r,e){const t=Ee(r),s=t.tokenObservers.filter(i=>i.next!==e);s.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=s}function eo(r){const{app:e}=r,t=Ee(e);let s=t.tokenRefresher;s||(s=Nf(r),t.tokenRefresher=s),!s.isRunning()&&t.isTokenAutoRefreshEnabled&&s.start()}function Nf(r){const{app:e}=r;return new _f(async()=>{const t=Ee(e);let s;if(t.token?s=await zn(r,!0):s=await zn(r),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const t=Ee(e);if(t.token){let s=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-300*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Qi.RETRIAL_MIN_WAIT,Qi.RETRIAL_MAX_WAIT)}function xf(r,e){const t=Ee(r).tokenObservers;for(const s of t)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function $t(r){return r.expireTimeMillis-Date.now()>0}function to(r){return{token:Pf(Vf),error:r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Ee(this.app);for(const t of e)Ko(this.app,t.next);return Promise.resolve()}}function kf(r,e){return new Cf(r,e)}function Of(r){return{getToken:e=>zn(r,e),getLimitedUseToken:()=>Sf(r),addTokenListener:e=>Rf(r,"INTERNAL",e),removeTokenListener:e=>Ko(r.app,e)}}const Lf="@firebase/app-check",Df="0.13.1";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="app-check",ro="app-check-internal";function Mf(){Ge(new ze(Uf,r=>{const e=r.getProvider("app").getImmediate(),t=r.getProvider("heartbeat");return kf(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((r,e,t)=>{r.getProvider(ro).initialize()})),Ge(new ze(ro,r=>{const e=r.getProvider("app-check").getImmediate();return Of(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),xe(Lf,Df)}Mf();

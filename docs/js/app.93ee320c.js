(function(e){function t(t){for(var r,o,s=t[0],i=t[1],u=t[2],d=0,l=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-dd321f64":"8764ef95","chunk-160a022c":"daf16299","chunk-4d790482":"9ebd1dd9","chunk-635ac1ef":"6eedddf3","chunk-6c5d9fba":"248365b7","chunk-2d0c470d":"22b4f55c","chunk-da2d0610":"fc9f7f08","chunk-2d0a406d":"2e1ea0b0","chunk-2d0bacb6":"3a5cc5e1","chunk-320202cd":"4d80f0e3","chunk-df904a92":"74c837d7"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-dd321f64":1,"chunk-160a022c":1,"chunk-4d790482":1,"chunk-635ac1ef":1,"chunk-da2d0610":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-dd321f64":"0b7ee103","chunk-160a022c":"e0dd71da","chunk-4d790482":"ac2423a8","chunk-635ac1ef":"c9bf4628","chunk-6c5d9fba":"31d6cfe0","chunk-2d0c470d":"31d6cfe0","chunk-da2d0610":"c316399d","chunk-2d0a406d":"31d6cfe0","chunk-2d0bacb6":"31d6cfe0","chunk-320202cd":"31d6cfe0","chunk-df904a92":"31d6cfe0"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===r||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("router-view")],1)],1)},a=[],c=n("2877"),s=n("6544"),i=n.n(s),u=n("7496"),d={},l=Object(c["a"])(d,o,a,!1,null,null,null),f=l.exports;i()(l,{VApp:u["a"]});n("d3b7");var p=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-content",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[e._v("Corpus Harvester")])],1),n("v-form",{on:{submit:function(t){return t.preventDefault(),e.connect(t)}}},[n("v-card-text",[n("v-text-field",{attrs:{autofocus:"",clearable:"","persistent-hint":"",hint:"URL of the Harvester server",label:"URL","error-messages":e.$store.state.socket.error?e.error_msg:"",prefix:"ws://",disabled:e.$store.state.socket.connecting},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",loading:e.$store.state.socket.connecting},on:{click:e.connect}},[e._v("Connect")])],1)],1)],1)],1)],1)],1)],1)},g=[],k=(n("ac1f"),n("1276"),{data:function(){return{url:"",error_msg:"Can't connect to given socket"}},name:"Login",mounted:function(){void 0!==localStorage.harvester_socket&&(this.url=localStorage.harvester_socket.split("ws://")[1],this.connect())},methods:{connect:function(){this.$store.dispatch("connect_server",this.url)}}}),_=k,b=n("8336"),v=n("b0af"),m=n("99d9"),y=n("62ad"),w=n("a523"),O=n("a75b"),C=n("4bd4"),S=n("0fd9"),j=n("2fa4"),E=n("8654"),x=n("71d9"),T=n("2a7f"),P=Object(c["a"])(_,h,g,!1,null,null,null),q=P.exports;i()(P,{VBtn:b["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["c"],VCol:y["a"],VContainer:w["a"],VContent:O["a"],VForm:C["a"],VRow:S["a"],VSpacer:j["a"],VTextField:E["a"],VToolbar:x["a"],VToolbarTitle:T["a"]}),r["a"].use(p["a"]);var V=[{path:"/login",name:"Login",component:q},{path:"/",redirect:"/login"},{path:"/files",name:"Files",component:function(){return Promise.all([n.e("chunk-dd321f64"),n.e("chunk-635ac1ef"),n.e("chunk-da2d0610"),n.e("chunk-2d0a406d")]).then(n.bind(null,"054f"))}},{path:"/download",name:"Download",component:function(){return Promise.all([n.e("chunk-dd321f64"),n.e("chunk-635ac1ef"),n.e("chunk-da2d0610"),n.e("chunk-2d0bacb6")]).then(n.bind(null,"3971"))}},{path:"/corpus",name:"Corpus",component:function(){return Promise.all([n.e("chunk-dd321f64"),n.e("chunk-635ac1ef"),n.e("chunk-6c5d9fba"),n.e("chunk-2d0c470d")]).then(n.bind(null,"3b9a"))}},{path:"/logs",name:"Logs",component:function(){return Promise.all([n.e("chunk-dd321f64"),n.e("chunk-4d790482")]).then(n.bind(null,"bbae"))}},{path:"/settings",name:"Settings",component:function(){return Promise.all([n.e("chunk-dd321f64"),n.e("chunk-160a022c")]).then(n.bind(null,"26d3"))}},{path:"/info",name:"Info",component:function(){return Promise.all([n.e("chunk-dd321f64"),n.e("chunk-6c5d9fba"),n.e("chunk-320202cd")]).then(n.bind(null,"2469"))}},{path:"/team",name:"Team",component:function(){return Promise.all([n.e("chunk-dd321f64"),n.e("chunk-df904a92")]).then(n.bind(null,"0767"))}}],z=new p["a"]({mode:"history",base:"/",routes:V}),L=z,$=(n("4de4"),n("7db0"),n("4160"),n("d81d"),n("b0c0"),n("b64b"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("2909")),A=n("2f62"),N=n("4487"),M=n.n(N);r["a"].use(A["a"]);var R=new A["a"].Store({state:{home_page:"Files",redirect_page:void 0,socket:{url:void 0,port:80,is_connected:!1,connecting:!1,error:!1},tokenized_request:{},first_init_done:!1,notifications:[],builders:{requests:{web:[],db:[]},number:{web:void 0,db:void 0},disabled:{web:!1,db:!1},files:{web:[],db:[]}},corpuses:{results:[],search_text:"",order:"date_desc",disabled:!1},logs:{unread:0,messages:[]},logger_settings:{level:void 0,output:void 0,output_path:void 0},storage:{path:void 0,file_server_port:void 0},apis:[]},getters:{api_types:function(e){return Object($["a"])(new Set(e.apis.map((function(e){return e.api_type}))))},api_by_name:function(e){return function(t){return e.apis.find((function(e){return e.name===t}))}},file_server_url:function(e){return"http://"+e.socket.url+":"+e.storage.file_server_port+"/"},full_file_server_url:function(e,t){return function(e){return t.file_server_url+e}}},mutations:{SOCKET_ONOPEN:function(e,t){r["a"].prototype.$socket=t.currentTarget;var n=/^ws:\/\/([^:/]+)(:(\d+))*\/*$/g,o=n.exec(t.currentTarget.url);e.socket.url=o[1],void 0!==o[3]&&(e.socket.port=o[3]),localStorage.harvester_socket=t.currentTarget.url,e.socket.is_connected=!0,e.socket.connecting=!1,e.socket.error=!1,L.push({name:void 0!==e.redirect_page?e.redirect_page:e.home_page})},SOCKET_ONCLOSE:function(e){e.socket.is_connected=!1,e.socket.connecting=!1,e.socket.url=void 0,e.socket.port=80},SOCKET_ONERROR:function(e,t){console.error(e,t)},SOCKET_ONMESSAGE:function(e,t){if(void 0!==t.type){switch(t.type){case"refresh_apis":e.notifications.push({msg:"APIs have been refreshed, beware of incompatibilities with your current selections",color:void 0,dark:!0}),e.apis=t.data;break;case"get_apis":e.apis=t.data;break;case"logger":e.logs.messages.push(t.data.message),e.logs.unread++;break;case"get_logger_infos":e.logger_settings.level=t.data.level,e.logger_settings.output=t.data.output,e.logger_settings.output_path=t.data.output_path;break;case"get_storage_infos":e.storage.path=t.data.storage_path,e.storage.file_server_port=t.data.port;break;case"api_builder_query":t.data.is_web?e.builders.files.web=t.data.files:e.builders.files.db=t.data.files;break;case"get_corpuses":e.corpuses.results=t.data.corpuses;break;case"set_corpus_title":void 0!==t.type&&"error"!==t.type&&e.corpuses.results.forEach((function(e){e.id===t.data.id&&(e.title=t.data.title)}));break;case"delete_corpus":void 0!==t.type&&"error"!==t.type&&(e.corpuses.results=e.corpuses.results.filter((function(e){return e.id!==t.data.id})));break;case"export_corpus":void 0!==t.type&&"error"!==t.type&&e.corpuses.results.forEach((function(e){e.id===t.data.id&&(e.extraction_path=t.data.path,e.extraction_size=t.data.size)})),e.notifications.push({msg:"Corpus #"+t.data.id+" has been successfully exported, you can now download it",color:"green",dark:!0});break;default:break}void 0!==t.token&&t.token in e.tokenized_request&&(void 0!==e.tokenized_request[t.token]&&e.tokenized_request[t.token](t),delete e.tokenized_request[t.token])}},set_socket_connecting:function(e,t){e.socket.connecting=t},set_first_init_done:function(e,t){e.first_init_done=t},set_redirect_page:function(e,t){e.redirect_page=t},clear_unread_logs:function(e){e.logs.unread=0},add_tokenized_request:function(e,t){var n=t.callback,r=t.token;e.tokenized_request[r]=n},clear_state:function(e){e.redirect_page=void 0,e.tokenized_request={},e.logs={unread:0,messages:[]},e.logger_settings={level:void 0,output:void 0,output_path:void 0},e.storage={path:void 0},e.apis=void 0,localStorage.harvester_socket=void 0},add_notification:function(e,t){e.notifications.push({msg:t,color:void 0,dark:!0})},add_custom_notification:function(e,t){var n=t.msg,r=t.color,o=t.dark;e.notifications.push({msg:n,color:r,dark:o})},add_success_notification:function(e,t){e.notifications.push({msg:t,color:"green",dark:!0})},add_error_notification:function(e,t){e.notifications.push({msg:t,color:"red",dark:!0})},pop_notification:function(e){e.notifications.shift()}},actions:{send_obj:function(e,t){r["a"].prototype.$socket.sendObj(t)},send_request:function(e,t){var n=t.type,r=t.data,o={request:n};0!==Object.keys(r).length&&(o["data"]=r),e.dispatch("send_obj",o)},send_tokenized_request:function(e,t){var n=t.type,r=t.data,o=t.callback,a={request:n,token:M.a.generate(7)};0!==Object.keys(r).length&&(a["data"]=r),e.commit("add_tokenized_request",{callback:o,token:a.token}),e.dispatch("send_obj",a)},connect_server:function(e,t){e.commit("set_socket_connecting",!0),r["a"].prototype.$connect("ws://"+t)},disconnect_server:function(e){e.commit("clear_state"),r["a"].prototype.$disconnect(),L.push({name:"Login"})}},modules:{}}),F=n("f309");r["a"].use(F["a"]);var K=new F["a"]({}),B=(n("d5e8"),n("5363"),n("b408")),D=n.n(B);r["a"].use(D.a,"ws://localhost:9002",{store:R,format:"json",connectManually:!0}),r["a"].config.productionTip=!1,new r["a"]({router:L,store:R,vuetify:K,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.93ee320c.js.map
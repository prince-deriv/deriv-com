(self.webpackChunkderiv_com=self.webpackChunkderiv_com||[]).push([[5394,9158,7823],{88980:function(e,t,n){"use strict";n.d(t,{u:function(){return r}});var i=n(67294),a=n(44845),r=function(){var e=i.useState(!1),t=e[0],n=e[1],r=(0,a.jU)()&&window.LC_API||{},c=i.useState(!1),o=c[0],l=c[1],d=new URLSearchParams((0,a.jU)()&&window.location.search||"").get("is_livechat_open");return i.useEffect((function(){var e=null,t=null;if((0,a.jU)()){var i=(0,a.ge)();e=setInterval((function(){var e=(0,a.KR)(i);l(!!e)}),1e3),t=setTimeout((function(){var e,t;e=function(){window.LiveChatWidget.on("ready",(function(){n(!0),"true"===(null==d?void 0:d.toLowerCase())&&window.LC_API.open_chat_window()}))},(t=document.createElement("script")).innerHTML='\n            window.__lc = window.__lc || {};\n            window.__lc.license = 12049137;\n            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))\n        ',document.body.appendChild(t),e&&e()}),2e3)}return function(){clearInterval(e),clearTimeout(t)}}),[]),i.useEffect((function(){if((0,a.jU)()){var e=(0,a.ge)();t&&window.LiveChatWidget.on("ready",(function(){var t;window.LC_API.open_chat_window(),window.LC_API.hide_chat_window();var n=(0,a.$Z)(e),i=(0,a.KR)(e),r=new URLSearchParams(window.location.search),c=n||{},l=c.utm_source,d=c.utm_medium,m=c.utm_campaign,u=i||{},s=u.loginid,w=u.email,g=u.landing_company_shortcode,p=u.currency,h=u.residence,_=u.first_name,f=u.last_name,y={is_logged_in:o,loginid:null!=s?s:"",landing_company_shortcode:null!=g?g:"",currency:null!=p?p:"",residence:null!=h?h:"",email:null!=w?w:"",platform:null!==(t=r.get("platform"))&&void 0!==t?t:"",utm_source:null!=l?l:"",utm_medium:null!=d?d:"",utm_campaign:null!=m?m:""};window.LiveChatWidget.call("set_session_variables",y),o?(w&&window.LiveChatWidget.call("set_customer_email",w),_&&f&&window.LiveChatWidget.call("set_customer_name",_+" "+f)):window.LC_API.on_chat_ended=function(){window.LiveChatWidget.call("set_customer_email"," "),window.LiveChatWidget.call("set_customer_name"," ")};var I=r.get("is_livechat_open");"true"===(null==I?void 0:I.toLowerCase())&&window.LC_API.open_chat_window(),window.LiveChatWidget.on("new_event",(function(e){e.greeting&&window.LC_API.open_chat_window()}))}))}}),[o,t]),[t,r]}},1517:function(e,t,n){"use strict";n.d(t,{t:function(){return a}});var i=n(67294),a=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1];return(0,i.useEffect)((function(){n(!0)}),[]),[t]}},2530:function(e,t,n){"use strict";n.d(t,{d:function(){return p}});var i=n(67294),a=n(50009),r=n(69158),c=n(77823),o=n(10667),l=n(68838),d=n(47009),m=n(82081),u=n(86299),s=a.ZP.div.withConfig({displayName:"_article__Content",componentId:"sc-17ehp3-0"})(["display:flex;flex-direction:row;justify-content:center;width:100%;"]),w=a.ZP.div.withConfig({displayName:"_article__TabWrapper",componentId:"sc-17ehp3-1"})(["width:100%;margin-top:8rem;@media ","{margin-top:0;}"],u.Z.tabletL),g=a.ZP.div.withConfig({displayName:"_article__ContactContainer",componentId:"sc-17ehp3-2"})(["margin-top:8rem;"]),p=function(e){var t=e.children,n=e.header,a=e.title,u=e.description;return i.createElement(o.Z,null,i.createElement(m.HJ,{title:a,description:u}),i.createElement(m.W2,{align:"left",justify:"flex-start",direction:"column"},i.createElement(d.Fg,{to:"/help-centre/",has_arrow:"true",color:"black",size:"var(--text-size-s)",weight:"bold",arrow_margin:"1rem",margin:"4rem 0 0"},(0,l.NC)("Back")),i.createElement(s,null,i.createElement(w,null,i.createElement(d.Uj,{line_height:"1.5",opacity:"0.72",size:"var(--text-size-s)",tab_header:n},t)))),i.createElement(g,null,i.createElement(c.Community,null),i.createElement(r.DidntFindYourAnswerBanner,null)))}},77823:function(e,t,n){"use strict";n.r(t),n.d(t,{Community:function(){return g}});var i=n(67294),a=n(50009),r=n(25444),c=n(47009),o=n(42162),l=n(68838),d=n(82081),m=n(86299),u=(0,a.ZP)(o.Qj).withConfig({displayName:"_community__StyledLinkButton",componentId:"sc-1xcy8yg-0"})(["border-radius:4px;width:fit-content;@media ","{font-size:14px;padding:10px 16px;}"],m.Z.tablet),s=(0,a.ZP)(c.h4).withConfig({displayName:"_community__StyledHeader",componentId:"sc-1xcy8yg-1"})(["@media ","{text-align:center;}"],m.Z.tablet),w=(0,a.ZP)(d.kC).withConfig({displayName:"_community__StyledFlex",componentId:"sc-1xcy8yg-2"})(["@media ","{margin-left:unset;","{text-align:center;}}"],m.Z.tablet,c.xv),g=function(){var e=(0,r.useStaticQuery)("3807150758");return i.createElement(d.S$,{padding:"4rem",background:"var(--color-grey-25)"},i.createElement(d.W2,null,i.createElement(d.kC,{tablet_direction:"column",tablet_ai:"center",max_width:"92rem"},i.createElement(c.et,{data:e.community,width:"41rem"}),i.createElement(w,{tablet_ai:"center",ml:"5rem",direction:"column"},i.createElement(s,{mt:"1rem",as:"h3",type:"section-title"},(0,l.NC)("Have a question?")),i.createElement(c.xv,{size:"var(--text-size-m)",pt:"0.8rem",pb:"3.4rem"},(0,l.NC)("Our Deriv support community can help you find answers.")),i.createElement(u,{secondary:"true",to:"",type:"community",external:"true",target:"_blank",rel:"noopener noreferrer"},(0,l.NC)("Ask the community"))))))};t.default=g},69158:function(e,t,n){"use strict";n.r(t),n.d(t,{DidntFindYourAnswerBanner:function(){return p},default:function(){return h}});var i=n(67294),a=n(50009),r=n(47009),c=n(42162),o=n(68838),l=n(82081),d=n(88980),m=n(86299);var u=a.ZP.section.withConfig({displayName:"_didnt-find-answer__DFYAWrapper",componentId:"sc-1ba1494-0"})(["background-color:var(--color-black-3);"]),s=(0,a.ZP)(l.W2).withConfig({displayName:"_didnt-find-answer__DFYASection",componentId:"sc-1ba1494-1"})(["padding:3.5rem 0;@media ","{flex-wrap:wrap;","{font-size:14px;padding:10px 16px;}}& > *{width:auto;}"],m.Z.mobileL,c.zx),w=a.ZP.img.withConfig({displayName:"_didnt-find-answer__StyledIcon",componentId:"sc-1ba1494-2"})(["@media ","{width:48px;height:48px;margin-right:1.6rem;}"],m.Z.tabletL),g=(0,a.ZP)(r.xv).withConfig({displayName:"_didnt-find-answer__MiddleText",componentId:"sc-1ba1494-3"})(["@media ","{margin:1.6rem 0;text-align:center;font-weight:bold;}"],m.Z.mobileL),p=function(){var e=(0,d.u)(),t=e[0],n=e[1];return i.createElement(u,null,i.createElement(s,null,i.createElement(w,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHgyPSIxMDAlIiB5MT0iODcuOTcyJSIgeTI9IjEyLjAyOCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRjQ0NEYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRjY0NDQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNNjIgMjFhMiAyIDAgMDEyIDJ2MzQuNzczYTIgMiAwIDAxLTMuMzI5IDEuNDk1TDUzLjYyIDUzSDE4YTIgMiAwIDAxLTItMlY0MGgydjExaDM1LjYyYy40OSAwIC45NjIuMTggMS4zMjkuNTA1TDYyIDU3Ljc3M1YyM0g1MnYtMmgxMHpNNDYgNGEyIDIgMCAwMTIgMnYyOGEyIDIgMCAwMS0yIDJIMTAuMzhsLTcuMDUgNi4yNjhBMiAyIDAgMDEwIDQwLjc3M1Y2YTIgMiAwIDAxMi0yem0wIDJIMnYzNC43NzNsNy4wNTEtNi4yNjhjLjM2Ny0uMzI1Ljg0LS41MDUgMS4zMy0uNTA1SDQ2VjZ6TTMwIDIyYTEgMSAwIDAxLjExNyAxLjk5M0wzMCAyNEg5YTEgMSAwIDAxLS4xMTctMS45OTNMOSAyMmgyMXptOS04YTEgMSAwIDAxLjExNyAxLjk5M0wzOSAxNkg5YTEgMSAwIDAxLS4xMTctMS45OTNMOSAxNGgzMHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",alt:"contact us icon"}),i.createElement(g,{size:"var(--text-size-l)",color:"white",m:"0 2.4rem"},(0,o.NC)("Didn’t find your answer? We can help.")),t&&i.createElement(c.zx,{secondary:"true",onClick:function(){n.open_chat_window()},weight:"bold",color:"black"},(0,o.NC)("Chat"))))},h=p},11783:function(e,t,n){"use strict";n.d(t,{DO:function(){return o},dL:function(){return l},eb:function(){return d},qY:function(){return m}});var i=n(50009),a=n(47009),r=n(68838),c=n(86299),o=i.ZP.div.withConfig({displayName:"_help-centre-style__ArticleWrapper",componentId:"xgb5w4-0"})(["max-width:71.2rem;display:flex;flex-direction:column;justify-content:flex-start;height:100%;font-size:var(--text-size-s);line-height:1.5;margin-left:12.6rem;margin-top:1.6rem;@media ","{margin-left:",";}@media ","{margin-left:0;}"],c.Z.laptopL,(function(e){var t=e.margin_left;return null!=t?t:"12.6rem"}),c.Z.tabletL),l=(0,i.ZP)(r.UE).withConfig({displayName:"_help-centre-style__ExternalLink",componentId:"xgb5w4-1"})(["text-decoration:none;font-size:var(--text-size-s);font-weight:bold;color:var(--color-red);:hover{text-decoration:underline;}"]),d=(0,i.ZP)(a.h4).withConfig({displayName:"_help-centre-style__StyledHeader",componentId:"xgb5w4-2"})(["font-size:2.4rem;margin-bottom:2.4rem;"]),m=(0,i.ZP)(a.xv).withConfig({displayName:"_help-centre-style__StyledText",componentId:"xgb5w4-3"})(["margin-top:1.7rem;"])},30901:function(e,t,n){"use strict";n.r(t);var i=n(67294),a=n(2530),r=n(11783),c=n(1517),o=n(47009),l=n(68838),d=function(){return i.createElement(r.DO,null,i.createElement(r.eb,{as:"h4"},(0,l.NC)("What is DTrader?")),i.createElement(o.xv,null,(0,l.NC)("DTrader is an advanced trading platform that allows you to trade more than 50 assets in the form of digitals, multiplier, and lookback options.")))},m=function(){return i.createElement(r.DO,null,i.createElement(r.eb,{as:"h4"},(0,l.NC)("What markets can I trade on DTrader?")),i.createElement(o.xv,null,(0,l.NC)("You can trade forex, stock indices, commodities, and synthetic indices on DTrader.")))},u=function(){return i.createElement(r.DO,null,i.createElement(r.eb,{as:"h4"},(0,l.NC)("What contract types can I use on DTrader?")),i.createElement(o.xv,null,(0,l.NC)("We offer three contract types on DTrader: Ups & Downs, Highs & Lows, and Digits.")))};t.default=(0,l.Wm)()((function(){var e=(0,c.t)(!1)[0];return i.createElement("div",null,i.createElement(a.d,{header:"DTrader",title:(0,l.NC)("Help centre | Frequently asked questions | DTrader | Deriv"),description:(0,l.NC)("Frequently asked questions - DTrader")},i.createElement(d,{text:(0,l.NC)("What is DTrader?"),label:"what-is-dtrader",is_mounted:e}),i.createElement(m,{text:(0,l.NC)("What markets can I trade on DTrader?"),label:"markets-on-dtrader",is_mounted:e}),i.createElement(u,{text:(0,l.NC)("What contract types can I use on DTrader?"),label:"contracts-on-dtrader",is_mounted:e})))}))}}]);
//# sourceMappingURL=component---src-pages-help-centre-dtrader-js-ce40e6120f2cf5dba9c5.js.map
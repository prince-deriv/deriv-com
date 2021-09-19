(self.webpackChunkderiv_com=self.webpackChunkderiv_com||[]).push([[4355],{35210:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var l=n(67294),a=n(61579),o=n(75708),r=n(25444),i=n(79329),s=n(68838),m=n(34443),c=n(82081),u=n(59605),p=n(45091),f=function(){var e=(0,r.useStaticQuery)("489254302"),t=(0,l.useState)("Level"),n=t[0],f=t[1],d=(0,l.useState)("Up"),E=d[0],k=d[1],v=function(e){return f(e)},h=function(e){return k(e)};return l.createElement(l.Fragment,null,l.createElement(a.ko,null,l.createElement(c.kC,{jc:"flex-start",ai:"center"},l.createElement(m.Th,{to:"/trader-tools",color:"grey-5"},(0,s.NC)("Traders' tools")),l.createElement("img",{src:p.Z,alt:(0,s.NC)("right arrow"),height:"16",width:"16",style:{margin:"0 8px"}}),l.createElement(m.xv,null,(0,s.NC)("PnL for multipliers")))),l.createElement(a.PP,{direction:"column"},l.createElement(a.Vq,{as:"h3",type:"sub-section-title",align:"center",weight:"normal"},(0,s.NC)("Our profit and loss calculator for multipliers helps to determine the stop loss and/or take profit level in your trades to minimise losses and maximise gains.")),l.createElement(c.kC,{mt:"80px",mb:"40px",tablet:{mt:"40px",mb:"24px"}},l.createElement(a.En,{active:"Level"===n,onClick:function(){return v("Level")}},l.createElement(m.xv,{size:"var(--text-size-m)",align:"center"},(0,s.NC)("Level"))),l.createElement(a.En,{active:"Amount"===n,onClick:function(){return v("Amount")}},l.createElement(m.xv,{size:"var(--text-size-m)",align:"center"},(0,s.NC)("Amount")))),"Level"===n?l.createElement(a.OO,{mb:"4.0rem"},l.createElement(a.n5,null,l.createElement(o.J9,{enableReinitialize:!0,initialValues:{direction:"Up",pnlMarginSymbol:"USD",stopLossLevelOutput:0,takeProfitLevelOutput:0,takeProfitAmount:"",stopLossAmount:"",assetPrice:"",commission:"",stake:"",multiplier:""},validate:i.Yq,onSubmit:function(e,t){var n=t.setFieldValue;n("takeProfitLevelOutput","Up"===E?(0,i.pK)(e,"getTakeProfitLevelUp"):(0,i.pK)(e,"getTakeProfitLevelDown")),n("stopLossLevelOutput","Up"===E?(0,i.pK)(e,"getStopLossLevelUp"):(0,i.pK)(e,"getStopLossLevelDown")),n("assetPrice",(0,i.lF)(e.assetPrice)),n("commission",(0,i.lF)(e.commission)),n("stake",(0,i.lF)(e.stake)),n("multiplier",(0,i.lF)(e.multiplier)),n("takeProfitAmount",(0,i.lF)(e.takeProfitAmount)),n("stopLossAmount",(0,i.lF)(e.stopLossAmount))}},(function(e){var t=e.values,n=e.setFieldValue,r=e.handleBlur,p=e.errors,f=e.touched,d=e.setFieldError,k=e.setFieldTouched,v=e.isValid,C=e.dirty;return l.createElement(l.Fragment,null,l.createElement(c.di.Desktop,{max_width:"mobileL"},l.createElement(a.ez,null,l.createElement(a.d1,null,l.createElement(c.kC,null,l.createElement(c.kC,{fd:"column",mr:"24px"},l.createElement(a.iB,{htmlFor:"message"},(0,s.NC)("Take profit level")),l.createElement(a.Y$,null,l.createElement(a.Yv,null,(0,i.x6)(t.takeProfitLevelOutput)),l.createElement(a.Aw,null,t.pnlMarginSymbol))),l.createElement(c.kC,{fd:"column"},l.createElement(a.iB,{htmlFor:"message"},(0,s.NC)("Stop loss level")),l.createElement(a.Y$,null,l.createElement(a.Yv,null,(0,i.x6)(t.stopLossLevelOutput)),l.createElement(a.Aw,null,t.pnlMarginSymbol))))),l.createElement(a.bN,null,l.createElement(a.iB,null,(0,s.NC)("Direction")),l.createElement(c.kC,{mb:"3rem",mt:"1rem",jc:"space-between",tablet:{height:"unset"}},l.createElement(a.HO,{active:"Up"===E,onClick:function(){h("Up"),n("direction","Up")}},l.createElement(m.xv,{align:"center"},(0,s.NC)("Up"))),l.createElement(a.HO,{active:"Down"===E,disabled:"Down"===E,onClick:function(){h("Down"),n("direction","Down")}},l.createElement(m.xv,{align:"center"},(0,s.NC)("Down")))),l.createElement(c.kC,{jc:"space-between",mb:"17px"},l.createElement(c.kC,{fd:"column",width:"23.4rem"},l.createElement(a.ft,null,l.createElement(o.gN,{name:"assetPrice",value:t.assetPrice,onChange:function(e){n("assetPrice",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"assetPrice",type:"text",label:(0,s.NC)("Asset price"),autoComplete:"off",error:f.assetPrice&&p.assetPrice,onBlur:r,"data-lpignore":"true",handleError:function(e){n("assetPrice","",!1),d("assetPrice",""),k("assetPrice",!1,!1),e.focus()},maxLength:(0,i.CL)(t.assetPrice,8),background:"white"}))})))),l.createElement(c.kC,{fd:"column",width:"23.4rem"},l.createElement(a.ft,null,l.createElement(o.gN,{name:"commission",value:t.commission,onChange:function(e){n("commission",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"commission",type:"text",label:(0,s.NC)("Commission"),autoComplete:"off",error:f.commission&&p.commission,onBlur:r,"data-lpignore":"true",handleError:function(e){n("commission","",!1),d("commission",""),k("commission",!1,!1),e.focus()},maxLength:(0,i.CL)(t.commission,8),background:"white"}))}))))),l.createElement(c.kC,{jc:"space-between",mb:"17px"},l.createElement(c.kC,{fd:"column",width:"23.4rem"},l.createElement(a.ft,null,l.createElement(o.gN,{name:"stake",value:t.stake,onChange:function(e){n("stake",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"stake",type:"text",label:(0,s.NC)("Stake"),autoComplete:"off",error:f.stake&&p.stake,onBlur:r,"data-lpignore":"true",handleError:function(e){n("stake","",!1),d("stake",""),k("stake",!1,!1),e.focus()},maxLength:(0,i.CL)(t.stake,15),background:"white"}))})))),l.createElement(c.kC,{fd:"column",width:"23.4rem"},l.createElement(a.ft,null,l.createElement(o.gN,{name:"takeProfitAmount",value:t.takeProfitAmount,onChange:function(e){n("takeProfitAmount",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"takeProfitAmount",type:"text",label:(0,s.NC)("Take profit amount"),autoComplete:"off",error:f.takeProfitAmount&&p.takeProfitAmount,onBlur:r,"data-lpignore":"true",handleError:function(e){n("takeProfitAmount","",!1),d("takeProfitAmount",""),k("takeProfitAmount",!1,!1),e.focus()},maxLength:(0,i.CL)(t.takeProfitAmount,15),background:"white"}))}))))),l.createElement(c.kC,{jc:"space-between"},l.createElement(c.kC,{fd:"column",width:"23.4rem"},l.createElement(a.ft,null,l.createElement(o.gN,{name:"multiplier",value:t.multiplier,onChange:function(e){n("multiplier",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"multiplier",type:"text",value:t.multiplier,label:(0,s.NC)("Multiplier"),autoComplete:"off",error:f.multiplier&&p.multiplier,onBlur:r,"data-lpignore":"true",handleError:function(e){n("multiplier","",!1),d("multiplier",""),k("multiplier",!1,!1),e.focus()},maxLength:(0,i.CL)(t.multiplier,4),background:"white"}))})))),l.createElement(c.kC,{fd:"column",width:"23.4rem"},l.createElement(a.ft,null,l.createElement(o.gN,{name:"stopLossAmount",value:t.stopLossAmount,onChange:function(e){n("stopLossAmount",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"stopLossAmount",type:"text",value:t.stopLossAmount,label:(0,s.NC)("Stop loss amount"),autoComplete:"off",error:f.stopLossAmount&&p.stopLossAmount,onBlur:r,"data-lpignore":"true",handleError:function(e){n("stopLossAmount","",!1),d("stopLossAmount",""),k("stopLossAmount",!1,!1),e.focus()},maxLength:(0,i.CL)(t.stopLossAmount,15),background:"white"}))}))))),l.createElement(c.kC,{mt:"1.5rem"},l.createElement(a.ax,{secondary:!0,type:"submit",disabled:!v||!C},(0,s.NC)("Calculate")))))),l.createElement(c.di.Mobile,{min_width:"mobileL"},l.createElement(a.ez,null,l.createElement(a.d1,null,l.createElement(c.kC,{fd:"column"},l.createElement(c.kC,{fd:"column",mb:"16px"},l.createElement(a.iB,{htmlFor:"message"},(0,s.NC)("Take profit level")),l.createElement(a.Y$,null,l.createElement(a.Yv,null,(0,i.x6)(t.takeProfitLevelOutput)),l.createElement(a.Aw,null,t.pnlMarginSymbol))),l.createElement(c.kC,{fd:"column"},l.createElement(a.iB,{htmlFor:"message"},(0,s.NC)("Stop loss level")),l.createElement(a.Y$,null,l.createElement(a.Yv,null,(0,i.x6)(t.stopLossLevelOutput)),l.createElement(a.Aw,null,t.pnlMarginSymbol))))),l.createElement(a.bN,null,l.createElement(a.iB,null,(0,s.NC)("Direction")),l.createElement(c.kC,{mb:"3rem",mt:"1rem",jc:"space-between",tablet:{height:"unset"}},l.createElement(a.HO,{active:"Up"===E,onClick:function(){h("Up")}},l.createElement(m.xv,{align:"center"},(0,s.NC)("Up"))),l.createElement(a.HO,{active:"Down"===E,disabled:"Down"===E,onClick:function(){h("Down"),n("direction","Down")}},l.createElement(m.xv,{align:"center"},(0,s.NC)("Down")))),l.createElement(a.BZ,null,l.createElement(o.gN,{name:"assetPrice",value:t.assetPrice,onChange:function(e){n("assetPrice",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"assetPrice",type:"text",label:(0,s.NC)("Asset Price"),autoComplete:"off",error:f.assetPrice&&p.assetPrice,onBlur:r,"data-lpignore":"true",handleError:function(e){n("assetPrice","",!1),d("assetPrice",""),k("assetPrice",!1,!1),e.focus()},maxLength:(0,i.CL)(t.assetPrice,8),background:"white"}))}))),l.createElement(a.BZ,null,l.createElement(o.gN,{name:"stake",value:t.stake,onChange:function(e){n("stake",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"stake",type:"text",value:t.stake,label:(0,s.NC)("Stake"),autoComplete:"off",error:f.stake&&p.stake,onBlur:r,"data-lpignore":"true",handleError:function(e){n("stake","",!1),d("stake",""),k("stake",!1,!1),e.focus()},maxLength:(0,i.CL)(t.stake,15),background:"white"}))}))),l.createElement(a.BZ,null,l.createElement(o.gN,{name:"multiplier",value:t.multiplier,onChange:function(e){n("multiplier",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"multiplier",type:"text",label:(0,s.NC)("Multiplier"),autoComplete:"off",error:f.multiplier&&p.multiplier,onBlur:r,"data-lpignore":"true",handleError:function(e){n("multiplier","",!1),d("multiplier",""),k("multiplier",!1,!1),e.focus()},maxLength:(0,i.CL)(t.multiplier,4),background:"white"}))}))),l.createElement(a.BZ,null,l.createElement(o.gN,{name:"commission",value:t.commission,onChange:function(e){n("commission",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"commission",type:"text",label:(0,s.NC)("Commission"),autoComplete:"off",error:f.commission&&p.commission,onBlur:r,"data-lpignore":"true",handleError:function(e){n("commission","",!1),d("commission",""),k("commission",!1,!1),e.focus()},maxLength:(0,i.CL)(t.commission,8),background:"white"}))}))),l.createElement(a.BZ,null,l.createElement(o.gN,{name:"takeProfitAmount",value:t.takeProfitAmount,onChange:function(e){n("takeProfitAmount",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"takeProfitAmount",type:"text",value:t.takeProfitAmount,label:(0,s.NC)("Take profit amount"),autoComplete:"off",error:f.takeProfitAmount&&p.takeProfitAmount,onBlur:r,"data-lpignore":"true",handleError:function(e){n("takeProfitAmount","",!1),d("takeProfitAmount",""),k("takeProfitAmount",!1,!1),e.focus()},maxLength:(0,i.CL)(t.takeProfitAmount,15),background:"white"}))}))),l.createElement(a.BZ,null,l.createElement(o.gN,{name:"stopLossAmount",value:t.stopLossAmount,onChange:function(e){n("stopLossAmount",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"stopLossAmount",type:"text",value:t.stopLossAmount,label:(0,s.NC)("Stop loss amount"),autoComplete:"off",error:f.stopLossAmount&&p.stopLossAmount,onBlur:r,"data-lpignore":"true",handleError:function(e){n("stopLossAmount","",!1),d("stopLossAmount",""),k("stopLossAmount",!1,!1),e.focus()},maxLength:(0,i.CL)(t.stopLossAmount,15),background:"white"}))}))),l.createElement(c.kC,{mt:"1.5rem"},l.createElement(a.ax,{secondary:!0,type:"submit",disabled:!v||!C},(0,s.NC)("Calculate")))))))}))),l.createElement(a.du,null,l.createElement(m.h4,{as:"h3",type:"section-title",mb:"8px"},(0,s.NC)("How to calculate stop loss and/or take profit level")),l.createElement(m.xv,{mb:"8px"},(0,s.NC)("The stop loss and/or take profit level for a contract on DTrader is calculated based on the formula:")),l.createElement(m.xv,{mb:"8px"},l.createElement(s.Xx,{translate_text:"<0>Stop loss and/or take profit level in the Up direction = asset price × {(stop loss OR take profit amount + commission) ÷ (stake × multiplier) + 1}</0>",components:[l.createElement("strong",{key:0})]})),l.createElement(m.xv,{mb:"16px"},l.createElement(s.Xx,{translate_text:"<0>Stop loss and/or take profit level in the Down direction = asset price × {(-stop loss OR take profit amount - commission) ÷ (stake × multiplier) + 1}</0>",components:[l.createElement("strong",{key:0})]})),l.createElement(m.xv,{mb:"40px"},(0,s.NC)("This helps you to set the stop loss and/or take profit level when the asset price moves in Up or Down direction.")),l.createElement(m.h4,{as:"h3",type:"section-title",mb:"16px"},(0,s.NC)("Example calculation")),l.createElement(m.UQ,{has_single_state:!0},l.createElement(m.Qd,{header:(0,s.NC)("Stop loss level in Up direction"),header_style:a.$s,style:a.qA,plus:!0},l.createElement(m.xv,{mb:"16px"},(0,s.NC)("Let’s say you want to calculate the stop loss level when you open a position for Volatility 100 Index priced at 3376.24 USD with a stake amount of 10 USD, a multiplier value of x100, and a stop loss amount of 7.54 USD in Up direction.")),l.createElement(c.di.Desktop,{max_width:"mobileL"},l.createElement(m.et,{data:e.stop_loss_level_up_formula,alt:(0,s.NC)("stop loss level up formula")})),l.createElement(c.di.Mobile,{min_width:"mobileL"},l.createElement(m.et,{data:e.stop_loss_level_up_formula_mobile,alt:(0,s.NC)("stop loss level up formula")})),l.createElement(a.kC,{size:"14px"},l.createElement(a.mJ,null,l.createElement("li",null,l.createElement("span",null,l.createElement(s.Xx,{translate_text:"The commission is automatically calculated based on your stake, symbol, and the multiplier you choose. Its value is directly available on DTrader."}))))),l.createElement(m.xv,{mb:"1.6rem",mt:"1.6rem"},l.createElement(s.Xx,{translate_text:"So in this scenario, you would set your stop loss level at <0>3351.46</0>.",components:[l.createElement("strong",{key:0})]}))),l.createElement(m.Qd,{header:(0,s.NC)("Take profit level in Down direction"),header_style:a.$s,style:a.qA,plus:!0},l.createElement(m.xv,{mb:"16px"},(0,s.NC)("Let’s say you want to calculate the take profit level when you open a position for Volatility 100 Index priced at 3376.24 USD with a stake amount of 10 USD, a multiplier value of x100, and a take profit amount of 7.54 USD in Down direction.")),l.createElement(c.di.Desktop,{max_width:"mobileL"},l.createElement(m.et,{data:e.take_profit_level_down_formula,alt:(0,s.NC)("take profit level down formula")})),l.createElement(c.di.Mobile,{min_width:"mobileL"},l.createElement(m.et,{data:e.take_profit_level_down_formula_mobile,alt:(0,s.NC)("take profit level down formula")})),l.createElement(a.kC,{size:"14px"},l.createElement(a.mJ,null,l.createElement("li",null,l.createElement("span",null,l.createElement(s.Xx,{translate_text:"The commission is automatically calculated based on your stake, symbol, and the multiplier you choose. Its value is directly available on DTrader."}))))),l.createElement(m.xv,{mt:"1.6rem"},l.createElement(s.Xx,{translate_text:"So in this scenario, you would set your take profit level at <0>3350.11</0>.",components:[l.createElement("strong",{key:0})]})))),l.createElement(a.gM,{height:"auto"},l.createElement(a.UN,{secondary:"true",type:"deriv_app",external:"true",target:"_blank",rel:"noopener noreferrer"},(0,s.NC)("Go to Dtrader"))))):l.createElement(a.OO,{key:n,mb:"4.0rem"},l.createElement(a.n5,null,l.createElement(o.J9,{enableReinitialize:!0,initialValues:{direction:"Up",pnlMarginSymbol:"USD",stopLossAmountOutput:0,takeProfitAmountOutput:0,takeProfitLevel:"",stopLossLevel:"",assetPrice:"",commission:"",stake:"",multiplier:""},validate:i.uC,onSubmit:function(e,t){var n=t.setFieldValue;n("takeProfitAmountOutput","Up"===E?(0,i.pK)(e,"getTakeProfitAmountUp"):(0,i.pK)(e,"getTakeProfitAmountDown")),n("stopLossAmountOutput","Up"===E?(0,i.pK)(e,"getStopLossAmountUp"):(0,i.pK)(e,"getStopLossAmountDown")),n("assetPrice",(0,i.lF)(e.assetPrice)),n("commission",(0,i.lF)(e.commission)),n("stake",(0,i.lF)(e.stake)),n("multiplier",(0,i.lF)(e.multiplier)),n("takeProfitLevel",(0,i.lF)(e.takeProfitLevel)),n("stopLossLevel",(0,i.lF)(e.stopLossLevel))}},(function(e){var t=e.values,n=e.setFieldValue,r=e.handleBlur,p=e.errors,f=e.touched,d=e.setFieldError,k=e.setFieldTouched,v=e.isValid,C=e.dirty;return l.createElement(l.Fragment,null,l.createElement(c.di.Desktop,{max_width:"mobileL"},l.createElement(a.ez,null,l.createElement(a.d1,null,l.createElement(c.kC,null,l.createElement(c.kC,{fd:"column",mr:"24px"},l.createElement(a.iB,{htmlFor:"message"},(0,s.NC)("Take profit amount")),l.createElement(a.Y$,null,l.createElement(a.Yv,null,(0,i.x6)(t.takeProfitAmountOutput)),l.createElement(a.Aw,null,t.pnlMarginSymbol))),l.createElement(c.kC,{fd:"column"},l.createElement(a.iB,{htmlFor:"message"},(0,s.NC)("Stop loss amount")),l.createElement(a.Y$,null,l.createElement(a.Yv,null,(0,i.x6)(t.stopLossAmountOutput)),l.createElement(a.Aw,null,t.pnlMarginSymbol))))),l.createElement(a.bN,null,l.createElement(a.iB,null,(0,s.NC)("Direction")),l.createElement(c.kC,{mb:"3rem",mt:"1rem",jc:"space-between",tablet:{height:"unset"}},l.createElement(a.HO,{active:"Up"===E,onClick:function(){h("Up"),n("direction","Up")}},l.createElement(m.xv,{align:"center"},(0,s.NC)("Up"))),l.createElement(a.HO,{active:"Down"===E,disabled:"Down"===E,onClick:function(){h("Down"),n("direction","Down")}},l.createElement(m.xv,{align:"center"},(0,s.NC)("Down")))),l.createElement(c.kC,{jc:"space-between",mb:"17px"},l.createElement(c.kC,{fd:"column",width:"23.4rem"},l.createElement(a.ft,null,l.createElement(o.gN,{name:"assetPrice",value:t.assetPrice,onChange:function(e){n("assetPrice",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"assetPrice",type:"text",label:(0,s.NC)("Asset price"),autoComplete:"off",error:f.assetPrice&&p.assetPrice,onBlur:r,"data-lpignore":"true",handleError:function(e){n("assetPrice","",!1),d("assetPrice",""),k("assetPrice",!1,!1),e.focus()},maxLength:(0,i.CL)(t.assetPrice,8),background:"white"}))})))),l.createElement(c.kC,{fd:"column",width:"23.4rem"},l.createElement(a.ft,null,l.createElement(o.gN,{name:"commission",value:t.commission,onChange:function(e){n("commission",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"commission",type:"text",label:(0,s.NC)("Commission"),autoComplete:"off",error:f.commission&&p.commission,onBlur:r,"data-lpignore":"true",handleError:function(e){n("commission","",!1),d("commission",""),k("commission",!1,!1),e.focus()},maxLength:(0,i.CL)(t.commission,8),background:"white"}))}))))),l.createElement(c.kC,{jc:"space-between",mb:"17px"},l.createElement(c.kC,{fd:"column",width:"23.4rem"},l.createElement(a.ft,null,l.createElement(o.gN,{name:"stake",value:t.stake,onChange:function(e){n("stake",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"stake",type:"text",label:(0,s.NC)("Stake"),autoComplete:"off",error:f.stake&&p.stake,onBlur:r,"data-lpignore":"true",handleError:function(e){n("stake","",!1),d("stake",""),k("stake",!1,!1),e.focus()},maxLength:(0,i.CL)(t.stake,15),background:"white"}))})))),l.createElement(c.kC,{fd:"column",width:"23.4rem"},l.createElement(a.ft,null,l.createElement(o.gN,{name:"takeProfitLevel",value:t.takeProfitLevel,onChange:function(e){n("takeProfitLevel",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"takeProfitLevel",type:"text",label:(0,s.NC)("Take profit level"),autoComplete:"off",error:f.takeProfitLevel&&p.takeProfitLevel,onBlur:r,"data-lpignore":"true",handleError:function(e){n("takeProfitLevel","",!1),d("takeProfitLevel",""),k("takeProfitLevel",!1,!1),e.focus()},maxLength:(0,i.CL)(t.takeProfitLevel,15),background:"white"}))}))))),l.createElement(c.kC,{jc:"space-between"},l.createElement(c.kC,{fd:"column",width:"23.4rem"},l.createElement(a.ft,null,l.createElement(o.gN,{name:"multiplier",value:t.multiplier,onChange:function(e){n("multiplier",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"multiplier",type:"text",value:t.multiplier,label:(0,s.NC)("Multiplier"),autoComplete:"off",error:f.multiplier&&p.multiplier,onBlur:r,"data-lpignore":"true",handleError:function(e){n("multiplier","",!1),d("multiplier",""),k("multiplier",!1,!1),e.focus()},maxLength:(0,i.CL)(t.multiplier,4),background:"white"}))})))),l.createElement(c.kC,{fd:"column",width:"23.4rem"},l.createElement(a.ft,null,l.createElement(o.gN,{name:"stopLossLevel",value:t.stopLossLevel,onChange:function(e){n("stopLossLevel",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"stopLossLevel",type:"text",value:t.stopLossLevel,label:(0,s.NC)("Stop loss level"),autoComplete:"off",error:f.stopLossLevel&&p.stopLossLevel,onBlur:r,"data-lpignore":"true",handleError:function(e){n("stopLossLevel","",!1),d("stopLossLevel",""),k("stopLossLevel",!1,!1),e.focus()},maxLength:(0,i.CL)(t.stopLossLevel,15),background:"white"}))}))))),l.createElement(c.kC,{mt:"1.5rem"},l.createElement(a.ax,{secondary:!0,type:"submit",disabled:!v||!C},(0,s.NC)("Calculate")))))),l.createElement(c.di.Mobile,{min_width:"mobileL"},l.createElement(a.ez,null,l.createElement(a.d1,null,l.createElement(c.kC,{fd:"column"},l.createElement(c.kC,{fd:"column",mb:"16px"},l.createElement(a.iB,{htmlFor:"message"},(0,s.NC)("Take profit amount")),l.createElement(a.Y$,null,l.createElement(a.Yv,null,(0,i.x6)(t.takeProfitAmountOutput)),l.createElement(a.Aw,null,t.pnlMarginSymbol))),l.createElement(c.kC,{fd:"column"},l.createElement(a.iB,{htmlFor:"message"},(0,s.NC)("Stop loss amount")),l.createElement(a.Y$,null,l.createElement(a.Yv,null,(0,i.x6)(t.stopLossAmountOutput)),l.createElement(a.Aw,null,t.pnlMarginSymbol))))),l.createElement(a.bN,null,l.createElement(a.iB,null,(0,s.NC)("Direction")),l.createElement(c.kC,{mb:"3rem",mt:"1rem",jc:"space-between",tablet:{height:"unset"}},l.createElement(a.HO,{active:"Up"===E,onClick:function(){h("Up")}},l.createElement(m.xv,{align:"center"},(0,s.NC)("Up"))),l.createElement(a.HO,{active:"Down"===E,disabled:"Down"===E,onClick:function(){h("Down"),n("direction","Down")}},l.createElement(m.xv,{align:"center"},(0,s.NC)("Down")))),l.createElement(a.BZ,null,l.createElement(o.gN,{name:"assetPrice",value:t.assetPrice,onChange:function(e){n("assetPrice",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"assetPrice",type:"text",label:(0,s.NC)("Asset Price"),autoComplete:"off",error:f.assetPrice&&p.assetPrice,onBlur:r,"data-lpignore":"true",handleError:function(e){n("assetPrice","",!1),d("assetPrice",""),k("assetPrice",!1,!1),e.focus()},maxLength:(0,i.CL)(t.assetPrice,8),background:"white"}))}))),l.createElement(a.BZ,null,l.createElement(o.gN,{name:"stake",value:t.stake,onChange:function(e){n("stake",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"stake",type:"text",value:t.stake,label:(0,s.NC)("Stake"),autoComplete:"off",error:f.stake&&p.stake,onBlur:r,"data-lpignore":"true",handleError:function(e){n("stake","",!1),d("stake",""),k("stake",!1,!1),e.focus()},maxLength:(0,i.CL)(t.stake,15),background:"white"}))}))),l.createElement(a.BZ,null,l.createElement(o.gN,{name:"multiplier",value:t.multiplier,onChange:function(e){n("multiplier",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"multiplier",type:"text",label:(0,s.NC)("Multiplier"),autoComplete:"off",error:f.multiplier&&p.multiplier,onBlur:r,"data-lpignore":"true",handleError:function(e){n("multiplier","",!1),d("multiplier",""),k("multiplier",!1,!1),e.focus()},maxLength:(0,i.CL)(t.multiplier,4),background:"white"}))}))),l.createElement(a.BZ,null,l.createElement(o.gN,{name:"commission",value:t.commission,onChange:function(e){n("commission",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"commission",type:"text",label:(0,s.NC)("Commission"),autoComplete:"off",error:f.commission&&p.commission,onBlur:r,"data-lpignore":"true",handleError:function(e){n("commission","",!1),d("commission",""),k("commission",!1,!1),e.focus()},maxLength:(0,i.CL)(t.commission,8),background:"white"}))}))),l.createElement(a.BZ,null,l.createElement(o.gN,{name:"takeProfitLevel",value:t.takeProfitLevel,onChange:function(e){n("takeProfitLevel",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"takeProfitLevel",type:"text",value:t.takeProfitLevel,label:(0,s.NC)("Take profit level"),autoComplete:"off",error:f.takeProfitLevel&&p.takeProfitLevel,onBlur:r,"data-lpignore":"true",handleError:function(e){n("takeProfitLevel","",!1),d("takeProfitLevel",""),k("takeProfitLevel",!1,!1),e.focus()},maxLength:(0,i.CL)(t.takeProfitLevel,15),background:"white"}))}))),l.createElement(a.BZ,null,l.createElement(o.gN,{name:"stopLossLevel",value:t.stopLossLevel,onChange:function(e){n("stopLossLevel",e)}},(function(e){var a=e.field;return l.createElement(u.Z,Object.assign({},a,{id:"stopLossLevel",type:"text",value:t.stopLossLevel,label:(0,s.NC)("Stop loss level"),autoComplete:"off",error:f.stopLossLevel&&p.stopLossLevel,onBlur:r,"data-lpignore":"true",handleError:function(e){n("stopLossLevel","",!1),d("stopLossLevel",""),k("stopLossLevel",!1,!1),e.focus()},maxLength:(0,i.CL)(t.stopLossLevel,15),background:"white"}))}))),l.createElement(c.kC,{mt:"1.5rem"},l.createElement(a.ax,{secondary:!0,type:"submit",disabled:!v||!C},(0,s.NC)("Calculate")))))))}))),l.createElement(a.du,null,l.createElement(m.h4,{as:"h3",type:"section-title",mb:"8px"},(0,s.NC)("How to calculate stop loss and/or take profit amount")),l.createElement(m.xv,{mb:"8px"},(0,s.NC)("The stop loss and/or take profit amount for a contract on DTrader is calculated based on the formula:")),l.createElement(m.xv,{mb:"8px"},l.createElement(s.Xx,{translate_text:"<0>Stop loss and/or take profit amount in the Up direction = Max [{stake × ((stop loss OR take profit level - asset price) ÷ asset price × multiplier) - commission}, -stake]</0>",components:[l.createElement("strong",{key:0})]})),l.createElement(m.xv,{mb:"16px"},l.createElement(s.Xx,{translate_text:"<0>Stop loss and/or take profit amount in the Down direction = Max [{stake × (-(stop loss OR take profit level - asset price) ÷ asset price × multiplier) - commission}, -stake]</0>",components:[l.createElement("strong",{key:0})]})),l.createElement(m.xv,{mb:"40px"},(0,s.NC)("This helps you to set the stop loss and/or take profit level when the asset price moves in Up or Down direction.")),l.createElement(m.h4,{as:"h3",type:"section-title",mb:"16px"},(0,s.NC)("Example calculation")),l.createElement(m.UQ,{has_single_state:!0},l.createElement(m.Qd,{header:(0,s.NC)("Take profit amount in Up direction"),header_style:a.$s,style:a.qA,plus:!0},l.createElement(m.xv,{mb:"16px"},(0,s.NC)("Let’s say you want to calculate the take profit amount when you want to open a position for Volatility 100 Index priced at 3376.24 USD with a stake amount of 10 USD, a multiplier value of x100, and a take profit level of 3400 in Up direction.")),l.createElement(c.di.Desktop,{max_width:"mobileL"},l.createElement(m.et,{data:e.take_profit_amount_up_formula,alt:(0,s.NC)("take profit amount up formula")})),l.createElement(c.di.Mobile,{min_width:"mobileL"},l.createElement(m.et,{data:e.take_profit_amount_up_formula_mobile,alt:(0,s.NC)("take profit amount up formula")})),l.createElement(a.kC,{size:"14px"},l.createElement(a.mJ,null,l.createElement("li",null,l.createElement("span",null,l.createElement(s.Xx,{translate_text:"The commission is automatically calculated based on your stake, symbol, and the multiplier you choose. Its value is directly available on DTrader."}))))),l.createElement(m.xv,{mb:"1.6rem",mt:"1.6rem"},l.createElement(s.Xx,{translate_text:"So in this scenario, you would set your take profit level at <0>6.83 USD</0>.",components:[l.createElement("strong",{key:0})]}))),l.createElement(m.Qd,{header:(0,s.NC)("Stop loss amount in Down direction"),header_style:a.$s,style:a.qA,plus:!0},l.createElement(m.xv,{mb:"16px"},(0,s.NC)("Let’s say you want to calculate the stop loss amount when you want to open a position for Volatility 100 Index priced at 3376.24 USD with a stake amount of 10 USD, a multiplier value of x100, and a stop loss level of 3400 in Down direction.")),l.createElement(c.di.Desktop,{max_width:"mobileL"},l.createElement(m.et,{data:e.stop_loss_amount_down_formula,alt:(0,s.NC)("stop loss amount down formula")})),l.createElement(c.di.Mobile,{min_width:"mobileL"},l.createElement(m.et,{data:e.stop_loss_amount_down_formula_mobile,alt:(0,s.NC)("stop loss amount down formula")})),l.createElement(a.kC,{size:"14px"},l.createElement(a.mJ,null,l.createElement("li",null,l.createElement("span",null,l.createElement(s.Xx,{translate_text:"The commission is automatically calculated based on your stake, symbol, and the multiplier you choose. Its value is directly available on DTrader."}))))),l.createElement(m.xv,{mt:"1.6rem"},l.createElement(s.Xx,{translate_text:"So in this scenario, you would set your stop loss amount at <0>-7.23 USD</0>.",components:[l.createElement("strong",{key:0})]})))),l.createElement(a.gM,{height:"auto"},l.createElement(a.UN,{secondary:"true",type:"deriv_app",external:"true",target:"_blank",rel:"noopener noreferrer"},(0,s.NC)("Go to Dtrader")))))))},d=n(10667),E=(0,s.Wm)()((function(){return l.createElement(d.Z,null,l.createElement(c.HJ,{title:(0,s.NC)("PnL Multipliers Calculator"),description:(0,s.NC)("PnL Multipliers Calculator")}),l.createElement(a.VM,{jc:"center",ai:"center"},l.createElement(c.W2,null,l.createElement(a.eb,{as:"h1",type:"display-title",color:"white",align:"center"},(0,s.NC)("Stop loss and/or take profit calculator for multipliers")))),l.createElement(f,null))}))}}]);
//# sourceMappingURL=component---src-pages-trader-tools-pnl-for-multipliers-index-js-e54ce170f9260eb8d56d.js.map
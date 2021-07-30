(this["webpackJsonpprescription-application"]=this["webpackJsonpprescription-application"]||[]).push([[0],{130:function(e,a,t){e.exports={root_reset:"plasmic_blank_project_root_reset__1-GHK"}},140:function(e,a,t){},141:function(e,a,t){},224:function(e,a,t){"use strict";t.r(a);var _=t(0),c=t.n(_),s=t(32),l=t.n(s),r=(t(140),t(141),t(123)),n=t(25),i=t(15),m=t(229),o=t(22);function p(e,a){return Object(o.jsx)(m.a,{className:e.className})}var d=_.forwardRef(p),u=t(232),b=t(231),f=t(55),j=t(233),O=t(230),y=t(236);function x(e,a){var t;switch(e.type){case"number":t=Object(o.jsx)(u.a,{});break;case"date":t=Object(o.jsx)(m.a,{format:"YYYY-MM-DD HH:mm:ss"});break;case"upload":t=Object(o.jsx)(b.a,{children:Object(o.jsx)(f.a,{icon:Object(o.jsx)(y.a,{}),children:"Upload"})});break;default:t=Object(o.jsx)(j.a,{})}return Object(o.jsx)(O.a.Item,{className:e.className,label:e.label,name:"patientName",rules:[{required:!0,message:"Please input your patient name!"}],children:t})}var g=_.forwardRef(x),N=t(19),h=t.n(N),v=t(92),P=t(11),A=t(234);function w(e,a){var t=_.useState([]),c=Object(P.a)(t,2),s=c[0],l=c[1],r=_.useState(null),n=Object(P.a)(r,2),i=(n[0],n[1]),m=_.useCallback(Object(v.a)(h.a.mark((function e(){var a,t,_,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://prescription-app-84502-default-rtdb.firebaseio.com/medicines.json");case 3:if(a=e.sent,console.log(a),a.ok){e.next=7;break}throw Error("Something went wrong !");case 7:return e.next=9,a.json();case 9:for(c in t=e.sent,_=[],t)_.push({id:c,label:t[c].name,value:t[c].name});console.log(_),l(_),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),i(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return _.useEffect((function(){m().catch((function(e){i(e.message)}))}),[]),Object(o.jsx)(O.a.Item,{className:e.className,label:e.label,name:"medicineInput",children:Object(o.jsxs)(j.a.Group,{compact:!0,children:[Object(o.jsx)(A.a,{defaultValue:"Medication",style:{width:"60%"},options:s}),Object(o.jsx)(u.a,{style:{width:"40%"},placeholder:"Dosage"})]})})}var k=_.forwardRef(w);function F(e,a){var t=Object(_.useState)(!1),c=Object(P.a)(t,2),s=(c[0],c[1]),l=function(){var e=Object(v.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,fetch("https://prescription-app-84502-default-rtdb.firebaseio.com/prescription.json",{method:"POST",body:JSON.stringify({precription:a})});case 3:s(!1);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(o.jsx)(f.a,{className:e.className,type:"primary",htmlType:"submit",onClick:function(){l({name:"vandana",patientId:Math.floor(1e3*Math.random()),age:30,date:new Date,medication:"disprin"})},children:"Submit"})}var T=_.forwardRef(F),I=(t(222),t(38)),q=t(130),B=t(31),D=new Array,S=new Array("medicine");var V={root:["root","img","antdDatePicker","antdFormSubmit"],img:["img"],antdDatePicker:["antdDatePicker"],antdFormSubmit:["antdFormSubmit"]};function M(e){var a=function(a){var t=Object(i.d)(a,{name:e,descendantNames:Object(n.a)(V[e]),internalArgPropNames:S,internalVariantPropNames:D});return function(e){e.variants,e.args;var a=e.overrides,t=e.forNode;return e.dataFetches,Object(i.c)(_.Fragment,null,Object(i.c)("div",{className:I.plasmic_page_wrapper},Object(i.c)(i.a,{as:"div","data-plasmic-name":"root","data-plasmic-override":a.root,"data-plasmic-root":!0,"data-plasmic-for-node":t,hasGap:!0,className:Object(i.b)(I.all,q.root_reset,B.root)},Object(i.c)("div",{className:Object(i.b)(I.all,B.freeBox__jQXn)}),Object(i.c)(i.a,{as:"div",hasGap:!0,className:Object(i.b)(I.all,B.freeBox__jET2)},Object(i.c)(i.a,{as:"div",hasGap:!0,className:Object(i.b)(I.all,B.freeBox__ucks8)},Object(i.c)("div",{className:Object(i.b)(I.all,I.__wab_text,B.freeBox__yz8Je)},"Prescription Form"),Object(i.c)("div",{className:Object(i.b)(I.all,I.__wab_text,B.freeBox___6OPoA)},"With us, you feel Secure")),Object(i.c)("img",{"data-plasmic-name":"img","data-plasmic-override":a.img,alt:"",className:Object(i.b)(I.img,B.img),role:"img",src:"data:image/png;base64,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"}),Object(i.c)("div",{className:Object(i.b)(I.all,B.freeBox__ibhqp)},Object(i.c)(d,{"data-plasmic-name":"antdDatePicker","data-plasmic-override":a.antdDatePicker,className:Object(i.b)("__wab_instance",B.antdDatePicker)})),Object(i.c)(g,{className:Object(i.b)("__wab_instance",B.antdFormInput__xd91G),label:"Name",type:"text"}),Object(i.c)(g,{className:Object(i.b)("__wab_instance",B.antdFormInput__rmtX2),label:"Age",type:"number"}),Object(i.c)(g,{className:Object(i.b)("__wab_instance",B.antdFormInput__rgmsz),label:"ID",type:"text"}),Object(i.c)(k,{className:Object(i.b)("__wab_instance",B.antdMedicineInput__y9Csf),label:"Medicine 1"}),Object(i.c)(k,{className:Object(i.b)("__wab_instance",B.antdMedicineInput__atb4D),label:"Medicine 2"}),Object(i.c)(g,{className:Object(i.b)("__wab_instance",B.antdFormInput__yLmAq),label:"Previous Prescription",type:"upload"}),Object(i.c)(T,{"data-plasmic-name":"antdFormSubmit","data-plasmic-override":a.antdFormSubmit,className:Object(i.b)("__wab_instance",B.antdFormSubmit)})))))}({variants:t.variants,args:t.args,overrides:t.overrides,dataFetches:a.dataFetches,forNode:e})};return a.displayName="root"===e?"PlasmicHomepage":"PlasmicHomepage.".concat(e),a}var X=Object.assign(M("root"),{img:M("img"),antdDatePicker:M("antdDatePicker"),antdFormSubmit:M("antdFormSubmit"),internalVariantProps:D,internalArgProps:S});function R(e,a){return Object(o.jsx)(X,Object(r.a)({root:{ref:a}},e))}var J=_.forwardRef(R);t(223);var Y=function(){return Object(o.jsx)(_.Fragment,{children:Object(o.jsx)(J,{})})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,237)).then((function(a){var t=a.getCLS,_=a.getFID,c=a.getFCP,s=a.getLCP,l=a.getTTFB;t(e),_(e),c(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(Y,{})}),document.getElementById("root")),H()},31:function(e,a,t){e.exports={root:"PlasmicHomepage_root__1OD1v",freeBox__jQXn:"PlasmicHomepage_freeBox__jQXn__QjE1U",freeBox__jET2:"PlasmicHomepage_freeBox__jET2__SNKom",freeBox__ucks8:"PlasmicHomepage_freeBox__ucks8__1AUAF",freeBox__yz8Je:"PlasmicHomepage_freeBox__yz8Je__1q0Rd",freeBox___6OPoA:"PlasmicHomepage_freeBox___6OPoA__1cVbT",img:"PlasmicHomepage_img__RApvh",freeBox__ibhqp:"PlasmicHomepage_freeBox__ibhqp__5JIwT",antdDatePicker:"PlasmicHomepage_antdDatePicker__2tZlS",antdFormInput__xd91G:"PlasmicHomepage_antdFormInput__xd91G__aZU9J",antdFormInput__rmtX2:"PlasmicHomepage_antdFormInput__rmtX2__tkDpX",antdFormInput__rgmsz:"PlasmicHomepage_antdFormInput__rgmsz__2r2QY",antdMedicineInput__y9Csf:"PlasmicHomepage_antdMedicineInput__y9Csf__2sxhF",antdMedicineInput__atb4D:"PlasmicHomepage_antdMedicineInput__atb4D__uRz36",antdFormInput__yLmAq:"PlasmicHomepage_antdFormInput__yLmAq__279s1",antdFormSubmit:"PlasmicHomepage_antdFormSubmit__I3hai"}},38:function(e,a,t){e.exports={all:"plasmic__default_style_all__2f2AT",img:"plasmic__default_style_img__1B0wX plasmic__default_style_all__2f2AT",input:"plasmic__default_style_input__20B9a plasmic__default_style_all__2f2AT",textarea:"plasmic__default_style_textarea__2SBc1 plasmic__default_style_all__2f2AT",button:"plasmic__default_style_button__1cgxg plasmic__default_style_all__2f2AT",code:"plasmic__default_style_code__wkY2e plasmic__default_style_all__2f2AT",pre:"plasmic__default_style_pre__3CeAw plasmic__default_style_all__2f2AT",h1:"plasmic__default_style_h1__2d6zK plasmic__default_style_all__2f2AT",h2:"plasmic__default_style_h2__9bn4S plasmic__default_style_all__2f2AT",h3:"plasmic__default_style_h3__BamkK plasmic__default_style_all__2f2AT",h4:"plasmic__default_style_h4__41zq8 plasmic__default_style_all__2f2AT",h5:"plasmic__default_style_h5__y-PM6 plasmic__default_style_all__2f2AT",h6:"plasmic__default_style_h6__1XBpP plasmic__default_style_all__2f2AT",address:"plasmic__default_style_address__DjLHj plasmic__default_style_all__2f2AT",ol:"plasmic__default_style_ol__3VB-g plasmic__default_style_all__2f2AT",ul:"plasmic__default_style_ul__2_iM8 plasmic__default_style_all__2f2AT",select:"plasmic__default_style_select__tkUlY plasmic__default_style_all__2f2AT",li:"plasmic__default_style_li__2KnRr plasmic__default_style_all__2f2AT",plasmic_default__component_wrapper:"plasmic__default_style_plasmic_default__component_wrapper__sanVl",__wab_text:"plasmic__default_style___wab_text__16LPG",plasmic_page_wrapper:"plasmic__default_style_plasmic_page_wrapper__wrlPj"}}},[[224,1,2]]]);
//# sourceMappingURL=main.ed324558.chunk.js.map
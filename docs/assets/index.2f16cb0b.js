import{p as o,a as n,r as t,o as e,c as u,b as l,w as a,F as s,d as r,e as d,f,g as c}from"./vendor.b92e0d55.js";o("data-v-ffdff048"),n();const i={},p=l("div",null,[l("h4",null,"ヘッダー")],-1),m=r(" Home "),h=r("About "),v=r(" Home "),b=r("Info ");i.render=function(o,n){const r=t("router-link");return e(),u(s,null,[p,l("div",null,[l(r,{to:"/"},{default:a((()=>[m])),_:1}),l(r,{to:"/about"},{default:a((()=>[h])),_:1}),l(r,{to:"/home"},{default:a((()=>[v])),_:1}),l(r,{to:"/info"},{default:a((()=>[b])),_:1})])],64)};const g=l("img",{alt:"Vue logo",src:"./assets/logo.03d6d6da.png"},null,-1),_={setup:o=>(o,n)=>{const a=t("router-view");return e(),u(s,null,[l(i),g,l(a)],64)}},H={},w=l("h4",null,"Home",-1);H.render=function(o,n){return e(),u("div",null,[w])},console.log("about__pages");const I={},j=l("h4",null,"about",-1);I.render=function(o,n,t,l,a,s){return e(),u("div",null,[j])};const k={},y=l("h4",null,"Info",-1);k.render=function(o,n){return e(),u("div",null,[y])};const A=[{path:"/foo",component:{template:"<div>foo</div>"}},{path:"/info",component:k},{path:"/home",component:H},{path:"/about",component:I},{path:"/",component:H}],F=d({history:f(),routes:A});c(_).use(F).mount("#app");
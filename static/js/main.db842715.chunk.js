(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(n,e,t){n.exports=t(45)},45:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(17),i=t.n(o),c=t(22),u=t(18),l=t.n(u).a.create({baseURL:"https://online-resume-backend.herokuapp.com"}),p=t(1),d=t(2);function f(){var n=Object(p.a)(["\n*{\n    font-family: 'roboto', sans-serif;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml, body, #root {\n    height:100%;\n}\n\n:root {\n    --gray: #f3f3f3;\n    --darkblue: #2f4154;\n    --lightblue: #3b9fc1;\n    --white: #fff;\n    --black: #000;\n  }\n"]);return f=function(){return n},n}var x=Object(d.a)(f());function b(){var n=Object(p.a)(["\n  height: 100vh;\n  max-width: 920px;\n  margin: 0 auto;\n"]);return b=function(){return n},n}var s=d.b.div(b());function m(){var n=Object(p.a)(['\n  display: grid;\n  width: 300px;\n  grid-template-rows: 210px 80px;\n  grid-template-areas: "text" "stats";\n  border-radius: 18px;\n  background: var(--white);\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);\n  text-align: center;\n  margin: 30px;\n\n  .card-text {\n    grid-area: text;\n    margin: 25px;\n  }\n  .card-text p {\n    color: grey;\n    font-size: 14px;\n    font-weight: 300;\n    padding: 10px 10px;\n  }\n  .card-text h2 {\n    margin-top: 10px;\n    font-size: 22px;\n  }\n  .card-stats {\n    grid-area: stats;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    background: var(--lightblue);\n  }\n  a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    color: white;\n    padding: 10px;\n    text-decoration: none;\n  }\n']);return m=function(){return n},n}function g(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 0px 80px;\n"]);return g=function(){return n},n}function v(){var n=Object(p.a)(["\n  width: 570px;\n  border-bottom: 2px solid var(--lightblue);\n  margin-bottom: 20px;\n"]);return v=function(){return n},n}function h(){var n=Object(p.a)(["\n  font-size: 20px;\n  font-weight: 400;\n  text-transform: uppercase;\n  background-color: var(--lightblue);\n  width: 150px;\n  padding: 3px 0px;\n  margin-bottom: 15px;\n  border-radius: 8px;\n  text-align: center;\n  color: var(--gray);\n"]);return h=function(){return n},n}function E(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding-left: 50px;\n"]);return E=function(){return n},n}function j(){var n=Object(p.a)(["\n  padding: 30px 0px;\n  margin: 0 auto;\n  background-color: var(--darkblue);\n  color: var(--darkblue);\n"]);return j=function(){return n},n}var k=d.b.div(j()),w=d.b.div(E()),O=d.b.h3(h()),y=d.b.div(v()),z=d.b.div(g()),N=d.b.div(m()),_=function(n){var e=n.projects;return a.a.createElement(k,null,a.a.createElement(w,null,a.a.createElement(O,null,"Projects"),a.a.createElement(y,null)),a.a.createElement(z,null,e.map((function(n){return a.a.createElement(N,null,a.a.createElement("div",{className:"card-text"},a.a.createElement("h2",null,n.name),a.a.createElement("p",null,n.description)),a.a.createElement("div",{className:"card-stats"},a.a.createElement("a",{href:n.live,target:"_blank",rel:"noopener noreferrer"},"Live"),a.a.createElement("a",{href:n.code,target:"_blank",rel:"noopener noreferrer"},"Code")))}))))};function F(){var n=Object(p.a)(["\n  max-width: 550px;\n  margin: 20px 20px 20px 0px;\n  font-size: 14px;\n  line-height: 20px;\n"]);return F=function(){return n},n}function S(){var n=Object(p.a)(["\n  margin: 15px 0px 30px;\n  width: 570px;\n  border-bottom: 2px solid var(--lightblue);\n  position: relative;\n  float: right;\n"]);return S=function(){return n},n}function J(){var n=Object(p.a)([""]);return J=function(){return n},n}function L(){var n=Object(p.a)(["\n  padding: 2px 10px;\n  font-size: 30px;\n  text-decoration: none;\n  color: var(--darkblue);\n"]);return L=function(){return n},n}function A(){var n=Object(p.a)(["\n  padding: 2px 0px;\n  font-size: 30px;\n  text-decoration: none;\n  color: var(--darkblue);\n"]);return A=function(){return n},n}function B(){var n=Object(p.a)(["\n  padding: 2px 0px;\n  font-size: 14px;\n"]);return B=function(){return n},n}function C(){var n=Object(p.a)(["\n  padding: 2px 0px;\n  font-size: 14px;\n"]);return C=function(){return n},n}function D(){var n=Object(p.a)(["\n  padding: 2px 0px;\n  font-size: 14px;\n  text-decoration: none;\n  color: var(--black);\n"]);return D=function(){return n},n}function I(){var n=Object(p.a)(["\n  font-size: 20px;\n  font-weight: 400;\n  text-transform: uppercase;\n  background-color: var(--darkblue);\n  width: 150px;\n  padding: 3px 0px;\n  margin-bottom: 15px;\n  transform: skew(-20deg);\n  text-align: center;\n  color: var(--gray);\n"]);return I=function(){return n},n}function M(){var n=Object(p.a)(["\n  min-width: 200px;\n"]);return M=function(){return n},n}function P(){var n=Object(p.a)(["\n  padding: 20px 0px 20px 50px;\n  margin: 0 auto;\n  background-color: var(--white);\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]);return P=function(){return n},n}function R(){var n=Object(p.a)(["\n  font-size: 16px;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  color: var(--darkblue);\n"]);return R=function(){return n},n}function U(){var n=Object(p.a)(["\n  font-size: 60px;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  color: var(--darkblue);\n"]);return U=function(){return n},n}function q(){var n=Object(p.a)(["\n  padding: 40px 80px;\n  margin: 0 auto;\n  background-color: var(--gray);\n"]);return q=function(){return n},n}function G(){var n=Object(p.a)([""]);return G=function(){return n},n}var H=d.b.div(G()),K=d.b.div(q()),Q=d.b.h1(U()),T=d.b.h2(R()),V=d.b.div(P()),W=d.b.div(M()),X=d.b.h3(I()),Y=d.b.a(D()),Z=d.b.p(C()),$=d.b.p(B()),nn=d.b.a(A()),en=d.b.a(L()),tn=d.b.div(J()),rn=d.b.div(S()),an=d.b.p(F()),on=function(n){var e=n.user;return a.a.createElement(H,null,a.a.createElement(K,null,a.a.createElement(Q,null,e.name),a.a.createElement(T,null,"Frontend Developer")),a.a.createElement(V,null,a.a.createElement(W,null,a.a.createElement(X,null,"About me"),a.a.createElement(Y,{href:"mailto:"+e.email},e.email),a.a.createElement(Z,null,e.phone),a.a.createElement($,null,e.location),a.a.createElement(nn,{href:e.github,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})),a.a.createElement(en,{href:e.linkedin,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"}))),a.a.createElement(tn,null,a.a.createElement(rn,null),a.a.createElement(an,null,e.about),a.a.createElement(rn,null))))};function cn(){var n=Object(p.a)(["\n  columns: 2;\n  padding: 0px 0px 30px 100px;\n  list-style-type: none;\n  li {\n    padding: 3px 0px;\n  }\n"]);return cn=function(){return n},n}function un(){var n=Object(p.a)(["\n  font-size: 20px;\n  font-weight: 400;\n  text-transform: uppercase;\n  background-color: var(--darkblue);\n  width: 220px;\n  padding: 3px 0px;\n  margin-bottom: 15px;\n  transform: skew(-20deg);\n  text-align: center;\n  color: var(--gray);\n  position: absolute;\n  top: -65px;\n"]);return un=function(){return n},n}function ln(){var n=Object(p.a)(["\n  padding: 0px 50px 20px;\n  margin: 0 auto;\n  background-color: var(--white);\n  position: relative;\n"]);return ln=function(){return n},n}var pn=d.b.div(ln()),dn=d.b.h3(un()),fn=d.b.ul(cn()),xn=function(n){var e=n.specializations;return a.a.createElement(pn,null,a.a.createElement(dn,null,"Specializations"),a.a.createElement(fn,null,e.map((function(n){return a.a.createElement("li",null,n)}))))},bn=function(n){var e=n.users;return a.a.createElement(a.a.Fragment,null,e.map((function(n){return a.a.createElement(s,null,a.a.createElement(on,{key:n.name,user:n}),a.a.createElement(xn,{key:n.projects[1].name,specializations:n.specializations}),a.a.createElement(_,{key:n.projects[0].name,projects:n.projects}))})))};var sn=function(){var n=Object(r.useState)([]),e=Object(c.a)(n,2),t=e[0],o=e[1];return Object(r.useEffect)((function(){l.get("/users").then((function(n){o(n.data)}))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(bn,{users:t}),a.a.createElement(x,null))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(sn,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.db842715.chunk.js.map
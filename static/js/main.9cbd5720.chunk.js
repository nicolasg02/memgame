(this.webpackJsonpmemgame=this.webpackJsonpmemgame||[]).push([[0],{26:function(e,n,t){"use strict";t.r(n);var c,a,r,i,s,l,o,j=t(0),d=t.n(j),h=t(13),b=t.n(h),u=t(9),O=t.n(u),m=t(14),g=t(11),x=t(4),f=t(2),p=t(3),v=t(1),S=p.a.div(c||(c=Object(f.a)(["\n  margin: 2rem 0;\n  flex-grow: 1;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 2rem 0;\n"]))),y=p.a.ul(a||(a=Object(f.a)(["\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(5, 225px);\n  grid-template-rows: 350px;\n  grid-auto-columns: 225px;\n  grid-auto-rows: 350px;\n  gap: 10px;\n\n  li {\n  }\n"]))),w=p.a.li(r||(r=Object(f.a)(["\n  cursor: pointer;\n"]))),k=p.a.div(i||(i=Object(f.a)(["\n  text-align: center;\n"]))),_=p.a.div(s||(s=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),A=function(e){var n=e.characters,t=e.handleClick,c=e.score,a=e.bestScore,r=e.gameOver,i=e.gameWon,s=e.handlePlayAgain;return!0===i?Object(v.jsx)(S,{children:Object(v.jsxs)(k,{children:[Object(v.jsx)("h2",{children:"You Won!!"}),Object(v.jsx)("button",{id:"game-won",onClick:s,children:"Play Again"})]})}):!0===r?Object(v.jsx)(S,{children:Object(v.jsxs)(_,{children:[Object(v.jsx)("h2",{children:"Game Over."}),Object(v.jsxs)("p",{children:["Score: ",c]}),Object(v.jsxs)("p",{children:["Best Score: ",a]}),Object(v.jsx)("button",{id:"game-over",onClick:s,children:"Play Again"})]})}):Object(v.jsx)(S,{children:Object(v.jsx)(y,{children:n.map((function(e){return Object(v.jsx)(w,{value:e.mal_id,children:Object(v.jsx)("img",{src:e.image_url,alt:e.name,id:e.mal_id.toString(),onClick:t})},e.mal_id)}))})})},C=p.a.div(l||(l=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 8rem;\n\n  h2 {\n    font-size: 2.5rem;\n  }\n\n  div {\n    display: flex;\n    justify-content: space-between;\n    width: 16rem;\n\n    h4 {\n      font-size: 1.2rem;\n    }\n  }\n"]))),M=function(e){var n=e.score,t=e.bestScore,c=e.highestScore;return Object(v.jsxs)(C,{children:[Object(v.jsx)("h2",{children:"Memgame"}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("h4",{children:["Score: ",Object(v.jsx)("span",{children:n})]}),Object(v.jsxs)("h4",{children:["Best Score:"," ",Object(v.jsxs)("span",{children:[t,"/",c]})]})]})]})},P=p.a.div(o||(o=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: #1a1a1a;\n  color: #f4f4f4;\n  align-items: center;\n"])));function B(e){for(var n,t=e.length;0!==t;){n=Math.floor(Math.random()*t),t--;var c=[e[n],e[t]];e[t]=c[0],e[n]=c[1]}return e}var W=function(){var e=Object(j.useState)([]),n=Object(x.a)(e,2),t=n[0],c=n[1],a=Object(j.useState)(0),r=Object(x.a)(a,2),i=r[0],s=r[1],l=Object(j.useState)(0),o=Object(x.a)(l,2),d=o[0],h=o[1],b=Object(j.useState)(0),u=Object(x.a)(b,2),f=u[0],p=u[1],S=Object(j.useState)([]),y=Object(x.a)(S,2),w=y[0],k=y[1],_=Object(j.useState)(!1),C=Object(x.a)(_,2),W=C[0],z=C[1],E=Object(j.useState)(!1),J=Object(x.a)(E,2),G=J[0],I=J[1];return Object(j.useEffect)((function(){(function(){var e=Object(m.a)(O.a.mark((function e(){var n,t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/anime/32998/characters_staff");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,c(t.characters.filter((function(e){return 142390!==e.mal_id&&142382!==e.mal_id}))),s(t.characters.length-2);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(v.jsxs)(P,{className:"App",children:[Object(v.jsx)(M,{score:d,bestScore:f,highestScore:i}),Object(v.jsx)(A,{characters:B(t),handleClick:function(e){var n=e.target;if(k((function(e){return[].concat(Object(g.a)(e),[n.id])})),w.length===t.length&&I(!0),w.includes(n.id))z(!0),p(d);else{h(d+1);var a=B(Object(g.a)(t));c(a)}},score:d,bestScore:f,gameOver:W,gameWon:G,handlePlayAgain:function(e){h(0),k([]),"game-over"===e.target.id&&z(!1),"game-won"===e.target.id&&(I(!1),p(0))}})]})};b.a.render(Object(v.jsx)(d.a.StrictMode,{children:Object(v.jsx)(W,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.9cbd5720.chunk.js.map
import './polyfills.server.mjs';
import{B as M,C as O,F as S,J as F,M as P,N as H,a as p,b as _,c as C,d as c,e as v,f as y,g as f,h as u,i as b,j as r,k as i,l as s,m as w,n as x,o as m,p as a,q as k,r as g,s as l,z as T}from"./chunk-3EFZYK5R.mjs";var A=(()=>{class e{constructor(){this.title="tictactoe"}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-root"]],standalone:!0,features:[l],decls:1,vars:0,template:function(t,n){t&1&&s(0,"router-outlet")},dependencies:[F]})}}return e})();function X(e,d){if(e&1){let o=w();r(0,"div",2)(1,"div",6),x("click",function(){let n=_(o).$index,h=m();return C(h.player(n))}),a(2),i()()}if(e&2){let o=d.$implicit;c(2),k(o)}}function z(e,d){if(e&1&&(r(0,"h2",7),a(1),i()),e&2){let o=m().$implicit,t=m();c(),g("",t.board[o[0]]," wins!")}}function N(e,d){if(e&1&&v(0,z,2,1,"h2",7),e&2){let o=d.$implicit,t=m();y(0,t.board[o[0]]&&t.board[o[0]]===t.board[o[1]]&&t.board[o[1]]===t.board[o[2]]?0:-1)}}var D=(()=>{class e{constructor(){this.playerTurn="X",this.winner=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]}ngOnInit(){this.board=new Array(9).fill("")}player(o){this.board[o]=this.playerTurn,this.playerTurn=this.playerTurn=="X"?"O":"X"}resetGame(){this.board=new Array(9).fill(""),this.playerTurn="X"}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-home"]],standalone:!0,features:[l],decls:12,vars:1,consts:[[1,"game-container"],[1,"animate__animated","animate__backInLeft","row","g-0","game-board"],[1,"col-md-4"],[1,"circle"],[1,"circle1"],[1,"btn","btn-outline-warning","text-white","fs-4","d-block","w-50",3,"click"],[1,"fw-bold","square","d-flex","align-items-center","justify-content-center","fs-2",3,"click"],[1,"bg-black","text-center","w-75","text-white"]],template:function(t,n){t&1&&(r(0,"h2"),a(1),i(),r(2,"div",0)(3,"div",1),u(4,X,3,1,"div",2,f),i(),s(6,"div",3)(7,"div",4),u(8,N,1,1,null,null,f),r(10,"button",5),x("click",function(){return n.resetGame()}),a(11," reset"),i()()),t&2&&(c(),g("Player Turn: ",n.playerTurn,""),c(3),b(n.board),c(4),b(n.winner))},styles:['.game-container[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;background-color:#000}.game-board[_ngcontent-%COMP%]{width:60%;height:70%;border-radius:10px;background:linear-gradient(to right,#66008083,#09c);position:relative;z-index:555}.square[_ngcontent-%COMP%]{background-color:transparent;width:100%;height:160px;border:2px solid black;border-radius:10px;transition:all .6s}.square[_ngcontent-%COMP%]:hover{background-color:#09c}.game-board[_ngcontent-%COMP%]:hover.game-board:after{opacity:0}.game-board[_ngcontent-%COMP%]:hover.game-board:before{opacity:0}.game-board[_ngcontent-%COMP%]:after{content:"";width:100px;height:100px;border-radius:50%;background-color:#00f7ff50;position:absolute;top:-60px;left:-50px;z-index:-1;-webkit-backdrop-filter:blur(150px);backdrop-filter:blur(150px)}.game-board[_ngcontent-%COMP%]:before{content:"";width:100px;height:100px;border-radius:50%;background-color:#00f7ff50;-webkit-backdrop-filter:blur(150px);backdrop-filter:blur(150px);position:absolute;bottom:-60px;right:-50px;z-index:-1}']})}}return e})();var E=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-notfound"]],standalone:!0,features:[l],decls:2,vars:0,template:function(t,n){t&1&&(r(0,"p"),a(1,"notfound works!"),i())}})}}return e})();var $=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:D,title:"home"},{path:"**",component:E}];var q={providers:[P($,H({scrollPositionRestoration:"top"})),O()]};var V={providers:[S()]},R=T(q,V);var j=()=>M(A,R),ce=j;export{ce as a};

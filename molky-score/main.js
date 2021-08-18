(()=>{"use strict";var e={862:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(645),a=n.n(r),i=n(667),o=n.n(i),s=new URL(n(451),n.b),c=a()((function(e){return e[1]})),u=o()(s);c.push([e.id,"\n@font-face {\n    font-family: 'Roboto';\n    src: url("+u+")  format('truetype');\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    background: #fcd04b;\n    font-family: 'Roboto', Arial, Helvetica, sans-serif;\n    color: white;\n}\n\n.score-board, .commands-board, .pin-board, .menu-board , .next-player-board, fieldset {\n    flex: 1;\n    display: flex;\n    align-content: space-around;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n.score {\n    flex: 1;\n    display: flex;\n    align-content: space-around;\n    justify-content: space-around;\n}\n\nh1 {\n    font-size: 4em;\n    text-shadow: -3px 0 #f29e0d, 0 3px #f29e0d, 3px 0 #f29e0d, 0 -3px #f29e0d;\n    color: white;\n}\n\n\n.pin {\n    flex: 1;\n    display: flex;\n    align-content: space-around;\n    justify-content: space-around;\n    margin: 5px;\n    cursor: pointer;\n    aspect-ratio: 1;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\n.pin-value {\n    display: flex;\n    align-content: space-around;\n    justify-content: space-around;\n    height: calc(100vh/8);\n    font-size: 3em;\n    aspect-ratio: 1;\n    border: 4px solid #fcad26;\n    background: white;\n    color: #f29e0d;\n    border-radius: 50%;\n    flex-direction: column;\n    flex-wrap: wrap;\n}\n\n.selected {\n    background: #f29e0d;\n    color: white;\n}\n\n\nbutton {\n    flex: 1;\n    border: none;\n    min-width: calc(50vw - 70px);\n    font-family: inherit;\n    font-size: inherit;\n    background: none;\n    cursor: pointer;\n    padding: 25px;\n    display: inline-block;\n    margin: 15px 30px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-weight: 700;\n    outline: none;\n    position: relative;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s;\n    background: #fcad26;\n    color: #fff;\n}\n\nfieldset {\n    display: flex;\n    border-color: #fcad26;\n}\n\nfieldset legend {\n    font-size: 1.5em;\n}\n\ntextarea {\n    width: 100%;\n    height: 50vw;\n    background: transparent;\n    border: none;\n    font-size: 2em;\n    resize: none;\n    color: white;\n}",""]);const l=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},802:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(379),a=n.n(r),i=n(795),o=n.n(i),s=n(569),c=n.n(s),u=n(565),l=n.n(u),d=n(216),m=n.n(d),p=n(589),f=n.n(p),h=n(862),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=m(),a()(h.Z,v);const y=h.Z&&h.Z.locals?h.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var m=n(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==m?(t[m].references++,t[m].updater(p)):t.push({identifier:d,updater:a(p,r),references:1}),o.push(d)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var c=r(e,a),u=0;u<i.length;u++){var l=n(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},239:function(e,t,n){var r=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return o};Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0;var a=n(30),i=function(){function e(e,t,n,r,a){this.teams=e,this.thrusts=t,this.activeMemberPerTeam=n,this.activeTeam=r,this.rules=a}return e.newGame=function(t,n){void 0===n&&(n=[]);var r=t.map((function(){return[]})),a=t.map((function(){return 0}));return new e(t,r,a,0,n)},e.fromSave=function(t){return new e(t.teams,t.thrusts,t.activeTeamMember,t.activeTeam,[])},e.prototype.generateSave=function(){return{teams:this.teams,activeTeam:this.activeTeam,activeTeamMember:this.activeMemberPerTeam,thrusts:this.thrusts,rules:this.rules}},e.prototype.getScores=function(){return this.thrusts.map((function(e){return a.scoreOf(e)}))},e.prototype.getNextPlayer=function(){return this.teams[this.activeTeam][this.activeMemberPerTeam[this.activeTeam]]},e.prototype.setThrust=function(e){this.thrusts[this.activeTeam].push(e),0==a.scoreOf(this.thrusts[this.activeTeam].slice(-3))&&a.scoreOf(this.thrusts[this.activeTeam])>25&&(this.thrusts[this.activeTeam].pop(),this.thrusts[this.activeTeam].push([-1*a.scoreOf(this.thrusts[this.activeTeam])%25])),this.activeMemberPerTeam[this.activeTeam]=(this.activeMemberPerTeam[this.activeTeam]+1)%this.teams[this.activeTeam].length,this.activeTeam=(this.activeTeam+1)%this.teams.length},e.prototype.undo=function(){this.activeTeam-=1,this.activeTeam=this.activeTeam<0?this.teams.length-1:this.activeTeam,this.activeMemberPerTeam[this.activeTeam]=this.activeMemberPerTeam[this.activeTeam]-1<0?this.teams[this.activeTeam].length-1:this.activeMemberPerTeam[this.activeTeam]-1,this.thrusts[this.activeTeam].pop()},e.prototype.getTeamNames=function(){return this.teams.map((function(e){return e.map((function(e){var t=r(e),n=t[0],a=t.slice(1);return n.toUpperCase()+a.join("").toLowerCase()})).join(", ")}))},e.prototype.totalNbOfPlayers=function(){return this.teams.reduce((function(e,t){return e+t.length}),0)},e}();t.Game=i},30:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.scoreOf=void 0,t.scoreOf=function(e){return e.reduce((function(e,t){var n=e+(1===t.length?t[0]:t.length);return n>50?25:n}),0)}},520:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Shuffler=void 0;var n=function(){function e(e){this.random=e}return e.prototype.shuffle=function(e){return e.sort(this.random)},e}();t.Shuffler=n},860:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Store=void 0;var n=function(){function e(){this.storageKey="molky"}return e.prototype.load=function(){return JSON.parse(localStorage.getItem(this.storageKey))},e.prototype.persist=function(e){localStorage.setItem(this.storageKey,JSON.stringify(e))},e.prototype.saveExists=function(){return null!==localStorage.getItem(this.storageKey)},e}();t.Store=n},722:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Team=void 0;var n=function(){function e(e){this.shuffler=e}return e.prototype.groupPlayersInTeams=function(e){var t=[],n=[],r=[];return(e=this.shuffler.shuffle(e)).length%3!=0?(e.forEach((function(e,r){switch(r%2){case 0:t.push(e);break;case 1:n.push(e)}})),[t,n]):(e.forEach((function(e,a){switch(a%3){case 0:t.push(e);break;case 1:n.push(e);break;case 2:r.push(e)}})),[t,n,r])},e}();t.Team=n},762:function(e,t,n){var r=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return o},a=this&&this.__spreadArray||function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e};Object.defineProperty(t,"__esModule",{value:!0});var i=n(239);n(802);var o=n(860),s=n(722),c=n(520);new(function(){function e(e,t){this.store=e,this.teams=t,this.unselectedAllPins=[],this.missButton=null,this.selectedPins=[],this.game=this.store.saveExists()?i.Game.fromSave(this.store.load()):i.Game.newGame([]),0!==this.game.totalNbOfPlayers()&&(this.createPins(),this.missButton=this.createCommands(),this.createNextPlayerBoard(),this.createScoreBoard()),this.createNewGameCommand()}return e.prototype.render=function(){document.body.innerHTML="",0!==this.game.totalNbOfPlayers()&&(this.createPins(),this.missButton=this.createCommands(),this.createNextPlayerBoard(),this.createScoreBoard()),this.createNewGameCommand()},e.prototype.renderNewGamePage=function(){document.body.innerHTML="";var e=this.createPlayerInput();this.createNewGamePageCommands(e)},e.prototype.createPins=function(){var e=this,t=document.createElement("div");t.classList.add("pin-board"),document.body.append(t),this.unselectedAllPins=new Array(12).fill(null).map((function(n,r){var a=document.createElement("div"),i=document.createElement("div");return a.classList.add("pin"),a.append(i),i.classList.add("pin-value"),i.innerText=""+(r+1),a.addEventListener("click",(function(){var t;i.classList.toggle("selected"),e.togglePin(r+1),null===(t=e.missButton)||void 0===t||t.classList.remove("selected")})),t.append(a),function(){return i.classList.remove("selected")}}))},e.prototype.createCommands=function(){var e=this,t=document.createElement("div");t.classList.add("commands-board"),document.body.append(t);var n=document.createElement("button");n.innerText="Miss 💀",n.classList.add("btn"),n.addEventListener("click",(function(){e.unselectedAllPins.forEach((function(e){return e()})),n.classList.add("selected"),e.chooseMiss()}));var r=document.createElement("button");r.innerText="Submit ✔",r.addEventListener("click",(function(){e.submitScore()}));var a=document.createElement("button");return a.innerText="Undo ↩",a.addEventListener("click",(function(){e.undo()})),null==t||t.append(n),null==t||t.append(r),null==t||t.append(a),n},e.prototype.togglePin=function(e){this.selectedPins.indexOf(e)>=0?this.selectedPins=this.selectedPins.filter((function(t){return t!==e})):this.selectedPins.push(e),this.selectedPins=this.selectedPins.filter((function(e){return 0!==e}))},e.prototype.chooseMiss=function(){this.selectedPins=[0]},e.prototype.createNewGameCommand=function(){var e=this,t=document.createElement("div");t.classList.add("menu-board"),document.body.append(t);var n=document.createElement("button");n.innerText="New Game",n.addEventListener("click",(function(){e.renderNewGamePage()})),t.append(n)},e.prototype.createScoreBoard=function(){var e=this,t=document.createElement("div");t.classList.add("score-board"),t.append.apply(t,a([],r(this.game.getScores().map((function(t,n){var r=document.createElement("fieldset"),a=document.createElement("legend"),i=document.createElement("h1");return i.innerText=""+t,a.innerText=e.game.getTeamNames()[n],r.append(a),r.append(i),r}))))),document.body.append(t)},e.prototype.submitScore=function(){0!==this.selectedPins.length&&(this.game.setThrust(this.selectedPins),this.selectedPins=[],this.unselectedAllPins.forEach((function(e){return e()})),this.render(),this.store.persist(this.game.generateSave()))},e.prototype.createNextPlayerBoard=function(){var e=document.createElement("div"),t=document.createElement("h1");e.classList.add("next-player-board"),t.innerText=this.game.getNextPlayer(),document.body.append(e),e.append(t)},e.prototype.undo=function(){this.game.undo(),this.render()},e.prototype.createPlayerInput=function(){var e=document.createElement("fieldset"),t=document.createElement("legend"),n=document.createElement("textarea");return t.innerText="Players",e.append(t),e.append(n),n.placeholder="Player 1\nPlayer 2\nPlayer 3",document.body.append(e),function(){return n.value.split("\n").filter((function(e){return e}))}},e.prototype.createNewGamePageCommands=function(e){var t=this,n=document.createElement("div");n.classList.add("commands-board"),document.body.append(n);var r=document.createElement("button");r.innerText="Cancel",r.classList.add("btn"),r.addEventListener("click",(function(){t.render()}));var a=document.createElement("button");a.innerText="Start",a.addEventListener("click",(function(){t.game=i.Game.newGame(t.teams.groupPlayersInTeams(e())),t.render()})),null==n||n.append(r),null==n||n.append(a)},e}())(new o.Store,new s.Team(new c.Shuffler(Math.random)))},451:(e,t,n)=>{e.exports=n.p+"a8d6ac03c7b96b7acb62.ttf"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n(762)})();
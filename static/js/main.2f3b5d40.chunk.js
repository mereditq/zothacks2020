(this["webpackJsonpzothacks-2020-team11"]=this["webpackJsonpzothacks-2020-team11"]||[]).push([[0],{32:function(i,e,t){},33:function(i,e,t){},34:function(i,e,t){},44:function(i,e,t){},45:function(i,e,t){},46:function(i,e,t){},52:function(i,e,t){"use strict";t.r(e);var c=t(1),A=t(0),r=t.n(A),s=t(25),n=t.n(s),a=(t(32),t(33),t(14)),u=t(2),g=(t(34),t.p,function(){return Object(c.jsx)("div",{className:"login--wrapper",children:Object(c.jsxs)("div",{className:"login-card",children:[Object(c.jsx)("h1",{className:"landing-page-title",children:"Listen & Swipe"}),Object(c.jsx)("p",{id:"pitch",children:"Ever loved a song so much you wanted to swipe right on it? Here's an app for you! With Listen and Swipe, you just need a spotify account and we'll recommend you songs based on your recent playlist history! Swipe the card right if you like the song, and left if you don't. We'll compile the liked songs into a playlist for you on spotify if you'd like! (Remember to click on the album cover to listen to the song on Spotify)."}),Object(c.jsx)("button",{onClick:function(){var i=window.location.href+"app/",e="https://accounts.spotify.com/authorize?response_type=token&client_id=".concat("0bb1e801202d4028b044f848af13e749","&redirect_uri=").concat(i,"&scope=").concat(encodeURIComponent("user-read-private user-read-email playlist-read-private playlist-read-collaborative"));window.location=e},children:" Login with Spotify "})]})})}),o=t(19),l=t(6),F=t(15),x=(t(44),function(i){var e=i.stack,t=i.songInfo,r=Object(A.useRef)(null),s=t.album.images[0].url,n=t.artists[0].name;return console.log(t),Object(A.useEffect)((function(){if(null!==r){var i=e.createCard(r.current);return function(){i.destroy()}}}),[r,e]),Object(c.jsxs)("li",{className:"song-card--wrapper",ref:r,id:t.id,children:[Object(c.jsx)("p",{id:"id-name",children:t.name}),Object(c.jsxs)("a",{rel:"noopener noreferrer",href:t.external_urls.spotify,target:"_blank",children:[Object(c.jsx)("img",{id:"album-covers",src:s})," "]}),Object(c.jsx)("p",{class:"artists",id:"artists-title",children:" artist(s) "}),Object(c.jsx)("p",{class:"artists",id:"artists",children:n}),Object(c.jsx)("p",{class:"album",id:"album-title",children:"album"}),Object(c.jsxs)("p",{class:"album",id:"album-name",children:[" ",t.album.name]})]})}),C=(t(45),function(i){var e=i.likedSongs,t=i.spotifyApi,r=Object(A.useState)([]),s=Object(l.a)(r,2),n=s[0],a=s[1];return Object(A.useEffect)((function(){Promise.all(e.map((function(i){return t.getTrack(i)}))).then((function(i){a(i)}))}),[]),Object(A.useEffect)((function(){console.log("conslucion thing updated",n)}),[n]),Object(c.jsx)("div",{style:{position:"fixed",width:"100vw",height:"100vh",top:"0",left:"0",backgroundColor:"beige"},children:n.map((function(i){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{id:"song-name",children:[" ",i.name]}),Object(c.jsx)("img",{src:i.album.images[0].url}),Object(c.jsx)("p",{id:"artist-name",children:i.artists[0].name}),Object(c.jsx)("p",{id:"album-name",children:i.album.name})]},i.id)}))})}),k=t.p+"static/media/x_cross.adfca78c.png",J=(t(46),new(t(47))),V=function(){var i=Object(u.f)(),e=Object(A.useState)(null),t=Object(l.a)(e,2),r=t[0],s=t[1],n=Object(A.useState)(null),a=Object(l.a)(n,2),g=a[0],V=a[1],B=Object(A.useState)([]),m=Object(l.a)(B,2),X=m[0],d=m[1],I=Object(u.e)(),E=Object(F.Stack)();return E.on("throwout",(function(i){"right"===(i.throwDirection==F.Direction.LEFT?"left":"right")&&d([].concat(Object(o.a)(X),[i.target.id])),g.pop(),V(Object(o.a)(g))})),E.on("throwin",(function(i){})),Object(A.useEffect)((function(){var e=i.hash.split("&")[0].split("=")[1];console.log(e),J.setAccessToken(e),J.getUserPlaylists().then((function(i){if(0!==i.items.length){for(var e=i.items.length,t=null,c=0;c<e;++c)if(i.items[c].tracks.total>0){t=i.items[c].id;break}null===t&&(t="37i9dQZEVXbMDoHDwVN2tF"),J.getPlaylist(t).then((function(i){for(var e=new Set,t=0;e.size<=5&&t<i.tracks.items.length;){for(var c=0;c<i.tracks.items[t].track.artists.length;++c)e.add(i.tracks.items[t].track.artists[c].id);++t}var A=Array.from(e);J.getRecommendations({min_energy:.4,seed_artists:A.slice(0,4),min_popularity:50}).then((function(i){s(i)})).catch((function(i){console.log(i)}))}),(function(i){console.error(i)}))}else V("empty")}),(function(i){console.error(i),"Unauthorized"===i.statusText&&I.push("/")}))}),[]),Object(A.useEffect)((function(){null!==r&&"empty"!==r&&(console.log("ARTISTINFORMATION HAS CHANGED",r),V(r.tracks))}),[r]),null===g?Object(c.jsx)("div",{}):"empty"===g?Object(c.jsx)("div",{children:"yo make a playlist bro"}):Object(c.jsxs)("div",{className:"swiping-page--wrapper",children:[Object(c.jsx)("img",{id:"check-mark",src:"data:image/png;base64,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",alt:"green check mark"}),Object(c.jsx)("img",{id:"x-cross",src:k,alt:"red x mark"}),Object(c.jsx)("div",{className:"viewport",children:Object(c.jsx)("ul",{className:"stack",children:g.map((function(i){return Object(c.jsx)(x,{stack:E,songInfo:i})}))})}),0===(null===g||void 0===g?void 0:g.length)&&Object(c.jsx)(C,{likedSongs:X,spotifyApi:J})]})};var B=function(){return Object(c.jsxs)(a.a,{basename:"/zothacks2020",children:[Object(c.jsx)(u.a,{exact:!0,path:"/",children:Object(c.jsx)(g,{})}),Object(c.jsx)(u.a,{exact:!0,path:"/app",children:Object(c.jsx)(V,{})})]})},m=function(i){i&&i instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(e){var t=e.getCLS,c=e.getFID,A=e.getFCP,r=e.getLCP,s=e.getTTFB;t(i),c(i),A(i),r(i),s(i)}))};n.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root")),m()}},[[52,1,2]]]);
//# sourceMappingURL=main.2f3b5d40.chunk.js.map
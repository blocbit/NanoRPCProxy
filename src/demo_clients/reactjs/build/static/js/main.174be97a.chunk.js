/*! For license information please see main.174be97a.chunk.js.LICENSE.txt */
(this.webpackJsonpNanoRPCProxyClient=this.webpackJsonpNanoRPCProxyClient||[]).push([[0],{39:function(e,t){},40:function(e,t){},53:function(e,t,n){e.exports=n(86)},58:function(e,t,n){},61:function(e,t,n){},79:function(e,t){},80:function(e,t){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),i=n.n(o),c=(n(58),n(59),n(11)),s=n.n(c),u=n(25),l=n(12),h=n(9),m=n(6),d=n(17),f=n(19),g=n(52),p=(n(61),n(37)),v=n(91),k=n(27),y=n(92),C=n(93),b=n(49),E=n(51),x=null,A=function(){function e(){Object(h.a)(this,e)}return Object(l.a)(e,null,[{key:"render",value:function(e,t){x(e,t)}}]),e}();window.self.QrCode=A,function(e){function t(t,n,a,r){var o={},i=e(a,n);i.addData(t),i.make(),r=r||0;var c=i.getModuleCount(),s=i.getModuleCount()+2*r;return o.text=t,o.level=n,o.version=a,o.moduleCount=s,o.isDark=function(e,t){return t-=r,!((e-=r)<0||e>=c||t<0||t>=c)&&i.isDark(e,t)},o}function n(e,t,n,a,r,o,i,c){var s=e.isDark,u=a+o,l=r+o,h=i-1,m=i+1,d=c-1,f=c+1,g=Math.floor(Math.min(.5,Math.max(0,n.radius))*o),p=s(i,c),v=s(h,d),k=s(h,c),y=s(h,f),C=s(i,f),b=s(m,f),E=s(m,c),x=s(m,d),A=s(i,d);a=Math.round(a),r=Math.round(r),u=Math.round(u),l=Math.round(l),p?function(e,t,n,a,r,o,i,c,s,u){function l(t,n,a,r,i,c,s){t?(e.lineTo(n+c,a+s),e.arcTo(n,a,r,i,o)):e.lineTo(n,a)}i?e.moveTo(t+o,n):e.moveTo(t,n),l(c,a,n,a,r,-o,0),l(s,a,r,t,r,0,-o),l(u,t,r,t,n,o,0),l(i,t,n,a,n,0,o)}(t,a,r,u,l,g,!k&&!A,!k&&!C,!E&&!C,!E&&!A):function(e,t,n,a,r,o,i,c,s,u){function l(t,n,a,r){e.moveTo(t+a,n),e.lineTo(t,n),e.lineTo(t,n+r),e.arcTo(t,n,t+a,n,o)}i&&l(t,n,o,o),c&&l(a,n,-o,o),s&&l(a,r,-o,-o),u&&l(t,r,o,-o)}(t,a,r,u,l,g,k&&A&&v,k&&C&&y,E&&C&&b,E&&A&&x)}function a(e,t,a){var r,o,i=e.moduleCount,c=a.size/i;for(t.beginPath(),r=0;r<i;r+=1)for(o=0;o<i;o+=1){n(e,t,a,a.left+o*c,a.top+r*c,c,r,o)}!function(e,t){var n=t.fill;if("string"===typeof n)return void(e.fillStyle=n);var a,r=n.type,o=n.position,i=n.colorStops,c=o.map((function(e){return Math.round(e*t.size)}));if("linear-gradient"===r)a=e.createLinearGradient.apply(e,c);else{if("radial-gradient"!==r)throw new Error("Unsupported fill");a=e.createRadialGradient.apply(e,c)}i.forEach((function(e){var t=Object(E.a)(e,2),n=t[0],r=t[1];a.addColorStop(n,r)})),e.fillStyle=a}(t,a),t.fill()}function r(e,n){var r=function(e,n,a,r,o){a=Math.max(1,a||1),r=Math.min(40,r||40);for(var i=a;i<=r;i+=1)try{return t(e,n,i,o)}catch(c){}}(n.text,n.ecLevel,n.minVersion,n.maxVersion,n.quiet);if(!r)return null;var o=e.getContext("2d");return function(e,t,n){n.background&&(t.fillStyle=n.background,t.fillRect(n.left,n.top,n.size,n.size))}(0,o,n),a(r,o,n),e}var o={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};x=function(e,t){var n={};if(Object.assign(n,o,e),t instanceof HTMLCanvasElement)t.width===n.size&&t.height===n.size||(t.width=n.size,t.height=n.size),t.getContext("2d").clearRect(0,0,t.width,t.height),r(t,n);else{var a=function(e){var t=document.createElement("canvas");return t.width=e.size,t.height=e.size,r(t,e)}(n);t.appendChild(a)}}}(function(){var e=function(e,t){var a=e,r=n[t],o=null,i=0,c=null,s=[],u={},l=function(e,t){o=function(e){for(var t=new Array(e),n=0;n<e;n+=1){t[n]=new Array(e);for(var a=0;a<e;a+=1)t[n][a]=null}return t}(i=4*a+17),m(0,0),m(i-7,0),m(0,i-7),k(),v(),C(e,t),a>=7&&y(e),null==c&&(c=E(a,r,s)),b(c,t)},m=function(e,t){for(var n=-1;n<=7;n+=1)if(!(e+n<=-1||i<=e+n))for(var a=-1;a<=7;a+=1)t+a<=-1||i<=t+a||(o[e+n][t+a]=0<=n&&n<=6&&(0===a||6===a)||0<=a&&a<=6&&(0===n||6===n)||2<=n&&n<=4&&2<=a&&a<=4)},v=function(){for(var e=8;e<i-8;e+=1)null==o[e][6]&&(o[e][6]=e%2===0);for(var t=8;t<i-8;t+=1)null==o[6][t]&&(o[6][t]=t%2===0)},k=function(){for(var e=h.getPatternPosition(a),t=0;t<e.length;t+=1)for(var n=0;n<e.length;n+=1){var r=e[t],i=e[n];if(null==o[r][i])for(var c=-2;c<=2;c+=1)for(var s=-2;s<=2;s+=1)o[r+c][i+s]=-2===c||2===c||-2===s||2===s||0===c&&0===s}},y=function(e){for(var t=h.getBCHTypeNumber(a),n=0;n<18;n+=1){var r=!e&&1===(t>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=r}for(var c=0;c<18;c+=1){var s=!e&&1===(t>>c&1);o[c%3+i-8-3][Math.floor(c/3)]=s}},C=function(e,t){for(var n=r<<3|t,a=h.getBCHTypeInfo(n),c=0;c<15;c+=1){var s=!e&&1===(a>>c&1);o[c<6?c:c<8?c+1:i-15+c][8]=s,o[8][c<8?i-c-1:c<9?15-c:14-c]=s}o[i-8][8]=!e},b=function(e,t){for(var n=-1,a=i-1,r=7,c=0,s=h.getMaskFunction(t),u=i-1;u>0;u-=2)for(6===u&&(u-=1);;){for(var l=0;l<2;l+=1)if(null==o[a][u-l]){var m=!1;c<e.length&&(m=1===(e[c]>>>r&1)),s(a,u-l)&&(m=!m),o[a][u-l]=m,-1===(r-=1)&&(c+=1,r=7)}if((a+=n)<0||i<=a){a-=n,n=-n;break}}},E=function(e,t,n){var a,r=f.getRSBlocks(e,t),o=g();for(a=0;a<n.length;a+=1){var i=n[a];o.put(i.getMode(),4),o.put(i.getLength(),h.getLengthInBits(i.getMode(),e)),i.write(o)}var c=0;for(a=0;a<r.length;a+=1)c+=r[a].dataCount;if(o.getLengthInBits()>8*c)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*c+")");for(o.getLengthInBits()+4<=8*c&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*c)&&(o.put(236,8),!(o.getLengthInBits()>=8*c));)o.put(17,8);return function(e,t){var n,a,r=0,o=0,i=0,c=new Array(t.length),s=new Array(t.length);for(a=0;a<t.length;a+=1){var u=t[a].dataCount,l=t[a].totalCount-u;for(o=Math.max(o,u),i=Math.max(i,l),c[a]=new Array(u),n=0;n<c[a].length;n+=1)c[a][n]=255&e.getBuffer()[n+r];r+=u;var m=h.getErrorCorrectPolynomial(l),f=d(c[a],m.getLength()-1).mod(m);for(s[a]=new Array(m.getLength()-1),n=0;n<s[a].length;n+=1){var g=n+f.getLength()-s[a].length;s[a][n]=g>=0?f.getAt(g):0}}var p=0;for(n=0;n<t.length;n+=1)p+=t[n].totalCount;var v=new Array(p),k=0;for(n=0;n<o;n+=1)for(a=0;a<t.length;a+=1)n<c[a].length&&(v[k]=c[a][n],k+=1);for(n=0;n<i;n+=1)for(a=0;a<t.length;a+=1)n<s[a].length&&(v[k]=s[a][n],k+=1);return v}(o,r)};return u.addData=function(e){var t=p(e);s.push(t),c=null},u.isDark=function(e,t){if(e<0||i<=e||t<0||i<=t)throw new Error(e+","+t);return o[e][t]},u.getModuleCount=function(){return i},u.make=function(){l(!1,function(){for(var e=0,t=0,n=0;n<8;n+=1){l(!0,n);var a=h.getLostPoint(u);(0===n||e>a)&&(e=a,t=n)}return t}())},u};e.stringToBytes=function(e){return function(e){for(var t=[],n=0;n<e.length;n++){var a=e.charCodeAt(n);a<128?t.push(a):a<2048?t.push(192|a>>6,128|63&a):a<55296||a>=57344?t.push(224|a>>12,128|a>>6&63,128|63&a):(n++,a=65536+((1023&a)<<10|1023&e.charCodeAt(n)),t.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|63&a))}return t}(e)};var t=4,n={L:1,M:0,Q:3,H:2},a=0,r=1,o=2,i=3,c=4,s=5,u=6,l=7,h=function(){var e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n={},h=function(e){for(var t=0;0!==e;)t+=1,e>>>=1;return t};return n.getBCHTypeInfo=function(e){for(var t=e<<10;h(t)-h(1335)>=0;)t^=1335<<h(t)-h(1335);return 21522^(e<<10|t)},n.getBCHTypeNumber=function(e){for(var t=e<<12;h(t)-h(7973)>=0;)t^=7973<<h(t)-h(7973);return e<<12|t},n.getPatternPosition=function(t){return e[t-1]},n.getMaskFunction=function(e){switch(e){case a:return function(e,t){return(e+t)%2===0};case r:return function(e,t){return e%2===0};case o:return function(e,t){return t%3===0};case i:return function(e,t){return(e+t)%3===0};case c:return function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2===0};case s:return function(e,t){return e*t%2+e*t%3===0};case u:return function(e,t){return(e*t%2+e*t%3)%2===0};case l:return function(e,t){return(e*t%3+(e+t)%2)%2===0};default:throw new Error("bad maskPattern:"+e)}},n.getErrorCorrectPolynomial=function(e){for(var t=d([1],0),n=0;n<e;n+=1)t=t.multiply(d([1,m.gexp(n)],0));return t},n.getLengthInBits=function(e,n){if(e!==t||n<1||n>40)throw new Error("mode: "+e+"; type: "+n);return n<10?8:16},n.getLostPoint=function(e){var t,n,a=e.getModuleCount(),r=0;for(t=0;t<a;t+=1)for(n=0;n<a;n+=1){for(var o=0,i=e.isDark(t,n),c=-1;c<=1;c+=1)if(!(t+c<0||a<=t+c))for(var s=-1;s<=1;s+=1)n+s<0||a<=n+s||0===c&&0===s||i===e.isDark(t+c,n+s)&&(o+=1);o>5&&(r+=3+o-5)}for(t=0;t<a-1;t+=1)for(n=0;n<a-1;n+=1){var u=0;e.isDark(t,n)&&(u+=1),e.isDark(t+1,n)&&(u+=1),e.isDark(t,n+1)&&(u+=1),e.isDark(t+1,n+1)&&(u+=1),0!==u&&4!==u||(r+=3)}for(t=0;t<a;t+=1)for(n=0;n<a-6;n+=1)e.isDark(t,n)&&!e.isDark(t,n+1)&&e.isDark(t,n+2)&&e.isDark(t,n+3)&&e.isDark(t,n+4)&&!e.isDark(t,n+5)&&e.isDark(t,n+6)&&(r+=40);for(n=0;n<a;n+=1)for(t=0;t<a-6;t+=1)e.isDark(t,n)&&!e.isDark(t+1,n)&&e.isDark(t+2,n)&&e.isDark(t+3,n)&&e.isDark(t+4,n)&&!e.isDark(t+5,n)&&e.isDark(t+6,n)&&(r+=40);var l=0;for(n=0;n<a;n+=1)for(t=0;t<a;t+=1)e.isDark(t,n)&&(l+=1);return r+=Math.abs(100*l/a/a-50)/5*10},n}(),m=function(){var e,t=new Array(256),n=new Array(256);for(e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)n[t[e]]=e;var a={glog:function(e){if(e<1)throw new Error("glog("+e+")");return n[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return t[e]}};return a}();function d(e,t){if("undefined"===typeof e.length)throw new Error(e.length+"/"+t);var n=function(){for(var n=0;n<e.length&&0===e[n];)n+=1;for(var a=new Array(e.length-n+t),r=0;r<e.length-n;r+=1)a[r]=e[r+n];return a}(),a={getAt:function(e){return n[e]},getLength:function(){return n.length},multiply:function(e){for(var t=new Array(a.getLength()+e.getLength()-1),n=0;n<a.getLength();n+=1)for(var r=0;r<e.getLength();r+=1)t[n+r]^=m.gexp(m.glog(a.getAt(n))+m.glog(e.getAt(r)));return d(t,0)},mod:function(e){if(a.getLength()-e.getLength()<0)return a;var t,n=m.glog(a.getAt(0))-m.glog(e.getAt(0)),r=new Array(a.getLength());for(t=0;t<a.getLength();t+=1)r[t]=a.getAt(t);for(t=0;t<e.getLength();t+=1)r[t]^=m.gexp(m.glog(e.getAt(t))+n);return d(r,0).mod(e)}};return a}var f=function(){var e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(e,t){var n={};return n.totalCount=e,n.dataCount=t,n},a={getRSBlocks:function(a,r){var o=function(t,a){switch(a){case n.L:return e[4*(t-1)+0];case n.M:return e[4*(t-1)+1];case n.Q:return e[4*(t-1)+2];case n.H:return e[4*(t-1)+3];default:return}}(a,r);if("undefined"===typeof o)throw new Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+r);for(var i=o.length/3,c=[],s=0;s<i;s+=1)for(var u=o[3*s+0],l=o[3*s+1],h=o[3*s+2],m=0;m<u;m+=1)c.push(t(l,h));return c}};return a}(),g=function(){var e=[],t=0,n={getBuffer:function(){return e},getAt:function(t){var n=Math.floor(t/8);return 1===(e[n]>>>7-t%8&1)},put:function(e,t){for(var a=0;a<t;a+=1)n.putBit(1===(e>>>t-a-1&1))},getLengthInBits:function(){return t},putBit:function(n){var a=Math.floor(t/8);e.length<=a&&e.push(0),n&&(e[a]|=128>>>t%8),t+=1}};return n},p=function(n){var a=t,r=e.stringToBytes(n),o={getMode:function(){return a},getLength:function(e){return r.length},write:function(e){for(var t=0;t<r.length;t+=1)e.put(r[t],8)}};return o};return e}());var _=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={image:null,prevContent:a.props.qrContent},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("img",Object.assign({},this.props,{src:this.state.image,alt:"QR"}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.content!==t.prevContent){var n=document.createElement("canvas");return A.render({text:e.content,radius:.5,ecLevel:"Q",fill:{type:"radial-gradient",position:[.5,.5,0,.5,.5,.75],colorStops:[[0,"#376ab4"],[1,"#000034"]]},background:null,size:e.size},n),{prevContent:e.content,image:n.toDataURL("image/png")}}return null}}]),n}(r.a.Component),w=n(38),S=n.n(w),R=n(26),P=n(29),D=n.n(P),N={RPC_SERVER:"http://localhost:9950/proxy",RPC_CREDS:"user1:user1",SAMPLE_COMMANDS:['{"action":"account_history", "account":"nano_3cpz7oh9qr5b7obbcb5867omqf8esix4sdd5w6mh8kkknamjgbnwrimxsaaf","count":"20"}','{"action":"account_info","account":"nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3"}','{"action":"account_balance","account":"nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3"}','{"action":"account_key","account":"nano_1e5aqegc1jb7qe964u4adzmcezyo6o146zb8hm6dft8tkp79za3sxwjym5rx"}','{"action":"account_representative","account":"nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3"}','{"action":"account_weight","account":"nano_1iuz18n4g4wfp9gf7p1s8qkygxw7wx9qfjq6a9aq68uyrdnningdcjontgar"}','{"action":"active_difficulty"}','{"action":"available_supply"}','{"action":"block_info","json_block":"true","hash":"87434F8041869A01C8F6F263B87972D7BA443A72E0A97D7A3FD0CCC2358FD6F9"}','{"action":"block_account","hash":"F94A33B1CDC646A5A1F51AB576590EBD1A65171FFC31EF5C608B71C94BA24695"}','{"action":"block_count"}','{"action":"chain","block":"87434F8041869A01C8F6F263B87972D7BA443A72E0A97D7A3FD0CCC2358FD6F9","count":"20"}','{"action":"confirmation_quorum"}','{"action":"delegators","account":"nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3"}','{"action":"delegators_count","account":"nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3"}','{"action":"frontiers", "account":"nano_3cpz7oh9qr5b7obbcb5867omqf8esix4sdd5w6mh8kkknamjgbnwrimxsaaf","count":"20"}','{"action":"key_create"}','{"action":"pending","account":"nano_1111111111111111111111111111111111111111111111111117353trpda","count":"5"}','{"action":"pending_exists","hash":"4563ADCE3495BF1EA6F3B7A84E94AC866039F57706C2A28FAE27EE3F1767FD7D"}','{"action": "process","json_block": "true","subtype": "send","block": {"type": "state","account": "nano_1qato4k7z3spc8gq1zyd8xeqfbzsoxwo36a45ozbrxcatut7up8ohyardu1z","previous": "6CDDA48608C7843A0AC1122BDD46D9E20E21190986B19EAC23E7F33F2E6A6766","representative": "nano_3pczxuorp48td8645bs3m6c3xotxd3idskrenmi65rbrga5zmkemzhwkaznh","balance": "40200000001000000000000000000000000","link": "87434F8041869A01C8F6F263B87972D7BA443A72E0A97D7A3FD0CCC2358FD6F9","link_as_account":"nano_33t5by1653nt196hfwm5q3wq7oxtaix97r7bhox5zn8eratrzoqsny49ftsd","signature": "A5DB164F6B81648F914E49CAB533900C389FAAD64FBB24F6902F9261312B29F730D07E9BCCD21D918301419B4E05B181637CF8419ED4DCBF8EF2539EB2467F07","work": "000bc55b014e807d"}}','{"action":"representatives_online"}','{"action":"successors","block":"991CF190094C00F0B68E2E5F75F6BEE95A2E0BD93CEAA4A6734DB9F19B728948","count": "5"}','{"action":"mnano_to_raw","amount":"1"}','{"action":"mnano_from_raw","amount":"1000000000000000000000000000000"}','{"action":"validate_account_number","account": "nano_1111111111111111111111111111111111111111111111111117353trpda"}','{"action":"version"}','{"action":"verified_accounts"}','{"action":"price"}'],SAMPLE_COMMAND_NAMES:["account_history","account_info","account_balance","account_key","account_representative","account_weight","active_difficulty","available_supply","block_info","block_account","block_count","chain","confirmation_quorum","delegators","delegators_count","frontiers","key_create","pending","pending_exists","process","representatives_online","successors","mnano_to_raw","mnano_from_raw","validate_account_number","version","verified_accounts","Nano price"]},T=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;Object(h.a)(this,n);for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return a=t.call.apply(t,[this].concat(o)),Error.captureStackTrace&&Error.captureStackTrace(Object(m.a)(a),n),a.name="RPCError",a.code=e,a}return n}(Object(g.a)(Error)),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleOptionChange=function(e){a.setState({useAuth:!a.state.useAuth})},a.qrClassesContainer=["QR-container","QR-container-2x","QR-container-4x"],a.qrClassesImg=["QR-img","QR-img-2x","QR-img-4x"],a.state={command:"",key:"",amount:10,nanoAmount:0,output:"",validKey:!1,fetchingRPC:!1,paymentActive:!1,activeCommandId:0,activeCommandName:"Select a sample",useAuth:!0,tokenText1:"",tokenText2:"",tokenText3:"",qrContent:"",qrSize:512,qrState:0,qrHidden:!0,payinfoHidden:!0,apiText:"",tokenPrice:1e-4},a.getRPC=a.getRPC.bind(Object(m.a)(a)),a.buyTokens=a.buyTokens.bind(Object(m.a)(a)),a.checkTokens=a.checkTokens.bind(Object(m.a)(a)),a.cancelOrder=a.cancelOrder.bind(Object(m.a)(a)),a.prepareForPayment=a.prepareForPayment.bind(Object(m.a)(a)),a.handleCommandChange=a.handleCommandChange.bind(Object(m.a)(a)),a.handleKeyChange=a.handleKeyChange.bind(Object(m.a)(a)),a.handleAmountChange=a.handleAmountChange.bind(Object(m.a)(a)),a.handleNanoChange=a.handleNanoChange.bind(Object(m.a)(a)),a.handleRPCError=a.handleRPCError.bind(Object(m.a)(a)),a.selectCommand=a.selectCommand.bind(Object(m.a)(a)),a.postData=a.postData.bind(Object(m.a)(a)),a.handleOptionChange=a.handleOptionChange.bind(Object(m.a)(a)),a.updateQR=a.updateQR.bind(Object(m.a)(a)),a.double=a.double.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.postData({action:"tokenprice_check"}).then((function(t){if("token_price"in t){var n=e.state.amount*parseFloat(t.token_price);e.setState({nanoAmount:n})}})).catch(function(e){this.handleRPCError(e)}.bind(this));var t=this.state.amount*this.state.tokenPrice;this.setState({nanoAmount:t})}},{key:"handleCommandChange",value:function(e){var t=e.target.value;try{var n=D.a.param(JSON.parse(t));this.setState({apiText:n})}catch(a){this.setState({apiText:"Bad json format"})}this.setState({command:t})}},{key:"handleKeyChange",value:function(e){var t=e.target.value;64===t.length?this.setState({validKey:!0}):this.setState({validKey:!1}),this.setState({key:t})}},{key:"handleAmountChange",value:function(e){if(""!==e.target.value){var t=parseInt(e.target.value);if(Number.isSafeInteger(t)){var n=t*this.state.tokenPrice;this.setState({amount:t,nanoAmount:n})}}else this.setState({amount:e.target.value})}},{key:"handleNanoChange",value:function(e){if(""!==e.target.value){var t=e.target.value;if(Number.isSafeInteger(parseInt(t))||this.isFloat(parseFloat(t))){var n=Math.round(parseFloat(t)/this.state.tokenPrice);this.setState({nanoAmount:e.target.value,amount:n})}}else this.setState({nanoAmount:e.target.value})}},{key:"updateQR",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.MnanoToRaw(t.toString());this.setState({qrContent:"nano:"+e+"?amount="+n+"&message=RPC Proxy Tokens"}),""===e?this.setState({qrHidden:!0}):this.setState({qrHidden:!1})}},{key:"double",value:function(){var e=this.state.qrState;(e+=1)>=this.qrClassesContainer.length&&(e=0),this.setState({qrState:e})}},{key:"MnanoToRaw",value:function(e){return this.isNumeric(e)?R.b(e,{from:R.a.NANO,to:R.a.raw}):"N/A"}},{key:"isNumeric",value:function(e){return!(!/^-?\d*\.?\d*$/.test(e)||"."===String(e).slice(-1))}},{key:"isFloat",value:function(e){return!!(e%1)}},{key:"selectCommand",value:function(e){var t=N.SAMPLE_COMMANDS[e],n=D.a.param(JSON.parse(t));this.setState({command:N.SAMPLE_COMMANDS[e],activeCommandId:e,activeCommandName:N.SAMPLE_COMMAND_NAMES[e],apiText:n})}},{key:"handleRPCError",value:function(e){this.setState({fetchingRPC:!1}),e.code?(console.log("RPC request failed: "+e.message),this.writeOutput({error:"RPC request failed: "+e.message})):(console.log("RPC request failed: "+e),this.writeOutput({error:"RPC request failed: "+e}))}},{key:"buyTokens",value:function(e){this.setState({payinfoHidden:!1});var t=parseInt(this.state.amount);if(Number.isInteger(t)&&t>0){var n={action:"tokens_buy",token_amount:this.state.amount};64===this.state.key.length&&(n.token_key=this.state.key),this.getRPC(null,n)}}},{key:"checkTokens",value:function(e){this.setState({payinfoHidden:!0});var t={action:"tokens_check"};64===this.state.key.length&&(t.token_key=this.state.key,this.getRPC(null,t))}},{key:"cancelOrder",value:function(e){this.setState({payinfoHidden:!0});var t={action:"tokenorder_cancel"};64===this.state.key.length&&(t.token_key=this.state.key,this.getRPC(null,t))}},{key:"getRPC",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(this.updateQR(""),""===n){this.setState({payinfoHidden:!0});try{n=JSON.parse(this.state.command),64===this.state.key.length&&(n.token_key=this.state.key)}catch(a){return void console.log("Could not parse json string")}}Object.keys(n).length>0&&(this.setState({fetchingRPC:!0}),this.postData(n).then((function(e){t.setState({fetchingRPC:!1}),t.writeOutput(e)})).catch(function(e){this.handleRPCError(e)}.bind(this)))}},{key:"prepareForPayment",value:function(e){var t=this;this.setState({tokenText1:"Pay "+e.payment_amount+'Nano: <a href="nano:'+e.address+"?amount="+this.MnanoToRaw(e.payment_amount.toString())+'&message=RPC Proxy Tokens">'+e.address+"</a>",tokenText2:"Request key (save): "+e.token_key,paymentActive:!0}),this.updateQR(e.address,e.payment_amount);var n={action:"tokenorder_check",token_key:e.token_key},a=setInterval((function(){t.postData(n).then((function(n){"order_time_left"in n?parseInt(n.order_time_left)>0&&t.setState({tokenText3:"You have "+n.order_time_left+"sec to pay"}):"tokens_total"in n&&"tokens_ordered"in n?(t.writeOutput(n),t.setState({tokenText1:"Payment completed for "+n.tokens_ordered+" tokens! You now have "+n.tokens_total+" tokens to use",tokenText2:"Request key: "+e.token_key,tokenText3:"",paymentActive:!1}),clearInterval(a),t.updateQR("")):"error"in n?(t.writeOutput(n),t.setState({tokenText1:n.error,tokenText2:"",tokenText3:"",paymentActive:!1}),clearInterval(a),t.updateQR("")):(t.writeOutput(n),t.setState({tokenText1:"Unknown error occured",tokenText2:"",tokenText3:"",paymentActive:!1}),clearInterval(a),t.updateQR(""))})).catch(function(e){this.setState({tokenText1:"",tokenText2:"",tokenText3:"",paymentActive:!1}),clearInterval(a),this.updateQR(""),this.handleRPCError(e)}.bind(t))}),1e3)}},{key:"writeOutput",value:function(e){"address"in e&&this.prepareForPayment(e);try{this.setState({output:JSON.stringify(e,null,2)})}catch(t){console.log("Bad JSON: "+t)}}},{key:"postData",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,a,r,o=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{},n=o.length>1&&void 0!==o[1]?o[1]:N.RPC_SERVER,a=!1,r={},this.state.useAuth&&(r.Authorization="Basic "+p.Base64.encode(N.RPC_CREDS)),e.abrupt("return",new Promise((function(e,o){var i=setTimeout((function(){a=!0,o(new Error("Request timed out"))}),1e4);fetch(n,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:r,redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)}).then(function(){var t=Object(u.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(clearTimeout(i),a){t.next=32;break}if(200!==n.status){t.next=10;break}return t.t0=e,t.next=6,n.json();case 6:t.t1=t.sent,(0,t.t0)(t.t1),t.next=32;break;case 10:if(429!==n.status){t.next=19;break}return t.t2=e,t.next=14,n.text();case 14:t.t3=t.sent,t.t4={error:t.t3},(0,t.t2)(t.t4),t.next=32;break;case 19:if(401!==n.status){t.next=23;break}e({error:"unauthorized"}),t.next=32;break;case 23:if(500!==n.status){t.next=31;break}return t.t5=e,t.next=27,n.json();case 27:t.t6=t.sent,(0,t.t5)(t.t6),t.next=32;break;case 31:throw new T(n.status,e(n));case 32:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){a||o(e)}))})).then(function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h3",null,"Demo client for communicating with ",r.a.createElement("a",{href:"https://github.com/Joohansson/NanoRPCProxy"},"NanoRPCProxy")),r.a.createElement("p",null,"Send to a live Nano node using ",r.a.createElement("a",{href:"https://docs.nano.org/commands/rpc-protocol/"},"RPC json requests")),r.a.createElement("ul",null,r.a.createElement("li",null," Everyone are allowed x requests/day (shown in the response). Purchase optional tokens if you need more."),r.a.createElement("li",null," Tokens can be refilled/extended using the same Request Key. The order is done when said Nano (or more) is registered."),r.a.createElement("li",null," If you send nano but order fail you can claim the private key. The old deposit account will be destroyed/replaced.")),r.a.createElement(v.a,{className:"command-dropdown",title:this.state.activeCommandName,key:this.state.activeCommandId,id:"dropdown-basic-".concat(this.state.activeCommandId)},N.SAMPLE_COMMAND_NAMES.map(function(e,t){return r.a.createElement(k.a.Item,{eventKey:t,key:t,onSelect:this.selectCommand},e)}.bind(this))),r.a.createElement(y.a,{size:"sm",className:"mb-3"},r.a.createElement(y.a.Prepend,null,r.a.createElement(y.a.Text,{id:"command"},"RPC Command")),r.a.createElement(C.a,{id:"command","aria-describedby":"command",value:this.state.command,title:"Command to send",maxLength:"200",placeholder:"RPC command",onChange:this.handleCommandChange,autoComplete:"off"})),r.a.createElement(y.a,{size:"sm",className:"mb-3"},r.a.createElement(y.a.Prepend,null,r.a.createElement(y.a.Text,{id:"key"},"Request Key")),r.a.createElement(C.a,{id:"key","aria-describedby":"key",value:this.state.key,title:"Your personal token key",maxLength:"64",placeholder:"Optional: Get key by purchase tokens. Key can also be used to refill/check your tokens or claim priv key.",onChange:this.handleKeyChange,autoComplete:"off"})),r.a.createElement("div",{className:"token-text"},r.a.createElement("span",null,"GET Query Equivalent (need basic auth headers if using server auth):",r.a.createElement("br",null)),r.a.createElement("a",{href:N.RPC_SERVER+"/?"+this.state.apiText},N.RPC_SERVER+"/?"+this.state.apiText)),r.a.createElement(y.a,{size:"sm",className:"mb-3 hidden"},r.a.createElement("div",{className:"auth-title",title:"Use authentication"},"Use Auth:"),r.a.createElement("div",{className:"form-check form-check-inline index-checkbox"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"auth-check",value:this.state.useAuth,checked:this.state.useAuth,onChange:this.handleOptionChange}))),r.a.createElement(y.a,{size:"sm",className:"mb-3"},r.a.createElement(b.a,{className:"btn-medium",variant:"primary",disabled:this.state.fetchingRPC||this.state.paymentActive,onClick:this.getRPC},"Server Request")),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}),r.a.createElement(y.a,{size:"sm",className:"mb-3"},r.a.createElement(y.a.Prepend,null,r.a.createElement(y.a.Text,{id:"amount"},"Token Amount")),r.a.createElement(C.a,{className:"edit-short",id:"amount","aria-describedby":"amount",value:this.state.amount,title:"Number of tokens to purchase",maxLength:"9",placeholder:"",onChange:this.handleAmountChange,autoComplete:"off"})),r.a.createElement(y.a,{size:"sm",className:"mb-3"},r.a.createElement(y.a.Prepend,null,r.a.createElement(y.a.Text,{id:"nano"},"Nano Amount")),r.a.createElement(C.a,{className:"edit-short",id:"nano","aria-describedby":"nano",value:this.state.nanoAmount,title:"Amount of Nano to pay",maxLength:"9",placeholder:"",onChange:this.handleNanoChange,autoComplete:"off"})),r.a.createElement(y.a,{size:"sm",className:"mb-3"},r.a.createElement(b.a,{className:"btn-medium",variant:"primary",disabled:this.state.fetchingRPC||this.state.paymentActive,onClick:this.buyTokens},"Buy/Refill tokens"),r.a.createElement(b.a,{className:"btn-medium",variant:"primary",disabled:this.state.fetchingRPC||!this.state.validKey,onClick:this.checkTokens},"Check my tokens"),r.a.createElement(b.a,{className:"btn-medium",variant:"primary",disabled:this.state.fetchingRPC||!this.state.validKey,onClick:this.cancelOrder},"Claim back order")),r.a.createElement("div",{className:this.state.payinfoHidden?"hidden token-text":"token-text"},r.a.createElement("p",null,S()(this.state.tokenText1)),r.a.createElement("p",null,this.state.tokenText2),r.a.createElement("p",null,this.state.tokenText3)),r.a.createElement("div",{className:this.state.qrHidden?"hidden":""},r.a.createElement("div",{className:this.qrClassesContainer[this.state.qrState]},r.a.createElement(_,{className:this.qrClassesImg[this.state.qrState],content:this.state.qrContent,onClick:this.double,title:"Click to toggle size",size:this.state.qrSize}))),r.a.createElement(y.a,{size:"sm",className:"mb-3"},r.a.createElement(C.a,{id:"output-area","aria-describedby":"output",as:"textarea",rows:"12",placeholder:"",value:this.state.output,readOnly:!0}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.174be97a.chunk.js.map
!function(a,b){"use strict";function c(a,b){var c,d,e=a.toLowerCase();for(b=[].concat(b),c=0;b.length>c;c+=1)if(d=b[c]){if(d.test&&d.test(a))return!0;if(d.toLowerCase()===e)return!0}}var d=b.prototype.trim,e=b.prototype.trimRight,f=b.prototype.trimLeft,g=function(a){return 1*a||0},h=function(a,b){if(1>b)return"";for(var c="";b>0;)1&b&&(c+=a),b>>=1,a+=a;return c},i=[].slice,j=function(a){return null==a?"\\s":a.source?a.source:"["+o.escapeRegExp(a)+"]"},k={lt:"<",gt:">",quot:'"',amp:"&",apos:"'"},l={};for(var m in k)l[k[m]]=m;l["'"]="#39";var n=function(){function a(a){return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()}var c=h,d=function(){return d.cache.hasOwnProperty(arguments[0])||(d.cache[arguments[0]]=d.parse(arguments[0])),d.format.call(null,d.cache[arguments[0]],arguments)};return d.format=function(d,e){var f,g,h,i,j,k,l,m=1,o=d.length,p="",q=[];for(g=0;o>g;g++)if(p=a(d[g]),"string"===p)q.push(d[g]);else if("array"===p){if(i=d[g],i[2])for(f=e[m],h=0;i[2].length>h;h++){if(!f.hasOwnProperty(i[2][h]))throw new Error(n('[_.sprintf] property "%s" does not exist',i[2][h]));f=f[i[2][h]]}else f=i[1]?e[i[1]]:e[m++];if(/[^s]/.test(i[8])&&"number"!=a(f))throw new Error(n("[_.sprintf] expecting number but found %s",a(f)));switch(i[8]){case"b":f=f.toString(2);break;case"c":f=b.fromCharCode(f);break;case"d":f=parseInt(f,10);break;case"e":f=i[7]?f.toExponential(i[7]):f.toExponential();break;case"f":f=i[7]?parseFloat(f).toFixed(i[7]):parseFloat(f);break;case"o":f=f.toString(8);break;case"s":f=(f=b(f))&&i[7]?f.substring(0,i[7]):f;break;case"u":f=Math.abs(f);break;case"x":f=f.toString(16);break;case"X":f=f.toString(16).toUpperCase()}f=/[def]/.test(i[8])&&i[3]&&f>=0?"+"+f:f,k=i[4]?"0"==i[4]?"0":i[4].charAt(1):" ",l=i[6]-b(f).length,j=i[6]?c(k,l):"",q.push(i[5]?f+j:j+f)}return q.join("")},d.cache={},d.parse=function(a){for(var b=a,c=[],d=[],e=0;b;){if(null!==(c=/^[^\x25]+/.exec(b)))d.push(c[0]);else if(null!==(c=/^\x25{2}/.exec(b)))d.push("%");else{if(null===(c=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b)))throw new Error("[_.sprintf] huh?");if(c[2]){e|=1;var f=[],g=c[2],h=[];if(null===(h=/^([a-z_][a-z_\d]*)/i.exec(g)))throw new Error("[_.sprintf] huh?");for(f.push(h[1]);""!==(g=g.substring(h[0].length));)if(null!==(h=/^\.([a-z_][a-z_\d]*)/i.exec(g)))f.push(h[1]);else{if(null===(h=/^\[(\d+)\]/.exec(g)))throw new Error("[_.sprintf] huh?");f.push(h[1])}c[2]=f}else e|=2;if(3===e)throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");d.push(c)}b=b.substring(c[0].length)}return d},d}(),o={VERSION:"2.3.0",isBlank:function(a){return null==a&&(a=""),/^\s*$/.test(a)},stripTags:function(a){return null==a?"":b(a).replace(/<\/?[^>]+>/g,"")},capitalize:function(a){return a=null==a?"":b(a),a.charAt(0).toUpperCase()+a.slice(1)},chop:function(a,c){return null==a?[]:(a=b(a),c=~~c,c>0?a.match(new RegExp(".{1,"+c+"}","g")):[a])},clean:function(a){return o.strip(a).replace(/\s+/g," ")},count:function(a,c){if(null==a||null==c)return 0;a=b(a),c=b(c);for(var d=0,e=0,f=c.length;e=a.indexOf(c,e),-1!==e;)d++,e+=f;return d},chars:function(a){return null==a?[]:b(a).split("")},swapCase:function(a){return null==a?"":b(a).replace(/\S/g,function(a){return a===a.toUpperCase()?a.toLowerCase():a.toUpperCase()})},escapeHTML:function(a){return null==a?"":b(a).replace(/[&<>"']/g,function(a){return"&"+l[a]+";"})},unescapeHTML:function(a){return null==a?"":b(a).replace(/\&([^;]+);/g,function(a,c){var d;return c in k?k[c]:(d=c.match(/^#x([\da-fA-F]+)$/))?b.fromCharCode(parseInt(d[1],16)):(d=c.match(/^#(\d+)$/))?b.fromCharCode(~~d[1]):a})},escapeRegExp:function(a){return null==a?"":b(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},splice:function(a,b,c,d){var e=o.chars(a);return e.splice(~~b,~~c,d),e.join("")},insert:function(a,b,c){return o.splice(a,b,0,c)},include:function(a,c){return""===c?!0:null==a?!1:-1!==b(a).indexOf(c)},join:function(){var a=i.call(arguments),b=a.shift();return null==b&&(b=""),a.join(b)},lines:function(a){return null==a?[]:b(a).split("\n")},reverse:function(a){return o.chars(a).reverse().join("")},startsWith:function(a,c){return""===c?!0:null==a||null==c?!1:(a=b(a),c=b(c),a.length>=c.length&&a.slice(0,c.length)===c)},endsWith:function(a,c){return""===c?!0:null==a||null==c?!1:(a=b(a),c=b(c),a.length>=c.length&&a.slice(a.length-c.length)===c)},succ:function(a){return null==a?"":(a=b(a),a.slice(0,-1)+b.fromCharCode(a.charCodeAt(a.length-1)+1))},titleize:function(a){return null==a?"":(a=b(a).toLowerCase(),a.replace(/(?:^|\s|-)\S/g,function(a){return a.toUpperCase()}))},camelize:function(a){return o.trim(a).replace(/[-_\s]+(.)?/g,function(a,b){return b?b.toUpperCase():""})},underscored:function(a){return o.trim(a).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},dasherize:function(a){return o.trim(a).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()},classify:function(a){return o.titleize(b(a).replace(/[\W_]/g," ")).replace(/\s/g,"")},humanize:function(a){return o.capitalize(o.underscored(a).replace(/_id$/,"").replace(/_/g," "))},trim:function(a,c){return null==a?"":!c&&d?d.call(a):(c=j(c),b(a).replace(new RegExp("^"+c+"+|"+c+"+$","g"),""))},ltrim:function(a,c){return null==a?"":!c&&f?f.call(a):(c=j(c),b(a).replace(new RegExp("^"+c+"+"),""))},rtrim:function(a,c){return null==a?"":!c&&e?e.call(a):(c=j(c),b(a).replace(new RegExp(c+"+$"),""))},truncate:function(a,c,d){return null==a?"":(a=b(a),d=d||"...",c=~~c,a.length>c?a.slice(0,c)+d:a)},prune:function(a,c,d){if(null==a)return"";if(a=b(a),c=~~c,d=null!=d?b(d):"...",c>=a.length)return a;var e=function(a){return a.toUpperCase()!==a.toLowerCase()?"A":" "},f=a.slice(0,c+1).replace(/.(?=\W*\w*$)/g,e);return f=f.slice(f.length-2).match(/\w\w/)?f.replace(/\s*\S+$/,""):o.rtrim(f.slice(0,f.length-1)),(f+d).length>a.length?a:a.slice(0,f.length)+d},words:function(a,b){return o.isBlank(a)?[]:o.trim(a,b).split(b||/\s+/)},pad:function(a,c,d,e){a=null==a?"":b(a),c=~~c;var f=0;switch(d?d.length>1&&(d=d.charAt(0)):d=" ",e){case"right":return f=c-a.length,a+h(d,f);case"both":return f=c-a.length,h(d,Math.ceil(f/2))+a+h(d,Math.floor(f/2));default:return f=c-a.length,h(d,f)+a}},lpad:function(a,b,c){return o.pad(a,b,c)},rpad:function(a,b,c){return o.pad(a,b,c,"right")},lrpad:function(a,b,c){return o.pad(a,b,c,"both")},sprintf:n,vsprintf:function(a,b){return b.unshift(a),n.apply(null,b)},toNumber:function(a,b){return a?(a=o.trim(a),a.match(/^-?\d+(?:\.\d+)?$/)?g(g(a).toFixed(~~b)):0/0):0},numberFormat:function(a,b,c,d){if(isNaN(a)||null==a)return"";a=a.toFixed(~~b),d="string"==typeof d?d:",";var e=a.split("."),f=e[0],g=e[1]?(c||".")+e[1]:"";return f.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+d)+g},strRight:function(a,c){if(null==a)return"";a=b(a),c=null!=c?b(c):c;var d=c?a.indexOf(c):-1;return~d?a.slice(d+c.length,a.length):a},strRightBack:function(a,c){if(null==a)return"";a=b(a),c=null!=c?b(c):c;var d=c?a.lastIndexOf(c):-1;return~d?a.slice(d+c.length,a.length):a},strLeft:function(a,c){if(null==a)return"";a=b(a),c=null!=c?b(c):c;var d=c?a.indexOf(c):-1;return~d?a.slice(0,d):a},strLeftBack:function(a,b){if(null==a)return"";a+="",b=null!=b?""+b:b;var c=a.lastIndexOf(b);return~c?a.slice(0,c):a},toSentence:function(a,b,c,d){b=b||", ",c=c||" and ";var e=a.slice(),f=e.pop();return a.length>2&&d&&(c=o.rtrim(b)+c),e.length?e.join(b)+c+f:f},toSentenceSerial:function(){var a=i.call(arguments);return a[3]=!0,o.toSentence.apply(o,a)},slugify:function(a){if(null==a)return"";var c="ąàáäâãåæăćęèéëêìíïîłńòóöôõøśșțùúüûñçżź",d="aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz",e=new RegExp(j(c),"g");return a=b(a).toLowerCase().replace(e,function(a){var b=c.indexOf(a);return d.charAt(b)||"-"}),o.dasherize(a.replace(/[^\w\s-]/g,""))},surround:function(a,b){return[b,a,b].join("")},quote:function(a,b){return o.surround(a,b||'"')},unquote:function(a,b){return b=b||'"',a[0]===b&&a[a.length-1]===b?a.slice(1,a.length-1):a},exports:function(){var a={};for(var b in this)this.hasOwnProperty(b)&&!b.match(/^(?:include|contains|reverse)$/)&&(a[b]=this[b]);return a},repeat:function(a,c,d){if(null==a)return"";if(c=~~c,null==d)return h(b(a),c);for(var e=[];c>0;e[--c]=a);return e.join(d)},naturalCmp:function(a,c){if(a==c)return 0;if(!a)return-1;if(!c)return 1;for(var d=/(\.\d+)|(\d+)|(\D+)/g,e=b(a).toLowerCase().match(d),f=b(c).toLowerCase().match(d),g=Math.min(e.length,f.length),h=0;g>h;h++){var i=e[h],j=f[h];if(i!==j){var k=parseInt(i,10);if(!isNaN(k)){var l=parseInt(j,10);if(!isNaN(l)&&k-l)return k-l}return j>i?-1:1}}return e.length===f.length?e.length-f.length:c>a?-1:1},levenshtein:function(a,c){if(null==a&&null==c)return 0;if(null==a)return b(c).length;if(null==c)return b(a).length;a=b(a),c=b(c);for(var d,e,f=[],g=0;c.length>=g;g++)for(var h=0;a.length>=h;h++)e=g&&h?a.charAt(h-1)===c.charAt(g-1)?d:Math.min(f[h],f[h-1],d)+1:g+h,d=f[h],f[h]=e;return f.pop()},toBoolean:function(a,b,d){return"number"==typeof a&&(a=""+a),"string"!=typeof a?!!a:(a=o.trim(a),c(a,b||["true","1"])?!0:c(a,d||["false","0"])?!1:void 0)}};o.strip=o.trim,o.lstrip=o.ltrim,o.rstrip=o.rtrim,o.center=o.lrpad,o.rjust=o.lpad,o.ljust=o.rpad,o.contains=o.include,o.q=o.quote,o.toBool=o.toBoolean,"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(module.exports=o),exports._s=o),"function"==typeof define&&define.amd&&define("underscore.string",[],function(){return o}),a._=a._||{},a._.string=a._.str=o}(this,String),function(a){"use strict";a.app=angular.module("hrdashApp",["ngRoute"]),a.app.run(["$rootScope","$location",function(a,b){var c=["/login"],d=function(a){return _.find(c,function(b){return _.str.startsWith(a,b)})};a.$on("$routeChangeStart",function(){d(b.url())||a.loggedIn()||b.path("/login")})}]),a.app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/applications",{templateUrl:"views/application-list.html",controller:"ApplicationCtrl"}).when("/jobs",{templateUrl:"views/jobs-list-view.html",controller:"OpeningList"}).when("/new-job",{templateUrl:"views/add-job.html",controller:"AddJobCtrl"}).when("/job/:id",{templateUrl:"views/job.html",controller:"OpeningCtrl"}).when("/app/:id",{templateUrl:"views/app.html",controller:"ApplicationCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"loginCtrl"}).when("/job/:id/edit",{templateUrl:"views/edit.html",controller:"OpeningList"}).otherwise({redirectTo:"/"})}])}(window),window.app.controller("MainCtrl",["$scope","ParseLoginService","$rootScope","$location",function(a,b,c){c.currentUser=b.getCurrentUser(),c.loggedIn=function(){return null===c.currentUser?!1:!0},a.logout=function(){return c.currentUser=null,b.logout()}}]),window.app.controller("loginCtrl",["$scope","$location","$rootScope","ParseLoginService",function(a,b,c,d){function e(){console.log("success"),c.$apply(function(){c.currentUser=Parse.User.current(),b.path("/")})}function f(a,b){alert("Error"+b.message+"("+b.code+")"),console.log("ERROR")}c.loggedIn()!==!0&&b.path("/login"),a.login=function(a){d.login(a).then(e,f)}}]),window.app.controller("jobSingleCtrl",["$scope","$location","Parse","$window","$route",function(a,b,c,d,e){function f(b){a.job=b,a.$apply()}function g(a){a.destroy({}),alert("Successfully Deleted Job"),d.location.href="#/jobs"}function h(b){b.save(a.data),console.log(b.save()),alert("Successfully Updated Job"),d.location.href="#/jobs"}function i(a){alert(a)}a.data={},a.editView=!0,a.toggleEditView=function(){a.editView=!1,a.editForm=!0},c.getJobById(e.current.params.id).then(f,i),a.delete=function(){c.getJobById(e.current.params.id).then(g,i)},a.update=function(a){c.getJobById(a).then(h,i)}}]),window.app.controller("OpeningList",["$scope","$location","Parse","$window",function(a,b,c){function d(b){a.jobs=b,a.$apply()}function e(a){alert(a)}c.getJob().then(d,e),a.viewSingle=function(a){b.path("/job/"+a+"/edit")},a.view=function(a){b.path("/job/"+a)}}]),window.app.controller("OpeningCtrl",["$scope","$route","$filter","Parse",function(a,b,c,d){function e(c){a.job=c[b.current.params.id],d.get().then(f,g),a.$apply()}function f(b){a.apps=b,a.applications=c("filter")(a.apps,a.job.attributes.job),a.$apply()}function g(a){alert(a)}d.getJob().then(e,g)}]),window.app.controller("AddJobCtrl",["$scope","Parse","$window",function(a,b,c){function d(){alert("Successfully Added Job Post"),console.log("Success!!")}function e(){console.log("Error")}a.data={},a.submit=function(a){b.postJob(a).then(d,e),c.location.href="/",a={}}}]),window.app.controller("ApplicationsCtrl",["$scope","$location","Parse",function(a,b,c){function d(b){a.applications=b,console.log(a.applications),a.$apply()}function e(a){console.log(a)}c.get().then(d,e),a.view=function(a){b.path("/app/"+a)}}]),window.app.controller("ApplicationCtrl",["$scope","$route","Parse","$sce",function(a,b,c,d){function e(c){a.app=c[b.current.params.id],a.$apply()}function f(a){console.log(a)}c.get().then(e,f),a.trustedSrc=function(a){return d.trustAsResourceUrl("http://docs.google.com/gview?url="+a+"&embedded=true&output=embed")}}]),window.app.factory("Parse",["parseConstant",function(){return{get:function(){var a=Parse.Object.extend("Resume"),b=new Parse.Query(a);return b.find()},getJob:function(){var a=Parse.Object.extend("Jobs"),b=new Parse.Query(a);return b.find()},getJobById:function(a){var b=Parse.Object.extend("Jobs"),c=new Parse.Query(b);return console.log(c.get(a)),c.get(a)},postJob:function(a){var b=new Parse.Object("Jobs");return b.save(a)}}}]),window.app.factory("ParseLoginService",["parseConstant",function(){return{login:function(a){var b=a.username,c=a.password;return Parse.User.logIn(b,c)},getCurrentUser:function(){return Parse.User.current()},logout:function(){return Parse.User.logOut()}}}]),window.app.factory("parseConstant",function(){var a="Jh6DNvCXuJwHltaSIovN1ZRd5119mLpckheZtTGA",b="UK28hxofsydsjiMpF1ft9dKQjM27ZfJ2PHOoWrDl";Parse.initialize(a,b)}),window.app.filter("truncate",[function(){return function(a,b,c){return isNaN(b)&&(b=10),void 0===c&&(c="..."),a.length<=b||a.length-c.length<=b?a:String(a).substring(0,b-c.length)+c}}]);
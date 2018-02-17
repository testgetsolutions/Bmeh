if(typeof JSON!=="object"){JSON={}
}(function(){function f(n){return n<10?"0"+n:n
}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()
}
}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'
}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)
}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}gap+=indent;
partial=[];
if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;
i<length;
i+=1){partial[i]=str(i,value)||"null"
}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;
return v
}if(rep&&typeof rep==="object"){length=rep.length;
for(i=0;
i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];
v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;
return v
}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";
indent="";
if(typeof space==="number"){for(i=0;
i<space;
i+=1){indent+=" "
}}else{if(typeof space==="string"){indent=space
}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})
}
}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v
}else{delete value[k]
}}}}return reviver.call(holder,key,value)
}text=String(text);
cx.lastIndex=0;
if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})
}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j
}throw new SyntaxError("JSON.parse")
}
}}());
/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */
(function(b,a){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=b.document?a(b,true):function(c){if(!c.document){throw new Error("jQuery requires a window with a document")
}return a(c)
}
}else{a(b)
}}(typeof window!=="undefined"?window:this,function(a5,av){var aP=[];
var O=aP.slice;
var az=aP.concat;
var w=aP.push;
var bU=aP.indexOf;
var ac={};
var x=ac.toString;
var J=ac.hasOwnProperty;
var C={};
var ai="1.11.1",bI=function(e,i){return new bI.fn.init(e,i)
},D=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bS=/^-ms-/,aW=/-([\da-z])/gi,N=function(e,i){return i.toUpperCase()
};
bI.fn=bI.prototype={jquery:ai,constructor:bI,selector:"",length:0,toArray:function(){return O.call(this)
},get:function(e){return e!=null?(e<0?this[e+this.length]:this[e]):O.call(this)
},pushStack:function(e){var i=bI.merge(this.constructor(),e);
i.prevObject=this;
i.context=this.context;
return i
},each:function(i,e){return bI.each(this,i,e)
},map:function(e){return this.pushStack(bI.map(this,function(b7,b6){return e.call(b7,b6,b7)
}))
},slice:function(){return this.pushStack(O.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(b7){var e=this.length,b6=+b7+(b7<0?e:0);
return this.pushStack(b6>=0&&b6<e?[this[b6]]:[])
},end:function(){return this.prevObject||this.constructor(null)
},push:w,sort:aP.sort,splice:aP.splice};
bI.extend=bI.fn.extend=function(){var e,cb,b6,b7,ce,cc,ca=arguments[0]||{},b9=1,b8=arguments.length,cd=false;
if(typeof ca==="boolean"){cd=ca;
ca=arguments[b9]||{};
b9++
}if(typeof ca!=="object"&&!bI.isFunction(ca)){ca={}
}if(b9===b8){ca=this;
b9--
}for(;
b9<b8;
b9++){if((ce=arguments[b9])!=null){for(b7 in ce){e=ca[b7];
b6=ce[b7];
if(ca===b6){continue
}if(cd&&b6&&(bI.isPlainObject(b6)||(cb=bI.isArray(b6)))){if(cb){cb=false;
cc=e&&bI.isArray(e)?e:[]
}else{cc=e&&bI.isPlainObject(e)?e:{}
}ca[b7]=bI.extend(cd,cc,b6)
}else{if(b6!==undefined){ca[b7]=b6
}}}}}return ca
};
bI.extend({expando:"jQuery"+(ai+Math.random()).replace(/\D/g,""),isReady:true,error:function(e){throw new Error(e)
},noop:function(){},isFunction:function(e){return bI.type(e)==="function"
},isArray:Array.isArray||function(e){return bI.type(e)==="array"
},isWindow:function(e){return e!=null&&e==e.window
},isNumeric:function(e){return !bI.isArray(e)&&e-parseFloat(e)>=0
},isEmptyObject:function(i){var e;
for(e in i){return false
}return true
},isPlainObject:function(b7){var i;
if(!b7||bI.type(b7)!=="object"||b7.nodeType||bI.isWindow(b7)){return false
}try{if(b7.constructor&&!J.call(b7,"constructor")&&!J.call(b7.constructor.prototype,"isPrototypeOf")){return false
}}catch(b6){return false
}if(C.ownLast){for(i in b7){return J.call(b7,i)
}}for(i in b7){}return i===undefined||J.call(b7,i)
},type:function(e){if(e==null){return e+""
}return typeof e==="object"||typeof e==="function"?ac[x.call(e)]||"object":typeof e
},globalEval:function(e){if(e&&bI.trim(e)){(a5.execScript||function(i){a5["eval"].call(a5,i)
})(e)
}},camelCase:function(e){return e.replace(bS,"ms-").replace(aW,N)
},nodeName:function(i,e){return i.nodeName&&i.nodeName.toLowerCase()===e.toLowerCase()
},each:function(ca,cb,b6){var b9,b7=0,b8=ca.length,e=ad(ca);
if(b6){if(e){for(;
b7<b8;
b7++){b9=cb.apply(ca[b7],b6);
if(b9===false){break
}}}else{for(b7 in ca){b9=cb.apply(ca[b7],b6);
if(b9===false){break
}}}}else{if(e){for(;
b7<b8;
b7++){b9=cb.call(ca[b7],b7,ca[b7]);
if(b9===false){break
}}}else{for(b7 in ca){b9=cb.call(ca[b7],b7,ca[b7]);
if(b9===false){break
}}}}return ca
},trim:function(e){return e==null?"":(e+"").replace(D,"")
},makeArray:function(e,b6){var i=b6||[];
if(e!=null){if(ad(Object(e))){bI.merge(i,typeof e==="string"?[e]:e)
}else{w.call(i,e)
}}return i
},inArray:function(b8,b6,b7){var e;
if(b6){if(bU){return bU.call(b6,b8,b7)
}e=b6.length;
b7=b7?b7<0?Math.max(0,e+b7):b7:0;
for(;
b7<e;
b7++){if(b7 in b6&&b6[b7]===b8){return b7
}}}return -1
},merge:function(b9,b7){var e=+b7.length,b6=0,b8=b9.length;
while(b6<e){b9[b8++]=b7[b6++]
}if(e!==e){while(b7[b6]!==undefined){b9[b8++]=b7[b6++]
}}b9.length=b8;
return b9
},grep:function(e,cc,b9){var cb,b8=[],b6=0,b7=e.length,ca=!b9;
for(;
b6<b7;
b6++){cb=!cc(e[b6],b6);
if(cb!==ca){b8.push(e[b6])
}}return b8
},map:function(b7,cc,e){var cb,b9=0,ca=b7.length,b6=ad(b7),b8=[];
if(b6){for(;
b9<ca;
b9++){cb=cc(b7[b9],b9,e);
if(cb!=null){b8.push(cb)
}}}else{for(b9 in b7){cb=cc(b7[b9],b9,e);
if(cb!=null){b8.push(cb)
}}}return az.apply([],b8)
},guid:1,proxy:function(b8,b7){var e,b6,i;
if(typeof b7==="string"){i=b8[b7];
b7=b8;
b8=i
}if(!bI.isFunction(b8)){return undefined
}e=O.call(arguments,2);
b6=function(){return b8.apply(b7||this,e.concat(O.call(arguments)))
};
b6.guid=b8.guid=b8.guid||bI.guid++;
return b6
},now:function(){return +(new Date())
},support:C});
bI.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(b6,e){ac["[object "+e+"]"]=e.toLowerCase()
});
function ad(b6){var i=b6.length,e=bI.type(b6);
if(e==="function"||bI.isWindow(b6)){return false
}if(b6.nodeType===1&&i){return true
}return e==="array"||i===0||typeof i==="number"&&i>0&&(i-1) in b6
}var m=
/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
(function(de){var cx,dh,cn,cG,cJ,ch,cV,dg,dl,cH,cW,cY,cB,co,c7,c2,df,ce,cE,c9="sizzle"+-(new Date()),cI=de.document,di=0,c3=0,b9=cz(),c8=cz(),cF=cz(),cD=function(i,e){if(i===e){cW=true
}return 0
},dd=typeof undefined,cP=1<<31,cN=({}).hasOwnProperty,db=[],dc=db.pop,cL=db.push,b7=db.push,cm=db.slice,cd=db.indexOf||function(dn){var dm=0,e=this.length;
for(;
dm<e;
dm++){if(this[dm]===dn){return dm
}}return -1
},b8="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",cp="[\\x20\\t\\r\\n\\f]",b6="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",cK=b6.replace("w","w#"),c5="\\["+cp+"*("+b6+")(?:"+cp+"*([*^$|!~]?=)"+cp+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+cK+"))|)"+cp+"*\\]",ck=":("+b6+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+c5+")*)|.*)\\)|)",cr=new RegExp("^"+cp+"+|((?:^|[^\\\\])(?:\\\\.)*)"+cp+"+$","g"),cu=new RegExp("^"+cp+"*,"+cp+"*"),cA=new RegExp("^"+cp+"*([>+~]|"+cp+")"+cp+"*"),ct=new RegExp("="+cp+"*([^\\]'\"]*?)"+cp+"*\\]","g"),cR=new RegExp(ck),cT=new RegExp("^"+cK+"$"),c1={ID:new RegExp("^#("+b6+")"),CLASS:new RegExp("^\\.("+b6+")"),TAG:new RegExp("^("+b6.replace("w","w*")+")"),ATTR:new RegExp("^"+c5),PSEUDO:new RegExp("^"+ck),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+cp+"*(even|odd|(([+-]|)(\\d*)n|)"+cp+"*(?:([+-]|)"+cp+"*(\\d+)|))"+cp+"*\\)|)","i"),bool:new RegExp("^(?:"+b8+")$","i"),needsContext:new RegExp("^"+cp+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+cp+"*((?:-\\d)?\\d*)"+cp+"*\\)|)(?=[^-]|$)","i")},cc=/^(?:input|select|textarea|button)$/i,cl=/^h\d$/i,cO=/^[^{]+\{\s*\[native \w/,cQ=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,c0=/[+~]/,cM=/'|\\/g,cs=new RegExp("\\\\([\\da-f]{1,6}"+cp+"?|("+cp+")|.)","ig"),c4=function(e,dn,i){var dm="0x"+dn-65536;
return dm!==dm||i?dn:dm<0?String.fromCharCode(dm+65536):String.fromCharCode(dm>>10|55296,dm&1023|56320)
};
try{b7.apply((db=cm.call(cI.childNodes)),cI.childNodes);
db[cI.childNodes.length].nodeType
}catch(cC){b7={apply:db.length?function(i,e){cL.apply(i,cm.call(e))
}:function(dp,dn){var e=dp.length,dm=0;
while((dp[e++]=dn[dm++])){}dp.length=e-1
}}
}function cv(du,dm,dy,dA){var dz,dr,ds,dw,dx,dq,dp,e,dn,dv;
if((dm?dm.ownerDocument||dm:cI)!==cB){cY(dm)
}dm=dm||cB;
dy=dy||[];
if(!du||typeof du!=="string"){return dy
}if((dw=dm.nodeType)!==1&&dw!==9){return[]
}if(c7&&!dA){if((dz=cQ.exec(du))){if((ds=dz[1])){if(dw===9){dr=dm.getElementById(ds);
if(dr&&dr.parentNode){if(dr.id===ds){dy.push(dr);
return dy
}}else{return dy
}}else{if(dm.ownerDocument&&(dr=dm.ownerDocument.getElementById(ds))&&cE(dm,dr)&&dr.id===ds){dy.push(dr);
return dy
}}}else{if(dz[2]){b7.apply(dy,dm.getElementsByTagName(du));
return dy
}else{if((ds=dz[3])&&dh.getElementsByClassName&&dm.getElementsByClassName){b7.apply(dy,dm.getElementsByClassName(ds));
return dy
}}}}if(dh.qsa&&(!c2||!c2.test(du))){e=dp=c9;
dn=dm;
dv=dw===9&&du;
if(dw===1&&dm.nodeName.toLowerCase()!=="object"){dq=ch(du);
if((dp=dm.getAttribute("id"))){e=dp.replace(cM,"\\$&")
}else{dm.setAttribute("id",e)
}e="[id='"+e+"'] ";
dx=dq.length;
while(dx--){dq[dx]=e+ci(dq[dx])
}dn=c0.test(du)&&cS(dm.parentNode)||dm;
dv=dq.join(",")
}if(dv){try{b7.apply(dy,dn.querySelectorAll(dv));
return dy
}catch(dt){}finally{if(!dp){dm.removeAttribute("id")
}}}}}return dg(du.replace(cr,"$1"),dm,dy,dA)
}function cz(){var i=[];
function e(dm,dn){if(i.push(dm+" ")>cn.cacheLength){delete e[i.shift()]
}return(e[dm+" "]=dn)
}return e
}function cj(e){e[c9]=true;
return e
}function cf(i){var dn=cB.createElement("div");
try{return !!i(dn)
}catch(dm){return false
}finally{if(dn.parentNode){dn.parentNode.removeChild(dn)
}dn=null
}}function dj(dm,dp){var e=dm.split("|"),dn=dm.length;
while(dn--){cn.attrHandle[e[dn]]=dp
}}function ca(i,e){var dn=e&&i,dm=dn&&i.nodeType===1&&e.nodeType===1&&(~e.sourceIndex||cP)-(~i.sourceIndex||cP);
if(dm){return dm
}if(dn){while((dn=dn.nextSibling)){if(dn===e){return -1
}}}return i?1:-1
}function cw(e){return function(dm){var i=dm.nodeName.toLowerCase();
return i==="input"&&dm.type===e
}
}function cb(e){return function(dm){var i=dm.nodeName.toLowerCase();
return(i==="input"||i==="button")&&dm.type===e
}
}function c6(e){return cj(function(i){i=+i;
return cj(function(dm,dr){var dp,dn=e([],dm.length,i),dq=dn.length;
while(dq--){if(dm[(dp=dn[dq])]){dm[dp]=!(dr[dp]=dm[dp])
}}})
})
}function cS(e){return e&&typeof e.getElementsByTagName!==dd&&e
}dh=cv.support={};
cJ=cv.isXML=function(e){var i=e&&(e.ownerDocument||e).documentElement;
return i?i.nodeName!=="HTML":false
};
cY=cv.setDocument=function(dm){var e,dn=dm?dm.ownerDocument||dm:cI,i=dn.defaultView;
if(dn===cB||dn.nodeType!==9||!dn.documentElement){return cB
}cB=dn;
co=dn.documentElement;
c7=!cJ(dn);
if(i&&i!==i.top){if(i.addEventListener){i.addEventListener("unload",function(){cY()
},false)
}else{if(i.attachEvent){i.attachEvent("onunload",function(){cY()
})
}}}dh.attributes=cf(function(dp){dp.className="i";
return !dp.getAttribute("className")
});
dh.getElementsByTagName=cf(function(dp){dp.appendChild(dn.createComment(""));
return !dp.getElementsByTagName("*").length
});
dh.getElementsByClassName=cO.test(dn.getElementsByClassName)&&cf(function(dp){dp.innerHTML="<div class='a'></div><div class='a i'></div>";
dp.firstChild.className="i";
return dp.getElementsByClassName("i").length===2
});
dh.getById=cf(function(dp){co.appendChild(dp).id=c9;
return !dn.getElementsByName||!dn.getElementsByName(c9).length
});
if(dh.getById){cn.find.ID=function(dr,dq){if(typeof dq.getElementById!==dd&&c7){var dp=dq.getElementById(dr);
return dp&&dp.parentNode?[dp]:[]
}};
cn.filter.ID=function(dq){var dp=dq.replace(cs,c4);
return function(dr){return dr.getAttribute("id")===dp
}
}
}else{delete cn.find.ID;
cn.filter.ID=function(dq){var dp=dq.replace(cs,c4);
return function(ds){var dr=typeof ds.getAttributeNode!==dd&&ds.getAttributeNode("id");
return dr&&dr.value===dp
}
}
}cn.find.TAG=dh.getElementsByTagName?function(dp,dq){if(typeof dq.getElementsByTagName!==dd){return dq.getElementsByTagName(dp)
}}:function(dp,dt){var du,ds=[],dr=0,dq=dt.getElementsByTagName(dp);
if(dp==="*"){while((du=dq[dr++])){if(du.nodeType===1){ds.push(du)
}}return ds
}return dq
};
cn.find.CLASS=dh.getElementsByClassName&&function(dq,dp){if(typeof dp.getElementsByClassName!==dd&&c7){return dp.getElementsByClassName(dq)
}};
df=[];
c2=[];
if((dh.qsa=cO.test(dn.querySelectorAll))){cf(function(dp){dp.innerHTML="<select msallowclip=''><option selected=''></option></select>";
if(dp.querySelectorAll("[msallowclip^='']").length){c2.push("[*^$]="+cp+"*(?:''|\"\")")
}if(!dp.querySelectorAll("[selected]").length){c2.push("\\["+cp+"*(?:value|"+b8+")")
}if(!dp.querySelectorAll(":checked").length){c2.push(":checked")
}});
cf(function(dq){var dp=dn.createElement("input");
dp.setAttribute("type","hidden");
dq.appendChild(dp).setAttribute("name","D");
if(dq.querySelectorAll("[name=d]").length){c2.push("name"+cp+"*[*^$|!~]?=")
}if(!dq.querySelectorAll(":enabled").length){c2.push(":enabled",":disabled")
}dq.querySelectorAll("*,:x");
c2.push(",.*:")
})
}if((dh.matchesSelector=cO.test((ce=co.matches||co.webkitMatchesSelector||co.mozMatchesSelector||co.oMatchesSelector||co.msMatchesSelector)))){cf(function(dp){dh.disconnectedMatch=ce.call(dp,"div");
ce.call(dp,"[s!='']:x");
df.push("!=",ck)
})
}c2=c2.length&&new RegExp(c2.join("|"));
df=df.length&&new RegExp(df.join("|"));
e=cO.test(co.compareDocumentPosition);
cE=e||cO.test(co.contains)?function(dq,dp){var ds=dq.nodeType===9?dq.documentElement:dq,dr=dp&&dp.parentNode;
return dq===dr||!!(dr&&dr.nodeType===1&&(ds.contains?ds.contains(dr):dq.compareDocumentPosition&&dq.compareDocumentPosition(dr)&16))
}:function(dq,dp){if(dp){while((dp=dp.parentNode)){if(dp===dq){return true
}}}return false
};
cD=e?function(dq,dp){if(dq===dp){cW=true;
return 0
}var dr=!dq.compareDocumentPosition-!dp.compareDocumentPosition;
if(dr){return dr
}dr=(dq.ownerDocument||dq)===(dp.ownerDocument||dp)?dq.compareDocumentPosition(dp):1;
if(dr&1||(!dh.sortDetached&&dp.compareDocumentPosition(dq)===dr)){if(dq===dn||dq.ownerDocument===cI&&cE(cI,dq)){return -1
}if(dp===dn||dp.ownerDocument===cI&&cE(cI,dp)){return 1
}return cH?(cd.call(cH,dq)-cd.call(cH,dp)):0
}return dr&4?-1:1
}:function(dq,dp){if(dq===dp){cW=true;
return 0
}var dw,dt=0,dv=dq.parentNode,ds=dp.parentNode,dr=[dq],du=[dp];
if(!dv||!ds){return dq===dn?-1:dp===dn?1:dv?-1:ds?1:cH?(cd.call(cH,dq)-cd.call(cH,dp)):0
}else{if(dv===ds){return ca(dq,dp)
}}dw=dq;
while((dw=dw.parentNode)){dr.unshift(dw)
}dw=dp;
while((dw=dw.parentNode)){du.unshift(dw)
}while(dr[dt]===du[dt]){dt++
}return dt?ca(dr[dt],du[dt]):dr[dt]===cI?-1:du[dt]===cI?1:0
};
return dn
};
cv.matches=function(i,e){return cv(i,null,null,e)
};
cv.matchesSelector=function(dm,dp){if((dm.ownerDocument||dm)!==cB){cY(dm)
}dp=dp.replace(ct,"='$1']");
if(dh.matchesSelector&&c7&&(!df||!df.test(dp))&&(!c2||!c2.test(dp))){try{var i=ce.call(dm,dp);
if(i||dh.disconnectedMatch||dm.document&&dm.document.nodeType!==11){return i
}}catch(dn){}}return cv(dp,cB,null,[dm]).length>0
};
cv.contains=function(e,i){if((e.ownerDocument||e)!==cB){cY(e)
}return cE(e,i)
};
cv.attr=function(dm,e){if((dm.ownerDocument||dm)!==cB){cY(dm)
}var i=cn.attrHandle[e.toLowerCase()],dn=i&&cN.call(cn.attrHandle,e.toLowerCase())?i(dm,e,!c7):undefined;
return dn!==undefined?dn:dh.attributes||!c7?dm.getAttribute(e):(dn=dm.getAttributeNode(e))&&dn.specified?dn.value:null
};
cv.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)
};
cv.uniqueSort=function(dn){var dp,dq=[],e=0,dm=0;
cW=!dh.detectDuplicates;
cH=!dh.sortStable&&dn.slice(0);
dn.sort(cD);
if(cW){while((dp=dn[dm++])){if(dp===dn[dm]){e=dq.push(dm)
}}while(e--){dn.splice(dq[e],1)
}}cH=null;
return dn
};
cG=cv.getText=function(dq){var dp,dm="",dn=0,e=dq.nodeType;
if(!e){while((dp=dq[dn++])){dm+=cG(dp)
}}else{if(e===1||e===9||e===11){if(typeof dq.textContent==="string"){return dq.textContent
}else{for(dq=dq.firstChild;
dq;
dq=dq.nextSibling){dm+=cG(dq)
}}}else{if(e===3||e===4){return dq.nodeValue
}}}return dm
};
cn=cv.selectors={cacheLength:50,createPseudo:cj,match:c1,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(cs,c4);
e[3]=(e[3]||e[4]||e[5]||"").replace(cs,c4);
if(e[2]==="~="){e[3]=" "+e[3]+" "
}return e.slice(0,4)
},CHILD:function(e){e[1]=e[1].toLowerCase();
if(e[1].slice(0,3)==="nth"){if(!e[3]){cv.error(e[0])
}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"));
e[5]=+((e[7]+e[8])||e[3]==="odd")
}else{if(e[3]){cv.error(e[0])
}}return e
},PSEUDO:function(i){var e,dm=!i[6]&&i[2];
if(c1.CHILD.test(i[0])){return null
}if(i[3]){i[2]=i[4]||i[5]||""
}else{if(dm&&cR.test(dm)&&(e=ch(dm,true))&&(e=dm.indexOf(")",dm.length-e)-dm.length)){i[0]=i[0].slice(0,e);
i[2]=dm.slice(0,e)
}}return i.slice(0,3)
}},filter:{TAG:function(i){var e=i.replace(cs,c4).toLowerCase();
return i==="*"?function(){return true
}:function(dm){return dm.nodeName&&dm.nodeName.toLowerCase()===e
}
},CLASS:function(e){var i=b9[e+" "];
return i||(i=new RegExp("(^|"+cp+")"+e+"("+cp+"|$)"))&&b9(e,function(dm){return i.test(typeof dm.className==="string"&&dm.className||typeof dm.getAttribute!==dd&&dm.getAttribute("class")||"")
})
},ATTR:function(dm,i,e){return function(dp){var dn=cv.attr(dp,dm);
if(dn==null){return i==="!="
}if(!i){return true
}dn+="";
return i==="="?dn===e:i==="!="?dn!==e:i==="^="?e&&dn.indexOf(e)===0:i==="*="?e&&dn.indexOf(e)>-1:i==="$="?e&&dn.slice(-e.length)===e:i==="~="?(" "+dn+" ").indexOf(e)>-1:i==="|="?dn===e||dn.slice(0,e.length+1)===e+"-":false
}
},CHILD:function(i,dp,dn,dq,dm){var ds=i.slice(0,3)!=="nth",e=i.slice(-4)!=="last",dr=dp==="of-type";
return dq===1&&dm===0?function(dt){return !!dt.parentNode
}:function(dz,dx,dC){var dt,dF,dA,dE,dB,dw,dy=ds!==e?"nextSibling":"previousSibling",dD=dz.parentNode,dv=dr&&dz.nodeName.toLowerCase(),du=!dC&&!dr;
if(dD){if(ds){while(dy){dA=dz;
while((dA=dA[dy])){if(dr?dA.nodeName.toLowerCase()===dv:dA.nodeType===1){return false
}}dw=dy=i==="only"&&!dw&&"nextSibling"
}return true
}dw=[e?dD.firstChild:dD.lastChild];
if(e&&du){dF=dD[c9]||(dD[c9]={});
dt=dF[i]||[];
dB=dt[0]===di&&dt[1];
dE=dt[0]===di&&dt[2];
dA=dB&&dD.childNodes[dB];
while((dA=++dB&&dA&&dA[dy]||(dE=dB=0)||dw.pop())){if(dA.nodeType===1&&++dE&&dA===dz){dF[i]=[di,dB,dE];
break
}}}else{if(du&&(dt=(dz[c9]||(dz[c9]={}))[i])&&dt[0]===di){dE=dt[1]
}else{while((dA=++dB&&dA&&dA[dy]||(dE=dB=0)||dw.pop())){if((dr?dA.nodeName.toLowerCase()===dv:dA.nodeType===1)&&++dE){if(du){(dA[c9]||(dA[c9]={}))[i]=[di,dE]
}if(dA===dz){break
}}}}}dE-=dm;
return dE===dq||(dE%dq===0&&dE/dq>=0)
}}
},PSEUDO:function(dn,dm){var e,i=cn.pseudos[dn]||cn.setFilters[dn.toLowerCase()]||cv.error("unsupported pseudo: "+dn);
if(i[c9]){return i(dm)
}if(i.length>1){e=[dn,dn,"",dm];
return cn.setFilters.hasOwnProperty(dn.toLowerCase())?cj(function(dr,dt){var dq,dp=i(dr,dm),ds=dp.length;
while(ds--){dq=cd.call(dr,dp[ds]);
dr[dq]=!(dt[dq]=dp[ds])
}}):function(dp){return i(dp,0,e)
}
}return i
}},pseudos:{not:cj(function(e){var i=[],dm=[],dn=cV(e.replace(cr,"$1"));
return dn[c9]?cj(function(dq,dv,dt,dr){var du,dp=dn(dq,null,dr,[]),ds=dq.length;
while(ds--){if((du=dp[ds])){dq[ds]=!(dv[ds]=du)
}}}):function(dr,dq,dp){i[0]=dr;
dn(i,null,dp,dm);
return !dm.pop()
}
}),has:cj(function(e){return function(i){return cv(e,i).length>0
}
}),contains:cj(function(e){return function(i){return(i.textContent||i.innerText||cG(i)).indexOf(e)>-1
}
}),lang:cj(function(e){if(!cT.test(e||"")){cv.error("unsupported lang: "+e)
}e=e.replace(cs,c4).toLowerCase();
return function(dm){var i;
do{if((i=c7?dm.lang:dm.getAttribute("xml:lang")||dm.getAttribute("lang"))){i=i.toLowerCase();
return i===e||i.indexOf(e+"-")===0
}}while((dm=dm.parentNode)&&dm.nodeType===1);
return false
}
}),target:function(e){var i=de.location&&de.location.hash;
return i&&i.slice(1)===e.id
},root:function(e){return e===co
},focus:function(e){return e===cB.activeElement&&(!cB.hasFocus||cB.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===false
},disabled:function(e){return e.disabled===true
},checked:function(e){var i=e.nodeName.toLowerCase();
return(i==="input"&&!!e.checked)||(i==="option"&&!!e.selected)
},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex
}return e.selected===true
},empty:function(e){for(e=e.firstChild;
e;
e=e.nextSibling){if(e.nodeType<6){return false
}}return true
},parent:function(e){return !cn.pseudos.empty(e)
},header:function(e){return cl.test(e.nodeName)
},input:function(e){return cc.test(e.nodeName)
},button:function(i){var e=i.nodeName.toLowerCase();
return e==="input"&&i.type==="button"||e==="button"
},text:function(i){var e;
return i.nodeName.toLowerCase()==="input"&&i.type==="text"&&((e=i.getAttribute("type"))==null||e.toLowerCase()==="text")
},first:c6(function(){return[0]
}),last:c6(function(e,i){return[i-1]
}),eq:c6(function(e,dm,i){return[i<0?i+dm:i]
}),even:c6(function(e,dn){var dm=0;
for(;
dm<dn;
dm+=2){e.push(dm)
}return e
}),odd:c6(function(e,dn){var dm=1;
for(;
dm<dn;
dm+=2){e.push(dm)
}return e
}),lt:c6(function(e,dp,dn){var dm=dn<0?dn+dp:dn;
for(;
--dm>=0;
){e.push(dm)
}return e
}),gt:c6(function(e,dp,dn){var dm=dn<0?dn+dp:dn;
for(;
++dm<dp;
){e.push(dm)
}return e
})}};
cn.pseudos.nth=cn.pseudos.eq;
for(cx in {radio:true,checkbox:true,file:true,password:true,image:true}){cn.pseudos[cx]=cw(cx)
}for(cx in {submit:true,reset:true}){cn.pseudos[cx]=cb(cx)
}function cU(){}cU.prototype=cn.filters=cn.pseudos;
cn.setFilters=new cU();
ch=cv.tokenize=function(dp,du){var i,dq,ds,dt,dr,dm,e,dn=c8[dp+" "];
if(dn){return du?0:dn.slice(0)
}dr=dp;
dm=[];
e=cn.preFilter;
while(dr){if(!i||(dq=cu.exec(dr))){if(dq){dr=dr.slice(dq[0].length)||dr
}dm.push((ds=[]))
}i=false;
if((dq=cA.exec(dr))){i=dq.shift();
ds.push({value:i,type:dq[0].replace(cr," ")});
dr=dr.slice(i.length)
}for(dt in cn.filter){if((dq=c1[dt].exec(dr))&&(!e[dt]||(dq=e[dt](dq)))){i=dq.shift();
ds.push({value:i,type:dt,matches:dq});
dr=dr.slice(i.length)
}}if(!i){break
}}return du?dr.length:dr?cv.error(dp):c8(dp,dm).slice(0)
};
function ci(dp){var dn=0,dm=dp.length,e="";
for(;
dn<dm;
dn++){e+=dp[dn].value
}return e
}function cq(dp,dm,dn){var e=dm.dir,dq=dn&&e==="parentNode",i=c3++;
return dm.first?function(dt,ds,dr){while((dt=dt[e])){if(dt.nodeType===1||dq){return dp(dt,ds,dr)
}}}:function(dv,dt,ds){var dw,du,dr=[di,i];
if(ds){while((dv=dv[e])){if(dv.nodeType===1||dq){if(dp(dv,dt,ds)){return true
}}}}else{while((dv=dv[e])){if(dv.nodeType===1||dq){du=dv[c9]||(dv[c9]={});
if((dw=du[e])&&dw[0]===di&&dw[1]===i){return(dr[2]=dw[2])
}else{du[e]=dr;
if((dr[2]=dp(dv,dt,ds))){return true
}}}}}}
}function dk(e){return e.length>1?function(dq,dp,dm){var dn=e.length;
while(dn--){if(!e[dn](dq,dp,dm)){return false
}}return true
}:e[0]
}function cy(dm,dq,dp){var dn=0,e=dq.length;
for(;
dn<e;
dn++){cv(dm,dq[dn],dp)
}return dp
}function cZ(e,dm,dn,dp,ds){var dq,dv=[],dr=0,dt=e.length,du=dm!=null;
for(;
dr<dt;
dr++){if((dq=e[dr])){if(!dn||dn(dq,dp,ds)){dv.push(dq);
if(du){dm.push(dr)
}}}}return dv
}function cg(dm,i,dp,dn,dq,e){if(dn&&!dn[c9]){dn=cg(dn)
}if(dq&&!dq[c9]){dq=cg(dq,e)
}return cj(function(dB,dy,dt,dA){var dD,dz,dv,du=[],dC=[],ds=dy.length,dr=dB||cy(i||"*",dt.nodeType?[dt]:dt,[]),dw=dm&&(dB||!i)?cZ(dr,du,dm,dt,dA):dr,dx=dp?dq||(dB?dm:ds||dn)?[]:dy:dw;
if(dp){dp(dw,dx,dt,dA)
}if(dn){dD=cZ(dx,dC);
dn(dD,[],dt,dA);
dz=dD.length;
while(dz--){if((dv=dD[dz])){dx[dC[dz]]=!(dw[dC[dz]]=dv)
}}}if(dB){if(dq||dm){if(dq){dD=[];
dz=dx.length;
while(dz--){if((dv=dx[dz])){dD.push((dw[dz]=dv))
}}dq(null,(dx=[]),dD,dA)
}dz=dx.length;
while(dz--){if((dv=dx[dz])&&(dD=dq?cd.call(dB,dv):du[dz])>-1){dB[dD]=!(dy[dD]=dv)
}}}}else{dx=cZ(dx===dy?dx.splice(ds,dx.length):dx);
if(dq){dq(null,dy,dx,dA)
}else{b7.apply(dy,dx)
}}})
}function da(ds){var dm,dq,dn,dr=ds.length,dv=cn.relative[ds[0].type],dw=dv||cn.relative[" "],dp=dv?1:0,dt=cq(function(i){return i===dm
},dw,true),du=cq(function(i){return cd.call(dm,i)>-1
},dw,true),e=[function(dy,dx,i){return(!dv&&(i||dx!==dl))||((dm=dx).nodeType?dt(dy,dx,i):du(dy,dx,i))
}];
for(;
dp<dr;
dp++){if((dq=cn.relative[ds[dp].type])){e=[cq(dk(e),dq)]
}else{dq=cn.filter[ds[dp].type].apply(null,ds[dp].matches);
if(dq[c9]){dn=++dp;
for(;
dn<dr;
dn++){if(cn.relative[ds[dn].type]){break
}}return cg(dp>1&&dk(e),dp>1&&ci(ds.slice(0,dp-1).concat({value:ds[dp-2].type===" "?"*":""})).replace(cr,"$1"),dq,dp<dn&&da(ds.slice(dp,dn)),dn<dr&&da((ds=ds.slice(dn))),dn<dr&&ci(ds))
}e.push(dq)
}}return dk(e)
}function cX(dn,dm){var e=dm.length>0,dp=dn.length>0,i=function(dz,dt,dy,dx,dC){var du,dv,dA,dE=0,dw="0",dq=dz&&[],dF=[],dD=dl,ds=dz||dp&&cn.find.TAG("*",dC),dr=(di+=dD==null?1:Math.random()||0.1),dB=ds.length;
if(dC){dl=dt!==cB&&dt
}for(;
dw!==dB&&(du=ds[dw])!=null;
dw++){if(dp&&du){dv=0;
while((dA=dn[dv++])){if(dA(du,dt,dy)){dx.push(du);
break
}}if(dC){di=dr
}}if(e){if((du=!dA&&du)){dE--
}if(dz){dq.push(du)
}}}dE+=dw;
if(e&&dw!==dE){dv=0;
while((dA=dm[dv++])){dA(dq,dF,dt,dy)
}if(dz){if(dE>0){while(dw--){if(!(dq[dw]||dF[dw])){dF[dw]=dc.call(dx)
}}}dF=cZ(dF)
}b7.apply(dx,dF);
if(dC&&!dz&&dF.length>0&&(dE+dm.length)>1){cv.uniqueSort(dx)
}}if(dC){di=dr;
dl=dD
}return dq
};
return e?cj(i):i
}cV=cv.compile=function(e,dn){var dp,dm=[],dr=[],dq=cF[e+" "];
if(!dq){if(!dn){dn=ch(e)
}dp=dn.length;
while(dp--){dq=da(dn[dp]);
if(dq[c9]){dm.push(dq)
}else{dr.push(dq)
}}dq=cF(e,cX(dr,dm));
dq.selector=e
}return dq
};
dg=cv.select=function(dn,e,dp,ds){var dq,dv,dm,dw,dt,du=typeof dn==="function"&&dn,dr=!ds&&ch((dn=du.selector||dn));
dp=dp||[];
if(dr.length===1){dv=dr[0]=dr[0].slice(0);
if(dv.length>2&&(dm=dv[0]).type==="ID"&&dh.getById&&e.nodeType===9&&c7&&cn.relative[dv[1].type]){e=(cn.find.ID(dm.matches[0].replace(cs,c4),e)||[])[0];
if(!e){return dp
}else{if(du){e=e.parentNode
}}dn=dn.slice(dv.shift().value.length)
}dq=c1.needsContext.test(dn)?0:dv.length;
while(dq--){dm=dv[dq];
if(cn.relative[(dw=dm.type)]){break
}if((dt=cn.find[dw])){if((ds=dt(dm.matches[0].replace(cs,c4),c0.test(dv[0].type)&&cS(e.parentNode)||e))){dv.splice(dq,1);
dn=ds.length&&ci(dv);
if(!dn){b7.apply(dp,ds);
return dp
}break
}}}}(du||cV(dn,dr))(ds,e,!c7,dp,c0.test(dn)&&cS(e.parentNode)||e);
return dp
};
dh.sortStable=c9.split("").sort(cD).join("")===c9;
dh.detectDuplicates=!!cW;
cY();
dh.sortDetached=cf(function(e){return e.compareDocumentPosition(cB.createElement("div"))&1
});
if(!cf(function(e){e.innerHTML="<a href='#'></a>";
return e.firstChild.getAttribute("href")==="#"
})){dj("type|href|height|width",function(i,e,dm){if(!dm){return i.getAttribute(e,e.toLowerCase()==="type"?1:2)
}})
}if(!dh.attributes||!cf(function(e){e.innerHTML="<input/>";
e.firstChild.setAttribute("value","");
return e.firstChild.getAttribute("value")===""
})){dj("value",function(i,e,dm){if(!dm&&i.nodeName.toLowerCase()==="input"){return i.defaultValue
}})
}if(!cf(function(e){return e.getAttribute("disabled")==null
})){dj(b8,function(i,e,dn){var dm;
if(!dn){return i[e]===true?e.toLowerCase():(dm=i.getAttributeNode(e))&&dm.specified?dm.value:null
}})
}return cv
})(a5);
bI.find=m;
bI.expr=m.selectors;
bI.expr[":"]=bI.expr.pseudos;
bI.unique=m.uniqueSort;
bI.text=m.getText;
bI.isXMLDoc=m.isXML;
bI.contains=m.contains;
var z=bI.expr.match.needsContext;
var a=(/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
var aL=/^.[^:#\[\.,]*$/;
function aR(b6,e,i){if(bI.isFunction(e)){return bI.grep(b6,function(b8,b7){return !!e.call(b8,b7,b8)!==i
})
}if(e.nodeType){return bI.grep(b6,function(b7){return(b7===e)!==i
})
}if(typeof e==="string"){if(aL.test(e)){return bI.filter(e,b6,i)
}e=bI.filter(e,b6)
}return bI.grep(b6,function(b7){return(bI.inArray(b7,e)>=0)!==i
})
}bI.filter=function(b7,e,b6){var i=e[0];
if(b6){b7=":not("+b7+")"
}return e.length===1&&i.nodeType===1?bI.find.matchesSelector(i,b7)?[i]:[]:bI.find.matches(b7,bI.grep(e,function(b8){return b8.nodeType===1
}))
};
bI.fn.extend({find:function(b6){var b9,b8=[],b7=this,e=b7.length;
if(typeof b6!=="string"){return this.pushStack(bI(b6).filter(function(){for(b9=0;
b9<e;
b9++){if(bI.contains(b7[b9],this)){return true
}}}))
}for(b9=0;
b9<e;
b9++){bI.find(b6,b7[b9],b8)
}b8=this.pushStack(e>1?bI.unique(b8):b8);
b8.selector=this.selector?this.selector+" "+b6:b6;
return b8
},filter:function(e){return this.pushStack(aR(this,e||[],false))
},not:function(e){return this.pushStack(aR(this,e||[],true))
},is:function(e){return !!aR(this,typeof e==="string"&&z.test(e)?bI(e):e||[],false).length
}});
var y,n=a5.document,bt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,bV=bI.fn.init=function(e,b6){var i,b7;
if(!e){return this
}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){i=[null,e,null]
}else{i=bt.exec(e)
}if(i&&(i[1]||!b6)){if(i[1]){b6=b6 instanceof bI?b6[0]:b6;
bI.merge(this,bI.parseHTML(i[1],b6&&b6.nodeType?b6.ownerDocument||b6:n,true));
if(a.test(i[1])&&bI.isPlainObject(b6)){for(i in b6){if(bI.isFunction(this[i])){this[i](b6[i])
}else{this.attr(i,b6[i])
}}}return this
}else{b7=n.getElementById(i[2]);
if(b7&&b7.parentNode){if(b7.id!==i[2]){return y.find(e)
}this.length=1;
this[0]=b7
}this.context=n;
this.selector=e;
return this
}}else{if(!b6||b6.jquery){return(b6||y).find(e)
}else{return this.constructor(b6).find(e)
}}}else{if(e.nodeType){this.context=this[0]=e;
this.length=1;
return this
}else{if(bI.isFunction(e)){return typeof y.ready!=="undefined"?y.ready(e):e(bI)
}}}if(e.selector!==undefined){this.selector=e.selector;
this.context=e.context
}return bI.makeArray(e,this)
};
bV.prototype=bI.fn;
y=bI(n);
var bv=/^(?:parents|prev(?:Until|All))/,bz={children:true,contents:true,next:true,prev:true};
bI.extend({dir:function(b6,i,b8){var e=[],b7=b6[i];
while(b7&&b7.nodeType!==9&&(b8===undefined||b7.nodeType!==1||!bI(b7).is(b8))){if(b7.nodeType===1){e.push(b7)
}b7=b7[i]
}return e
},sibling:function(b6,i){var e=[];
for(;
b6;
b6=b6.nextSibling){if(b6.nodeType===1&&b6!==i){e.push(b6)
}}return e
}});
bI.fn.extend({has:function(b8){var b7,b6=bI(b8,this),e=b6.length;
return this.filter(function(){for(b7=0;
b7<e;
b7++){if(bI.contains(this,b6[b7])){return true
}}})
},closest:function(b9,b8){var ca,b7=0,b6=this.length,e=[],cb=z.test(b9)||typeof b9!=="string"?bI(b9,b8||this.context):0;
for(;
b7<b6;
b7++){for(ca=this[b7];
ca&&ca!==b8;
ca=ca.parentNode){if(ca.nodeType<11&&(cb?cb.index(ca)>-1:ca.nodeType===1&&bI.find.matchesSelector(ca,b9))){e.push(ca);
break
}}}return this.pushStack(e.length>1?bI.unique(e):e)
},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1
}if(typeof e==="string"){return bI.inArray(this[0],bI(e))
}return bI.inArray(e.jquery?e[0]:e,this)
},add:function(e,i){return this.pushStack(bI.unique(bI.merge(this.get(),bI(e,i))))
},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))
}});
function aY(i,e){do{i=i[e]
}while(i&&i.nodeType!==1);
return i
}bI.each({parent:function(i){var e=i.parentNode;
return e&&e.nodeType!==11?e:null
},parents:function(e){return bI.dir(e,"parentNode")
},parentsUntil:function(b6,e,b7){return bI.dir(b6,"parentNode",b7)
},next:function(e){return aY(e,"nextSibling")
},prev:function(e){return aY(e,"previousSibling")
},nextAll:function(e){return bI.dir(e,"nextSibling")
},prevAll:function(e){return bI.dir(e,"previousSibling")
},nextUntil:function(b6,e,b7){return bI.dir(b6,"nextSibling",b7)
},prevUntil:function(b6,e,b7){return bI.dir(b6,"previousSibling",b7)
},siblings:function(e){return bI.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return bI.sibling(e.firstChild)
},contents:function(e){return bI.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:bI.merge([],e.childNodes)
}},function(e,i){bI.fn[e]=function(b8,b6){var b7=bI.map(this,i,b8);
if(e.slice(-5)!=="Until"){b6=b8
}if(b6&&typeof b6==="string"){b7=bI.filter(b6,b7)
}if(this.length>1){if(!bz[e]){b7=bI.unique(b7)
}if(bv.test(e)){b7=b7.reverse()
}}return this.pushStack(b7)
}
});
var aF=(/\S+/g);
var b2={};
function af(i){var e=b2[i]={};
bI.each(i.match(aF)||[],function(b7,b6){e[b6]=true
});
return e
}bI.Callbacks=function(ce){ce=typeof ce==="string"?(b2[ce]||af(ce)):bI.extend({},ce);
var b8,b7,e,b9,ca,b6,cb=[],cc=!ce.once&&[],i=function(cf){b7=ce.memory&&cf;
e=true;
ca=b6||0;
b6=0;
b9=cb.length;
b8=true;
for(;
cb&&ca<b9;
ca++){if(cb[ca].apply(cf[0],cf[1])===false&&ce.stopOnFalse){b7=false;
break
}}b8=false;
if(cb){if(cc){if(cc.length){i(cc.shift())
}}else{if(b7){cb=[]
}else{cd.disable()
}}}},cd={add:function(){if(cb){var cg=cb.length;
(function cf(ch){bI.each(ch,function(cj,ci){var ck=bI.type(ci);
if(ck==="function"){if(!ce.unique||!cd.has(ci)){cb.push(ci)
}}else{if(ci&&ci.length&&ck!=="string"){cf(ci)
}}})
})(arguments);
if(b8){b9=cb.length
}else{if(b7){b6=cg;
i(b7)
}}}return this
},remove:function(){if(cb){bI.each(arguments,function(ch,cf){var cg;
while((cg=bI.inArray(cf,cb,cg))>-1){cb.splice(cg,1);
if(b8){if(cg<=b9){b9--
}if(cg<=ca){ca--
}}}})
}return this
},has:function(cf){return cf?bI.inArray(cf,cb)>-1:!!(cb&&cb.length)
},empty:function(){cb=[];
b9=0;
return this
},disable:function(){cb=cc=b7=undefined;
return this
},disabled:function(){return !cb
},lock:function(){cc=undefined;
if(!b7){cd.disable()
}return this
},locked:function(){return !cc
},fireWith:function(cg,cf){if(cb&&(!e||cc)){cf=cf||[];
cf=[cg,cf.slice?cf.slice():cf];
if(b8){cc.push(cf)
}else{i(cf)
}}return this
},fire:function(){cd.fireWith(this,arguments);
return this
},fired:function(){return !!e
}};
return cd
};
bI.extend({Deferred:function(b6){var i=[["resolve","done",bI.Callbacks("once memory"),"resolved"],["reject","fail",bI.Callbacks("once memory"),"rejected"],["notify","progress",bI.Callbacks("memory")]],b7="pending",b8={state:function(){return b7
},always:function(){e.done(arguments).fail(arguments);
return this
},then:function(){var b9=arguments;
return bI.Deferred(function(ca){bI.each(i,function(cc,cb){var cd=bI.isFunction(b9[cc])&&b9[cc];
e[cb[1]](function(){var ce=cd&&cd.apply(this,arguments);
if(ce&&bI.isFunction(ce.promise)){ce.promise().done(ca.resolve).fail(ca.reject).progress(ca.notify)
}else{ca[cb[0]+"With"](this===b8?ca.promise():this,cd?[ce]:arguments)
}})
});
b9=null
}).promise()
},promise:function(b9){return b9!=null?bI.extend(b9,b8):b8
}},e={};
b8.pipe=b8.then;
bI.each(i,function(ca,b9){var cc=b9[2],cb=b9[3];
b8[b9[1]]=cc.add;
if(cb){cc.add(function(){b7=cb
},i[ca^1][2].disable,i[2][2].lock)
}e[b9[0]]=function(){e[b9[0]+"With"](this===e?b8:this,arguments);
return this
};
e[b9[0]+"With"]=cc.fireWith
});
b8.promise(e);
if(b6){b6.call(e,e)
}return e
},when:function(b9){var b7=0,cb=O.call(arguments),e=cb.length,b6=e!==1||(b9&&bI.isFunction(b9.promise))?e:0,ce=b6===1?b9:bI.Deferred(),b8=function(cg,ch,cf){return function(i){ch[cg]=this;
cf[cg]=arguments.length>1?O.call(arguments):i;
if(cf===cd){ce.notifyWith(ch,cf)
}else{if(!(--b6)){ce.resolveWith(ch,cf)
}}}
},cd,ca,cc;
if(e>1){cd=new Array(e);
ca=new Array(e);
cc=new Array(e);
for(;
b7<e;
b7++){if(cb[b7]&&bI.isFunction(cb[b7].promise)){cb[b7].promise().done(b8(b7,cc,cb)).fail(ce.reject).progress(b8(b7,ca,cd))
}else{--b6
}}}if(!b6){ce.resolveWith(cc,cb)
}return ce.promise()
}});
var ak;
bI.fn.ready=function(e){bI.ready.promise().done(e);
return this
};
bI.extend({isReady:false,readyWait:1,holdReady:function(e){if(e){bI.readyWait++
}else{bI.ready(true)
}},ready:function(e){if(e===true?--bI.readyWait:bI.isReady){return
}if(!n.body){return setTimeout(bI.ready)
}bI.isReady=true;
if(e!==true&&--bI.readyWait>0){return
}ak.resolveWith(n,[bI]);
if(bI.fn.triggerHandler){bI(n).triggerHandler("ready");
bI(n).off("ready")
}}});
function bm(){if(n.addEventListener){n.removeEventListener("DOMContentLoaded",bZ,false);
a5.removeEventListener("load",bZ,false)
}else{n.detachEvent("onreadystatechange",bZ);
a5.detachEvent("onload",bZ)
}}function bZ(){if(n.addEventListener||event.type==="load"||n.readyState==="complete"){bm();
bI.ready()
}}bI.ready.promise=function(b8){if(!ak){ak=bI.Deferred();
if(n.readyState==="complete"){setTimeout(bI.ready)
}else{if(n.addEventListener){n.addEventListener("DOMContentLoaded",bZ,false);
a5.addEventListener("load",bZ,false)
}else{n.attachEvent("onreadystatechange",bZ);
a5.attachEvent("onload",bZ);
var b7=false;
try{b7=a5.frameElement==null&&n.documentElement
}catch(b6){}if(b7&&b7.doScroll){(function i(){if(!bI.isReady){try{b7.doScroll("left")
}catch(b9){return setTimeout(i,50)
}bm();
bI.ready()
}})()
}}}}return ak.promise(b8)
};
var aC=typeof undefined;
var bh;
for(bh in bI(C)){break
}C.ownLast=bh!=="0";
C.inlineBlockNeedsLayout=false;
bI(function(){var b6,b7,e,i;
e=n.getElementsByTagName("body")[0];
if(!e||!e.style){return
}b7=n.createElement("div");
i=n.createElement("div");
i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
e.appendChild(i).appendChild(b7);
if(typeof b7.style.zoom!==aC){b7.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
C.inlineBlockNeedsLayout=b6=b7.offsetWidth===3;
if(b6){e.style.zoom=1
}}e.removeChild(i)
});
(function(){var b6=n.createElement("div");
if(C.deleteExpando==null){C.deleteExpando=true;
try{delete b6.test
}catch(i){C.deleteExpando=false
}}b6=null
})();
bI.acceptData=function(b6){var i=bI.noData[(b6.nodeName+" ").toLowerCase()],e=+b6.nodeType||1;
return e!==1&&e!==9?false:!i||i!==true&&b6.getAttribute("classid")===i
};
var by=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,aQ=/([A-Z])/g;
function bA(b7,b6,b8){if(b8===undefined&&b7.nodeType===1){var i="data-"+b6.replace(aQ,"-$1").toLowerCase();
b8=b7.getAttribute(i);
if(typeof b8==="string"){try{b8=b8==="true"?true:b8==="false"?false:b8==="null"?null:+b8+""===b8?+b8:by.test(b8)?bI.parseJSON(b8):b8
}catch(b9){}bI.data(b7,b6,b8)
}else{b8=undefined
}}return b8
}function P(i){var e;
for(e in i){if(e==="data"&&bI.isEmptyObject(i[e])){continue
}if(e!=="toJSON"){return false
}}return true
}function bc(b7,i,b9,b8){if(!bI.acceptData(b7)){return
}var cb,ca,cc=bI.expando,cd=b7.nodeType,e=cd?bI.cache:b7,b6=cd?b7[cc]:b7[cc]&&cc;
if((!b6||!e[b6]||(!b8&&!e[b6].data))&&b9===undefined&&typeof i==="string"){return
}if(!b6){if(cd){b6=b7[cc]=aP.pop()||bI.guid++
}else{b6=cc
}}if(!e[b6]){e[b6]=cd?{}:{toJSON:bI.noop}
}if(typeof i==="object"||typeof i==="function"){if(b8){e[b6]=bI.extend(e[b6],i)
}else{e[b6].data=bI.extend(e[b6].data,i)
}}ca=e[b6];
if(!b8){if(!ca.data){ca.data={}
}ca=ca.data
}if(b9!==undefined){ca[bI.camelCase(i)]=b9
}if(typeof i==="string"){cb=ca[i];
if(cb==null){cb=ca[bI.camelCase(i)]
}}else{cb=ca
}return cb
}function ab(b9,b7,e){if(!bI.acceptData(b9)){return
}var cb,b8,ca=b9.nodeType,b6=ca?bI.cache:b9,cc=ca?b9[bI.expando]:bI.expando;
if(!b6[cc]){return
}if(b7){cb=e?b6[cc]:b6[cc].data;
if(cb){if(!bI.isArray(b7)){if(b7 in cb){b7=[b7]
}else{b7=bI.camelCase(b7);
if(b7 in cb){b7=[b7]
}else{b7=b7.split(" ")
}}}else{b7=b7.concat(bI.map(b7,bI.camelCase))
}b8=b7.length;
while(b8--){delete cb[b7[b8]]
}if(e?!P(cb):!bI.isEmptyObject(cb)){return
}}}if(!e){delete b6[cc].data;
if(!P(b6[cc])){return
}}if(ca){bI.cleanData([b9],true)
}else{if(C.deleteExpando||b6!=b6.window){delete b6[cc]
}else{b6[cc]=null
}}}bI.extend({cache:{},noData:{"applet ":true,"embed ":true,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){e=e.nodeType?bI.cache[e[bI.expando]]:e[bI.expando];
return !!e&&!P(e)
},data:function(i,e,b6){return bc(i,e,b6)
},removeData:function(i,e){return ab(i,e)
},_data:function(i,e,b6){return bc(i,e,b6,true)
},_removeData:function(i,e){return ab(i,e,true)
}});
bI.fn.extend({data:function(b8,cb){var b7,b6,ca,b9=this[0],e=b9&&b9.attributes;
if(b8===undefined){if(this.length){ca=bI.data(b9);
if(b9.nodeType===1&&!bI._data(b9,"parsedAttrs")){b7=e.length;
while(b7--){if(e[b7]){b6=e[b7].name;
if(b6.indexOf("data-")===0){b6=bI.camelCase(b6.slice(5));
bA(b9,b6,ca[b6])
}}}bI._data(b9,"parsedAttrs",true)
}}return ca
}if(typeof b8==="object"){return this.each(function(){bI.data(this,b8)
})
}return arguments.length>1?this.each(function(){bI.data(this,b8,cb)
}):b9?bA(b9,b8,bI.data(b9,b8)):undefined
},removeData:function(e){return this.each(function(){bI.removeData(this,e)
})
}});
bI.extend({queue:function(b6,i,b7){var e;
if(b6){i=(i||"fx")+"queue";
e=bI._data(b6,i);
if(b7){if(!e||bI.isArray(b7)){e=bI._data(b6,i,bI.makeArray(b7))
}else{e.push(b7)
}}return e||[]
}},dequeue:function(b9,b8){b8=b8||"fx";
var i=bI.queue(b9,b8),ca=i.length,b7=i.shift(),e=bI._queueHooks(b9,b8),b6=function(){bI.dequeue(b9,b8)
};
if(b7==="inprogress"){b7=i.shift();
ca--
}if(b7){if(b8==="fx"){i.unshift("inprogress")
}delete e.stop;
b7.call(b9,b6,e)
}if(!ca&&e){e.empty.fire()
}},_queueHooks:function(b6,i){var e=i+"queueHooks";
return bI._data(b6,e)||bI._data(b6,e,{empty:bI.Callbacks("once memory").add(function(){bI._removeData(b6,i+"queue");
bI._removeData(b6,e)
})})
}});
bI.fn.extend({queue:function(e,i){var b6=2;
if(typeof e!=="string"){i=e;
e="fx";
b6--
}if(arguments.length<b6){return bI.queue(this[0],e)
}return i===undefined?this:this.each(function(){var b7=bI.queue(this,e,i);
bI._queueHooks(this,e);
if(e==="fx"&&b7[0]!=="inprogress"){bI.dequeue(this,e)
}})
},dequeue:function(e){return this.each(function(){bI.dequeue(this,e)
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(b7,cb){var b6,b8=1,cc=bI.Deferred(),ca=this,e=this.length,b9=function(){if(!(--b8)){cc.resolveWith(ca,[ca])
}};
if(typeof b7!=="string"){cb=b7;
b7=undefined
}b7=b7||"fx";
while(e--){b6=bI._data(ca[e],b7+"queueHooks");
if(b6&&b6.empty){b8++;
b6.empty.add(b9)
}}b9();
return cc.promise(cb)
}});
var aE=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var bT=["Top","Right","Bottom","Left"];
var S=function(i,e){i=e||i;
return bI.css(i,"display")==="none"||!bI.contains(i.ownerDocument,i)
};
var aB=bI.access=function(e,ca,cc,cb,b8,ce,cd){var b7=0,b6=e.length,b9=cc==null;
if(bI.type(cc)==="object"){b8=true;
for(b7 in cc){bI.access(e,ca,b7,cc[b7],true,ce,cd)
}}else{if(cb!==undefined){b8=true;
if(!bI.isFunction(cb)){cd=true
}if(b9){if(cd){ca.call(e,cb);
ca=null
}else{b9=ca;
ca=function(cf,i,cg){return b9.call(bI(cf),cg)
}
}}if(ca){for(;
b7<b6;
b7++){ca(e[b7],cc,cd?cb:cb.call(e[b7],b7,ca(e[b7],cc)))
}}}}return b8?e:b9?ca.call(e):b6?ca(e[0],cc):ce
};
var aM=(/^(?:checkbox|radio)$/i);
(function(){var i=n.createElement("input"),b8=n.createElement("div"),b6=n.createDocumentFragment();
b8.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
C.leadingWhitespace=b8.firstChild.nodeType===3;
C.tbody=!b8.getElementsByTagName("tbody").length;
C.htmlSerialize=!!b8.getElementsByTagName("link").length;
C.html5Clone=n.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";
i.type="checkbox";
i.checked=true;
b6.appendChild(i);
C.appendChecked=i.checked;
b8.innerHTML="<textarea>x</textarea>";
C.noCloneChecked=!!b8.cloneNode(true).lastChild.defaultValue;
b6.appendChild(b8);
b8.innerHTML="<input type='radio' checked='checked' name='t'/>";
C.checkClone=b8.cloneNode(true).cloneNode(true).lastChild.checked;
C.noCloneEvent=true;
if(b8.attachEvent){b8.attachEvent("onclick",function(){C.noCloneEvent=false
});
b8.cloneNode(true).click()
}if(C.deleteExpando==null){C.deleteExpando=true;
try{delete b8.test
}catch(b7){C.deleteExpando=false
}}})();
(function(){var b6,e,b7=n.createElement("div");
for(b6 in {submit:true,change:true,focusin:true}){e="on"+b6;
if(!(C[b6+"Bubbles"]=e in a5)){b7.setAttribute(e,"t");
C[b6+"Bubbles"]=b7.attributes[e].expando===false
}}b7=null
})();
var bG=/^(?:input|select|textarea)$/i,a6=/^key/,bM=/^(?:mouse|pointer|contextmenu)|click/,bC=/^(?:focusinfocus|focusoutblur)$/,bx=/^([^.]*)(?:\.(.+)|)$/;
function U(){return true
}function Z(){return false
}function am(){try{return n.activeElement
}catch(e){}}bI.event={global:{},add:function(b8,cd,ci,ca,b9){var cb,cj,ck,b6,cf,cc,ch,b7,cg,e,i,ce=bI._data(b8);
if(!ce){return
}if(ci.handler){b6=ci;
ci=b6.handler;
b9=b6.selector
}if(!ci.guid){ci.guid=bI.guid++
}if(!(cj=ce.events)){cj=ce.events={}
}if(!(cc=ce.handle)){cc=ce.handle=function(cl){return typeof bI!==aC&&(!cl||bI.event.triggered!==cl.type)?bI.event.dispatch.apply(cc.elem,arguments):undefined
};
cc.elem=b8
}cd=(cd||"").match(aF)||[""];
ck=cd.length;
while(ck--){cb=bx.exec(cd[ck])||[];
cg=i=cb[1];
e=(cb[2]||"").split(".").sort();
if(!cg){continue
}cf=bI.event.special[cg]||{};
cg=(b9?cf.delegateType:cf.bindType)||cg;
cf=bI.event.special[cg]||{};
ch=bI.extend({type:cg,origType:i,data:ca,handler:ci,guid:ci.guid,selector:b9,needsContext:b9&&bI.expr.match.needsContext.test(b9),namespace:e.join(".")},b6);
if(!(b7=cj[cg])){b7=cj[cg]=[];
b7.delegateCount=0;
if(!cf.setup||cf.setup.call(b8,ca,e,cc)===false){if(b8.addEventListener){b8.addEventListener(cg,cc,false)
}else{if(b8.attachEvent){b8.attachEvent("on"+cg,cc)
}}}}if(cf.add){cf.add.call(b8,ch);
if(!ch.handler.guid){ch.handler.guid=ci.guid
}}if(b9){b7.splice(b7.delegateCount++,0,ch)
}else{b7.push(ch)
}bI.event.global[cg]=true
}b8=null
},remove:function(b7,cd,ck,b8,cc){var ca,ch,cb,b9,cj,ci,cf,b6,cg,e,i,ce=bI.hasData(b7)&&bI._data(b7);
if(!ce||!(ci=ce.events)){return
}cd=(cd||"").match(aF)||[""];
cj=cd.length;
while(cj--){cb=bx.exec(cd[cj])||[];
cg=i=cb[1];
e=(cb[2]||"").split(".").sort();
if(!cg){for(cg in ci){bI.event.remove(b7,cg+cd[cj],ck,b8,true)
}continue
}cf=bI.event.special[cg]||{};
cg=(b8?cf.delegateType:cf.bindType)||cg;
b6=ci[cg]||[];
cb=cb[2]&&new RegExp("(^|\\.)"+e.join("\\.(?:.*\\.|)")+"(\\.|$)");
b9=ca=b6.length;
while(ca--){ch=b6[ca];
if((cc||i===ch.origType)&&(!ck||ck.guid===ch.guid)&&(!cb||cb.test(ch.namespace))&&(!b8||b8===ch.selector||b8==="**"&&ch.selector)){b6.splice(ca,1);
if(ch.selector){b6.delegateCount--
}if(cf.remove){cf.remove.call(b7,ch)
}}}if(b9&&!b6.length){if(!cf.teardown||cf.teardown.call(b7,e,ce.handle)===false){bI.removeEvent(b7,cg,ce.handle)
}delete ci[cg]
}}if(bI.isEmptyObject(ci)){delete ce.handle;
bI._removeData(b7,"events")
}},trigger:function(b6,cd,b9,ck){var ce,b8,ci,cj,cg,cc,cb,ca=[b9||n],ch=J.call(b6,"type")?b6.type:b6,b7=J.call(b6,"namespace")?b6.namespace.split("."):[];
ci=cc=b9=b9||n;
if(b9.nodeType===3||b9.nodeType===8){return
}if(bC.test(ch+bI.event.triggered)){return
}if(ch.indexOf(".")>=0){b7=ch.split(".");
ch=b7.shift();
b7.sort()
}b8=ch.indexOf(":")<0&&"on"+ch;
b6=b6[bI.expando]?b6:new bI.Event(ch,typeof b6==="object"&&b6);
b6.isTrigger=ck?2:3;
b6.namespace=b7.join(".");
b6.namespace_re=b6.namespace?new RegExp("(^|\\.)"+b7.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
b6.result=undefined;
if(!b6.target){b6.target=b9
}cd=cd==null?[b6]:bI.makeArray(cd,[b6]);
cg=bI.event.special[ch]||{};
if(!ck&&cg.trigger&&cg.trigger.apply(b9,cd)===false){return
}if(!ck&&!cg.noBubble&&!bI.isWindow(b9)){cj=cg.delegateType||ch;
if(!bC.test(cj+ch)){ci=ci.parentNode
}for(;
ci;
ci=ci.parentNode){ca.push(ci);
cc=ci
}if(cc===(b9.ownerDocument||n)){ca.push(cc.defaultView||cc.parentWindow||a5)
}}cb=0;
while((ci=ca[cb++])&&!b6.isPropagationStopped()){b6.type=cb>1?cj:cg.bindType||ch;
ce=(bI._data(ci,"events")||{})[b6.type]&&bI._data(ci,"handle");
if(ce){ce.apply(ci,cd)
}ce=b8&&ci[b8];
if(ce&&ce.apply&&bI.acceptData(ci)){b6.result=ce.apply(ci,cd);
if(b6.result===false){b6.preventDefault()
}}}b6.type=ch;
if(!ck&&!b6.isDefaultPrevented()){if((!cg._default||cg._default.apply(ca.pop(),cd)===false)&&bI.acceptData(b9)){if(b8&&b9[ch]&&!bI.isWindow(b9)){cc=b9[b8];
if(cc){b9[b8]=null
}bI.event.triggered=ch;
try{b9[ch]()
}catch(cf){}bI.event.triggered=undefined;
if(cc){b9[b8]=cc
}}}}return b6.result
},dispatch:function(e){e=bI.event.fix(e);
var b9,ca,ce,b6,b8,cd=[],cc=O.call(arguments),b7=(bI._data(this,"events")||{})[e.type]||[],cb=bI.event.special[e.type]||{};
cc[0]=e;
e.delegateTarget=this;
if(cb.preDispatch&&cb.preDispatch.call(this,e)===false){return
}cd=bI.event.handlers.call(this,e,b7);
b9=0;
while((b6=cd[b9++])&&!e.isPropagationStopped()){e.currentTarget=b6.elem;
b8=0;
while((ce=b6.handlers[b8++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(ce.namespace)){e.handleObj=ce;
e.data=ce.data;
ca=((bI.event.special[ce.origType]||{}).handle||ce.handler).apply(b6.elem,cc);
if(ca!==undefined){if((e.result=ca)===false){e.preventDefault();
e.stopPropagation()
}}}}}if(cb.postDispatch){cb.postDispatch.call(this,e)
}return e.result
},handlers:function(e,b7){var b6,cc,ca,b9,cb=[],b8=b7.delegateCount,cd=e.target;
if(b8&&cd.nodeType&&(!e.button||e.type!=="click")){for(;
cd!=this;
cd=cd.parentNode||this){if(cd.nodeType===1&&(cd.disabled!==true||e.type!=="click")){ca=[];
for(b9=0;
b9<b8;
b9++){cc=b7[b9];
b6=cc.selector+" ";
if(ca[b6]===undefined){ca[b6]=cc.needsContext?bI(b6,this).index(cd)>=0:bI.find(b6,this,null,[cd]).length
}if(ca[b6]){ca.push(cc)
}}if(ca.length){cb.push({elem:cd,handlers:ca})
}}}}if(b8<b7.length){cb.push({elem:this,handlers:b7.slice(b8)})
}return cb
},fix:function(b8){if(b8[bI.expando]){return b8
}var b6,cb,ca,b7=b8.type,e=b8,b9=this.fixHooks[b7];
if(!b9){this.fixHooks[b7]=b9=bM.test(b7)?this.mouseHooks:a6.test(b7)?this.keyHooks:{}
}ca=b9.props?this.props.concat(b9.props):this.props;
b8=new bI.Event(e);
b6=ca.length;
while(b6--){cb=ca[b6];
b8[cb]=e[cb]
}if(!b8.target){b8.target=e.srcElement||n
}if(b8.target.nodeType===3){b8.target=b8.target.parentNode
}b8.metaKey=!!b8.metaKey;
return b9.filter?b9.filter(b8,e):b8
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(i,e){if(i.which==null){i.which=e.charCode!=null?e.charCode:e.keyCode
}return i
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b7,b6){var e,b8,b9,i=b6.button,ca=b6.fromElement;
if(b7.pageX==null&&b6.clientX!=null){b8=b7.target.ownerDocument||n;
b9=b8.documentElement;
e=b8.body;
b7.pageX=b6.clientX+(b9&&b9.scrollLeft||e&&e.scrollLeft||0)-(b9&&b9.clientLeft||e&&e.clientLeft||0);
b7.pageY=b6.clientY+(b9&&b9.scrollTop||e&&e.scrollTop||0)-(b9&&b9.clientTop||e&&e.clientTop||0)
}if(!b7.relatedTarget&&ca){b7.relatedTarget=ca===b7.target?b6.toElement:ca
}if(!b7.which&&i!==undefined){b7.which=(i&1?1:(i&2?3:(i&4?2:0)))
}return b7
}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==am()&&this.focus){try{this.focus();
return false
}catch(i){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===am()&&this.blur){this.blur();
return false
}},delegateType:"focusout"},click:{trigger:function(){if(bI.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();
return false
}},_default:function(e){return bI.nodeName(e.target,"a")
}},beforeunload:{postDispatch:function(e){if(e.result!==undefined&&e.originalEvent){e.originalEvent.returnValue=e.result
}}}},simulate:function(b6,b8,b7,i){var b9=bI.extend(new bI.Event(),b7,{type:b6,isSimulated:true,originalEvent:{}});
if(i){bI.event.trigger(b9,null,b8)
}else{bI.event.dispatch.call(b8,b9)
}if(b9.isDefaultPrevented()){b7.preventDefault()
}}};
bI.removeEvent=n.removeEventListener?function(i,e,b6){if(i.removeEventListener){i.removeEventListener(e,b6,false)
}}:function(b6,i,b7){var e="on"+i;
if(b6.detachEvent){if(typeof b6[e]===aC){b6[e]=null
}b6.detachEvent(e,b7)
}};
bI.Event=function(i,e){if(!(this instanceof bI.Event)){return new bI.Event(i,e)
}if(i&&i.type){this.originalEvent=i;
this.type=i.type;
this.isDefaultPrevented=i.defaultPrevented||i.defaultPrevented===undefined&&i.returnValue===false?U:Z
}else{this.type=i
}if(e){bI.extend(this,e)
}this.timeStamp=i&&i.timeStamp||bI.now();
this[bI.expando]=true
};
bI.Event.prototype={isDefaultPrevented:Z,isPropagationStopped:Z,isImmediatePropagationStopped:Z,preventDefault:function(){var i=this.originalEvent;
this.isDefaultPrevented=U;
if(!i){return
}if(i.preventDefault){i.preventDefault()
}else{i.returnValue=false
}},stopPropagation:function(){var i=this.originalEvent;
this.isPropagationStopped=U;
if(!i){return
}if(i.stopPropagation){i.stopPropagation()
}i.cancelBubble=true
},stopImmediatePropagation:function(){var i=this.originalEvent;
this.isImmediatePropagationStopped=U;
if(i&&i.stopImmediatePropagation){i.stopImmediatePropagation()
}this.stopPropagation()
}};
bI.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(i,e){bI.event.special[i]={delegateType:e,bindType:e,handle:function(b8){var b6,ca=this,b9=b8.relatedTarget,b7=b8.handleObj;
if(!b9||(b9!==ca&&!bI.contains(ca,b9))){b8.type=b7.origType;
b6=b7.handler.apply(this,arguments);
b8.type=e
}return b6
}}
});
if(!C.submitBubbles){bI.event.special.submit={setup:function(){if(bI.nodeName(this,"form")){return false
}bI.event.add(this,"click._submit keypress._submit",function(b7){var b6=b7.target,i=bI.nodeName(b6,"input")||bI.nodeName(b6,"button")?b6.form:undefined;
if(i&&!bI._data(i,"submitBubbles")){bI.event.add(i,"submit._submit",function(e){e._submit_bubble=true
});
bI._data(i,"submitBubbles",true)
}})
},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;
if(this.parentNode&&!e.isTrigger){bI.event.simulate("submit",this.parentNode,e,true)
}}},teardown:function(){if(bI.nodeName(this,"form")){return false
}bI.event.remove(this,"._submit")
}}
}if(!C.changeBubbles){bI.event.special.change={setup:function(){if(bG.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bI.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true
}});
bI.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false
}bI.event.simulate("change",this,e,true)
})
}return false
}bI.event.add(this,"beforeactivate._change",function(b6){var i=b6.target;
if(bG.test(i.nodeName)&&!bI._data(i,"changeBubbles")){bI.event.add(i,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){bI.event.simulate("change",this.parentNode,e,true)
}});
bI._data(i,"changeBubbles",true)
}})
},handle:function(i){var e=i.target;
if(this!==e||i.isSimulated||i.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return i.handleObj.handler.apply(this,arguments)
}},teardown:function(){bI.event.remove(this,"._change");
return !bG.test(this.nodeName)
}}
}if(!C.focusinBubbles){bI.each({focus:"focusin",blur:"focusout"},function(b6,e){var i=function(b7){bI.event.simulate(e,b7.target,bI.event.fix(b7),true)
};
bI.event.special[e]={setup:function(){var b8=this.ownerDocument||this,b7=bI._data(b8,e);
if(!b7){b8.addEventListener(b6,i,true)
}bI._data(b8,e,(b7||0)+1)
},teardown:function(){var b8=this.ownerDocument||this,b7=bI._data(b8,e)-1;
if(!b7){b8.removeEventListener(b6,i,true);
bI._removeData(b8,e)
}else{bI._data(b8,e,b7)
}}}
})
}bI.fn.extend({on:function(b6,e,b9,b8,i){var b7,ca;
if(typeof b6==="object"){if(typeof e!=="string"){b9=b9||e;
e=undefined
}for(b7 in b6){this.on(b7,e,b9,b6[b7],i)
}return this
}if(b9==null&&b8==null){b8=e;
b9=e=undefined
}else{if(b8==null){if(typeof e==="string"){b8=b9;
b9=undefined
}else{b8=b9;
b9=e;
e=undefined
}}}if(b8===false){b8=Z
}else{if(!b8){return this
}}if(i===1){ca=b8;
b8=function(cb){bI().off(cb);
return ca.apply(this,arguments)
};
b8.guid=ca.guid||(ca.guid=bI.guid++)
}return this.each(function(){bI.event.add(this,b6,b8,b9,e)
})
},one:function(i,e,b7,b6){return this.on(i,e,b7,b6,1)
},off:function(b6,e,b8){var i,b7;
if(b6&&b6.preventDefault&&b6.handleObj){i=b6.handleObj;
bI(b6.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler);
return this
}if(typeof b6==="object"){for(b7 in b6){this.off(b7,e,b6[b7])
}return this
}if(e===false||typeof e==="function"){b8=e;
e=undefined
}if(b8===false){b8=Z
}return this.each(function(){bI.event.remove(this,b6,b8,e)
})
},trigger:function(e,i){return this.each(function(){bI.event.trigger(e,i,this)
})
},triggerHandler:function(e,b6){var i=this[0];
if(i){return bI.event.trigger(e,b6,i,true)
}}});
function A(e){var b6=d.split("|"),i=e.createDocumentFragment();
if(i.createElement){while(b6.length){i.createElement(b6.pop())
}}return i
}var d="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",aD=/ jQuery\d+="(?:null|\d+)"/g,L=new RegExp("<(?:"+d+")[\\s/>]","i"),b5=/^\s+/,aH=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,o=/<([\w:]+)/,b0=/<tbody/i,K=/<|&#?\w+;/,an=/<(?:script|style|link)/i,bW=/checked\s*(?:[^=]|=\s*.checked.)/i,bB=/^$|\/(?:java|ecma)script/i,ar=/^true\/(.*)/,aO=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,W={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:C.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},aT=A(n),k=aT.appendChild(n.createElement("div"));
W.optgroup=W.option;
W.tbody=W.tfoot=W.colgroup=W.caption=W.thead;
W.th=W.td;
function l(b8,e){var b6,b9,b7=0,ca=typeof b8.getElementsByTagName!==aC?b8.getElementsByTagName(e||"*"):typeof b8.querySelectorAll!==aC?b8.querySelectorAll(e||"*"):undefined;
if(!ca){for(ca=[],b6=b8.childNodes||b8;
(b9=b6[b7])!=null;
b7++){if(!e||bI.nodeName(b9,e)){ca.push(b9)
}else{bI.merge(ca,l(b9,e))
}}}return e===undefined||e&&bI.nodeName(b8,e)?bI.merge([b8],ca):ca
}function bY(e){if(aM.test(e.type)){e.defaultChecked=e.checked
}}function a3(i,e){return bI.nodeName(i,"table")&&bI.nodeName(e.nodeType!==11?e:e.firstChild,"tr")?i.getElementsByTagName("tbody")[0]||i.appendChild(i.ownerDocument.createElement("tbody")):i
}function t(e){e.type=(bI.find.attr(e,"type")!==null)+"/"+e.type;
return e
}function bf(i){var e=ar.exec(i.type);
if(e){i.type=e[1]
}else{i.removeAttribute("type")
}return i
}function bu(e,b7){var b8,b6=0;
for(;
(b8=e[b6])!=null;
b6++){bI._data(b8,"globalEval",!b7||bI._data(b7[b6],"globalEval"))
}}function at(cc,b6){if(b6.nodeType!==1||!bI.hasData(cc)){return
}var b9,b8,e,cb=bI._data(cc),ca=bI._data(b6,cb),b7=cb.events;
if(b7){delete ca.handle;
ca.events={};
for(b9 in b7){for(b8=0,e=b7[b9].length;
b8<e;
b8++){bI.event.add(b6,b9,b7[b9][b8])
}}}if(ca.data){ca.data=bI.extend({},ca.data)
}}function T(b8,i){var b9,b7,b6;
if(i.nodeType!==1){return
}b9=i.nodeName.toLowerCase();
if(!C.noCloneEvent&&i[bI.expando]){b6=bI._data(i);
for(b7 in b6.events){bI.removeEvent(i,b7,b6.handle)
}i.removeAttribute(bI.expando)
}if(b9==="script"&&i.text!==b8.text){t(i).text=b8.text;
bf(i)
}else{if(b9==="object"){if(i.parentNode){i.outerHTML=b8.outerHTML
}if(C.html5Clone&&(b8.innerHTML&&!bI.trim(i.innerHTML))){i.innerHTML=b8.innerHTML
}}else{if(b9==="input"&&aM.test(b8.type)){i.defaultChecked=i.checked=b8.checked;
if(i.value!==b8.value){i.value=b8.value
}}else{if(b9==="option"){i.defaultSelected=i.selected=b8.defaultSelected
}else{if(b9==="input"||b9==="textarea"){i.defaultValue=b8.defaultValue
}}}}}}bI.extend({clone:function(b6,b8,e){var ca,b7,cd,b9,cb,cc=bI.contains(b6.ownerDocument,b6);
if(C.html5Clone||bI.isXMLDoc(b6)||!L.test("<"+b6.nodeName+">")){cd=b6.cloneNode(true)
}else{k.innerHTML=b6.outerHTML;
k.removeChild(cd=k.firstChild)
}if((!C.noCloneEvent||!C.noCloneChecked)&&(b6.nodeType===1||b6.nodeType===11)&&!bI.isXMLDoc(b6)){ca=l(cd);
cb=l(b6);
for(b9=0;
(b7=cb[b9])!=null;
++b9){if(ca[b9]){T(b7,ca[b9])
}}}if(b8){if(e){cb=cb||l(b6);
ca=ca||l(cd);
for(b9=0;
(b7=cb[b9])!=null;
b9++){at(b7,ca[b9])
}}else{at(b6,cd)
}}ca=l(cd,"script");
if(ca.length>0){bu(ca,!cc&&l(b6,"script"))
}ca=cb=b7=null;
return cd
},buildFragment:function(b6,b8,cd,ci){var ce,ca,cc,ch,cj,cg,b7,cb=b6.length,b9=A(b8),e=[],cf=0;
for(;
cf<cb;
cf++){ca=b6[cf];
if(ca||ca===0){if(bI.type(ca)==="object"){bI.merge(e,ca.nodeType?[ca]:ca)
}else{if(!K.test(ca)){e.push(b8.createTextNode(ca))
}else{ch=ch||b9.appendChild(b8.createElement("div"));
cj=(o.exec(ca)||["",""])[1].toLowerCase();
b7=W[cj]||W._default;
ch.innerHTML=b7[1]+ca.replace(aH,"<$1></$2>")+b7[2];
ce=b7[0];
while(ce--){ch=ch.lastChild
}if(!C.leadingWhitespace&&b5.test(ca)){e.push(b8.createTextNode(b5.exec(ca)[0]))
}if(!C.tbody){ca=cj==="table"&&!b0.test(ca)?ch.firstChild:b7[1]==="<table>"&&!b0.test(ca)?ch:0;
ce=ca&&ca.childNodes.length;
while(ce--){if(bI.nodeName((cg=ca.childNodes[ce]),"tbody")&&!cg.childNodes.length){ca.removeChild(cg)
}}}bI.merge(e,ch.childNodes);
ch.textContent="";
while(ch.firstChild){ch.removeChild(ch.firstChild)
}ch=b9.lastChild
}}}}if(ch){b9.removeChild(ch)
}if(!C.appendChecked){bI.grep(l(e,"input"),bY)
}cf=0;
while((ca=e[cf++])){if(ci&&bI.inArray(ca,ci)!==-1){continue
}cc=bI.contains(ca.ownerDocument,ca);
ch=l(b9.appendChild(ca),"script");
if(cc){bu(ch)
}if(cd){ce=0;
while((ca=ch[ce++])){if(bB.test(ca.type||"")){cd.push(ca)
}}}}ch=null;
return b9
},cleanData:function(b6,ce){var b8,cd,b7,b9,ca=0,cf=bI.expando,e=bI.cache,cb=C.deleteExpando,cc=bI.event.special;
for(;
(b8=b6[ca])!=null;
ca++){if(ce||bI.acceptData(b8)){b7=b8[cf];
b9=b7&&e[b7];
if(b9){if(b9.events){for(cd in b9.events){if(cc[cd]){bI.event.remove(b8,cd)
}else{bI.removeEvent(b8,cd,b9.handle)
}}}if(e[b7]){delete e[b7];
if(cb){delete b8[cf]
}else{if(typeof b8.removeAttribute!==aC){b8.removeAttribute(cf)
}else{b8[cf]=null
}}aP.push(b7)
}}}}}});
bI.fn.extend({text:function(e){return aB(this,function(i){return i===undefined?bI.text(this):this.empty().append((this[0]&&this[0].ownerDocument||n).createTextNode(i))
},null,e,arguments.length)
},append:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var i=a3(this,e);
i.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var i=a3(this,e);
i.insertBefore(e,i.firstChild)
}})
},before:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)
}})
},after:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)
}})
},remove:function(e,b9){var b8,b6=e?bI.filter(e,this):this,b7=0;
for(;
(b8=b6[b7])!=null;
b7++){if(!b9&&b8.nodeType===1){bI.cleanData(l(b8))
}if(b8.parentNode){if(b9&&bI.contains(b8.ownerDocument,b8)){bu(l(b8,"script"))
}b8.parentNode.removeChild(b8)
}}return this
},empty:function(){var b6,e=0;
for(;
(b6=this[e])!=null;
e++){if(b6.nodeType===1){bI.cleanData(l(b6,false))
}while(b6.firstChild){b6.removeChild(b6.firstChild)
}if(b6.options&&bI.nodeName(b6,"select")){b6.options.length=0
}}return this
},clone:function(i,e){i=i==null?false:i;
e=e==null?i:e;
return this.map(function(){return bI.clone(this,i,e)
})
},html:function(e){return aB(this,function(b9){var b8=this[0]||{},b7=0,b6=this.length;
if(b9===undefined){return b8.nodeType===1?b8.innerHTML.replace(aD,""):undefined
}if(typeof b9==="string"&&!an.test(b9)&&(C.htmlSerialize||!L.test(b9))&&(C.leadingWhitespace||!b5.test(b9))&&!W[(o.exec(b9)||["",""])[1].toLowerCase()]){b9=b9.replace(aH,"<$1></$2>");
try{for(;
b7<b6;
b7++){b8=this[b7]||{};
if(b8.nodeType===1){bI.cleanData(l(b8,false));
b8.innerHTML=b9
}}b8=0
}catch(ca){}}if(b8){this.empty().append(b9)
}},null,e,arguments.length)
},replaceWith:function(){var e=arguments[0];
this.domManip(arguments,function(i){e=this.parentNode;
bI.cleanData(l(this));
if(e){e.replaceChild(i,this)
}});
return e&&(e.length||e.nodeType)?this:this.remove()
},detach:function(e){return this.remove(e,true)
},domManip:function(cd,ci){cd=az.apply([],cd);
var cb,b7,e,b9,cg,cc,ca=0,b8=this.length,cf=this,ch=b8-1,ce=cd[0],b6=bI.isFunction(ce);
if(b6||(b8>1&&typeof ce==="string"&&!C.checkClone&&bW.test(ce))){return this.each(function(cj){var i=cf.eq(cj);
if(b6){cd[0]=ce.call(this,cj,i.html())
}i.domManip(cd,ci)
})
}if(b8){cc=bI.buildFragment(cd,this[0].ownerDocument,false,this);
cb=cc.firstChild;
if(cc.childNodes.length===1){cc=cb
}if(cb){b9=bI.map(l(cc,"script"),t);
e=b9.length;
for(;
ca<b8;
ca++){b7=cc;
if(ca!==ch){b7=bI.clone(b7,true,true);
if(e){bI.merge(b9,l(b7,"script"))
}}ci.call(this[ca],b7,ca)
}if(e){cg=b9[b9.length-1].ownerDocument;
bI.map(b9,bf);
for(ca=0;
ca<e;
ca++){b7=b9[ca];
if(bB.test(b7.type||"")&&!bI._data(b7,"globalEval")&&bI.contains(cg,b7)){if(b7.src){if(bI._evalUrl){bI._evalUrl(b7.src)
}}else{bI.globalEval((b7.text||b7.textContent||b7.innerHTML||"").replace(aO,""))
}}}}cc=cb=null
}}return this
}});
bI.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,i){bI.fn[e]=function(b6){var b7,b9=0,b8=[],cb=bI(b6),ca=cb.length-1;
for(;
b9<=ca;
b9++){b7=b9===ca?this:this.clone(true);
bI(cb[b9])[i](b7);
w.apply(b8,b7.get())
}return this.pushStack(b8)
}
});
var aI,bl={};
function a4(e,b8){var i,b6=bI(b8.createElement(e)).appendTo(b8.body),b7=a5.getDefaultComputedStyle&&(i=a5.getDefaultComputedStyle(b6[0]))?i.display:bI.css(b6[0],"display");
b6.detach();
return b7
}function a0(b6){var i=n,e=bl[b6];
if(!e){e=a4(b6,i);
if(e==="none"||!e){aI=(aI||bI("<iframe frameborder='0' width='0' height='0'/>")).appendTo(i.documentElement);
i=(aI[0].contentWindow||aI[0].contentDocument).document;
i.write();
i.close();
e=a4(b6,i);
aI.detach()
}bl[b6]=e
}return e
}(function(){var e;
C.shrinkWrapBlocks=function(){if(e!=null){return e
}e=false;
var b7,i,b6;
i=n.getElementsByTagName("body")[0];
if(!i||!i.style){return
}b7=n.createElement("div");
b6=n.createElement("div");
b6.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
i.appendChild(b6).appendChild(b7);
if(typeof b7.style.zoom!==aC){b7.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
b7.appendChild(n.createElement("div")).style.width="5px";
e=b7.offsetWidth!==3
}i.removeChild(b6);
return e
}
})();
var aZ=(/^margin/);
var Y=new RegExp("^("+aE+")(?!px)[a-z%]+$","i");
var bq,F,bo=/^(top|right|bottom|left)$/;
if(a5.getComputedStyle){bq=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)
};
F=function(cb,i,ca){var b8,b7,b9,e,b6=cb.style;
ca=ca||bq(cb);
e=ca?ca.getPropertyValue(i)||ca[i]:undefined;
if(ca){if(e===""&&!bI.contains(cb.ownerDocument,cb)){e=bI.style(cb,i)
}if(Y.test(e)&&aZ.test(i)){b8=b6.width;
b7=b6.minWidth;
b9=b6.maxWidth;
b6.minWidth=b6.maxWidth=b6.width=e;
e=ca.width;
b6.width=b8;
b6.minWidth=b7;
b6.maxWidth=b9
}}return e===undefined?e:e+""
}
}else{if(n.documentElement.currentStyle){bq=function(e){return e.currentStyle
};
F=function(ca,b7,b9){var cb,i,e,b6,b8=ca.style;
b9=b9||bq(ca);
b6=b9?b9[b7]:undefined;
if(b6==null&&b8&&b8[b7]){b6=b8[b7]
}if(Y.test(b6)&&!bo.test(b7)){cb=b8.left;
i=ca.runtimeStyle;
e=i&&i.left;
if(e){i.left=ca.currentStyle.left
}b8.left=b7==="fontSize"?"1em":b6;
b6=b8.pixelLeft+"px";
b8.left=cb;
if(e){i.left=e
}}return b6===undefined?b6:b6+""||"auto"
}
}}function a7(e,i){return{get:function(){var b6=e();
if(b6==null){return
}if(b6){delete this.get;
return
}return(this.get=i).apply(this,arguments)
}}
}(function(){var cb,b9,b7,ca,b6,b8,i;
cb=n.createElement("div");
cb.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
b7=cb.getElementsByTagName("a")[0];
b9=b7&&b7.style;
if(!b9){return
}b9.cssText="float:left;opacity:.5";
C.opacity=b9.opacity==="0.5";
C.cssFloat=!!b9.cssFloat;
cb.style.backgroundClip="content-box";
cb.cloneNode(true).style.backgroundClip="";
C.clearCloneStyle=cb.style.backgroundClip==="content-box";
C.boxSizing=b9.boxSizing===""||b9.MozBoxSizing===""||b9.WebkitBoxSizing==="";
bI.extend(C,{reliableHiddenOffsets:function(){if(b8==null){e()
}return b8
},boxSizingReliable:function(){if(b6==null){e()
}return b6
},pixelPosition:function(){if(ca==null){e()
}return ca
},reliableMarginRight:function(){if(i==null){e()
}return i
}});
function e(){var cf,cc,cd,ce;
cc=n.getElementsByTagName("body")[0];
if(!cc||!cc.style){return
}cf=n.createElement("div");
cd=n.createElement("div");
cd.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
cc.appendChild(cd).appendChild(cf);
cf.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
ca=b6=false;
i=true;
if(a5.getComputedStyle){ca=(a5.getComputedStyle(cf,null)||{}).top!=="1%";
b6=(a5.getComputedStyle(cf,null)||{width:"4px"}).width==="4px";
ce=cf.appendChild(n.createElement("div"));
ce.style.cssText=cf.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
ce.style.marginRight=ce.style.width="0";
cf.style.width="1px";
i=!parseFloat((a5.getComputedStyle(ce,null)||{}).marginRight)
}cf.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
ce=cf.getElementsByTagName("td");
ce[0].style.cssText="margin:0;border:0;padding:0;display:none";
b8=ce[0].offsetHeight===0;
if(b8){ce[0].style.display="";
ce[1].style.display="none";
b8=ce[0].offsetHeight===0
}cc.removeChild(cd)
}})();
bI.swap=function(b9,b8,ca,b7){var b6,i,e={};
for(i in b8){e[i]=b9.style[i];
b9.style[i]=b8[i]
}b6=ca.apply(b9,b7||[]);
for(i in b8){b9.style[i]=e[i]
}return b6
};
var bj=/alpha\([^)]*\)/i,aU=/opacity\s*=\s*([^)]*)/,G=/^(none|table(?!-c[ea]).+)/,bb=new RegExp("^("+aE+")(.*)$","i"),V=new RegExp("^([+-])=("+aE+")","i"),be={position:"absolute",visibility:"hidden",display:"block"},bD={letterSpacing:"0",fontWeight:"400"},aw=["Webkit","O","Moz","ms"];
function c(b8,b6){if(b6 in b8){return b6
}var b9=b6.charAt(0).toUpperCase()+b6.slice(1),e=b6,b7=aw.length;
while(b7--){b6=aw[b7]+b9;
if(b6 in b8){return b6
}}return e
}function r(ca,e){var cb,b8,b9,i=[],b6=0,b7=ca.length;
for(;
b6<b7;
b6++){b8=ca[b6];
if(!b8.style){continue
}i[b6]=bI._data(b8,"olddisplay");
cb=b8.style.display;
if(e){if(!i[b6]&&cb==="none"){b8.style.display=""
}if(b8.style.display===""&&S(b8)){i[b6]=bI._data(b8,"olddisplay",a0(b8.nodeName))
}}else{b9=S(b8);
if(cb&&cb!=="none"||!b9){bI._data(b8,"olddisplay",b9?cb:bI.css(b8,"display"))
}}}for(b6=0;
b6<b7;
b6++){b8=ca[b6];
if(!b8.style){continue
}if(!e||b8.style.display==="none"||b8.style.display===""){b8.style.display=e?i[b6]||"":"none"
}}return ca
}function aN(e,b6,b7){var i=bb.exec(b6);
return i?Math.max(0,i[1]-(b7||0))+(i[2]||"px"):b6
}function ax(b9,b6,e,cb,b8){var b7=e===(cb?"border":"content")?4:b6==="width"?1:0,ca=0;
for(;
b7<4;
b7+=2){if(e==="margin"){ca+=bI.css(b9,e+bT[b7],true,b8)
}if(cb){if(e==="content"){ca-=bI.css(b9,"padding"+bT[b7],true,b8)
}if(e!=="margin"){ca-=bI.css(b9,"border"+bT[b7]+"Width",true,b8)
}}else{ca+=bI.css(b9,"padding"+bT[b7],true,b8);
if(e!=="padding"){ca+=bI.css(b9,"border"+bT[b7]+"Width",true,b8)
}}}return ca
}function u(b8,i,e){var b7=true,b9=i==="width"?b8.offsetWidth:b8.offsetHeight,b6=bq(b8),ca=C.boxSizing&&bI.css(b8,"boxSizing",false,b6)==="border-box";
if(b9<=0||b9==null){b9=F(b8,i,b6);
if(b9<0||b9==null){b9=b8.style[i]
}if(Y.test(b9)){return b9
}b7=ca&&(C.boxSizingReliable()||b9===b8.style[i]);
b9=parseFloat(b9)||0
}return(b9+ax(b8,i,e||(ca?"border":"content"),b7,b6))+"px"
}bI.extend({cssHooks:{opacity:{get:function(b6,i){if(i){var e=F(b6,"opacity");
return e===""?"1":e
}}}},cssNumber:{columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":C.cssFloat?"cssFloat":"styleFloat"},style:function(b7,b6,cd,b8){if(!b7||b7.nodeType===3||b7.nodeType===8||!b7.style){return
}var cb,cc,ce,b9=bI.camelCase(b6),i=b7.style;
b6=bI.cssProps[b9]||(bI.cssProps[b9]=c(i,b9));
ce=bI.cssHooks[b6]||bI.cssHooks[b9];
if(cd!==undefined){cc=typeof cd;
if(cc==="string"&&(cb=V.exec(cd))){cd=(cb[1]+1)*cb[2]+parseFloat(bI.css(b7,b6));
cc="number"
}if(cd==null||cd!==cd){return
}if(cc==="number"&&!bI.cssNumber[b9]){cd+="px"
}if(!C.clearCloneStyle&&cd===""&&b6.indexOf("background")===0){i[b6]="inherit"
}if(!ce||!("set" in ce)||(cd=ce.set(b7,cd,b8))!==undefined){try{i[b6]=cd
}catch(ca){}}}else{if(ce&&"get" in ce&&(cb=ce.get(b7,false,b8))!==undefined){return cb
}return i[b6]
}},css:function(ca,b8,i,b9){var b7,cb,e,b6=bI.camelCase(b8);
b8=bI.cssProps[b6]||(bI.cssProps[b6]=c(ca.style,b6));
e=bI.cssHooks[b8]||bI.cssHooks[b6];
if(e&&"get" in e){cb=e.get(ca,true,i)
}if(cb===undefined){cb=F(ca,b8,b9)
}if(cb==="normal"&&b8 in bD){cb=bD[b8]
}if(i===""||i){b7=parseFloat(cb);
return i===true||bI.isNumeric(b7)?b7||0:cb
}return cb
}});
bI.each(["height","width"],function(b6,e){bI.cssHooks[e]={get:function(b8,b7,i){if(b7){return G.test(bI.css(b8,"display"))&&b8.offsetWidth===0?bI.swap(b8,be,function(){return u(b8,e,i)
}):u(b8,e,i)
}},set:function(b8,b9,i){var b7=i&&bq(b8);
return aN(b8,b9,i?ax(b8,e,i,C.boxSizing&&bI.css(b8,"boxSizing",false,b7)==="border-box",b7):0)
}}
});
if(!C.opacity){bI.cssHooks.opacity={get:function(i,e){return aU.test((e&&i.currentStyle?i.currentStyle.filter:i.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":e?"1":""
},set:function(b8,b9){var b7=b8.style,i=b8.currentStyle,e=bI.isNumeric(b9)?"alpha(opacity="+b9*100+")":"",b6=i&&i.filter||b7.filter||"";
b7.zoom=1;
if((b9>=1||b9==="")&&bI.trim(b6.replace(bj,""))===""&&b7.removeAttribute){b7.removeAttribute("filter");
if(b9===""||i&&!i.filter){return
}}b7.filter=bj.test(b6)?b6.replace(bj,e):b6+" "+e
}}
}bI.cssHooks.marginRight=a7(C.reliableMarginRight,function(i,e){if(e){return bI.swap(i,{display:"inline-block"},F,[i,"marginRight"])
}});
bI.each({margin:"",padding:"",border:"Width"},function(e,i){bI.cssHooks[e+i]={expand:function(b8){var b7=0,b6={},b9=typeof b8==="string"?b8.split(" "):[b8];
for(;
b7<4;
b7++){b6[e+bT[b7]+i]=b9[b7]||b9[b7-2]||b9[0]
}return b6
}};
if(!aZ.test(e)){bI.cssHooks[e+i].set=aN
}});
bI.fn.extend({css:function(e,i){return aB(this,function(ca,b7,cb){var b9,b6,cc={},b8=0;
if(bI.isArray(b7)){b9=bq(ca);
b6=b7.length;
for(;
b8<b6;
b8++){cc[b7[b8]]=bI.css(ca,b7[b8],false,b9)
}return cc
}return cb!==undefined?bI.style(ca,b7,cb):bI.css(ca,b7)
},e,i,arguments.length>1)
},show:function(){return r(this,true)
},hide:function(){return r(this)
},toggle:function(e){if(typeof e==="boolean"){return e?this.show():this.hide()
}return this.each(function(){if(S(this)){bI(this).show()
}else{bI(this).hide()
}})
}});
function I(b6,i,b8,e,b7){return new I.prototype.init(b6,i,b8,e,b7)
}bI.Tween=I;
I.prototype={constructor:I,init:function(b7,i,b9,e,b8,b6){this.elem=b7;
this.prop=b9;
this.easing=b8||"swing";
this.options=i;
this.start=this.now=this.cur();
this.end=e;
this.unit=b6||(bI.cssNumber[b9]?"":"px")
},cur:function(){var e=I.propHooks[this.prop];
return e&&e.get?e.get(this):I.propHooks._default.get(this)
},run:function(b6){var i,e=I.propHooks[this.prop];
if(this.options.duration){this.pos=i=bI.easing[this.easing](b6,this.options.duration*b6,0,1,this.options.duration)
}else{this.pos=i=b6
}this.now=(this.end-this.start)*i+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(e&&e.set){e.set(this)
}else{I.propHooks._default.set(this)
}return this
}};
I.prototype.init.prototype=I.prototype;
I.propHooks={_default:{get:function(i){var e;
if(i.elem[i.prop]!=null&&(!i.elem.style||i.elem.style[i.prop]==null)){return i.elem[i.prop]
}e=bI.css(i.elem,i.prop,"");
return !e||e==="auto"?0:e
},set:function(e){if(bI.fx.step[e.prop]){bI.fx.step[e.prop](e)
}else{if(e.elem.style&&(e.elem.style[bI.cssProps[e.prop]]!=null||bI.cssHooks[e.prop])){bI.style(e.elem,e.prop,e.now+e.unit)
}else{e.elem[e.prop]=e.now
}}}}};
I.propHooks.scrollTop=I.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now
}}};
bI.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}};
bI.fx=I.prototype.init;
bI.fx.step={};
var M,ae,bR=/^(?:toggle|show|hide)$/,bJ=new RegExp("^(?:([+-])=|)("+aE+")([a-z%]*)$","i"),bP=/queueHooks$/,aG=[h],a2={"*":[function(e,ca){var cc=this.createTween(e,ca),b8=cc.cur(),b7=bJ.exec(ca),cb=b7&&b7[3]||(bI.cssNumber[e]?"":"px"),i=(bI.cssNumber[e]||cb!=="px"&&+b8)&&bJ.exec(bI.css(cc.elem,e)),b6=1,b9=20;
if(i&&i[3]!==cb){cb=cb||i[3];
b7=b7||[];
i=+b8||1;
do{b6=b6||".5";
i=i/b6;
bI.style(cc.elem,e,i+cb)
}while(b6!==(b6=cc.cur()/b8)&&b6!==1&&--b9)
}if(b7){i=cc.start=+i||+b8||0;
cc.unit=cb;
cc.end=b7[1]?i+(b7[1]+1)*b7[2]:+b7[2]
}return cc
}]};
function bn(){setTimeout(function(){M=undefined
});
return(M=bI.now())
}function bH(b7,b9){var b8,e={height:b7},b6=0;
b9=b9?1:0;
for(;
b6<4;
b6+=2-b9){b8=bT[b6];
e["margin"+b8]=e["padding"+b8]=b7
}if(b9){e.opacity=e.width=b7
}return e
}function bd(b8,ca,b7){var i,b9=(a2[ca]||[]).concat(a2["*"]),e=0,b6=b9.length;
for(;
e<b6;
e++){if((i=b9[e].call(b7,ca,b8))){return i
}}}function h(b7,cc,e){var b6,cf,b9,ci,cj,cg,cb,ce,b8=this,cd={},i=b7.style,ca=b7.nodeType&&S(b7),ch=bI._data(b7,"fxshow");
if(!e.queue){cj=bI._queueHooks(b7,"fx");
if(cj.unqueued==null){cj.unqueued=0;
cg=cj.empty.fire;
cj.empty.fire=function(){if(!cj.unqueued){cg()
}}
}cj.unqueued++;
b8.always(function(){b8.always(function(){cj.unqueued--;
if(!bI.queue(b7,"fx").length){cj.empty.fire()
}})
})
}if(b7.nodeType===1&&("height" in cc||"width" in cc)){e.overflow=[i.overflow,i.overflowX,i.overflowY];
cb=bI.css(b7,"display");
ce=cb==="none"?bI._data(b7,"olddisplay")||a0(b7.nodeName):cb;
if(ce==="inline"&&bI.css(b7,"float")==="none"){if(!C.inlineBlockNeedsLayout||a0(b7.nodeName)==="inline"){i.display="inline-block"
}else{i.zoom=1
}}}if(e.overflow){i.overflow="hidden";
if(!C.shrinkWrapBlocks()){b8.always(function(){i.overflow=e.overflow[0];
i.overflowX=e.overflow[1];
i.overflowY=e.overflow[2]
})
}}for(b6 in cc){cf=cc[b6];
if(bR.exec(cf)){delete cc[b6];
b9=b9||cf==="toggle";
if(cf===(ca?"hide":"show")){if(cf==="show"&&ch&&ch[b6]!==undefined){ca=true
}else{continue
}}cd[b6]=ch&&ch[b6]||bI.style(b7,b6)
}else{cb=undefined
}}if(!bI.isEmptyObject(cd)){if(ch){if("hidden" in ch){ca=ch.hidden
}}else{ch=bI._data(b7,"fxshow",{})
}if(b9){ch.hidden=!ca
}if(ca){bI(b7).show()
}else{b8.done(function(){bI(b7).hide()
})
}b8.done(function(){var ck;
bI._removeData(b7,"fxshow");
for(ck in cd){bI.style(b7,ck,cd[ck])
}});
for(b6 in cd){ci=bd(ca?ch[b6]:0,b6,b8);
if(!(b6 in ch)){ch[b6]=ci.start;
if(ca){ci.end=ci.start;
ci.start=b6==="width"||b6==="height"?1:0
}}}}else{if((cb==="none"?a0(b7.nodeName):cb)==="inline"){i.display=cb
}}}function ao(b7,b9){var b6,i,ca,b8,e;
for(b6 in b7){i=bI.camelCase(b6);
ca=b9[i];
b8=b7[b6];
if(bI.isArray(b8)){ca=b8[1];
b8=b7[b6]=b8[0]
}if(b6!==i){b7[i]=b8;
delete b7[b6]
}e=bI.cssHooks[i];
if(e&&"expand" in e){b8=e.expand(b8);
delete b7[i];
for(b6 in b8){if(!(b6 in b7)){b7[b6]=b8[b6];
b9[b6]=ca
}}}else{b9[i]=ca
}}}function f(b6,ca,cd){var ce,e,b9=0,i=aG.length,cc=bI.Deferred().always(function(){delete b8.elem
}),b8=function(){if(e){return false
}var ck=M||bn(),ch=Math.max(0,b7.startTime+b7.duration-ck),cf=ch/b7.duration||0,cj=1-cf,cg=0,ci=b7.tweens.length;
for(;
cg<ci;
cg++){b7.tweens[cg].run(cj)
}cc.notifyWith(b6,[b7,cj,ch]);
if(cj<1&&ci){return ch
}else{cc.resolveWith(b6,[b7]);
return false
}},b7=cc.promise({elem:b6,props:bI.extend({},ca),opts:bI.extend(true,{specialEasing:{}},cd),originalProperties:ca,originalOptions:cd,startTime:M||bn(),duration:cd.duration,tweens:[],createTween:function(ch,cf){var cg=bI.Tween(b6,b7.opts,ch,cf,b7.opts.specialEasing[ch]||b7.opts.easing);
b7.tweens.push(cg);
return cg
},stop:function(cg){var cf=0,ch=cg?b7.tweens.length:0;
if(e){return this
}e=true;
for(;
cf<ch;
cf++){b7.tweens[cf].run(1)
}if(cg){cc.resolveWith(b6,[b7,cg])
}else{cc.rejectWith(b6,[b7,cg])
}return this
}}),cb=b7.props;
ao(cb,b7.opts.specialEasing);
for(;
b9<i;
b9++){ce=aG[b9].call(b7,b6,cb,b7.opts);
if(ce){return ce
}}bI.map(cb,bd,b7);
if(bI.isFunction(b7.opts.start)){b7.opts.start.call(b6,b7)
}bI.fx.timer(bI.extend(b8,{elem:b6,anim:b7,queue:b7.opts.queue}));
return b7.progress(b7.opts.progress).done(b7.opts.done,b7.opts.complete).fail(b7.opts.fail).always(b7.opts.always)
}bI.Animation=bI.extend(f,{tweener:function(i,b8){if(bI.isFunction(i)){b8=i;
i=["*"]
}else{i=i.split(" ")
}var b7,e=0,b6=i.length;
for(;
e<b6;
e++){b7=i[e];
a2[b7]=a2[b7]||[];
a2[b7].unshift(b8)
}},prefilter:function(i,e){if(e){aG.unshift(i)
}else{aG.push(i)
}}});
bI.speed=function(b6,b7,i){var e=b6&&typeof b6==="object"?bI.extend({},b6):{complete:i||!i&&b7||bI.isFunction(b6)&&b6,duration:b6,easing:i&&b7||b7&&!bI.isFunction(b7)&&b7};
e.duration=bI.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in bI.fx.speeds?bI.fx.speeds[e.duration]:bI.fx.speeds._default;
if(e.queue==null||e.queue===true){e.queue="fx"
}e.old=e.complete;
e.complete=function(){if(bI.isFunction(e.old)){e.old.call(this)
}if(e.queue){bI.dequeue(this,e.queue)
}};
return e
};
bI.fn.extend({fadeTo:function(e,b7,b6,i){return this.filter(S).css("opacity",0).show().end().animate({opacity:b7},e,b6,i)
},animate:function(ca,b7,b9,b8){var b6=bI.isEmptyObject(ca),e=bI.speed(b7,b9,b8),i=function(){var cb=f(this,bI.extend({},ca),e);
if(b6||bI._data(this,"finish")){cb.stop(true)
}};
i.finish=i;
return b6||e.queue===false?this.each(i):this.queue(e.queue,i)
},stop:function(b6,i,e){var b7=function(b8){var b9=b8.stop;
delete b8.stop;
b9(e)
};
if(typeof b6!=="string"){e=i;
i=b6;
b6=undefined
}if(i&&b6!==false){this.queue(b6||"fx",[])
}return this.each(function(){var cb=true,b8=b6!=null&&b6+"queueHooks",ca=bI.timers,b9=bI._data(this);
if(b8){if(b9[b8]&&b9[b8].stop){b7(b9[b8])
}}else{for(b8 in b9){if(b9[b8]&&b9[b8].stop&&bP.test(b8)){b7(b9[b8])
}}}for(b8=ca.length;
b8--;
){if(ca[b8].elem===this&&(b6==null||ca[b8].queue===b6)){ca[b8].anim.stop(e);
cb=false;
ca.splice(b8,1)
}}if(cb||!e){bI.dequeue(this,b6)
}})
},finish:function(e){if(e!==false){e=e||"fx"
}return this.each(function(){var b7,ca=bI._data(this),b6=ca[e+"queue"],i=ca[e+"queueHooks"],b9=bI.timers,b8=b6?b6.length:0;
ca.finish=true;
bI.queue(this,e,[]);
if(i&&i.stop){i.stop.call(this,true)
}for(b7=b9.length;
b7--;
){if(b9[b7].elem===this&&b9[b7].queue===e){b9[b7].anim.stop(true);
b9.splice(b7,1)
}}for(b7=0;
b7<b8;
b7++){if(b6[b7]&&b6[b7].finish){b6[b7].finish.call(this)
}}delete ca.finish
})
}});
bI.each(["toggle","show","hide"],function(b6,e){var b7=bI.fn[e];
bI.fn[e]=function(i,b9,b8){return i==null||typeof i==="boolean"?b7.apply(this,arguments):this.animate(bH(e,true),i,b9,b8)
}
});
bI.each({slideDown:bH("show"),slideUp:bH("hide"),slideToggle:bH("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,i){bI.fn[e]=function(b6,b8,b7){return this.animate(i,b6,b8,b7)
}
});
bI.timers=[];
bI.fx.tick=function(){var b7,b6=bI.timers,e=0;
M=bI.now();
for(;
e<b6.length;
e++){b7=b6[e];
if(!b7()&&b6[e]===b7){b6.splice(e--,1)
}}if(!b6.length){bI.fx.stop()
}M=undefined
};
bI.fx.timer=function(e){bI.timers.push(e);
if(e()){bI.fx.start()
}else{bI.timers.pop()
}};
bI.fx.interval=13;
bI.fx.start=function(){if(!ae){ae=setInterval(bI.fx.tick,bI.fx.interval)
}};
bI.fx.stop=function(){clearInterval(ae);
ae=null
};
bI.fx.speeds={slow:600,fast:200,_default:400};
bI.fn.delay=function(i,e){i=bI.fx?bI.fx.speeds[i]||i:i;
e=e||"fx";
return this.queue(e,function(b7,b6){var b8=setTimeout(b7,i);
b6.stop=function(){clearTimeout(b8)
}
})
};
(function(){var b6,b8,e,i,b7;
b8=n.createElement("div");
b8.setAttribute("className","t");
b8.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
i=b8.getElementsByTagName("a")[0];
e=n.createElement("select");
b7=e.appendChild(n.createElement("option"));
b6=b8.getElementsByTagName("input")[0];
i.style.cssText="top:1px";
C.getSetAttribute=b8.className!=="t";
C.style=/top/.test(i.getAttribute("style"));
C.hrefNormalized=i.getAttribute("href")==="/a";
C.checkOn=!!b6.value;
C.optSelected=b7.selected;
C.enctype=!!n.createElement("form").enctype;
e.disabled=true;
C.optDisabled=!b7.disabled;
b6=n.createElement("input");
b6.setAttribute("value","");
C.input=b6.getAttribute("value")==="";
b6.value="t";
b6.setAttribute("type","radio");
C.radioValue=b6.value==="t"
})();
var al=/\r/g;
bI.fn.extend({val:function(b7){var e,i,b8,b6=this[0];
if(!arguments.length){if(b6){e=bI.valHooks[b6.type]||bI.valHooks[b6.nodeName.toLowerCase()];
if(e&&"get" in e&&(i=e.get(b6,"value"))!==undefined){return i
}i=b6.value;
return typeof i==="string"?i.replace(al,""):i==null?"":i
}return
}b8=bI.isFunction(b7);
return this.each(function(b9){var ca;
if(this.nodeType!==1){return
}if(b8){ca=b7.call(this,b9,bI(this).val())
}else{ca=b7
}if(ca==null){ca=""
}else{if(typeof ca==="number"){ca+=""
}else{if(bI.isArray(ca)){ca=bI.map(ca,function(cb){return cb==null?"":cb+""
})
}}}e=bI.valHooks[this.type]||bI.valHooks[this.nodeName.toLowerCase()];
if(!e||!("set" in e)||e.set(this,ca,"value")===undefined){this.value=ca
}})
}});
bI.extend({valHooks:{option:{get:function(e){var i=bI.find.attr(e,"value");
return i!=null?i:bI.trim(bI.text(e))
}},select:{get:function(e){var cb,b7,cd=e.options,b9=e.selectedIndex,b8=e.type==="select-one"||b9<0,cc=b8?null:[],ca=b8?b9+1:cd.length,b6=b9<0?ca:b8?b9:0;
for(;
b6<ca;
b6++){b7=cd[b6];
if((b7.selected||b6===b9)&&(C.optDisabled?!b7.disabled:b7.getAttribute("disabled")===null)&&(!b7.parentNode.disabled||!bI.nodeName(b7.parentNode,"optgroup"))){cb=bI(b7).val();
if(b8){return cb
}cc.push(cb)
}}return cc
},set:function(ca,cb){var cc,b9,b7=ca.options,e=bI.makeArray(cb),b8=b7.length;
while(b8--){b9=b7[b8];
if(bI.inArray(bI.valHooks.option.get(b9),e)>=0){try{b9.selected=cc=true
}catch(b6){b9.scrollHeight
}}else{b9.selected=false
}}if(!cc){ca.selectedIndex=-1
}return b7
}}}});
bI.each(["radio","checkbox"],function(){bI.valHooks[this]={set:function(e,i){if(bI.isArray(i)){return(e.checked=bI.inArray(bI(e).val(),i)>=0)
}}};
if(!C.checkOn){bI.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value
}
}});
var ba,b3,bO=bI.expr.attrHandle,aq=/^(?:checked|selected)$/i,bN=C.getSetAttribute,bF=C.input;
bI.fn.extend({attr:function(e,i){return aB(this,bI.attr,e,i,arguments.length>1)
},removeAttr:function(e){return this.each(function(){bI.removeAttr(this,e)
})
}});
bI.extend({attr:function(b8,b7,b9){var e,b6,i=b8.nodeType;
if(!b8||i===3||i===8||i===2){return
}if(typeof b8.getAttribute===aC){return bI.prop(b8,b7,b9)
}if(i!==1||!bI.isXMLDoc(b8)){b7=b7.toLowerCase();
e=bI.attrHooks[b7]||(bI.expr.match.bool.test(b7)?b3:ba)
}if(b9!==undefined){if(b9===null){bI.removeAttr(b8,b7)
}else{if(e&&"set" in e&&(b6=e.set(b8,b9,b7))!==undefined){return b6
}else{b8.setAttribute(b7,b9+"");
return b9
}}}else{if(e&&"get" in e&&(b6=e.get(b8,b7))!==null){return b6
}else{b6=bI.find.attr(b8,b7);
return b6==null?undefined:b6
}}},removeAttr:function(b7,b9){var e,b8,b6=0,ca=b9&&b9.match(aF);
if(ca&&b7.nodeType===1){while((e=ca[b6++])){b8=bI.propFix[e]||e;
if(bI.expr.match.bool.test(e)){if(bF&&bN||!aq.test(e)){b7[b8]=false
}else{b7[bI.camelCase("default-"+e)]=b7[b8]=false
}}else{bI.attr(b7,e,"")
}b7.removeAttribute(bN?e:b8)
}}},attrHooks:{type:{set:function(e,i){if(!C.radioValue&&i==="radio"&&bI.nodeName(e,"input")){var b6=e.value;
e.setAttribute("type",i);
if(b6){e.value=b6
}return i
}}}}});
b3={set:function(i,b6,e){if(b6===false){bI.removeAttr(i,e)
}else{if(bF&&bN||!aq.test(e)){i.setAttribute(!bN&&bI.propFix[e]||e,e)
}else{i[bI.camelCase("default-"+e)]=i[e]=true
}}return e
}};
bI.each(bI.expr.match.bool.source.match(/\w+/g),function(b7,b6){var e=bO[b6]||bI.find.attr;
bO[b6]=bF&&bN||!aq.test(b6)?function(b9,b8,cb){var i,ca;
if(!cb){ca=bO[b8];
bO[b8]=i;
i=e(b9,b8,cb)!=null?b8.toLowerCase():null;
bO[b8]=ca
}return i
}:function(b8,i,b9){if(!b9){return b8[bI.camelCase("default-"+i)]?i.toLowerCase():null
}}
});
if(!bF||!bN){bI.attrHooks.value={set:function(i,b6,e){if(bI.nodeName(i,"input")){i.defaultValue=b6
}else{return ba&&ba.set(i,b6,e)
}}}
}if(!bN){ba={set:function(b6,b7,i){var e=b6.getAttributeNode(i);
if(!e){b6.setAttributeNode((e=b6.ownerDocument.createAttribute(i)))
}e.value=b7+="";
if(i==="value"||b7===b6.getAttribute(i)){return b7
}}};
bO.id=bO.name=bO.coords=function(b6,i,b7){var e;
if(!b7){return(e=b6.getAttributeNode(i))&&e.value!==""?e.value:null
}};
bI.valHooks.button={get:function(b6,i){var e=b6.getAttributeNode(i);
if(e&&e.specified){return e.value
}},set:ba.set};
bI.attrHooks.contenteditable={set:function(i,b6,e){ba.set(i,b6===""?false:b6,e)
}};
bI.each(["width","height"],function(b6,e){bI.attrHooks[e]={set:function(i,b7){if(b7===""){i.setAttribute(e,"auto");
return b7
}}}
})
}if(!C.style){bI.attrHooks.style={get:function(e){return e.style.cssText||undefined
},set:function(e,i){return(e.style.cssText=i+"")
}}
}var aJ=/^(?:input|select|textarea|button|object)$/i,E=/^(?:a|area)$/i;
bI.fn.extend({prop:function(e,i){return aB(this,bI.prop,e,i,arguments.length>1)
},removeProp:function(e){e=bI.propFix[e]||e;
return this.each(function(){try{this[e]=undefined;
delete this[e]
}catch(i){}})
}});
bI.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(b9,b7,ca){var b6,e,b8,i=b9.nodeType;
if(!b9||i===3||i===8||i===2){return
}b8=i!==1||!bI.isXMLDoc(b9);
if(b8){b7=bI.propFix[b7]||b7;
e=bI.propHooks[b7]
}if(ca!==undefined){return e&&"set" in e&&(b6=e.set(b9,ca,b7))!==undefined?b6:(b9[b7]=ca)
}else{return e&&"get" in e&&(b6=e.get(b9,b7))!==null?b6:b9[b7]
}},propHooks:{tabIndex:{get:function(i){var e=bI.find.attr(i,"tabindex");
return e?parseInt(e,10):aJ.test(i.nodeName)||E.test(i.nodeName)&&i.href?0:-1
}}}});
if(!C.hrefNormalized){bI.each(["href","src"],function(b6,e){bI.propHooks[e]={get:function(i){return i.getAttribute(e,4)
}}
})
}if(!C.optSelected){bI.propHooks.selected={get:function(i){var e=i.parentNode;
if(e){e.selectedIndex;
if(e.parentNode){e.parentNode.selectedIndex
}}return null
}}
}bI.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){bI.propFix[this.toLowerCase()]=this
});
if(!C.enctype){bI.propFix.enctype="encoding"
}var bL=/[\t\r\n\f]/g;
bI.fn.extend({addClass:function(cd){var b7,b6,ce,cb,b8,e,b9=0,ca=this.length,cc=typeof cd==="string"&&cd;
if(bI.isFunction(cd)){return this.each(function(i){bI(this).addClass(cd.call(this,i,this.className))
})
}if(cc){b7=(cd||"").match(aF)||[];
for(;
b9<ca;
b9++){b6=this[b9];
ce=b6.nodeType===1&&(b6.className?(" "+b6.className+" ").replace(bL," "):" ");
if(ce){b8=0;
while((cb=b7[b8++])){if(ce.indexOf(" "+cb+" ")<0){ce+=cb+" "
}}e=bI.trim(ce);
if(b6.className!==e){b6.className=e
}}}}return this
},removeClass:function(cd){var b7,b6,ce,cb,b8,e,b9=0,ca=this.length,cc=arguments.length===0||typeof cd==="string"&&cd;
if(bI.isFunction(cd)){return this.each(function(i){bI(this).removeClass(cd.call(this,i,this.className))
})
}if(cc){b7=(cd||"").match(aF)||[];
for(;
b9<ca;
b9++){b6=this[b9];
ce=b6.nodeType===1&&(b6.className?(" "+b6.className+" ").replace(bL," "):"");
if(ce){b8=0;
while((cb=b7[b8++])){while(ce.indexOf(" "+cb+" ")>=0){ce=ce.replace(" "+cb+" "," ")
}}e=cd?bI.trim(ce):"";
if(b6.className!==e){b6.className=e
}}}}return this
},toggleClass:function(b6,e){var i=typeof b6;
if(typeof e==="boolean"&&i==="string"){return e?this.addClass(b6):this.removeClass(b6)
}if(bI.isFunction(b6)){return this.each(function(b7){bI(this).toggleClass(b6.call(this,b7,this.className,e),e)
})
}return this.each(function(){if(i==="string"){var b9,b8=0,b7=bI(this),ca=b6.match(aF)||[];
while((b9=ca[b8++])){if(b7.hasClass(b9)){b7.removeClass(b9)
}else{b7.addClass(b9)
}}}else{if(i===aC||i==="boolean"){if(this.className){bI._data(this,"__className__",this.className)
}this.className=this.className||b6===false?"":bI._data(this,"__className__")||""
}}})
},hasClass:function(e){var b8=" "+e+" ",b7=0,b6=this.length;
for(;
b7<b6;
b7++){if(this[b7].nodeType===1&&(" "+this[b7].className+" ").replace(bL," ").indexOf(b8)>=0){return true
}}return false
}});
bI.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(b6,e){bI.fn[e]=function(b7,i){return arguments.length>0?this.on(e,null,b7,i):this.trigger(e)
}
});
bI.fn.extend({hover:function(e,i){return this.mouseenter(e).mouseleave(i||e)
},bind:function(e,b6,i){return this.on(e,null,b6,i)
},unbind:function(e,i){return this.off(e,null,i)
},delegate:function(e,i,b7,b6){return this.on(i,e,b7,b6)
},undelegate:function(e,i,b6){return arguments.length===1?this.off(e,"**"):this.off(i,e||"**",b6)
}});
var bp=bI.now();
var bQ=(/\?/);
var a1=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
bI.parseJSON=function(e){if(a5.JSON&&a5.JSON.parse){return a5.JSON.parse(e+"")
}var b7,b6=null,i=bI.trim(e+"");
return i&&!bI.trim(i.replace(a1,function(ca,b8,b9,cb){if(b7&&b8){b6=0
}if(b6===0){return ca
}b7=b9||b8;
b6+=!cb-!b9;
return""
}))?(Function("return "+i))():bI.error("Invalid JSON: "+e)
};
bI.parseXML=function(b7){var i,b6;
if(!b7||typeof b7!=="string"){return null
}try{if(a5.DOMParser){b6=new DOMParser();
i=b6.parseFromString(b7,"text/xml")
}else{i=new ActiveXObject("Microsoft.XMLDOM");
i.async="false";
i.loadXML(b7)
}}catch(b8){i=undefined
}if(!i||!i.documentElement||i.getElementsByTagName("parsererror").length){bI.error("Invalid XML: "+b7)
}return i
};
var b4,aa,ap=/#.*$/,R=/([?&])_=[^&]*/,ah=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,B=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,q=/^(?:GET|HEAD)$/,aK=/^\/\//,aV=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,v={},a9={},aX="*/".concat("*");
try{aa=location.href
}catch(bi){aa=n.createElement("a");
aa.href="";
aa=aa.href
}b4=aV.exec(aa.toLowerCase())||[];
function bK(e){return function(b9,ca){if(typeof b9!=="string"){ca=b9;
b9="*"
}var b6,b7=0,b8=b9.toLowerCase().match(aF)||[];
if(bI.isFunction(ca)){while((b6=b8[b7++])){if(b6.charAt(0)==="+"){b6=b6.slice(1)||"*";
(e[b6]=e[b6]||[]).unshift(ca)
}else{(e[b6]=e[b6]||[]).push(ca)
}}}}
}function p(e,b6,ca,b7){var i={},b8=(e===a9);
function b9(cb){var cc;
i[cb]=true;
bI.each(e[cb]||[],function(ce,cd){var cf=cd(b6,ca,b7);
if(typeof cf==="string"&&!b8&&!i[cf]){b6.dataTypes.unshift(cf);
b9(cf);
return false
}else{if(b8){return !(cc=cf)
}}});
return cc
}return b9(b6.dataTypes[0])||!i["*"]&&b9("*")
}function s(b6,b7){var e,i,b8=bI.ajaxSettings.flatOptions||{};
for(i in b7){if(b7[i]!==undefined){(b8[i]?b6:(e||(e={})))[i]=b7[i]
}}if(e){bI.extend(true,b6,e)
}return b6
}function g(cc,cb,b8){var e,b7,b6,b9,i=cc.contents,ca=cc.dataTypes;
while(ca[0]==="*"){ca.shift();
if(b7===undefined){b7=cc.mimeType||cb.getResponseHeader("Content-Type")
}}if(b7){for(b9 in i){if(i[b9]&&i[b9].test(b7)){ca.unshift(b9);
break
}}}if(ca[0] in b8){b6=ca[0]
}else{for(b9 in b8){if(!ca[0]||cc.converters[b9+" "+ca[0]]){b6=b9;
break
}if(!e){e=b9
}}b6=b6||e
}if(b6){if(b6!==ca[0]){ca.unshift(b6)
}return b8[b6]
}}function ag(cg,b8,cd,b6){var i,cb,ce,b9,b7,cf={},cc=cg.dataTypes.slice();
if(cc[1]){for(ce in cg.converters){cf[ce.toLowerCase()]=cg.converters[ce]
}}cb=cc.shift();
while(cb){if(cg.responseFields[cb]){cd[cg.responseFields[cb]]=b8
}if(!b7&&b6&&cg.dataFilter){b8=cg.dataFilter(b8,cg.dataType)
}b7=cb;
cb=cc.shift();
if(cb){if(cb==="*"){cb=b7
}else{if(b7!=="*"&&b7!==cb){ce=cf[b7+" "+cb]||cf["* "+cb];
if(!ce){for(i in cf){b9=i.split(" ");
if(b9[1]===cb){ce=cf[b7+" "+b9[0]]||cf["* "+b9[0]];
if(ce){if(ce===true){ce=cf[i]
}else{if(cf[i]!==true){cb=b9[0];
cc.unshift(b9[1])
}}break
}}}}if(ce!==true){if(ce&&cg["throws"]){b8=ce(b8)
}else{try{b8=ce(b8)
}catch(ca){return{state:"parsererror",error:ce?ca:"No conversion from "+b7+" to "+cb}
}}}}}}}return{state:"success",data:b8}
}bI.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:aa,type:"GET",isLocal:B.test(b4[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":aX,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":bI.parseJSON,"text xml":bI.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(i,e){return e?s(s(i,bI.ajaxSettings),e):s(bI.ajaxSettings,i)
},ajaxPrefilter:bK(v),ajaxTransport:bK(a9),ajax:function(ca,b7){if(typeof ca==="object"){b7=ca;
ca=undefined
}b7=b7||{};
var cj,cl,cb,cq,cf,b6,cm,b8,ce=bI.ajaxSetup({},b7),cs=ce.context||ce,ch=ce.context&&(cs.nodeType||cs.jquery)?bI(cs):bI.event,cr=bI.Deferred(),co=bI.Callbacks("once memory"),cc=ce.statusCode||{},ci={},cp={},b9=0,cd="canceled",ck={readyState:0,getResponseHeader:function(i){var e;
if(b9===2){if(!b8){b8={};
while((e=ah.exec(cq))){b8[e[1].toLowerCase()]=e[2]
}}e=b8[i.toLowerCase()]
}return e==null?null:e
},getAllResponseHeaders:function(){return b9===2?cq:null
},setRequestHeader:function(i,ct){var e=i.toLowerCase();
if(!b9){i=cp[e]=cp[e]||i;
ci[i]=ct
}return this
},overrideMimeType:function(e){if(!b9){ce.mimeType=e
}return this
},statusCode:function(i){var e;
if(i){if(b9<2){for(e in i){cc[e]=[cc[e],i[e]]
}}else{ck.always(i[ck.status])
}}return this
},abort:function(i){var e=i||cd;
if(cm){cm.abort(e)
}cg(0,e);
return this
}};
cr.promise(ck).complete=co.add;
ck.success=ck.done;
ck.error=ck.fail;
ce.url=((ca||ce.url||aa)+"").replace(ap,"").replace(aK,b4[1]+"//");
ce.type=b7.method||b7.type||ce.method||ce.type;
ce.dataTypes=bI.trim(ce.dataType||"*").toLowerCase().match(aF)||[""];
if(ce.crossDomain==null){cj=aV.exec(ce.url.toLowerCase());
ce.crossDomain=!!(cj&&(cj[1]!==b4[1]||cj[2]!==b4[2]||(cj[3]||(cj[1]==="http:"?"80":"443"))!==(b4[3]||(b4[1]==="http:"?"80":"443"))))
}if(ce.data&&ce.processData&&typeof ce.data!=="string"){ce.data=bI.param(ce.data,ce.traditional)
}p(v,ce,b7,ck);
if(b9===2){return ck
}b6=ce.global;
if(b6&&bI.active++===0){bI.event.trigger("ajaxStart")
}ce.type=ce.type.toUpperCase();
ce.hasContent=!q.test(ce.type);
cb=ce.url;
if(!ce.hasContent){if(ce.data){cb=(ce.url+=(bQ.test(cb)?"&":"?")+ce.data);
delete ce.data
}if(ce.cache===false){ce.url=R.test(cb)?cb.replace(R,"$1_="+bp++):cb+(bQ.test(cb)?"&":"?")+"_="+bp++
}}if(ce.ifModified){if(bI.lastModified[cb]){ck.setRequestHeader("If-Modified-Since",bI.lastModified[cb])
}if(bI.etag[cb]){ck.setRequestHeader("If-None-Match",bI.etag[cb])
}}if(ce.data&&ce.hasContent&&ce.contentType!==false||b7.contentType){ck.setRequestHeader("Content-Type",ce.contentType)
}ck.setRequestHeader("Accept",ce.dataTypes[0]&&ce.accepts[ce.dataTypes[0]]?ce.accepts[ce.dataTypes[0]]+(ce.dataTypes[0]!=="*"?", "+aX+"; q=0.01":""):ce.accepts["*"]);
for(cl in ce.headers){ck.setRequestHeader(cl,ce.headers[cl])
}if(ce.beforeSend&&(ce.beforeSend.call(cs,ck,ce)===false||b9===2)){return ck.abort()
}cd="abort";
for(cl in {success:1,error:1,complete:1}){ck[cl](ce[cl])
}cm=p(a9,ce,b7,ck);
if(!cm){cg(-1,"No Transport")
}else{ck.readyState=1;
if(b6){ch.trigger("ajaxSend",[ck,ce])
}if(ce.async&&ce.timeout>0){cf=setTimeout(function(){ck.abort("timeout")
},ce.timeout)
}try{b9=1;
cm.send(ci,cg)
}catch(cn){if(b9<2){cg(-1,cn)
}else{throw cn
}}}function cg(cw,i,cx,cu){var e,cA,cy,cv,cz,ct=i;
if(b9===2){return
}b9=2;
if(cf){clearTimeout(cf)
}cm=undefined;
cq=cu||"";
ck.readyState=cw>0?4:0;
e=cw>=200&&cw<300||cw===304;
if(cx){cv=g(ce,ck,cx)
}cv=ag(ce,cv,ck,e);
if(e){if(ce.ifModified){cz=ck.getResponseHeader("Last-Modified");
if(cz){bI.lastModified[cb]=cz
}cz=ck.getResponseHeader("etag");
if(cz){bI.etag[cb]=cz
}}if(cw===204||ce.type==="HEAD"){ct="nocontent"
}else{if(cw===304){ct="notmodified"
}else{ct=cv.state;
cA=cv.data;
cy=cv.error;
e=!cy
}}}else{cy=ct;
if(cw||!ct){ct="error";
if(cw<0){cw=0
}}}ck.status=cw;
ck.statusText=(i||ct)+"";
if(e){cr.resolveWith(cs,[cA,ct,ck])
}else{cr.rejectWith(cs,[ck,ct,cy])
}ck.statusCode(cc);
cc=undefined;
if(b6){ch.trigger(e?"ajaxSuccess":"ajaxError",[ck,ce,e?cA:cy])
}co.fireWith(cs,[ck,ct]);
if(b6){ch.trigger("ajaxComplete",[ck,ce]);
if(!(--bI.active)){bI.event.trigger("ajaxStop")
}}}return ck
},getJSON:function(e,i,b6){return bI.get(e,i,b6,"json")
},getScript:function(e,i){return bI.get(e,undefined,i,"script")
}});
bI.each(["get","post"],function(e,b6){bI[b6]=function(i,b8,b9,b7){if(bI.isFunction(b8)){b7=b7||b9;
b9=b8;
b8=undefined
}return bI.ajax({url:i,type:b6,dataType:b7,data:b8,success:b9})
}
});
bI.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,b6){bI.fn[b6]=function(i){return this.on(b6,i)
}
});
bI._evalUrl=function(e){return bI.ajax({url:e,type:"GET",dataType:"script",async:false,global:false,"throws":true})
};
bI.fn.extend({wrapAll:function(e){if(bI.isFunction(e)){return this.each(function(b6){bI(this).wrapAll(e.call(this,b6))
})
}if(this[0]){var i=bI(e,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){i.insertBefore(this[0])
}i.map(function(){var b6=this;
while(b6.firstChild&&b6.firstChild.nodeType===1){b6=b6.firstChild
}return b6
}).append(this)
}return this
},wrapInner:function(e){if(bI.isFunction(e)){return this.each(function(b6){bI(this).wrapInner(e.call(this,b6))
})
}return this.each(function(){var i=bI(this),b6=i.contents();
if(b6.length){b6.wrapAll(e)
}else{i.append(e)
}})
},wrap:function(e){var i=bI.isFunction(e);
return this.each(function(b6){bI(this).wrapAll(i?e.call(this,b6):e)
})
},unwrap:function(){return this.parent().each(function(){if(!bI.nodeName(this,"body")){bI(this).replaceWith(this.childNodes)
}}).end()
}});
bI.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||(!C.reliableHiddenOffsets()&&((e.style&&e.style.display)||bI.css(e,"display"))==="none")
};
bI.expr.filters.visible=function(e){return !bI.expr.filters.hidden(e)
};
var bw=/%20/g,aS=/\[\]$/,X=/\r?\n/g,b=/^(?:submit|button|image|reset|file)$/i,au=/^(?:input|select|textarea|keygen)/i;
function j(b6,b8,i,b7){var e;
if(bI.isArray(b8)){bI.each(b8,function(ca,b9){if(i||aS.test(b6)){b7(b6,b9)
}else{j(b6+"["+(typeof b9==="object"?ca:"")+"]",b9,i,b7)
}})
}else{if(!i&&bI.type(b8)==="object"){for(e in b8){j(b6+"["+e+"]",b8[e],i,b7)
}}else{b7(b6,b8)
}}}bI.param=function(e,b6){var b7,i=[],b8=function(b9,ca){ca=bI.isFunction(ca)?ca():(ca==null?"":ca);
i[i.length]=encodeURIComponent(b9)+"="+encodeURIComponent(ca)
};
if(b6===undefined){b6=bI.ajaxSettings&&bI.ajaxSettings.traditional
}if(bI.isArray(e)||(e.jquery&&!bI.isPlainObject(e))){bI.each(e,function(){b8(this.name,this.value)
})
}else{for(b7 in e){j(b7,e[b7],b6,b8)
}}return i.join("&").replace(bw,"+")
};
bI.fn.extend({serialize:function(){return bI.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var e=bI.prop(this,"elements");
return e?bI.makeArray(e):this
}).filter(function(){var e=this.type;
return this.name&&!bI(this).is(":disabled")&&au.test(this.nodeName)&&!b.test(e)&&(this.checked||!aM.test(e))
}).map(function(e,b6){var b7=bI(this).val();
return b7==null?null:bI.isArray(b7)?bI.map(b7,function(i){return{name:b6.name,value:i.replace(X,"\r\n")}
}):{name:b6.name,value:b7.replace(X,"\r\n")}
}).get()
}});
bI.ajaxSettings.xhr=a5.ActiveXObject!==undefined?function(){return !this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&bE()||bg()
}:bE;
var aA=0,aj={},ay=bI.ajaxSettings.xhr();
if(a5.ActiveXObject){bI(a5).on("unload",function(){for(var e in aj){aj[e](undefined,true)
}})
}C.cors=!!ay&&("withCredentials" in ay);
ay=C.ajax=!!ay;
if(ay){bI.ajaxTransport(function(e){if(!e.crossDomain||C.cors){var i;
return{send:function(b9,b6){var b7,b8=e.xhr(),ca=++aA;
b8.open(e.type,e.url,e.async,e.username,e.password);
if(e.xhrFields){for(b7 in e.xhrFields){b8[b7]=e.xhrFields[b7]
}}if(e.mimeType&&b8.overrideMimeType){b8.overrideMimeType(e.mimeType)
}if(!e.crossDomain&&!b9["X-Requested-With"]){b9["X-Requested-With"]="XMLHttpRequest"
}for(b7 in b9){if(b9[b7]!==undefined){b8.setRequestHeader(b7,b9[b7]+"")
}}b8.send((e.hasContent&&e.data)||null);
i=function(cd,cc){var cb,cg,ce;
if(i&&(cc||b8.readyState===4)){delete aj[ca];
i=undefined;
b8.onreadystatechange=bI.noop;
if(cc){if(b8.readyState!==4){b8.abort()
}}else{ce={};
cb=b8.status;
if(typeof b8.responseText==="string"){ce.text=b8.responseText
}try{cg=b8.statusText
}catch(cf){cg=""
}if(!cb&&e.isLocal&&!e.crossDomain){cb=ce.text?200:404
}else{if(cb===1223){cb=204
}}}}if(ce){b6(cb,cg,ce,b8.getAllResponseHeaders())
}};
if(!e.async){i()
}else{if(b8.readyState===4){setTimeout(i)
}else{b8.onreadystatechange=aj[ca]=i
}}},abort:function(){if(i){i(undefined,true)
}}}
}})
}function bE(){try{return new a5.XMLHttpRequest()
}catch(i){}}function bg(){try{return new a5.ActiveXObject("Microsoft.XMLHTTP")
}catch(i){}}bI.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){bI.globalEval(e);
return e
}}});
bI.ajaxPrefilter("script",function(e){if(e.cache===undefined){e.cache=false
}if(e.crossDomain){e.type="GET";
e.global=false
}});
bI.ajaxTransport("script",function(b6){if(b6.crossDomain){var e,i=n.head||bI("head")[0]||n.documentElement;
return{send:function(b7,b8){e=n.createElement("script");
e.async=true;
if(b6.scriptCharset){e.charset=b6.scriptCharset
}e.src=b6.url;
e.onload=e.onreadystatechange=function(ca,b9){if(b9||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;
if(e.parentNode){e.parentNode.removeChild(e)
}e=null;
if(!b9){b8(200,"success")
}}};
i.insertBefore(e,i.firstChild)
},abort:function(){if(e){e.onload(undefined,true)
}}}
}});
var bs=[],a8=/(=)\?(?=&|$)|\?\?/;
bI.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=bs.pop()||(bI.expando+"_"+(bp++));
this[e]=true;
return e
}});
bI.ajaxPrefilter("json jsonp",function(b7,e,b8){var ca,i,b6,b9=b7.jsonp!==false&&(a8.test(b7.url)?"url":typeof b7.data==="string"&&!(b7.contentType||"").indexOf("application/x-www-form-urlencoded")&&a8.test(b7.data)&&"data");
if(b9||b7.dataTypes[0]==="jsonp"){ca=b7.jsonpCallback=bI.isFunction(b7.jsonpCallback)?b7.jsonpCallback():b7.jsonpCallback;
if(b9){b7[b9]=b7[b9].replace(a8,"$1"+ca)
}else{if(b7.jsonp!==false){b7.url+=(bQ.test(b7.url)?"&":"?")+b7.jsonp+"="+ca
}}b7.converters["script json"]=function(){if(!b6){bI.error(ca+" was not called")
}return b6[0]
};
b7.dataTypes[0]="json";
i=a5[ca];
a5[ca]=function(){b6=arguments
};
b8.always(function(){a5[ca]=i;
if(b7[ca]){b7.jsonpCallback=e.jsonpCallback;
bs.push(ca)
}if(b6&&bI.isFunction(i)){i(b6[0])
}b6=i=undefined
});
return"script"
}});
bI.parseHTML=function(b8,b6,b7){if(!b8||typeof b8!=="string"){return null
}if(typeof b6==="boolean"){b7=b6;
b6=false
}b6=b6||n;
var i=a.exec(b8),e=!b7&&[];
if(i){return[b6.createElement(i[1])]
}i=bI.buildFragment([b8],b6,e);
if(e&&e.length){bI(e).remove()
}return bI.merge([],i.childNodes)
};
var b1=bI.fn.load;
bI.fn.load=function(b7,ca,cb){if(typeof b7!=="string"&&b1){return b1.apply(this,arguments)
}var e,b6,b8,i=this,b9=b7.indexOf(" ");
if(b9>=0){e=bI.trim(b7.slice(b9,b7.length));
b7=b7.slice(0,b9)
}if(bI.isFunction(ca)){cb=ca;
ca=undefined
}else{if(ca&&typeof ca==="object"){b8="POST"
}}if(i.length>0){bI.ajax({url:b7,type:b8,dataType:"html",data:ca}).done(function(cc){b6=arguments;
i.html(e?bI("<div>").append(bI.parseHTML(cc)).find(e):cc)
}).complete(cb&&function(cd,cc){i.each(cb,b6||[cd.responseText,cc,cd])
})
}return this
};
bI.expr.filters.animated=function(e){return bI.grep(bI.timers,function(i){return e===i.elem
}).length
};
var bX=a5.document.documentElement;
function br(e){return bI.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false
}bI.offset={setOffset:function(b7,ch,cb){var cd,ca,e,b8,b6,cf,cg,cc=bI.css(b7,"position"),b9=bI(b7),ce={};
if(cc==="static"){b7.style.position="relative"
}b6=b9.offset();
e=bI.css(b7,"top");
cf=bI.css(b7,"left");
cg=(cc==="absolute"||cc==="fixed")&&bI.inArray("auto",[e,cf])>-1;
if(cg){cd=b9.position();
b8=cd.top;
ca=cd.left
}else{b8=parseFloat(e)||0;
ca=parseFloat(cf)||0
}if(bI.isFunction(ch)){ch=ch.call(b7,cb,b6)
}if(ch.top!=null){ce.top=(ch.top-b6.top)+b8
}if(ch.left!=null){ce.left=(ch.left-b6.left)+ca
}if("using" in ch){ch.using.call(b7,ce)
}else{b9.css(ce)
}}};
bI.fn.extend({offset:function(i){if(arguments.length){return i===undefined?this:this.each(function(ca){bI.offset.setOffset(this,i,ca)
})
}var e,b9,b7={top:0,left:0},b6=this[0],b8=b6&&b6.ownerDocument;
if(!b8){return
}e=b8.documentElement;
if(!bI.contains(e,b6)){return b7
}if(typeof b6.getBoundingClientRect!==aC){b7=b6.getBoundingClientRect()
}b9=br(b8);
return{top:b7.top+(b9.pageYOffset||e.scrollTop)-(e.clientTop||0),left:b7.left+(b9.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}
},position:function(){if(!this[0]){return
}var b6,b7,e={top:0,left:0},i=this[0];
if(bI.css(i,"position")==="fixed"){b7=i.getBoundingClientRect()
}else{b6=this.offsetParent();
b7=this.offset();
if(!bI.nodeName(b6[0],"html")){e=b6.offset()
}e.top+=bI.css(b6[0],"borderTopWidth",true);
e.left+=bI.css(b6[0],"borderLeftWidth",true)
}return{top:b7.top-e.top-bI.css(i,"marginTop",true),left:b7.left-e.left-bI.css(i,"marginLeft",true)}
},offsetParent:function(){return this.map(function(){var e=this.offsetParent||bX;
while(e&&(!bI.nodeName(e,"html")&&bI.css(e,"position")==="static")){e=e.offsetParent
}return e||bX
})
}});
bI.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b6,i){var e=/Y/.test(i);
bI.fn[b6]=function(b7){return aB(this,function(b8,cb,ca){var b9=br(b8);
if(ca===undefined){return b9?(i in b9)?b9[i]:b9.document.documentElement[cb]:b8[cb]
}if(b9){b9.scrollTo(!e?ca:bI(b9).scrollLeft(),e?ca:bI(b9).scrollTop())
}else{b8[cb]=ca
}},b6,b7,arguments.length,null)
}
});
bI.each(["top","left"],function(e,b6){bI.cssHooks[b6]=a7(C.pixelPosition,function(b7,i){if(i){i=F(b7,b6);
return Y.test(i)?bI(b7).position()[b6]+"px":i
}})
});
bI.each({Height:"height",Width:"width"},function(e,i){bI.each({padding:"inner"+e,content:i,"":"outer"+e},function(b6,b7){bI.fn[b7]=function(cb,ca){var b9=arguments.length&&(b6||typeof cb!=="boolean"),b8=b6||(cb===true||ca===true?"margin":"border");
return aB(this,function(cd,cc,ce){var cf;
if(bI.isWindow(cd)){return cd.document.documentElement["client"+e]
}if(cd.nodeType===9){cf=cd.documentElement;
return Math.max(cd.body["scroll"+e],cf["scroll"+e],cd.body["offset"+e],cf["offset"+e],cf["client"+e])
}return ce===undefined?bI.css(cd,cc,b8):bI.style(cd,cc,ce,b8)
},i,b9?cb:undefined,b9,null)
}
})
});
bI.fn.size=function(){return this.length
};
bI.fn.andSelf=bI.fn.addBack;
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return bI
})
}var bk=a5.jQuery,H=a5.$;
bI.noConflict=function(e){if(a5.$===bI){a5.$=H
}if(e&&a5.jQuery===bI){a5.jQuery=bk
}return bI
};
if(typeof av===aC){a5.jQuery=a5.$=bI
}return bI
}));
/*!
 * jQuery Validation Plugin v1.13.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2014 JÃ¶rn Zaefferer
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}}(function(d){d.extend(d.fn,{validate:function(e){if(!this.length){if(e&&e.debug&&window.console){console.warn("Nothing selected, can't validate, returning nothing.")
}return
}var f=d.data(this[0],"validator");
if(f){return f
}this.attr("novalidate","novalidate");
f=new d.validator(e,this[0]);
d.data(this[0],"validator",f);
if(f.settings.onsubmit){this.validateDelegate(":submit","click",function(g){if(f.settings.submitHandler){f.submitButton=g.target
}if(d(g.target).hasClass("cancel")){f.cancelSubmit=true
}if(d(g.target).attr("formnovalidate")!==undefined){f.cancelSubmit=true
}});
this.submit(function(g){if(f.settings.debug){g.preventDefault()
}function h(){var i;
if(f.settings.submitHandler){if(f.submitButton){i=d("<input type='hidden'/>").attr("name",f.submitButton.name).val(d(f.submitButton).val()).appendTo(f.currentForm)
}f.settings.submitHandler.call(f,f.currentForm,g);
if(f.submitButton){i.remove()
}return false
}return true
}if(f.cancelSubmit){f.cancelSubmit=false;
return h()
}if(f.form()){if(f.pendingRequest){f.formSubmitted=true;
return false
}return h()
}else{f.focusInvalid();
return false
}})
}return f
},valid:function(){var f,e;
if(d(this[0]).is("form")){f=this.validate().form()
}else{f=true;
e=d(this[0].form).validate();
this.each(function(){f=e.element(this)&&f
})
}return f
},removeAttrs:function(g){var e={},f=this;
d.each(g.split(/\s/),function(h,i){e[i]=f.attr(i);
f.removeAttr(i)
});
return e
},rules:function(h,e){var j=this[0],g,l,m,i,f,k;
if(h){g=d.data(j.form,"validator").settings;
l=g.rules;
m=d.validator.staticRules(j);
switch(h){case"add":d.extend(m,d.validator.normalizeRule(e));
delete m.messages;
l[j.name]=m;
if(e.messages){g.messages[j.name]=d.extend(g.messages[j.name],e.messages)
}break;
case"remove":if(!e){delete l[j.name];
return m
}k={};
d.each(e.split(/\s/),function(n,o){k[o]=m[o];
delete m[o];
if(o==="required"){d(j).removeAttr("aria-required")
}});
return k
}}i=d.validator.normalizeRules(d.extend({},d.validator.classRules(j),d.validator.attributeRules(j),d.validator.dataRules(j),d.validator.staticRules(j)),j);
if(i.required){f=i.required;
delete i.required;
i=d.extend({required:f},i);
d(j).attr("aria-required","true")
}if(i.remote){f=i.remote;
delete i.remote;
i=d.extend(i,{remote:f})
}return i
}});
d.extend(d.expr[":"],{blank:function(e){return !d.trim(""+d(e).val())
},filled:function(e){return !!d.trim(""+d(e).val())
},unchecked:function(e){return !d(e).prop("checked")
}});
d.validator=function(e,f){this.settings=d.extend(true,{},d.validator.defaults,e);
this.currentForm=f;
this.init()
};
d.validator.format=function(e,f){if(arguments.length===1){return function(){var g=d.makeArray(arguments);
g.unshift(e);
return d.validator.format.apply(this,g)
}
}if(arguments.length>2&&f.constructor!==Array){f=d.makeArray(arguments).slice(1)
}if(f.constructor!==Array){f=[f]
}d.each(f,function(g,h){e=e.replace(new RegExp("\\{"+g+"\\}","g"),function(){return h
})
});
return e
};
d.extend(d.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:d([]),errorLabelContainer:d([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(e){this.lastActive=e;
if(this.settings.focusCleanup&&!this.blockFocusCleanup){if(this.settings.unhighlight){this.settings.unhighlight.call(this,e,this.settings.errorClass,this.settings.validClass)
}this.hideThese(this.errorsFor(e))
}},onfocusout:function(e){if(!this.checkable(e)&&(e.name in this.submitted||!this.optional(e))){this.element(e)
}},onkeyup:function(e,f){if(f.which===9&&this.elementValue(e)===""){return
}else{if(e.name in this.submitted||e===this.lastElement){this.element(e)
}}},onclick:function(e){if(e.name in this.submitted){this.element(e)
}else{if(e.parentNode.name in this.submitted){this.element(e.parentNode)
}}},highlight:function(g,e,f){if(g.type==="radio"){this.findByName(g.name).addClass(e).removeClass(f)
}else{d(g).addClass(e).removeClass(f)
}},unhighlight:function(g,e,f){if(g.type==="radio"){this.findByName(g.name).removeClass(e).addClass(f)
}else{d(g).removeClass(e).addClass(f)
}}},setDefaults:function(e){d.extend(d.validator.defaults,e)
},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:d.validator.format("Please enter no more than {0} characters."),minlength:d.validator.format("Please enter at least {0} characters."),rangelength:d.validator.format("Please enter a value between {0} and {1} characters long."),range:d.validator.format("Please enter a value between {0} and {1}."),max:d.validator.format("Please enter a value less than or equal to {0}."),min:d.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=d(this.settings.errorLabelContainer);
this.errorContext=this.labelContainer.length&&this.labelContainer||d(this.currentForm);
this.containers=d(this.settings.errorContainer).add(this.settings.errorLabelContainer);
this.submitted={};
this.valueCache={};
this.pendingRequest=0;
this.pending={};
this.invalid={};
this.reset();
var e=(this.groups={}),g;
d.each(this.settings.groups,function(h,i){if(typeof i==="string"){i=i.split(/\s/)
}d.each(i,function(k,j){e[j]=h
})
});
g=this.settings.rules;
d.each(g,function(h,i){g[h]=d.validator.normalizeRule(i)
});
function f(k){var i=d.data(this[0].form,"validator"),h="on"+k.type.replace(/^validate/,""),j=i.settings;
if(j[h]&&!this.is(j.ignore)){j[h].call(i,this[0],k)
}}d(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",f).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",f);
if(this.settings.invalidHandler){d(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)
}d(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")
},form:function(){this.checkForm();
d.extend(this.submitted,this.errorMap);
this.invalid=d.extend({},this.errorMap);
if(!this.valid()){d(this.currentForm).triggerHandler("invalid-form",[this])
}this.showErrors();
return this.valid()
},checkForm:function(){this.prepareForm();
for(var e=0,f=(this.currentElements=this.elements());
f[e];
e++){this.check(f[e])
}return this.valid()
},element:function(g){var h=this.clean(g),f=this.validationTargetFor(h),e=true;
this.lastElement=f;
if(f===undefined){delete this.invalid[h.name]
}else{this.prepareElement(f);
this.currentElements=d(f);
e=this.check(f)!==false;
if(e){delete this.invalid[f.name]
}else{this.invalid[f.name]=true
}}d(g).attr("aria-invalid",!e);
if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)
}this.showErrors();
return e
},showErrors:function(f){if(f){d.extend(this.errorMap,f);
this.errorList=[];
for(var e in f){this.errorList.push({message:f[e],element:this.findByName(e)[0]})
}this.successList=d.grep(this.successList,function(g){return !(g.name in f)
})
}if(this.settings.showErrors){this.settings.showErrors.call(this,this.errorMap,this.errorList)
}else{this.defaultShowErrors()
}},resetForm:function(){if(d.fn.resetForm){d(this.currentForm).resetForm()
}this.submitted={};
this.lastElement=null;
this.prepareForm();
this.hideErrors();
this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
},numberOfInvalids:function(){return this.objectLength(this.invalid)
},objectLength:function(g){var f=0,e;
for(e in g){f++
}return f
},hideErrors:function(){this.hideThese(this.toHide)
},hideThese:function(e){e.not(this.containers).text("");
this.addWrapper(e).hide()
},valid:function(){return this.size()===0
},size:function(){return this.errorList.length
},focusInvalid:function(){if(this.settings.focusInvalid){try{d(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")
}catch(f){}}},findLastActive:function(){var e=this.lastActive;
return e&&d.grep(this.errorList,function(f){return f.element.name===e.name
}).length===1&&e
},elements:function(){var f=this,e={};
return d(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){if(!this.name&&f.settings.debug&&window.console){console.error("%o has no name assigned",this)
}if(this.name in e||!f.objectLength(d(this).rules())){return false
}e[this.name]=true;
return true
})
},clean:function(e){return d(e)[0]
},errors:function(){var e=this.settings.errorClass.split(" ").join(".");
return d(this.settings.errorElement+"."+e,this.errorContext)
},reset:function(){this.successList=[];
this.errorList=[];
this.errorMap={};
this.toShow=d([]);
this.toHide=d([]);
this.currentElements=d([])
},prepareForm:function(){this.reset();
this.toHide=this.errors().add(this.containers)
},prepareElement:function(e){this.reset();
this.toHide=this.errorsFor(e)
},elementValue:function(f){var h,e=d(f),g=f.type;
if(g==="radio"||g==="checkbox"){return d("input[name='"+f.name+"']:checked").val()
}else{if(g==="number"&&typeof f.validity!=="undefined"){return f.validity.badInput?false:e.val()
}}h=e.val();
if(typeof h==="string"){return h.replace(/\r/g,"")
}return h
},check:function(h){h=this.validationTargetFor(this.clean(h));
var l=d(h).rules(),j=d.map(l,function(o,e){return e
}).length,m=false,g=this.elementValue(h),n,f,k;
for(f in l){k={method:f,parameters:l[f]};
try{n=d.validator.methods[f].call(this,g,h,k.parameters);
if(n==="dependency-mismatch"&&j===1){m=true;
continue
}m=false;
if(n==="pending"){this.toHide=this.toHide.not(this.errorsFor(h));
return
}if(!n){this.formatAndAdd(h,k);
return false
}}catch(i){if(this.settings.debug&&window.console){console.log("Exception occurred when checking element "+h.id+", check the '"+k.method+"' method.",i)
}throw i
}}if(m){return
}if(this.objectLength(l)){this.successList.push(h)
}return true
},customDataMessage:function(e,f){return d(e).data("msg"+f.charAt(0).toUpperCase()+f.substring(1).toLowerCase())||d(e).data("msg")
},customMessage:function(f,g){var e=this.settings.messages[f];
return e&&(e.constructor===String?e:e[g])
},findDefined:function(){for(var e=0;
e<arguments.length;
e++){if(arguments[e]!==undefined){return arguments[e]
}}return undefined
},defaultMessage:function(e,f){return this.findDefined(this.customMessage(e.name,f),this.customDataMessage(e,f),!this.settings.ignoreTitle&&e.title||undefined,d.validator.messages[f],"<strong>Warning: No message defined for "+e.name+"</strong>")
},formatAndAdd:function(f,h){var g=this.defaultMessage(f,h.method),e=/\$?\{(\d+)\}/g;
if(typeof g==="function"){g=g.call(this,h.parameters,f)
}else{if(e.test(g)){g=d.validator.format(g.replace(e,"{$1}"),h.parameters)
}}this.errorList.push({message:g,element:f,method:h.method});
this.errorMap[f.name]=g;
this.submitted[f.name]=g
},addWrapper:function(e){if(this.settings.wrapper){e=e.add(e.parent(this.settings.wrapper))
}return e
},defaultShowErrors:function(){var f,g,e;
for(f=0;
this.errorList[f];
f++){e=this.errorList[f];
if(this.settings.highlight){this.settings.highlight.call(this,e.element,this.settings.errorClass,this.settings.validClass)
}this.showLabel(e.element,e.message)
}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)
}if(this.settings.success){for(f=0;
this.successList[f];
f++){this.showLabel(this.successList[f])
}}if(this.settings.unhighlight){for(f=0,g=this.validElements();
g[f];
f++){this.settings.unhighlight.call(this,g[f],this.settings.errorClass,this.settings.validClass)
}}this.toHide=this.toHide.not(this.toShow);
this.hideErrors();
this.addWrapper(this.toShow).show()
},validElements:function(){return this.currentElements.not(this.invalidElements())
},invalidElements:function(){return d(this.errorList).map(function(){return this.element
})
},showLabel:function(i,j){var f,l,h,g=this.errorsFor(i),e=this.idOrName(i),k=d(i).attr("aria-describedby");
if(g.length){g.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
g.html(j)
}else{g=d("<"+this.settings.errorElement+">").attr("id",e+"-error").addClass(this.settings.errorClass).html(j||"");
f=g;
if(this.settings.wrapper){f=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()
}if(this.labelContainer.length){this.labelContainer.append(f)
}else{if(this.settings.errorPlacement){this.settings.errorPlacement(f,d(i))
}else{f.insertAfter(i)
}}if(g.is("label")){g.attr("for",e)
}else{if(g.parents("label[for='"+e+"']").length===0){h=g.attr("id");
if(!k){k=h
}else{if(!k.match(new RegExp("\b"+h+"\b"))){k+=" "+h
}}d(i).attr("aria-describedby",k);
l=this.groups[i.name];
if(l){d.each(this.groups,function(n,m){if(m===l){d("[name='"+n+"']",this.currentForm).attr("aria-describedby",g.attr("id"))
}})
}}}}if(!j&&this.settings.success){g.text("");
if(typeof this.settings.success==="string"){g.addClass(this.settings.success)
}else{this.settings.success(g,i)
}}this.toShow=this.toShow.add(g)
},errorsFor:function(g){var f=this.idOrName(g),h=d(g).attr("aria-describedby"),e="label[for='"+f+"'], label[for='"+f+"'] *";
if(h){e=e+", #"+h.replace(/\s+/g,", #")
}return this.errors().filter(e)
},idOrName:function(e){return this.groups[e.name]||(this.checkable(e)?e.name:e.id||e.name)
},validationTargetFor:function(e){if(this.checkable(e)){e=this.findByName(e.name).not(this.settings.ignore)[0]
}return e
},checkable:function(e){return(/radio|checkbox/i).test(e.type)
},findByName:function(e){return d(this.currentForm).find("[name='"+e+"']")
},getLength:function(f,e){switch(e.nodeName.toLowerCase()){case"select":return d("option:selected",e).length;
case"input":if(this.checkable(e)){return this.findByName(e.name).filter(":checked").length
}}return f.length
},depend:function(f,e){return this.dependTypes[typeof f]?this.dependTypes[typeof f](f,e):true
},dependTypes:{"boolean":function(e){return e
},string:function(f,e){return !!d(f,e.form).length
},"function":function(f,e){return f(e)
}},optional:function(e){var f=this.elementValue(e);
return !d.validator.methods.required.call(this,f,e)&&"dependency-mismatch"
},startRequest:function(e){if(!this.pending[e.name]){this.pendingRequest++;
this.pending[e.name]=true
}},stopRequest:function(e,f){this.pendingRequest--;
if(this.pendingRequest<0){this.pendingRequest=0
}delete this.pending[e.name];
if(f&&this.pendingRequest===0&&this.formSubmitted&&this.form()){d(this.currentForm).submit();
this.formSubmitted=false
}else{if(!f&&this.pendingRequest===0&&this.formSubmitted){d(this.currentForm).triggerHandler("invalid-form",[this]);
this.formSubmitted=false
}}},previousValue:function(e){return d.data(e,"previousValue")||d.data(e,"previousValue",{old:null,valid:true,message:this.defaultMessage(e,"remote")})
}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},number:{number:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(e,f){if(e.constructor===String){this.classRuleSettings[e]=f
}else{d.extend(this.classRuleSettings,e)
}},classRules:function(f){var g={},e=d(f).attr("class");
if(e){d.each(e.split(" "),function(){if(this in d.validator.classRuleSettings){d.extend(g,d.validator.classRuleSettings[this])
}})
}return g
},attributeRules:function(f){var i={},e=d(f),g=f.getAttribute("type"),j,h;
for(j in d.validator.methods){if(j==="required"){h=f.getAttribute(j);
if(h===""){h=true
}h=!!h
}else{h=e.attr(j)
}if(/min|max/.test(j)&&(g===null||/number|range|text/.test(g))){h=Number(h)
}if(h||h===0){i[j]=h
}else{if(g===j&&g!=="range"){i[j]=true
}}}if(i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)){delete i.maxlength
}return i
},dataRules:function(f){var i,g,h={},e=d(f);
for(i in d.validator.methods){g=e.data("rule"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase());
if(g!==undefined){h[i]=g
}}return h
},staticRules:function(f){var g={},e=d.data(f.form,"validator");
if(e.settings.rules){g=d.validator.normalizeRule(e.settings.rules[f.name])||{}
}return g
},normalizeRules:function(f,e){d.each(f,function(i,h){if(h===false){delete f[i];
return
}if(h.param||h.depends){var g=true;
switch(typeof h.depends){case"string":g=!!d(h.depends,e.form).length;
break;
case"function":g=h.depends.call(e,e);
break
}if(g){f[i]=h.param!==undefined?h.param:true
}else{delete f[i]
}}});
d.each(f,function(g,h){f[g]=d.isFunction(h)?h(e):h
});
d.each(["minlength","maxlength"],function(){if(f[this]){f[this]=Number(f[this])
}});
d.each(["rangelength","range"],function(){var g;
if(f[this]){if(d.isArray(f[this])){f[this]=[Number(f[this][0]),Number(f[this][1])]
}else{if(typeof f[this]==="string"){g=f[this].replace(/[\[\]]/g,"").split(/[\s,]+/);
f[this]=[Number(g[0]),Number(g[1])]
}}}});
if(d.validator.autoCreateRanges){if(f.min&&f.max){f.range=[f.min,f.max];
delete f.min;
delete f.max
}if(f.minlength&&f.maxlength){f.rangelength=[f.minlength,f.maxlength];
delete f.minlength;
delete f.maxlength
}}return f
},normalizeRule:function(f){if(typeof f==="string"){var e={};
d.each(f.split(/\s/),function(){e[this]=true
});
f=e
}return f
},addMethod:function(e,g,f){d.validator.methods[e]=g;
d.validator.messages[e]=f!==undefined?f:d.validator.messages[e];
if(g.length<3){d.validator.addClassRules(e,d.validator.normalizeRule(e))
}},methods:{required:function(f,e,h){if(!this.depend(h,e)){return"dependency-mismatch"
}if(e.nodeName.toLowerCase()==="select"){var g=d(e).val();
return g&&g.length>0
}if(this.checkable(e)){return this.getLength(f,e)>0
}return d.trim(f).length>0
},email:function(f,e){return this.optional(e)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(f)
},url:function(f,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(f)
},date:function(f,e){return this.optional(e)||!/Invalid|NaN/.test(new Date(f).toString())
},dateISO:function(f,e){return this.optional(e)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(f)
},number:function(f,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(f)
},digits:function(f,e){return this.optional(e)||/^\d+$/.test(f)
},creditcard:function(i,f){if(this.optional(f)){return"dependency-mismatch"
}if(/[^0-9 \-]+/.test(i)){return false
}var j=0,h=0,e=false,k,g;
i=i.replace(/\D/g,"");
if(i.length<13||i.length>19){return false
}for(k=i.length-1;
k>=0;
k--){g=i.charAt(k);
h=parseInt(g,10);
if(e){if((h*=2)>9){h-=9
}}j+=h;
e=!e
}return(j%10)===0
},minlength:function(g,e,h){var f=d.isArray(g)?g.length:this.getLength(d.trim(g),e);
return this.optional(e)||f>=h
},maxlength:function(g,e,h){var f=d.isArray(g)?g.length:this.getLength(d.trim(g),e);
return this.optional(e)||f<=h
},rangelength:function(g,e,h){var f=d.isArray(g)?g.length:this.getLength(d.trim(g),e);
return this.optional(e)||(f>=h[0]&&f<=h[1])
},min:function(f,e,g){return this.optional(e)||f>=g
},max:function(f,e,g){return this.optional(e)||f<=g
},range:function(f,e,g){return this.optional(e)||(f>=g[0]&&f<=g[1])
},equalTo:function(f,e,h){var g=d(h);
if(this.settings.onfocusout){g.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){d(e).valid()
})
}return f===g.val()
},remote:function(i,f,j){if(this.optional(f)){return"dependency-mismatch"
}var g=this.previousValue(f),e,h;
if(!this.settings.messages[f.name]){this.settings.messages[f.name]={}
}g.originalMessage=this.settings.messages[f.name].remote;
this.settings.messages[f.name].remote=g.message;
j=typeof j==="string"&&{url:j}||j;
if(g.old===i){return g.valid
}g.old=i;
e=this;
this.startRequest(f);
h={};
h[f.name]=i;
d.ajax(d.extend(true,{url:j,mode:"abort",port:"validate"+f.name,dataType:"json",data:h,context:e.currentForm,success:function(l){var n=l===true||l==="true",o,m,k;
e.settings.messages[f.name].remote=g.originalMessage;
if(n){k=e.formSubmitted;
e.prepareElement(f);
e.formSubmitted=k;
e.successList.push(f);
delete e.invalid[f.name];
e.showErrors()
}else{o={};
m=l||e.defaultMessage(f,"remote");
o[f.name]=g.message=d.isFunction(m)?m(i):m;
e.invalid[f.name]=true;
e.showErrors(o)
}g.valid=n;
e.stopRequest(f,n)
}},j));
return"pending"
}}});
d.format=function a(){throw"$.format has been deprecated. Please use $.validator.format instead."
};
var b={},c;
if(d.ajaxPrefilter){d.ajaxPrefilter(function(g,f,h){var e=g.port;
if(g.mode==="abort"){if(b[e]){b[e].abort()
}b[e]=h
}})
}else{c=d.ajax;
d.ajax=function(f){var g=("mode" in f?f:d.ajaxSettings).mode,e=("port" in f?f:d.ajaxSettings).port;
if(g==="abort"){if(b[e]){b[e].abort()
}b[e]=c.apply(this,arguments);
return b[e]
}return c.apply(this,arguments)
}
}d.extend(d.fn,{validateDelegate:function(g,f,e){return this.bind(f,function(h){var i=d(h.target);
if(i.is(g)){return e.apply(i,arguments)
}})
}})
}));
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports==="object"){a(require("jquery"))
}else{a(jQuery)
}}}(function(f){var a=/\+/g;
function d(i){return b.raw?i:encodeURIComponent(i)
}function g(i){return b.raw?i:decodeURIComponent(i)
}function h(i){return d(b.json?JSON.stringify(i):String(i))
}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")
}try{i=decodeURIComponent(i.replace(a," "));
return b.json?JSON.parse(i):i
}catch(j){}}function e(j,i){var k=b.raw?j:c(j);
return f.isFunction(i)?i(k):k
}var b=f.cookie=function(q,p,v){if(p!==undefined&&!f.isFunction(p)){v=f.extend({},b.defaults,v);
if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();
u.setTime(+u+r*86400000)
}return(document.cookie=[d(q),"=",h(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))
}var w=q?undefined:{};
var s=document.cookie?document.cookie.split("; "):[];
for(var o=0,m=s.length;
o<m;
o++){var n=s[o].split("=");
var j=g(n.shift());
var k=n.join("=");
if(q&&q===j){w=e(k,p);
break
}if(!q&&(k=e(k))!==undefined){w[j]=k
}}return w
};
b.defaults={};
f.removeCookie=function(j,i){if(f.cookie(j)===undefined){return false
}f.cookie(j,"",f.extend({},i,{expires:-1}));
return !f.cookie(j)
}
}));
jQuery.validator.addMethod("addressFormat",function(c,a){if(c!=""){var b=new RegExp("^([a-zA-Z0-9. ]+)$");
return b.test(c)
}else{return true
}});
jQuery.validator.addMethod("cityFormat",function(c,a){if(c!=""){var b=new RegExp("^[a-zA-Z ]*$");
return b.test(c)
}else{return true
}});
jQuery.validator.addMethod("passwordFormat",function(c,a){if(c!=""){var b=new RegExp("^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.).*$");
return b.test(c)
}else{return true
}});
jQuery.validator.addMethod("passwordNotEqualTo",function(b,a,d){if(b!=""){var c=$(d);
if(this.settings.onfocusout){c.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){$(a).valid()
})
}return b!=c.val()
}else{return true
}});
jQuery.validator.addMethod("emailFormat",function(c,a){if(c!=""){var b=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return b.test(c)
}else{return true
}});
jQuery.validator.addMethod("firstNameFormat",function(c,a){if(c!=""){var b=new RegExp("^([a-zA-Z\\s]+)$");
return b.test(c)
}else{return true
}});
jQuery.validator.addMethod("lastNameFormat",function(c,a){if(c!=""){var b=new RegExp("^([a-zA-Z\\s]+)$");
return b.test(c)
}else{return true
}});
jQuery.validator.addMethod("notEqualTo",function(b,a,c){if(b!=""){return b!=$(c).val().substr(0,$(c).val().indexOf("@"))
}else{return true
}});
jQuery.validator.addMethod("emailEqualTo",function(b,a,d){if(b!=""){var c=$(d);
if(this.settings.onfocusout){c.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){$(a).valid()
})
}return b===c.val()
}else{return true
}});
jQuery.validator.addMethod("passwordEqualTo",function(b,a,d){if(b!=""){var c=$(d);
if(this.settings.onfocusout){c.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){$(a).valid()
})
}return b===c.val()
}else{return true
}});
jQuery.validator.addMethod("emailRequired",function(b,a,c){if(b==""){return $(c).val()
}else{return true
}});
jQuery.validator.addMethod("passwordRequired",function(b,a,c){if(b==""){return $(c).val()
}else{return true
}});
jQuery.validator.addMethod("securityAnswerRequired",function(b,a,c){if(b==""){return $(c).val()
}else{return true
}});
jQuery.validator.addMethod("securityquestionrequired",function(b,a,c){if(b==null){return $(c).val()
}else{return true
}});
jQuery.validator.addMethod("firstNameRequired",function(b,a,c){if(b==""){return $(c).val()
}else{return true
}});
jQuery.validator.addMethod("lastNameRequired",function(b,a,c){if(b==""){return $(c).val()
}else{return true
}});
jQuery.validator.addMethod("streetAddressRequired",function(b,a,c){if(b==""){return $(c).val()
}else{return true
}});
jQuery.validator.addMethod("cityRequired",function(b,a,c){if(b==""){return $(c).val()
}else{return true
}});
jQuery.validator.addMethod("zipcodeRequired",function(b,a,c){if(b==""){return $(c).val()
}else{return true
}});
(function(k){var i=-1,j=-1,l=function(e){var d=null,g=[];
k(e).each(function(){var h=k(this),m=h.offset().top-f(h.css("margin-top")),b=0<g.length?g[g.length-1]:null;
null===b?g.push(h):1>=Math.floor(Math.abs(d-m))?g[g.length-1]=b.add(h):g.push(h);
d=m
});
return g
},f=function(b){return parseFloat(b)||0
},c=k.fn.matchHeight=function(b){if("remove"===b){var d=this;
this.css("height","");
k.each(c._groups,function(g,e){e.elements=e.elements.not(d)
});
return this
}if(1>=this.length){return this
}b="undefined"!==typeof b?b:!0;
c._groups.push({elements:this,byRow:b});
c._apply(this,b);
return this
};
c._groups=[];
c._throttle=80;
c._maintainScroll=!1;
c._beforeUpdate=null;
c._afterUpdate=null;
c._apply=function(d,n){var p=k(d),o=[p],h=k(window).scrollTop(),b=k("html").outerHeight(!0),m=p.parents().filter(":hidden");
m.css("display","block");
n&&(p.each(function(){var g=k(this),e="inline-block"===g.css("display")?"inline-block":"block";
g.data("style-cache",g.attr("style"));
g.css({display:e,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})
}),o=l(p),p.each(function(){var e=k(this);
e.attr("style",e.data("style-cache")||"").css("height","")
}));
k.each(o,function(q,g){var s=k(g),r=0;
n&&1>=s.length||(s.each(function(){var t=k(this),e="inline-block"===t.css("display")?"inline-block":"block";
t.css({display:e,height:""});
t.outerHeight(!1)>r&&(r=t.outerHeight(!1));
t.css("display","")
}),s.each(function(){var t=k(this),e=0;
"border-box"!==t.css("box-sizing")&&(e+=f(t.css("border-top-width"))+f(t.css("border-bottom-width")),e+=f(t.css("padding-top"))+f(t.css("padding-bottom")));
t.css("height",r-e)
}))
});
m.css("display","");
c._maintainScroll&&k(window).scrollTop(h/b*k("html").outerHeight(!0));
return this
};
c._applyDataApi=function(){var b={};
k("[data-match-height], [data-mh]").each(function(){var d=k(this),e=d.attr("data-match-height")||d.attr("data-mh");
b[e]=e in b?b[e].add(d):d
});
k.each(b,function(){this.matchHeight(!0)
})
};
var a=function(b){c._beforeUpdate&&c._beforeUpdate(b,c._groups);
k.each(c._groups,function(){c._apply(this.elements,this.byRow)
});
c._afterUpdate&&c._afterUpdate(b,c._groups)
};
c._update=function(b,d){if(d&&"resize"===d.type){var e=k(window).width();
if(e===i){return
}i=e
}b?-1===j&&(j=setTimeout(function(){a(d);
j=-1
},c._throttle)):a(d)
};
k(c._applyDataApi);
k(window).bind("load",function(b){c._update(!1,b)
});
k(window).bind("resize orientationchange",function(b){c._update(!0,b)
})
})(jQuery);
(function(a){a.fn.imagesLoaded=(function(){var b=function(k,f,j){var e;
var l=false;
var i=a(k).parent();
var d=a("<img />");
var h=a(k).attr("srcset");
var c=a(k).attr("src");
var g=function(){d.off("load error",g);
clearTimeout(e);
f()
};
if(j){e=setTimeout(g,j)
}d.on("load error",g);
if(i.is("picture")){i=i.clone();
i.find("img").remove().end();
i.append(d);
l=true
}if(h){d.attr("srcset",h);
if(!l){d.appendTo(document.createElement("div"))
}l=true
}else{if(c){d.attr("src",c)
}}if(l&&!window.HTMLPictureElement){if(window.respimage){window.respimage({elements:[d[0]]})
}else{if(window.picturefill){window.picturefill({elements:[d[0]]})
}else{if(c){d.attr("src",c)
}}}}};
return function(c){var d=0;
var f=a("img",this).add(this.filter("img"));
var e=function(){d++;
if(d>=f.length){c()
}};
f.each(function(){b(this,e)
});
return this
}
})()
})(jQuery);
(function(){var w=this;
var k=w._;
var D={};
var C=Array.prototype,f=Object.prototype,r=Function.prototype;
var H=C.push,o=C.slice,y=C.concat,d=f.toString,j=f.hasOwnProperty;
var L=C.forEach,q=C.map,E=C.reduce,c=C.reduceRight,b=C.filter,B=C.every,p=C.some,n=C.indexOf,l=C.lastIndexOf,u=Array.isArray,e=Object.keys,F=r.bind;
var M=function(N){if(N instanceof M){return N
}if(!(this instanceof M)){return new M(N)
}this._wrapped=N
};
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=M
}exports._=M
}else{w._=M
}M.VERSION="1.5.2";
var I=M.each=M.forEach=function(T,P,O){if(T==null){return
}if(L&&T.forEach===L){T.forEach(P,O)
}else{if(T.length===+T.length){for(var N=0,S=T.length;
N<S;
N++){if(P.call(O,T[N],N,T)===D){return
}}}else{var R=M.keys(T);
for(var N=0,S=R.length;
N<S;
N++){if(P.call(O,T[R[N]],R[N],T)===D){return
}}}}};
M.map=M.collect=function(R,P,O){var N=[];
if(R==null){return N
}if(q&&R.map===q){return R.map(P,O)
}I(R,function(U,S,T){N.push(P.call(O,U,S,T))
});
return N
};
var g="Reduce of empty array with no initial value";
M.reduce=M.foldl=M.inject=function(S,R,N,P){var O=arguments.length>2;
if(S==null){S=[]
}if(E&&S.reduce===E){if(P){R=M.bind(R,P)
}return O?S.reduce(R,N):S.reduce(R)
}I(S,function(V,T,U){if(!O){N=V;
O=true
}else{N=R.call(P,N,V,T,U)
}});
if(!O){throw new TypeError(g)
}return N
};
M.reduceRight=M.foldr=function(U,R,N,P){var O=arguments.length>2;
if(U==null){U=[]
}if(c&&U.reduceRight===c){if(P){R=M.bind(R,P)
}return O?U.reduceRight(R,N):U.reduceRight(R)
}var T=U.length;
if(T!==+T){var S=M.keys(U);
T=S.length
}I(U,function(X,V,W){V=S?S[--T]:--T;
if(!O){N=U[V];
O=true
}else{N=R.call(P,N,U[V],V,W)
}});
if(!O){throw new TypeError(g)
}return N
};
M.find=M.detect=function(R,P,O){var N;
A(R,function(U,S,T){if(P.call(O,U,S,T)){N=U;
return true
}});
return N
};
M.filter=M.select=function(R,P,O){var N=[];
if(R==null){return N
}if(b&&R.filter===b){return R.filter(P,O)
}I(R,function(U,S,T){if(P.call(O,U,S,T)){N.push(U)
}});
return N
};
M.reject=function(P,O,N){return M.filter(P,function(T,R,S){return !O.call(N,T,R,S)
},N)
};
M.every=M.all=function(R,P,O){P||(P=M.identity);
var N=true;
if(R==null){return N
}if(B&&R.every===B){return R.every(P,O)
}I(R,function(U,S,T){if(!(N=N&&P.call(O,U,S,T))){return D
}});
return !!N
};
var A=M.some=M.any=function(R,P,O){P||(P=M.identity);
var N=false;
if(R==null){return N
}if(p&&R.some===p){return R.some(P,O)
}I(R,function(U,S,T){if(N||(N=P.call(O,U,S,T))){return D
}});
return !!N
};
M.contains=M.include=function(O,N){if(O==null){return false
}if(n&&O.indexOf===n){return O.indexOf(N)!=-1
}return A(O,function(P){return P===N
})
};
M.invoke=function(P,R){var N=o.call(arguments,2);
var O=M.isFunction(R);
return M.map(P,function(S){return(O?R:S[R]).apply(S,N)
})
};
M.pluck=function(O,N){return M.map(O,function(P){return P[N]
})
};
M.where=function(O,N,P){if(M.isEmpty(N)){return P?void 0:[]
}return M[P?"find":"filter"](O,function(S){for(var R in N){if(N[R]!==S[R]){return false
}}return true
})
};
M.findWhere=function(O,N){return M.where(O,N,true)
};
M.max=function(R,P,O){if(!P&&M.isArray(R)&&R[0]===+R[0]&&R.length<65535){return Math.max.apply(Math,R)
}if(!P&&M.isEmpty(R)){return -Infinity
}var N={computed:-Infinity,value:-Infinity};
I(R,function(V,S,U){var T=P?P.call(O,V,S,U):V;
T>N.computed&&(N={value:V,computed:T})
});
return N.value
};
M.min=function(R,P,O){if(!P&&M.isArray(R)&&R[0]===+R[0]&&R.length<65535){return Math.min.apply(Math,R)
}if(!P&&M.isEmpty(R)){return Infinity
}var N={computed:Infinity,value:Infinity};
I(R,function(V,S,U){var T=P?P.call(O,V,S,U):V;
T<N.computed&&(N={value:V,computed:T})
});
return N.value
};
M.shuffle=function(R){var P;
var O=0;
var N=[];
I(R,function(S){P=M.random(O++);
N[O-1]=N[P];
N[P]=S
});
return N
};
M.sample=function(O,P,N){if(arguments.length<2||N){return O[M.random(O.length-1)]
}return M.shuffle(O).slice(0,Math.max(0,P))
};
var a=function(N){return M.isFunction(N)?N:function(O){return O[N]
}
};
M.sortBy=function(R,P,N){var O=a(P);
return M.pluck(M.map(R,function(U,S,T){return{value:U,index:S,criteria:O.call(N,U,S,T)}
}).sort(function(V,U){var T=V.criteria;
var S=U.criteria;
if(T!==S){if(T>S||T===void 0){return 1
}if(T<S||S===void 0){return -1
}}return V.index-U.index
}),"value")
};
var t=function(N){return function(T,S,P){var O={};
var R=S==null?M.identity:a(S);
I(T,function(W,U){var V=R.call(P,W,U,T);
N(O,V,W)
});
return O
}
};
M.groupBy=t(function(N,O,P){(M.has(N,O)?N[O]:(N[O]=[])).push(P)
});
M.indexBy=t(function(N,O,P){N[O]=P
});
M.countBy=t(function(N,O){M.has(N,O)?N[O]++:N[O]=1
});
M.sortedIndex=function(V,U,R,P){R=R==null?M.identity:a(R);
var T=R.call(P,U);
var N=0,S=V.length;
while(N<S){var O=(N+S)>>>1;
R.call(P,V[O])<T?N=O+1:S=O
}return N
};
M.toArray=function(N){if(!N){return[]
}if(M.isArray(N)){return o.call(N)
}if(N.length===+N.length){return M.map(N,M.identity)
}return M.values(N)
};
M.size=function(N){if(N==null){return 0
}return(N.length===+N.length)?N.length:M.keys(N).length
};
M.first=M.head=M.take=function(P,O,N){if(P==null){return void 0
}return(O==null)||N?P[0]:o.call(P,0,O)
};
M.initial=function(P,O,N){return o.call(P,0,P.length-((O==null)||N?1:O))
};
M.last=function(P,O,N){if(P==null){return void 0
}if((O==null)||N){return P[P.length-1]
}else{return o.call(P,Math.max(P.length-O,0))
}};
M.rest=M.tail=M.drop=function(P,O,N){return o.call(P,(O==null)||N?1:O)
};
M.compact=function(N){return M.filter(N,M.identity)
};
var x=function(O,P,N){if(P&&M.every(O,M.isArray)){return y.apply(N,O)
}I(O,function(R){if(M.isArray(R)||M.isArguments(R)){P?H.apply(N,R):x(R,P,N)
}else{N.push(R)
}});
return N
};
M.flatten=function(O,N){return x(O,N,[])
};
M.without=function(N){return M.difference(N,o.call(arguments,1))
};
M.uniq=M.unique=function(U,T,S,R){if(M.isFunction(T)){R=S;
S=T;
T=false
}var O=S?M.map(U,S,R):U;
var P=[];
var N=[];
I(O,function(W,V){if(T?(!V||N[N.length-1]!==W):!M.contains(N,W)){N.push(W);
P.push(U[V])
}});
return P
};
M.union=function(){return M.uniq(M.flatten(arguments,true))
};
M.intersection=function(O){var N=o.call(arguments,1);
return M.filter(M.uniq(O),function(P){return M.every(N,function(R){return M.indexOf(R,P)>=0
})
})
};
M.difference=function(O){var N=y.apply(C,o.call(arguments,1));
return M.filter(O,function(P){return !M.contains(N,P)
})
};
M.zip=function(){var P=M.max(M.pluck(arguments,"length").concat(0));
var O=new Array(P);
for(var N=0;
N<P;
N++){O[N]=M.pluck(arguments,""+N)
}return O
};
M.object=function(S,O){if(S==null){return{}
}var N={};
for(var P=0,R=S.length;
P<R;
P++){if(O){N[S[P]]=O[P]
}else{N[S[P][0]]=S[P][1]
}}return N
};
M.indexOf=function(S,P,R){if(S==null){return -1
}var N=0,O=S.length;
if(R){if(typeof R=="number"){N=(R<0?Math.max(0,O+R):R)
}else{N=M.sortedIndex(S,P);
return S[N]===P?N:-1
}}if(n&&S.indexOf===n){return S.indexOf(P,R)
}for(;
N<O;
N++){if(S[N]===P){return N
}}return -1
};
M.lastIndexOf=function(S,P,R){if(S==null){return -1
}var N=R!=null;
if(l&&S.lastIndexOf===l){return N?S.lastIndexOf(P,R):S.lastIndexOf(P)
}var O=(N?R:S.length);
while(O--){if(S[O]===P){return O
}}return -1
};
M.range=function(T,P,S){if(arguments.length<=1){P=T||0;
T=0
}S=arguments[2]||1;
var R=Math.max(Math.ceil((P-T)/S),0);
var N=0;
var O=new Array(R);
while(N<R){O[N++]=T;
T+=S
}return O
};
var G=function(){};
M.bind=function(R,O){var N,P;
if(F&&R.bind===F){return F.apply(R,o.call(arguments,1))
}if(!M.isFunction(R)){throw new TypeError
}N=o.call(arguments,2);
return P=function(){if(!(this instanceof P)){return R.apply(O,N.concat(o.call(arguments)))
}G.prototype=R.prototype;
var T=new G;
G.prototype=null;
var S=R.apply(T,N.concat(o.call(arguments)));
if(Object(S)===S){return S
}return T
}
};
M.partial=function(O){var N=o.call(arguments,1);
return function(){return O.apply(this,N.concat(o.call(arguments)))
}
};
M.bindAll=function(O){var N=o.call(arguments,1);
if(N.length===0){throw new Error("bindAll must be passed function names")
}I(N,function(P){O[P]=M.bind(O[P],O)
});
return O
};
M.memoize=function(P,O){var N={};
O||(O=M.identity);
return function(){var R=O.apply(this,arguments);
return M.has(N,R)?N[R]:(N[R]=P.apply(this,arguments))
}
};
M.delay=function(O,P){var N=o.call(arguments,2);
return setTimeout(function(){return O.apply(null,N)
},P)
};
M.defer=function(N){return M.delay.apply(M,[N,1].concat(o.call(arguments,1)))
};
M.throttle=function(O,R,V){var N,T,W;
var U=null;
var S=0;
V||(V={});
var P=function(){S=V.leading===false?0:new Date;
U=null;
W=O.apply(N,T)
};
return function(){var X=new Date;
if(!S&&V.leading===false){S=X
}var Y=R-(X-S);
N=this;
T=arguments;
if(Y<=0){clearTimeout(U);
U=null;
S=X;
W=O.apply(N,T)
}else{if(!U&&V.trailing!==false){U=setTimeout(P,Y)
}}return W
}
};
M.debounce=function(S,V,O){var U,P,R,T,N;
return function(){R=this;
P=arguments;
T=new Date();
var X=function(){var Y=(new Date())-T;
if(Y<V){U=setTimeout(X,V-Y)
}else{U=null;
if(!O){N=S.apply(R,P)
}}};
var W=O&&!U;
if(!U){U=setTimeout(X,V)
}if(W){N=S.apply(R,P)
}return N
}
};
M.once=function(P){var N=false,O;
return function(){if(N){return O
}N=true;
O=P.apply(this,arguments);
P=null;
return O
}
};
M.wrap=function(N,O){return function(){var P=[N];
H.apply(P,arguments);
return O.apply(this,P)
}
};
M.compose=function(){var N=arguments;
return function(){var O=arguments;
for(var P=N.length-1;
P>=0;
P--){O=[N[P].apply(this,O)]
}return O[0]
}
};
M.after=function(O,N){return function(){if(--O<1){return N.apply(this,arguments)
}}
};
M.keys=e||function(P){if(P!==Object(P)){throw new TypeError("Invalid object")
}var O=[];
for(var N in P){if(M.has(P,N)){O.push(N)
}}return O
};
M.values=function(S){var R=M.keys(S);
var P=R.length;
var N=new Array(P);
for(var O=0;
O<P;
O++){N[O]=S[R[O]]
}return N
};
M.pairs=function(S){var P=M.keys(S);
var O=P.length;
var R=new Array(O);
for(var N=0;
N<O;
N++){R[N]=[P[N],S[P[N]]]
}return R
};
M.invert=function(S){var N={};
var R=M.keys(S);
for(var O=0,P=R.length;
O<P;
O++){N[S[R[O]]]=R[O]
}return N
};
M.functions=M.methods=function(P){var O=[];
for(var N in P){if(M.isFunction(P[N])){O.push(N)
}}return O.sort()
};
M.extend=function(N){I(o.call(arguments,1),function(O){if(O){for(var P in O){N[P]=O[P]
}}});
return N
};
M.pick=function(O){var P={};
var N=y.apply(C,o.call(arguments,1));
I(N,function(R){if(R in O){P[R]=O[R]
}});
return P
};
M.omit=function(P){var R={};
var O=y.apply(C,o.call(arguments,1));
for(var N in P){if(!M.contains(O,N)){R[N]=P[N]
}}return R
};
M.defaults=function(N){I(o.call(arguments,1),function(O){if(O){for(var P in O){if(N[P]===void 0){N[P]=O[P]
}}}});
return N
};
M.clone=function(N){if(!M.isObject(N)){return N
}return M.isArray(N)?N.slice():M.extend({},N)
};
M.tap=function(O,N){N(O);
return O
};
var J=function(V,U,O,P){if(V===U){return V!==0||1/V==1/U
}if(V==null||U==null){return V===U
}if(V instanceof M){V=V._wrapped
}if(U instanceof M){U=U._wrapped
}var S=d.call(V);
if(S!=d.call(U)){return false
}switch(S){case"[object String]":return V==String(U);
case"[object Number]":return V!=+V?U!=+U:(V==0?1/V==1/U:V==+U);
case"[object Date]":case"[object Boolean]":return +V==+U;
case"[object RegExp]":return V.source==U.source&&V.global==U.global&&V.multiline==U.multiline&&V.ignoreCase==U.ignoreCase
}if(typeof V!="object"||typeof U!="object"){return false
}var N=O.length;
while(N--){if(O[N]==V){return P[N]==U
}}var T=V.constructor,R=U.constructor;
if(T!==R&&!(M.isFunction(T)&&(T instanceof T)&&M.isFunction(R)&&(R instanceof R))){return false
}O.push(V);
P.push(U);
var Y=0,X=true;
if(S=="[object Array]"){Y=V.length;
X=Y==U.length;
if(X){while(Y--){if(!(X=J(V[Y],U[Y],O,P))){break
}}}}else{for(var W in V){if(M.has(V,W)){Y++;
if(!(X=M.has(U,W)&&J(V[W],U[W],O,P))){break
}}}if(X){for(W in U){if(M.has(U,W)&&!(Y--)){break
}}X=!Y
}}O.pop();
P.pop();
return X
};
M.isEqual=function(O,N){return J(O,N,[],[])
};
M.isEmpty=function(O){if(O==null){return true
}if(M.isArray(O)||M.isString(O)){return O.length===0
}for(var N in O){if(M.has(O,N)){return false
}}return true
};
M.isElement=function(N){return !!(N&&N.nodeType===1)
};
M.isArray=u||function(N){return d.call(N)=="[object Array]"
};
M.isObject=function(N){return N===Object(N)
};
I(["Arguments","Function","String","Number","Date","RegExp"],function(N){M["is"+N]=function(O){return d.call(O)=="[object "+N+"]"
}
});
if(!M.isArguments(arguments)){M.isArguments=function(N){return !!(N&&M.has(N,"callee"))
}
}if(typeof(/./)!=="function"){M.isFunction=function(N){return typeof N==="function"
}
}M.isFinite=function(N){return isFinite(N)&&!isNaN(parseFloat(N))
};
M.isNaN=function(N){return M.isNumber(N)&&N!=+N
};
M.isBoolean=function(N){return N===true||N===false||d.call(N)=="[object Boolean]"
};
M.isNull=function(N){return N===null
};
M.isUndefined=function(N){return N===void 0
};
M.has=function(O,N){return j.call(O,N)
};
M.noConflict=function(){w._=k;
return this
};
M.identity=function(N){return N
};
M.times=function(S,R,P){var N=Array(Math.max(0,S));
for(var O=0;
O<S;
O++){N[O]=R.call(P,O)
}return N
};
M.random=function(O,N){if(N==null){N=O;
O=0
}return O+Math.floor(Math.random()*(N-O+1))
};
var m={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};
m.unescape=M.invert(m.escape);
var K={escape:new RegExp("["+M.keys(m.escape).join("")+"]","g"),unescape:new RegExp("("+M.keys(m.unescape).join("|")+")","g")};
M.each(["escape","unescape"],function(N){M[N]=function(O){if(O==null){return""
}return(""+O).replace(K[N],function(P){return m[N][P]
})
}
});
M.result=function(N,P){if(N==null){return void 0
}var O=N[P];
return M.isFunction(O)?O.call(N):O
};
M.mixin=function(N){I(M.functions(N),function(O){var P=M[O]=N[O];
M.prototype[O]=function(){var R=[this._wrapped];
H.apply(R,arguments);
return s.call(this,P.apply(M,R))
}
})
};
var z=0;
M.uniqueId=function(N){var O=++z+"";
return N?N+O:O
};
M.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var v=/(.)^/;
var h={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"};
var i=/\\|'|\r|\n|\t|\u2028|\u2029/g;
M.template=function(W,R,P){var O;
P=M.defaults({},P,M.templateSettings);
var S=new RegExp([(P.escape||v).source,(P.interpolate||v).source,(P.evaluate||v).source].join("|")+"|$","g");
var T=0;
var N="__p+='";
W.replace(S,function(Y,Z,X,ab,aa){N+=W.slice(T,aa).replace(i,function(ac){return"\\"+h[ac]
});
if(Z){N+="'+\n((__t=("+Z+"))==null?'':_.escape(__t))+\n'"
}if(X){N+="'+\n((__t=("+X+"))==null?'':__t)+\n'"
}if(ab){N+="';\n"+ab+"\n__p+='"
}T=aa+Y.length;
return Y
});
N+="';\n";
if(!P.variable){N="with(obj||{}){\n"+N+"}\n"
}N="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+N+"return __p;\n";
try{O=new Function(P.variable||"obj","_",N)
}catch(U){U.source=N;
throw U
}if(R){return O(R,M)
}var V=function(X){return O.call(this,X,M)
};
V.source="function("+(P.variable||"obj")+"){\n"+N+"}";
return V
};
M.chain=function(N){return M(N).chain()
};
var s=function(N){return this._chain?M(N).chain():N
};
M.mixin(M);
I(["pop","push","reverse","shift","sort","splice","unshift"],function(N){var O=C[N];
M.prototype[N]=function(){var P=this._wrapped;
O.apply(P,arguments);
if((N=="shift"||N=="splice")&&P.length===0){delete P[0]
}return s.call(this,P)
}
});
I(["concat","join","slice"],function(N){var O=C[N];
M.prototype[N]=function(){return s.call(this,O.apply(this._wrapped,arguments))
}
});
M.extend(M.prototype,{chain:function(){this._chain=true;
return this
},value:function(){return this._wrapped
}})
}).call(this);
(function(){var v=this;
var C=v.Backbone;
var g=[];
var E=g.push;
var o=g.slice;
var u=g.splice;
var A;
if(typeof exports!=="undefined"){A=exports
}else{A=v.Backbone={}
}A.VERSION="1.1.0";
var M=v._;
if(!M&&(typeof require!=="undefined")){M=require("underscore")
}A.$=v.jQuery||v.Zepto||v.ender||v.$;
A.noConflict=function(){v.Backbone=C;
return this
};
A.emulateHTTP=false;
A.emulateJSON=false;
var K=A.Events={on:function(N,R,P){if(!y(this,"on",N,[R,P])||!R){return this
}this._events||(this._events={});
var O=this._events[N]||(this._events[N]=[]);
O.push({callback:R,context:P,ctx:P||this});
return this
},once:function(O,S,P){if(!y(this,"once",O,[S,P])||!S){return this
}var N=this;
var R=M.once(function(){N.off(O,R);
S.apply(this,arguments)
});
R._callback=S;
return this.on(O,R,P)
},off:function(N,X,O){var V,W,Y,U,T,P,S,R;
if(!this._events||!y(this,"off",N,[X,O])){return this
}if(!N&&!X&&!O){this._events={};
return this
}U=N?[N]:M.keys(this._events);
for(T=0,P=U.length;
T<P;
T++){N=U[T];
if(Y=this._events[N]){this._events[N]=V=[];
if(X||O){for(S=0,R=Y.length;
S<R;
S++){W=Y[S];
if((X&&X!==W.callback&&X!==W.callback._callback)||(O&&O!==W.context)){V.push(W)
}}}if(!V.length){delete this._events[N]
}}}return this
},trigger:function(P){if(!this._events){return this
}var O=o.call(arguments,1);
if(!y(this,"trigger",P,O)){return this
}var R=this._events[P];
var N=this._events.all;
if(R){b(R,O)
}if(N){b(N,arguments)
}return this
},stopListening:function(R,O,T){var P=this._listeningTo;
if(!P){return this
}var N=!O&&!T;
if(!T&&typeof O==="object"){T=this
}if(R){(P={})[R._listenId]=R
}for(var S in P){R=P[S];
R.off(O,T,this);
if(N||M.isEmpty(R._events)){delete this._listeningTo[S]
}}return this
}};
var x=/\s+/;
var y=function(V,T,O,S){if(!O){return true
}if(typeof O==="object"){for(var R in O){V[T].apply(V,[R,O[R]].concat(S))
}return false
}if(x.test(O)){var U=O.split(x);
for(var P=0,N=U.length;
P<N;
P++){V[T].apply(V,[U[P]].concat(S))
}return false
}return true
};
var b=function(T,R){var U,S=-1,P=T.length,O=R[0],N=R[1],V=R[2];
switch(R.length){case 0:while(++S<P){(U=T[S]).callback.call(U.ctx)
}return;
case 1:while(++S<P){(U=T[S]).callback.call(U.ctx,O)
}return;
case 2:while(++S<P){(U=T[S]).callback.call(U.ctx,O,N)
}return;
case 3:while(++S<P){(U=T[S]).callback.call(U.ctx,O,N,V)
}return;
default:while(++S<P){(U=T[S]).callback.apply(U.ctx,R)
}}};
var D={listenTo:"on",listenToOnce:"once"};
M.each(D,function(N,O){K[O]=function(S,P,U){var R=this._listeningTo||(this._listeningTo={});
var T=S._listenId||(S._listenId=M.uniqueId("l"));
R[T]=S;
if(!U&&typeof P==="object"){U=this
}S[N](P,U,this);
return this
}
});
K.bind=K.on;
K.unbind=K.off;
M.extend(A,K);
var F=A.Model=function(N,P){var O=N||{};
P||(P={});
this.cid=M.uniqueId("c");
this.attributes={};
if(P.collection){this.collection=P.collection
}if(P.parse){O=this.parse(O,P)||{}
}O=M.defaults({},O,M.result(this,"defaults"));
this.set(O,P);
this.changed={};
this.initialize.apply(this,arguments)
};
M.extend(F.prototype,K,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(N){return M.clone(this.attributes)
},sync:function(){return A.sync.apply(this,arguments)
},get:function(N){return this.attributes[N]
},escape:function(N){return M.escape(this.get(N))
},has:function(N){return this.get(N)!=null
},set:function(W,N,aa){var U,X,Y,V,T,Z,P,S;
if(W==null){return this
}if(typeof W==="object"){X=W;
aa=N
}else{(X={})[W]=N
}aa||(aa={});
if(!this._validate(X,aa)){return false
}Y=aa.unset;
T=aa.silent;
V=[];
Z=this._changing;
this._changing=true;
if(!Z){this._previousAttributes=M.clone(this.attributes);
this.changed={}
}S=this.attributes,P=this._previousAttributes;
if(this.idAttribute in X){this.id=X[this.idAttribute]
}for(U in X){N=X[U];
if(!M.isEqual(S[U],N)){V.push(U)
}if(!M.isEqual(P[U],N)){this.changed[U]=N
}else{delete this.changed[U]
}Y?delete S[U]:S[U]=N
}if(!T){if(V.length){this._pending=true
}for(var R=0,O=V.length;
R<O;
R++){this.trigger("change:"+V[R],this,S[V[R]],aa)
}}if(Z){return this
}if(!T){while(this._pending){this._pending=false;
this.trigger("change",this,aa)
}}this._pending=false;
this._changing=false;
return this
},unset:function(N,O){return this.set(N,void 0,M.extend({},O,{unset:true}))
},clear:function(O){var N={};
for(var P in this.attributes){N[P]=void 0
}return this.set(N,M.extend({},O,{unset:true}))
},hasChanged:function(N){if(N==null){return !M.isEmpty(this.changed)
}return M.has(this.changed,N)
},changedAttributes:function(P){if(!P){return this.hasChanged()?M.clone(this.changed):false
}var S,R=false;
var O=this._changing?this._previousAttributes:this.attributes;
for(var N in P){if(M.isEqual(O[N],(S=P[N]))){continue
}(R||(R={}))[N]=S
}return R
},previous:function(N){if(N==null||!this._previousAttributes){return null
}return this._previousAttributes[N]
},previousAttributes:function(){return M.clone(this._previousAttributes)
},fetch:function(O){O=O?M.clone(O):{};
if(O.parse===void 0){O.parse=true
}var N=this;
var P=O.success;
O.success=function(R){if(!N.set(N.parse(R,O),O)){return false
}if(P){P(N,R,O)
}N.trigger("sync",N,R,O)
};
I(this,O);
return this.sync("read",this,O)
},save:function(S,O,W){var T,N,V,P=this.attributes;
if(S==null||typeof S==="object"){T=S;
W=O
}else{(T={})[S]=O
}W=M.extend({validate:true},W);
if(T&&!W.wait){if(!this.set(T,W)){return false
}}else{if(!this._validate(T,W)){return false
}}if(T&&W.wait){this.attributes=M.extend({},P,T)
}if(W.parse===void 0){W.parse=true
}var R=this;
var U=W.success;
W.success=function(Y){R.attributes=P;
var X=R.parse(Y,W);
if(W.wait){X=M.extend(T||{},X)
}if(M.isObject(X)&&!R.set(X,W)){return false
}if(U){U(R,Y,W)
}R.trigger("sync",R,Y,W)
};
I(this,W);
N=this.isNew()?"create":(W.patch?"patch":"update");
if(N==="patch"){W.attrs=T
}V=this.sync(N,this,W);
if(T&&W.wait){this.attributes=P
}return V
},destroy:function(O){O=O?M.clone(O):{};
var N=this;
var S=O.success;
var P=function(){N.trigger("destroy",N,N.collection,O)
};
O.success=function(T){if(O.wait||N.isNew()){P()
}if(S){S(N,T,O)
}if(!N.isNew()){N.trigger("sync",N,T,O)
}};
if(this.isNew()){O.success();
return false
}I(this,O);
var R=this.sync("delete",this,O);
if(!O.wait){P()
}return R
},url:function(){var N=M.result(this,"urlRoot")||M.result(this.collection,"url")||s();
if(this.isNew()){return N
}return N+(N.charAt(N.length-1)==="/"?"":"/")+encodeURIComponent(this.id)
},parse:function(O,N){return O
},clone:function(){return new this.constructor(this.attributes)
},isNew:function(){return this.id==null
},isValid:function(N){return this._validate({},M.extend(N||{},{validate:true}))
},_validate:function(P,O){if(!O.validate||!this.validate){return true
}P=M.extend({},this.attributes,P);
var N=this.validationError=this.validate(P,O)||null;
if(!N){return true
}this.trigger("invalid",this,N,M.extend(O,{validationError:N}));
return false
}});
var a=["keys","values","pairs","invert","pick","omit"];
M.each(a,function(N){F.prototype[N]=function(){var O=o.call(arguments);
O.unshift(this.attributes);
return M[N].apply(M,O)
}
});
var c=A.Collection=function(O,N){N||(N={});
if(N.model){this.model=N.model
}if(N.comparator!==void 0){this.comparator=N.comparator
}this._reset();
this.initialize.apply(this,arguments);
if(O){this.reset(O,M.extend({silent:true},N))
}};
var p={add:true,remove:true,merge:true};
var L={add:true,remove:false};
M.extend(c.prototype,K,{model:F,initialize:function(){},toJSON:function(N){return this.map(function(O){return O.toJSON(N)
})
},sync:function(){return A.sync.apply(this,arguments)
},add:function(O,N){return this.set(O,M.extend({merge:false},N,L))
},remove:function(U,R){var T=!M.isArray(U);
U=T?[U]:M.clone(U);
R||(R={});
var S,N,P,O;
for(S=0,N=U.length;
S<N;
S++){O=U[S]=this.get(U[S]);
if(!O){continue
}delete this._byId[O.id];
delete this._byId[O.cid];
P=this.indexOf(O);
this.models.splice(P,1);
this.length--;
if(!R.silent){R.index=P;
O.trigger("remove",O,this,R)
}this._removeReference(O)
}return T?U[0]:U
},set:function(ah,O){O=M.defaults({},O,p);
if(O.parse){ah=this.parse(ah,O)
}var S=!M.isArray(ah);
ah=S?(ah?[ah]:[]):M.clone(ah);
var ad,ab,X,P,Z,W,ag;
var U=O.at;
var af=this.model;
var N=this.comparator&&(U==null)&&O.sort!==false;
var ae=M.isString(this.comparator)?this.comparator:null;
var aj=[],aa=[],Y={};
var V=O.add,R=O.merge,ai=O.remove;
var ac=!N&&V&&ai?[]:false;
for(ad=0,ab=ah.length;
ad<ab;
ad++){Z=ah[ad];
if(Z instanceof F){X=P=Z
}else{X=Z[af.prototype.idAttribute]
}if(W=this.get(X)){if(ai){Y[W.cid]=true
}if(R){Z=Z===P?P.attributes:Z;
if(O.parse){Z=W.parse(Z,O)
}W.set(Z,O);
if(N&&!ag&&W.hasChanged(ae)){ag=true
}}ah[ad]=W
}else{if(V){P=ah[ad]=this._prepareModel(Z,O);
if(!P){continue
}aj.push(P);
P.on("all",this._onModelEvent,this);
this._byId[P.cid]=P;
if(P.id!=null){this._byId[P.id]=P
}}}if(ac){ac.push(W||P)
}}if(ai){for(ad=0,ab=this.length;
ad<ab;
++ad){if(!Y[(P=this.models[ad]).cid]){aa.push(P)
}}if(aa.length){this.remove(aa,O)
}}if(aj.length||(ac&&ac.length)){if(N){ag=true
}this.length+=aj.length;
if(U!=null){for(ad=0,ab=aj.length;
ad<ab;
ad++){this.models.splice(U+ad,0,aj[ad])
}}else{if(ac){this.models.length=0
}var T=ac||aj;
for(ad=0,ab=T.length;
ad<ab;
ad++){this.models.push(T[ad])
}}}if(ag){this.sort({silent:true})
}if(!O.silent){for(ad=0,ab=aj.length;
ad<ab;
ad++){(P=aj[ad]).trigger("add",P,this,O)
}if(ag||(ac&&ac.length)){this.trigger("sort",this,O)
}}return S?ah[0]:ah
},reset:function(R,O){O||(O={});
for(var P=0,N=this.models.length;
P<N;
P++){this._removeReference(this.models[P])
}O.previousModels=this.models;
this._reset();
R=this.add(R,M.extend({silent:true},O));
if(!O.silent){this.trigger("reset",this,O)
}return R
},push:function(O,N){return this.add(O,M.extend({at:this.length},N))
},pop:function(O){var N=this.at(this.length-1);
this.remove(N,O);
return N
},unshift:function(O,N){return this.add(O,M.extend({at:0},N))
},shift:function(O){var N=this.at(0);
this.remove(N,O);
return N
},slice:function(){return o.apply(this.models,arguments)
},get:function(N){if(N==null){return void 0
}return this._byId[N.id]||this._byId[N.cid]||this._byId[N]
},at:function(N){return this.models[N]
},where:function(N,O){if(M.isEmpty(N)){return O?void 0:[]
}return this[O?"find":"filter"](function(P){for(var R in N){if(N[R]!==P.get(R)){return false
}}return true
})
},findWhere:function(N){return this.where(N,true)
},sort:function(N){if(!this.comparator){throw new Error("Cannot sort a set without a comparator")
}N||(N={});
if(M.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)
}else{this.models.sort(M.bind(this.comparator,this))
}if(!N.silent){this.trigger("sort",this,N)
}return this
},pluck:function(N){return M.invoke(this.models,"get",N)
},fetch:function(N){N=N?M.clone(N):{};
if(N.parse===void 0){N.parse=true
}var P=N.success;
var O=this;
N.success=function(R){var S=N.reset?"reset":"set";
O[S](R,N);
if(P){P(O,R,N)
}O.trigger("sync",O,R,N)
};
I(this,N);
return this.sync("read",this,N)
},create:function(O,N){N=N?M.clone(N):{};
if(!(O=this._prepareModel(O,N))){return false
}if(!N.wait){this.add(O,N)
}var R=this;
var P=N.success;
N.success=function(T,U,S){if(S.wait){R.add(T,S)
}if(P){P(T,U,S)
}};
O.save(null,N);
return O
},parse:function(O,N){return O
},clone:function(){return new this.constructor(this.models)
},_reset:function(){this.length=0;
this.models=[];
this._byId={}
},_prepareModel:function(P,O){if(P instanceof F){if(!P.collection){P.collection=this
}return P
}O=O?M.clone(O):{};
O.collection=this;
var N=new this.model(P,O);
if(!N.validationError){return N
}this.trigger("invalid",this,N.validationError,O);
return false
},_removeReference:function(N){if(this===N.collection){delete N.collection
}N.off("all",this._onModelEvent,this)
},_onModelEvent:function(P,O,R,N){if((P==="add"||P==="remove")&&R!==this){return
}if(P==="destroy"){this.remove(O,N)
}if(O&&P==="change:"+O.idAttribute){delete this._byId[O.previous(O.idAttribute)];
if(O.id!=null){this._byId[O.id]=O
}}this.trigger.apply(this,arguments)
}});
var z=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain"];
M.each(z,function(N){c.prototype[N]=function(){var O=o.call(arguments);
O.unshift(this.models);
return M[N].apply(M,O)
}
});
var l=["groupBy","countBy","sortBy"];
M.each(l,function(N){c.prototype[N]=function(R,O){var P=M.isFunction(R)?R:function(S){return S.get(R)
};
return M[N](this.models,P,O)
}
});
var H=A.View=function(N){this.cid=M.uniqueId("view");
N||(N={});
M.extend(this,M.pick(N,e));
this._ensureElement();
this.initialize.apply(this,arguments);
this.delegateEvents()
};
var w=/^(\S+)\s*(.*)$/;
var e=["model","collection","el","id","attributes","className","tagName","events"];
M.extend(H.prototype,K,{tagName:"div",$:function(N){return this.$el.find(N)
},initialize:function(){},render:function(){return this
},remove:function(){this.$el.remove();
this.stopListening();
return this
},setElement:function(N,O){if(this.$el){this.undelegateEvents()
}this.$el=N instanceof A.$?N:A.$(N);
this.el=this.$el[0];
if(O!==false){this.delegateEvents()
}return this
},delegateEvents:function(S){if(!(S||(S=M.result(this,"events")))){return this
}this.undelegateEvents();
for(var R in S){var T=S[R];
if(!M.isFunction(T)){T=this[S[R]]
}if(!T){continue
}var P=R.match(w);
var O=P[1],N=P[2];
T=M.bind(T,this);
O+=".delegateEvents"+this.cid;
if(N===""){this.$el.on(O,T)
}else{this.$el.on(O,N,T)
}}return this
},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);
return this
},_ensureElement:function(){if(!this.el){var N=M.extend({},M.result(this,"attributes"));
if(this.id){N.id=M.result(this,"id")
}if(this.className){N["class"]=M.result(this,"className")
}var O=A.$("<"+M.result(this,"tagName")+">").attr(N);
this.setElement(O,false)
}else{this.setElement(M.result(this,"el"),false)
}}});
A.sync=function(U,O,N){var R=k[U];
M.defaults(N||(N={}),{emulateHTTP:A.emulateHTTP,emulateJSON:A.emulateJSON});
var T={type:R,dataType:"json"};
if(!N.url){T.url=M.result(O,"url")||s()
}if(N.data==null&&O&&(U==="create"||U==="update"||U==="patch")){T.contentType="application/json";
T.data=JSON.stringify(N.attrs||O.toJSON(N))
}if(N.emulateJSON){T.contentType="application/x-www-form-urlencoded";
T.data=T.data?{model:T.data}:{}
}if(N.emulateHTTP&&(R==="PUT"||R==="DELETE"||R==="PATCH")){T.type="POST";
if(N.emulateJSON){T.data._method=R
}var P=N.beforeSend;
N.beforeSend=function(V){V.setRequestHeader("X-HTTP-Method-Override",R);
if(P){return P.apply(this,arguments)
}}
}if(T.type!=="GET"&&!N.emulateJSON){T.processData=false
}if(T.type==="PATCH"&&j){T.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")
}
}var S=N.xhr=A.ajax(M.extend(T,N));
O.trigger("request",O,S,N);
return S
};
var j=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);
var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};
A.ajax=function(){return A.$.ajax.apply(A.$,arguments)
};
var q=A.Router=function(N){N||(N={});
if(N.routes){this.routes=N.routes
}this._bindRoutes();
this.initialize.apply(this,arguments)
};
var r=/\((.*?)\)/g;
var t=/(\(\?)?:\w+/g;
var d=/\*\w+/g;
var h=/[\-{}\[\]+?.,\\\^$|#\s]/g;
M.extend(q.prototype,K,{initialize:function(){},route:function(O,P,R){if(!M.isRegExp(O)){O=this._routeToRegExp(O)
}if(M.isFunction(P)){R=P;
P=""
}if(!R){R=this[P]
}var N=this;
A.history.route(O,function(T){var S=N._extractParameters(O,T);
R&&R.apply(N,S);
N.trigger.apply(N,["route:"+P].concat(S));
N.trigger("route",P,S);
A.history.trigger("route",N,P,S)
});
return this
},navigate:function(O,N){A.history.navigate(O,N);
return this
},_bindRoutes:function(){if(!this.routes){return
}this.routes=M.result(this,"routes");
var O,N=M.keys(this.routes);
while((O=N.pop())!=null){this.route(O,this.routes[O])
}},_routeToRegExp:function(N){N=N.replace(h,"\\$&").replace(r,"(?:$1)?").replace(t,function(P,O){return O?P:"([^/]+)"
}).replace(d,"(.*?)");
return new RegExp("^"+N+"$")
},_extractParameters:function(N,O){var P=N.exec(O).slice(1);
return M.map(P,function(R){return R?decodeURIComponent(R):null
})
}});
var i=A.History=function(){this.handlers=[];
M.bindAll(this,"checkUrl");
if(typeof window!=="undefined"){this.location=window.location;
this.history=window.history
}};
var B=/^[#\/]|\s+$/g;
var f=/^\/+|\/+$/g;
var J=/msie [\w.]+/;
var n=/\/$/;
var G=/[?#].*$/;
i.started=false;
M.extend(i.prototype,K,{interval:50,getHash:function(O){var N=(O||this).location.href.match(/#(.*)$/);
return N?N[1]:""
},getFragment:function(P,O){if(P==null){if(this._hasPushState||!this._wantsHashChange||O){P=this.location.pathname;
var N=this.root.replace(n,"");
if(!P.indexOf(N)){P=P.slice(N.length)
}}else{P=this.getHash()
}}return P.replace(B,"")
},start:function(P){if(i.started){throw new Error("Backbone.history has already been started")
}i.started=true;
this.options=M.extend({root:"/"},this.options,P);
this.root=this.options.root;
this._wantsHashChange=this.options.hashChange!==false;
this._wantsPushState=!!this.options.pushState;
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);
var O=this.getFragment();
var N=document.documentMode;
var S=(J.exec(navigator.userAgent.toLowerCase())&&(!N||N<=7));
this.root=("/"+this.root+"/").replace(f,"/");
if(S&&this._wantsHashChange){this.iframe=A.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
this.navigate(O)
}if(this._hasPushState){A.$(window).on("popstate",this.checkUrl)
}else{if(this._wantsHashChange&&("onhashchange" in window)&&!S){A.$(window).on("hashchange",this.checkUrl)
}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)
}}}this.fragment=O;
var T=this.location;
var R=T.pathname.replace(/[^\/]$/,"$&/")===this.root;
if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!R){this.fragment=this.getFragment(null,true);
this.location.replace(this.root+this.location.search+"#"+this.fragment);
return true
}else{if(this._hasPushState&&R&&T.hash){this.fragment=this.getHash().replace(B,"");
this.history.replaceState({},document.title,this.root+this.fragment+T.search)
}}}if(!this.options.silent){return this.loadUrl()
}},stop:function(){A.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);
clearInterval(this._checkUrlInterval);
i.started=false
},route:function(N,O){this.handlers.unshift({route:N,callback:O})
},checkUrl:function(O){var N=this.getFragment();
if(N===this.fragment&&this.iframe){N=this.getFragment(this.getHash(this.iframe))
}if(N===this.fragment){return false
}if(this.iframe){this.navigate(N)
}this.loadUrl()
},loadUrl:function(N){N=this.fragment=this.getFragment(N);
return M.any(this.handlers,function(O){if(O.route.test(N)){O.callback(N);
return true
}})
},navigate:function(P,O){if(!i.started){return false
}if(!O||O===true){O={trigger:!!O}
}var N=this.root+(P=this.getFragment(P||""));
P=P.replace(G,"");
if(this.fragment===P){return
}this.fragment=P;
if(P===""&&N!=="/"){N=N.slice(0,-1)
}if(this._hasPushState){this.history[O.replace?"replaceState":"pushState"]({},document.title,N)
}else{if(this._wantsHashChange){this._updateHash(this.location,P,O.replace);
if(this.iframe&&(P!==this.getFragment(this.getHash(this.iframe)))){if(!O.replace){this.iframe.document.open().close()
}this._updateHash(this.iframe.location,P,O.replace)
}}else{return this.location.assign(N)
}}if(O.trigger){return this.loadUrl(P)
}},_updateHash:function(N,P,R){if(R){var O=N.href.replace(/(javascript:|#).*$/,"");
N.replace(O+"#"+P)
}else{N.hash="#"+P
}}});
A.history=new i;
var m=function(N,P){var O=this;
var S;
if(N&&M.has(N,"constructor")){S=N.constructor
}else{S=function(){return O.apply(this,arguments)
}
}M.extend(S,O,P);
var R=function(){this.constructor=S
};
R.prototype=O.prototype;
S.prototype=new R;
if(N){M.extend(S.prototype,N)
}S.__super__=O.prototype;
return S
};
F.extend=c.extend=q.extend=H.extend=i.extend=m;
var s=function(){throw new Error('A "url" property or function must be specified')
};
var I=function(P,O){var N=O.error;
O.error=function(R){if(N){N(P,R,O)
}P.trigger("error",P,R,O)
}
}
}).call(this);
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")
}+function(d){function c(){var f=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var g in e){if(void 0!==f.style[g]){return{end:e[g]}
}}return !1
}d.fn.emulateTransitionEnd=function(a){var h=!1,g=this;
d(this).one("bsTransitionEnd",function(){h=!0
});
var f=function(){h||d(g).trigger(d.support.transition.end)
};
return setTimeout(f,a),this
},d(function(){d.support.transition=c(),d.support.transition&&(d.event.special.bsTransitionEnd={bindType:d.support.transition.end,delegateType:d.support.transition.end,handle:function(a){return d(a.target).is(this)?a.handleObj.handler.apply(this,arguments):void 0
}})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var d=g(this),b=d.data("bs.alert");
b||d.data("bs.alert",b=new i(this)),"string"==typeof a&&b[a].call(d)
})
}var j='[data-dismiss="alert"]',i=function(a){g(a).on("click",j,this.close)
};
i.VERSION="3.2.0",i.TRANSITION_DURATION=150,i.prototype.close=function(a){function m(){d.detach().trigger("closed.bs.alert").remove()
}var l=g(this),k=l.attr("data-target");
k||(k=l.attr("href"),k=k&&k.replace(/.*(?=#[^\s]*$)/,""));
var d=g(k);
a&&a.preventDefault(),d.length||(d=l.hasClass("alert")?l:l.parent()),d.trigger(a=g.Event("close.bs.alert")),a.isDefaultPrevented()||(d.removeClass("in"),g.support.transition&&d.hasClass("fade")?d.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m())
};
var h=g.fn.alert;
g.fn.alert=f,g.fn.alert.Constructor=i,g.fn.alert.noConflict=function(){return g.fn.alert=h,this
},g(document).on("click.bs.alert.data-api",j,i.prototype.close)
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.button"),b="object"==typeof a&&a;
c||i.data("bs.button",c=new h(this,b)),"toggle"==a?c.toggle():a&&c.setState(a)
})
}var h=function(a,c){this.$element=f(a),this.options=f.extend({},h.DEFAULTS,c),this.isLoading=!1
};
h.VERSION="3.2.0",h.DEFAULTS={loadingText:"loading..."},h.prototype.setState=function(a){var l="disabled",k=this.$element,j=k.is("input")?"val":"html",i=k.data();
a+="Text",null==i.resetText&&k.data("resetText",k[j]()),k[j](null==i[a]?this.options[a]:i[a]),setTimeout(f.proxy(function(){"loadingText"==a?(this.isLoading=!0,k.addClass(l).attr(l,l)):this.isLoading&&(this.isLoading=!1,k.removeClass(l).removeAttr(l))
},this),0)
},h.prototype.toggle=function(){var i=!0,d=this.$element.closest('[data-toggle="buttons"]');
if(d.length){var j=this.$element.find("input");
"radio"==j.prop("type")&&(j.prop("checked")&&this.$element.hasClass("active")?i=!1:d.find(".active").removeClass("active")),i&&j.prop("checked",!this.$element.hasClass("active")).trigger("change")
}i&&this.$element.toggleClass("active")
};
var g=f.fn.button;
f.fn.button=e,f.fn.button.Constructor=h,f.fn.button.noConflict=function(){return f.fn.button=g,this
},f(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(b){var a=f(b.target);
a.hasClass("btn")||(a=a.closest(".btn")),e.call(a,"toggle"),b.preventDefault()
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(a){f(a.target).closest(".btn").toggleClass("focus","focus"==a.type)
})
}(jQuery),+function(f){function e(a){return this.each(function(){var j=f(this),i=j.data("bs.carousel"),c=f.extend({},h.DEFAULTS,j.data(),"object"==typeof a&&a),b="string"==typeof a?a:c.slide;
i||j.data("bs.carousel",i=new h(this,c)),"number"==typeof a?i.to(a):b?i[b]():c.interval&&i.pause().cycle()
})
}var h=function(a,d){this.$element=f(a).on("keydown.bs.carousel",f.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=d,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",f.proxy(this.pause,this)).on("mouseleave.bs.carousel",f.proxy(this.cycle,this))
};
h.VERSION="3.2.0",h.TRANSITION_DURATION=600,h.DEFAULTS={interval:5000,pause:"hover",wrap:!0},h.prototype.keydown=function(b){switch(b.which){case 37:this.prev();
break;
case 39:this.next();
break;
default:return
}b.preventDefault()
},h.prototype.cycle=function(a){return a||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(f.proxy(this.next,this),this.options.interval)),this
},h.prototype.getItemIndex=function(b){return this.$items=b.parent().children(".item"),this.$items.index(b||this.$active)
},h.prototype.getItemForDirection=function(j,i){var m="prev"==j?-1:1,l=this.getItemIndex(i),k=(l+m)%this.$items.length;
return this.$items.eq(k)
},h.prototype.to=function(i){var d=this,j=this.getItemIndex(this.$active=this.$element.find(".item.active"));
return i>this.$items.length-1||0>i?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){d.to(i)
}):j==i?this.pause().cycle():this.slide(i>j?"next":"prev",this.$items.eq(i))
},h.prototype.pause=function(a){return a||(this.paused=!0),this.$element.find(".next, .prev").length&&f.support.transition&&(this.$element.trigger(f.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this
},h.prototype.next=function(){return this.sliding?void 0:this.slide("next")
},h.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")
},h.prototype.slide=function(x,w){var v=this.$element.find(".item.active"),u=w||this.getItemForDirection(x,v),t=this.interval,s="next"==x?"left":"right",r="next"==x?"first":"last",q=this;
if(!u.length){if(!this.options.wrap){return
}u=this.$element.find(".item")[r]()
}if(u.hasClass("active")){return this.sliding=!1
}var p=u[0],o=f.Event("slide.bs.carousel",{relatedTarget:p,direction:s});
if(this.$element.trigger(o),!o.isDefaultPrevented()){if(this.sliding=!0,t&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var c=f(this.$indicators.children()[this.getItemIndex(u)]);
c&&c.addClass("active")
}var a=f.Event("slid.bs.carousel",{relatedTarget:p,direction:s});
return f.support.transition&&this.$element.hasClass("slide")?(u.addClass(x),u[0].offsetWidth,v.addClass(s),u.addClass(s),v.one("bsTransitionEnd",function(){u.removeClass([x,s].join(" ")).addClass("active"),v.removeClass(["active",s].join(" ")),q.sliding=!1,setTimeout(function(){q.$element.trigger(a)
},0)
}).emulateTransitionEnd(h.TRANSITION_DURATION)):(v.removeClass("active"),u.addClass("active"),this.sliding=!1,this.$element.trigger(a)),t&&this.cycle(),this
}};
var g=f.fn.carousel;
f.fn.carousel=e,f.fn.carousel.Constructor=h,f.fn.carousel.noConflict=function(){return f.fn.carousel=g,this
},f(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(l){var k,j=f(this),i=f(j.attr("data-target")||(k=j.attr("href"))&&k.replace(/.*(?=#[^\s]+$)/,""));
if(i.hasClass("carousel")){var b=f.extend({},i.data(),j.data()),a=j.attr("data-slide-to");
a&&(b.interval=!1),e.call(i,b),a&&i.data("bs.carousel").to(a),l.preventDefault()
}}),f(window).on("load",function(){f('[data-ride="carousel"]').each(function(){var a=f(this);
e.call(a,a.data())
})
})
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.collapse"),b=f.extend({},h.DEFAULTS,i.data(),"object"==typeof a&&a);
!c&&b.toggle&&"show"==a&&(a=!a),c||i.data("bs.collapse",c=new h(this,b)),"string"==typeof a&&c[a]()
})
}var h=function(a,c){this.$element=f(a),this.options=f.extend({},h.DEFAULTS,c),this.transitioning=null,this.options.parent&&(this.$parent=f(this.options.parent)),this.options.toggle&&this.toggle()
};
h.VERSION="3.2.0",h.TRANSITION_DURATION=350,h.DEFAULTS={toggle:!0},h.prototype.dimension=function(){var b=this.$element.hasClass("width");
return b?"width":"height"
},h.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var l=f.Event("show.bs.collapse");
if(this.$element.trigger(l),!l.isDefaultPrevented()){var k=this.$parent&&this.$parent.find("> .panel > .in");
if(k&&k.length){var j=k.data("bs.collapse");
if(j&&j.transitioning){return
}e.call(k,"hide"),j||k.data("bs.collapse",null)
}var c=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[c](0),this.transitioning=1;
var b=function(){this.$element.removeClass("collapsing").addClass("collapse in")[c](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")
};
if(!f.support.transition){return b.call(this)
}var a=f.camelCase(["scroll",c].join("-"));
this.$element.one("bsTransitionEnd",f.proxy(b,this)).emulateTransitionEnd(h.TRANSITION_DURATION)[c](this.$element[0][a])
}}},h.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var a=f.Event("hide.bs.collapse");
if(this.$element.trigger(a),!a.isDefaultPrevented()){var i=this.dimension();
this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in"),this.transitioning=1;
var c=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
};
return f.support.transition?void this.$element[i](0).one("bsTransitionEnd",f.proxy(c,this)).emulateTransitionEnd(h.TRANSITION_DURATION):c.call(this)
}}},h.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
};
var g=f.fn.collapse;
f.fn.collapse=e,f.fn.collapse.Constructor=h,f.fn.collapse.noConflict=function(){return f.fn.collapse=g,this
},f(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(r){var q,p=f(this),o=p.attr("data-target")||r.preventDefault()||(q=p.attr("href"))&&q.replace(/.*(?=#[^\s]+$)/,""),n=f(o),m=n.data("bs.collapse"),l=m?"toggle":p.data(),b=p.attr("data-parent"),a=b&&f(b);
m&&m.transitioning||(a&&a.find('[data-toggle="collapse"][data-parent="'+b+'"]').not(p).addClass("collapsed"),p.toggleClass("collapsed",n.hasClass("in"))),e.call(n,l)
})
}(jQuery),+function(j){function i(a){a&&3===a.which||(j(n).remove(),j(m).each(function(){var g=j(this),c=p(g),b={relatedTarget:this};
c.hasClass("open")&&(c.trigger(a=j.Event("hide.bs.dropdown",b)),a.isDefaultPrevented()||(g.attr("aria-expanded","false"),c.removeClass("open").trigger("hidden.bs.dropdown",b)))
}))
}function p(a){var f=a.attr("data-target");
f||(f=a.attr("href"),f=f&&/#[A-Za-z]/.test(f)&&f.replace(/.*(?=#[^\s]*$)/,""));
var e=f&&j(f);
return e&&e.length?e:a.parent()
}function o(a){return this.each(function(){var e=j(this),b=e.data("bs.dropdown");
b||e.data("bs.dropdown",b=new l(this)),"string"==typeof a&&b[a].call(e)
})
}var n=".dropdown-backdrop",m='[data-toggle="dropdown"]',l=function(a){j(a).on("click.bs.dropdown",this.toggle)
};
l.VERSION="3.2.0",l.prototype.toggle=function(r){var q=j(this);
if(!q.is(".disabled, :disabled")){var c=p(q),b=c.hasClass("open");
if(i(),!b){"ontouchstart" in document.documentElement&&!c.closest(".navbar-nav").length&&j('<div class="dropdown-backdrop"/>').insertAfter(j(this)).on("click",i);
var a={relatedTarget:this};
if(c.trigger(r=j.Event("show.bs.dropdown",a)),r.isDefaultPrevented()){return
}q.trigger("focus").attr("aria-expanded","true"),c.toggleClass("open").trigger("shown.bs.dropdown",a)
}return !1
}},l.prototype.keydown=function(a){if(/(38|40|27)/.test(a.keyCode)){var t=j(this);
if(a.preventDefault(),a.stopPropagation(),!t.is(".disabled, :disabled")){var s=p(t),r=s.hasClass("open");
if(!r||r&&27==a.keyCode){return 27==a.which&&s.find(m).trigger("focus"),t.trigger("click")
}var q=" li:not(.divider):visible a",f=s.find('[role="menu"]'+q+', [role="listbox"]'+q);
if(f.length){var c=f.index(f.filter(":focus"));
38==a.keyCode&&c>0&&c--,40==a.keyCode&&c<f.length-1&&c++,~c||(c=0),f.eq(c).trigger("focus")
}}}};
var k=j.fn.dropdown;
j.fn.dropdown=o,j.fn.dropdown.Constructor=l,j.fn.dropdown.noConflict=function(){return j.fn.dropdown=k,this
},j(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()
}).on("click.bs.dropdown.data-api",m,l.prototype.toggle).on("keydown.bs.dropdown.data-api",m+', [role="menu"], [role="listbox"]',l.prototype.keydown)
}(jQuery),+function(f){function e(a,c){return this.each(function(){var i=f(this),d=i.data("bs.modal"),b=f.extend({},h.DEFAULTS,i.data(),"object"==typeof a&&a);
d||i.data("bs.modal",d=new h(this,b)),"string"==typeof a?d[a](c):b.show&&d.show(c)
})
}var h=function(a,d){this.options=d,this.$body=f(document.body),this.$element=f(a),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,f.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
};
h.VERSION="3.2.0",h.TRANSITION_DURATION=300,h.BACKDROP_TRANSITION_DURATION=150,h.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},h.prototype.toggle=function(b){return this.isShown?this.hide():this.show(b)
},h.prototype.show=function(a){var i=this,c=f.Event("show.bs.modal",{relatedTarget:a});
this.$element.trigger(c),this.isShown||c.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',f.proxy(this.hide,this)),this.backdrop(function(){var d=f.support.transition&&i.$element.hasClass("fade");
i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),d&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus();
var b=f.Event("shown.bs.modal",{relatedTarget:a});
d?i.$element.find(".modal-dialog").one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(b)
}).emulateTransitionEnd(h.TRANSITION_DURATION):i.$element.trigger("focus").trigger(b)
}))
},h.prototype.hide=function(a){a&&a.preventDefault(),a=f.Event("hide.bs.modal"),this.$element.trigger(a),this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),f(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),f.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",f.proxy(this.hideModal,this)).emulateTransitionEnd(h.TRANSITION_DURATION):this.hideModal())
},h.prototype.enforceFocus=function(){f(document).off("focusin.bs.modal").on("focusin.bs.modal",f.proxy(function(b){this.$element[0]===b.target||this.$element.has(b.target).length||this.$element.trigger("focus")
},this))
},h.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",f.proxy(function(b){27==b.which&&this.hide()
},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")
},h.prototype.hideModal=function(){var b=this;
this.$element.hide(),this.backdrop(function(){b.$element.trigger("hidden.bs.modal")
})
},h.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},h.prototype.backdrop=function(a){var k=this,j=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var i=f.support.transition&&j;
if(this.$backdrop=f('<div class="modal-backdrop '+j+'" />').appendTo(this.$body),this.$element.on("mousedown.dismiss.bs.modal",f.proxy(function(b){b.target===b.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))
},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!a){return
}i?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):a()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var c=function(){k.removeBackdrop(),a&&a()
};
f.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):c()
}else{a&&a()
}}},h.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())
},h.prototype.setScrollbar=function(){var b=parseInt(this.$body.css("padding-right")||0,10);
this.scrollbarWidth&&this.$body.css("padding-right",b+this.scrollbarWidth)
},h.prototype.resetScrollbar=function(){this.$body.css("padding-right","")
},h.prototype.measureScrollbar=function(){var d=document.createElement("div");
d.className="modal-scrollbar-measure",this.$body.append(d);
var c=d.offsetWidth-d.clientWidth;
return this.$body[0].removeChild(d),c
};
var g=f.fn.modal;
f.fn.modal=e,f.fn.modal.Constructor=h,f.fn.modal.noConflict=function(){return f.fn.modal=g,this
},f(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(k){var j=f(this),i=j.attr("href"),b=f(j.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),a=b.data("bs.modal")?"toggle":f.extend({remote:!/#/.test(i)&&i},b.data(),j.data());
j.is("a")&&k.preventDefault(),b.one("show.bs.modal",function(c){c.isDefaultPrevented()||b.one("hidden.bs.modal",function(){j.is(":visible")&&j.trigger("focus")
})
}),e.call(b,a,this)
})
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.tooltip"),b="object"==typeof a&&a;
(c||"destroy"!=a)&&(c||i.data("bs.tooltip",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",d,c)
};
h.VERSION="3.2.0",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},h.prototype.init=function(a,p,o){this.enabled=!0,this.type=a,this.$element=f(p),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&f(this.options.viewport.selector||this.options.viewport);
for(var n=this.options.trigger.split(" "),m=n.length;
m--;
){var l=n[m];
if("click"==l){this.$element.on("click."+this.type,this.options.selector,f.proxy(this.toggle,this))
}else{if("manual"!=l){var k="hover"==l?"mouseenter":"focusin",j="hover"==l?"mouseleave":"focusout";
this.$element.on(k+"."+this.type,this.options.selector,f.proxy(this.enter,this)),this.$element.on(j+"."+this.type,this.options.selector,f.proxy(this.leave,this))
}}}this.options.selector?this._options=f.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.getOptions=function(a){return a=f.extend({},this.getDefaults(),this.$element.data(),a),a.delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay}),a
},h.prototype.getDelegateOptions=function(){var a={},d=this.getDefaults();
return this._options&&f.each(this._options,function(b,c){d[b]!=c&&(a[b]=c)
}),a
},h.prototype.enter=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),clearTimeout(d.timeout),d.hoverState="in",d.options.delay&&d.options.delay.show?void (d.timeout=setTimeout(function(){"in"==d.hoverState&&d.show()
},d.options.delay.show)):d.show()
},h.prototype.leave=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),clearTimeout(d.timeout),d.hoverState="out",d.options.delay&&d.options.delay.hide?void (d.timeout=setTimeout(function(){"out"==d.hoverState&&d.hide()
},d.options.delay.hide)):d.hide()
},h.prototype.show=function(){var F=f.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(F);
var E=f.contains(document.documentElement,this.$element[0]);
if(F.isDefaultPrevented()||!E){return
}var D=this,C=this.tip(),B=this.getUID(this.type);
this.setContent(),C.attr("id",B),this.$element.attr("aria-describedby",B),this.options.animation&&C.addClass("fade");
var A="function"==typeof this.options.placement?this.options.placement.call(this,C[0],this.$element[0]):this.options.placement,z=/\s?auto?\s?/i,y=z.test(A);
y&&(A=A.replace(z,"")||"top"),C.detach().css({top:0,left:0,display:"block"}).addClass(A).data("bs."+this.type,this),this.options.container?C.appendTo(this.options.container):C.insertAfter(this.$element);
var x=this.getPosition(),w=C[0].offsetWidth,v=C[0].offsetHeight;
if(y){var u=A,t=this.$element.parent(),s=this.getPosition(t);
A="bottom"==A&&x.top+x.height+v-s.scroll>s.height?"top":"top"==A&&x.top-s.scroll-v<0?"bottom":"right"==A&&x.right+w>s.width?"left":"left"==A&&x.left-w<s.left?"right":A,C.removeClass(u).addClass(A)
}var c=this.getCalculatedOffset(A,x,w,v);
this.applyPlacement(c,A);
var a=function(){D.$element.trigger("shown.bs."+D.type),D.hoverState=null
};
f.support.transition&&this.$tip.hasClass("fade")?C.one("bsTransitionEnd",a).emulateTransitionEnd(h.TRANSITION_DURATION):a()
}},h.prototype.applyPlacement=function(z,y){var x=this.tip(),w=x[0].offsetWidth,v=x[0].offsetHeight,u=parseInt(x.css("margin-top"),10),t=parseInt(x.css("margin-left"),10);
isNaN(u)&&(u=0),isNaN(t)&&(t=0),z.top=z.top+u,z.left=z.left+t,f.offset.setOffset(x[0],f.extend({using:function(b){x.css({top:Math.round(b.top),left:Math.round(b.left)})
}},z),0),x.addClass("in");
var s=x[0].offsetWidth,r=x[0].offsetHeight;
"top"==y&&r!=v&&(z.top=z.top+v-r);
var q=this.getViewportAdjustedDelta(y,z,s,r);
q.left?z.left+=q.left:z.top+=q.top;
var p=q.left?2*q.left-w+s:2*q.top-v+r,o=q.left?"left":"top",a=q.left?"offsetWidth":"offsetHeight";
x.offset(z),this.replaceArrow(p,x[0][a],o)
},h.prototype.replaceArrow=function(i,d,j){this.arrow().css(j,i?50*(1-i/d)+"%":"")
},h.prototype.setContent=function(){var d=this.tip(),c=this.getTitle();
d.find(".tooltip-inner")[this.options.html?"html":"text"](c),d.removeClass("fade in top bottom left right")
},h.prototype.hide=function(){function a(){"in"!=j.hoverState&&i.detach(),j.$element.trigger("hidden.bs."+j.type)
}var j=this,i=this.tip(),c=f.Event("hide.bs."+this.type);
return this.$element.removeAttr("aria-describedby"),this.$element.trigger(c),c.isDefaultPrevented()?void 0:(i.removeClass("in"),f.support.transition&&this.$tip.hasClass("fade")?i.one("bsTransitionEnd",a).emulateTransitionEnd(h.TRANSITION_DURATION):a(),this.hoverState=null,this)
},h.prototype.fixTitle=function(){var b=this.$element;
(b.attr("title")||"string"!=typeof b.attr("data-original-title"))&&b.attr("data-original-title",b.attr("title")||"").attr("title","")
},h.prototype.hasContent=function(){return this.getTitle()
},h.prototype.getPosition=function(a){a=a||this.$element;
var p=a[0],o="BODY"==p.tagName,n=window.SVGElement&&p instanceof window.SVGElement,m=p.getBoundingClientRect?p.getBoundingClientRect():null,l=o?{top:0,left:0}:a.offset(),k={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:a.scrollTop()},j=n?{}:{width:o?f(window).width():a.outerWidth(),height:o?f(window).height():a.outerHeight()};
return f.extend({},m,k,j,l)
},h.prototype.getCalculatedOffset=function(j,i,l,k){return"bottom"==j?{top:i.top+i.height,left:i.left+i.width/2-l/2}:"top"==j?{top:i.top-k,left:i.left+i.width/2-l/2}:"left"==j?{top:i.top+i.height/2-k/2,left:i.left-l}:{top:i.top+i.height/2-k/2,left:i.left+i.width}
},h.prototype.getViewportAdjustedDelta=function(v,u,t,s){var r={top:0,left:0};
if(!this.$viewport){return r
}var q=this.options.viewport&&this.options.viewport.padding||0,p=this.getPosition(this.$viewport);
if(/right|left/.test(v)){var o=u.top-q-p.scroll,n=u.top+q-p.scroll+s;
o<p.top?r.top=p.top-o:n>p.top+p.height&&(r.top=p.top+p.height-n)
}else{var m=u.left-q,l=u.left+q+t;
m<p.left?r.left=p.left-m:l>p.width&&(r.left=p.left+p.width-l)
}return r
},h.prototype.getTitle=function(){var i,d=this.$element,j=this.options;
return i=d.attr("data-original-title")||("function"==typeof j.title?j.title.call(d[0]):j.title)
},h.prototype.getUID=function(b){do{b+=~~(1000000*Math.random())
}while(document.getElementById(b));
return b
},h.prototype.tip=function(){return this.$tip=this.$tip||f(this.options.template)
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},h.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)
},h.prototype.enable=function(){this.enabled=!0
},h.prototype.disable=function(){this.enabled=!1
},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled
},h.prototype.toggle=function(a){var d=this;
a&&(d=f(a.currentTarget).data("bs."+this.type),d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d))),d.tip().hasClass("in")?d.leave(d):d.enter(d)
},h.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)
};
var g=f.fn.tooltip;
f.fn.tooltip=e,f.fn.tooltip.Constructor=h,f.fn.tooltip.noConflict=function(){return f.fn.tooltip=g,this
}
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.popover"),b="object"==typeof a&&a;
(c||"destroy"!=a)&&(c||i.data("bs.popover",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.init("popover",d,c)
};
if(!f.fn.tooltip){throw new Error("Popover requires tooltip.js")
}h.VERSION="3.2.0",h.DEFAULTS=f.extend({},f.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),h.prototype=f.extend({},f.fn.tooltip.Constructor.prototype),h.prototype.constructor=h,h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.setContent=function(){var i=this.tip(),d=this.getTitle(),j=this.getContent();
i.find(".popover-title")[this.options.html?"html":"text"](d),i.find(".popover-content").empty()[this.options.html?"string"==typeof j?"html":"append":"text"](j),i.removeClass("fade top bottom left right in"),i.find(".popover-title").html()||i.find(".popover-title").hide()
},h.prototype.hasContent=function(){return this.getTitle()||this.getContent()
},h.prototype.getContent=function(){var d=this.$element,c=this.options;
return d.attr("data-content")||("function"==typeof c.content?c.content.call(d[0]):c.content)
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
},h.prototype.tip=function(){return this.$tip||(this.$tip=f(this.options.template)),this.$tip
};
var g=f.fn.popover;
f.fn.popover=e,f.fn.popover.Constructor=h,f.fn.popover.noConflict=function(){return f.fn.popover=g,this
}
}(jQuery),+function(f){function e(i,b){var a=f.proxy(this.process,this);
this.$body=f("body"),this.$scrollElement=f(f(i).is("body")?window:i),this.options=f.extend({},e.DEFAULTS,b),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a),this.refresh(),this.process()
}function h(a){return this.each(function(){var i=f(this),c=i.data("bs.scrollspy"),b="object"==typeof a&&a;
c||i.data("bs.scrollspy",c=new e(this,b)),"string"==typeof a&&c[a]()
})
}e.VERSION="3.2.0",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
},e.prototype.refresh=function(){var a="offset",j=0;
f.isWindow(this.$scrollElement[0])||(a="position",j=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();
var i=this;
this.$body.find(this.selector).map(function(){var k=f(this),c=k.data("target")||k.attr("href"),b=/^#./.test(c)&&f(c);
return b&&b.length&&b.is(":visible")&&[[b[a]().top+j,c]]||null
}).sort(function(d,c){return d[0]-c[0]
}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])
})
},e.prototype.process=function(){var j,i=this.$scrollElement.scrollTop()+this.options.offset,o=this.getScrollHeight(),n=this.options.offset+o-this.$scrollElement.height(),m=this.offsets,l=this.targets,k=this.activeTarget;
if(this.scrollHeight!=o&&this.refresh(),i>=n){return k!=(j=l[l.length-1])&&this.activate(j)
}if(k&&i<=m[0]){return k!=(j=l[0])&&this.activate(j)
}for(j=m.length;
j--;
){k!=l[j]&&i>=m[j]&&(!m[j+1]||i<=m[j+1])&&this.activate(l[j])
}},e.prototype.activate=function(a){this.activeTarget=a,f(this.selector).parentsUntil(this.options.target,".active").removeClass("active");
var j=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',i=f(j).parents("li").addClass("active");
i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")
};
var g=f.fn.scrollspy;
f.fn.scrollspy=h,f.fn.scrollspy.Constructor=e,f.fn.scrollspy.noConflict=function(){return f.fn.scrollspy=g,this
},f(window).on("load.bs.scrollspy.data-api",function(){f('[data-spy="scroll"]').each(function(){var a=f(this);
h.call(a,a.data())
})
})
}(jQuery),+function(f){function e(a){return this.each(function(){var c=f(this),b=c.data("bs.tab");
b||c.data("bs.tab",b=new h(this)),"string"==typeof a&&b[a]()
})
}var h=function(a){this.element=f(a)
};
h.VERSION="3.2.0",h.TRANSITION_DURATION=150,h.prototype.show=function(){var a=this.element,m=a.closest("ul:not(.dropdown-menu)"),l=a.data("target");
if(l||(l=a.attr("href"),l=l&&l.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var k=m.find(".active:last a")[0],j=f.Event("show.bs.tab",{relatedTarget:k});
if(a.trigger(j),!j.isDefaultPrevented()){var i=f(l);
this.activate(a.closest("li"),m),this.activate(i,i.parent(),function(){a.trigger({type:"shown.bs.tab",relatedTarget:k})
})
}}},h.prototype.activate=function(a,l,k){function j(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),a.addClass("active"),c?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu")&&a.closest("li.dropdown").addClass("active"),k&&k()
}var i=l.find("> .active"),c=k&&f.support.transition&&(i.length&&i.hasClass("fade")||!!l.find("> .fade").length);
i.length&&c?i.one("bsTransitionEnd",j).emulateTransitionEnd(h.TRANSITION_DURATION):j(),i.removeClass("in")
};
var g=f.fn.tab;
f.fn.tab=e,f.fn.tab.Constructor=h,f.fn.tab.noConflict=function(){return f.fn.tab=g,this
},f(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(a){a.preventDefault(),e.call(f(this),"show")
})
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.affix"),b="object"==typeof a&&a;
c||i.data("bs.affix",c=new h(this,b)),"string"==typeof a&&c[a]()
})
}var h=function(a,c){this.options=f.extend({},h.DEFAULTS,c),this.$target=f(this.options.target).on("scroll.bs.affix.data-api",f.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",f.proxy(this.checkPositionWithEventLoop,this)),this.$element=f(a),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()
};
h.VERSION="3.2.0",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,s,r,q){var p=this.$target.scrollTop(),o=this.$element.offset(),n=this.$target.height();
if(null!=r&&"top"==this.affixed){return r>p?"top":!1
}if("bottom"==this.affixed){return null!=r?p+this.unpin<=o.top?!1:"bottom":t-q>=p+n?!1:"bottom"
}var m=null==this.affixed,l=m?p:o.top,k=m?n:s;
return null!=r&&r>=l?"top":null!=q&&l+k>=t-q?"bottom":!1
},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(h.RESET).addClass("affix");
var d=this.$target.scrollTop(),c=this.$element.offset();
return this.pinnedOffset=c.top-d
},h.prototype.checkPositionWithEventLoop=function(){setTimeout(f.proxy(this.checkPosition,this),1)
},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var a=this.$element.height(),p=this.options.offset,o=p.top,n=p.bottom,m=f("body").height();
"object"!=typeof p&&(n=o=p),"function"==typeof o&&(o=p.top(this.$element)),"function"==typeof n&&(n=p.bottom(this.$element));
var l=this.getState(m,a,o,n);
if(this.affixed!=l){null!=this.unpin&&this.$element.css("top","");
var k="affix"+(l?"-"+l:""),c=f.Event(k+".bs.affix");
if(this.$element.trigger(c),c.isDefaultPrevented()){return
}this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(k).trigger(k.replace("affix","affixed")+".bs.affix")
}"bottom"==l&&this.$element.offset({top:m-a-n})
}};
var g=f.fn.affix;
f.fn.affix=e,f.fn.affix.Constructor=h,f.fn.affix.noConflict=function(){return f.fn.affix=g,this
},f(window).on("load",function(){f('[data-spy="affix"]').each(function(){var b=f(this),a=b.data();
a.offset=a.offset||{},a.offsetBottom&&(a.offset.bottom=a.offsetBottom),a.offsetTop&&(a.offset.top=a.offsetTop),e.call(b,a)
})
})
}(jQuery);
(function(a,b){if(typeof module!=="undefined"&&module.exports){module.exports=b(require("jquery"))
}else{if(typeof define==="function"&&define.amd){define(["jquery"],function(c){return b(c)
})
}else{b(a.jQuery)
}}}(this,function(b){var c=function(e,d){this.$element=b(e);
this.options=b.extend({},b.fn.typeahead.defaults,d);
this.matcher=this.options.matcher||this.matcher;
this.sorter=this.options.sorter||this.sorter;
this.select=this.options.select||this.select;
this.autoSelect=typeof this.options.autoSelect=="boolean"?this.options.autoSelect:true;
this.highlighter=this.options.highlighter||this.highlighter;
this.render=this.options.render||this.render;
this.updater=this.options.updater||this.updater;
this.displayText=this.options.displayText||this.displayText;
this.source=this.options.source;
this.delay=this.options.delay;
this.$menu=b(this.options.menu);
this.$appendTo=this.options.appendTo?b(this.options.appendTo):null;
this.shown=false;
this.listen();
this.showHintOnFocus=typeof this.options.showHintOnFocus=="boolean"?this.options.showHintOnFocus:false;
this.afterSelect=this.options.afterSelect;
this.addItem=false
};
c.prototype={constructor:c,select:function(){var e=this.$menu.find(".active").data("value");
this.$element.data("active",e);
if(this.autoSelect||e){var d=this.updater(e);
if(!d){d=""
}this.$element.val(this.displayText(d)||d).change();
this.afterSelect(d)
}return this.hide()
},updater:function(d){return d
},setSource:function(d){this.source=d
},show:function(){var f=b.extend({},this.$element.position(),{height:this.$element[0].offsetHeight}),e;
e=typeof this.options.scrollHeight=="function"?this.options.scrollHeight.call():this.options.scrollHeight;
var d;
if(this.shown){d=this.$menu
}else{if(this.$appendTo){d=this.$menu.appendTo(this.$appendTo)
}else{d=this.$menu.insertAfter(this.$element)
}}d.css({top:f.top+f.height+e,left:f.left}).show();
this.shown=true;
return this
},hide:function(){this.$menu.hide();
this.shown=false;
return this
},lookup:function(e){var d;
if(typeof(e)!="undefined"&&e!==null){this.query=e
}else{this.query=this.$element.val()||""
}if(this.query.length<this.options.minLength&&!this.options.showHintOnFocus){return this.shown?this.hide():this
}var f=b.proxy(function(){if(b.isFunction(this.source)){this.source(this.query,b.proxy(this.process,this))
}else{if(this.source){this.process(this.source)
}}},this);
clearTimeout(this.lookupWorker);
this.lookupWorker=setTimeout(f,this.delay)
},process:function(d){var e=this;
d=b.grep(d,function(f){return e.matcher(f)
});
d=this.sorter(d);
if(!d.length&&!this.options.addItem){return this.shown?this.hide():this
}if(d.length>0){this.$element.data("active",d[0])
}else{this.$element.data("active",null)
}if(this.options.addItem){d.push(this.options.addItem)
}if(this.options.items=="all"){return this.render(d).show()
}else{return this.render(d.slice(0,this.options.items)).show()
}},matcher:function(e){var d=this.displayText(e);
return ~d.toLowerCase().indexOf(this.query.toLowerCase())
},sorter:function(f){var g=[],e=[],d=[],i;
while((i=f.shift())){var h=this.displayText(i);
if(!h.toLowerCase().indexOf(this.query.toLowerCase())){g.push(i)
}else{if(~h.indexOf(this.query)){e.push(i)
}else{d.push(i)
}}}return g.concat(e,d)
},highlighter:function(m){var g=b("<div></div>");
var j=this.query;
var f=m.toLowerCase().indexOf(j.toLowerCase());
var h,d,e,k,l;
h=j.length;
if(h===0){return g.text(m).html()
}while(f>-1){d=m.substr(0,f);
e=m.substr(f,h);
k=m.substr(f+h);
l=b("<strong></strong>").text(e);
g.append(document.createTextNode(d)).append(l);
m=k;
f=m.toLowerCase().indexOf(j.toLowerCase())
}return g.append(document.createTextNode(m)).html()
},render:function(e){var g=this;
var d=this;
var f=false;
var i=[];
var h=g.options.separator;
b.each(e,function(j,k){if(j>0&&k[h]!==e[j-1][h]){i.push({__type:"divider"})
}if(k[h]&&(j===0||k[h]!==e[j-1][h])){i.push({__type:"category",name:k[h]})
}i.push(k)
});
e=b(i).map(function(j,k){if((k.__type||false)=="category"){return b(g.options.headerHtml).text(k.name)[0]
}if((k.__type||false)=="divider"){return b(g.options.headerDivider)[0]
}var l=d.displayText(k);
j=b(g.options.item).data("value",k);
j.find("a").html(g.highlighter(l,k));
if(l==d.$element.val()){j.addClass("active");
d.$element.data("active",k);
f=true
}return j[0]
});
if(this.autoSelect&&!f){e.filter(":not(.dropdown-header)").first().addClass("active");
this.$element.data("active",e.first().data("value"))
}this.$menu.html(e);
return this
},displayText:function(d){return typeof d!=="undefined"&&typeof d.name!="undefined"&&d.name||d
},next:function(e){var f=this.$menu.find(".active").removeClass("active"),d=f.next();
if(!d.length){d=b(this.$menu.find("li")[0])
}d.addClass("active")
},prev:function(e){var f=this.$menu.find(".active").removeClass("active"),d=f.prev();
if(!d.length){d=this.$menu.find("li").last()
}d.addClass("active")
},listen:function(){this.$element.on("focus",b.proxy(this.focus,this)).on("blur",b.proxy(this.blur,this)).on("keypress",b.proxy(this.keypress,this)).on("keyup",b.proxy(this.keyup,this));
if(this.eventSupported("keydown")){this.$element.on("keydown",b.proxy(this.keydown,this))
}this.$menu.on("click",b.proxy(this.click,this)).on("mouseenter","li",b.proxy(this.mouseenter,this)).on("mouseleave","li",b.proxy(this.mouseleave,this))
},destroy:function(){this.$element.data("typeahead",null);
this.$element.data("active",null);
this.$element.off("focus").off("blur").off("keypress").off("keyup");
if(this.eventSupported("keydown")){this.$element.off("keydown")
}this.$menu.remove()
},eventSupported:function(d){var e=d in this.$element;
if(!e){this.$element.setAttribute(d,"return;");
e=typeof this.$element[d]==="function"
}return e
},move:function(d){if(!this.shown){return
}switch(d.keyCode){case 9:case 13:case 27:d.preventDefault();
break;
case 38:if(d.shiftKey){return
}d.preventDefault();
this.prev();
break;
case 40:if(d.shiftKey){return
}d.preventDefault();
this.next();
break
}},keydown:function(d){this.suppressKeyPressRepeat=~b.inArray(d.keyCode,[40,38,9,13,27]);
if(!this.shown&&d.keyCode==40){this.lookup()
}else{this.move(d)
}},keypress:function(d){if(this.suppressKeyPressRepeat){return
}this.move(d)
},keyup:function(d){switch(d.keyCode){case 40:case 38:case 16:case 17:case 18:break;
case 9:case 13:if(!this.shown){return
}this.select();
break;
case 27:if(!this.shown){return
}this.hide();
break;
default:this.lookup()
}d.preventDefault()
},focus:function(d){if(!this.focused){this.focused=true;
if(this.options.showHintOnFocus){this.lookup("")
}}},blur:function(d){this.focused=false;
if(!this.mousedover&&this.shown){this.hide()
}},click:function(d){d.preventDefault();
this.select();
this.$element.focus();
this.hide()
},mouseenter:function(d){this.mousedover=true;
this.$menu.find(".active").removeClass("active");
b(d.currentTarget).addClass("active")
},mouseleave:function(d){this.mousedover=false;
if(!this.focused&&this.shown){this.hide()
}}};
var a=b.fn.typeahead;
b.fn.typeahead=function(e){var d=arguments;
if(typeof e=="string"&&e=="getActive"){return this.data("active")
}return this.each(function(){var h=b(this),g=h.data("typeahead"),f=typeof e=="object"&&e;
if(!g){h.data("typeahead",(g=new c(this,f)))
}if(typeof e=="string"&&g[e]){if(d.length>1){g[e].apply(g,Array.prototype.slice.call(d,1))
}else{g[e]()
}}})
};
b.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu" role="listbox"></ul>',item:'<li><a class="dropdown-item" href="#" role="option"></a></li>',minLength:1,scrollHeight:0,autoSelect:true,afterSelect:b.noop,addItem:false,delay:0,separator:"category",headerHtml:'<li class="dropdown-header"></li>',headerDivider:'<li class="divider" role="separator"></li>'};
b.fn.typeahead.Constructor=c;
b.fn.typeahead.noConflict=function(){b.fn.typeahead=a;
return this
};
b(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(f){var d=b(this);
if(d.data("typeahead")){return
}d.typeahead(d.data())
})
}));
!function(d){function f(){return new Date(Date.UTC.apply(Date,arguments))
}function b(){var g=new Date();
return f(g.getUTCFullYear(),g.getUTCMonth(),g.getUTCDate())
}var a=function(h,g){var i=this;
this.element=d(h);
this.container=this.element.closest('[role="main"]');
this.language=g.language||this.element.data("date-language")||"en";
this.language=this.language in e?this.language:"en";
this.format=c.parseFormat(g.format||this.element.data("date-format")||"mm/dd/yyyy");
this.picker=d(c.template).appendTo(this.container).on({click:d.proxy(this.click,this)});
this.isInput=this.element.is("input");
this.component=this.element.is(".date")?this.element.find(".add-on"):false;
this.hasInput=this.component&&this.element.find("input").length;
if(this.component&&this.component.length===0){this.component=false
}if(this.isInput){this.element.on({focus:d.proxy(this.show,this),keyup:d.proxy(this.update,this),keydown:d.proxy(this.keydown,this)})
}else{if(this.component&&this.hasInput){this.element.find("input").on({focus:d.proxy(this.show,this),keyup:d.proxy(this.update,this),keydown:d.proxy(this.keydown,this)});
this.component.on("click",d.proxy(this.show,this))
}else{this.element.on("click",d.proxy(this.show,this))
}}d(document).on("mousedown",function(j){if(d(j.target).closest(".datepicker").length==0){i.hide()
}});
this.autoclose=false;
if("autoclose" in g){this.autoclose=g.autoclose
}else{if("dateAutoclose" in this.element.data()){this.autoclose=this.element.data("date-autoclose")
}}this.keyboardNavigation=true;
if("keyboardNavigation" in g){this.keyboardNavigation=g.keyboardNavigation
}else{if("dateKeyboardNavigation" in this.element.data()){this.keyboardNavigation=this.element.data("date-keyboard-navigation")
}}switch(g.startView||this.element.data("date-start-view")){case 2:case"decade":this.viewMode=this.startViewMode=2;
break;
case 1:case"year":this.viewMode=this.startViewMode=1;
break;
case 0:case"month":default:this.viewMode=this.startViewMode=0;
break
}this.todayBtn=(g.todayBtn||this.element.data("date-today-btn")||false);
this.todayHighlight=(g.todayHighlight||this.element.data("date-today-highlight")||false);
this.weekStart=((g.weekStart||this.element.data("date-weekstart")||e[this.language].weekStart||0)%7);
this.weekEnd=((this.weekStart+6)%7);
this.startDate=-Infinity;
this.endDate=Infinity;
this.setStartDate(g.startDate||this.element.data("date-startdate"));
this.setEndDate(g.endDate||this.element.data("date-enddate"));
this.fillDow();
this.fillMonths();
this.update();
this.showMode()
};
a.prototype={constructor:a,show:function(g){this.picker.show();
this.height=this.component?this.component.outerHeight():this.element.outerHeight();
this.update();
this.place();
d(window).on("resize",d.proxy(this.place,this));
if(g){g.stopPropagation();
g.preventDefault()
}this.element.trigger({type:"show",date:this.date})
},hide:function(g){this.picker.hide();
d(window).off("resize",this.place);
this.viewMode=this.startViewMode;
this.showMode();
if(!this.isInput){d(document).off("mousedown",this.hide)
}if(g&&g.currentTarget.value){this.setValue()
}this.element.trigger({type:"hide",date:this.date})
},getDate:function(){var g=this.getUTCDate();
return new Date(g.getTime()+(g.getTimezoneOffset()*60000))
},getUTCDate:function(){return this.date
},setDate:function(g){this.setUTCDate(new Date(g.getTime()-(g.getTimezoneOffset()*60000)))
},setUTCDate:function(g){this.date=g;
this.setValue()
},setValue:function(){var g=c.formatDate(this.date,this.format,this.language);
if(!this.isInput){if(this.component){this.element.find("input").prop("value",g)
}this.element.data("date",g)
}else{this.element.prop("value",g)
}},setStartDate:function(g){this.startDate=g||-Infinity;
if(this.startDate!==-Infinity){this.startDate=c.parseDate(this.startDate,this.format,this.language)
}this.update();
this.updateNavArrows()
},setEndDate:function(g){this.endDate=g||Infinity;
if(this.endDate!==Infinity){this.endDate=c.parseDate(this.endDate,this.format,this.language)
}this.update();
this.updateNavArrows()
},place:function(){var h=parseInt(this.element.parents().filter(function(){return d(this).css("z-index")!="auto"
}).first().css("z-index"))+10;
var g=this.component?this.component.offset():this.element.offset();
this.container.css({position:"relative"});
this.picker.css({top:(g.top+this.height)-this.container.position().top,left:g.left-this.container.position().left,zIndex:h})
},update:function(){this.date=c.parseDate(this.isInput?this.element.prop("value"):this.element.data("date")||this.element.find("input").prop("value"),this.format,this.language);
if(this.date<this.startDate){this.viewDate=new Date(this.startDate)
}else{if(this.date>this.endDate){this.viewDate=new Date(this.endDate)
}else{this.viewDate=new Date(this.date)
}}this.fill()
},fillDow:function(){var g=this.weekStart;
var h="<tr>";
while(g<this.weekStart+7){h+='<th class="dow">'+e[this.language].daysMin[(g++)%7]+"</th>"
}h+="</tr>";
this.picker.find(".datepicker-days thead").append(h)
},fillMonths:function(){var h="";
var g=0;
while(g<12){h+='<span class="month">'+e[this.language].monthsShort[g++]+"</span>"
}this.picker.find(".datepicker-months td").html(h)
},fill:function(){var u=new Date(this.viewDate),m=u.getUTCFullYear(),v=u.getUTCMonth(),o=this.startDate!==-Infinity?this.startDate.getUTCFullYear():-Infinity,s=this.startDate!==-Infinity?this.startDate.getUTCMonth():-Infinity,j=this.endDate!==Infinity?this.endDate.getUTCFullYear():Infinity,p=this.endDate!==Infinity?this.endDate.getUTCMonth():Infinity,k=this.date.valueOf(),t=new Date();
this.picker.find(".datepicker-days thead th:eq(1)").text(e[this.language].months[v]+" "+m);
this.picker.find("tfoot th.today").text(e[this.language].today).toggle(this.todayBtn);
this.updateNavArrows();
this.fillMonths();
var x=f(m,v-1,28,0,0,0,0),r=c.getDaysInMonth(x.getUTCFullYear(),x.getUTCMonth());
x.setUTCDate(r);
x.setUTCDate(r-(x.getUTCDay()-this.weekStart+7)%7);
var g=new Date(x);
g.setUTCDate(g.getUTCDate()+42);
g=g.valueOf();
var l=[];
var n;
while(x.valueOf()<g){if(x.getUTCDay()==this.weekStart){l.push("<tr>")
}n="";
if(x.getUTCFullYear()<m||(x.getUTCFullYear()==m&&x.getUTCMonth()<v)){n+=" old"
}else{if(x.getUTCFullYear()>m||(x.getUTCFullYear()==m&&x.getUTCMonth()>v)){n+=" new"
}}if(this.todayHighlight&&x.getUTCFullYear()==t.getFullYear()&&x.getUTCMonth()==t.getMonth()&&x.getUTCDate()==t.getDate()){n+=" today"
}if(x.valueOf()==k){n+=" active"
}if(x.valueOf()<this.startDate||x.valueOf()>this.endDate){n+=" disabled"
}l.push('<td class="day'+n+'">'+x.getUTCDate()+"</td>");
if(x.getUTCDay()==this.weekEnd){l.push("</tr>")
}x.setUTCDate(x.getUTCDate()+1)
}this.picker.find(".datepicker-days tbody").empty().append(l.join(""));
var y=this.date.getUTCFullYear();
var h=this.picker.find(".datepicker-months").find("th:eq(1)").text(m).end().find("span").removeClass("active");
if(y==m){h.eq(this.date.getUTCMonth()).addClass("active")
}if(m<o||m>j){h.addClass("disabled")
}if(m==o){h.slice(0,s).addClass("disabled")
}if(m==j){h.slice(p+1).addClass("disabled")
}l="";
m=parseInt(m/10,10)*10;
var w=this.picker.find(".datepicker-years").find("th:eq(1)").text(m+"-"+(m+9)).end().find("td");
m-=1;
for(var q=-1;
q<11;
q++){l+='<span class="year'+(q==-1||q==10?" old":"")+(y==m?" active":"")+(m<o||m>j?" disabled":"")+'">'+m+"</span>";
m+=1
}w.html(l)
},updateNavArrows:function(){var i=new Date(this.viewDate),g=i.getUTCFullYear(),h=i.getUTCMonth();
switch(this.viewMode){case 0:if(this.startDate!==-Infinity&&g<=this.startDate.getUTCFullYear()&&h<=this.startDate.getUTCMonth()){this.picker.find(".prev").css({visibility:"hidden"})
}else{this.picker.find(".prev").css({visibility:"visible"})
}if(this.endDate!==Infinity&&g>=this.endDate.getUTCFullYear()&&h>=this.endDate.getUTCMonth()){this.picker.find(".next").css({visibility:"hidden"})
}else{this.picker.find(".next").css({visibility:"visible"})
}break;
case 1:case 2:if(this.startDate!==-Infinity&&g<=this.startDate.getUTCFullYear()){this.picker.find(".prev").css({visibility:"hidden"})
}else{this.picker.find(".prev").css({visibility:"visible"})
}if(this.endDate!==Infinity&&g>=this.endDate.getUTCFullYear()){this.picker.find(".next").css({visibility:"hidden"})
}else{this.picker.find(".next").css({visibility:"visible"})
}break
}},click:function(m){m.stopPropagation();
m.preventDefault();
var l=d(m.target).closest("span, td, th");
if(l.length==1){switch(l[0].nodeName.toLowerCase()){case"th":switch(l[0].className){case"switch":this.showMode(1);
break;
case"prev":case"next":var i=c.modes[this.viewMode].navStep*(l[0].className=="prev"?-1:1);
switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,i);
break;
case 1:case 2:this.viewDate=this.moveYear(this.viewDate,i);
break
}this.fill();
break;
case"today":var h=new Date();
h.setUTCHours(0);
h.setUTCMinutes(0);
h.setUTCSeconds(0);
h.setUTCMilliseconds(0);
this.showMode(-2);
var n=this.todayBtn=="linked"?null:"view";
this._setDate(h,n);
break
}break;
case"span":if(!l.is(".disabled")){this.viewDate.setUTCDate(1);
if(l.is(".month")){var k=l.parent().find("span").index(l);
this.viewDate.setUTCMonth(k);
this.element.trigger({type:"changeMonth",date:this.viewDate})
}else{var j=parseInt(l.text(),10)||0;
this.viewDate.setUTCFullYear(j);
this.element.trigger({type:"changeYear",date:this.viewDate})
}this.showMode(-1);
this.fill()
}break;
case"td":if(l.is(".day")&&!l.is(".disabled")){var g=parseInt(l.text(),10)||1;
var j=this.viewDate.getUTCFullYear(),k=this.viewDate.getUTCMonth();
if(l.is(".old")){if(k==0){k=11;
j-=1
}else{k-=1
}}else{if(l.is(".new")){if(k==11){k=0;
j+=1
}else{k+=1
}}}this._setDate(f(j,k,g,0,0,0,0))
}break
}}},_setDate:function(g,i){if(!i||i=="date"){this.date=g
}if(!i||i=="view"){this.viewDate=g
}this.fill();
this.setValue();
this.element.trigger({type:"changeDate",date:this.date});
var h;
if(this.isInput){h=this.element
}else{if(this.component){h=this.element.find("input")
}}if(h){h.change();
if(this.autoclose){this.hide()
}}},moveMonth:function(g,h){if(!h){return g
}var l=new Date(g.valueOf()),p=l.getUTCDate(),m=l.getUTCMonth(),k=Math.abs(h),o,n;
h=h>0?1:-1;
if(k==1){n=h==-1?function(){return l.getUTCMonth()==m
}:function(){return l.getUTCMonth()!=o
};
o=m+h;
l.setUTCMonth(o);
if(o<0||o>11){o=(o+12)%12
}}else{for(var j=0;
j<k;
j++){l=this.moveMonth(l,h)
}o=l.getUTCMonth();
l.setUTCDate(p);
n=function(){return o!=l.getUTCMonth()
}
}while(n()){l.setUTCDate(--p);
l.setUTCMonth(o)
}return l
},moveYear:function(h,g){return this.moveMonth(h,g*12)
},dateWithinRange:function(g){return g>=this.startDate&&g<=this.endDate
},keydown:function(n){if(this.picker.is(":not(:visible)")){if(n.keyCode==27){this.show()
}return
}var j=false,i,h,m,g,l;
switch(n.keyCode){case 27:this.hide();
n.preventDefault();
break;
case 37:case 39:if(!this.keyboardNavigation){break
}i=n.keyCode==37?-1:1;
if(n.ctrlKey){g=this.moveYear(this.date,i);
l=this.moveYear(this.viewDate,i)
}else{if(n.shiftKey){g=this.moveMonth(this.date,i);
l=this.moveMonth(this.viewDate,i)
}else{g=new Date(this.date);
g.setUTCDate(this.date.getUTCDate()+i);
l=new Date(this.viewDate);
l.setUTCDate(this.viewDate.getUTCDate()+i)
}}if(this.dateWithinRange(g)){this.date=g;
this.viewDate=l;
this.setValue();
this.update();
n.preventDefault();
j=true
}break;
case 38:case 40:if(!this.keyboardNavigation){break
}i=n.keyCode==38?-1:1;
if(n.ctrlKey){g=this.moveYear(this.date,i);
l=this.moveYear(this.viewDate,i)
}else{if(n.shiftKey){g=this.moveMonth(this.date,i);
l=this.moveMonth(this.viewDate,i)
}else{g=new Date(this.date);
g.setUTCDate(this.date.getUTCDate()+i*7);
l=new Date(this.viewDate);
l.setUTCDate(this.viewDate.getUTCDate()+i*7)
}}if(this.dateWithinRange(g)){this.date=g;
this.viewDate=l;
this.setValue();
this.update();
n.preventDefault();
j=true
}break;
case 13:this.hide();
n.preventDefault();
break;
case 9:this.hide();
break
}if(j){this.element.trigger({type:"changeDate",date:this.date});
var k;
if(this.isInput){k=this.element
}else{if(this.component){k=this.element.find("input")
}}if(k){k.change()
}}},showMode:function(g){if(g){this.viewMode=Math.max(0,Math.min(2,this.viewMode+g))
}this.picker.find(">div").hide().filter(".datepicker-"+c.modes[this.viewMode].clsName).show();
this.updateNavArrows()
}};
d.fn.datepicker=function(h){var g=Array.apply(null,arguments);
g.shift();
return this.each(function(){var k=d(this),j=k.data("datepicker"),i=typeof h=="object"&&h;
if(!j){k.data("datepicker",(j=new a(this,d.extend({},d.fn.datepicker.defaults,i))))
}if(typeof h=="string"&&typeof j[h]=="function"){j[h].apply(j,g)
}})
};
d.fn.datepicker.defaults={};
d.fn.datepicker.Constructor=a;
var e=d.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today"}};
var c={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(g){return(((g%4===0)&&(g%100!==0))||(g%400===0))
},getDaysInMonth:function(g,h){return[31,(c.isLeapYear(g)?29:28),31,30,31,30,31,31,30,31,30,31][h]
},validParts:/dd?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[-`{-~\t\n\r]+/g,parseFormat:function(i){var g=i.replace(this.validParts,"\0").split("\0"),h=i.match(this.validParts);
if(!g||!g.length||!h||h.length==0){throw new Error("Invalid date format.")
}return{separators:g,parts:h}
},parseDate:function(k,t,n){if(k instanceof Date){return k
}if(/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(k)){var v=/([-+]\d+)([dmwy])/,m=k.match(/([-+]\d+)([dmwy])/g),g,l;
k=new Date();
for(var o=0;
o<m.length;
o++){g=v.exec(m[o]);
l=parseInt(g[1]);
switch(g[2]){case"d":k.setUTCDate(k.getUTCDate()+l);
break;
case"m":k=a.prototype.moveMonth.call(a.prototype,k,l);
break;
case"w":k.setUTCDate(k.getUTCDate()+l*7);
break;
case"y":k=a.prototype.moveYear.call(a.prototype,k,l);
break
}}return f(k.getUTCFullYear(),k.getUTCMonth(),k.getUTCDate(),0,0,0)
}var m=k&&k.match(this.nonpunctuation)||[],k=new Date(),q={},r=["yyyy","yy","M","MM","m","mm","d","dd"],u={yyyy:function(s,i){return s.setUTCFullYear(i)
},yy:function(s,i){return s.setUTCFullYear(2000+i)
},m:function(s,i){i-=1;
while(i<0){i+=12
}i%=12;
s.setUTCMonth(i);
while(s.getUTCMonth()!=i){s.setUTCDate(s.getUTCDate()-1)
}return s
},d:function(s,i){return s.setUTCDate(i)
}},j,p,g;
u.M=u.MM=u.mm=u.m;
u.dd=u.d;
k=f(k.getUTCFullYear(),k.getUTCMonth(),k.getUTCDate(),0,0,0);
if(m.length==t.parts.length){for(var o=0,h=t.parts.length;
o<h;
o++){j=parseInt(m[o],10);
g=t.parts[o];
if(isNaN(j)){switch(g){case"MM":p=d(e[n].months).filter(function(){var i=this.slice(0,m[o].length),s=m[o].slice(0,i.length);
return i==s
});
j=d.inArray(p[0],e[n].months)+1;
break;
case"M":p=d(e[n].monthsShort).filter(function(){var i=this.slice(0,m[o].length),s=m[o].slice(0,i.length);
return i==s
});
j=d.inArray(p[0],e[n].monthsShort)+1;
break
}}q[g]=j
}for(var o=0,w;
o<r.length;
o++){w=r[o];
if(w in q){u[w](k,q[w])
}}}return k
},formatDate:function(g,l,n){var m={d:g.getUTCDate(),m:g.getUTCMonth()+1,M:e[n].monthsShort[g.getUTCMonth()],MM:e[n].months[g.getUTCMonth()],yy:g.getUTCFullYear().toString().substring(2),yyyy:g.getUTCFullYear()};
m.dd=(m.d<10?"0":"")+m.d;
m.mm=(m.m<10?"0":"")+m.m;
var g=[],k=d.extend([],l.separators);
for(var j=0,h=l.parts.length;
j<h;
j++){if(k.length){g.push(k.shift())
}g.push(m[l.parts[j]])
}return g.join("")
},headTemplate:'<thead><tr><th class="prev"><i class="glyphicon glyphicon-chevron-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="glyphicon glyphicon-chevron-right"/></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};
c.template='<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">'+c.headTemplate+"<tbody></tbody>"+c.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+c.headTemplate+c.contTemplate+c.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+c.headTemplate+c.contTemplate+c.footTemplate+"</table></div></div>"
}(window.jQuery);
/*! 
 * jQuery Bootgrid v1.1.3 - 10/21/2014
 * Copyright (c) 2014 Rafael Staib (http://www.jquery-bootgrid.com)
 * Licensed under MIT http://www.opensource.org/licenses/MIT
 */
(function(l,q,n){var t=".rs.jquery.bootgrid";
function i(J){var I=this;
function H(K){return I.identifier&&K[I.identifier]===J[I.identifier]
}if(!this.rows.contains(H)){this.rows.push(J);
return true
}return false
}function G(H){return(H)?l.extend({},this.cachedParams,{ctx:H}):this.cachedParams
}function s(){var I={current:this.current,rowCount:this.rowCount,sort:this.sort,searchPhrase:this.searchPhrase},H=this.options.post;
H=(l.isFunction(H))?H():H;
return this.options.requestHandler(l.extend(true,I,H))
}function p(H){return"."+l.trim(H).replace(/\s+/gm,".")
}function C(){var H=this.options.url;
return(l.isFunction(H))?H():H
}function F(){this.element.trigger("initialize"+t);
r.call(this);
this.selection=this.options.selection&&this.identifier!=null;
u.call(this);
D.call(this);
x.call(this);
d.call(this);
y.call(this);
g.call(this);
this.element.trigger("initialized"+t)
}function z(H){if(this.options.highlightRows){}}function B(H){return H.visible
}function r(){var I=this,J=this.element.find("thead > tr").first(),H=false;
J.children().each(function(){var M=l(this),L=M.data(),K={id:L.columnId,identifier:I.identifier==null&&L.identifier||false,converter:I.options.converters[L.converter||L.type]||I.options.converters.string,text:M.text(),align:L.align||"left",headerAlign:L.headerAlign||"left",cssClass:L.cssClass||"",headerCssClass:L.headerCssClass||"",title:L.title||"",formatter:I.options.formatters[L.formatter]||null,order:(!H&&(L.order==="asc"||L.order==="desc"))?L.order:null,searchable:!(L.searchable===false),sortable:!(L.sortable===false),visible:!(L.visible===false),html:!(L.html===true)};
I.columns.push(K);
if(K.order!=null){I.sort[K.id]=K.order
}if(K.identifier){I.identifier=K.id;
I.converter=K.converter
}if(!I.options.multiSort&&K.order!==null){H=true
}})
}function g(){var L=this,K=s.call(this),I=C.call(this);
if(this.options.ajax&&(I==null||typeof I!=="string"||I.length===0)){throw new Error("Url setting must be a none empty string or a function that returns one.")
}this.element._bgBusyAria(true).trigger("load"+t);
k.call(this);
function H(S){var P,R=new RegExp(L.searchPhrase,(L.options.caseSensitive)?"g":"gi");
for(var O=0;
O<L.columns.length;
O++){P=L.columns[O];
if(P.searchable&&P.visible&&P.converter.to(S[P.id]).search(R)>-1){return true
}}return false
}function N(P,O){L.currentRows=P;
L.total=O;
L.totalPages=Math.ceil(O/L.rowCount);
if(!L.options.keepSelection){L.selectedRows=[]
}h.call(L,P);
A.call(L);
j.call(L);
L.element._bgBusyAria(false).trigger("loaded"+t)
}if(this.options.ajax){if(L.xqr){L.xqr.abort()
}L.xqr=l.post(I,K,function(O){L.xqr=null;
if(typeof(O)==="string"){O=l.parseJSON(O)
}O=L.options.responseHandler(O);
L.current=O.current;
N(O.rows,O.total)
}).fail(function(O,R,P){L.xqr=null;
if(R!=="abort"){b.call(L);
L.element._bgBusyAria(false).trigger("loaded"+t)
}})
}else{var M=(this.searchPhrase.length>0)?this.rows.where(H):this.rows,J=M.length;
if(this.rowCount!==-1){M=M.page(this.current,this.rowCount)
}q.setTimeout(function(){N(M,J)
},10)
}}function u(){if(!this.options.ajax){var H=this,I=this.element.find("tbody > tr");
I.each(function(){var K=l(this),J=K.children("td"),L={};
l.each(H.columns,function(M,N){if(N.html==true&&N.sortable==true){L[N.id]=N.converter.from(J.eq(M).text())
}else{L[N.id]=N.converter.from(J.eq(M).html())
}});
i.call(H,L)
});
this.total=this.rows.length;
this.totalPages=(this.rowCount===-1)?1:Math.ceil(this.total/this.rowCount);
v.call(this)
}}function D(){var H=this.options.templates,I=(this.element.parent().hasClass(this.options.css.responsiveTable))?this.element.parent():this.element;
this.element.addClass(this.options.css.table);
if(this.element.children("tbody").length===0){this.element.append(H.body)
}if(this.options.navigation&1){this.header=l(H.header.resolve(G.call(this,{id:this.element._bgId()+"-header"})));
I.before(this.header)
}if(this.options.navigation&2){this.footer=l(H.footer.resolve(G.call(this,{id:this.element._bgId()+"-footer"})));
I.after(this.footer)
}}function y(){if(this.options.navigation!==0){var M=this.options.css,I=p(M.actions),K=this.header.find(I),H=this.footer.find(I);
if((K.length+H.length)>0){var N=this,O=this.options.templates,J=l(O.actions.resolve(G.call(this)));
if(this.options.ajax){var L=O.icon.resolve(G.call(this,{iconCss:M.iconRefresh})),P=l(O.actionButton.resolve(G.call(this,{content:L,text:this.options.labels.refresh}))).on("click"+t,function(R){R.stopPropagation();
N.current=1;
g.call(N)
});
J.append(P)
}e.call(this,J);
f.call(this,J);
o.call(this,K,J,1);
o.call(this,H,J,2)
}}}function f(L){if(this.options.columnSelection&&this.columns.length>1){var N=this,M=this.options.css,O=this.options.templates,P=O.icon.resolve(G.call(this,{iconCss:M.iconColumns})),J=l(O.actionDropDown.resolve(G.call(this,{content:P}))),I=p(M.dropDownItem),K=p(M.dropDownItemCheckbox),H=p(M.dropDownMenuItems);
l.each(this.columns,function(R,S){var T=l(O.actionDropDownCheckboxItem.resolve(G.call(N,{name:S.id,label:S.text,checked:S.visible}))).on("click"+t,I,function(X){X.stopPropagation();
var W=l(this),V=W.find(K);
if(!V.prop("disabled")){S.visible=V.prop("checked");
var U=N.columns.where(B).length>1;
W.parents(H).find(I+":has("+K+":checked)")._bgEnableAria(U).find(K)._bgEnableField(U);
N.element.find("tbody").empty();
x.call(N);
g.call(N)
}});
J.find(p(M.dropDownMenuItems)).append(T)
});
L.append(J)
}}function A(){if(this.options.navigation!==0){var H=p(this.options.css.infos),K=this.header.find(H),J=this.footer.find(H);
if((K.length+J.length)>0){var I=(this.current*this.rowCount),L=l(this.options.templates.infos.resolve(G.call(this,{end:(this.total===0||I===-1||I>this.total)?this.total:I,start:(this.total===0)?0:(I-this.rowCount+1),total:this.total})));
o.call(this,K,L,1);
o.call(this,J,L,2)
}}}function b(){var I=this.element.children("tbody").first(),H=this.options.templates,J=this.columns.where(B).length;
if(this.selection){J=J+1
}I.html(H.noResults.resolve(G.call(this,{columns:J})))
}function j(){if(this.options.navigation!==0){var K=p(this.options.css.pagination),S=this.header.find(K)._bgShowAria(this.rowCount!==-1),I=this.footer.find(K)._bgShowAria(this.rowCount!==-1);
if(this.rowCount!==-1&&(S.length+I.length)>0){var P=this.options.templates,R=this.current,O=this.totalPages,V=l(P.pagination.resolve(G.call(this))),L=O-R,H=(this.options.padding-R)*-1,U=((L>=this.options.padding)?Math.max(H,1):Math.max((H-this.options.padding+L),1)),J=this.options.padding*2+1,N=(O>=J)?J:O;
a.call(this,V,"first","&laquo;","first")._bgEnableAria(R>1);
a.call(this,V,"prev","Previous","prev")._bgEnableAria(R>1);
for(var M=0;
M<N;
M++){var T=M+U;
a.call(this,V,T,T,"page-"+T)._bgEnableAria()._bgSelectAria(T===R)
}if(N===0){a.call(this,V,1,1,"page-"+1)._bgEnableAria(false)._bgSelectAria()
}a.call(this,V,"next","Next","next")._bgEnableAria(O>R);
a.call(this,V,"last","&raquo;","last")._bgEnableAria(O>R);
o.call(this,S,V,1);
o.call(this,I,V,2)
}}}function a(M,H,O,I){var K=this,L=this.options.templates,J=this.options.css,N=G.call(this,{css:I,text:O,uri:"#"+H}),P=l(L.paginationItem.resolve(N)).on("click"+t,p(J.paginationButton),function(U){U.stopPropagation();
var T=l(this),R=T.parent();
if(!R.hasClass("active")&&!R.hasClass("disabled")){var S={first:1,prev:K.current-1,next:K.current+1,last:K.totalPages};
var V=T.attr("href").substr(1);
K.current=S[V]||+V;
g.call(K)
}T.trigger("blur")
});
M.append(P);
return P
}function e(K){var M=this,R=this.options.rowCount;
function S(T){return(T===-1)?M.options.labels.all:T
}if(l.isArray(R)){var L=this.options.css,N=this.options.templates,J=l(N.actionDropDown.resolve(G.call(this,{content:this.rowCount}))),H=p(L.dropDownMenu),I=p(L.dropDownMenuText),P=p(L.dropDownMenuItems),O=p(L.dropDownItemButton);
l.each(R,function(T,V){var U=l(N.actionDropDownItem.resolve(G.call(M,{text:S(V),uri:"#"+V})))._bgSelectAria(V===M.rowCount).on("click"+t,O,function(Y){Y.preventDefault();
var X=l(this),W=+X.attr("href").substr(1);
if(W!==M.rowCount){M.current=1;
M.rowCount=W;
X.parents(P).children().each(function(){var Z=l(this),aa=+Z.find(O).attr("href").substr(1);
Z._bgSelectAria(aa===W)
});
X.parents(H).find(I).text(S(W));
g.call(M)
}});
J.find(P).append(U)
});
K.append(J)
}}function h(R){if(R.length>0){var L=this,K=this.options.css,M=this.options.templates,H=this.element.children("tbody").first(),N=true,J="",P="",I="",O="";
l.each(R,function(S,V){P="";
I=' data-row-id="'+((L.identifier==null)?S:V[L.identifier])+'"';
O="";
if(L.selection){var T=(l.inArray(V[L.identifier],L.selectedRows)!==-1),U=M.select.resolve(G.call(L,{type:"checkbox",value:V[L.identifier],checked:T}));
P+=M.cell.resolve(G.call(L,{content:U,css:K.selectCell}));
N=(N&&T);
if(T){O+=K.selected;
I+=' aria-selected="true"'
}}l.each(L.columns,function(X,Y){if(Y.visible){var Z=(l.isFunction(Y.formatter))?Y.formatter.call(L,Y,V):Y.converter.to(V[Y.id]),W=(Y.cssClass.length>0)?" "+Y.cssClass:"",aa=(Y.title.length>0)?""+Y.title:"";
P+=M.cell.resolve(G.call(L,{content:(Z==null||Z==="")?"&nbsp;":Z,title:(aa==null||aa==="")?"":aa,css:((Y.align==="right")?K.right:(Y.align==="center")?K.center:K.left)+W}))
}});
if(O.length>0){I+=' class="'+O+'"'
}J+=M.row.resolve(G.call(L,{attr:I,cells:P}))
});
L.element.find("thead "+p(L.options.css.selectBox)).prop("checked",N);
H.html(J);
w.call(this,H)
}else{b.call(this)
}}function w(H){var J=this,I=p(this.options.css.selectBox);
if(this.selection){H.off("click"+t,I).on("click"+t,I,function(L){L.stopPropagation();
var K=l(this),M=J.converter.from(K.val());
if(K.prop("checked")){J.select([M])
}else{J.deselect([M])
}})
}H.off("click"+t,"> tr").on("click"+t,"> tr",function(L){L.stopPropagation();
var K=l(this),N=(J.identifier==null)?K.data("row-id"):J.converter.from(K.data("row-id")+""),M=(J.identifier==null)?J.currentRows[N]:J.currentRows.first(function(O){return O[J.identifier]===N
});
if(J.selection&&J.options.rowSelect){if(K.hasClass(J.options.css.selected)){J.deselect([N])
}else{J.select([N])
}}J.element.trigger("click"+t,[J.columns,M])
})
}function d(){if(this.options.navigation!==0){var K=this.options.css,I=p(K.search),J=this.header.find(I),O=this.footer.find(I);
if((J.length+O.length)>0){var L=this,M=this.options.templates,H=null,P="",N=p(K.searchField),S=l(M.search.resolve(G.call(this))),R=(S.is(N))?S:S.find(N);
R.on("keyup"+t,function(U){U.stopPropagation();
var T=l(this).val();
if(P!==T){P=T;
q.clearTimeout(H);
H=q.setTimeout(function(){L.search(T)
},250)
}});
o.call(this,J,S,1);
o.call(this,O,S,2)
}}}function x(){var N=this,O=this.element.find("thead > tr"),M=this.options.css,P=this.options.templates,K="",J=this.options.sorting;
if(this.selection){var R=(this.options.multiSelect)?P.select.resolve(G.call(N,{type:"checkbox",value:"all"})):"";
K+=P.rawHeaderCell.resolve(G.call(N,{content:R,css:M.selectCell}))
}l.each(this.columns,function(T,W){if(W.visible){var V=N.sort[W.id],X=((J&&V&&V==="asc")?M.iconUp:(J&&V&&V==="desc")?M.iconDown:""),U=P.icon.resolve(G.call(N,{iconCss:X})),Y=W.headerAlign,S=(W.headerCssClass.length>0)?" "+W.headerCssClass:"";
K+=P.headerCell.resolve(G.call(N,{column:W,icon:U,sortable:J&&W.sortable&&M.sortable||"",css:((Y==="right")?M.right:(Y==="center")?M.center:M.left)+S}))
}});
O.html(K);
if(J){var L=p(M.sortable),I=p(M.icon);
O.off("click"+t,L).on("click"+t,L,function(Y){Y.preventDefault();
var X=l(this),W=X.data("column-id")||X.parents("th").first().data("column-id"),V=N.sort[W],U=X.find(I);
if(!N.options.multiSort){X.parents("tr").first().find(I).removeClass(M.iconDown+" "+M.iconUp);
N.sort={}
}if(V&&V==="asc"){N.sort[W]="desc";
U.removeClass(M.iconUp).addClass(M.iconDown)
}else{if(V&&V==="desc"){if(N.options.multiSort){var S={};
for(var T in N.sort){if(T!==W){S[T]=N.sort[T]
}}N.sort=S;
U.removeClass(M.iconDown)
}else{N.sort[W]="asc";
U.removeClass(M.iconDown).addClass(M.iconUp)
}}else{N.sort[W]="asc";
U.addClass(M.iconUp)
}}v.call(N);
g.call(N)
})
}if(this.selection&&this.options.multiSelect){var H=p(M.selectBox);
O.off("click"+t,H).on("click"+t,H,function(S){S.stopPropagation();
if(l(this).prop("checked")){N.select()
}else{N.deselect()
}})
}}function o(J,I,H){if(this.options.navigation&H){J.each(function(K,L){l(L).before(I.clone(true)).remove()
})
}}function k(){var J=this.options.templates,L=this.element.children("thead").first(),I=this.element.children("tbody").first(),H=I.find("tr > td").first(),M=(this.element.height()-L.height())-(H.height()+20),K=this.columns.where(B).length;
if(this.selection){K=K+1
}I.html(J.loading.resolve(G.call(this,{columns:K})));
if(this.rowCount!==-1&&M>0){I.find("tr > td").css("padding","20px 0 "+M+"px")
}}function v(){var J=[];
function I(L,R,P){P=P||0;
var N=P+1,O=J[P];
function M(S){return(O.order==="asc")?S:S*-1
}return(L[O.id]>R[O.id])?M(1):(L[O.id]<R[O.id])?M(-1):(J.length>N)?I(L,R,N):0
}if(!this.options.ajax){var K=this;
for(var H in this.sort){if(this.options.multiSort||J.length===0){J.push({id:H,order:this.sort[H]})
}}if(J.length>0){this.rows.sort(I)
}}}var m=function(J,I){this.element=l(J);
this.origin=this.element.clone();
this.options=l.extend(true,{},m.defaults,this.element.data(),I);
var H=this.options.rowCount=this.element.data().rowCount||I.rowCount||this.options.rowCount;
this.columns=[];
this.current=1;
this.currentRows=[];
this.identifier=null;
this.selection=false;
this.converter=null;
this.rowCount=(l.isArray(H))?H[0]:H;
this.rows=[];
this.searchPhrase="";
this.selectedRows=[];
this.sort={};
this.total=0;
this.totalPages=0;
this.cachedParams={lbl:this.options.labels,css:this.options.css,ctx:{}};
this.header=null;
this.footer=null;
this.xqr=null
};
m.defaults={navigation:3,padding:2,columnSelection:true,rowCount:[10,25,50,-1],selection:false,multiSelect:false,rowSelect:false,keepSelection:false,highlightRows:false,sorting:true,multiSort:false,ajax:false,post:{},url:"",caseSensitive:true,requestHandler:function(H){return H
},responseHandler:function(H){return H
},converters:{numeric:{from:function(H){return +H
},to:function(H){return H+""
}},string:{from:function(H){return H
},to:function(H){return H
}}},css:{actions:"actions btn-group",center:"text-center",columnHeaderAnchor:"column-header-anchor",columnHeaderText:"text",dropDownItem:"dropdown-item",dropDownItemButton:"dropdown-item-button",dropDownItemCheckbox:"dropdown-item-checkbox",dropDownMenu:"dropdown btn-group",dropDownMenuItems:"dropdown-menu pull-right",dropDownMenuText:"dropdown-text",footer:"bootgrid-footer container-fluid",header:"bootgrid-header container-fluid",icon:"icon glyphicon",iconColumns:"glyphicon-th-list",iconDown:"glyphicon-chevron-down",iconRefresh:"glyphicon-refresh",iconUp:"glyphicon-chevron-up",infos:"infos",left:"text-left",pagination:"pagination",paginationButton:"button",responsiveTable:"table-responsive",right:"text-right",search:"search form-group",searchField:"search-field form-control",selectBox:"select-box",selectCell:"select-cell",selected:"active",sortable:"sortable",table:"bootgrid-table table"},formatters:{},labels:{all:"All",infos:"Showing {{ctx.start}} to {{ctx.end}} of {{ctx.total}} entries",loading:"Loading...",noResults:"No results found!",refresh:"Refresh",search:"Search"},templates:{actionButton:'<button class="btn btn-default" type="button" title="{{ctx.text}}">{{ctx.content}}</button>',actionDropDown:'<div class="{{css.dropDownMenu}}"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span class="{{css.dropDownMenuText}}">{{ctx.content}}</span> <span class="caret"></span></button><ul class="{{css.dropDownMenuItems}}" role="menu"></ul></div>',actionDropDownItem:'<li><a href="{{ctx.uri}}" class="{{css.dropDownItem}} {{css.dropDownItemButton}}">{{ctx.text}}</a></li>',actionDropDownCheckboxItem:'<li><label class="{{css.dropDownItem}}"><input name="{{ctx.name}}" type="checkbox" value="1" class="{{css.dropDownItemCheckbox}}" {{ctx.checked}} /> {{ctx.label}}</label></li>',actions:'<div class="{{css.actions}}"></div>',body:"<tbody></tbody>",cell:'<td title="{{ctx.title}}" class="{{ctx.css}}">{{ctx.content}}</td>',footer:'<div id="{{ctx.id}}" class="{{css.footer}}"><div class="row"><div class="col-sm-6"><p class="{{css.pagination}}"></p></div><div class="col-sm-6 infoBar"><p class="{{css.infos}}"></p></div></div></div>',header:'<div id="{{ctx.id}}" class="{{css.header}}"><div class="row"><div class="col-sm-12 actionBar"><p class="{{css.search}}"></p><p class="{{css.actions}}"></p></div></div></div>',headerCell:'<th data-column-id="{{ctx.column.id}}" class="{{ctx.css}}"><a href="javascript:void(0);" class="{{css.columnHeaderAnchor}} {{ctx.sortable}}"><span class="{{css.columnHeaderText}}">{{ctx.column.text}}</span>{{ctx.icon}}</a></th>',icon:'<span class="{{css.icon}} {{ctx.iconCss}}"></span>',infos:'<div class="{{css.infos}}">{{lbl.infos}}</div>',loading:'<tr><td colspan="{{ctx.columns}}" class="loading">{{lbl.loading}}</td></tr>',noResults:'<tr><td colspan="{{ctx.columns}}" class="no-results">{{lbl.noResults}}</td></tr>',pagination:'<ul class="{{css.pagination}}"></ul>',paginationItem:'<li class="{{ctx.css}}"><a href="{{ctx.uri}}" class="{{css.paginationButton}}">{{ctx.text}}</a></li>',rawHeaderCell:'<th class="{{ctx.css}}">{{ctx.content}}</th>',row:"<tr{{ctx.attr}}>{{ctx.cells}}</tr>",search:'<div class="{{css.search}}"><div class="input-group"><span class="{{css.icon}} input-group-addon glyphicon-search"></span> <input type="text" class="{{css.searchField}}" placeholder="{{lbl.search}}" /></div></div>',select:'<input name="select" type="{{ctx.type}}" class="{{css.selectBox}}" value="{{ctx.value}}" {{ctx.checked}} />'}};
m.prototype.append=function(J){if(this.options.ajax){}else{var H=[];
for(var I=0;
I<J.length;
I++){if(i.call(this,J[I])){H.push(J[I])
}}v.call(this);
z.call(this,H);
g.call(this);
this.element.trigger("appended"+t,[H])
}return this
};
m.prototype.clear=function(){if(this.options.ajax){}else{var H=l.extend([],this.rows);
this.rows=[];
this.current=1;
this.total=0;
g.call(this);
this.element.trigger("cleared"+t,[H])
}return this
};
m.prototype.destroy=function(){l(q).off(t);
if(this.options.navigation&1){this.header.remove()
}if(this.options.navigation&2){this.footer.remove()
}this.element.before(this.origin).remove();
return this
};
m.prototype.reload=function(){this.current=1;
g.call(this);
return this
};
m.prototype.remove=function(H){if(this.identifier!=null){var L=this;
if(this.options.ajax){}else{H=H||this.selectedRows;
var M,K=[];
for(var J=0;
J<H.length;
J++){M=H[J];
for(var I=0;
I<this.rows.length;
I++){if(this.rows[I][this.identifier]===M){K.push(this.rows[I]);
this.rows.splice(I,1);
break
}}}this.current=1;
g.call(this);
this.element.trigger("removed"+t,[K])
}}return this
};
m.prototype.search=function(H){if(this.searchPhrase!==H){this.current=1;
this.searchPhrase=H;
g.call(this)
}return this
};
m.prototype.select=function(H){if(this.selection){H=H||this.currentRows.propValues(this.identifier);
var M,I,L=[];
while(H.length>0&&!(!this.options.multiSelect&&L.length===1)){M=H.pop();
if(l.inArray(M,this.selectedRows)===-1){for(I=0;
I<this.currentRows.length;
I++){if(this.currentRows[I][this.identifier]===M){L.push(this.currentRows[I]);
this.selectedRows.push(M);
break
}}}}if(L.length>0){var J=p(this.options.css.selectBox),K=this.selectedRows.length>=this.currentRows.length;
I=0;
while(!this.options.keepSelection&&K&&I<this.currentRows.length){K=(l.inArray(this.currentRows[I++][this.identifier],this.selectedRows)!==-1)
}this.element.find("thead "+J).prop("checked",K);
if(!this.options.multiSelect){this.element.find("tbody > tr "+J+":checked").trigger("click"+t)
}for(I=0;
I<this.selectedRows.length;
I++){this.element.find('tbody > tr[data-row-id="'+this.selectedRows[I]+'"]').addClass(this.options.css.selected)._bgAria("selected","true").find(J).prop("checked",true)
}this.element.trigger("selected"+t,[L])
}}return this
};
m.prototype.deselect=function(H){if(this.selection){H=H||this.currentRows.propValues(this.identifier);
var M,J,L,I=[];
while(H.length>0){M=H.pop();
L=l.inArray(M,this.selectedRows);
if(L!==-1){for(J=0;
J<this.currentRows.length;
J++){if(this.currentRows[J][this.identifier]===M){I.push(this.currentRows[J]);
this.selectedRows.splice(L,1);
break
}}}}if(I.length>0){var K=p(this.options.css.selectBox);
this.element.find("thead "+K).prop("checked",false);
for(J=0;
J<I.length;
J++){this.element.find('tbody > tr[data-row-id="'+I[J][this.identifier]+'"]').removeClass(this.options.css.selected)._bgAria("selected","false").find(K).prop("checked",false)
}this.element.trigger("deselected"+t,[I])
}}return this
};
m.prototype.sort=function(I){var H=(I)?l.extend({},I):{};
if(H===this.sort){return this
}this.sort=H;
x.call(this);
v.call(this);
g.call(this);
return this
};
l.fn.extend({_bgAria:function(H,I){return this.attr("aria-"+H,I)
},_bgBusyAria:function(H){return(H==null||H)?this._bgAria("busy","true"):this._bgAria("busy","false")
},_bgRemoveAria:function(H){return this.removeAttr("aria-"+H)
},_bgEnableAria:function(H){return(H==null||H)?this.removeClass("disabled")._bgAria("disabled","false"):this.addClass("disabled")._bgAria("disabled","true")
},_bgEnableField:function(H){return(H==null||H)?this.removeAttr("disabled"):this.attr("disabled","disable")
},_bgShowAria:function(H){return(H==null||H)?this.show()._bgAria("hidden","false"):this.hide()._bgAria("hidden","true")
},_bgSelectAria:function(H){return(H==null||H)?this.addClass("active")._bgAria("selected","true"):this.removeClass("active")._bgAria("selected","false")
},_bgId:function(H){return(H)?this.attr("id",H):this.attr("id")
}});
if(!String.prototype.resolve){var E={checked:function(H){if(typeof H==="boolean"){return(H)?'checked="checked"':""
}return H
}};
String.prototype.resolve=function(J,I){var H=this;
l.each(J,function(K,N){if(N!=null&&typeof N!=="function"){if(typeof N==="object"){var L=(I)?l.extend([],I):[];
L.push(K);
H=H.resolve(N,L)+""
}else{if(E&&E[K]&&typeof E[K]==="function"){N=E[K](N)
}K=(I)?I.join(".")+"."+K:K;
var M=new RegExp("\\{\\{"+K+"\\}\\}","gm");
H=H.replace(M,(N.replace)?N.replace(/\$/gi,"&#36;"):N)
}}});
return H
}
}if(!Array.prototype.first){Array.prototype.first=function(J){for(var H=0;
H<this.length;
H++){var I=this[H];
if(J(I)){return I
}}return null
}
}if(!Array.prototype.contains){Array.prototype.contains=function(J){for(var H=0;
H<this.length;
H++){var I=this[H];
if(J(I)){return true
}}return false
}
}if(!Array.prototype.page){Array.prototype.page=function(K,I){var J=(K-1)*I,H=J+I;
return(this.length>J)?(this.length>H)?this.slice(J,H):this.slice(J):[]
}
}if(!Array.prototype.where){Array.prototype.where=function(K){var H=[];
for(var I=0;
I<this.length;
I++){var J=this[I];
if(K(J)){H.push(J)
}}return H
}
}if(!Array.prototype.propValues){Array.prototype.propValues=function(J){var H=[];
for(var I=0;
I<this.length;
I++){H.push(this[I][J])
}return H
}
}var c=l.fn.bootgrid;
l.fn.bootgrid=function(I){var H=Array.prototype.slice.call(arguments,1);
return this.each(function(){var L=l(this),J=L.data(t),K=typeof I==="object"&&I;
if(!J&&I==="destroy"){return
}if(!J){L.data(t,(J=new m(this,K)));
F.call(J)
}if(typeof I==="string"){return J[I].apply(J,H)
}})
};
l.fn.bootgrid.Constructor=m;
l.fn.bootgrid.noConflict=function(){l.fn.bootgrid=c;
return this
};
l('[data-toggle="bootgrid"]').bootgrid()
})(jQuery,window);
(function(f,d){var e=e||function(a){var n={element:null,dragger:null,disable:"none",addBodyClasses:true,hyperextensible:true,resistance:0.5,flickThreshold:50,transitionSpeed:0.3,easing:"ease",maxPosition:266,minPosition:-266,tapToClose:true,touchToDrag:true,slideIntent:40,minDragDistance:5},o={simpleStates:{opening:null,towards:null,hyperExtending:null,halfway:null,flick:null,translation:{absolute:0,relative:0,sinceDirectionChange:0,percentage:0}}},l={},p={hasTouch:(d.ontouchstart===null),eventType:function(g){var h={down:(p.hasTouch?"touchstart":"mousedown"),move:(p.hasTouch?"touchmove":"mousemove"),up:(p.hasTouch?"touchend":"mouseup"),out:(p.hasTouch?"touchcancel":"mouseout")};
return h[g]
},page:function(h,g){return(p.hasTouch&&g.touches.length&&g.touches[0])?g.touches[0]["page"+h]:g["page"+h]
},klass:{has:function(g,h){return(g.className).indexOf(h)!==-1
},add:function(g,h){if(!p.klass.has(g,h)&&n.addBodyClasses){g.className+=" "+h
}},remove:function(g,h){if(n.addBodyClasses){g.className=(g.className).replace(h,"").replace(/^\s+|\s+$/g,"")
}}},dispatchEvent:function(g){if(typeof l[g]==="function"){return l[g].call()
}},vendor:function(){var g=d.createElement("div"),i="webkit Moz O ms".split(" "),h;
for(h in i){if(typeof g.style[i[h]+"Transition"]!=="undefined"){return i[h]
}}},transitionCallback:function(){return(o.vendor==="Moz"||o.vendor==="ms")?"transitionend":o.vendor+"TransitionEnd"
},canTransform:function(){return typeof n.element.style[o.vendor+"Transform"]!=="undefined"
},deepExtend:function(h,i){var g;
for(g in i){if(i[g]&&i[g].constructor&&i[g].constructor===Object){h[g]=h[g]||{};
p.deepExtend(h[g],i[g])
}else{h[g]=i[g]
}}return h
},angleOfDrag:function(h,i){var j,g;
g=Math.atan2(-(o.startDragY-i),(o.startDragX-h));
if(g<0){g+=2*Math.PI
}j=Math.floor(g*(180/Math.PI)-180);
if(j<0&&j>-180){j=360-Math.abs(j)
}return Math.abs(j)
},events:{addEvent:function m(g,h,i){if(g.addEventListener){return g.addEventListener(h,i,false)
}else{if(g.attachEvent){return g.attachEvent("on"+h,i)
}}},removeEvent:function m(g,h,i){if(g.addEventListener){return g.removeEventListener(h,i,false)
}else{if(g.attachEvent){return g.detachEvent("on"+h,i)
}}},prevent:function(g){if(g.preventDefault){g.preventDefault()
}else{g.returnValue=false
}}},parentUntil:function(i,h){var g=typeof h==="string";
while(i.parentNode){if(g&&i.getAttribute&&i.getAttribute(h)){return i
}else{if(!g&&i===h){return i
}}i=i.parentNode
}return null
}},c={translate:{get:{matrix:function(i){if(!p.canTransform()){return parseInt(n.element.style.left,10)
}else{var g=f.getComputedStyle(n.element)[o.vendor+"Transform"].match(/\((.*)\)/),h=8;
if(g){g=g[1].split(",");
if(g.length===16){i+=h
}return parseInt(g[i],10)
}return 0
}}},easeCallback:function(){n.element.style[o.vendor+"Transition"]="";
o.translation=c.translate.get.matrix(4);
o.easing=false;
clearInterval(o.animatingInterval);
if(o.easingTo===0){p.klass.remove(d.body,"snapjs-right");
p.klass.remove(d.body,"snapjs-left")
}p.dispatchEvent("animated");
p.events.removeEvent(n.element,p.transitionCallback(),c.translate.easeCallback)
},easeTo:function(g){if(!p.canTransform()){o.translation=g;
c.translate.x(g)
}else{o.easing=true;
o.easingTo=g;
n.element.style[o.vendor+"Transition"]="all "+n.transitionSpeed+"s "+n.easing;
o.animatingInterval=setInterval(function(){p.dispatchEvent("animating")
},1);
p.events.addEvent(n.element,p.transitionCallback(),c.translate.easeCallback);
c.translate.x(g)
}if(g===0){n.element.style[o.vendor+"Transform"]=""
}},x:function(g){if((n.disable==="left"&&g>0)||(n.disable==="right"&&g<0)){return
}if(!n.hyperextensible){if(g===n.maxPosition||g>n.maxPosition){g=n.maxPosition
}else{if(g===n.minPosition||g<n.minPosition){g=n.minPosition
}}}g=parseInt(g,10);
if(isNaN(g)){g=0
}if(p.canTransform()){var h="translate3d("+g+"px, 0,0)";
n.element.style[o.vendor+"Transform"]=h
}else{n.element.style.width=(f.innerWidth||d.documentElement.clientWidth)+"px";
n.element.style.left=g+"px";
n.element.style.right=""
}}},drag:{listen:function(){o.translation=0;
o.easing=false;
p.events.addEvent(n.element,p.eventType("down"),c.drag.startDrag);
p.events.addEvent(n.element,p.eventType("move"),c.drag.dragging);
p.events.addEvent(n.element,p.eventType("up"),c.drag.endDrag)
},stopListening:function(){p.events.removeEvent(n.element,p.eventType("down"),c.drag.startDrag);
p.events.removeEvent(n.element,p.eventType("move"),c.drag.dragging);
p.events.removeEvent(n.element,p.eventType("up"),c.drag.endDrag)
},startDrag:function(j){var g=j.target?j.target:j.srcElement,h=p.parentUntil(g,"data-snap-ignore");
if(h){p.dispatchEvent("ignore");
return
}if(n.dragger){var i=p.parentUntil(g,n.dragger);
if(!i&&(o.translation!==n.minPosition&&o.translation!==n.maxPosition)){return
}}p.dispatchEvent("start");
n.element.style[o.vendor+"Transition"]="";
o.isDragging=true;
o.hasIntent=null;
o.intentChecked=false;
o.startDragX=p.page("X",j);
o.startDragY=p.page("Y",j);
o.dragWatchers={current:0,last:0,hold:0,state:""};
o.simpleStates={opening:null,towards:null,hyperExtending:null,halfway:null,flick:null,translation:{absolute:0,relative:0,sinceDirectionChange:0,percentage:0}}
},dragging:function(D){if(o.isDragging&&n.touchToDrag){var A=p.page("X",D),B=p.page("Y",D),C=o.translation,j=c.translate.get.matrix(4),k=A-o.startDragX,i=j>0,h=k,z;
if((o.intentChecked&&!o.hasIntent)){return
}if(n.addBodyClasses){if((j)>0){p.klass.add(d.body,"snapjs-left");
p.klass.remove(d.body,"snapjs-right")
}else{if((j)<0){p.klass.add(d.body,"snapjs-right");
p.klass.remove(d.body,"snapjs-left")
}}}if(o.hasIntent===false||o.hasIntent===null){var x=p.angleOfDrag(A,B),y=(x>=0&&x<=n.slideIntent)||(x<=360&&x>(360-n.slideIntent)),g=(x>=180&&x<=(180+n.slideIntent))||(x<=180&&x>=(180-n.slideIntent));
if(!g&&!y){o.hasIntent=false
}else{o.hasIntent=true
}o.intentChecked=true
}if((n.minDragDistance>=Math.abs(A-o.startDragX))||(o.hasIntent===false)){return
}p.events.prevent(D);
p.dispatchEvent("drag");
o.dragWatchers.current=A;
if(o.dragWatchers.last>A){if(o.dragWatchers.state!=="left"){o.dragWatchers.state="left";
o.dragWatchers.hold=A
}o.dragWatchers.last=A
}else{if(o.dragWatchers.last<A){if(o.dragWatchers.state!=="right"){o.dragWatchers.state="right";
o.dragWatchers.hold=A
}o.dragWatchers.last=A
}}if(i){if(n.maxPosition<j){z=(j-n.maxPosition)*n.resistance;
h=k-z
}o.simpleStates={opening:"left",towards:o.dragWatchers.state,hyperExtending:n.maxPosition<j,halfway:j>(n.maxPosition/2),flick:Math.abs(o.dragWatchers.current-o.dragWatchers.hold)>n.flickThreshold,translation:{absolute:j,relative:k,sinceDirectionChange:(o.dragWatchers.current-o.dragWatchers.hold),percentage:(j/n.maxPosition)*100}}
}else{if(n.minPosition>j){z=(j-n.minPosition)*n.resistance;
h=k-z
}o.simpleStates={opening:"right",towards:o.dragWatchers.state,hyperExtending:n.minPosition>j,halfway:j<(n.minPosition/2),flick:Math.abs(o.dragWatchers.current-o.dragWatchers.hold)>n.flickThreshold,translation:{absolute:j,relative:k,sinceDirectionChange:(o.dragWatchers.current-o.dragWatchers.hold),percentage:(j/n.minPosition)*100}}
}c.translate.x(h+C)
}},endDrag:function(g){if(o.isDragging){p.dispatchEvent("end");
var h=c.translate.get.matrix(4);
if(o.dragWatchers.current===0&&h!==0&&n.tapToClose){p.dispatchEvent("close");
p.events.prevent(g);
c.translate.easeTo(0);
o.isDragging=false;
o.startDragX=0;
return
}if(o.simpleStates.opening==="left"){if((o.simpleStates.halfway||o.simpleStates.hyperExtending||o.simpleStates.flick)){if(o.simpleStates.flick&&o.simpleStates.towards==="left"){c.translate.easeTo(0)
}else{if((o.simpleStates.flick&&o.simpleStates.towards==="right")||(o.simpleStates.halfway||o.simpleStates.hyperExtending)){c.translate.easeTo(n.maxPosition)
}}}else{c.translate.easeTo(0)
}}else{if(o.simpleStates.opening==="right"){if((o.simpleStates.halfway||o.simpleStates.hyperExtending||o.simpleStates.flick)){if(o.simpleStates.flick&&o.simpleStates.towards==="right"){c.translate.easeTo(0)
}else{if((o.simpleStates.flick&&o.simpleStates.towards==="left")||(o.simpleStates.halfway||o.simpleStates.hyperExtending)){c.translate.easeTo(n.minPosition)
}}}else{c.translate.easeTo(0)
}}}o.isDragging=false;
o.startDragX=p.page("X",g)
}}}},b=function(g){if(g.element){p.deepExtend(n,g);
o.vendor=p.vendor();
c.drag.listen()
}};
this.open=function(g){p.dispatchEvent("open");
p.klass.remove(d.body,"snapjs-expand-left");
p.klass.remove(d.body,"snapjs-expand-right");
if(g==="left"){o.simpleStates.opening="left";
o.simpleStates.towards="right";
p.klass.add(d.body,"snapjs-left");
p.klass.remove(d.body,"snapjs-right");
c.translate.easeTo(n.maxPosition)
}else{if(g==="right"){o.simpleStates.opening="right";
o.simpleStates.towards="left";
p.klass.remove(d.body,"snapjs-left");
p.klass.add(d.body,"snapjs-right");
c.translate.easeTo(n.minPosition)
}}};
this.close=function(){p.dispatchEvent("close");
c.translate.easeTo(0)
};
this.expand=function(h){var g=f.innerWidth||d.documentElement.clientWidth;
if(h==="left"){p.dispatchEvent("expandLeft");
p.klass.add(d.body,"snapjs-expand-left");
p.klass.remove(d.body,"snapjs-expand-right")
}else{p.dispatchEvent("expandRight");
p.klass.add(d.body,"snapjs-expand-right");
p.klass.remove(d.body,"snapjs-expand-left");
g*=-1
}c.translate.easeTo(g)
};
this.on=function(h,g){l[h]=g;
return this
};
this.off=function(g){if(l[g]){l[g]=false
}};
this.enable=function(){p.dispatchEvent("enable");
c.drag.listen()
};
this.disable=function(){p.dispatchEvent("disable");
c.drag.stopListening()
};
this.settings=function(g){p.deepExtend(n,g)
};
this.state=function(){var h,g=c.translate.get.matrix(4);
if(g===n.maxPosition){h="left"
}else{if(g===n.minPosition){h="right"
}else{h="closed"
}}return{state:h,info:o.simpleStates}
};
b(a)
};
if((typeof module!=="undefined")&&module.exports){module.exports=e
}if(typeof ender==="undefined"){this.Snap=e
}if((typeof define==="function")&&define.amd){define("snap",[],function(){return e
})
}}).call(this,window,document);
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports!=="undefined"){module.exports=a(require("jquery"))
}else{a(jQuery)
}}}(function(a){var b=window.Slick||{};
b=(function(){var c=0;
function d(g,h){var f=this,e;
f.defaults={accessibility:true,adaptiveHeight:false,appendArrows:a(g),appendDots:a(g),arrows:true,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(k,j){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(j+1)
},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",edgeFriction:0.35,fade:false,focusOnSelect:false,infinite:true,initialSlide:0,lazyLoad:"ondemand",mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:"window",responsive:null,rows:1,rtl:false,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1000};
f.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};
a.extend(f,f.initials);
f.activeBreakpoint=null;
f.animType=null;
f.animProp=null;
f.breakpoints=[];
f.breakpointSettings=[];
f.cssTransitions=false;
f.focussed=false;
f.interrupted=false;
f.hidden="hidden";
f.paused=true;
f.positionProp=null;
f.respondTo=null;
f.rowCount=1;
f.shouldClick=true;
f.$slider=a(g);
f.$slidesCache=null;
f.transformType=null;
f.transitionType=null;
f.visibilityChange="visibilitychange";
f.windowWidth=0;
f.windowTimer=null;
e=a(g).data("slick")||{};
f.options=a.extend({},f.defaults,h,e);
f.currentSlide=f.options.initialSlide;
f.originalSettings=f.options;
if(typeof document.mozHidden!=="undefined"){f.hidden="mozHidden";
f.visibilityChange="mozvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){f.hidden="webkitHidden";
f.visibilityChange="webkitvisibilitychange"
}}f.autoPlay=a.proxy(f.autoPlay,f);
f.autoPlayClear=a.proxy(f.autoPlayClear,f);
f.autoPlayIterator=a.proxy(f.autoPlayIterator,f);
f.changeSlide=a.proxy(f.changeSlide,f);
f.clickHandler=a.proxy(f.clickHandler,f);
f.selectHandler=a.proxy(f.selectHandler,f);
f.setPosition=a.proxy(f.setPosition,f);
f.swipeHandler=a.proxy(f.swipeHandler,f);
f.dragHandler=a.proxy(f.dragHandler,f);
f.keyHandler=a.proxy(f.keyHandler,f);
f.instanceUid=c++;
f.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;
f.registerBreakpoints();
f.init(true)
}return d
}());
b.prototype.activateADA=function(){var c=this;
c.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})
};
b.prototype.addSlide=b.prototype.slickAdd=function(c,e,f){var d=this;
if(typeof(e)==="boolean"){f=e;
e=null
}else{if(e<0||(e>=d.slideCount)){return false
}}d.unload();
if(typeof(e)==="number"){if(e===0&&d.$slides.length===0){a(c).appendTo(d.$slideTrack)
}else{if(f){a(c).insertBefore(d.$slides.eq(e))
}else{a(c).insertAfter(d.$slides.eq(e))
}}}else{if(f===true){a(c).prependTo(d.$slideTrack)
}else{a(c).appendTo(d.$slideTrack)
}}d.$slides=d.$slideTrack.children(this.options.slide);
d.$slideTrack.children(this.options.slide).detach();
d.$slideTrack.append(d.$slides);
d.$slides.each(function(g,h){a(h).attr("data-slick-index",g)
});
d.$slidesCache=d.$slides;
d.reinit()
};
b.prototype.animateHeight=function(){var d=this;
if(d.options.slidesToShow===1&&d.options.adaptiveHeight===true&&d.options.vertical===false){var c=d.$slides.eq(d.currentSlide).outerHeight(true);
d.$list.animate({height:c},d.options.speed)
}};
b.prototype.animateSlide=function(f,e){var d={},c=this;
c.animateHeight();
if(c.options.rtl===true&&c.options.vertical===false){f=-f
}if(c.transformsEnabled===false){if(c.options.vertical===false){c.$slideTrack.animate({left:f},c.options.speed,c.options.easing,e)
}else{c.$slideTrack.animate({top:f},c.options.speed,c.options.easing,e)
}}else{if(c.cssTransitions===false){if(c.options.rtl===true){c.currentLeft=-(c.currentLeft)
}a({animStart:c.currentLeft}).animate({animStart:f},{duration:c.options.speed,easing:c.options.easing,step:function(g){g=Math.ceil(g);
if(c.options.vertical===false){d[c.animType]="translate("+g+"px, 0px)";
c.$slideTrack.css(d)
}else{d[c.animType]="translate(0px,"+g+"px)";
c.$slideTrack.css(d)
}},complete:function(){if(e){e.call()
}}})
}else{c.applyTransition();
f=Math.ceil(f);
if(c.options.vertical===false){d[c.animType]="translate3d("+f+"px, 0px, 0px)"
}else{d[c.animType]="translate3d(0px,"+f+"px, 0px)"
}c.$slideTrack.css(d);
if(e){setTimeout(function(){c.disableTransition();
e.call()
},c.options.speed)
}}}};
b.prototype.getNavTarget=function(){var d=this,c=d.options.asNavFor;
if(c&&c!==null){c=a(c).not(d.$slider)
}return c
};
b.prototype.asNavFor=function(e){var d=this,c=d.getNavTarget();
if(c!==null&&typeof c==="object"){c.each(function(){var f=a(this).slick("getSlick");
if(!f.unslicked){f.slideHandler(e,true)
}})
}};
b.prototype.applyTransition=function(c){var d=this,e={};
if(d.options.fade===false){e[d.transitionType]=d.transformType+" "+d.options.speed+"ms "+d.options.cssEase
}else{e[d.transitionType]="opacity "+d.options.speed+"ms "+d.options.cssEase
}if(d.options.fade===false){d.$slideTrack.css(e)
}else{d.$slides.eq(c).css(e)
}};
b.prototype.autoPlay=function(){var c=this;
c.autoPlayClear();
if(c.slideCount>c.options.slidesToShow){c.autoPlayTimer=setInterval(c.autoPlayIterator,c.options.autoplaySpeed)
}};
b.prototype.autoPlayClear=function(){var c=this;
if(c.autoPlayTimer){clearInterval(c.autoPlayTimer)
}};
b.prototype.autoPlayIterator=function(){var c=this,d=c.currentSlide+c.options.slidesToScroll;
if(!c.paused&&!c.interrupted&&!c.focussed){if(c.options.infinite===false){if(c.direction===1&&(c.currentSlide+1)===(c.slideCount-1)){c.direction=0
}else{if(c.direction===0){d=c.currentSlide-c.options.slidesToScroll;
if(c.currentSlide-1===0){c.direction=1
}}}}c.slideHandler(d)
}};
b.prototype.buildArrows=function(){var c=this;
if(c.options.arrows===true){c.$prevArrow=a(c.options.prevArrow).addClass("slick-arrow");
c.$nextArrow=a(c.options.nextArrow).addClass("slick-arrow");
if(c.slideCount>c.options.slidesToShow){c.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
c.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
if(c.htmlExpr.test(c.options.prevArrow)){c.$prevArrow.prependTo(c.options.appendArrows)
}if(c.htmlExpr.test(c.options.nextArrow)){c.$nextArrow.appendTo(c.options.appendArrows)
}if(c.options.infinite!==true){c.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")
}}else{c.$prevArrow.add(c.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"})
}}};
b.prototype.buildDots=function(){var d=this,e,c;
if(d.options.dots===true&&d.slideCount>d.options.slidesToShow){d.$slider.addClass("slick-dotted");
c=a("<ul />").addClass(d.options.dotsClass);
for(e=0;
e<=d.getDotCount();
e+=1){c.append(a("<li />").append(d.options.customPaging.call(this,d,e)))
}d.$dots=c.appendTo(d.options.appendDots);
d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")
}};
b.prototype.buildOut=function(){var c=this;
c.$slides=c.$slider.children(c.options.slide+":not(.slick-cloned)").addClass("slick-slide");
c.slideCount=c.$slides.length;
c.$slides.each(function(d,e){a(e).attr("data-slick-index",d).data("originalStyling",a(e).attr("style")||"")
});
c.$slider.addClass("slick-slider");
c.$slideTrack=(c.slideCount===0)?a('<div class="slick-track"/>').appendTo(c.$slider):c.$slides.wrapAll('<div class="slick-track"/>').parent();
c.$list=c.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
c.$slideTrack.css("opacity",0);
if(c.options.centerMode===true||c.options.swipeToSlide===true){c.options.slidesToScroll=1
}a("img[data-lazy]",c.$slider).not("[src]").addClass("slick-loading");
c.setupInfinite();
c.buildArrows();
c.buildDots();
c.updateDots();
c.setSlideClasses(typeof c.currentSlide==="number"?c.currentSlide:0);
if(c.options.draggable===true){c.$list.addClass("draggable")
}};
b.prototype.buildRows=function(){var m=this,l,k,i,d,j,h,e;
d=document.createDocumentFragment();
h=m.$slider.children();
if(m.options.rows>1){e=m.options.slidesPerRow*m.options.rows;
j=Math.ceil(h.length/e);
for(l=0;
l<j;
l++){var f=document.createElement("div");
for(k=0;
k<m.options.rows;
k++){var n=document.createElement("div");
for(i=0;
i<m.options.slidesPerRow;
i++){var g=(l*e+((k*m.options.slidesPerRow)+i));
if(h.get(g)){n.appendChild(h.get(g))
}}f.appendChild(n)
}d.appendChild(f)
}m.$slider.empty().append(d);
m.$slider.children().children().children().css({width:(100/m.options.slidesPerRow)+"%",display:"inline-block"})
}};
b.prototype.checkResponsive=function(h,j){var k=this,i,c,e,f=false;
var g=k.$slider.width();
var d=window.innerWidth||a(window).width();
if(k.respondTo==="window"){e=d
}else{if(k.respondTo==="slider"){e=g
}else{if(k.respondTo==="min"){e=Math.min(d,g)
}}}if(k.options.responsive&&k.options.responsive.length&&k.options.responsive!==null){c=null;
for(i in k.breakpoints){if(k.breakpoints.hasOwnProperty(i)){if(k.originalSettings.mobileFirst===false){if(e<k.breakpoints[i]){c=k.breakpoints[i]
}}else{if(e>k.breakpoints[i]){c=k.breakpoints[i]
}}}}if(c!==null){if(k.activeBreakpoint!==null){if(c!==k.activeBreakpoint||j){k.activeBreakpoint=c;
if(k.breakpointSettings[c]==="unslick"){k.unslick(c)
}else{k.options=a.extend({},k.originalSettings,k.breakpointSettings[c]);
if(h===true){k.currentSlide=k.options.initialSlide
}k.refresh(h)
}f=c
}}else{k.activeBreakpoint=c;
if(k.breakpointSettings[c]==="unslick"){k.unslick(c)
}else{k.options=a.extend({},k.originalSettings,k.breakpointSettings[c]);
if(h===true){k.currentSlide=k.options.initialSlide
}k.refresh(h)
}f=c
}}else{if(k.activeBreakpoint!==null){k.activeBreakpoint=null;
k.options=k.originalSettings;
if(h===true){k.currentSlide=k.options.initialSlide
}k.refresh(h);
f=c
}}if(!h&&f!==false){k.$slider.trigger("breakpoint",[k,f])
}}};
b.prototype.changeSlide=function(g,j){var e=this,c=a(g.currentTarget),i,f,h;
if(c.is("a")){g.preventDefault()
}if(!c.is("li")){c=c.closest("li")
}h=(e.slideCount%e.options.slidesToScroll!==0);
i=h?0:(e.slideCount-e.currentSlide)%e.options.slidesToScroll;
switch(g.data.message){case"previous":f=i===0?e.options.slidesToScroll:e.options.slidesToShow-i;
if(e.slideCount>e.options.slidesToShow){e.slideHandler(e.currentSlide-f,false,j)
}break;
case"next":f=i===0?e.options.slidesToScroll:i;
if(e.slideCount>e.options.slidesToShow){e.slideHandler(e.currentSlide+f,false,j)
}break;
case"index":var d=g.data.index===0?0:g.data.index||c.index()*e.options.slidesToScroll;
e.slideHandler(e.checkNavigable(d),false,j);
c.children().trigger("focus");
break;
default:return
}};
b.prototype.checkNavigable=function(d){var c=this,e,f;
e=c.getNavigableIndexes();
f=0;
if(d>e[e.length-1]){d=e[e.length-1]
}else{for(var g in e){if(d<e[g]){d=f;
break
}f=e[g]
}}return d
};
b.prototype.cleanUpEvents=function(){var c=this;
if(c.options.dots&&c.$dots!==null){a("li",c.$dots).off("click.slick",c.changeSlide).off("mouseenter.slick",a.proxy(c.interrupt,c,true)).off("mouseleave.slick",a.proxy(c.interrupt,c,false))
}c.$slider.off("focus.slick blur.slick");
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow&&c.$prevArrow.off("click.slick",c.changeSlide);
c.$nextArrow&&c.$nextArrow.off("click.slick",c.changeSlide)
}c.$list.off("touchstart.slick mousedown.slick",c.swipeHandler);
c.$list.off("touchmove.slick mousemove.slick",c.swipeHandler);
c.$list.off("touchend.slick mouseup.slick",c.swipeHandler);
c.$list.off("touchcancel.slick mouseleave.slick",c.swipeHandler);
c.$list.off("click.slick",c.clickHandler);
a(document).off(c.visibilityChange,c.visibility);
c.cleanUpSlideEvents();
if(c.options.accessibility===true){c.$list.off("keydown.slick",c.keyHandler)
}if(c.options.focusOnSelect===true){a(c.$slideTrack).children().off("click.slick",c.selectHandler)
}a(window).off("orientationchange.slick.slick-"+c.instanceUid,c.orientationChange);
a(window).off("resize.slick.slick-"+c.instanceUid,c.resize);
a("[draggable!=true]",c.$slideTrack).off("dragstart",c.preventDefault);
a(window).off("load.slick.slick-"+c.instanceUid,c.setPosition);
a(document).off("ready.slick.slick-"+c.instanceUid,c.setPosition)
};
b.prototype.cleanUpSlideEvents=function(){var c=this;
c.$list.off("mouseenter.slick",a.proxy(c.interrupt,c,true));
c.$list.off("mouseleave.slick",a.proxy(c.interrupt,c,false))
};
b.prototype.cleanUpRows=function(){var d=this,c;
if(d.options.rows>1){c=d.$slides.children().children();
c.removeAttr("style");
d.$slider.empty().append(c)
}};
b.prototype.clickHandler=function(d){var c=this;
if(c.shouldClick===false){d.stopImmediatePropagation();
d.stopPropagation();
d.preventDefault()
}};
b.prototype.destroy=function(d){var c=this;
c.autoPlayClear();
c.touchObject={};
c.cleanUpEvents();
a(".slick-cloned",c.$slider).detach();
if(c.$dots){c.$dots.remove()
}if(c.$prevArrow&&c.$prevArrow.length){c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");
if(c.htmlExpr.test(c.options.prevArrow)){c.$prevArrow.remove()
}}if(c.$nextArrow&&c.$nextArrow.length){c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");
if(c.htmlExpr.test(c.options.nextArrow)){c.$nextArrow.remove()
}}if(c.$slides){c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))
});
c.$slideTrack.children(this.options.slide).detach();
c.$slideTrack.detach();
c.$list.detach();
c.$slider.append(c.$slides)
}c.cleanUpRows();
c.$slider.removeClass("slick-slider");
c.$slider.removeClass("slick-initialized");
c.$slider.removeClass("slick-dotted");
c.unslicked=true;
if(!d){c.$slider.trigger("destroy",[c])
}};
b.prototype.disableTransition=function(c){var d=this,e={};
e[d.transitionType]="";
if(d.options.fade===false){d.$slideTrack.css(e)
}else{d.$slides.eq(c).css(e)
}};
b.prototype.fadeSlide=function(d,e){var c=this;
if(c.cssTransitions===false){c.$slides.eq(d).css({zIndex:c.options.zIndex});
c.$slides.eq(d).animate({opacity:1},c.options.speed,c.options.easing,e)
}else{c.applyTransition(d);
c.$slides.eq(d).css({opacity:1,zIndex:c.options.zIndex});
if(e){setTimeout(function(){c.disableTransition(d);
e.call()
},c.options.speed)
}}};
b.prototype.fadeSlideOut=function(d){var c=this;
if(c.cssTransitions===false){c.$slides.eq(d).animate({opacity:0,zIndex:c.options.zIndex-2},c.options.speed,c.options.easing)
}else{c.applyTransition(d);
c.$slides.eq(d).css({opacity:0,zIndex:c.options.zIndex-2})
}};
b.prototype.filterSlides=b.prototype.slickFilter=function(d){var c=this;
if(d!==null){c.$slidesCache=c.$slides;
c.unload();
c.$slideTrack.children(this.options.slide).detach();
c.$slidesCache.filter(d).appendTo(c.$slideTrack);
c.reinit()
}};
b.prototype.focusHandler=function(){var c=this;
c.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(e){e.stopImmediatePropagation();
var d=a(this);
setTimeout(function(){if(c.options.pauseOnFocus){c.focussed=d.is(":focus");
c.autoPlay()
}},0)
})
};
b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var c=this;
return c.currentSlide
};
b.prototype.getDotCount=function(){var d=this;
var f=0;
var c=0;
var e=0;
if(d.options.infinite===true){while(f<d.slideCount){++e;
f=c+d.options.slidesToScroll;
c+=d.options.slidesToScroll<=d.options.slidesToShow?d.options.slidesToScroll:d.options.slidesToShow
}}else{if(d.options.centerMode===true){e=d.slideCount
}else{if(!d.options.asNavFor){e=1+Math.ceil((d.slideCount-d.options.slidesToShow)/d.options.slidesToScroll)
}else{while(f<d.slideCount){++e;
f=c+d.options.slidesToScroll;
c+=d.options.slidesToScroll<=d.options.slidesToShow?d.options.slidesToScroll:d.options.slidesToShow
}}}}return e-1
};
b.prototype.getLeft=function(f){var d=this,h,e,c=0,g;
d.slideOffset=0;
e=d.$slides.first().outerHeight(true);
if(d.options.infinite===true){if(d.slideCount>d.options.slidesToShow){d.slideOffset=(d.slideWidth*d.options.slidesToShow)*-1;
c=(e*d.options.slidesToShow)*-1
}if(d.slideCount%d.options.slidesToScroll!==0){if(f+d.options.slidesToScroll>d.slideCount&&d.slideCount>d.options.slidesToShow){if(f>d.slideCount){d.slideOffset=((d.options.slidesToShow-(f-d.slideCount))*d.slideWidth)*-1;
c=((d.options.slidesToShow-(f-d.slideCount))*e)*-1
}else{d.slideOffset=((d.slideCount%d.options.slidesToScroll)*d.slideWidth)*-1;
c=((d.slideCount%d.options.slidesToScroll)*e)*-1
}}}}else{if(f+d.options.slidesToShow>d.slideCount){d.slideOffset=((f+d.options.slidesToShow)-d.slideCount)*d.slideWidth;
c=((f+d.options.slidesToShow)-d.slideCount)*e
}}if(d.slideCount<=d.options.slidesToShow){d.slideOffset=0;
c=0
}if(d.options.centerMode===true&&d.options.infinite===true){d.slideOffset+=d.slideWidth*Math.floor(d.options.slidesToShow/2)-d.slideWidth
}else{if(d.options.centerMode===true){d.slideOffset=0;
d.slideOffset+=d.slideWidth*Math.floor(d.options.slidesToShow/2)
}}if(d.options.vertical===false){h=((f*d.slideWidth)*-1)+d.slideOffset
}else{h=((f*e)*-1)+c
}if(d.options.variableWidth===true){if(d.slideCount<=d.options.slidesToShow||d.options.infinite===false){g=d.$slideTrack.children(".slick-slide").eq(f)
}else{g=d.$slideTrack.children(".slick-slide").eq(f+d.options.slidesToShow)
}if(d.options.rtl===true){if(g[0]){h=(d.$slideTrack.width()-g[0].offsetLeft-g.width())*-1
}else{h=0
}}else{h=g[0]?g[0].offsetLeft*-1:0
}if(d.options.centerMode===true){if(d.slideCount<=d.options.slidesToShow||d.options.infinite===false){g=d.$slideTrack.children(".slick-slide").eq(f)
}else{g=d.$slideTrack.children(".slick-slide").eq(f+d.options.slidesToShow+1)
}if(d.options.rtl===true){if(g[0]){h=(d.$slideTrack.width()-g[0].offsetLeft-g.width())*-1
}else{h=0
}}else{h=g[0]?g[0].offsetLeft*-1:0
}h+=(d.$list.width()-g.outerWidth())/2
}}return h
};
b.prototype.getOption=b.prototype.slickGetOption=function(d){var c=this;
return c.options[d]
};
b.prototype.getNavigableIndexes=function(){var f=this,g=0,d=0,e=[],c;
if(f.options.infinite===false){c=f.slideCount
}else{g=f.options.slidesToScroll*-1;
d=f.options.slidesToScroll*-1;
c=f.slideCount*2
}while(g<c){e.push(g);
g=d+f.options.slidesToScroll;
d+=f.options.slidesToScroll<=f.options.slidesToShow?f.options.slidesToScroll:f.options.slidesToShow
}return e
};
b.prototype.getSlick=function(){return this
};
b.prototype.getSlideCount=function(){var e=this,d,f,c;
c=e.options.centerMode===true?e.slideWidth*Math.floor(e.options.slidesToShow/2):0;
if(e.options.swipeToSlide===true){e.$slideTrack.find(".slick-slide").each(function(h,g){if(g.offsetLeft-c+(a(g).outerWidth()/2)>(e.swipeLeft*-1)){f=g;
return false
}});
d=Math.abs(a(f).attr("data-slick-index")-e.currentSlide)||1;
return d
}else{return e.options.slidesToScroll
}};
b.prototype.goTo=b.prototype.slickGoTo=function(c,e){var d=this;
d.changeSlide({data:{message:"index",index:parseInt(c)}},e)
};
b.prototype.init=function(c){var d=this;
if(!a(d.$slider).hasClass("slick-initialized")){a(d.$slider).addClass("slick-initialized");
d.buildRows();
d.buildOut();
d.setProps();
d.startLoad();
d.loadSlider();
d.initializeEvents();
d.updateArrows();
d.updateDots();
d.checkResponsive(true);
d.focusHandler()
}if(c){d.$slider.trigger("init",[d])
}if(d.options.accessibility===true){d.initADA()
}if(d.options.autoplay){d.paused=false;
d.autoPlay()
}};
b.prototype.initADA=function(){var c=this;
c.$slides.add(c.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"});
c.$slideTrack.attr("role","listbox");
c.$slides.not(c.$slideTrack.find(".slick-cloned")).each(function(d){a(this).attr({role:"option","aria-describedby":"slick-slide"+c.instanceUid+d+""})
});
if(c.$dots!==null){c.$dots.attr("role","tablist").find("li").each(function(d){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+c.instanceUid+d+"",id:"slick-slide"+c.instanceUid+d+""})
}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar")
}c.activateADA()
};
b.prototype.initArrowEvents=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},c.changeSlide);
c.$nextArrow.off("click.slick").on("click.slick",{message:"next"},c.changeSlide)
}};
b.prototype.initDotEvents=function(){var c=this;
if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){a("li",c.$dots).on("click.slick",{message:"index"},c.changeSlide)
}if(c.options.dots===true&&c.options.pauseOnDotsHover===true){a("li",c.$dots).on("mouseenter.slick",a.proxy(c.interrupt,c,true)).on("mouseleave.slick",a.proxy(c.interrupt,c,false))
}};
b.prototype.initSlideEvents=function(){var c=this;
if(c.options.pauseOnHover){c.$list.on("mouseenter.slick",a.proxy(c.interrupt,c,true));
c.$list.on("mouseleave.slick",a.proxy(c.interrupt,c,false))
}};
b.prototype.initializeEvents=function(){var c=this;
c.initArrowEvents();
c.initDotEvents();
c.initSlideEvents();
c.$list.on("touchstart.slick mousedown.slick",{action:"start"},c.swipeHandler);
c.$list.on("touchmove.slick mousemove.slick",{action:"move"},c.swipeHandler);
c.$list.on("touchend.slick mouseup.slick",{action:"end"},c.swipeHandler);
c.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},c.swipeHandler);
c.$list.on("click.slick",c.clickHandler);
a(document).on(c.visibilityChange,a.proxy(c.visibility,c));
if(c.options.accessibility===true){c.$list.on("keydown.slick",c.keyHandler)
}if(c.options.focusOnSelect===true){a(c.$slideTrack).children().on("click.slick",c.selectHandler)
}a(window).on("orientationchange.slick.slick-"+c.instanceUid,a.proxy(c.orientationChange,c));
a(window).on("resize.slick.slick-"+c.instanceUid,a.proxy(c.resize,c));
a("[draggable!=true]",c.$slideTrack).on("dragstart",c.preventDefault);
a(window).on("load.slick.slick-"+c.instanceUid,c.setPosition);
a(document).on("ready.slick.slick-"+c.instanceUid,c.setPosition)
};
b.prototype.initUI=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.show();
c.$nextArrow.show()
}if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){c.$dots.show()
}};
b.prototype.keyHandler=function(d){var c=this;
if(!d.target.tagName.match("TEXTAREA|INPUT|SELECT")){if(d.keyCode===37&&c.options.accessibility===true){c.changeSlide({data:{message:c.options.rtl===true?"next":"previous"}})
}else{if(d.keyCode===39&&c.options.accessibility===true){c.changeSlide({data:{message:c.options.rtl===true?"previous":"next"}})
}}}};
b.prototype.lazyLoad=function(){var e=this,c,h,g,f;
function d(i){a("img[data-lazy]",i).each(function(){var k=a(this),l=a(this).attr("data-lazy"),j=document.createElement("img");
j.onload=function(){k.animate({opacity:0},100,function(){k.attr("src",l).animate({opacity:1},200,function(){k.removeAttr("data-lazy").removeClass("slick-loading")
});
e.$slider.trigger("lazyLoaded",[e,k,l])
})
};
j.onerror=function(){k.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
e.$slider.trigger("lazyLoadError",[e,k,l])
};
j.src=l
})
}if(e.options.centerMode===true){if(e.options.infinite===true){g=e.currentSlide+(e.options.slidesToShow/2+1);
f=g+e.options.slidesToShow+2
}else{g=Math.max(0,e.currentSlide-(e.options.slidesToShow/2+1));
f=2+(e.options.slidesToShow/2+1)+e.currentSlide
}}else{g=e.options.infinite?e.options.slidesToShow+e.currentSlide:e.currentSlide;
f=Math.ceil(g+e.options.slidesToShow);
if(e.options.fade===true){if(g>0){g--
}if(f<=e.slideCount){f++
}}}c=e.$slider.find(".slick-slide").slice(g,f);
d(c);
if(e.slideCount<=e.options.slidesToShow){h=e.$slider.find(".slick-slide");
d(h)
}else{if(e.currentSlide>=e.slideCount-e.options.slidesToShow){h=e.$slider.find(".slick-cloned").slice(0,e.options.slidesToShow);
d(h)
}else{if(e.currentSlide===0){h=e.$slider.find(".slick-cloned").slice(e.options.slidesToShow*-1);
d(h)
}}}};
b.prototype.loadSlider=function(){var c=this;
c.setPosition();
c.$slideTrack.css({opacity:1});
c.$slider.removeClass("slick-loading");
c.initUI();
if(c.options.lazyLoad==="progressive"){c.progressiveLazyLoad()
}};
b.prototype.next=b.prototype.slickNext=function(){var c=this;
c.changeSlide({data:{message:"next"}})
};
b.prototype.orientationChange=function(){var c=this;
c.checkResponsive();
c.setPosition()
};
b.prototype.pause=b.prototype.slickPause=function(){var c=this;
c.autoPlayClear();
c.paused=true
};
b.prototype.play=b.prototype.slickPlay=function(){var c=this;
c.autoPlay();
c.options.autoplay=true;
c.paused=false;
c.focussed=false;
c.interrupted=false
};
b.prototype.postSlide=function(d){var c=this;
if(!c.unslicked){c.$slider.trigger("afterChange",[c,d]);
c.animating=false;
c.setPosition();
c.swipeLeft=null;
if(c.options.autoplay){c.autoPlay()
}if(c.options.accessibility===true){c.initADA()
}}};
b.prototype.prev=b.prototype.slickPrev=function(){var c=this;
c.changeSlide({data:{message:"previous"}})
};
b.prototype.preventDefault=function(c){c.preventDefault()
};
b.prototype.progressiveLazyLoad=function(e){e=e||1;
var d=this,c=a("img[data-lazy]",d.$slider),g,h,f;
if(c.length){g=c.first();
h=g.attr("data-lazy");
f=document.createElement("img");
f.onload=function(){g.attr("src",h).removeAttr("data-lazy").removeClass("slick-loading");
if(d.options.adaptiveHeight===true){d.setPosition()
}d.$slider.trigger("lazyLoaded",[d,g,h]);
d.progressiveLazyLoad()
};
f.onerror=function(){if(e<3){setTimeout(function(){d.progressiveLazyLoad(e+1)
},500)
}else{g.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
d.$slider.trigger("lazyLoadError",[d,g,h]);
d.progressiveLazyLoad()
}};
f.src=h
}else{d.$slider.trigger("allImagesLoaded",[d])
}};
b.prototype.refresh=function(d){var e=this,f,c;
c=e.slideCount-e.options.slidesToShow;
if(!e.options.infinite&&(e.currentSlide>c)){e.currentSlide=c
}if(e.slideCount<=e.options.slidesToShow){e.currentSlide=0
}f=e.currentSlide;
e.destroy(true);
a.extend(e,e.initials,{currentSlide:f});
e.init();
if(!d){e.changeSlide({data:{message:"index",index:f}},false)
}};
b.prototype.registerBreakpoints=function(){var e=this,d,f,c,g=e.options.responsive||null;
if(a.type(g)==="array"&&g.length){e.respondTo=e.options.respondTo||"window";
for(d in g){c=e.breakpoints.length-1;
f=g[d].breakpoint;
if(g.hasOwnProperty(d)){while(c>=0){if(e.breakpoints[c]&&e.breakpoints[c]===f){e.breakpoints.splice(c,1)
}c--
}e.breakpoints.push(f);
e.breakpointSettings[f]=g[d].settings
}}e.breakpoints.sort(function(i,h){return(e.options.mobileFirst)?i-h:h-i
})
}};
b.prototype.reinit=function(){var c=this;
c.$slides=c.$slideTrack.children(c.options.slide).addClass("slick-slide");
c.slideCount=c.$slides.length;
if(c.currentSlide>=c.slideCount&&c.currentSlide!==0){c.currentSlide=c.currentSlide-c.options.slidesToScroll
}if(c.slideCount<=c.options.slidesToShow){c.currentSlide=0
}c.registerBreakpoints();
c.setProps();
c.setupInfinite();
c.buildArrows();
c.updateArrows();
c.initArrowEvents();
c.buildDots();
c.updateDots();
c.initDotEvents();
c.cleanUpSlideEvents();
c.initSlideEvents();
c.checkResponsive(false,true);
if(c.options.focusOnSelect===true){a(c.$slideTrack).children().on("click.slick",c.selectHandler)
}c.setSlideClasses(typeof c.currentSlide==="number"?c.currentSlide:0);
c.setPosition();
c.focusHandler();
c.paused=!c.options.autoplay;
c.autoPlay();
c.$slider.trigger("reInit",[c])
};
b.prototype.resize=function(){var c=this;
if(a(window).width()!==c.windowWidth){clearTimeout(c.windowDelay);
c.windowDelay=window.setTimeout(function(){c.windowWidth=a(window).width();
c.checkResponsive();
if(!c.unslicked){c.setPosition()
}},50)
}};
b.prototype.removeSlide=b.prototype.slickRemove=function(d,f,e){var c=this;
if(typeof(d)==="boolean"){f=d;
d=f===true?0:c.slideCount-1
}else{d=f===true?--d:d
}if(c.slideCount<1||d<0||d>c.slideCount-1){return false
}c.unload();
if(e===true){c.$slideTrack.children().remove()
}else{c.$slideTrack.children(this.options.slide).eq(d).remove()
}c.$slides=c.$slideTrack.children(this.options.slide);
c.$slideTrack.children(this.options.slide).detach();
c.$slideTrack.append(c.$slides);
c.$slidesCache=c.$slides;
c.reinit()
};
b.prototype.setCSS=function(d){var e=this,f={},c,g;
if(e.options.rtl===true){d=-d
}c=e.positionProp=="left"?Math.ceil(d)+"px":"0px";
g=e.positionProp=="top"?Math.ceil(d)+"px":"0px";
f[e.positionProp]=d;
if(e.transformsEnabled===false){e.$slideTrack.css(f)
}else{f={};
if(e.cssTransitions===false){f[e.animType]="translate("+c+", "+g+")";
e.$slideTrack.css(f)
}else{f[e.animType]="translate3d("+c+", "+g+", 0px)";
e.$slideTrack.css(f)
}}};
b.prototype.setDimensions=function(){var c=this;
if(c.options.vertical===false){if(c.options.centerMode===true){c.$list.css({padding:("0px "+c.options.centerPadding)})
}}else{c.$list.height(c.$slides.first().outerHeight(true)*c.options.slidesToShow);
if(c.options.centerMode===true){c.$list.css({padding:(c.options.centerPadding+" 0px")})
}}c.listWidth=c.$list.width();
c.listHeight=c.$list.height();
if(c.options.vertical===false&&c.options.variableWidth===false){c.slideWidth=Math.ceil(c.listWidth/c.options.slidesToShow);
c.$slideTrack.width(Math.ceil((c.slideWidth*c.$slideTrack.children(".slick-slide").length)))
}else{if(c.options.variableWidth===true){c.$slideTrack.width(5000*c.slideCount)
}else{c.slideWidth=Math.ceil(c.listWidth);
c.$slideTrack.height(Math.ceil((c.$slides.first().outerHeight(true)*c.$slideTrack.children(".slick-slide").length)))
}}var d=c.$slides.first().outerWidth(true)-c.$slides.first().width();
if(c.options.variableWidth===false){c.$slideTrack.children(".slick-slide").width(c.slideWidth-d)
}};
b.prototype.setFade=function(){var c=this,d;
c.$slides.each(function(e,f){d=(c.slideWidth*e)*-1;
if(c.options.rtl===true){a(f).css({position:"relative",right:d,top:0,zIndex:c.options.zIndex-2,opacity:0})
}else{a(f).css({position:"relative",left:d,top:0,zIndex:c.options.zIndex-2,opacity:0})
}});
c.$slides.eq(c.currentSlide).css({zIndex:c.options.zIndex-1,opacity:1})
};
b.prototype.setHeight=function(){var d=this;
if(d.options.slidesToShow===1&&d.options.adaptiveHeight===true&&d.options.vertical===false){var c=d.$slides.eq(d.currentSlide).outerHeight(true);
d.$list.css("height",c)
}};
b.prototype.setOption=b.prototype.slickSetOption=function(){var d=this,c,h,g,i,f=false,e;
if(a.type(arguments[0])==="object"){g=arguments[0];
f=arguments[1];
e="multiple"
}else{if(a.type(arguments[0])==="string"){g=arguments[0];
i=arguments[1];
f=arguments[2];
if(arguments[0]==="responsive"&&a.type(arguments[1])==="array"){e="responsive"
}else{if(typeof arguments[1]!=="undefined"){e="single"
}}}}if(e==="single"){d.options[g]=i
}else{if(e==="multiple"){a.each(g,function(j,k){d.options[j]=k
})
}else{if(e==="responsive"){for(h in i){if(a.type(d.options.responsive)!=="array"){d.options.responsive=[i[h]]
}else{c=d.options.responsive.length-1;
while(c>=0){if(d.options.responsive[c].breakpoint===i[h].breakpoint){d.options.responsive.splice(c,1)
}c--
}d.options.responsive.push(i[h])
}}}}}if(f){d.unload();
d.reinit()
}};
b.prototype.setPosition=function(){var c=this;
c.setDimensions();
c.setHeight();
if(c.options.fade===false){c.setCSS(c.getLeft(c.currentSlide))
}else{c.setFade()
}c.$slider.trigger("setPosition",[c])
};
b.prototype.setProps=function(){var d=this,c=document.body.style;
d.positionProp=d.options.vertical===true?"top":"left";
if(d.positionProp==="top"){d.$slider.addClass("slick-vertical")
}else{d.$slider.removeClass("slick-vertical")
}if(c.WebkitTransition!==undefined||c.MozTransition!==undefined||c.msTransition!==undefined){if(d.options.useCSS===true){d.cssTransitions=true
}}if(d.options.fade){if(typeof d.options.zIndex==="number"){if(d.options.zIndex<3){d.options.zIndex=3
}}else{d.options.zIndex=d.defaults.zIndex
}}if(c.OTransform!==undefined){d.animType="OTransform";
d.transformType="-o-transform";
d.transitionType="OTransition";
if(c.perspectiveProperty===undefined&&c.webkitPerspective===undefined){d.animType=false
}}if(c.MozTransform!==undefined){d.animType="MozTransform";
d.transformType="-moz-transform";
d.transitionType="MozTransition";
if(c.perspectiveProperty===undefined&&c.MozPerspective===undefined){d.animType=false
}}if(c.webkitTransform!==undefined){d.animType="webkitTransform";
d.transformType="-webkit-transform";
d.transitionType="webkitTransition";
if(c.perspectiveProperty===undefined&&c.webkitPerspective===undefined){d.animType=false
}}if(c.msTransform!==undefined){d.animType="msTransform";
d.transformType="-ms-transform";
d.transitionType="msTransition";
if(c.msTransform===undefined){d.animType=false
}}if(c.transform!==undefined&&d.animType!==false){d.animType="transform";
d.transformType="transform";
d.transitionType="transition"
}d.transformsEnabled=d.options.useTransform&&(d.animType!==null&&d.animType!==false)
};
b.prototype.setSlideClasses=function(f){var e=this,c,d,h,g;
d=e.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");
e.$slides.eq(f).addClass("slick-current");
if(e.options.centerMode===true){c=Math.floor(e.options.slidesToShow/2);
if(e.options.infinite===true){if(f>=c&&f<=(e.slideCount-1)-c){e.$slides.slice(f-c,f+c+1).addClass("slick-active").attr("aria-hidden","false")
}else{h=e.options.slidesToShow+f;
d.slice(h-c+1,h+c+2).addClass("slick-active").attr("aria-hidden","false")
}if(f===0){d.eq(d.length-1-e.options.slidesToShow).addClass("slick-center")
}else{if(f===e.slideCount-1){d.eq(e.options.slidesToShow).addClass("slick-center")
}}}e.$slides.eq(f).addClass("slick-center")
}else{if(f>=0&&f<=(e.slideCount-e.options.slidesToShow)){e.$slides.slice(f,f+e.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}else{if(d.length<=e.options.slidesToShow){d.addClass("slick-active").attr("aria-hidden","false")
}else{g=e.slideCount%e.options.slidesToShow;
h=e.options.infinite===true?e.options.slidesToShow+f:f;
if(e.options.slidesToShow==e.options.slidesToScroll&&(e.slideCount-f)<e.options.slidesToShow){d.slice(h-(e.options.slidesToShow-g),h+g).addClass("slick-active").attr("aria-hidden","false")
}else{d.slice(h,h+e.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}}}}if(e.options.lazyLoad==="ondemand"){e.lazyLoad()
}};
b.prototype.setupInfinite=function(){var c=this,d,f,e;
if(c.options.fade===true){c.options.centerMode=false
}if(c.options.infinite===true&&c.options.fade===false){f=null;
if(c.slideCount>c.options.slidesToShow){if(c.options.centerMode===true){e=c.options.slidesToShow+1
}else{e=c.options.slidesToShow
}for(d=c.slideCount;
d>(c.slideCount-e);
d-=1){f=d-1;
a(c.$slides[f]).clone(true).attr("id","").attr("data-slick-index",f-c.slideCount).prependTo(c.$slideTrack).addClass("slick-cloned")
}for(d=0;
d<e;
d+=1){f=d;
a(c.$slides[f]).clone(true).attr("id","").attr("data-slick-index",f+c.slideCount).appendTo(c.$slideTrack).addClass("slick-cloned")
}c.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")
})
}}};
b.prototype.interrupt=function(c){var d=this;
if(!c){d.autoPlay()
}d.interrupted=c
};
b.prototype.selectHandler=function(f){var e=this;
var d=a(f.target).is(".slick-slide")?a(f.target):a(f.target).parents(".slick-slide");
var c=parseInt(d.attr("data-slick-index"));
if(!c){c=0
}if(e.slideCount<=e.options.slidesToShow){e.setSlideClasses(c);
e.asNavFor(c);
return
}e.slideHandler(c)
};
b.prototype.slideHandler=function(f,i,e){var d,l,h,j,g=null,k=this,c;
i=i||false;
if(k.animating===true&&k.options.waitForAnimate===true){return
}if(k.options.fade===true&&k.currentSlide===f){return
}if(k.slideCount<=k.options.slidesToShow){return
}if(i===false){k.asNavFor(f)
}d=f;
g=k.getLeft(d);
j=k.getLeft(k.currentSlide);
k.currentLeft=k.swipeLeft===null?j:k.swipeLeft;
if(k.options.infinite===false&&k.options.centerMode===false&&(f<0||f>k.getDotCount()*k.options.slidesToScroll)){if(k.options.fade===false){d=k.currentSlide;
if(e!==true){k.animateSlide(j,function(){k.postSlide(d)
})
}else{k.postSlide(d)
}}return
}else{if(k.options.infinite===false&&k.options.centerMode===true&&(f<0||f>(k.slideCount-k.options.slidesToScroll))){if(k.options.fade===false){d=k.currentSlide;
if(e!==true){k.animateSlide(j,function(){k.postSlide(d)
})
}else{k.postSlide(d)
}}return
}}if(k.options.autoplay){clearInterval(k.autoPlayTimer)
}if(d<0){if(k.slideCount%k.options.slidesToScroll!==0){l=k.slideCount-(k.slideCount%k.options.slidesToScroll)
}else{l=k.slideCount+d
}}else{if(d>=k.slideCount){if(k.slideCount%k.options.slidesToScroll!==0){l=0
}else{l=d-k.slideCount
}}else{l=d
}}k.animating=true;
k.$slider.trigger("beforeChange",[k,k.currentSlide,l]);
h=k.currentSlide;
k.currentSlide=l;
k.setSlideClasses(k.currentSlide);
if(k.options.asNavFor){c=k.getNavTarget();
c=c.slick("getSlick");
if(c.slideCount<=c.options.slidesToShow){c.setSlideClasses(k.currentSlide)
}}k.updateDots();
k.updateArrows();
if(k.options.fade===true){if(e!==true){k.fadeSlideOut(h);
k.fadeSlide(l,function(){k.postSlide(l)
})
}else{k.postSlide(l)
}k.animateHeight();
return
}if(e!==true){k.animateSlide(g,function(){k.postSlide(l)
})
}else{k.postSlide(l)
}};
b.prototype.startLoad=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.hide();
c.$nextArrow.hide()
}if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){c.$dots.hide()
}c.$slider.addClass("slick-loading")
};
b.prototype.swipeDirection=function(){var c,f,e,g,d=this;
c=d.touchObject.startX-d.touchObject.curX;
f=d.touchObject.startY-d.touchObject.curY;
e=Math.atan2(f,c);
g=Math.round(e*180/Math.PI);
if(g<0){g=360-Math.abs(g)
}if((g<=45)&&(g>=0)){return(d.options.rtl===false?"left":"right")
}if((g<=360)&&(g>=315)){return(d.options.rtl===false?"left":"right")
}if((g>=135)&&(g<=225)){return(d.options.rtl===false?"right":"left")
}if(d.options.verticalSwiping===true){if((g>=35)&&(g<=135)){return"down"
}else{return"up"
}}return"vertical"
};
b.prototype.swipeEnd=function(e){var d=this,c,f;
d.dragging=false;
d.interrupted=false;
d.shouldClick=(d.touchObject.swipeLength>10)?false:true;
if(d.touchObject.curX===undefined){return false
}if(d.touchObject.edgeHit===true){d.$slider.trigger("edge",[d,d.swipeDirection()])
}if(d.touchObject.swipeLength>=d.touchObject.minSwipe){f=d.swipeDirection();
switch(f){case"left":case"down":c=d.options.swipeToSlide?d.checkNavigable(d.currentSlide+d.getSlideCount()):d.currentSlide+d.getSlideCount();
d.currentDirection=0;
break;
case"right":case"up":c=d.options.swipeToSlide?d.checkNavigable(d.currentSlide-d.getSlideCount()):d.currentSlide-d.getSlideCount();
d.currentDirection=1;
break;
default:}if(f!="vertical"){d.slideHandler(c);
d.touchObject={};
d.$slider.trigger("swipe",[d,f])
}}else{if(d.touchObject.startX!==d.touchObject.curX){d.slideHandler(d.currentSlide);
d.touchObject={}
}}};
b.prototype.swipeHandler=function(d){var c=this;
if((c.options.swipe===false)||("ontouchend" in document&&c.options.swipe===false)){return
}else{if(c.options.draggable===false&&d.type.indexOf("mouse")!==-1){return
}}c.touchObject.fingerCount=d.originalEvent&&d.originalEvent.touches!==undefined?d.originalEvent.touches.length:1;
c.touchObject.minSwipe=c.listWidth/c.options.touchThreshold;
if(c.options.verticalSwiping===true){c.touchObject.minSwipe=c.listHeight/c.options.touchThreshold
}switch(d.data.action){case"start":c.swipeStart(d);
break;
case"move":c.swipeMove(d);
break;
case"end":c.swipeEnd(d);
break
}};
b.prototype.swipeMove=function(f){var e=this,j=false,h,d,g,c,i;
i=f.originalEvent!==undefined?f.originalEvent.touches:null;
if(!e.dragging||i&&i.length!==1){return false
}h=e.getLeft(e.currentSlide);
e.touchObject.curX=i!==undefined?i[0].pageX:f.clientX;
e.touchObject.curY=i!==undefined?i[0].pageY:f.clientY;
e.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(e.touchObject.curX-e.touchObject.startX,2)));
if(e.options.verticalSwiping===true){e.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(e.touchObject.curY-e.touchObject.startY,2)))
}d=e.swipeDirection();
if(d==="vertical"){return
}if(f.originalEvent!==undefined&&e.touchObject.swipeLength>4){f.preventDefault()
}c=(e.options.rtl===false?1:-1)*(e.touchObject.curX>e.touchObject.startX?1:-1);
if(e.options.verticalSwiping===true){c=e.touchObject.curY>e.touchObject.startY?1:-1
}g=e.touchObject.swipeLength;
e.touchObject.edgeHit=false;
if(e.options.infinite===false){if((e.currentSlide===0&&d==="right")||(e.currentSlide>=e.getDotCount()&&d==="left")){g=e.touchObject.swipeLength*e.options.edgeFriction;
e.touchObject.edgeHit=true
}}if(e.options.vertical===false){e.swipeLeft=h+g*c
}else{e.swipeLeft=h+(g*(e.$list.height()/e.listWidth))*c
}if(e.options.verticalSwiping===true){e.swipeLeft=h+g*c
}if(e.options.fade===true||e.options.touchMove===false){return false
}if(e.animating===true){e.swipeLeft=null;
return false
}e.setCSS(e.swipeLeft)
};
b.prototype.swipeStart=function(d){var c=this,e;
c.interrupted=true;
if(c.touchObject.fingerCount!==1||c.slideCount<=c.options.slidesToShow){c.touchObject={};
return false
}if(d.originalEvent!==undefined&&d.originalEvent.touches!==undefined){e=d.originalEvent.touches[0]
}c.touchObject.startX=c.touchObject.curX=e!==undefined?e.pageX:d.clientX;
c.touchObject.startY=c.touchObject.curY=e!==undefined?e.pageY:d.clientY;
c.dragging=true
};
b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var c=this;
if(c.$slidesCache!==null){c.unload();
c.$slideTrack.children(this.options.slide).detach();
c.$slidesCache.appendTo(c.$slideTrack);
c.reinit()
}};
b.prototype.unload=function(){var c=this;
a(".slick-cloned",c.$slider).remove();
if(c.$dots){c.$dots.remove()
}if(c.$prevArrow&&c.htmlExpr.test(c.options.prevArrow)){c.$prevArrow.remove()
}if(c.$nextArrow&&c.htmlExpr.test(c.options.nextArrow)){c.$nextArrow.remove()
}c.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")
};
b.prototype.unslick=function(d){var c=this;
c.$slider.trigger("unslick",[c,d]);
c.destroy()
};
b.prototype.updateArrows=function(){var d=this,c;
c=Math.floor(d.options.slidesToShow/2);
if(d.options.arrows===true&&d.slideCount>d.options.slidesToShow&&!d.options.infinite){d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false");
d.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false");
if(d.currentSlide===0){d.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true");
d.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}else{if(d.currentSlide>=d.slideCount-d.options.slidesToShow&&d.options.centerMode===false){d.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");
d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}else{if(d.currentSlide>=d.slideCount-1&&d.options.centerMode===true){d.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");
d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}}}}};
b.prototype.updateDots=function(){var c=this;
if(c.$dots!==null){c.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true");
c.$dots.find("li").eq(Math.floor(c.currentSlide/c.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false")
}};
b.prototype.visibility=function(){var c=this;
if(c.options.autoplay){if(document[c.hidden]){c.interrupted=true
}else{c.interrupted=false
}}};
a.fn.slick=function(){var f=this,h=arguments[0],e=Array.prototype.slice.call(arguments,1),c=f.length,g,d;
for(g=0;
g<c;
g++){if(typeof h=="object"||typeof h=="undefined"){f[g].slick=new b(f[g],h)
}else{d=f[g].slick[h].apply(f[g].slick,e)
}if(typeof d!="undefined"){return d
}}return f
}
}));
window.Modernizr=function(aa,Z,Y){function F(b){S.cssText=b
}function E(d,c){return F(prefixes.join(d+";")+(c||""))
}function D(d,c){return typeof d===c
}function C(d,c){return !!~(""+d).indexOf(c)
}function B(g,c,j){for(var i in g){var h=c[g[i]];
if(h!==Y){return j===!1?g[i]:D(h,"function")?h.bind(j||c):h
}}return !1
}var X="2.8.3",W={},V=Z.documentElement,U="modernizr",T=Z.createElement(U),S=T.style,R,P={}.toString,O={svg:"http://www.w3.org/2000/svg"},N={},M={},L={},K=[],J=K.slice,I,H={}.hasOwnProperty,G;
!D(H,"undefined")&&!D(H.call,"undefined")?G=function(d,c){return H.call(d,c)
}:G=function(d,c){return c in d&&D(d.constructor.prototype[c],"undefined")
},Function.prototype.bind||(Function.prototype.bind=function(a){var h=this;
if(typeof h!="function"){throw new TypeError
}var g=J.call(arguments,1),f=function(){if(this instanceof f){var b=function(){};
b.prototype=h.prototype;
var d=new b,c=h.apply(d,g.concat(J.call(arguments)));
return Object(c)===c?c:d
}return h.apply(a,g.concat(J.call(arguments)))
};
return f
}),N.svg=function(){return !!Z.createElementNS&&!!Z.createElementNS(O.svg,"svg").createSVGRect
},N.inlinesvg=function(){var b=Z.createElement("div");
return b.innerHTML="<svg/>",(b.firstChild&&b.firstChild.namespaceURI)==O.svg
};
for(var A in N){G(N,A)&&(I=A.toLowerCase(),W[I]=N[A](),K.push((W[I]?"":"no-")+I))
}return W.addTest=function(e,c){if(typeof e=="object"){for(var f in e){G(e,f)&&W.addTest(f,e[f])
}}else{e=e.toLowerCase();
if(W[e]!==Y){return W
}c=typeof c=="function"?c():c,typeof enableClasses!="undefined"&&enableClasses&&(V.className+=" "+(c?"":"no-")+e),W[e]=c
}return W
},F(""),T=R=null,W._version=X,W
}(this,this.document);
/*! Picturefill - v2.1.0 - 2014-07-25
* http://scottjehl.github.io/picturefill
* Copyright (c) 2014 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){var f=window.styleMedia||window.media;
if(!f){var e=document.createElement("style"),h=document.getElementsByTagName("script")[0],g=null;
e.type="text/css",e.id="matchmediajs-test",h.parentNode.insertBefore(e,h),g="getComputedStyle" in window&&window.getComputedStyle(e,null)||e.currentStyle,f={matchMedium:function(b){var d="@media "+b+"{ #matchmediajs-test { width: 1px; } }";
return e.styleSheet?e.styleSheet.cssText=d:e.textContent=d,"1px"===g.width
}}
}return function(a){return{matches:f.matchMedium(a||"all"),media:a||"all"}
}
}()),function(g,f){function j(r){var q,p,o,n,m,l=r||{};
q=l.elements||h.getAllElements();
for(var k=0,e=q.length;
e>k;
k++){if(p=q[k],o=p.parentNode,n=void 0,m=void 0,p[h.ns]||(p[h.ns]={}),l.reevaluate||!p[h.ns].evaluated){if("PICTURE"===o.nodeName.toUpperCase()){if(h.removeVideoShim(o),n=h.getMatch(p,o),n===!1){continue
}}else{n=void 0
}("PICTURE"===o.nodeName.toUpperCase()||p.srcset&&!h.srcsetSupported||!h.sizesSupported&&p.srcset&&p.srcset.indexOf("w")>-1)&&h.dodgeSrcset(p),n?(m=h.processSourceSet(n),h.applyBestCandidate(m,p)):(m=h.processSourceSet(p),(void 0===p.srcset||p[h.ns].srcset)&&h.applyBestCandidate(m,p)),p[h.ns].evaluated=!0
}}}function i(){j();
var b=setInterval(function(){return j(),/^loaded|^i|^c/.test(f.readyState)?void clearInterval(b):void 0
},250);
if(g.addEventListener){var a;
g.addEventListener("resize",function(){g._picturefillWorking||(g._picturefillWorking=!0,g.clearTimeout(a),a=g.setTimeout(function(){j({reevaluate:!0}),g._picturefillWorking=!1
},60))
},!1)
}}if(g.HTMLPictureElement){return void (g.picturefill=function(){})
}f.createElement("picture");
var h={};
h.ns="picturefill",h.srcsetSupported="srcset" in f.createElement("img"),h.sizesSupported=g.HTMLImageElement.sizes,h.trim=function(b){return b.trim?b.trim():b.replace(/^\s+|\s+$/g,"")
},h.endsWith=function(d,c){return d.endsWith?d.endsWith(c):-1!==d.indexOf(c,d.length-c.length)
},h.matchesMedia=function(a){return g.matchMedia&&g.matchMedia(a).matches
},h.getDpr=function(){return g.devicePixelRatio||1
},h.getWidthFromLength=function(b){return b=b&&(parseFloat(b)>0||b.indexOf("calc(")>-1)?b:"100vw",b=b.replace("vw","%"),h.lengthEl||(h.lengthEl=f.createElement("div"),f.documentElement.insertBefore(h.lengthEl,f.documentElement.firstChild)),h.lengthEl.style.cssText="position: absolute; left: 0; width: "+b+";",h.lengthEl.offsetWidth<=0&&(h.lengthEl.style.cssText="width: 100%;"),h.lengthEl.offsetWidth
},h.types={},h.types["image/jpeg"]=!0,h.types["image/gif"]=!0,h.types["image/png"]=!0,h.types["image/svg+xml"]=f.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),h.types["image/webp"]=function(){var a=new g.Image,c="image/webp";
a.onerror=function(){h.types[c]=!1,j()
},a.onload=function(){h.types[c]=1===a.width,j()
},a.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
},h.verifyTypeSupport=function(d){var c=d.getAttribute("type");
return null===c||""===c?!0:"function"==typeof h.types[c]?(h.types[c](),"pending"):h.types[c]
},h.parseSize=function(d){var c=/(\([^)]+\))?\s*(.+)/g.exec(d);
return{media:c&&c[1],length:c&&c[2]}
},h.findWidthFromSourceSize=function(r){for(var q,p=h.trim(r).split(/\s*,\s*/),o=0,n=p.length;
n>o;
o++){var m=p[o],l=h.parseSize(m),k=l.length,e=l.media;
if(k&&(!e||h.matchesMedia(e))){q=k;
break
}}return h.getWidthFromLength(q)
},h.parseSrcset=function(l){for(var k=[];
""!==l;
){l=l.replace(/^\s+/g,"");
var q,p=l.search(/\s/g),o=null;
if(-1!==p){q=l.slice(0,p);
var n=q[q.length-1];
if((","===n||""===q)&&(q=q.replace(/,+$/,""),o=""),l=l.slice(p+1),null===o){var m=l.indexOf(",");
-1!==m?(o=l.slice(0,m),l=l.slice(m+1)):(o=l,l="")
}}else{q=l,l=""
}(q||o)&&k.push({url:q,descriptor:o})
}return k
},h.parseDescriptor=function(v,u){var t,s=u||"100vw",r=v&&v.replace(/(^\s+|\s+$)/g,""),q=h.findWidthFromSourceSize(s);
if(r){for(var p=r.split(" "),o=p.length+1;
o>=0;
o--){if(void 0!==p[o]){var n=p[o],m=n&&n.slice(n.length-1);
if("h"!==m&&"w"!==m||h.sizesSupported){if("x"===m){var e=n&&parseFloat(n,10);
t=e&&!isNaN(e)?e:1
}}else{t=parseFloat(parseInt(n,10)/q)
}}}}return t||1
},h.getCandidatesFromSourceSet=function(k,e){for(var p=h.parseSrcset(k),o=[],n=0,m=p.length;
m>n;
n++){var l=p[n];
o.push({url:l.url,resolution:h.parseDescriptor(l.descriptor,e)})
}return o
},h.dodgeSrcset=function(b){b.srcset&&(b[h.ns].srcset=b.srcset,b.removeAttribute("srcset"))
},h.processSourceSet=function(k){var e=k.getAttribute("srcset"),m=k.getAttribute("sizes"),l=[];
return"IMG"===k.nodeName.toUpperCase()&&k[h.ns]&&k[h.ns].srcset&&(e=k[h.ns].srcset),e&&(l=h.getCandidatesFromSourceSet(e,m)),l
},h.applyBestCandidate=function(k,e){var o,n,m;
k.sort(h.ascendingSort),n=k.length,m=k[n-1];
for(var l=0;
n>l;
l++){if(o=k[l],o.resolution>=h.getDpr()){m=o;
break
}}m&&!h.endsWith(e.src,m.url)&&(e.src=m.url,e.currentSrc=e.src)
},h.ascendingSort=function(d,c){return d.resolution-c.resolution
},h.removeVideoShim=function(k){var e=k.getElementsByTagName("video");
if(e.length){for(var m=e[0],l=m.getElementsByTagName("source");
l.length;
){k.insertBefore(l[0],m)
}m.parentNode.removeChild(m)
}},h.getAllElements=function(){for(var b=[],m=f.getElementsByTagName("img"),l=0,k=m.length;
k>l;
l++){var e=m[l];
("PICTURE"===e.parentNode.nodeName.toUpperCase()||null!==e.getAttribute("srcset")||e[h.ns]&&null!==e[h.ns].srcset)&&b.push(e)
}return b
},h.getMatch=function(r,q){for(var p,o=q.childNodes,n=0,m=o.length;
m>n;
n++){var l=o[n];
if(1===l.nodeType){if(l===r){return p
}if("SOURCE"===l.nodeName.toUpperCase()){null!==l.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
var k=l.getAttribute("media");
if(l.getAttribute("srcset")&&(!k||h.matchesMedia(k))){var e=h.verifyTypeSupport(l);
if(e===!0){p=l;
break
}if("pending"===e){return !1
}}}}}return p
},i(),j._=h,"object"==typeof module&&"object"==typeof module.exports?module.exports=j:"function"==typeof define&&define.amd?define(function(){return j
}):"object"==typeof g&&(g.picturefill=j)
}(this,this.document);
(function(H){var W,aM="2.9.0",bd=(typeof global!=="undefined"&&(typeof window==="undefined"||window===global.window))?global:this,ax,ae=Math.round,aS=Object.prototype.hasOwnProperty,am,B=0,j=1,a5=2,A=3,aJ=4,y=5,aa=6,av={},aY=[],aw=(typeof module!=="undefined"&&module&&module.exports),e=/^\/?Date\((\-?\d+)/i,bh=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,aO=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,aA=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,al=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,k=/\d\d?/,an=/\d{1,3}/,I=/\d{1,4}/,bn=/[+\-]?\d{1,6}/,bb=/\d+/,N=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,s=/Z|[\+\-]\d\d:?\d\d/gi,o=/T/i,w=/[\+\-]?\d+/,a0=/[\+\-]?\d+(\.\d{1,3})?/,ak=/\d/,v=/\d\d/,bf=/\d{3}/,aZ=/\d{4}/,ar=/[+-]?\d{6}/,ah=/[+-]?\d+/,aW=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ab="YYYY-MM-DDTHH:mm:ssZ",be=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],L=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],aj=/([\+\-]|\d\d)/gi,aQ="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),G={Milliseconds:1,Seconds:1000,Minutes:60000,Hours:3600000,Days:86400000,Months:2592000000,Years:31536000000},f={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},ba={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},au={},C={s:45,m:45,h:22,d:26,M:11},a4="DDD w W M D d".split(" "),ay="M D H h m s w W".split(" "),a6={M:function(){return this.month()+1
},MMM:function(i){return this.localeData().monthsShort(this,i)
},MMMM:function(i){return this.localeData().months(this,i)
},D:function(){return this.date()
},DDD:function(){return this.dayOfYear()
},d:function(){return this.day()
},dd:function(i){return this.localeData().weekdaysMin(this,i)
},ddd:function(i){return this.localeData().weekdaysShort(this,i)
},dddd:function(i){return this.localeData().weekdays(this,i)
},w:function(){return this.week()
},W:function(){return this.isoWeek()
},YY:function(){return O(this.year()%100,2)
},YYYY:function(){return O(this.year(),4)
},YYYYY:function(){return O(this.year(),5)
},YYYYYY:function(){var bt=this.year(),i=bt>=0?"+":"-";
return i+O(Math.abs(bt),6)
},gg:function(){return O(this.weekYear()%100,2)
},gggg:function(){return O(this.weekYear(),4)
},ggggg:function(){return O(this.weekYear(),5)
},GG:function(){return O(this.isoWeekYear()%100,2)
},GGGG:function(){return O(this.isoWeekYear(),4)
},GGGGG:function(){return O(this.isoWeekYear(),5)
},e:function(){return this.weekday()
},E:function(){return this.isoWeekday()
},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),true)
},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),false)
},H:function(){return this.hours()
},h:function(){return this.hours()%12||12
},m:function(){return this.minutes()
},s:function(){return this.seconds()
},S:function(){return R(this.milliseconds()/100)
},SS:function(){return O(R(this.milliseconds()/10),2)
},SSS:function(){return O(this.milliseconds(),3)
},SSSS:function(){return O(this.milliseconds(),3)
},Z:function(){var bt=this.utcOffset(),i="+";
if(bt<0){bt=-bt;
i="-"
}return i+O(R(bt/60),2)+":"+O(R(bt)%60,2)
},ZZ:function(){var bt=this.utcOffset(),i="+";
if(bt<0){bt=-bt;
i="-"
}return i+O(R(bt/60),2)+O(R(bt)%60,2)
},z:function(){return this.zoneAbbr()
},zz:function(){return this.zoneName()
},x:function(){return this.valueOf()
},X:function(){return this.unix()
},Q:function(){return this.quarter()
}},a={},ac=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"],ai=false;
function a1(bt,i,bu){switch(arguments.length){case 2:return bt!=null?bt:i;
case 3:return bt!=null?bt:i!=null?i:bu;
default:throw new Error("Implement me")
}}function a7(bt,i){return aS.call(bt,i)
}function ap(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false}
}function bs(i){if(W.suppressDeprecationWarnings===false&&typeof console!=="undefined"&&console.warn){console.warn("Deprecation warning: "+i)
}}function bq(bt,i){var bu=true;
return aK(function(){if(bu){bs(bt);
bu=false
}return i.apply(this,arguments)
},i)
}function g(i,bt){if(!a[i]){bs(bt);
a[i]=true
}}function T(bt,i){return function(bu){return O(bt.call(this,bu),i)
}
}function l(i,bt){return function(bu){return this.localeData().ordinal(i.call(this,bu),bt)
}
}function m(bt,i){var bx=((i.year()-bt.year())*12)+(i.month()-bt.month()),bu=bt.clone().add(bx,"months"),bv,bw;
if(i-bu<0){bv=bt.clone().add(bx-1,"months");
bw=(i-bu)/(bu-bv)
}else{bv=bt.clone().add(bx+1,"months");
bw=(i-bu)/(bv-bu)
}return -(bx+bw)
}while(a4.length){am=a4.pop();
a6[am+"o"]=l(a6[am],am)
}while(ay.length){am=ay.pop();
a6[am+am]=T(a6[am],2)
}a6.DDDD=T(a6.DDD,3);
function bg(i,bu,bv){var bt;
if(bv==null){return bu
}if(i.meridiemHour!=null){return i.meridiemHour(bu,bv)
}else{if(i.isPM!=null){bt=i.isPM(bv);
if(bt&&bu<12){bu+=12
}if(!bt&&bu===12){bu=0
}return bu
}else{return bu
}}}function ag(){}function P(bt,i){if(i!==false){bk(bt)
}aU(this,bt);
this._d=new Date(+bt._d);
if(ai===false){ai=true;
W.updateOffset(this);
ai=false
}}function ao(bx){var bz=p(bx),by=bz.year||0,bt=bz.quarter||0,bu=bz.month||0,i=bz.week||0,bC=bz.day||0,bA=bz.hour||0,bw=bz.minute||0,bB=bz.second||0,bv=bz.millisecond||0;
this._milliseconds=+bv+bB*1000+bw*60000+bA*3600000;
this._days=+bC+i*7;
this._months=+bu+bt*3+by*12;
this._data={};
this._locale=W.localeData();
this._bubble()
}function aK(bu,bt){for(var bv in bt){if(a7(bt,bv)){bu[bv]=bt[bv]
}}if(a7(bt,"toString")){bu.toString=bt.toString
}if(a7(bt,"valueOf")){bu.valueOf=bt.valueOf
}return bu
}function aU(bx,bw){var bt,bv,bu;
if(typeof bw._isAMomentObject!=="undefined"){bx._isAMomentObject=bw._isAMomentObject
}if(typeof bw._i!=="undefined"){bx._i=bw._i
}if(typeof bw._f!=="undefined"){bx._f=bw._f
}if(typeof bw._l!=="undefined"){bx._l=bw._l
}if(typeof bw._strict!=="undefined"){bx._strict=bw._strict
}if(typeof bw._tzm!=="undefined"){bx._tzm=bw._tzm
}if(typeof bw._isUTC!=="undefined"){bx._isUTC=bw._isUTC
}if(typeof bw._offset!=="undefined"){bx._offset=bw._offset
}if(typeof bw._pf!=="undefined"){bx._pf=bw._pf
}if(typeof bw._locale!=="undefined"){bx._locale=bw._locale
}if(aY.length>0){for(bt in aY){bv=aY[bt];
bu=bw[bv];
if(typeof bu!=="undefined"){bx[bv]=bu
}}}return bx
}function q(i){if(i<0){return Math.ceil(i)
}else{return Math.floor(i)
}}function O(bw,bv,bu){var bt=""+Math.abs(bw),i=bw>=0;
while(bt.length<bv){bt="0"+bt
}return(i?(bu?"+":""):"-")+bt
}function d(bu,i){var bt={milliseconds:0,months:0};
bt.months=i.month()-bu.month()+(i.year()-bu.year())*12;
if(bu.clone().add(bt.months,"M").isAfter(i)){--bt.months
}bt.milliseconds=+i-+(bu.clone().add(bt.months,"M"));
return bt
}function ad(bu,i){var bt;
i=D(i,bu);
if(bu.isBefore(i)){bt=d(bu,i)
}else{bt=d(i,bu);
bt.milliseconds=-bt.milliseconds;
bt.months=-bt.months
}return bt
}function X(bt,i){return function(bx,bw){var bv,bu;
if(bw!==null&&!isNaN(+bw)){g(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period).");
bu=bx;
bx=bw;
bw=bu
}bx=typeof bx==="string"?+bx:bx;
bv=W.duration(bx,bw);
K(this,bv,bt);
return this
}
}function K(bu,bx,bw,bv){var bt=bx._milliseconds,by=bx._days,i=bx._months;
bv=bv==null?true:bv;
if(bt){bu._d.setTime(+bu._d+bt*bw)
}if(by){a2(bu,"Date",br(bu,"Date")+by*bw)
}if(i){bm(bu,br(bu,"Month")+i*bw)
}if(bv){W.updateOffset(bu,by||i)
}}function b(i){return Object.prototype.toString.call(i)==="[object Array]"
}function h(i){return Object.prototype.toString.call(i)==="[object Date]"||i instanceof Date
}function a3(by,bx,bu){var bt=Math.min(by.length,bx.length),bv=Math.abs(by.length-bx.length),bz=0,bw;
for(bw=0;
bw<bt;
bw++){if((bu&&by[bw]!==bx[bw])||(!bu&&R(by[bw])!==R(bx[bw]))){bz++
}}return bz+bv
}function a9(bt){if(bt){var i=bt.toLowerCase().replace(/(.)s$/,"$1");
bt=f[bt]||ba[i]||i
}return bt
}function p(bu){var bt={},i,bv;
for(bv in bu){if(a7(bu,bv)){i=a9(bv);
if(i){bt[i]=bu[bv]
}}}return bt
}function aG(bt){var i,bu;
if(bt.indexOf("week")===0){i=7;
bu="day"
}else{if(bt.indexOf("month")===0){i=12;
bu="month"
}else{return
}}W[bt]=function(bz,bw){var by,bv,bA=W._locale[bt],bx=[];
if(typeof bz==="number"){bw=bz;
bz=H
}bv=function(bC){var bB=W().utc().set(bu,bC);
return bA.call(W._locale,bB,bz||"")
};
if(bw!=null){return bv(bw)
}else{for(by=0;
by<i;
by++){bx.push(bv(by))
}return bx
}}
}function R(i){var bu=+i,bt=0;
if(bu!==0&&isFinite(bu)){if(bu>=0){bt=Math.floor(bu)
}else{bt=Math.ceil(bu)
}}return bt
}function bi(i,bt){return new Date(Date.UTC(i,bt+1,0)).getUTCDate()
}function aP(i,bu,bt){return F(W([i,11,31+bu-bt]),bu,bt).week
}function bc(i){return aV(i)?366:365
}function aV(i){return(i%4===0&&i%100!==0)||i%400===0
}function bk(i){var bt;
if(i._a&&i._pf.overflow===-2){bt=i._a[j]<0||i._a[j]>11?j:i._a[a5]<1||i._a[a5]>bi(i._a[B],i._a[j])?a5:i._a[A]<0||i._a[A]>24||(i._a[A]===24&&(i._a[aJ]!==0||i._a[y]!==0||i._a[aa]!==0))?A:i._a[aJ]<0||i._a[aJ]>59?aJ:i._a[y]<0||i._a[y]>59?y:i._a[aa]<0||i._a[aa]>999?aa:-1;
if(i._pf._overflowDayOfYear&&(bt<B||bt>a5)){bt=a5
}i._pf.overflow=bt
}}function aL(i){if(i._isValid==null){i._isValid=!isNaN(i._d.getTime())&&i._pf.overflow<0&&!i._pf.empty&&!i._pf.invalidMonth&&!i._pf.nullInput&&!i._pf.invalidFormat&&!i._pf.userInvalidated;
if(i._strict){i._isValid=i._isValid&&i._pf.charsLeftOver===0&&i._pf.unusedTokens.length===0&&i._pf.bigHour===H
}}return i._isValid
}function aX(i){return i?i.toLowerCase().replace("_","-"):i
}function aD(by){var bw=0,bu,bx,bt,bv;
while(bw<by.length){bv=aX(by[bw]).split("-");
bu=bv.length;
bx=aX(by[bw+1]);
bx=bx?bx.split("-"):null;
while(bu>0){bt=c(bv.slice(0,bu).join("-"));
if(bt){return bt
}if(bx&&bx.length>=bu&&a3(bv,bx,true)>=bu-1){break
}bu--
}bw++
}return null
}function c(i){var bu=null;
if(!av[i]&&aw){try{bu=W.locale();
require("./locale/"+i);
W.locale(bu)
}catch(bt){}}return av[i]
}function D(i,bt){var bu,bv;
if(bt._isUTC){bu=bt.clone();
bv=(W.isMoment(i)||h(i)?+i:+W(i))-(+bu);
bu._d.setTime(+bu._d+bv);
W.updateOffset(bu,false);
return bu
}else{return W(i).local()
}}aK(ag.prototype,{set:function(bt){var bv,bu;
for(bu in bt){bv=bt[bu];
if(typeof bv==="function"){this[bu]=bv
}else{this["_"+bu]=bv
}}this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)
},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(i){return this._months[i.month()]
},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(i){return this._monthsShort[i.month()]
},monthsParse:function(bu,by,bt){var bv,bx,bw;
if(!this._monthsParse){this._monthsParse=[];
this._longMonthsParse=[];
this._shortMonthsParse=[]
}for(bv=0;
bv<12;
bv++){bx=W.utc([2000,bv]);
if(bt&&!this._longMonthsParse[bv]){this._longMonthsParse[bv]=new RegExp("^"+this.months(bx,"").replace(".","")+"$","i");
this._shortMonthsParse[bv]=new RegExp("^"+this.monthsShort(bx,"").replace(".","")+"$","i")
}if(!bt&&!this._monthsParse[bv]){bw="^"+this.months(bx,"")+"|^"+this.monthsShort(bx,"");
this._monthsParse[bv]=new RegExp(bw.replace(".",""),"i")
}if(bt&&by==="MMMM"&&this._longMonthsParse[bv].test(bu)){return bv
}else{if(bt&&by==="MMM"&&this._shortMonthsParse[bv].test(bu)){return bv
}else{if(!bt&&this._monthsParse[bv].test(bu)){return bv
}}}}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(i){return this._weekdays[i.day()]
},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(i){return this._weekdaysShort[i.day()]
},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(i){return this._weekdaysMin[i.day()]
},weekdaysParse:function(bw){var bt,bv,bu;
if(!this._weekdaysParse){this._weekdaysParse=[]
}for(bt=0;
bt<7;
bt++){if(!this._weekdaysParse[bt]){bv=W([2000,1]).day(bt);
bu="^"+this.weekdays(bv,"")+"|^"+this.weekdaysShort(bv,"")+"|^"+this.weekdaysMin(bv,"");
this._weekdaysParse[bt]=new RegExp(bu.replace(".",""),"i")
}if(this._weekdaysParse[bt].test(bw)){return bt
}}},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(bt){var i=this._longDateFormat[bt];
if(!i&&this._longDateFormat[bt.toUpperCase()]){i=this._longDateFormat[bt.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(bu){return bu.slice(1)
});
this._longDateFormat[bt]=i
}return i
},isPM:function(i){return((i+"").toLowerCase().charAt(0)==="p")
},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(i,bt,bu){if(i>11){return bu?"pm":"PM"
}else{return bu?"am":"AM"
}},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(bu,bv,bt){var i=this._calendar[bu];
return typeof i==="function"?i.apply(bv,[bt]):i
},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(bv,bu,bt,bw){var i=this._relativeTime[bt];
return(typeof i==="function")?i(bv,bu,bt,bw):i.replace(/%d/i,bv)
},pastFuture:function(bu,i){var bt=this._relativeTime[bu>0?"future":"past"];
return typeof bt==="function"?bt(i):bt.replace(/%s/i,i)
},ordinal:function(i){return this._ordinal.replace("%d",i)
},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(i){return i
},postformat:function(i){return i
},week:function(i){return F(i,this._week.dow,this._week.doy).week
},_week:{dow:0,doy:6},firstDayOfWeek:function(){return this._week.dow
},firstDayOfYear:function(){return this._week.doy
},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate
}});
function at(i){if(i.match(/\[[\s\S]/)){return i.replace(/^\[|\]$/g,"")
}return i.replace(/\\/g,"")
}function x(bv){var bw=bv.match(aA),bt,bu;
for(bt=0,bu=bw.length;
bt<bu;
bt++){if(a6[bw[bt]]){bw[bt]=a6[bw[bt]]
}else{bw[bt]=at(bw[bt])
}}return function(bx){var i="";
for(bt=0;
bt<bu;
bt++){i+=bw[bt] instanceof Function?bw[bt].call(bx,bv):bw[bt]
}return i
}
}function az(i,bt){if(!i.isValid()){return i.localeData().invalidDate()
}bt=bo(bt,i.localeData());
if(!au[bt]){au[bt]=x(bt)
}return au[bt](i)
}function bo(bw,bt){var bu=5;
function bv(i){return bt.longDateFormat(i)||i
}al.lastIndex=0;
while(bu>=0&&al.test(bw)){bw=bw.replace(al,bv);
al.lastIndex=0;
bu-=1
}return bw
}function aE(bv,bu){var bt,i=bu._strict;
switch(bv){case"Q":return ak;
case"DDDD":return bf;
case"YYYY":case"GGGG":case"gggg":return i?aZ:I;
case"Y":case"G":case"g":return ah;
case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return i?ar:bn;
case"S":if(i){return ak
}case"SS":if(i){return v
}case"SSS":if(i){return bf
}case"DDD":return an;
case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return N;
case"a":case"A":return bu._locale._meridiemParse;
case"x":return w;
case"X":return a0;
case"Z":case"ZZ":return s;
case"T":return o;
case"SSSS":return bb;
case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return i?v:k;
case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return k;
case"Do":return i?bu._locale._ordinalParse:bu._locale._ordinalParseLenient;
default:bt=new RegExp(bl(aI(bv.replace("\\","")),"i"));
return bt
}}function aR(bt){bt=bt||"";
var i=(bt.match(s)||[]),bw=i[i.length-1]||[],bv=(bw+"").match(aj)||["-",0,0],bu=+(bv[1]*60)+R(bv[2]);
return bv[0]==="+"?bu:-bu
}function aH(bw,bu,bv){var bt,i=bv._a;
switch(bw){case"Q":if(bu!=null){i[j]=(R(bu)-1)*3
}break;
case"M":case"MM":if(bu!=null){i[j]=R(bu)-1
}break;
case"MMM":case"MMMM":bt=bv._locale.monthsParse(bu,bw,bv._strict);
if(bt!=null){i[j]=bt
}else{bv._pf.invalidMonth=bu
}break;
case"D":case"DD":if(bu!=null){i[a5]=R(bu)
}break;
case"Do":if(bu!=null){i[a5]=R(parseInt(bu.match(/\d{1,2}/)[0],10))
}break;
case"DDD":case"DDDD":if(bu!=null){bv._dayOfYear=R(bu)
}break;
case"YY":i[B]=W.parseTwoDigitYear(bu);
break;
case"YYYY":case"YYYYY":case"YYYYYY":i[B]=R(bu);
break;
case"a":case"A":bv._meridiem=bu;
break;
case"h":case"hh":bv._pf.bigHour=true;
case"H":case"HH":i[A]=R(bu);
break;
case"m":case"mm":i[aJ]=R(bu);
break;
case"s":case"ss":i[y]=R(bu);
break;
case"S":case"SS":case"SSS":case"SSSS":i[aa]=R(("0."+bu)*1000);
break;
case"x":bv._d=new Date(R(bu));
break;
case"X":bv._d=new Date(parseFloat(bu)*1000);
break;
case"Z":case"ZZ":bv._useUTC=true;
bv._tzm=aR(bu);
break;
case"dd":case"ddd":case"dddd":bt=bv._locale.weekdaysParse(bu);
if(bt!=null){bv._w=bv._w||{};
bv._w.d=bt
}else{bv._pf.invalidWeekday=bu
}break;
case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":bw=bw.substr(0,1);
case"gggg":case"GGGG":case"GGGGG":bw=bw.substr(0,2);
if(bu){bv._w=bv._w||{};
bv._w[bw]=R(bu)
}break;
case"gg":case"GG":bv._w=bv._w||{};
bv._w[bw]=W.parseTwoDigitYear(bu)
}}function Y(bu){var i,bw,bv,bx,bz,by,bt;
i=bu._w;
if(i.GG!=null||i.W!=null||i.E!=null){bz=1;
by=4;
bw=a1(i.GG,bu._a[B],F(W(),1,4).year);
bv=a1(i.W,1);
bx=a1(i.E,1)
}else{bz=bu._locale._week.dow;
by=bu._locale._week.doy;
bw=a1(i.gg,bu._a[B],F(W(),bz,by).year);
bv=a1(i.w,1);
if(i.d!=null){bx=i.d;
if(bx<bz){++bv
}}else{if(i.e!=null){bx=i.e+bz
}else{bx=bz
}}}bt=z(bw,bv,bx,by,bz);
bu._a[B]=bt.year;
bu._dayOfYear=bt.dayOfYear
}function aq(bx){var by,bw,bv=[],bu,bt;
if(bx._d){return
}bu=r(bx);
if(bx._w&&bx._a[a5]==null&&bx._a[j]==null){Y(bx)
}if(bx._dayOfYear){bt=a1(bx._a[B],bu[B]);
if(bx._dayOfYear>bc(bt)){bx._pf._overflowDayOfYear=true
}bw=M(bt,0,bx._dayOfYear);
bx._a[j]=bw.getUTCMonth();
bx._a[a5]=bw.getUTCDate()
}for(by=0;
by<3&&bx._a[by]==null;
++by){bx._a[by]=bv[by]=bu[by]
}for(;
by<7;
by++){bx._a[by]=bv[by]=(bx._a[by]==null)?(by===2?1:0):bx._a[by]
}if(bx._a[A]===24&&bx._a[aJ]===0&&bx._a[y]===0&&bx._a[aa]===0){bx._nextDay=true;
bx._a[A]=0
}bx._d=(bx._useUTC?M:aB).apply(null,bv);
if(bx._tzm!=null){bx._d.setUTCMinutes(bx._d.getUTCMinutes()-bx._tzm)
}if(bx._nextDay){bx._a[A]=24
}}function aN(bt){var i;
if(bt._d){return
}i=p(bt._i);
bt._a=[i.year,i.month,i.day||i.date,i.hour,i.minute,i.second,i.millisecond];
aq(bt)
}function r(bt){var i=new Date();
if(bt._useUTC){return[i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()]
}else{return[i.getFullYear(),i.getMonth(),i.getDate()]
}}function V(bv){if(bv._f===W.ISO_8601){aC(bv);
return
}bv._a=[];
bv._pf.empty=true;
var by=""+bv._i,bx,bu,bB,bw,bA,bt=by.length,bz=0;
bB=bo(bv._f,bv._locale).match(aA)||[];
for(bx=0;
bx<bB.length;
bx++){bw=bB[bx];
bu=(by.match(aE(bw,bv))||[])[0];
if(bu){bA=by.substr(0,by.indexOf(bu));
if(bA.length>0){bv._pf.unusedInput.push(bA)
}by=by.slice(by.indexOf(bu)+bu.length);
bz+=bu.length
}if(a6[bw]){if(bu){bv._pf.empty=false
}else{bv._pf.unusedTokens.push(bw)
}aH(bw,bu,bv)
}else{if(bv._strict&&!bu){bv._pf.unusedTokens.push(bw)
}}}bv._pf.charsLeftOver=bt-bz;
if(by.length>0){bv._pf.unusedInput.push(by)
}if(bv._pf.bigHour===true&&bv._a[A]<=12){bv._pf.bigHour=H
}bv._a[A]=bg(bv._locale,bv._a[A],bv._meridiem);
aq(bv);
bk(bv)
}function aI(i){return i.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(bt,bx,bw,bv,bu){return bx||bw||bv||bu
})
}function bl(i){return i.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")
}function a8(bt){var bx,bv,bw,bu,by;
if(bt._f.length===0){bt._pf.invalidFormat=true;
bt._d=new Date(NaN);
return
}for(bu=0;
bu<bt._f.length;
bu++){by=0;
bx=aU({},bt);
if(bt._useUTC!=null){bx._useUTC=bt._useUTC
}bx._pf=ap();
bx._f=bt._f[bu];
V(bx);
if(!aL(bx)){continue
}by+=bx._pf.charsLeftOver;
by+=bx._pf.unusedTokens.length*10;
bx._pf.score=by;
if(bw==null||by<bw){bw=by;
bv=bx
}}aK(bt,bv||bx)
}function aC(bw){var bx,bt,bv=bw._i,bu=aW.exec(bv);
if(bu){bw._pf.iso=true;
for(bx=0,bt=be.length;
bx<bt;
bx++){if(be[bx][1].exec(bv)){bw._f=be[bx][0]+(bu[6]||" ");
break
}}for(bx=0,bt=L.length;
bx<bt;
bx++){if(L[bx][1].exec(bv)){bw._f+=L[bx][0];
break
}}if(bv.match(s)){bw._f+="Z"
}V(bw)
}else{bw._isValid=false
}}function n(i){aC(i);
if(i._isValid===false){delete i._isValid;
W.createFromInputFallback(i)
}}function J(bt,bw){var bv=[],bu;
for(bu=0;
bu<bt.length;
++bu){bv.push(bw(bt[bu],bu))
}return bv
}function U(bu){var bt=bu._i,i;
if(bt===H){bu._d=new Date()
}else{if(h(bt)){bu._d=new Date(+bt)
}else{if((i=e.exec(bt))!==null){bu._d=new Date(+i[1])
}else{if(typeof bt==="string"){n(bu)
}else{if(b(bt)){bu._a=J(bt.slice(0),function(bv){return parseInt(bv,10)
});
aq(bu)
}else{if(typeof(bt)==="object"){aN(bu)
}else{if(typeof(bt)==="number"){bu._d=new Date(bt)
}else{W.createFromInputFallback(bu)
}}}}}}}}function aB(bz,i,bx,bw,by,bv,bu){var bt=new Date(bz,i,bx,bw,by,bv,bu);
if(bz<1970){bt.setFullYear(bz)
}return bt
}function M(bt){var i=new Date(Date.UTC.apply(null,arguments));
if(bt<1970){i.setUTCFullYear(bt)
}return i
}function bj(bt,i){if(typeof bt==="string"){if(!isNaN(bt)){bt=parseInt(bt,10)
}else{bt=i.weekdaysParse(bt);
if(typeof bt!=="number"){return null
}}}return bt
}function aT(bt,bv,bu,bw,i){return i.relativeTime(bv||1,!!bu,bt,bw)
}function E(bw,bt,bA){var bu=W.duration(bw).abs(),bB=ae(bu.as("s")),bv=ae(bu.as("m")),bz=ae(bu.as("h")),bC=ae(bu.as("d")),i=ae(bu.as("M")),bx=ae(bu.as("y")),by=bB<C.s&&["s",bB]||bv===1&&["m"]||bv<C.m&&["mm",bv]||bz===1&&["h"]||bz<C.h&&["hh",bz]||bC===1&&["d"]||bC<C.d&&["dd",bC]||i===1&&["M"]||i<C.M&&["MM",i]||bx===1&&["y"]||["yy",bx];
by[2]=bt;
by[3]=+bw>0;
by[4]=bA;
return aT.apply({},by)
}function F(bw,bu,bx){var bt=bx-bu,i=bx-bw.day(),bv;
if(i>bt){i-=7
}if(i<bt-7){i+=7
}bv=W(bw).add(i,"d");
return{week:Math.ceil(bv.dayOfYear()/7),year:bv.year()}
}function z(bw,bv,bx,bz,i){var by=M(bw,0,1).getUTCDay(),bu,bt;
by=by===0?7:by;
bx=bx!=null?bx:i;
bu=i-by+(by>bz?7:0)-(by<i?7:0);
bt=7*(bv-1)+(bx-i)+bu+1;
return{year:bt>0?bw:bw-1,dayOfYear:bt>0?bt:bc(bw-1)+bt}
}function S(bt){var i=bt._i,bv=bt._f,bu;
bt._locale=bt._locale||W.localeData(bt._l);
if(i===null||(bv===H&&i==="")){return W.invalid({nullInput:true})
}if(typeof i==="string"){bt._i=i=bt._locale.preparse(i)
}if(W.isMoment(i)){return new P(i,true)
}else{if(bv){if(b(bv)){a8(bt)
}else{V(bt)
}}else{U(bt)
}}bu=new P(bt);
if(bu._nextDay){bu.add(1,"d");
bu._nextDay=H
}return bu
}W=function(bu,bv,i,bt){var bw;
if(typeof(i)==="boolean"){bt=i;
i=H
}bw={};
bw._isAMomentObject=true;
bw._i=bu;
bw._f=bv;
bw._l=i;
bw._strict=bt;
bw._isUTC=false;
bw._pf=ap();
return S(bw)
};
W.suppressDeprecationWarnings=false;
W.createFromInputFallback=bq("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(i){i._d=new Date(i._i+(i._useUTC?" UTC":""))
});
function aF(bv,bw){var bu,bt;
if(bw.length===1&&b(bw[0])){bw=bw[0]
}if(!bw.length){return W()
}bu=bw[0];
for(bt=1;
bt<bw.length;
++bt){if(bw[bt][bv](bu)){bu=bw[bt]
}}return bu
}W.min=function(){var i=[].slice.call(arguments,0);
return aF("isBefore",i)
};
W.max=function(){var i=[].slice.call(arguments,0);
return aF("isAfter",i)
};
W.utc=function(bu,bv,i,bt){var bw;
if(typeof(i)==="boolean"){bt=i;
i=H
}bw={};
bw._isAMomentObject=true;
bw._useUTC=true;
bw._isUTC=true;
bw._l=i;
bw._i=bu;
bw._f=bv;
bw._strict=bt;
bw._pf=ap();
return S(bw).utc()
};
W.unix=function(i){return W(i*1000)
};
W.duration=function(bu,by){var bz=bu,bx=null,bt,bw,bv,i;
if(W.isDuration(bu)){bz={ms:bu._milliseconds,d:bu._days,M:bu._months}
}else{if(typeof bu==="number"){bz={};
if(by){bz[by]=bu
}else{bz.milliseconds=bu
}}else{if(!!(bx=bh.exec(bu))){bt=(bx[1]==="-")?-1:1;
bz={y:0,d:R(bx[a5])*bt,h:R(bx[A])*bt,m:R(bx[aJ])*bt,s:R(bx[y])*bt,ms:R(bx[aa])*bt}
}else{if(!!(bx=aO.exec(bu))){bt=(bx[1]==="-")?-1:1;
bv=function(bB){var bA=bB&&parseFloat(bB.replace(",","."));
return(isNaN(bA)?0:bA)*bt
};
bz={y:bv(bx[2]),M:bv(bx[3]),d:bv(bx[4]),h:bv(bx[5]),m:bv(bx[6]),s:bv(bx[7]),w:bv(bx[8])}
}else{if(bz==null){bz={}
}else{if(typeof bz==="object"&&("from" in bz||"to" in bz)){i=ad(W(bz.from),W(bz.to));
bz={};
bz.ms=i.milliseconds;
bz.M=i.months
}}}}}}bw=new ao(bz);
if(W.isDuration(bu)&&a7(bu,"_locale")){bw._locale=bu._locale
}return bw
};
W.version=aM;
W.defaultFormat=ab;
W.ISO_8601=function(){};
W.momentProperties=aY;
W.updateOffset=function(){};
W.relativeTimeThreshold=function(i,bt){if(C[i]===H){return false
}if(bt===H){return C[i]
}C[i]=bt;
return true
};
W.lang=bq("moment.lang is deprecated. Use moment.locale instead.",function(i,bt){return W.locale(i,bt)
});
W.locale=function(bt,i){var bu;
if(bt){if(typeof(i)!=="undefined"){bu=W.defineLocale(bt,i)
}else{bu=W.localeData(bt)
}if(bu){W.duration._locale=W._locale=bu
}}return W._locale._abbr
};
W.defineLocale=function(bt,i){if(i!==null){i.abbr=bt;
if(!av[bt]){av[bt]=new ag()
}av[bt].set(i);
W.locale(bt);
return av[bt]
}else{delete av[bt];
return null
}};
W.langData=bq("moment.langData is deprecated. Use moment.localeData instead.",function(i){return W.localeData(i)
});
W.localeData=function(bt){var i;
if(bt&&bt._locale&&bt._locale._abbr){bt=bt._locale._abbr
}if(!bt){return W._locale
}if(!b(bt)){i=c(bt);
if(i){return i
}bt=[bt]
}return aD(bt)
};
W.isMoment=function(i){return i instanceof P||(i!=null&&a7(i,"_isAMomentObject"))
};
W.isDuration=function(i){return i instanceof ao
};
for(am=ac.length-1;
am>=0;
--am){aG(ac[am])
}W.normalizeUnits=function(i){return a9(i)
};
W.invalid=function(bt){var i=W.utc(NaN);
if(bt!=null){aK(i._pf,bt)
}else{i._pf.userInvalidated=true
}return i
};
W.parseZone=function(){return W.apply(null,arguments).parseZone()
};
W.parseTwoDigitYear=function(i){return R(i)+(R(i)>68?1900:2000)
};
W.isDate=h;
aK(W.fn=P.prototype,{clone:function(){return W(this)
},valueOf:function(){return +this._d-((this._offset||0)*60000)
},unix:function(){return Math.floor(+this/1000)
},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
},toDate:function(){return this._offset?new Date(+this):this._d
},toISOString:function(){var i=W(this).utc();
if(0<i.year()&&i.year()<=9999){if("function"===typeof Date.prototype.toISOString){return this.toDate().toISOString()
}else{return az(i,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
}}else{return az(i,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
}},toArray:function(){var i=this;
return[i.year(),i.month(),i.date(),i.hours(),i.minutes(),i.seconds(),i.milliseconds()]
},isValid:function(){return aL(this)
},isDSTShifted:function(){if(this._a){return this.isValid()&&a3(this._a,(this._isUTC?W.utc(this._a):W(this._a)).toArray())>0
}return false
},parsingFlags:function(){return aK({},this._pf)
},invalidAt:function(){return this._pf.overflow
},utc:function(i){return this.utcOffset(0,i)
},local:function(i){if(this._isUTC){this.utcOffset(0,i);
this._isUTC=false;
if(i){this.subtract(this._dateUtcOffset(),"m")
}}return this
},format:function(bt){var i=az(this,bt||W.defaultFormat);
return this.localeData().postformat(i)
},add:X(1,"add"),subtract:X(-1,"subtract"),diff:function(by,bx,bA){var bw=D(by,this),bu=(bw.utcOffset()-this.utcOffset())*60000,bt,bz,i,bv;
bx=a9(bx);
if(bx==="year"||bx==="month"||bx==="quarter"){i=m(this,bw);
if(bx==="quarter"){i=i/3
}else{if(bx==="year"){i=i/12
}}}else{bz=this-bw;
i=bx==="second"?bz/1000:bx==="minute"?bz/60000:bx==="hour"?bz/3600000:bx==="day"?(bz-bu)/86400000:bx==="week"?(bz-bu)/604800000:bz
}return bA?i:q(i)
},from:function(bt,i){return W.duration({to:this,from:bt}).locale(this.locale()).humanize(!i)
},fromNow:function(i){return this.from(W(),i)
},calendar:function(bw){var bt=bw||W(),i=D(bt,this).startOf("day"),bv=this.diff(i,"days",true),bu=bv<-6?"sameElse":bv<-1?"lastWeek":bv<0?"lastDay":bv<1?"sameDay":bv<2?"nextDay":bv<7?"nextWeek":"sameElse";
return this.format(this.localeData().calendar(bu,this,W(bt)))
},isLeapYear:function(){return aV(this.year())
},isDST:function(){return(this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset())
},day:function(bt){var i=this._isUTC?this._d.getUTCDay():this._d.getDay();
if(bt!=null){bt=bj(bt,this.localeData());
return this.add(bt-i,"d")
}else{return i
}},month:u("Month",true),startOf:function(i){i=a9(i);
switch(i){case"year":this.month(0);
case"quarter":case"month":this.date(1);
case"week":case"isoWeek":case"day":this.hours(0);
case"hour":this.minutes(0);
case"minute":this.seconds(0);
case"second":this.milliseconds(0)
}if(i==="week"){this.weekday(0)
}else{if(i==="isoWeek"){this.isoWeekday(1)
}}if(i==="quarter"){this.month(Math.floor(this.month()/3)*3)
}return this
},endOf:function(i){i=a9(i);
if(i===H||i==="millisecond"){return this
}return this.startOf(i).add(1,(i==="isoWeek"?"week":i)).subtract(1,"ms")
},isAfter:function(bt,i){var bu;
i=a9(typeof i!=="undefined"?i:"millisecond");
if(i==="millisecond"){bt=W.isMoment(bt)?bt:W(bt);
return +this>+bt
}else{bu=W.isMoment(bt)?+bt:+W(bt);
return bu<+this.clone().startOf(i)
}},isBefore:function(bt,i){var bu;
i=a9(typeof i!=="undefined"?i:"millisecond");
if(i==="millisecond"){bt=W.isMoment(bt)?bt:W(bt);
return +this<+bt
}else{bu=W.isMoment(bt)?+bt:+W(bt);
return +this.clone().endOf(i)<bu
}},isBetween:function(bu,bt,i){return this.isAfter(bu,i)&&this.isBefore(bt,i)
},isSame:function(bt,i){var bu;
i=a9(i||"millisecond");
if(i==="millisecond"){bt=W.isMoment(bt)?bt:W(bt);
return +this===+bt
}else{bu=+W(bt);
return +(this.clone().startOf(i))<=bu&&bu<=+(this.clone().endOf(i))
}},min:bq("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(i){i=W.apply(null,arguments);
return i<this?this:i
}),max:bq("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(i){i=W.apply(null,arguments);
return i>this?this:i
}),zone:bq("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",function(i,bt){if(i!=null){if(typeof i!=="string"){i=-i
}this.utcOffset(i,bt);
return this
}else{return -this.utcOffset()
}}),utcOffset:function(i,bv){var bu=this._offset||0,bt;
if(i!=null){if(typeof i==="string"){i=aR(i)
}if(Math.abs(i)<16){i=i*60
}if(!this._isUTC&&bv){bt=this._dateUtcOffset()
}this._offset=i;
this._isUTC=true;
if(bt!=null){this.add(bt,"m")
}if(bu!==i){if(!bv||this._changeInProgress){K(this,W.duration(i-bu,"m"),1,false)
}else{if(!this._changeInProgress){this._changeInProgress=true;
W.updateOffset(this,true);
this._changeInProgress=null
}}}return this
}else{return this._isUTC?bu:this._dateUtcOffset()
}},isLocal:function(){return !this._isUTC
},isUtcOffset:function(){return this._isUTC
},isUtc:function(){return this._isUTC&&this._offset===0
},zoneAbbr:function(){return this._isUTC?"UTC":""
},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""
},parseZone:function(){if(this._tzm){this.utcOffset(this._tzm)
}else{if(typeof this._i==="string"){this.utcOffset(aR(this._i))
}}return this
},hasAlignedHourOffset:function(i){if(!i){i=0
}else{i=W(i).utcOffset()
}return(this.utcOffset()-i)%60===0
},daysInMonth:function(){return bi(this.year(),this.month())
},dayOfYear:function(i){var bt=ae((W(this).startOf("day")-W(this).startOf("year"))/86400000)+1;
return i==null?bt:this.add((i-bt),"d")
},quarter:function(i){return i==null?Math.ceil((this.month()+1)/3):this.month((i-1)*3+this.month()%3)
},weekYear:function(i){var bt=F(this,this.localeData()._week.dow,this.localeData()._week.doy).year;
return i==null?bt:this.add((i-bt),"y")
},isoWeekYear:function(i){var bt=F(this,1,4).year;
return i==null?bt:this.add((i-bt),"y")
},week:function(i){var bt=this.localeData().week(this);
return i==null?bt:this.add((i-bt)*7,"d")
},isoWeek:function(i){var bt=F(this,1,4).week;
return i==null?bt:this.add((i-bt)*7,"d")
},weekday:function(i){var bt=(this.day()+7-this.localeData()._week.dow)%7;
return i==null?bt:this.add(i-bt,"d")
},isoWeekday:function(i){return i==null?this.day()||7:this.day(this.day()%7?i:i-7)
},isoWeeksInYear:function(){return aP(this.year(),1,4)
},weeksInYear:function(){var i=this.localeData()._week;
return aP(this.year(),i.dow,i.doy)
},get:function(i){i=a9(i);
return this[i]()
},set:function(i,bu){var bt;
if(typeof i==="object"){for(bt in i){this.set(bt,i[bt])
}}else{i=a9(i);
if(typeof this[i]==="function"){this[i](bu)
}}return this
},locale:function(bt){var i;
if(bt===H){return this._locale._abbr
}else{i=W.localeData(bt);
if(i!=null){this._locale=i
}return this
}},lang:bq("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(i){if(i===H){return this.localeData()
}else{return this.locale(i)
}}),localeData:function(){return this._locale
},_dateUtcOffset:function(){return -Math.round(this._d.getTimezoneOffset()/15)*15
}});
function bm(i,bt){var bu;
if(typeof bt==="string"){bt=i.localeData().monthsParse(bt);
if(typeof bt!=="number"){return i
}}bu=Math.min(i.date(),bi(i.year(),bt));
i._d["set"+(i._isUTC?"UTC":"")+"Month"](bt,bu);
return i
}function br(bt,i){return bt._d["get"+(bt._isUTC?"UTC":"")+i]()
}function a2(bt,i,bu){if(i==="Month"){return bm(bt,bu)
}else{return bt._d["set"+(bt._isUTC?"UTC":"")+i](bu)
}}function u(i,bt){return function(bu){if(bu!=null){a2(this,i,bu);
W.updateOffset(this,bt);
return this
}else{return br(this,i)
}}
}W.fn.millisecond=W.fn.milliseconds=u("Milliseconds",false);
W.fn.second=W.fn.seconds=u("Seconds",false);
W.fn.minute=W.fn.minutes=u("Minutes",false);
W.fn.hour=W.fn.hours=u("Hours",true);
W.fn.date=u("Date",true);
W.fn.dates=bq("dates accessor is deprecated. Use date instead.",u("Date",true));
W.fn.year=u("FullYear",true);
W.fn.years=bq("years accessor is deprecated. Use year instead.",u("FullYear",true));
W.fn.days=W.fn.day;
W.fn.months=W.fn.month;
W.fn.weeks=W.fn.week;
W.fn.isoWeeks=W.fn.isoWeek;
W.fn.quarters=W.fn.quarter;
W.fn.toJSON=W.fn.toISOString;
W.fn.isUTC=W.fn.isUtc;
function t(i){return i*400/146097
}function bp(i){return i*146097/400
}aK(W.duration.fn=ao.prototype,{_bubble:function(){var bu=this._milliseconds,bz=this._days,i=this._months,bx=this._data,by,bw,bt,bv=0;
bx.milliseconds=bu%1000;
by=q(bu/1000);
bx.seconds=by%60;
bw=q(by/60);
bx.minutes=bw%60;
bt=q(bw/60);
bx.hours=bt%24;
bz+=q(bt/24);
bv=q(t(bz));
bz-=q(bp(bv));
i+=q(bz/30);
bz%=30;
bv+=q(i/12);
i%=12;
bx.days=bz;
bx.months=i;
bx.years=bv
},abs:function(){this._milliseconds=Math.abs(this._milliseconds);
this._days=Math.abs(this._days);
this._months=Math.abs(this._months);
this._data.milliseconds=Math.abs(this._data.milliseconds);
this._data.seconds=Math.abs(this._data.seconds);
this._data.minutes=Math.abs(this._data.minutes);
this._data.hours=Math.abs(this._data.hours);
this._data.months=Math.abs(this._data.months);
this._data.years=Math.abs(this._data.years);
return this
},weeks:function(){return q(this.days()/7)
},valueOf:function(){return this._milliseconds+this._days*86400000+(this._months%12)*2592000000+R(this._months/12)*31536000000
},humanize:function(bt){var i=E(this,!bt,this.localeData());
if(bt){i=this.localeData().pastFuture(+this,i)
}return this.localeData().postformat(i)
},add:function(i,bu){var bt=W.duration(i,bu);
this._milliseconds+=bt._milliseconds;
this._days+=bt._days;
this._months+=bt._months;
this._bubble();
return this
},subtract:function(i,bu){var bt=W.duration(i,bu);
this._milliseconds-=bt._milliseconds;
this._days-=bt._days;
this._months-=bt._months;
this._bubble();
return this
},get:function(i){i=a9(i);
return this[i.toLowerCase()+"s"]()
},as:function(bt){var bu,i;
bt=a9(bt);
if(bt==="month"||bt==="year"){bu=this._days+this._milliseconds/86400000;
i=this._months+t(bu)*12;
return bt==="month"?i:i/12
}else{bu=this._days+Math.round(bp(this._months/12));
switch(bt){case"week":return bu/7+this._milliseconds/604800000;
case"day":return bu+this._milliseconds/86400000;
case"hour":return bu*24+this._milliseconds/3600000;
case"minute":return bu*24*60+this._milliseconds/60000;
case"second":return bu*24*60*60+this._milliseconds/1000;
case"millisecond":return Math.floor(bu*24*60*60*1000)+this._milliseconds;
default:throw new Error("Unknown unit "+bt)
}}},lang:W.fn.lang,locale:W.fn.locale,toIsoString:bq("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()
}),toISOString:function(){var bv=Math.abs(this.years()),i=Math.abs(this.months()),bx=Math.abs(this.days()),bt=Math.abs(this.hours()),bu=Math.abs(this.minutes()),bw=Math.abs(this.seconds()+this.milliseconds()/1000);
if(!this.asSeconds()){return"P0D"
}return(this.asSeconds()<0?"-":"")+"P"+(bv?bv+"Y":"")+(i?i+"M":"")+(bx?bx+"D":"")+((bt||bu||bw)?"T":"")+(bt?bt+"H":"")+(bu?bu+"M":"")+(bw?bw+"S":"")
},localeData:function(){return this._locale
},toJSON:function(){return this.toISOString()
}});
W.duration.fn.toString=W.duration.fn.toISOString;
function af(i){W.duration.fn[i]=function(){return this._data[i]
}
}for(am in G){if(a7(G,am)){af(am.toLowerCase())
}}W.duration.fn.asMilliseconds=function(){return this.as("ms")
};
W.duration.fn.asSeconds=function(){return this.as("s")
};
W.duration.fn.asMinutes=function(){return this.as("m")
};
W.duration.fn.asHours=function(){return this.as("h")
};
W.duration.fn.asDays=function(){return this.as("d")
};
W.duration.fn.asWeeks=function(){return this.as("weeks")
};
W.duration.fn.asMonths=function(){return this.as("M")
};
W.duration.fn.asYears=function(){return this.as("y")
};
W.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(bu){var i=bu%10,bt=(R(bu%100/10)===1)?"th":(i===1)?"st":(i===2)?"nd":(i===3)?"rd":"th";
return bu+bt
}});
(function(i){i(W)
}(function(i){return i.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(bt){return/^nm$/i.test(bt)
},meridiem:function(bt,bu,bv){if(bt<12){return bv?"vm":"VM"
}else{return bv?"nm":"NM"
}},longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(bt){return bt+((bt===1||bt===8||bt>=20)?"ste":"de")
},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}})
}));
(function(i){i(W)
}(function(bu){var i={"1":"١","2":"٢","3":"٣","4":"٤","5":"٥","6":"٦","7":"٧","8":"٨","9":"٩","0":"٠"},bt={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};
return bu.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiemParse:/ص|م/,isPM:function(bv){return"م"===bv
},meridiem:function(bv,bx,bw){if(bv<12){return"ص"
}else{return"م"
}},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(bv){return bv.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(bw){return bt[bw]
}).replace(/،/g,",")
},postformat:function(bv){return bv.replace(/\d/g,function(bw){return i[bw]
}).replace(/,/g,"،")
},week:{dow:6,doy:12}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(by){var bt={"1":"١","2":"٢","3":"٣","4":"٤","5":"٥","6":"٦","7":"٧","8":"٨","9":"٩","0":"٠"},bx={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},bv=function(bz){return bz===0?0:bz===1?1:bz===2?2:bz%100>=3&&bz%100<=10?3:bz%100>=11?4:5
},bw={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},bu=function(bz){return function(bC,bB,bA,bE){var bD=bv(bC),bF=bw[bz][bv(bC)];
if(bD===2){bF=bF[bB?0:1]
}return bF.replace(/%d/i,bC)
}
},i=["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"];
return by.defineLocale("ar",{months:i,monthsShort:i,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiemParse:/ص|م/,isPM:function(bz){return"م"===bz
},meridiem:function(bz,bB,bA){if(bz<12){return"ص"
}else{return"م"
}},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:bu("s"),m:bu("m"),mm:bu("m"),h:bu("h"),hh:bu("h"),d:bu("d"),dd:bu("d"),M:bu("M"),MM:bu("M"),y:bu("y"),yy:bu("y")},preparse:function(bz){return bz.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(bA){return bx[bA]
}).replace(/،/g,",")
},postformat:function(bz){return bz.replace(/\d/g,function(bA){return bt[bA]
}).replace(/,/g,"،")
},week:{dow:6,doy:12}})
}));
(function(i){i(W)
}(function(bt){var i={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"};
return bt.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(bu){return/^(gündüz|axşam)$/.test(bu)
},meridiem:function(bu,bw,bv){if(bu<4){return"gecə"
}else{if(bu<12){return"səhər"
}else{if(bu<17){return"gündüz"
}else{return"axşam"
}}}},ordinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(bw){if(bw===0){return bw+"-ıncı"
}var bv=bw%10,bu=bw%100-bv,bx=bw>=100?100:null;
return bw+(i[bv]||i[bu]||i[bx])
},week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(bv){function bt(bz,by){var bx=bz.split("_");
return by%10===1&&by%100!==11?bx[0]:(by%10>=2&&by%10<=4&&(by%100<10||by%100>=20)?bx[1]:bx[2])
}function bw(bz,by,bx){var bA={mm:by?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:by?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"};
if(bx==="m"){return by?"хвіліна":"хвіліну"
}else{if(bx==="h"){return by?"гадзіна":"гадзіну"
}else{return bz+" "+bt(bA[bx],+bz)
}}}function bu(by,bA){var bx={nominative:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_"),accusative:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_")},bz=(/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(bA)?"accusative":"nominative";
return bx[bz][by.month()]
}function i(bx,bA){var by={nominative:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),accusative:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_")},bz=(/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/).test(bA)?"accusative":"nominative";
return by[bz][bx.day()]
}return bv.defineLocale("be",{months:bu,monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:i,weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., LT",LLLL:"dddd, D MMMM YYYY г., LT"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"
},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";
case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"
}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:bw,mm:bw,h:bw,hh:bw,d:"дзень",dd:bw,M:"месяц",MM:bw,y:"год",yy:bw},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(bx){return/^(дня|вечара)$/.test(bx)
},meridiem:function(bx,bz,by){if(bx<4){return"ночы"
}else{if(bx<12){return"раніцы"
}else{if(bx<17){return"дня"
}else{return"вечара"
}}}},ordinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(bx,by){switch(by){case"M":case"d":case"DDD":case"w":case"W":return(bx%10===2||bx%10===3)&&(bx%100!==12&&bx%100!==13)?bx+"-і":bx+"-ы";
case"D":return bx+"-га";
default:return bx
}},week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";
case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"
}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(bv){var bu=bv%10,bt=bv%100;
if(bv===0){return bv+"-ев"
}else{if(bt===0){return bv+"-ен"
}else{if(bt>10&&bt<20){return bv+"-ти"
}else{if(bu===1){return bv+"-ви"
}else{if(bu===2){return bv+"-ри"
}else{if(bu===7||bu===8){return bv+"-ми"
}else{return bv+"-ти"
}}}}}}},week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(bu){var i={"1":"১","2":"২","3":"৩","4":"৪","5":"৫","6":"৬","7":"৭","8":"৮","9":"৯","0":"০"},bt={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"};
return bu.defineLocale("bn",{months:"জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি".split("_"),weekdaysMin:"রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কএক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(bv){return bv.replace(/[১২৩৪৫৬৭৮৯০]/g,function(bw){return bt[bw]
})
},postformat:function(bv){return bv.replace(/\d/g,function(bw){return i[bw]
})
},meridiemParse:/রাত|শকাল|দুপুর|বিকেল|রাত/,isPM:function(bv){return/^(দুপুর|বিকেল|রাত)$/.test(bv)
},meridiem:function(bv,bx,bw){if(bv<4){return"রাত"
}else{if(bv<10){return"শকাল"
}else{if(bv<17){return"দুপুর"
}else{if(bv<20){return"বিকেল"
}else{return"রাত"
}}}}},week:{dow:0,doy:6}})
}));
(function(i){i(W)
}(function(bu){var i={"1":"༡","2":"༢","3":"༣","4":"༤","5":"༥","6":"༦","7":"༧","8":"༨","9":"༩","0":"༠"},bt={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"};
return bu.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(bv){return bv.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(bw){return bt[bw]
})
},postformat:function(bv){return bv.replace(/\d/g,function(bw){return i[bw]
})
},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,isPM:function(bv){return/^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(bv)
},meridiem:function(bv,bx,bw){if(bv<4){return"མཚན་མོ"
}else{if(bv<10){return"ཞོགས་ཀས"
}else{if(bv<17){return"ཉིན་གུང"
}else{if(bv<20){return"དགོང་དག"
}else{return"མཚན་མོ"
}}}}},week:{dow:0,doy:6}})
}));
(function(i){i(W)
}(function(bw){function bx(bA,bz,by){var bB={mm:"munutenn",MM:"miz",dd:"devezh"};
return bA+" "+i(bB[by],bA)
}function bv(by){switch(bt(by)){case 1:case 3:case 4:case 5:case 9:return by+" bloaz";
default:return by+" vloaz"
}}function bt(by){if(by>9){return bt(by%10)
}return by
}function i(bz,by){if(by===2){return bu(bz)
}return bz
}function bu(bz){var by={m:"v",b:"v",d:"z"};
if(by[bz.charAt(0)]===H){return bz
}return by[bz.charAt(0)]+bz.substring(1)
}return bw.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY LT",LLLL:"dddd, D [a viz] MMMM YYYY LT"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",m:"ur vunutenn",mm:bx,h:"un eur",hh:"%d eur",d:"un devezh",dd:bx,M:"ur miz",MM:bx,y:"ur bloaz",yy:bv},ordinalParse:/\d{1,2}(añ|vet)/,ordinal:function(bz){var by=(bz===1)?"añ":"vet";
return bz+by
},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){function bt(bx,bw,bv){var bu=bx+" ";
switch(bv){case"m":return bw?"jedna minuta":"jedne minute";
case"mm":if(bx===1){bu+="minuta"
}else{if(bx===2||bx===3||bx===4){bu+="minute"
}else{bu+="minuta"
}}return bu;
case"h":return bw?"jedan sat":"jednog sata";
case"hh":if(bx===1){bu+="sat"
}else{if(bx===2||bx===3||bx===4){bu+="sata"
}else{bu+="sati"
}}return bu;
case"dd":if(bx===1){bu+="dan"
}else{bu+="dana"
}return bu;
case"MM":if(bx===1){bu+="mjesec"
}else{if(bx===2||bx===3||bx===4){bu+="mjeseca"
}else{bu+="mjeseci"
}}return bu;
case"yy":if(bx===1){bu+="godina"
}else{if(bx===2||bx===3||bx===4){bu+="godine"
}else{bu+="godina"
}}return bu
}}return i.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";
case 3:return"[u] [srijedu] [u] LT";
case 6:return"[u] [subotu] [u] LT";
case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"
}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";
case 6:return"[prošle] [subote] [u] LT";
case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"
}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:bt,mm:bt,h:bt,hh:bt,d:"dan",dd:bt,M:"mjesec",MM:bt,y:"godinu",yy:bt},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("ca",{months:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:"gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[avui a "+((this.hours()!==1)?"les":"la")+"] LT"
},nextDay:function(){return"[demà a "+((this.hours()!==1)?"les":"la")+"] LT"
},nextWeek:function(){return"dddd [a "+((this.hours()!==1)?"les":"la")+"] LT"
},lastDay:function(){return"[ahir a "+((this.hours()!==1)?"les":"la")+"] LT"
},lastWeek:function(){return"[el] dddd [passat a "+((this.hours()!==1)?"les":"la")+"] LT"
},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(bu,bv){var bt=(bu===1)?"r":(bu===2)?"n":(bu===3)?"r":(bu===4)?"t":"è";
if(bv==="w"||bv==="W"){bt="a"
}return bu+bt
},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(bv){var i="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),bu="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
function bt(bx){return(bx>1)&&(bx<5)&&(~~(bx/10)!==1)
}function bw(bA,bz,by,bB){var bx=bA+" ";
switch(by){case"s":return(bz||bB)?"pár sekund":"pár sekundami";
case"m":return bz?"minuta":(bB?"minutu":"minutou");
case"mm":if(bz||bB){return bx+(bt(bA)?"minuty":"minut")
}else{return bx+"minutami"
}break;
case"h":return bz?"hodina":(bB?"hodinu":"hodinou");
case"hh":if(bz||bB){return bx+(bt(bA)?"hodiny":"hodin")
}else{return bx+"hodinami"
}break;
case"d":return(bz||bB)?"den":"dnem";
case"dd":if(bz||bB){return bx+(bt(bA)?"dny":"dní")
}else{return bx+"dny"
}break;
case"M":return(bz||bB)?"měsíc":"měsícem";
case"MM":if(bz||bB){return bx+(bt(bA)?"měsíce":"měsíců")
}else{return bx+"měsíci"
}break;
case"y":return(bz||bB)?"rok":"rokem";
case"yy":if(bz||bB){return bx+(bt(bA)?"roky":"let")
}else{return bx+"lety"
}break
}}return bv.defineLocale("cs",{months:i,monthsShort:bu,monthsParse:(function(bx,bz){var by,bA=[];
for(by=0;
by<12;
by++){bA[by]=new RegExp("^"+bx[by]+"$|^"+bz[by]+"$","i")
}return bA
}(i,bu)),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";
case 1:case 2:return"[v] dddd [v] LT";
case 3:return"[ve středu v] LT";
case 4:return"[ve čtvrtek v] LT";
case 5:return"[v pátek v] LT";
case 6:return"[v sobotu v] LT"
}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";
case 1:case 2:return"[minulé] dddd [v] LT";
case 3:return"[minulou středu v] LT";
case 4:case 5:return"[minulý] dddd [v] LT";
case 6:return"[minulou sobotu v] LT"
}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:bw,m:bw,mm:bw,h:bw,hh:bw,d:bw,dd:bw,M:bw,MM:bw,y:bw,yy:bw},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("cv",{months:"кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"),monthsShort:"кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кç_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]",LLL:"YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT",LLLL:"dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ĕнер] LT [сехетре]",nextWeek:"[Çитес] dddd LT [сехетре]",lastWeek:"[Иртнĕ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(bu){var bt=/сехет$/i.exec(bu)?"рен":/çул$/i.exec(bu)?"тан":"ран";
return bu+bt
},past:"%s каялла",s:"пĕр-ик çеккунт",m:"пĕр минут",mm:"%d минут",h:"пĕр сехет",hh:"%d сехет",d:"пĕр кун",dd:"%d кун",M:"пĕр уйăх",MM:"%d уйăх",y:"пĕр çул",yy:"%d çул"},ordinalParse:/\d{1,2}-мĕш/,ordinal:"%d-мĕш",week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(bv){var bt=bv,bu="",bw=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];
if(bt>20){if(bt===40||bt===50||bt===60||bt===80||bt===100){bu="fed"
}else{bu="ain"
}}else{if(bt>0){bu=bw[bt]
}}return bv+bu
},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd [d.] D. MMMM YYYY LT"},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I går kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(bt){function i(bw,bv,bu,by){var bx={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[bw+" Tage",bw+" Tagen"],M:["ein Monat","einem Monat"],MM:[bw+" Monate",bw+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[bw+" Jahre",bw+" Jahren"]};
return bv?bx[bu][0]:bx[bu][1]
}return bt.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:i,mm:"%d Minuten",h:i,hh:"%d Stunden",d:i,dd:i,M:i,MM:i,y:i,yy:i},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(bt){function i(bw,bv,bu,by){var bx={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[bw+" Tage",bw+" Tagen"],M:["ein Monat","einem Monat"],MM:[bw+" Monate",bw+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[bw+" Jahre",bw+" Jahren"]};
return bv?bx[bu][0]:bx[bu][1]
}return bt.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:i,mm:"%d Minuten",h:i,hh:"%d Stunden",d:i,dd:i,M:i,MM:i,y:i,yy:i},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(bu,bt){if(/D/.test(bt.substring(0,bt.indexOf("MMMM")))){return this._monthsGenitiveEl[bu.month()]
}else{return this._monthsNominativeEl[bu.month()]
}},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(bt,bu,bv){if(bt>11){return bv?"μμ":"ΜΜ"
}else{return bv?"πμ":"ΠΜ"
}},isPM:function(bt){return((bt+"").toLowerCase()[0]==="μ")
},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";
default:return"[την προηγούμενη] dddd [{}] LT"
}},sameElse:"L"},calendar:function(bv,bw){var bu=this._calendarEl[bv],bt=bw&&bw.hours();
if(typeof bu==="function"){bu=bu.apply(bw)
}return bu.replace("{}",(bt%12===1?"στη":"στις"))
},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},ordinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(bv){var bt=bv%10,bu=(~~(bv%100/10)===1)?"th":(bt===1)?"st":(bt===2)?"nd":(bt===3)?"rd":"th";
return bv+bu
},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"D MMMM, YYYY",LLL:"D MMMM, YYYY LT",LLLL:"dddd, D MMMM, YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(bv){var bt=bv%10,bu=(~~(bv%100/10)===1)?"th":(bt===1)?"st":(bt===2)?"nd":(bt===3)?"rd":"th";
return bv+bu
}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(bv){var bt=bv%10,bu=(~~(bv%100/10)===1)?"th":(bt===1)?"st":(bt===2)?"nd":(bt===3)?"rd":"th";
return bv+bu
},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),weekdaysShort:"Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D[-an de] MMMM, YYYY",LLL:"D[-an de] MMMM, YYYY LT",LLLL:"dddd, [la] D[-an de] MMMM, YYYY LT"},meridiemParse:/[ap]\.t\.m/i,isPM:function(bt){return bt.charAt(0).toLowerCase()==="p"
},meridiem:function(bt,bu,bv){if(bt>11){return bv?"p.t.m.":"P.T.M."
}else{return bv?"a.t.m.":"A.T.M."
}},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"je %s",past:"antaŭ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},ordinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(bu){var bt="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),i="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
return bu.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(bv,bw){if(/-MMM-/.test(bw)){return i[bv.month()]
}else{return bt[bv.month()]
}},weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:function(){return"[hoy a la"+((this.hours()!==1)?"s":"")+"] LT"
},nextDay:function(){return"[mañana a la"+((this.hours()!==1)?"s":"")+"] LT"
},nextWeek:function(){return"dddd [a la"+((this.hours()!==1)?"s":"")+"] LT"
},lastDay:function(){return"[ayer a la"+((this.hours()!==1)?"s":"")+"] LT"
},lastWeek:function(){return"[el] dddd [pasado a la"+((this.hours()!==1)?"s":"")+"] LT"
},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(bt){function i(bw,bv,bu,by){var bx={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:[bw+" minuti",bw+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[bw+" tunni",bw+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[bw+" kuu",bw+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[bw+" aasta",bw+" aastat"]};
if(bv){return bx[bu][2]?bx[bu][2]:bx[bu][1]
}return by?bx[bu][0]:bx[bu][1]
}return bt.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:"%d päeva",M:i,MM:i,y:i,yy:i},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] LT",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] LT",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] LT",llll:"ddd, YYYY[ko] MMM D[a] LT"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(bu){var i={"1":"۱","2":"۲","3":"۳","4":"۴","5":"۵","6":"۶","7":"۷","8":"۸","9":"۹","0":"۰"},bt={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"};
return bu.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(bv){return/بعد از ظهر/.test(bv)
},meridiem:function(bv,bx,bw){if(bv<12){return"قبل از ظهر"
}else{return"بعد از ظهر"
}},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چندین ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(bv){return bv.replace(/[۰-۹]/g,function(bw){return bt[bw]
}).replace(/،/g,",")
},postformat:function(bv){return bv.replace(/\d/g,function(bw){return i[bw]
}).replace(/,/g,"،")
},ordinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}})
}));
(function(i){i(W)
}(function(bv){var bu="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),bt=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",bu[7],bu[8],bu[9]];
function bw(bA,bz,by,bB){var bx="";
switch(by){case"s":return bB?"muutaman sekunnin":"muutama sekunti";
case"m":return bB?"minuutin":"minuutti";
case"mm":bx=bB?"minuutin":"minuuttia";
break;
case"h":return bB?"tunnin":"tunti";
case"hh":bx=bB?"tunnin":"tuntia";
break;
case"d":return bB?"päivän":"päivä";
case"dd":bx=bB?"päivän":"päivää";
break;
case"M":return bB?"kuukauden":"kuukausi";
case"MM":bx=bB?"kuukauden":"kuukautta";
break;
case"y":return bB?"vuoden":"vuosi";
case"yy":bx=bB?"vuoden":"vuotta";
break
}bx=i(bA,bB)+" "+bx;
return bx
}function i(bx,by){return bx<10?(by?bt[bx]:bu[bx]):bx
}return bv.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] LT",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] LT",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] LT",llll:"ddd, Do MMM YYYY, [klo] LT"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:bw,m:bw,mm:bw,h:bw,hh:bw,d:bw,dd:bw,M:bw,MM:bw,y:bw,yy:bw},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D. MMMM, YYYY LT"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(bt){return bt+(bt===1?"er":"")
}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(bt){return bt+(bt===1?"er":"")
},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(bu){var bt="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),i="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
return bu.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(bv,bw){if(/-MMM-/.test(bw)){return i[bv.month()]
}else{return bt[bv.month()]
}},weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(bv){return bv+((bv===1||bv===8||bv>=20)?"ste":"de")
},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("gl",{months:"Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),monthsShort:"Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),weekdays:"Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),weekdaysShort:"Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),weekdaysMin:"Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[hoxe "+((this.hours()!==1)?"ás":"á")+"] LT"
},nextDay:function(){return"[mañá "+((this.hours()!==1)?"ás":"á")+"] LT"
},nextWeek:function(){return"dddd ["+((this.hours()!==1)?"ás":"a")+"] LT"
},lastDay:function(){return"[onte "+((this.hours()!==1)?"á":"a")+"] LT"
},lastWeek:function(){return"[o] dddd [pasado "+((this.hours()!==1)?"ás":"a")+"] LT"
},sameElse:"L"},relativeTime:{future:function(bt){if(bt==="uns segundos"){return"nuns segundos"
}return"en "+bt
},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY LT",LLLL:"dddd, D [ב]MMMM YYYY LT",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY LT",llll:"ddd, D MMM YYYY LT"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(bt){if(bt===2){return"שעתיים"
}return bt+" שעות"
},d:"יום",dd:function(bt){if(bt===2){return"יומיים"
}return bt+" ימים"
},M:"חודש",MM:function(bt){if(bt===2){return"חודשיים"
}return bt+" חודשים"
},y:"שנה",yy:function(bt){if(bt===2){return"שנתיים"
}else{if(bt%10===0&&bt!==10){return bt+" שנה"
}}return bt+" שנים"
}}})
}));
(function(i){i(W)
}(function(bu){var i={"1":"१","2":"२","3":"३","4":"४","5":"५","6":"६","7":"७","8":"८","9":"९","0":"०"},bt={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};
return bu.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(bv){return bv.replace(/[१२३४५६७८९०]/g,function(bw){return bt[bw]
})
},postformat:function(bv){return bv.replace(/\d/g,function(bw){return i[bw]
})
},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(bv,bw){if(bv===12){bv=0
}if(bw==="रात"){return bv<4?bv:bv+12
}else{if(bw==="सुबह"){return bv
}else{if(bw==="दोपहर"){return bv>=10?bv:bv+12
}else{if(bw==="शाम"){return bv+12
}}}}},meridiem:function(bv,bx,bw){if(bv<4){return"रात"
}else{if(bv<10){return"सुबह"
}else{if(bv<17){return"दोपहर"
}else{if(bv<20){return"शाम"
}else{return"रात"
}}}}},week:{dow:0,doy:6}})
}));
(function(i){i(W)
}(function(i){function bt(bx,bw,bv){var bu=bx+" ";
switch(bv){case"m":return bw?"jedna minuta":"jedne minute";
case"mm":if(bx===1){bu+="minuta"
}else{if(bx===2||bx===3||bx===4){bu+="minute"
}else{bu+="minuta"
}}return bu;
case"h":return bw?"jedan sat":"jednog sata";
case"hh":if(bx===1){bu+="sat"
}else{if(bx===2||bx===3||bx===4){bu+="sata"
}else{bu+="sati"
}}return bu;
case"dd":if(bx===1){bu+="dan"
}else{bu+="dana"
}return bu;
case"MM":if(bx===1){bu+="mjesec"
}else{if(bx===2||bx===3||bx===4){bu+="mjeseca"
}else{bu+="mjeseci"
}}return bu;
case"yy":if(bx===1){bu+="godina"
}else{if(bx===2||bx===3||bx===4){bu+="godine"
}else{bu+="godina"
}}return bu
}}return i.defineLocale("hr",{months:"sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),monthsShort:"sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";
case 3:return"[u] [srijedu] [u] LT";
case 6:return"[u] [subotu] [u] LT";
case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"
}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";
case 6:return"[prošle] [subote] [u] LT";
case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"
}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:bt,mm:bt,h:bt,hh:bt,d:"dan",dd:bt,M:"mjesec",MM:bt,y:"godinu",yy:bt},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(bu){var bt="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
function bv(bz,by,bx,bB){var bw=bz,bA;
switch(bx){case"s":return(bB||by)?"néhány másodperc":"néhány másodperce";
case"m":return"egy"+(bB||by?" perc":" perce");
case"mm":return bw+(bB||by?" perc":" perce");
case"h":return"egy"+(bB||by?" óra":" órája");
case"hh":return bw+(bB||by?" óra":" órája");
case"d":return"egy"+(bB||by?" nap":" napja");
case"dd":return bw+(bB||by?" nap":" napja");
case"M":return"egy"+(bB||by?" hónap":" hónapja");
case"MM":return bw+(bB||by?" hónap":" hónapja");
case"y":return"egy"+(bB||by?" év":" éve");
case"yy":return bw+(bB||by?" év":" éve")
}return""
}function i(bw){return(bw?"":"[múlt] ")+"["+bt[this.day()]+"] LT[-kor]"
}return bu.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D., LT",LLLL:"YYYY. MMMM D., dddd LT"},meridiemParse:/de|du/i,isPM:function(bw){return bw.charAt(1).toLowerCase()==="u"
},meridiem:function(bw,bx,by){if(bw<12){return by===true?"de":"DE"
}else{return by===true?"du":"DU"
}},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return i.call(this,true)
},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return i.call(this,false)
},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:bv,m:bv,mm:bv,h:bv,hh:bv,d:bv,dd:bv,M:bv,MM:bv,y:bv,yy:bv},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(bv){function bu(bx,bz){var bw={nominative:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"),accusative:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_")},by=(/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(bz)?"accusative":"nominative";
return bw[by][bx.month()]
}function bt(bw,by){var bx="հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_");
return bx[bw.month()]
}function i(bw,by){var bx="կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_");
return bx[bw.day()]
}return bv.defineLocale("hy-am",{months:bu,monthsShort:bt,weekdays:i,weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., LT",LLLL:"dddd, D MMMM YYYY թ., LT"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"
},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"
},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(bw){return/^(ցերեկվա|երեկոյան)$/.test(bw)
},meridiem:function(bw){if(bw<4){return"գիշերվա"
}else{if(bw<12){return"առավոտվա"
}else{if(bw<17){return"ցերեկվա"
}else{return"երեկոյան"
}}}},ordinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(bw,bx){switch(bx){case"DDD":case"w":case"W":case"DDDo":if(bw===1){return bw+"-ին"
}return bw+"-րդ";
default:return bw
}},week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"LT.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] LT",LLLL:"dddd, D MMMM YYYY [pukul] LT"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(bt,bu){if(bt===12){bt=0
}if(bu==="pagi"){return bt
}else{if(bu==="siang"){return bt>=11?bt:bt+12
}else{if(bu==="sore"||bu==="malam"){return bt+12
}}}},meridiem:function(bt,bu,bv){if(bt<11){return"pagi"
}else{if(bt<15){return"siang"
}else{if(bt<19){return"sore"
}else{return"malam"
}}}},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(bt){function i(bv){if(bv%100===11){return true
}else{if(bv%10===1){return false
}}return true
}function bu(by,bx,bw,bz){var bv=by+" ";
switch(bw){case"s":return bx||bz?"nokkrar sekúndur":"nokkrum sekúndum";
case"m":return bx?"mínúta":"mínútu";
case"mm":if(i(by)){return bv+(bx||bz?"mínútur":"mínútum")
}else{if(bx){return bv+"mínúta"
}}return bv+"mínútu";
case"hh":if(i(by)){return bv+(bx||bz?"klukkustundir":"klukkustundum")
}return bv+"klukkustund";
case"d":if(bx){return"dagur"
}return bz?"dag":"degi";
case"dd":if(i(by)){if(bx){return bv+"dagar"
}return bv+(bz?"daga":"dögum")
}else{if(bx){return bv+"dagur"
}}return bv+(bz?"dag":"degi");
case"M":if(bx){return"mánuður"
}return bz?"mánuð":"mánuði";
case"MM":if(i(by)){if(bx){return bv+"mánuðir"
}return bv+(bz?"mánuði":"mánuðum")
}else{if(bx){return bv+"mánuður"
}}return bv+(bz?"mánuð":"mánuði");
case"y":return bx||bz?"ár":"ári";
case"yy":if(i(by)){return bv+(bx||bz?"ár":"árum")
}return bv+(bx||bz?"ár":"ári")
}}return bt.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] LT",LLLL:"dddd, D. MMMM YYYY [kl.] LT"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:bu,m:bu,mm:bu,h:"klukkustund",hh:bu,d:bu,dd:bu,M:bu,MM:bu,y:bu,yy:bu},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"D_L_Ma_Me_G_V_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";
default:return"[lo scorso] dddd [alle] LT"
}},sameElse:"L"},relativeTime:{future:function(bt){return((/^[0-9].+$/).test(bt)?"tra":"in")+" "+bt
},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"Ah時m分",LTS:"LTs秒",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日LT",LLLL:"YYYY年M月D日LT dddd"},meridiemParse:/午前|午後/i,isPM:function(bt){return bt==="午後"
},meridiem:function(bt,bv,bu){if(bt<12){return"午前"
}else{return"午後"
}},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}})
}));
(function(i){i(W)
}(function(bu){function bt(bw,by){var bv={nominative:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),accusative:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},bx=(/D[oD] *MMMM?/).test(by)?"accusative":"nominative";
return bv[bx][bw.month()]
}function i(bv,by){var bw={nominative:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),accusative:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_")},bx=(/(წინა|შემდეგ)/).test(by)?"accusative":"nominative";
return bw[bx][bv.day()]
}return bu.defineLocale("ka",{months:bt,monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:i,weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(bv){return(/(წამი|წუთი|საათი|წელი)/).test(bv)?bv.replace(/ი$/,"ში"):bv+"ში"
},past:function(bv){if((/(წამი|წუთი|საათი|დღე|თვე)/).test(bv)){return bv.replace(/(ი|ე)$/,"ის წინ")
}if((/წელი/).test(bv)){return bv.replace(/წელი$/,"წლის წინ")
}},s:"რამდენიმე წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},ordinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(bv){if(bv===0){return bv
}if(bv===1){return bv+"-ლი"
}if((bv<20)||(bv<=100&&(bv%20===0))||(bv%100===0)){return"მე-"+bv
}return bv+"-ე"
},week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("km",{months:"មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysMin:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[ថ្ងៃនៈ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h시 m분",LTS:"A h시 m분 s초",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 LT",LLLL:"YYYY년 MMMM D일 dddd LT"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇초",ss:"%d초",m:"일분",mm:"%d분",h:"한시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한달",MM:"%d달",y:"일년",yy:"%d년"},ordinalParse:/\d{1,2}일/,ordinal:"%d일",meridiemParse:/오전|오후/,isPM:function(bt){return bt==="오후"
},meridiem:function(bt,bv,bu){return bt<12?"오전":"오후"
}})
}));
(function(i){i(W)
}(function(bw){function bt(bz,by,bx,bB){var bA={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};
return by?bA[bx][0]:bA[bx][1]
}function bv(bx){var by=bx.substr(0,bx.indexOf(" "));
if(bu(by)){return"a "+bx
}return"an "+bx
}function i(bx){var by=bx.substr(0,bx.indexOf(" "));
if(bu(by)){return"viru "+bx
}return"virun "+bx
}function bu(by){by=parseInt(by,10);
if(isNaN(by)){return false
}if(by<0){return true
}else{if(by<10){if(4<=by&&by<=7){return true
}return false
}else{if(by<100){var bx=by%10,bz=by/10;
if(bx===0){return bu(bz)
}return bu(bx)
}else{if(by<10000){while(by>=10){by=by/10
}return bu(by)
}else{by=by/1000;
return bu(by)
}}}}}return bw.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";
default:return"[Leschte] dddd [um] LT"
}}},relativeTime:{future:bv,past:i,s:"e puer Sekonnen",m:bt,mm:"%d Minutten",h:bt,hh:"%d Stonnen",d:bt,dd:"%d Deeg",M:bt,MM:"%d Méint",y:bt,yy:"%d Joer"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(bA){var by={m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"},bv="sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_");
function bw(bD,bC,bB,bE){if(bC){return"kelios sekundės"
}else{return bE?"kelių sekundžių":"kelias sekundes"
}}function bx(bD,bC,bB,bE){return bC?i(bB)[0]:(bE?i(bB)[1]:i(bB)[2])
}function bz(bB){return bB%10===0||(bB>10&&bB<20)
}function i(bB){return by[bB].split("_")
}function bu(bE,bD,bC,bF){var bB=bE+" ";
if(bE===1){return bB+bx(bE,bD,bC[0],bF)
}else{if(bD){return bB+(bz(bE)?i(bC)[1]:i(bC)[0])
}else{if(bF){return bB+i(bC)[1]
}else{return bB+(bz(bE)?i(bC)[1]:i(bC)[2])
}}}}function bt(bD,bC){var bE=bC.indexOf("dddd HH:mm")===-1,bB=bv[bD.day()];
return bE?bB:bB.substring(0,bB.length-2)+"į"
}return bA.defineLocale("lt",{months:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:bt,weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], LT [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, LT [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], LT [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, LT [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:bw,m:bx,mm:bu,h:bx,hh:bu,d:bx,dd:bu,M:bx,MM:bu,y:bx,yy:bu},ordinalParse:/\d{1,2}-oji/,ordinal:function(bB){return bB+"-oji"
},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(bu){var i={mm:"minūti_minūtes_minūte_minūtes",hh:"stundu_stundas_stunda_stundas",dd:"dienu_dienas_diena_dienas",MM:"mēnesi_mēnešus_mēnesis_mēneši",yy:"gadu_gadus_gads_gadi"};
function bt(bz,by,bx){var bw=bz.split("_");
if(bx){return by%10===1&&by!==11?bw[2]:bw[3]
}else{return by%10===1&&by!==11?bw[0]:bw[1]
}}function bv(by,bx,bw){return by+" "+bt(i[bw],by,bx)
}return bu.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, LT",LLLL:"YYYY. [gada] D. MMMM, dddd, LT"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"%s vēlāk",past:"%s agrāk",s:"dažas sekundes",m:"minūti",mm:bv,h:"stundu",hh:bv,d:"dienu",dd:bv,M:"mēnesi",MM:bv,y:"gadu",yy:bv},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Во изминатата] dddd [во] LT";
case 1:case 2:case 4:case 5:return"[Во изминатиот] dddd [во] LT"
}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(bv){var bu=bv%10,bt=bv%100;
if(bv===0){return bv+"-ев"
}else{if(bt===0){return bv+"-ен"
}else{if(bt>10&&bt<20){return bv+"-ти"
}else{if(bu===1){return bv+"-ви"
}else{if(bu===2){return bv+"-ри"
}else{if(bu===7||bu===8){return bv+"-ми"
}else{return bv+"-ти"
}}}}}}},week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,isPM:function(bt){return/^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(bt)
},meridiem:function(bt,bv,bu){if(bt<4){return"രാത്രി"
}else{if(bt<12){return"രാവിലെ"
}else{if(bt<17){return"ഉച്ച കഴിഞ്ഞ്"
}else{if(bt<20){return"വൈകുന്നേരം"
}else{return"രാത്രി"
}}}}}})
}));
(function(i){i(W)
}(function(bu){var i={"1":"१","2":"२","3":"३","4":"४","5":"५","6":"६","7":"७","8":"८","9":"९","0":"०"},bt={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};
return bu.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%s नंतर",past:"%s पूर्वी",s:"सेकंद",m:"एक मिनिट",mm:"%d मिनिटे",h:"एक तास",hh:"%d तास",d:"एक दिवस",dd:"%d दिवस",M:"एक महिना",MM:"%d महिने",y:"एक वर्ष",yy:"%d वर्षे"},preparse:function(bv){return bv.replace(/[१२३४५६७८९०]/g,function(bw){return bt[bw]
})
},postformat:function(bv){return bv.replace(/\d/g,function(bw){return i[bw]
})
},meridiemParse:/रात्री|सकाळी|दुपारी|सायंकाळी/,meridiemHour:function(bv,bw){if(bv===12){bv=0
}if(bw==="रात्री"){return bv<4?bv:bv+12
}else{if(bw==="सकाळी"){return bv
}else{if(bw==="दुपारी"){return bv>=10?bv:bv+12
}else{if(bw==="सायंकाळी"){return bv+12
}}}}},meridiem:function(bv,bx,bw){if(bv<4){return"रात्री"
}else{if(bv<10){return"सकाळी"
}else{if(bv<17){return"दुपारी"
}else{if(bv<20){return"सायंकाळी"
}else{return"रात्री"
}}}}},week:{dow:0,doy:6}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"LT.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] LT",LLLL:"dddd, D MMMM YYYY [pukul] LT"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(bt,bu){if(bt===12){bt=0
}if(bu==="pagi"){return bt
}else{if(bu==="tengahari"){return bt>=11?bt:bt+12
}else{if(bu==="petang"||bu==="malam"){return bt+12
}}}},meridiem:function(bt,bu,bv){if(bt<11){return"pagi"
}else{if(bt<15){return"tengahari"
}else{if(bt<19){return"petang"
}else{return"malam"
}}}},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(bu){var i={"1":"၁","2":"၂","3":"၃","4":"၄","5":"၅","6":"၆","7":"၇","8":"၈","9":"၉","0":"၀"},bt={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"};
return bu.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(bv){return bv.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,function(bw){return bt[bw]
})
},postformat:function(bv){return bv.replace(/\d/g,function(bw){return i[bw]
})
},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tirs_ons_tors_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"H.mm",LTS:"LT.ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] LT",LLLL:"dddd D. MMMM YYYY [kl.] LT"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(bu){var i={"1":"१","2":"२","3":"३","4":"४","5":"५","6":"६","7":"७","8":"८","9":"९","0":"०"},bt={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};
return bu.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आइ._सो._मङ्_बु._बि._शु._श.".split("_"),longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},preparse:function(bv){return bv.replace(/[१२३४५६७८९०]/g,function(bw){return bt[bw]
})
},postformat:function(bv){return bv.replace(/\d/g,function(bw){return i[bw]
})
},meridiemParse:/राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,meridiemHour:function(bv,bw){if(bv===12){bv=0
}if(bw==="राती"){return bv<3?bv:bv+12
}else{if(bw==="बिहान"){return bv
}else{if(bw==="दिउँसो"){return bv>=10?bv:bv+12
}else{if(bw==="बेलुका"||bw==="साँझ"){return bv+12
}}}}},meridiem:function(bv,bx,bw){if(bv<3){return"राती"
}else{if(bv<10){return"बिहान"
}else{if(bv<15){return"दिउँसो"
}else{if(bv<18){return"बेलुका"
}else{if(bv<20){return"साँझ"
}else{return"राती"
}}}}}},calendar:{sameDay:"[आज] LT",nextDay:"[भोली] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडी",s:"केही समय",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(bu){var bt="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),i="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
return bu.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(bv,bw){if(/-MMM-/.test(bw)){return i[bv.month()]
}else{return bt[bv.month()]
}},weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(bv){return bv+((bv===1||bv===8||bv>=20)?"ste":"de")
},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s sidan",s:"nokre sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(bv){var bu="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),i="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
function bt(bx){return(bx%10<5)&&(bx%10>1)&&((~~(bx/10)%10)!==1)
}function bw(bA,bz,by){var bx=bA+" ";
switch(by){case"m":return bz?"minuta":"minutę";
case"mm":return bx+(bt(bA)?"minuty":"minut");
case"h":return bz?"godzina":"godzinę";
case"hh":return bx+(bt(bA)?"godziny":"godzin");
case"MM":return bx+(bt(bA)?"miesiące":"miesięcy");
case"yy":return bx+(bt(bA)?"lata":"lat")
}}return bv.defineLocale("pl",{months:function(by,bx){if(/D MMMM/.test(bx)){return i[by.month()]
}else{return bu[by.month()]
}},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"nie_pon_wt_śr_czw_pt_sb".split("_"),weekdaysMin:"N_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";
case 3:return"[W zeszłą środę o] LT";
case 6:return"[W zeszłą sobotę o] LT";
default:return"[W zeszły] dddd [o] LT"
}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:bw,mm:bw,h:bw,hh:bw,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:bw,y:"rok",yy:bw},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("pt-br",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] LT",LLLL:"dddd, D [de] MMMM [de] YYYY [às] LT"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return(this.day()===0||this.day()===6)?"[Último] dddd [às] LT":"[Última] dddd [às] LT"
},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrás",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº"})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("pt",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return(this.day()===0||this.day()===6)?"[Último] dddd [às] LT":"[Última] dddd [às] LT"
},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){function bt(bw,bv,bu){var by={mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},bx=" ";
if(bw%100>=20||(bw>=100&&bw%100===0)){bx=" de "
}return bw+bx+by[bu]
}return i.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",m:"un minut",mm:bt,h:"o oră",hh:bt,d:"o zi",dd:bt,M:"o lună",MM:bt,y:"un an",yy:bt},week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(bw){function bu(bA,bz){var by=bA.split("_");
return bz%10===1&&bz%100!==11?by[0]:(bz%10>=2&&bz%10<=4&&(bz%100<10||bz%100>=20)?by[1]:by[2])
}function bx(bA,bz,by){var bB={mm:bz?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};
if(by==="m"){return bz?"минута":"минуту"
}else{return bA+" "+bu(bB[by],+bA)
}}function bv(bz,bB){var by={nominative:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),accusative:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")},bA=(/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(bB)?"accusative":"nominative";
return by[bA][bz.month()]
}function bt(by,bB){var bA={nominative:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),accusative:"янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")},bz=(/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(bB)?"accusative":"nominative";
return bA[bz][by.month()]
}function i(by,bB){var bz={nominative:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),accusative:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")},bA=(/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/).test(bB)?"accusative":"nominative";
return bz[bA][by.day()]
}return bw.defineLocale("ru",{months:bv,monthsShort:bt,weekdays:i,weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[й|я]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i],longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., LT",LLLL:"dddd, D MMMM YYYY г., LT"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(){return this.day()===2?"[Во] dddd [в] LT":"[В] dddd [в] LT"
},lastWeek:function(by){if(by.week()!==this.week()){switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";
case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";
case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"
}}else{if(this.day()===2){return"[Во] dddd [в] LT"
}else{return"[В] dddd [в] LT"
}}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:bx,mm:bx,h:"час",hh:bx,d:"день",dd:bx,M:"месяц",MM:bx,y:"год",yy:bx},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(by){return/^(дня|вечера)$/.test(by)
},meridiem:function(by,bA,bz){if(by<4){return"ночи"
}else{if(by<12){return"утра"
}else{if(by<17){return"дня"
}else{return"вечера"
}}}},ordinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(by,bz){switch(bz){case"M":case"d":case"DDD":return by+"-й";
case"D":return by+"-го";
case"w":case"W":return by+"-я";
default:return by
}},week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(bv){var i="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),bu="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
function bt(bx){return(bx>1)&&(bx<5)
}function bw(bA,bz,by,bB){var bx=bA+" ";
switch(by){case"s":return(bz||bB)?"pár sekúnd":"pár sekundami";
case"m":return bz?"minúta":(bB?"minútu":"minútou");
case"mm":if(bz||bB){return bx+(bt(bA)?"minúty":"minút")
}else{return bx+"minútami"
}break;
case"h":return bz?"hodina":(bB?"hodinu":"hodinou");
case"hh":if(bz||bB){return bx+(bt(bA)?"hodiny":"hodín")
}else{return bx+"hodinami"
}break;
case"d":return(bz||bB)?"deň":"dňom";
case"dd":if(bz||bB){return bx+(bt(bA)?"dni":"dní")
}else{return bx+"dňami"
}break;
case"M":return(bz||bB)?"mesiac":"mesiacom";
case"MM":if(bz||bB){return bx+(bt(bA)?"mesiace":"mesiacov")
}else{return bx+"mesiacmi"
}break;
case"y":return(bz||bB)?"rok":"rokom";
case"yy":if(bz||bB){return bx+(bt(bA)?"roky":"rokov")
}else{return bx+"rokmi"
}break
}}return bv.defineLocale("sk",{months:i,monthsShort:bu,monthsParse:(function(bx,bz){var by,bA=[];
for(by=0;
by<12;
by++){bA[by]=new RegExp("^"+bx[by]+"$|^"+bz[by]+"$","i")
}return bA
}(i,bu)),weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";
case 1:case 2:return"[v] dddd [o] LT";
case 3:return"[v stredu o] LT";
case 4:return"[vo štvrtok o] LT";
case 5:return"[v piatok o] LT";
case 6:return"[v sobotu o] LT"
}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";
case 1:case 2:return"[minulý] dddd [o] LT";
case 3:return"[minulú stredu o] LT";
case 4:case 5:return"[minulý] dddd [o] LT";
case 6:return"[minulú sobotu o] LT"
}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:bw,m:bw,mm:bw,h:bw,hh:bw,d:bw,dd:bw,M:bw,MM:bw,y:bw,yy:bw},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){function bt(bx,bw,bv){var bu=bx+" ";
switch(bv){case"m":return bw?"ena minuta":"eno minuto";
case"mm":if(bx===1){bu+="minuta"
}else{if(bx===2){bu+="minuti"
}else{if(bx===3||bx===4){bu+="minute"
}else{bu+="minut"
}}}return bu;
case"h":return bw?"ena ura":"eno uro";
case"hh":if(bx===1){bu+="ura"
}else{if(bx===2){bu+="uri"
}else{if(bx===3||bx===4){bu+="ure"
}else{bu+="ur"
}}}return bu;
case"dd":if(bx===1){bu+="dan"
}else{bu+="dni"
}return bu;
case"MM":if(bx===1){bu+="mesec"
}else{if(bx===2){bu+="meseca"
}else{if(bx===3||bx===4){bu+="mesece"
}else{bu+="mesecev"
}}}return bu;
case"yy":if(bx===1){bu+="leto"
}else{if(bx===2){bu+="leti"
}else{if(bx===3||bx===4){bu+="leta"
}else{bu+="let"
}}}return bu
}}return i.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";
case 3:return"[v] [sredo] [ob] LT";
case 6:return"[v] [soboto] [ob] LT";
case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"
}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[prejšnja] dddd [ob] LT";
case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"
}},sameElse:"L"},relativeTime:{future:"čez %s",past:"%s nazaj",s:"nekaj sekund",m:bt,mm:bt,h:bt,hh:bt,d:"en dan",dd:bt,M:"en mesec",MM:bt,y:"eno leto",yy:bt},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),meridiemParse:/PD|MD/,isPM:function(bt){return bt.charAt(0)==="M"
},meridiem:function(bt,bu,bv){return bt<12?"PD":"MD"
},longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(bt){var i={words:{m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(bv,bu){return bv===1?bu[0]:(bv>=2&&bv<=4?bu[1]:bu[2])
},translate:function(bx,bv,bu){var bw=i.words[bu];
if(bu.length===1){return bv?bw[0]:bw[1]
}else{return bx+" "+i.correctGrammaticalCase(bx,bw)
}}};
return bt.defineLocale("sr-cyrl",{months:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"],monthsShort:["јан.","феб.","мар.","апр.","мај","јун","јул","авг.","сеп.","окт.","нов.","дец."],weekdays:["недеља","понедељак","уторак","среда","четвртак","петак","субота"],weekdaysShort:["нед.","пон.","уто.","сре.","чет.","пет.","суб."],weekdaysMin:["не","по","ут","ср","че","пе","су"],longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";
case 3:return"[у] [среду] [у] LT";
case 6:return"[у] [суботу] [у] LT";
case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"
}},lastDay:"[јуче у] LT",lastWeek:function(){var bu=["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"];
return bu[this.day()]
},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",m:i.translate,mm:i.translate,h:i.translate,hh:i.translate,d:"дан",dd:i.translate,M:"месец",MM:i.translate,y:"годину",yy:i.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(bt){var i={words:{m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(bv,bu){return bv===1?bu[0]:(bv>=2&&bv<=4?bu[1]:bu[2])
},translate:function(bx,bv,bu){var bw=i.words[bu];
if(bu.length===1){return bv?bw[0]:bw[1]
}else{return bx+" "+i.correctGrammaticalCase(bx,bw)
}}};
return bt.defineLocale("sr",{months:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],monthsShort:["jan.","feb.","mar.","apr.","maj","jun","jul","avg.","sep.","okt.","nov.","dec."],weekdays:["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],weekdaysShort:["ned.","pon.","uto.","sre.","čet.","pet.","sub."],weekdaysMin:["ne","po","ut","sr","če","pe","su"],longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";
case 3:return"[u] [sredu] [u] LT";
case 6:return"[u] [subotu] [u] LT";
case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"
}},lastDay:"[juče u] LT",lastWeek:function(){var bu=["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];
return bu[this.day()]
},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:i.translate,mm:i.translate,h:i.translate,hh:i.translate,d:"dan",dd:i.translate,M:"mesec",MM:i.translate,y:"godinu",yy:i.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"dddd LT",lastWeek:"[Förra] dddd[en] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}(e|a)/,ordinal:function(bv){var bt=bv%10,bu=(~~(bv%100/10)===1)?"e":(bt===1)?"a":(bt===2)?"a":(bt===3)?"e":"e";
return bv+bu
},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},ordinalParse:/\d{1,2}வது/,ordinal:function(bt){return bt+"வது"
},meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(bt,bv,bu){if(bt<2){return" யாமம்"
}else{if(bt<6){return" வைகறை"
}else{if(bt<10){return" காலை"
}else{if(bt<14){return" நண்பகல்"
}else{if(bt<18){return" எற்பாடு"
}else{if(bt<22){return" மாலை"
}else{return" யாமம்"
}}}}}}},meridiemHour:function(bt,bu){if(bt===12){bt=0
}if(bu==="யாமம்"){return bt<2?bt:bt+12
}else{if(bu==="வைகறை"||bu==="காலை"){return bt
}else{if(bu==="நண்பகல்"){return bt>=10?bt:bt+12
}else{return bt+12
}}}},week:{dow:0,doy:6}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),longDateFormat:{LT:"H นาฬิกา m นาที",LTS:"LT s วินาที",L:"YYYY/MM/DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา LT",LLLL:"วันddddที่ D MMMM YYYY เวลา LT"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(bt){return bt==="หลังเที่ยง"
},meridiem:function(bt,bv,bu){if(bt<12){return"ก่อนเที่ยง"
}else{return"หลังเที่ยง"
}},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM DD, YYYY LT"},calendar:{sameDay:"[Ngayon sa] LT",nextDay:"[Bukas sa] LT",nextWeek:"dddd [sa] LT",lastDay:"[Kahapon sa] LT",lastWeek:"dddd [huling linggo] LT",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},ordinalParse:/\d{1,2}/,ordinal:function(bt){return bt
},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(bt){var i={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"};
return bt.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[haftaya] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen hafta] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinalParse:/\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,ordinal:function(bw){if(bw===0){return bw+"'ıncı"
}var bv=bw%10,bu=bw%100-bv,bx=bw>=100?100:null;
return bw+(i[bv]||i[bu]||i[bx])
},week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}})
}));
(function(i){i(W)
}(function(bw){function bu(bA,bz){var by=bA.split("_");
return bz%10===1&&bz%100!==11?by[0]:(bz%10>=2&&bz%10<=4&&(bz%100<10||bz%100>=20)?by[1]:by[2])
}function bx(bA,bz,by){var bB={mm:"хвилина_хвилини_хвилин",hh:"година_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};
if(by==="m"){return bz?"хвилина":"хвилину"
}else{if(by==="h"){return bz?"година":"годину"
}else{return bA+" "+bu(bB[by],+bA)
}}}function bv(bz,bB){var by={nominative:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),accusative:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")},bA=(/D[oD]? *MMMM?/).test(bB)?"accusative":"nominative";
return by[bA][bz.month()]
}function i(by,bB){var bz={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")},bA=(/(\[[ВвУу]\]) ?dddd/).test(bB)?"accusative":((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(bB)?"genitive":"nominative");
return bz[bA][by.day()]
}function bt(by){return function(){return by+"о"+(this.hours()===11?"б":"")+"] LT"
}
}return bw.defineLocale("uk",{months:bv,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:i,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., LT",LLLL:"dddd, D MMMM YYYY р., LT"},calendar:{sameDay:bt("[Сьогодні "),nextDay:bt("[Завтра "),lastDay:bt("[Вчора "),nextWeek:bt("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return bt("[Минулої] dddd [").call(this);
case 1:case 2:case 4:return bt("[Минулого] dddd [").call(this)
}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:bx,mm:bx,h:"годину",hh:bx,d:"день",dd:bx,M:"місяць",MM:bx,y:"рік",yy:bx},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(by){return/^(дня|вечора)$/.test(by)
},meridiem:function(by,bA,bz){if(by<4){return"ночі"
}else{if(by<12){return"ранку"
}else{if(by<17){return"дня"
}else{return"вечора"
}}}},ordinalParse:/\d{1,2}-(й|го)/,ordinal:function(by,bz){switch(bz){case"M":case"d":case"DDD":case"w":case"W":return by+"-й";
case"D":return by+"-го";
default:return by
}},week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("uz",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"D MMMM YYYY, dddd LT"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY LT",LLLL:"dddd, D MMMM [năm] YYYY LT",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY LT",llll:"ddd, D MMM YYYY LT"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},ordinalParse:/\d{1,2}/,ordinal:function(bt){return bt
},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah点mm",LTS:"Ah点m分s秒",L:"YYYY-MM-DD",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日LT",LLLL:"YYYY年MMMD日ddddLT",l:"YYYY-MM-DD",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日LT",llll:"YYYY年MMMD日ddddLT"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(bt,bu){if(bt===12){bt=0
}if(bu==="凌晨"||bu==="早上"||bu==="上午"){return bt
}else{if(bu==="下午"||bu==="晚上"){return bt+12
}else{return bt>=11?bt:bt+12
}}},meridiem:function(bt,bv,bu){var bw=bt*100+bv;
if(bw<600){return"凌晨"
}else{if(bw<900){return"早上"
}else{if(bw<1130){return"上午"
}else{if(bw<1230){return"中午"
}else{if(bw<1800){return"下午"
}else{return"晚上"
}}}}}},calendar:{sameDay:function(){return this.minutes()===0?"[今天]Ah[点整]":"[今天]LT"
},nextDay:function(){return this.minutes()===0?"[明天]Ah[点整]":"[明天]LT"
},lastDay:function(){return this.minutes()===0?"[昨天]Ah[点整]":"[昨天]LT"
},nextWeek:function(){var bt,bu;
bt=i().startOf("week");
bu=this.unix()-bt.unix()>=7*24*3600?"[下]":"[本]";
return this.minutes()===0?bu+"dddAh点整":bu+"dddAh点mm"
},lastWeek:function(){var bt,bu;
bt=i().startOf("week");
bu=this.unix()<bt.unix()?"[上]":"[本]";
return this.minutes()===0?bu+"dddAh点整":bu+"dddAh点mm"
},sameElse:"LL"},ordinalParse:/\d{1,2}(日|月|周)/,ordinal:function(bt,bu){switch(bu){case"d":case"D":case"DDD":return bt+"日";
case"M":return bt+"月";
case"w":case"W":return bt+"周";
default:return bt
}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1分钟",mm:"%d分钟",h:"1小时",hh:"%d小时",d:"1天",dd:"%d天",M:"1个月",MM:"%d个月",y:"1年",yy:"%d年"},week:{dow:1,doy:4}})
}));
(function(i){i(W)
}(function(i){return i.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm",LTS:"Ah點m分s秒",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日LT",LLLL:"YYYY年MMMD日ddddLT",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日LT",llll:"YYYY年MMMD日ddddLT"},meridiemParse:/早上|上午|中午|下午|晚上/,meridiemHour:function(bt,bu){if(bt===12){bt=0
}if(bu==="早上"||bu==="上午"){return bt
}else{if(bu==="中午"){return bt>=11?bt:bt+12
}else{if(bu==="下午"||bu==="晚上"){return bt+12
}}}},meridiem:function(bt,bv,bu){var bw=bt*100+bv;
if(bw<900){return"早上"
}else{if(bw<1130){return"上午"
}else{if(bw<1230){return"中午"
}else{if(bw<1800){return"下午"
}else{return"晚上"
}}}}},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(日|月|週)/,ordinal:function(bt,bu){switch(bu){case"d":case"D":case"DDD":return bt+"日";
case"M":return bt+"月";
case"w":case"W":return bt+"週";
default:return bt
}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"一分鐘",mm:"%d分鐘",h:"一小時",hh:"%d小時",d:"一天",dd:"%d天",M:"一個月",MM:"%d個月",y:"一年",yy:"%d年"}})
}));
W.locale("en");
function Z(i){if(typeof ender!=="undefined"){return
}ax=bd.moment;
if(i){bd.moment=bq("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",W)
}else{bd.moment=W
}}if(aw){module.exports=W
}else{if(typeof define==="function"&&define.amd){define(function(bt,i,bu){if(bu.config&&bu.config()&&bu.config().noGlobal===true){bd.moment=ax
}return W
});
Z(true)
}else{Z()
}}}).call(this);
(function(a,b){if(typeof define==="function"&&define.amd){define(["moment"],b)
}else{if(typeof exports==="object"){module.exports=b(require("moment"))
}else{b(a.moment)
}}}(this,function(C){if(C.tz!==undefined){return C
}var x="0.3.0",q={},g={},l=C.version.split("."),s=+l[0],h=+l[1];
if(s<2||(s===2&&h<6)){z("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+C.version+". See momentjs.com")
}function e(F){if(F>96){return F-87
}else{if(F>64){return F-29
}}return F-48
}function k(L){var J=0,H=L.split("."),M=H[0],G=H[1]||"",N=1,K,I=0,F=1;
if(L.charCodeAt(0)===45){J=1;
F=-1
}for(J;
J<M.length;
J++){K=e(M.charCodeAt(J));
I=60*I+K
}for(J=0;
J<G.length;
J++){N=N/60;
K=e(G.charCodeAt(J));
I+=K*N
}return I*F
}function w(G){for(var F=0;
F<G.length;
F++){G[F]=k(G[F])
}}function B(H,G){for(var F=0;
F<G;
F++){H[F]=Math.round((H[F-1]||0)+(H[F]*60000))
}H[G-1]=Infinity
}function a(H,I){var F=[],G;
for(G=0;
G<I.length;
G++){F[G]=H[I[G]]
}return F
}function b(F){var H=F.split("|"),G=H[2].split(" "),J=H[3].split(""),I=H[4].split(" ");
w(G);
w(J);
w(I);
B(I,J.length);
return{name:H[0],abbrs:a(H[1].split(" "),J),offsets:a(G,J),untils:I}
}function f(F){if(F){this._set(b(F))
}}f.prototype={_set:function(F){this.name=F.name;
this.abbrs=F.abbrs;
this.untils=F.untils;
this.offsets=F.offsets
},_index:function(G){var H=+G,I=this.untils,F;
for(F=0;
F<I.length;
F++){if(H<I[F]){return F
}}},parse:function(M){var L=+M,G=this.offsets,F=this.untils,N=F.length-1,I,K,H,J;
for(J=0;
J<N;
J++){I=G[J];
K=G[J+1];
H=G[J?J-1:J];
if(I<K&&A.moveAmbiguousForward){I=K
}else{if(I>H&&A.moveInvalidForward){I=H
}}if(L<F[J]-(I*60000)){return G[J]
}}return G[N]
},abbr:function(F){return this.abbrs[this._index(F)]
},offset:function(F){return this.offsets[this._index(F)]
}};
function n(F){return(F||"").toLowerCase().replace(/\//g,"_")
}function u(G){var H,F,I;
if(typeof G==="string"){G=[G]
}for(H=0;
H<G.length;
H++){F=new f(G[H]);
I=n(F.name);
q[I]=F;
m(I)
}}function p(F){return q[n(F)]||null
}function E(){var G,F=[];
for(G in q){if(q.hasOwnProperty(G)&&q[G]){F.push(q[G].name)
}}return F.sort()
}function j(F){var H,G;
if(typeof F==="string"){F=[F]
}for(H=0;
H<F.length;
H++){G=F[H].split("|");
t(G[0],G[1]);
t(G[1],G[0])
}}function m(H){if(!g[H]){return
}var G,F=q[H],I=g[H];
for(G=0;
G<I.length;
G++){r(F,I[G])
}g[H]=null
}function r(F,G){var H=q[n(G)]=new f();
H._set(F);
H.name=G
}function t(F,G){F=n(F);
if(q[F]){r(q[F],G)
}else{g[F]=g[F]||[];
g[F].push(G)
}}function c(F){u(F.zones);
j(F.links);
A.dataVersion=F.version
}function y(F){if(!y.didShowError){y.didShowError=true;
z("moment.tz.zoneExists('"+F+"') has been deprecated in favor of !moment.tz.zone('"+F+"')")
}return !!p(F)
}function i(F){return !!(F._a&&(F._tzm===undefined))
}function z(F){if(typeof console!=="undefined"&&typeof console.error==="function"){console.error(F)
}}function A(G){var J=Array.prototype.slice.call(arguments,0,-1),I=arguments[arguments.length-1],F=p(I),H=C.utc.apply(null,J);
if(F&&!C.isMoment(G)&&i(H)){H.add(F.parse(H),"minutes")
}H.tz(I);
return H
}A.version=x;
A.dataVersion="";
A._zones=q;
A._links=g;
A.add=u;
A.link=j;
A.load=c;
A.zone=p;
A.zoneExists=y;
A.names=E;
A.Zone=f;
A.unpack=b;
A.unpackBase60=k;
A.needsOffset=i;
A.moveInvalidForward=true;
A.moveAmbiguousForward=false;
var o=C.fn;
C.tz=A;
C.defaultZone=null;
C.updateOffset=function(F,G){var H;
if(F._z===undefined){F._z=C.defaultZone
}if(F._z){H=F._z.offset(F);
if(Math.abs(H)<16){H=H/60
}if(F.utcOffset!==undefined){F.utcOffset(-H,G)
}else{F.zone(H,G)
}}};
o.tz=function(F){if(F){this._z=p(F);
if(this._z){C.updateOffset(this)
}else{z("Moment Timezone has no data for "+F+". See http://momentjs.com/timezone/docs/#/data-loading/.")
}return this
}if(this._z){return this._z.name
}};
function d(F){return function(){if(this._z){return this._z.abbr(this)
}return F.call(this)
}
}function D(F){return function(){this._z=null;
return F.apply(this,arguments)
}
}o.zoneName=d(o.zoneName);
o.zoneAbbr=d(o.zoneAbbr);
o.utc=D(o.utc);
C.tz.setDefault=function(F){if(s<2||(s===2&&h<9)){z("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+C.version+".")
}C.defaultZone=F?p(F):null;
return C
};
var v=C.momentProperties;
if(Object.prototype.toString.call(v)==="[object Array]"){v.push("_z");
v.push("_a")
}else{if(v){v._z=null
}}c({version:"2014j",zones:["Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q","Africa/Accra|LMT GMT GHST|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE","Africa/Addis_Ababa|LMT EAT BEAT BEAUT|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ","Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0","Africa/Bangui|LMT WAT|-d.A -10|01|-22y0d.A","Africa/Bissau|LMT WAT GMT|12.k 10 0|012|-2ldWV.E 2xonV.E","Africa/Blantyre|LMT CAT|-2a.k -20|01|-2GJea.k","Africa/Cairo|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0 1o10 jz0 gN0 pb0 1qN0 dX0 e10 xz0 1o10 bb0 e10 An0 1o10 5z0 e10 FX0 1o10 2L0 e10 IL0 1C10 Lz0 1wp0 TX0 1qN0 WL0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0","Africa/Casablanca|LMT WET WEST CET|u.k 0 -10 -10|012121212121212121312121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uo0 e00 DA0 11A0 rA0 e00 Jc0 WM0 m00 gM0 M00 WM0 jc0 e00 RA0 11A0 dA0 e00 Uo0 11A0 800 gM0 Xc0 11A0 5c0 e00 17A0 WM0 2o0 e00 1ao0 19A0 1g00 16M0 1iM0 1400 1lA0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qo0 1200 1kM0 14M0 1i00","Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18o0 3I00 17c0 1fA0 1a00 1io0 1a00 1y7p0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Africa/El_Aaiun|LMT WAT WET WEST|Q.M 10 0 -10|0123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uo0 e00 DA0 11A0 rA0 e00 Jc0 WM0 m00 gM0 M00 WM0 jc0 e00 RA0 11A0 dA0 e00 Uo0 11A0 800 gM0 Xc0 11A0 5c0 e00 17A0 WM0 2o0 e00 1ao0 19A0 1g00 16M0 1iM0 1400 1lA0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qo0 1200 1kM0 14M0 1i00","Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0","Africa/Juba|LMT CAT CAST EAT|-2a.8 -20 -30 -30|01212121212121212121212121212121213|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0","Africa/Monrovia|MMT LRT GMT|H.8 I.u 0|012|-23Lzg.Q 29s01.m","Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0","Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00","Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00","Africa/Windhoek|SWAT SAST SAST CAT WAT WAST|-1u -20 -30 -20 -10 -20|012134545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2GJdu 1Ajdu 1cL0 1SqL0 9NA0 11D0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0","America/Adak|NST NWT NPT BST BDT AHST HAST HADT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Anchorage|CAT CAWT CAPT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Anguilla|LMT AST|46.4 40|01|-2kNvR.U","America/Antigua|LMT EST AST|47.c 50 40|012|-2kNvQ.M 1yxAQ.M","America/Araguaina|LMT BRT BRST|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0","America/Argentina/Buenos_Aires|CMT ART ARST ART ARST|4g.M 40 30 30 20|0121212121212121212121212121212121212121213434343434343234343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 j3c0 uL0 1qN0 WL0","America/Argentina/Catamarca|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343454343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0","America/Argentina/Cordoba|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343454343234343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 j3c0 uL0 1qN0 WL0","America/Argentina/Jujuy|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|01212121212121212121212121212121212121212134343456543432343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 g0p0 10M0 j3c0 uL0","America/Argentina/La_Rioja|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434534343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0","America/Argentina/Mendoza|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|0121212121212121212121212121212121212121213434345656543235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 g0p0 10M0 agM0 Op0 7TX0 uL0","America/Argentina/Rio_Gallegos|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343434343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0","America/Argentina/Salta|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434543432343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 j3c0 uL0","America/Argentina/San_Juan|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434534343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 g0p0 10M0 ak00 m10 8lb0 uL0","America/Argentina/San_Luis|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|01212121212121212121212121212121212121212134343456536353465653|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 kin0 10M0 ak00 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0","America/Argentina/Tucuman|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|012121212121212121212121212121212121212121343434345434323534343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 ako0 4N0 8BX0 uL0 1qN0 WL0","America/Argentina/Ushuaia|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343434343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 ajA0 8p0 8zb0 uL0","America/Aruba|LMT ANT AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d","America/Asuncion|AMT PYT PYT PYST|3O.E 40 30 30|012131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0","America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0","America/Bahia|LMT BRT BRST|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0","America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0","America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0","America/Belem|LMT BRT BRST|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0","America/Belize|LMT CST CHDT CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0","America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0","America/Boa_Vista|LMT AMT AMST|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0","America/Bogota|BMT COT COST|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0","America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Cambridge_Bay|zzz MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Campo_Grande|LMT AMT AMST|3C.s 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0","America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0","America/Caracas|CMT VET VET|4r.E 4u 40|0121|-2kV7w.k 28KM2.k 1IwOu","America/Cayenne|LMT GFT GFT|3t.k 40 30|012|-2mrwu.E 2gWou.E","America/Cayman|KMT EST|57.b 50|01|-2l1uQ.N","America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0","America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0","America/Creston|MST PST|70 80|010|-29DR0 43B0","America/Cuiaba|LMT AMT AMST|3I.k 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0","America/Danmarkshavn|LMT WGT WGST GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0","America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0","America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|01234252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 Jy10 SL0 dnB0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|01212121212121341212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 LFB0 1cL0 3Cp0 1cL0 66N0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Eirunepe|LMT ACT ACST AMT|4D.s 50 40 40|0121212121212121212121212121212131|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0","America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0","America/Ensenada|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOP0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Fortaleza|LMT BRT BRST|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0","America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Godthab|LMT WGT WGST|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Grand_Turk|KMT EST EDT AST|57.b 50 40 40|0121212121212121212121212121212121212121212121212121212121212121212121212123|-2l1uQ.N 2HHBQ.N 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0","America/Guayaquil|QMT ECT|5e 50|01|-1yVSK","America/Guyana|LMT GBGT GYT GYT GYT|3Q.E 3J 3J 30 40|01234|-2dvU7.k 24JzQ.k mlc0 Bxbf","America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0","America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0","America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Inuvik|zzz PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Iqaluit|zzz EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Jamaica|KMT EST EDT|57.b 50 40|0121212121212121212121|-2l1uQ.N 2uM1Q.N 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0","America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 Bb0 10N0 2bB0 8in0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/La_Paz|CMT BOST BOT|4w.A 3w.A 40|012|-1x37r.o 13b0","America/Lima|LMT PET PEST|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0","America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp0 1Vb0 3dB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Maceio|LMT BRT BRST|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0","America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0","America/Manaus|LMT AMT AMST|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0","America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0","America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0","America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0","America/Metlakatla|PST PWT PPT PDT|80 70 70 70|0120303030303030303030303030303030|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0","America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0","America/Miquelon|LMT AST PMST PMDT|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0","America/Montevideo|MMT UYT UYHST UYST UYT UYHST|3I.I 3u 30 20 30 2u|012121212121212121212121213434343434345454543453434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-20UIf.g 8jzJ.g 1cLu 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1qMu WLu 1qMu 11zu 1o0u 11zu NAu 11bu 2iMu zWu Dq10 19X0 pd0 jz0 cm10 19X0 1fB0 1on0 11d0 1oL0 1nB0 1fzu 1aou 1fzu 1aou 1fzu 3nAu Jb0 3MN0 1SLu 4jzu 2PB0 Lb0 3Dd0 1pb0 ixd0 An0 1MN0 An0 1wp0 On0 1wp0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10","America/Montreal|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-28tR0 bV0 2m30 1in0 121u 1nb0 1g10 11z0 1o0u 11zu 1o0u 11zu 3VAu Rzu 1qMu WLu 1qMu WLu 1qKu WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kO0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Noronha|LMT FNT FNST|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0","America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Panama|CMT EST|5j.A 50|01|-2uduE.o","America/Pangnirtung|zzz AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Paramaribo|LMT PMT PMT NEGT SRT SRT|3E.E 3E.Q 3E.A 3u 3u 30|012345|-2nDUj.k Wqo0.c qanX.I 1dmLN.o lzc0","America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0","America/Port-au-Prince|PPMT EST EDT|4N 50 40|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Porto_Acre|LMT ACT ACST AMT|4v.c 50 40 40|01212121212121212121212121212131|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0","America/Porto_Velho|LMT AMT AMST|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0","America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0","America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Rankin_Inlet|zzz CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Recife|LMT BRT BRST|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0","America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0","America/Resolute|zzz CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Santa_Isabel|LMT MST PST PDT PWT PPT|7D.s 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOP0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0","America/Santarem|LMT AMT AMST BRT|3C.M 40 30 30|0121212121212121212121212121213|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0","America/Santiago|SMT CLT CLT CLST CLST|4G.K 50 40 40 30|010203131313131313124242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424|-2q5Th.e fNch.e 5gLG.K 21bh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9UK0 1Je0 Qen0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1ld0 14n0 1qN0 11z0 1cN0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0","America/Santo_Domingo|SDMT EST EDT EHDT AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00","America/Sao_Paulo|LMT BRT BRST|36.s 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0","America/Scoresbysund|LMT CGT CGST EGST EGT|1r.Q 20 10 0 10|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0","America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0","America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 1Be0 xDz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Yellowknife|zzz MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","Antarctica/Casey|zzz AWST CAST|0 -80 -b0|012121|-2q00 1DjS0 T90 40P0 KL0","Antarctica/Davis|zzz DAVT DAVT|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0","Antarctica/DumontDUrville|zzz PMT DDUT|0 -a0 -a0|0102|-U0o0 cfq0 bFm0","Antarctica/Macquarie|AEST AEDT zzz MIST|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0","Antarctica/Mawson|zzz MAWT MAWT|0 -60 -50|012|-CEo0 2fyk0","Antarctica/McMurdo|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00","Antarctica/Palmer|zzz ARST ART ART ARST CLT CLST|0 30 40 30 20 40 30|012121212123435656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1ld0 14n0 1qN0 11z0 1cN0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0","Antarctica/Rothera|zzz ROTT|0 30|01|gOo0","Antarctica/Syowa|zzz SYOT|0 -30|01|-vs00","Antarctica/Troll|zzz UTC CEST|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Antarctica/Vostok|zzz VOST|0 -60|01|-tjA0","Arctic/Longyearbyen|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Asia/Aden|LMT AST|-2X.S -30|01|-MG2X.S","Asia/Almaty|LMT ALMT ALMT ALMST|-57.M -50 -60 -70|0123232323232323232323232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3Cl0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0","Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0","Asia/Anadyr|LMT ANAT ANAT ANAST ANAST ANAST ANAT|-bN.U -c0 -d0 -e0 -d0 -c0 -b0|01232414141414141414141561414141414141414141414141414141414141561|-1PcbN.U eUnN.U 23CL0 1db0 1cN0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0","Asia/Aqtau|LMT FORT FORT SHET SHET SHEST AQTT AQTST AQTST AQTT|-3l.4 -40 -50 -50 -60 -60 -50 -60 -50 -40|012345353535353535353536767676898989898989898989896|-1Pc3l.4 eUnl.4 1jcL0 JDc0 1cL0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2UK0 Fz0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cN0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 RW0","Asia/Aqtobe|LMT AKTT AKTT AKTST AKTT AQTT AQTST|-3M.E -40 -50 -60 -60 -50 -60|01234323232323232323232565656565656565656565656565|-1Pc3M.E eUnM.E 23CL0 1db0 1cM0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2UK0 Fz0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0","Asia/Ashgabat|LMT ASHT ASHT ASHST ASHST TMT TMT|-3R.w -40 -50 -60 -50 -40 -50|012323232323232323232324156|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 ba0 xC0","Asia/Baghdad|BMT AST ADT|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0","Asia/Bahrain|LMT GST AST|-3m.k -40 -30|012|-21Jfm.k 27BXm.k","Asia/Baku|LMT BAKT BAKT BAKST BAKST AZST AZT AZT AZST|-3j.o -30 -40 -50 -40 -40 -30 -40 -50|0123232323232323232323245657878787878787878787878787878787878787878787878787878787878787878787878787878787878787|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 10K0 c30 1cJ0 1cL0 8wu0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Asia/Bangkok|BMT ICT|-6G.4 -70|01|-218SG.4","Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0","Asia/Bishkek|LMT FRUT FRUT FRUST FRUST KGT KGST KGT|-4W.o -50 -60 -70 -60 -50 -60 -60|01232323232323232323232456565656565656565656565656567|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 11c0 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 T8u","Asia/Brunei|LMT BNT BNT|-7D.E -7u -80|012|-1KITD.E gDc9.E","Asia/Calcutta|HMT BURT IST IST|-5R.k -6u -5u -6u|01232|-18LFR.k 1unn.k HB0 7zX0","Asia/Chita|LMT YAKT YAKT YAKST YAKST YAKT IRKT|-7x.Q -80 -90 -a0 -90 -a0 -80|012323232323232323232324123232323232323232323232323232323232323256|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0","Asia/Choibalsan|LMT ULAT ULAT CHOST CHOT CHOT|-7C -70 -80 -a0 -90 -80|012343434343434343434343434343434343434343434345|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0","Asia/Chongqing|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0","Asia/Colombo|MMT IST IHST IST LKT LKT|-5j.w -5u -60 -6u -6u -60|01231451|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu","Asia/Dacca|HMT BURT IST DACT BDT BDST|-5R.k -6u -5u -60 -60 -70|01213454|-18LFR.k 1unn.k HB0 m6n0 LqMu 1x6n0 1i00","Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0","Asia/Dili|LMT TLT JST TLT WITA|-8m.k -80 -90 -90 -80|012343|-2le8m.k 1dnXm.k 8HA0 1ew00 Xld0","Asia/Dubai|LMT GST|-3F.c -40|01|-21JfF.c","Asia/Dushanbe|LMT DUST DUST DUSST DUSST TJT|-4z.c -50 -60 -70 -60 -50|0123232323232323232323245|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 14N0","Asia/Gaza|EET EET EEST IST IDT|-20 -30 -30 -20 -30|010101010102020202020202020202023434343434343434343434343430202020202020202020202020202020202020202020202020202020202020202020202020202020202020|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0","Asia/Hebron|EET EET EEST IST IDT|-20 -30 -30 -20 -30|01010101010202020202020202020202343434343434343434343434343020202020202020202020202020202020202020202020202020202020202020202020202020202020202020|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0","Asia/Ho_Chi_Minh|LMT PLMT ICT IDT JST|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0","Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0","Asia/Hovd|LMT HOVT HOVT HOVST|-66.A -60 -70 -80|01232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0","Asia/Irkutsk|IMT IRKT IRKT IRKST IRKST IRKT|-6V.5 -70 -80 -90 -80 -90|012323232323232323232324123232323232323232323232323232323232323252|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0","Asia/Istanbul|IMT EET EEST TRST TRT|-1U.U -20 -30 -40 -30|012121212121212121212121212121212121212121212121212121234343434342121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSp0 CL0 mN0 1Vz0 1gN0 1pz0 5Rd0 1fz0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1jB0 18L0 1ip0 17z0 qdd0 xX0 3S10 Tz0 dA10 11z0 1o10 11z0 1qN0 11z0 1ze0 11B0 WM0 1qO0 WI0 1nX0 1rB0 10L0 11B0 1in0 17d0 1in0 2pX0 19E0 1fU0 16Q0 1iI0 16Q0 1iI0 1Vd0 pb0 3Kp0 14o0 1df0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Asia/Jakarta|BMT JAVT WIB JST WIB WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu","Asia/Jayapura|LMT WIT ACST|-9m.M -90 -9u|0121|-1uu9m.M sMMm.M L4nu","Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0","Asia/Kabul|AFT AFT|-40 -4u|01|-10Qs0","Asia/Kamchatka|LMT PETT PETT PETST PETST|-ay.A -b0 -c0 -d0 -c0|01232323232323232323232412323232323232323232323232323232323232412|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0","Asia/Karachi|LMT IST IST KART PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy01 1cL0 dK0X 11b0 1610 1jX0","Asia/Kashgar|LMT XJT|-5O.k -60|01|-1GgtO.k","Asia/Kathmandu|LMT IST NPT|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g","Asia/Khandyga|LMT YAKT YAKT YAKST YAKST VLAT VLAST VLAT YAKT|-92.d -80 -90 -a0 -90 -a0 -b0 -b0 -a0|01232323232323232323232412323232323232323232323232565656565656565782|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0","Asia/Krasnoyarsk|LMT KRAT KRAT KRAST KRAST KRAT|-6b.q -60 -70 -80 -70 -80|012323232323232323232324123232323232323232323232323232323232323252|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0","Asia/Kuala_Lumpur|SMT MALT MALST MALT MALT JST MYT|-6T.p -70 -7k -7k -7u -90 -80|01234546|-2Bg6T.p 17anT.p 7hXE dM00 17bO 8Fyu 1so1u","Asia/Kuching|LMT BORT BORT BORTST JST MYT|-7l.k -7u -80 -8k -90 -80|01232323232323232425|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0 1so10","Asia/Kuwait|LMT AST|-3b.U -30|01|-MG3b.U","Asia/Macao|LMT MOT MOST CST|-7y.k -80 -90 -80|0121212121212121212121212121212121212121213|-2le7y.k 1XO34.k 1wn0 Rd0 1wn0 R9u 1wqu U10 1tz0 TVu 1tz0 17gu 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cOu 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cL0 KEp0","Asia/Magadan|LMT MAGT MAGT MAGST MAGST MAGT|-a3.c -a0 -b0 -c0 -b0 -c0|012323232323232323232324123232323232323232323232323232323232323251|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0","Asia/Makassar|LMT MMT WITA JST|-7V.A -7V.A -80 -90|01232|-21JjV.A vfc0 myLV.A 8ML0","Asia/Manila|PHT PHST JST|-80 -90 -90|010201010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0","Asia/Muscat|LMT GST|-3S.o -40|01|-21JfS.o","Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Asia/Novokuznetsk|LMT KRAT KRAT KRAST KRAST NOVST NOVT NOVT|-5M.M -60 -70 -80 -70 -70 -60 -70|012323232323232323232324123232323232323232323232323232323232325672|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0 8Hz0","Asia/Novosibirsk|LMT NOVT NOVT NOVST NOVST|-5v.E -60 -70 -80 -70|0123232323232323232323241232341414141414141414141414141414141414121|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0","Asia/Omsk|LMT OMST OMST OMSST OMSST OMST|-4R.u -50 -60 -70 -60 -70|012323232323232323232324123232323232323232323232323232323232323252|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0","Asia/Oral|LMT URAT URAT URAST URAT URAST ORAT ORAST ORAT|-3p.o -40 -50 -60 -60 -50 -40 -50 -50|012343232323232323251516767676767676767676767676768|-1Pc3p.o eUnp.o 23CL0 1db0 1cM0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 2UK0 Fz0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 RW0","Asia/Pontianak|LMT PMT WIB JST WIB WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu","Asia/Pyongyang|LMT KST JCST JST KST|-8n -8u -90 -90 -90|01234|-2um8n 97XR 12FXu jdA0","Asia/Qatar|LMT GST AST|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8","Asia/Qyzylorda|LMT KIZT KIZT KIZST KIZT QYZT QYZT QYZST|-4l.Q -40 -50 -60 -60 -50 -60 -70|012343232323232323232325676767676767676767676767676|-1Pc4l.Q eUol.Q 23CL0 1db0 1cM0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2UK0 dC0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0","Asia/Rangoon|RMT BURT JST MMT|-6o.E -6u -90 -6u|0123|-21Jio.E SmnS.E 7j9u","Asia/Riyadh|LMT AST|-36.Q -30|01|-TvD6.Q","Asia/Sakhalin|LMT JCST JST SAKT SAKST SAKST SAKT|-9u.M -90 -90 -b0 -c0 -b0 -a0|0123434343434343434343435634343434343565656565656565656565656565636|-2AGVu.M 1iaMu.M je00 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o10 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0","Asia/Samarkand|LMT SAMT SAMT SAMST TAST UZST UZT|-4r.R -40 -50 -60 -60 -60 -50|01234323232323232323232356|-1Pc4r.R eUor.R 23CL0 1db0 1cM0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 11x0 bf0","Asia/Seoul|LMT KST JCST JST KST KDT KDT|-8r.Q -8u -90 -90 -90 -9u -a0|01234151515151515146464|-2um8r.Q 97XV.Q 12FXu jjA0 kKo0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0","Asia/Singapore|SMT MALT MALST MALT MALT JST SGT SGT|-6T.p -70 -7k -7k -7u -90 -7u -80|012345467|-2Bg6T.p 17anT.p 7hXE dM00 17bO 8Fyu Mspu DTA0","Asia/Srednekolymsk|LMT MAGT MAGT MAGST MAGST MAGT SRET|-ae.Q -a0 -b0 -c0 -b0 -c0 -b0|012323232323232323232324123232323232323232323232323232323232323256|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0","Asia/Taipei|JWST JST CST CDT|-80 -90 -80 -90|01232323232323232323232323232323232323232|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0","Asia/Tashkent|LMT TAST TAST TASST TASST UZST UZT|-4B.b -50 -60 -70 -60 -60 -50|01232323232323232323232456|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 11y0 bf0","Asia/Tbilisi|TBMT TBIT TBIT TBIST TBIST GEST GET GET GEST|-2X.b -30 -40 -50 -40 -40 -30 -40 -50|0123232323232323232323245656565787878787878787878567|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 3y0 19f0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cM0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0","Asia/Tehran|LMT TMT IRST IRST IRDT IRDT|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0","Asia/Thimbu|LMT IST BTT|-5W.A -5u -60|012|-Su5W.A 1BGMs.A","Asia/Tokyo|JCST JST JDT|-90 -90 -a0|0121212121|-1iw90 pKq0 QL0 1lB0 13X0 1zB0 NX0 1zB0 NX0","Asia/Ulaanbaatar|LMT ULAT ULAT ULAST|-77.w -70 -80 -90|01232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0","Asia/Ust-Nera|LMT YAKT YAKT MAGST MAGT MAGST MAGT MAGT VLAT VLAT|-9w.S -80 -90 -c0 -b0 -b0 -a0 -c0 -b0 -a0|0123434343434343434343456434343434343434343434343434343434343434789|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0","Asia/Vladivostok|LMT VLAT VLAT VLAST VLAST VLAT|-8L.v -90 -a0 -b0 -a0 -b0|012323232323232323232324123232323232323232323232323232323232323252|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0","Asia/Yakutsk|LMT YAKT YAKT YAKST YAKST YAKT|-8C.W -80 -90 -a0 -90 -a0|012323232323232323232324123232323232323232323232323232323232323252|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0","Asia/Yekaterinburg|LMT PMT SVET SVET SVEST SVEST YEKT YEKST YEKT|-42.x -3J.5 -40 -50 -60 -50 -50 -60 -60|0123434343434343434343435267676767676767676767676767676767676767686|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0","Asia/Yerevan|LMT YERT YERT YERST YERST AMST AMT AMT AMST|-2W -30 -40 -50 -40 -40 -30 -40 -50|0123232323232323232323245656565657878787878787878787878787878787|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1am0 2r0 1cJ0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fb0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0","Atlantic/Azores|HMT AZOT AZOST AZOMT AZOT AZOST WET|1S.w 20 10 0 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545456545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldW5.s aPX5.s Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","Atlantic/Canary|LMT CANT WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Atlantic/Cape_Verde|LMT CVT CVST CVT|1y.4 20 10 10|01213|-2xomp.U 1qOMp.U 7zX0 1djf0","Atlantic/Faeroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Atlantic/Madeira|FMT MADT MADST MADMT WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldWQ.o aPWQ.o Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Atlantic/Reykjavik|RMT IST ISST GMT|1r.M 10 0 0|01212121212121212121212121212121212121212121212121212121212121213|-2uWmw.c mfaw.c 1Bd0 ML0 1LB0 NLX0 1pe0 zd0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0","Atlantic/South_Georgia|GST|20|0|","Atlantic/Stanley|SMT FKT FKST FKT FKST|3P.o 40 30 30 20|0121212121212134343212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 U10 1qM0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10","Australia/ACT|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0","Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0","Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0","Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0","Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0","Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0","Australia/Eucla|ACWST ACWDT|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0","Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0","Australia/LHI|AEST LHST LHDT LHDT|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu","Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0","Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0","Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0","CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","Chile/EasterIsland|EMT EASST EAST EAST EASST|7h.s 60 70 60 50|012121212121212121212121212121213434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-1uSgG.w nHUG.w op0 9UK0 RXB0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1ld0 14n0 1qN0 11z0 1cN0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0","EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","EST|EST|50|0|","EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","Eire|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g5X0 14p0 1wn0 17d0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Etc/GMT+0|GMT|0|0|","Etc/GMT+1|GMT+1|10|0|","Etc/GMT+10|GMT+10|a0|0|","Etc/GMT+11|GMT+11|b0|0|","Etc/GMT+12|GMT+12|c0|0|","Etc/GMT+2|GMT+2|20|0|","Etc/GMT+3|GMT+3|30|0|","Etc/GMT+4|GMT+4|40|0|","Etc/GMT+5|GMT+5|50|0|","Etc/GMT+6|GMT+6|60|0|","Etc/GMT+7|GMT+7|70|0|","Etc/GMT+8|GMT+8|80|0|","Etc/GMT+9|GMT+9|90|0|","Etc/GMT-1|GMT-1|-10|0|","Etc/GMT-10|GMT-10|-a0|0|","Etc/GMT-11|GMT-11|-b0|0|","Etc/GMT-12|GMT-12|-c0|0|","Etc/GMT-13|GMT-13|-d0|0|","Etc/GMT-14|GMT-14|-e0|0|","Etc/GMT-2|GMT-2|-20|0|","Etc/GMT-3|GMT-3|-30|0|","Etc/GMT-4|GMT-4|-40|0|","Etc/GMT-5|GMT-5|-50|0|","Etc/GMT-6|GMT-6|-60|0|","Etc/GMT-7|GMT-7|-70|0|","Etc/GMT-8|GMT-8|-80|0|","Etc/GMT-9|GMT-9|-90|0|","Etc/UCT|UCT|0|0|","Etc/UTC|UTC|0|0|","Europe/Amsterdam|AMT NST NEST NET CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Belfast|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Bratislava|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 16M0 1lc0 1tA0 17A0 11c0 1io0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Busingen|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|0123232323232323232345454676767676767676767623232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1ty0 2bD0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Kaliningrad|CET CEST CET CEST MSK MSD EEST EET FET|-10 -20 -20 -30 -30 -40 -30 -20 -30|0101010101010232454545454545454545454676767676767676767676767676767676767676787|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 Am0 Lb0 1en0 op0 1pNz0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1cJ0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0","Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ldXn.f aPWn.f Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|01010101010101010101010121212121234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-28dd0 11A0 1go0 19A0 1co0 1dA0 b1A0 18o0 3I00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 iyo0 Rc0 18o0 1hc0 1io0 1a00 14o0 5aL0 MM0 1vc0 17A0 1i00 1bc0 1eo0 17d0 1in0 17A0 6hA0 10N0 XIL0 1a10 1in0 17d0 19X0 1cN0 1fz0 1a10 1fX0 1cp0 1cO0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2as10 M00 1cM0 1cM0 14o0 1o00 WM0 1qM0 17c0 1cM0 M3A0 5M20 WM0 1fA0 1cM0 1cM0 1cM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 Lz0 1C10 Lz0 1EN0 Lz0 1C10 Lz0 1zd0 Oo0 1C00 On0 1cp0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Minsk|MMT EET MSK CEST CET MSD EEST FET|-1O -20 -30 -20 -10 -40 -30 -30|012343432525252525252525252616161616161616161616161616161616161616172|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cK0 1cM0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hy0","Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Moscow|MMT MMT MST MDST MSD MSK MSM EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c20 imv.j 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0","Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2as10 M00 1cM0 1cM0 14o0 1o00 WM0 1qM0 17c0 1cM0 M3A0 5M20 WM0 1fA0 1cM0 16K0 1iO0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 Lz0 1C10 Lz0 1EN0 Lz0 1C10 Lz0 1zd0 Oo0 1C00 On0 1C10 Lz0 1zd0 On0 1C10 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Samara|LMT SAMT SAMT KUYT KUYST MSD MSK EEST KUYT SAMST SAMST|-3k.k -30 -40 -40 -50 -40 -30 -30 -30 -50 -40|012343434343434343435656782929292929292929292929292929292929292a12|-22WNk.k qHak.k bcn0 1Qqo0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cN0 8o0 14j0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0","Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0","Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1a00 1cM0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646464647373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Volgograd|LMT TSAT STAT STAT VOLT VOLST VOLST VOLT MSK MSK|-2V.E -30 -30 -40 -40 -50 -40 -30 -40 -30|012345454545454545454676748989898989898989898989898989898989898989|-21IqV.E cLXV.E cEM0 1gqn0 Lco0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 2pz0 1cJ0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0","Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Zaporozhye|CUT EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","HST|HST|a0|0|","Indian/Chagos|LMT IOT IOT|-4N.E -50 -60|012|-2xosN.E 3AGLN.E","Indian/Christmas|CXT|-70|0|","Indian/Cocos|CCT|-6u|0|","Indian/Kerguelen|zzz TFT|0 -50|01|-MG00","Indian/Mahe|LMT SCT|-3F.M -40|01|-2yO3F.M","Indian/Maldives|MMT MVT|-4S -50|01|-olgS","Indian/Mauritius|LMT MUT MUST|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0","Indian/Reunion|LMT RET|-3F.Q -40|01|-2mDDF.Q","Kwajalein|MHT KWAT MHT|-b0 c0 -c0|012|-AX0 W9X0","MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","MST|MST|70|0|","MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","NZ-CHAT|CHAST CHAST CHADT|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00","PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","Pacific/Apia|LMT WSST SST SDT WSDT WSST|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00","Pacific/Bougainville|PGT JST BST|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0","Pacific/Chuuk|CHUT|-a0|0|","Pacific/Efate|LMT VUT VUST|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0","Pacific/Enderbury|PHOT PHOT PHOT|c0 b0 -d0|012|nIc0 B8n0","Pacific/Fakaofo|TKT TKT|b0 -d0|01|1Gfn0","Pacific/Fiji|LMT FJT FJST|-bT.I -c0 -d0|012121212121212121212121212121212121212121212121212121212121212|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 xA0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 xA0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 xA0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0","Pacific/Funafuti|TVT|-c0|0|","Pacific/Galapagos|LMT ECT GALT|5W.o 50 60|012|-1yVS1.A 2dTz1.A","Pacific/Gambier|LMT GAMT|8X.M 90|01|-2jof0.c","Pacific/Guadalcanal|LMT SBT|-aD.M -b0|01|-2joyD.M","Pacific/Guam|GST ChST|-a0 -a0|01|1fpq0","Pacific/Honolulu|HST HDT HST|au 9u a0|010102|-1thLu 8x0 lef0 8Pz0 46p0","Pacific/Kiritimati|LINT LINT LINT|aE a0 -e0|012|nIaE B8nk","Pacific/Kosrae|KOST KOST|-b0 -c0|010|-AX0 1bdz0","Pacific/Majuro|MHT MHT|-b0 -c0|01|-AX0","Pacific/Marquesas|LMT MART|9i 9u|01|-2joeG","Pacific/Midway|NST NDT BST SST|b0 a0 b0 b0|01023|-x3N0 An0 pJd0 EyM0","Pacific/Nauru|LMT NRT JST NRT|-b7.E -bu -90 -c0|01213|-1Xdn7.E PvzB.E 5RCu 1ouJu","Pacific/Niue|NUT NUT NUT|bk bu b0|012|-KfME 17y0a","Pacific/Norfolk|NMT NFT|-bc -bu|01|-Kgbc","Pacific/Noumea|LMT NCT NCST|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0","Pacific/Pago_Pago|LMT NST BST SST|bm.M b0 b0 b0|0123|-2nDMB.c 2gVzB.c EyM0","Pacific/Palau|PWT|-90|0|","Pacific/Pitcairn|PNT PST|8u 80|01|18Vku","Pacific/Pohnpei|PONT|-b0|0|","Pacific/Port_Moresby|PGT|-a0|0|","Pacific/Rarotonga|CKT CKHST CKT|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu","Pacific/Saipan|MPT MPT ChST|-90 -a0 -a0|012|-AV0 1g2n0","Pacific/Tahiti|LMT TAHT|9W.g a0|01|-2joe1.I","Pacific/Tarawa|GILT|-c0|0|","Pacific/Tongatapu|TOT TOT TOST|-ck -d0 -e0|01212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0","Pacific/Wake|WAKT|-c0|0|","Pacific/Wallis|WFT|-c0|0|","WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00"],links:["Africa/Abidjan|Africa/Bamako","Africa/Abidjan|Africa/Banjul","Africa/Abidjan|Africa/Conakry","Africa/Abidjan|Africa/Dakar","Africa/Abidjan|Africa/Freetown","Africa/Abidjan|Africa/Lome","Africa/Abidjan|Africa/Nouakchott","Africa/Abidjan|Africa/Ouagadougou","Africa/Abidjan|Africa/Sao_Tome","Africa/Abidjan|Africa/Timbuktu","Africa/Abidjan|Atlantic/St_Helena","Africa/Addis_Ababa|Africa/Asmara","Africa/Addis_Ababa|Africa/Asmera","Africa/Addis_Ababa|Africa/Dar_es_Salaam","Africa/Addis_Ababa|Africa/Djibouti","Africa/Addis_Ababa|Africa/Kampala","Africa/Addis_Ababa|Africa/Mogadishu","Africa/Addis_Ababa|Africa/Nairobi","Africa/Addis_Ababa|Indian/Antananarivo","Africa/Addis_Ababa|Indian/Comoro","Africa/Addis_Ababa|Indian/Mayotte","Africa/Bangui|Africa/Brazzaville","Africa/Bangui|Africa/Douala","Africa/Bangui|Africa/Kinshasa","Africa/Bangui|Africa/Lagos","Africa/Bangui|Africa/Libreville","Africa/Bangui|Africa/Luanda","Africa/Bangui|Africa/Malabo","Africa/Bangui|Africa/Niamey","Africa/Bangui|Africa/Porto-Novo","Africa/Blantyre|Africa/Bujumbura","Africa/Blantyre|Africa/Gaborone","Africa/Blantyre|Africa/Harare","Africa/Blantyre|Africa/Kigali","Africa/Blantyre|Africa/Lubumbashi","Africa/Blantyre|Africa/Lusaka","Africa/Blantyre|Africa/Maputo","Africa/Cairo|Egypt","Africa/Johannesburg|Africa/Maseru","Africa/Johannesburg|Africa/Mbabane","Africa/Juba|Africa/Khartoum","Africa/Tripoli|Libya","America/Adak|America/Atka","America/Adak|US/Aleutian","America/Anchorage|US/Alaska","America/Anguilla|America/Dominica","America/Anguilla|America/Grenada","America/Anguilla|America/Guadeloupe","America/Anguilla|America/Marigot","America/Anguilla|America/Montserrat","America/Anguilla|America/Port_of_Spain","America/Anguilla|America/St_Barthelemy","America/Anguilla|America/St_Kitts","America/Anguilla|America/St_Lucia","America/Anguilla|America/St_Thomas","America/Anguilla|America/St_Vincent","America/Anguilla|America/Tortola","America/Anguilla|America/Virgin","America/Argentina/Buenos_Aires|America/Buenos_Aires","America/Argentina/Catamarca|America/Argentina/ComodRivadavia","America/Argentina/Catamarca|America/Catamarca","America/Argentina/Cordoba|America/Cordoba","America/Argentina/Cordoba|America/Rosario","America/Argentina/Jujuy|America/Jujuy","America/Argentina/Mendoza|America/Mendoza","America/Aruba|America/Curacao","America/Aruba|America/Kralendijk","America/Aruba|America/Lower_Princes","America/Atikokan|America/Coral_Harbour","America/Chicago|US/Central","America/Denver|America/Shiprock","America/Denver|Navajo","America/Denver|US/Mountain","America/Detroit|US/Michigan","America/Edmonton|Canada/Mountain","America/Ensenada|America/Tijuana","America/Ensenada|Mexico/BajaNorte","America/Fort_Wayne|America/Indiana/Indianapolis","America/Fort_Wayne|America/Indianapolis","America/Fort_Wayne|US/East-Indiana","America/Halifax|Canada/Atlantic","America/Havana|Cuba","America/Indiana/Knox|America/Knox_IN","America/Indiana/Knox|US/Indiana-Starke","America/Jamaica|Jamaica","America/Kentucky/Louisville|America/Louisville","America/Los_Angeles|US/Pacific","America/Los_Angeles|US/Pacific-New","America/Manaus|Brazil/West","America/Mazatlan|Mexico/BajaSur","America/Mexico_City|Mexico/General","America/New_York|US/Eastern","America/Noronha|Brazil/DeNoronha","America/Phoenix|US/Arizona","America/Porto_Acre|America/Rio_Branco","America/Porto_Acre|Brazil/Acre","America/Regina|Canada/East-Saskatchewan","America/Regina|Canada/Saskatchewan","America/Santiago|Chile/Continental","America/Sao_Paulo|Brazil/East","America/St_Johns|Canada/Newfoundland","America/Toronto|Canada/Eastern","America/Vancouver|Canada/Pacific","America/Whitehorse|Canada/Yukon","America/Winnipeg|Canada/Central","Antarctica/McMurdo|Antarctica/South_Pole","Antarctica/McMurdo|NZ","Antarctica/McMurdo|Pacific/Auckland","Arctic/Longyearbyen|Atlantic/Jan_Mayen","Arctic/Longyearbyen|Europe/Oslo","Asia/Ashgabat|Asia/Ashkhabad","Asia/Bangkok|Asia/Phnom_Penh","Asia/Bangkok|Asia/Vientiane","Asia/Calcutta|Asia/Kolkata","Asia/Chongqing|Asia/Chungking","Asia/Chongqing|Asia/Harbin","Asia/Chongqing|Asia/Shanghai","Asia/Chongqing|PRC","Asia/Dacca|Asia/Dhaka","Asia/Ho_Chi_Minh|Asia/Saigon","Asia/Hong_Kong|Hongkong","Asia/Istanbul|Europe/Istanbul","Asia/Istanbul|Turkey","Asia/Jerusalem|Asia/Tel_Aviv","Asia/Jerusalem|Israel","Asia/Kashgar|Asia/Urumqi","Asia/Kathmandu|Asia/Katmandu","Asia/Macao|Asia/Macau","Asia/Makassar|Asia/Ujung_Pandang","Asia/Nicosia|Europe/Nicosia","Asia/Seoul|ROK","Asia/Singapore|Singapore","Asia/Taipei|ROC","Asia/Tehran|Iran","Asia/Thimbu|Asia/Thimphu","Asia/Tokyo|Japan","Asia/Ulaanbaatar|Asia/Ulan_Bator","Atlantic/Faeroe|Atlantic/Faroe","Atlantic/Reykjavik|Iceland","Australia/ACT|Australia/Canberra","Australia/ACT|Australia/NSW","Australia/ACT|Australia/Sydney","Australia/Adelaide|Australia/South","Australia/Brisbane|Australia/Queensland","Australia/Broken_Hill|Australia/Yancowinna","Australia/Darwin|Australia/North","Australia/Hobart|Australia/Tasmania","Australia/LHI|Australia/Lord_Howe","Australia/Melbourne|Australia/Victoria","Australia/Perth|Australia/West","Chile/EasterIsland|Pacific/Easter","Eire|Europe/Dublin","Etc/GMT+0|Etc/GMT","Etc/GMT+0|Etc/GMT-0","Etc/GMT+0|Etc/GMT0","Etc/GMT+0|Etc/Greenwich","Etc/GMT+0|GMT","Etc/GMT+0|GMT+0","Etc/GMT+0|GMT-0","Etc/GMT+0|GMT0","Etc/GMT+0|Greenwich","Etc/UCT|UCT","Etc/UTC|Etc/Universal","Etc/UTC|Etc/Zulu","Etc/UTC|UTC","Etc/UTC|Universal","Etc/UTC|Zulu","Europe/Belfast|Europe/Guernsey","Europe/Belfast|Europe/Isle_of_Man","Europe/Belfast|Europe/Jersey","Europe/Belfast|Europe/London","Europe/Belfast|GB","Europe/Belfast|GB-Eire","Europe/Belgrade|Europe/Ljubljana","Europe/Belgrade|Europe/Podgorica","Europe/Belgrade|Europe/Sarajevo","Europe/Belgrade|Europe/Skopje","Europe/Belgrade|Europe/Zagreb","Europe/Bratislava|Europe/Prague","Europe/Busingen|Europe/Vaduz","Europe/Busingen|Europe/Zurich","Europe/Chisinau|Europe/Tiraspol","Europe/Helsinki|Europe/Mariehamn","Europe/Lisbon|Portugal","Europe/Moscow|W-SU","Europe/Rome|Europe/San_Marino","Europe/Rome|Europe/Vatican","Europe/Warsaw|Poland","Kwajalein|Pacific/Kwajalein","NZ-CHAT|Pacific/Chatham","Pacific/Chuuk|Pacific/Truk","Pacific/Chuuk|Pacific/Yap","Pacific/Honolulu|Pacific/Johnston","Pacific/Honolulu|US/Hawaii","Pacific/Pago_Pago|Pacific/Samoa","Pacific/Pago_Pago|US/Samoa","Pacific/Pohnpei|Pacific/Ponape"]});
return C
}));
(function(){var m={},i=window,l=i.document,c="localStorage",d="__storejs__",h;
m.disabled=false;
m.set=function(e,o){};
m.get=function(e){};
m.remove=function(e){};
m.clear=function(){};
m.transact=function(e,q,o){var p=m.get(e);
if(o==null){o=q;
q=null
}if(typeof p=="undefined"){p=q||{}
}o(p);
m.set(e,p)
};
m.getAll=function(){};
m.serialize=function(e){return JSON.stringify(e)
};
m.deserialize=function(o){if(typeof o!="string"){return undefined
}try{return JSON.parse(o)
}catch(p){return o||undefined
}};
function b(){try{return(c in i&&i[c])
}catch(e){return false
}}if(b()){h=i[c];
m.set=function(e,o){if(o===undefined){return m.remove(e)
}h.setItem(e,m.serialize(o));
return o
};
m.get=function(e){return m.deserialize(h.getItem(e))
};
m.remove=function(e){h.removeItem(e)
};
m.clear=function(){h.clear()
};
m.getAll=function(){var e={};
for(var p=0;
p<h.length;
++p){var o=h.key(p);
e[o]=m.get(o)
}return e
}
}else{if(l.documentElement.addBehavior){var k,g;
try{g=new ActiveXObject("htmlfile");
g.open();
g.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></frame>');
g.close();
k=g.w.frames[0].document;
h=k.createElement("div")
}catch(j){h=l.createElement("div");
k=l.body
}function a(e){return function(){var p=Array.prototype.slice.call(arguments,0);
p.unshift(h);
k.appendChild(h);
h.addBehavior("#default#userData");
h.load(c);
var o=e.apply(m,p);
k.removeChild(h);
return o
}
}var f=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");
function n(e){return e.replace(f,"___")
}m.set=a(function(p,e,o){e=n(e);
if(o===undefined){return m.remove(e)
}p.setAttribute(e,m.serialize(o));
p.save(c);
return o
});
m.get=a(function(o,e){e=n(e);
return m.deserialize(o.getAttribute(e))
});
m.remove=a(function(o,e){e=n(e);
o.removeAttribute(e);
o.save(c)
});
m.clear=a(function(q){var o=q.XMLDocument.documentElement.attributes;
q.load(c);
for(var p=0,e;
e=o[p];
p++){q.removeAttribute(e.name)
}q.save(c)
});
m.getAll=a(function(r){var o=r.XMLDocument.documentElement.attributes;
r.load(c);
var p={};
for(var q=0,e;
e=o[q];
++q){p[e]=m.get(e)
}return p
})
}}try{m.set(d,d);
if(m.get(d)!=d){m.disabled=true
}m.remove(d)
}catch(j){m.disabled=true
}m.enabled=!m.disabled;
if(typeof module!="undefined"&&typeof module!="function"){module.exports=m
}else{if(typeof define==="function"&&define.amd){define(m)
}else{this.store=m
}}})();
/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function(a){if(typeof bootstrap==="function"){bootstrap("promise",a)
}else{if(typeof exports==="object"){module.exports=a()
}else{if(typeof define==="function"&&define.amd){define(a)
}else{if(typeof ses!=="undefined"){if(!ses.ok()){return
}else{ses.makeQ=a
}}else{Q=a()
}}}}})(function(){var f=false;
try{throw new Error()
}catch(O){f=!!O.stack
}var ab=k();
var P;
var an=function(){};
var M=(function(){var aJ={task:void 0,next:null};
var aI=aJ;
var aL=false;
var aG=void 0;
var aH=false;
function e(){while(aJ.next){aJ=aJ.next;
var aM=aJ.task;
aJ.task=void 0;
var aN=aJ.domain;
if(aN){aJ.domain=void 0;
aN.enter()
}try{aM()
}catch(aO){if(aH){aN&&aN.exit();
setTimeout(e,0);
aN&&aN.enter();
throw aO
}else{setTimeout(function(){throw aO
},0)
}}if(aN){aN.exit()
}}aL=false
}M=function(aM){aI=aI.next={task:aM,domain:aH&&process.domain,next:null};
if(!aL){aL=true;
aG()
}};
if(typeof process!=="undefined"&&process.nextTick){aH=true;
aG=function(){process.nextTick(e)
}
}else{if(typeof setImmediate==="function"){if(typeof window!=="undefined"){aG=setImmediate.bind(window,e)
}else{aG=function(){setImmediate(e)
}
}}else{if(typeof MessageChannel!=="undefined"){var aK=new MessageChannel();
aK.port1.onmessage=e;
aG=function(){aK.port2.postMessage(0)
}
}else{aG=function(){setTimeout(e,0)
}
}}}return M
})();
function v(aG){var e=Function.call;
return function(){return e.apply(aG,arguments)
}
}var am=v(Array.prototype.slice);
var X=v(Array.prototype.reduce||function(aI,aH){var e=0,aG=this.length;
if(arguments.length===1){do{if(e in this){aH=this[e++];
break
}if(++e>=aG){throw new TypeError()
}}while(1)
}for(;
e<aG;
e++){if(e in this){aH=aI(aH,this[e],e)
}}return aH
});
var ap=v(Array.prototype.indexOf||function(aG){for(var e=0;
e<this.length;
e++){if(this[e]===aG){return e
}}return -1
});
var C=v(Array.prototype.map||function(aI,aG){var e=this;
var aH=[];
X(e,function(aL,aK,aJ){aH.push(aI.call(aG,aK,aJ,e))
},void 0);
return aH
});
var E=Object.create||function(aG){function e(){}e.prototype=aG;
return new e()
};
var ax=v(Object.prototype.hasOwnProperty);
var B=Object.keys||function(e){var aH=[];
for(var aG in e){if(ax(e,aG)){aH.push(aG)
}}return aH
};
var aC=v(Object.prototype.toString);
function x(e){return e===Object(e)
}function z(e){return(aC(e)==="[object StopIteration]"||e instanceof K)
}var K;
if(typeof ReturnValue!=="undefined"){K=ReturnValue
}else{K=function(e){this.value=e
}
}var al;
try{new Function("(function* (){ yield 1; })");
al=true
}catch(O){al=false
}var ad="From previous event:";
function r(e,aJ){if(f&&aJ.stack&&typeof e==="object"&&e!==null&&e.stack&&e.stack.indexOf(ad)===-1){var aH=[];
for(var aI=aJ;
!!aI;
aI=aI.source){if(aI.stack){aH.unshift(aI.stack)
}}aH.unshift(e.stack);
var aG=aH.join("\n"+ad+"\n");
e.stack=D(aG)
}}function D(aI){var aG=aI.split("\n");
var aJ=[];
for(var aH=0;
aH<aG.length;
++aH){var e=aG[aH];
if(!ar(e)&&!i(e)&&e){aJ.push(e)
}}return aJ.join("\n")
}function i(e){return e.indexOf("(module.js:")!==-1||e.indexOf("(node.js:")!==-1
}function ak(e){var aI=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);
if(aI){return[aI[1],Number(aI[2])]
}var aH=/at ([^ ]+):(\d+):(?:\d+)$/.exec(e);
if(aH){return[aH[1],Number(aH[2])]
}var aG=/.*@(.+):(\d+)$/.exec(e);
if(aG){return[aG[1],Number(aG[2])]
}}function ar(aG){var aH=ak(aG);
if(!aH){return false
}var aI=aH[0];
var e=aH[1];
return aI===P&&e>=ab&&e<=ae
}function k(){if(!f){return
}try{throw new Error()
}catch(aJ){var aG=aJ.stack.split("\n");
var aH=aG[0].indexOf("@")>0?aG[1]:aG[2];
var aI=ak(aH);
if(!aI){return
}P=aI[0];
return aI[1]
}}function aA(aH,e,aG){return function(){if(typeof console!=="undefined"&&typeof console.warn==="function"){console.warn(e+" is deprecated, use "+aG+" instead.",new Error("").stack)
}return aH.apply(aH,arguments)
}
}function aa(e){return Z(e)
}aa.nextTick=M;
aa.longStackSupport=false;
aa.defer=ac;
function ac(){var aI=[],aK=[],aJ;
var aG=E(ac.prototype);
var aM=E(az.prototype);
aM.promiseDispatch=function(aO,aP,aN){var e=am(arguments);
if(aI){aI.push(e);
if(aP==="when"&&aN[1]){aK.push(aN[1])
}}else{M(function(){aJ.promiseDispatch.apply(aJ,e)
})
}};
aM.valueOf=aA(function(){if(aI){return aM
}var e=g(aJ);
if(aq(e)){aJ=e
}return e
},"valueOf","inspect");
aM.inspect=function(){if(!aJ){return{state:"pending"}
}return aJ.inspect()
};
if(aa.longStackSupport&&f){try{throw new Error()
}catch(aL){aM.stack=aL.stack.substring(aL.stack.indexOf("\n")+1)
}}function aH(e){aJ=e;
aM.source=e;
X(aI,function(aO,aN){M(function(){e.promiseDispatch.apply(e,aN)
})
},void 0);
aI=void 0;
aK=void 0
}aG.promise=aM;
aG.resolve=function(e){if(aJ){return
}aH(Z(e))
};
aG.fulfill=function(e){if(aJ){return
}aH(aD(e))
};
aG.reject=function(e){if(aJ){return
}aH(ah(e))
};
aG.notify=function(e){if(aJ){return
}X(aK,function(aO,aN){M(function(){aN(e)
})
},void 0)
};
return aG
}ac.prototype.makeNodeResolver=function(){var e=this;
return function(aG,aH){if(aG){e.reject(aG)
}else{if(arguments.length>2){e.resolve(am(arguments,1))
}else{e.resolve(aH)
}}}
};
aa.promise=u;
function u(aG){if(typeof aG!=="function"){throw new TypeError("resolver must be a function.")
}var e=ac();
t(aG,e.resolve,e.reject,e.notify).fail(e.reject);
return e.promise
}aa.makePromise=az;
function az(aG,aJ,aI){if(aJ===void 0){aJ=function(aK){return ah(new Error("Promise does not support operation: "+aK))
}
}if(aI===void 0){aI=function(){return{state:"unknown"}
}
}var aH=E(az.prototype);
aH.promiseDispatch=function(aN,aO,aL){var aK;
try{if(aG[aO]){aK=aG[aO].apply(aH,aL)
}else{aK=aJ.call(aH,aO,aL)
}}catch(aM){aK=ah(aM)
}if(aN){aN(aK)
}};
aH.inspect=aI;
if(aI){var e=aI();
if(e.state==="rejected"){aH.exception=e.reason
}aH.valueOf=aA(function(){var aK=aI();
if(aK.state==="pending"||aK.state==="rejected"){return aH
}return aK.value
})
}return aH
}az.prototype.then=function(aJ,aK,aG){var aL=this;
var aM=ac();
var aH=false;
function aI(aP){try{return typeof aJ==="function"?aJ(aP):aP
}catch(aO){return ah(aO)
}}function aN(aO){if(typeof aK==="function"){r(aO,aL);
try{return aK(aO)
}catch(aP){return ah(aP)
}}return ah(aO)
}function e(aO){return typeof aG==="function"?aG(aO):aO
}M(function(){aL.promiseDispatch(function(aO){if(aH){return
}aH=true;
aM.resolve(aI(aO))
},"when",[function(aO){if(aH){return
}aH=true;
aM.resolve(aN(aO))
}])
});
aL.promiseDispatch(void 0,"when",[void 0,function(aO){var aQ;
var aR=false;
try{aQ=e(aO)
}catch(aP){aR=true;
if(aa.onerror){aa.onerror(aP)
}else{throw aP
}}if(!aR){aM.notify(aQ)
}}]);
return aM.promise
};
az.prototype.thenResolve=function(e){return aw(this,function(){return e
})
};
az.prototype.thenReject=function(e){return aw(this,function(){throw e
})
};
X(["isFulfilled","isRejected","isPending","dispatch","when","spread","get","set","del","delete","post","send","mapply","invoke","mcall","keys","fapply","fcall","fbind","all","allResolved","timeout","delay","catch","finally","fail","fin","progress","done","nfcall","nfapply","nfbind","denodeify","nbind","npost","nsend","nmapply","ninvoke","nmcall","nodeify"],function(aG,e){az.prototype[e]=function(){return aa[e].apply(aa,[this].concat(am(arguments)))
}
},void 0);
az.prototype.toSource=function(){return this.toString()
};
az.prototype.toString=function(){return"[object Promise]"
};
aa.nearer=g;
function g(aG){if(aq(aG)){var e=aG.inspect();
if(e.state==="fulfilled"){return e.value
}}return aG
}aa.isPromise=aq;
function aq(e){return x(e)&&typeof e.promiseDispatch==="function"&&typeof e.inspect==="function"
}aa.isPromiseAlike=R;
function R(e){return x(e)&&typeof e.then==="function"
}aa.isPending=U;
function U(e){return aq(e)&&e.inspect().state==="pending"
}aa.isFulfilled=d;
function d(e){return !aq(e)||e.inspect().state==="fulfilled"
}aa.isRejected=q;
function q(e){return aq(e)&&e.inspect().state==="rejected"
}var s=[];
var S=[];
var aE=false;
var A=true;
function W(){if(!aE&&typeof window!=="undefined"&&!window.Touch&&window.console){console.warn("[Q] Unhandled rejection reasons (should be empty):",s)
}aE=true
}function Y(){for(var e=0;
e<s.length;
e++){var aG=s[e];
if(aG&&typeof aG.stack!=="undefined"){console.warn("Unhandled rejection reason:",aG.stack)
}else{console.warn("Unhandled rejection reason (no stack):",aG)
}}}function at(){s.length=0;
S.length=0;
aE=false;
if(!A){A=true;
if(typeof process!=="undefined"&&process.on){process.on("exit",Y)
}}}function H(aG,e){if(!A){return
}S.push(aG);
s.push(e);
W()
}function m(aG){if(!A){return
}var e=ap(S,aG);
if(e!==-1){S.splice(e,1);
s.splice(e,1)
}}aa.resetUnhandledRejections=at;
aa.getUnhandledReasons=function(){return s.slice()
};
aa.stopUnhandledRejectionTracking=function(){at();
if(typeof process!=="undefined"&&process.on){process.removeListener("exit",Y)
}A=false
};
at();
aa.reject=ah;
function ah(aG){var e=az({when:function(aJ){if(aJ){m(this)
}return aJ?aJ(aG):this
}},function aI(){return this
},function aH(){return{state:"rejected",reason:aG}
});
H(e,aG);
return e
}aa.fulfill=aD;
function aD(e){return az({when:function(){return e
},get:function(aH){return e[aH]
},set:function(aH,aI){e[aH]=aI
},"delete":function(aH){delete e[aH]
},post:function(aI,aH){if(aI===null||aI===void 0){return e.apply(void 0,aH)
}else{return e[aI].apply(e,aH)
}},apply:function(aI,aH){return e.apply(aI,aH)
},keys:function(){return B(e)
}},void 0,function aG(){return{state:"fulfilled",value:e}
})
}aa.resolve=Z;
function Z(e){if(aq(e)){return e
}if(R(e)){return aB(e)
}else{return aD(e)
}}function aB(aG){var e=ac();
M(function(){try{aG.then(e.resolve,e.reject,e.notify)
}catch(aH){e.reject(aH)
}});
return e.promise
}aa.master=h;
function h(e){return az({isDef:function(){}},function aG(aI,aH){return aF(e,aI,aH)
},function(){return Z(e).inspect()
})
}aa.when=aw;
function aw(aH,e,aG,aI){return aa(aH).then(e,aG,aI)
}aa.spread=I;
function I(aH,e,aG){return aw(aH,function(aI){return au(aI).then(function(aJ){return e.apply(void 0,aJ)
},aG)
},aG)
}aa.async=V;
function V(e){return function(){function aH(aN,aL){var aK;
if(al){try{aK=aI[aN](aL)
}catch(aM){return ah(aM)
}if(aK.done){return aK.value
}else{return aw(aK.value,aJ,aG)
}}else{try{aK=aI[aN](aL)
}catch(aM){if(z(aM)){return aM.value
}else{return ah(aM)
}}return aw(aK,aJ,aG)
}}var aI=e.apply(this,arguments);
var aJ=aH.bind(aH,"send");
var aG=aH.bind(aH,"throw");
return aJ()
}
}aa.spawn=y;
function y(e){aa.done(aa.async(e)())
}aa["return"]=j;
function j(e){throw new K(e)
}aa.promised=ay;
function ay(e){return function(){return I([this,au(arguments)],function(aG,aH){return e.apply(aG,aH)
})
}
}aa.dispatch=aF;
function aF(aH,aI,aG){var e=ac();
M(function(){Z(aH).promiseDispatch(e.resolve,aI,aG)
});
return e.promise
}aa.dispatcher=G;
function G(e){return function(aH){var aG=am(arguments,1);
return aF(aH,e,aG)
}
}aa.get=G("get");
aa.set=G("set");
aa["delete"]=aa.del=G("delete");
var o=aa.post=G("post");
aa.mapply=o;
aa.send=N;
aa.invoke=N;
aa.mcall=N;
function N(aH,aG){var e=am(arguments,2);
return o(aH,aG,e)
}aa.fapply=av;
function av(aG,e){return aF(aG,"apply",[void 0,e])
}aa["try"]=t;
aa.fcall=t;
function t(aG){var e=am(arguments,1);
return av(aG,e)
}aa.fbind=af;
function af(aH){var e=am(arguments,1);
return function aG(){var aI=e.concat(am(arguments));
return aF(aH,"apply",[this,aI])
}
}aa.keys=G("keys");
aa.all=au;
function au(e){return aw(e,function(aI){var aH=0;
var aG=ac();
X(aI,function(aM,aL,aK){var aJ;
if(aq(aL)&&(aJ=aL.inspect()).state==="fulfilled"){aI[aK]=aJ.value
}else{++aH;
aw(aL,function(aN){aI[aK]=aN;
if(--aH===0){aG.resolve(aI)
}},aG.reject)
}},void 0);
if(aH===0){aG.resolve(aI)
}return aG.promise
})
}aa.allResolved=aA(T,"allResolved","allSettled");
function T(e){return aw(e,function(aG){aG=C(aG,Z);
return aw(au(C(aG,function(aH){return aw(aH,an,an)
})),function(){return aG
})
})
}aa.allSettled=l;
function l(e){return aw(e,function(aG){return au(C(aG,function(aI,aH){return aw(aI,function(aJ){aG[aH]={state:"fulfilled",value:aJ};
return aG[aH]
},function(aJ){aG[aH]={state:"rejected",reason:aJ};
return aG[aH]
})
})).thenResolve(aG)
})
}aa["catch"]=aa.fail=a;
function a(aG,e){return aw(aG,void 0,e)
}aa.progress=F;
function F(e,aG){return aw(e,void 0,void 0,aG)
}aa["finally"]=aa.fin=p;
function p(e,aG){return aw(e,function(aH){return aw(aG(),function(){return aH
})
},function(aH){return aw(aG(),function(){return ah(aH)
})
})
}aa.done=aj;
function aj(aK,e,aJ,aI){var aG=function(aL){M(function(){r(aL,aK);
if(aa.onerror){aa.onerror(aL)
}else{throw aL
}})
};
var aH=e||aJ||aI?aw(aK,e,aJ,aI):aK;
if(typeof process==="object"&&process&&process.domain){aG=process.domain.bind(aG)
}a(aH,aG)
}aa.timeout=ag;
function ag(aJ,aG,aI){var e=ac();
var aH=setTimeout(function(){e.reject(new Error(aI||"Timed out after "+aG+" ms"))
},aG);
aw(aJ,function(aK){clearTimeout(aH);
e.resolve(aK)
},function(aK){clearTimeout(aH);
e.reject(aK)
},e.notify);
return e.promise
}aa.delay=b;
function b(aH,aG){if(aG===void 0){aG=aH;
aH=void 0
}var e=ac();
aw(aH,undefined,undefined,e.notify);
setTimeout(function(){e.resolve(aH)
},aG);
return e.promise
}aa.nfapply=w;
function w(aI,aG){var aH=am(aG);
var e=ac();
aH.push(e.makeNodeResolver());
av(aI,aH).fail(e.reject);
return e.promise
}aa.nfcall=J;
function J(aH){var aG=am(arguments,1);
var e=ac();
aG.push(e.makeNodeResolver());
av(aH,aG).fail(e.reject);
return e.promise
}aa.nfbind=ao;
aa.denodeify=aa.nfbind;
function ao(aG){var e=am(arguments,1);
return function(){var aI=e.concat(am(arguments));
var aH=ac();
aI.push(aH.makeNodeResolver());
av(aG,aI).fail(aH.reject);
return aH.promise
}
}aa.nbind=n;
function n(aH,e){var aG=am(arguments,2);
return function(){var aK=aG.concat(am(arguments));
var aI=ac();
aK.push(aI.makeNodeResolver());
function aJ(){return aH.apply(e,arguments)
}av(aJ,aK).fail(aI.reject);
return aI.promise
}
}aa.npost=L;
aa.nmapply=L;
function L(aI,aH,aG){var aJ=am(aG||[]);
var e=ac();
aJ.push(e.makeNodeResolver());
o(aI,aH,aJ).fail(e.reject);
return e.promise
}aa.nsend=ai;
aa.ninvoke=aa.nsend;
aa.nmcall=aa.nsend;
function ai(aH,aG){var aI=am(arguments,2);
var e=ac();
aI.push(e.makeNodeResolver());
o(aH,aG,aI).fail(e.reject);
return e.promise
}aa.nodeify=c;
function c(aG,e){if(e){aG.then(function(aH){M(function(){e(null,aH)
})
},function(aH){M(function(){e(aH)
})
})
}else{return aG
}}var ae=k();
return aa
});
/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */
(function(b){function c(){}function a(f){function e(i){i.prototype.option||(i.prototype.option=function(j){f.isPlainObject(j)&&(this.options=f.extend(!0,this.options,j))
})
}function h(k,j){f.fn[k]=function(t){if("string"==typeof t){for(var o=d.call(arguments,1),i=0,l=this.length;
l>i;
i++){var r=this[i],m=f.data(r,k);
if(m){if(f.isFunction(m[t])&&"_"!==t.charAt(0)){var q=m[t].apply(m,o);
if(void 0!==q){return q
}}else{g("no such method '"+t+"' for "+k+" instance")
}}else{g("cannot call methods on "+k+" prior to initialization; attempted to call '"+t+"'")
}}return this
}return this.each(function(){var n=f.data(this,k);
n?(n.option(t),n._init()):(n=new j(this,t),f.data(this,k,n))
})
}
}if(f){var g="undefined"==typeof console?c:function(i){console.error(i)
};
return f.bridget=function(i,j){e(j),h(i,j)
},f.bridget
}}var d=Array.prototype.slice;
"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],a):a(b.jQuery)
})(window),function(b){function d(j){var h=b.event;
return h.target=h.target||h.srcElement||j,h
}var a=document.documentElement,f=function(){};
a.addEventListener?f=function(j,k,h){j.addEventListener(k,h,!1)
}:a.attachEvent&&(f=function(h,e,j){h[e+j]=j.handleEvent?function(){var k=d(h);
j.handleEvent.call(j,k)
}:function(){var k=d(h);
j.call(h,k)
},h.attachEvent("on"+e,h[e+j])
});
var g=function(){};
a.removeEventListener?g=function(j,k,h){j.removeEventListener(k,h,!1)
}:a.detachEvent&&(g=function(j,k,h){j.detachEvent("on"+k,j[k+h]);
try{delete j[k+h]
}catch(l){j[k+h]=void 0
}});
var c={bind:f,unbind:g};
"function"==typeof define&&define.amd?define("eventie/eventie",c):"object"==typeof exports?module.exports=c:b.eventie=c
}(this),function(b){function d(e){"function"==typeof e&&(d.isReady?e():c.push(e))
}function a(j){var h="readystatechange"===j.type&&"complete"!==g.readyState;
if(!d.isReady&&!h){d.isReady=!0;
for(var l=0,k=c.length;
k>l;
l++){var e=c[l];
e()
}}}function f(e){return e.bind(g,"DOMContentLoaded",a),e.bind(g,"readystatechange",a),e.bind(b,"load",a),d
}var g=b.document,c=[];
d.isReady=!1,"function"==typeof define&&define.amd?(d.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],f)):b.docReady=f(b.eventie)
}(this),function(){function b(){}function d(j,k){for(var h=j.length;
h--;
){if(j[h].listener===k){return h
}}return -1
}function a(e){return function(){return this[e].apply(this,arguments)
}
}var f=b.prototype,g=this,c=g.EventEmitter;
f.getListeners=function(j){var k,h,l=this._getEvents();
if(j instanceof RegExp){k={};
for(h in l){l.hasOwnProperty(h)&&j.test(h)&&(k[h]=l[h])
}}else{k=l[j]||(l[j]=[])
}return k
},f.flattenListeners=function(j){var k,h=[];
for(k=0;
j.length>k;
k+=1){h.push(j[k].listener)
}return h
},f.getListenersAsObject=function(j){var k,h=this.getListeners(j);
return h instanceof Array&&(k={},k[j]=h),k||h
},f.addListener=function(h,e){var k,l=this.getListenersAsObject(h),j="object"==typeof e;
for(k in l){l.hasOwnProperty(k)&&-1===d(l[k],e)&&l[k].push(j?e:{listener:e,once:!1})
}return this
},f.on=a("addListener"),f.addOnceListener=function(h,i){return this.addListener(h,{listener:i,once:!0})
},f.once=a("addOnceListener"),f.defineEvent=function(e){return this.getListeners(e),this
},f.defineEvents=function(h){for(var i=0;
h.length>i;
i+=1){this.defineEvent(h[i])
}return this
},f.removeListener=function(h,e){var k,l,j=this.getListenersAsObject(h);
for(l in j){j.hasOwnProperty(l)&&(k=d(j[l],e),-1!==k&&j[l].splice(k,1))
}return this
},f.off=a("removeListener"),f.addListeners=function(h,i){return this.manipulateListeners(!1,h,i)
},f.removeListeners=function(h,i){return this.manipulateListeners(!0,h,i)
},f.manipulateListeners=function(j,m,h){var p,q,l=j?this.removeListener:this.addListener,k=j?this.removeListeners:this.addListeners;
if("object"!=typeof m||m instanceof RegExp){for(p=h.length;
p--;
){l.call(this,m,h[p])
}}else{for(p in m){m.hasOwnProperty(p)&&(q=m[p])&&("function"==typeof q?l.call(this,p,q):k.call(this,p,q))
}}return this
},f.removeEvent=function(j){var k,h=typeof j,l=this._getEvents();
if("string"===h){delete l[j]
}else{if(j instanceof RegExp){for(k in l){l.hasOwnProperty(k)&&j.test(k)&&delete l[k]
}}else{delete this._events
}}return this
},f.removeAllListeners=a("removeEvent"),f.emitEvent=function(j,m){var h,p,q,l,k=this.getListenersAsObject(j);
for(q in k){if(k.hasOwnProperty(q)){for(p=k[q].length;
p--;
){h=k[q][p],h.once===!0&&this.removeListener(j,h.listener),l=h.listener.apply(this,m||[]),l===this._getOnceReturnValue()&&this.removeListener(j,h.listener)
}}}return this
},f.trigger=a("emitEvent"),f.emit=function(h){var i=Array.prototype.slice.call(arguments,1);
return this.emitEvent(h,i)
},f.setOnceReturnValue=function(e){return this._onceReturnValue=e,this
},f._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0
},f._getEvents=function(){return this._events||(this._events={})
},b.noConflict=function(){return g.EventEmitter=c,b
},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return b
}):"object"==typeof module&&module.exports?module.exports=b:this.EventEmitter=b
}.call(this),function(b){function c(f){if(f){if("string"==typeof d[f]){return f
}f=f.charAt(0).toUpperCase()+f.slice(1);
for(var h,i=0,g=a.length;
g>i;
i++){if(h=a[i]+f,"string"==typeof d[h]){return h
}}}}var a="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;
"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return c
}):"object"==typeof exports?module.exports=c:b.getStyleProperty=c
}(window),function(b){function f(k){var l=parseFloat(k),j=-1===k.indexOf("%")&&!isNaN(l);
return j&&l
}function a(){for(var k={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},l=0,j=c.length;
j>l;
l++){var m=c[l];
k[m]=0
}return k
}function g(j){function l(x){if("string"==typeof x&&(x=document.querySelector(x)),x&&"object"==typeof x&&x.nodeType){var A=d(x);
if("none"===A.display){return a()
}var B={};
B.width=x.offsetWidth,B.height=x.offsetHeight;
for(var E=B.isBorderBox=!(!k||!A[k]||"border-box"!==A[k]),G=0,J=c.length;
J>G;
G++){var H=c[G],D=A[H];
D=e(x,D);
var s=parseFloat(D);
B[H]=isNaN(s)?0:s
}var C=B.paddingLeft+B.paddingRight,F=B.paddingTop+B.paddingBottom,w=B.marginLeft+B.marginRight,M=B.marginTop+B.marginBottom,u=B.borderLeftWidth+B.borderRightWidth,q=B.borderTopWidth+B.borderBottomWidth,r=E&&i,p=f(A.width);
p!==!1&&(B.width=p+(r?0:C+u));
var K=f(A.height);
return K!==!1&&(B.height=K+(r?0:F+q)),B.innerWidth=B.width-(C+u),B.innerHeight=B.height-(F+q),B.outerWidth=B.width+w,B.outerHeight=B.height+M,B
}}function e(n,u){if(h||-1===u.indexOf("%")){return u
}var m=n.style,v=m.left,q=n.runtimeStyle,p=q&&q.left;
return p&&(q.left=n.currentStyle.left),m.left=u,u=m.pixelLeft,m.left=v,p&&(q.left=p),u
}var i,k=j("boxSizing");
return function(){if(k){var n=document.createElement("div");
n.style.width="200px",n.style.padding="1px 2px 3px 4px",n.style.borderStyle="solid",n.style.borderWidth="1px 2px 3px 4px",n.style[k]="border-box";
var m=document.body||document.documentElement;
m.appendChild(n);
var p=d(n);
i=200===f(p.width),m.removeChild(n)
}}(),l
}var h=b.getComputedStyle,d=h?function(e){return h(e,null)
}:function(e){return e.currentStyle
},c=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];
"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],g):"object"==typeof exports?module.exports=g(require("get-style-property")):b.getSize=g(b.getStyleProperty)
}(window),function(l,h){function g(a,i){return a[j](i)
}function d(a){if(!a.parentNode){var i=document.createDocumentFragment();
i.appendChild(a)
}}function f(o,q){d(o);
for(var a=o.parentNode.querySelectorAll(q),s=0,p=a.length;
p>s;
s++){if(a[s]===o){return !0
}}return !1
}function b(a,i){return d(a),g(a,i)
}var m,j=function(){if(h.matchesSelector){return"matchesSelector"
}for(var e=["webkit","moz","ms","o"],a=0,q=e.length;
q>a;
a++){var s=e[a],p=s+"MatchesSelector";
if(h[p]){return p
}}}();
if(j){var k=document.createElement("div"),c=g(k,"div");
m=c?g:b
}else{m=f
}"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return m
}):window.matchesSelector=m
}(this,Element.prototype),function(b){function f(k,l){for(var j in l){k[j]=l[j]
}return k
}function a(i){for(var j in i){return !1
}return j=null,!0
}function g(e){return e.replace(/([A-Z])/g,function(i){return"-"+i.toLowerCase()
})
}function h(E,j,e){function B(l,m){l&&(this.element=l,this.layout=m,this.position={x:0,y:0},this._create())
}var D=e("transition"),i=e("transform"),q=D&&i,w=!!e("perspective"),z={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[D],x=["transform","transition","transitionDuration","transitionProperty"],o=function(){for(var m={},p=0,l=x.length;
l>p;
p++){var r=x[p],u=e(r);
u&&u!==r&&(m[r]=u)
}return m
}();
f(B.prototype,E.prototype),B.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})
},B.prototype.handleEvent=function(l){var m="on"+l.type;
this[m]&&this[m](l)
},B.prototype.getSize=function(){this.size=j(this.element)
},B.prototype.css=function(m){var n=this.element.style;
for(var l in m){var p=o[l]||l;
n[p]=m[l]
}},B.prototype.getPosition=function(){var p=c(this.element),v=this.layout.options,m=v.isOriginLeft,y=v.isOriginTop,F=parseInt(p[m?"left":"right"],10),u=parseInt(p[y?"top":"bottom"],10);
F=isNaN(F)?0:F,u=isNaN(u)?0:u;
var l=this.layout.size;
F-=m?l.paddingLeft:l.paddingRight,u-=y?l.paddingTop:l.paddingBottom,this.position.x=F,this.position.y=u
},B.prototype.layoutPosition=function(){var m=this.layout.size,n=this.layout.options,l={};
n.isOriginLeft?(l.left=this.position.x+m.paddingLeft+"px",l.right=""):(l.right=this.position.x+m.paddingRight+"px",l.left=""),n.isOriginTop?(l.top=this.position.y+m.paddingTop+"px",l.bottom=""):(l.bottom=this.position.y+m.paddingBottom+"px",l.top=""),this.css(l),this.emitEvent("layout",[this])
};
var A=w?function(l,m){return"translate3d("+l+"px, "+m+"px, 0)"
}:function(l,m){return"translate("+l+"px, "+m+"px)"
};
B.prototype._transitionTo=function(K,H){this.getPosition();
var F=this.position.x,v=this.position.y,y=parseInt(K,10),l=parseInt(H,10),L=y===this.position.x&&l===this.position.y;
if(this.setPosition(K,H),L&&!this.isTransitioning){return this.layoutPosition(),void 0
}var I=K-F,J=H-v,m={},G=this.layout.options;
I=G.isOriginLeft?I:-I,J=G.isOriginTop?J:-J,m.transform=A(I,J),this.transition({to:m,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})
},B.prototype.goTo=function(l,m){this.setPosition(l,m),this.layoutPosition()
},B.prototype.moveTo=q?B.prototype._transitionTo:B.prototype.goTo,B.prototype.setPosition=function(l,m){this.position.x=parseInt(l,10),this.position.y=parseInt(m,10)
},B.prototype._nonTransition=function(l){this.css(l.to),l.isCleaning&&this._removeStyles(l.to);
for(var m in l.onTransitionEnd){l.onTransitionEnd[m].call(this)
}},B.prototype._transition=function(m){if(!parseFloat(this.layout.options.transitionDuration)){return this._nonTransition(m),void 0
}var n=this._transn;
for(var l in m.onTransitionEnd){n.onEnd[l]=m.onTransitionEnd[l]
}for(l in m.to){n.ingProperties[l]=!0,m.isCleaning&&(n.clean[l]=!0)
}if(m.from){this.css(m.from);
var p=this.element.offsetHeight;
p=null
}this.enableTransition(m.to),this.css(m.to),this.isTransitioning=!0
};
var k=i&&g(i)+",opacity";
B.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:k,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(z,this,!1))
},B.prototype.transition=B.prototype[D?"_transition":"_nonTransition"],B.prototype.onwebkitTransitionEnd=function(l){this.ontransitionend(l)
},B.prototype.onotransitionend=function(l){this.ontransitionend(l)
};
var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};
B.prototype.ontransitionend=function(l){if(l.target===this.element){var m=this._transn,p=s[l.propertyName]||l.propertyName;
if(delete m.ingProperties[p],a(m.ingProperties)&&this.disableTransition(),p in m.clean&&(this.element.style[l.propertyName]="",delete m.clean[p]),p in m.onEnd){var r=m.onEnd[p];
r.call(this),delete m.onEnd[p]
}this.emitEvent("transitionEnd",[this])
}},B.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(z,this,!1),this.isTransitioning=!1
},B.prototype._removeStyles=function(m){var n={};
for(var l in m){n[l]=""
}this.css(n)
};
var C={transitionProperty:"",transitionDuration:""};
return B.prototype.removeTransitionStyles=function(){this.css(C)
},B.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])
},B.prototype.remove=function(){if(!D||!parseFloat(this.layout.options.transitionDuration)){return this.removeElem(),void 0
}var l=this;
this.on("transitionEnd",function(){return l.removeElem(),!0
}),this.hide()
},B.prototype.reveal=function(){delete this.isHidden,this.css({display:""});
var l=this.layout.options;
this.transition({from:l.hiddenStyle,to:l.visibleStyle,isCleaning:!0})
},B.prototype.hide=function(){this.isHidden=!0,this.css({display:""});
var l=this.layout.options;
this.transition({from:l.visibleStyle,to:l.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})
}}})
},B.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})
},B
}var d=b.getComputedStyle,c=d?function(e){return d(e,null)
}:function(e){return e.currentStyle
};
"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],h):(b.Outlayer={},b.Outlayer.Item=h(b.EventEmitter,b.getSize,b.getStyleProperty))
}(window),function(A){function v(c,d){for(var a in d){c[a]=d[a]
}return c
}function l(a){return"[object Array]"===q.call(a)
}function j(a){var c=[];
if(l(a)){c=a
}else{if(a&&"number"==typeof a.length){for(var d=0,f=a.length;
f>d;
d++){c.push(a[d])
}}else{c.push(a)
}}return c
}function k(c,d){var a=w(d,c);
-1!==a&&d.splice(a,1)
}function b(a){return a.replace(/(.)([A-Z])/g,function(d,f,c){return f+"-"+c
}).toLowerCase()
}function B(e,t,n,o,c,p){function a(f,d){if("string"==typeof f&&(f=y.querySelector(f)),!f||!x(f)){return z&&z.error("Bad "+this.constructor.namespace+" element: "+f),void 0
}this.element=f,this.options=v({},this.constructor.defaults),this.option(d);
var s=++h;
this.element.outlayerGUID=s,r[s]=this,this._create(),this.options.isInitLayout&&this.layout()
}var h=0,r={};
return a.namespace="outlayer",a.Item=p,a.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},v(a.prototype,n.prototype),a.prototype.option=function(d){v(this.options,d)
},a.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),v(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()
},a.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)
},a.prototype._itemize=function(u){for(var E=this._filterFindItemElements(u),f=this.constructor.Item,F=[],G=0,D=E.length;
D>G;
G++){var C=E[G],d=new f(C,this);
F.push(d)
}return F
},a.prototype._filterFindItemElements=function(H){H=j(H);
for(var E=this.options.itemSelector,D=[],C=0,d=H.length;
d>C;
C++){var I=H[C];
if(x(I)){if(E){c(I,E)&&D.push(I);
for(var F=I.querySelectorAll(E),G=0,f=F.length;
f>G;
G++){D.push(F[G])
}}else{D.push(I)
}}}return D
},a.prototype.getItemElements=function(){for(var f=[],s=0,d=this.items.length;
d>s;
s++){f.push(this.items[s].element)
}return f
},a.prototype.layout=function(){this._resetLayout(),this._manageStamps();
var d=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;
this.layoutItems(this.items,d),this._isLayoutInited=!0
},a.prototype._init=a.prototype.layout,a.prototype._resetLayout=function(){this.getSize()
},a.prototype.getSize=function(){this.size=o(this.element)
},a.prototype._getMeasurement=function(f,s){var d,u=this.options[f];
u?("string"==typeof u?d=this.element.querySelector(u):x(u)&&(d=u),this[f]=d?o(d)[s]:u):this[f]=0
},a.prototype.layoutItems=function(d,f){d=this._getItemsForLayout(d),this._layoutItems(d,f),this._postLayout()
},a.prototype._getItemsForLayout=function(f){for(var s=[],d=0,u=f.length;
u>d;
d++){var C=f[d];
C.isIgnored||s.push(C)
}return s
},a.prototype._layoutItems=function(H,E){function D(){f.emitEvent("layoutComplete",[f,H])
}var f=this;
if(!H||!H.length){return D(),void 0
}this._itemsOn(H,"layout",D);
for(var C=[],d=0,I=H.length;
I>d;
d++){var F=H[d],G=this._getItemLayoutPosition(F);
G.item=F,G.isInstant=E||F.isLayoutInstant,C.push(G)
}this._processLayoutQueue(C)
},a.prototype._getItemLayoutPosition=function(){return{x:0,y:0}
},a.prototype._processLayoutQueue=function(f){for(var s=0,d=f.length;
d>s;
s++){var u=f[s];
this._positionItem(u.item,u.x,u.y,u.isInstant)
}},a.prototype._positionItem=function(f,s,d,u){u?f.goTo(s,d):f.moveTo(s,d)
},a.prototype._postLayout=function(){this.resizeContainer()
},a.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var d=this._getContainerSize();
d&&(this._setContainerMeasure(d.width,!0),this._setContainerMeasure(d.height,!1))
}},a.prototype._getContainerSize=m,a.prototype._setContainerMeasure=function(f,s){if(void 0!==f){var d=this.size;
d.isBorderBox&&(f+=s?d.paddingLeft+d.paddingRight+d.borderLeftWidth+d.borderRightWidth:d.paddingBottom+d.paddingTop+d.borderTopWidth+d.borderBottomWidth),f=Math.max(f,0),this.element.style[s?"width":"height"]=f+"px"
}},a.prototype._itemsOn=function(I,F,E){function C(){return D++,D===d&&E.call(J),!0
}for(var D=0,d=I.length,J=this,G=0,H=I.length;
H>G;
G++){var f=I[G];
f.on(F,C)
}},a.prototype.ignore=function(d){var f=this.getItem(d);
f&&(f.isIgnored=!0)
},a.prototype.unignore=function(d){var f=this.getItem(d);
f&&delete f.isIgnored
},a.prototype.stamp=function(f){if(f=this._find(f)){this.stamps=this.stamps.concat(f);
for(var s=0,d=f.length;
d>s;
s++){var u=f[s];
this.ignore(u)
}}},a.prototype.unstamp=function(f){if(f=this._find(f)){for(var s=0,d=f.length;
d>s;
s++){var u=f[s];
k(u,this.stamps),this.unignore(u)
}}},a.prototype._find=function(d){return d?("string"==typeof d&&(d=this.element.querySelectorAll(d)),d=j(d)):void 0
},a.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();
for(var f=0,s=this.stamps.length;
s>f;
f++){var d=this.stamps[f];
this._manageStamp(d)
}}},a.prototype._getBoundingRect=function(){var d=this.element.getBoundingClientRect(),f=this.size;
this._boundingRect={left:d.left+f.paddingLeft+f.borderLeftWidth,top:d.top+f.paddingTop+f.borderTopWidth,right:d.right-(f.paddingRight+f.borderRightWidth),bottom:d.bottom-(f.paddingBottom+f.borderBottomWidth)}
},a.prototype._manageStamp=m,a.prototype._getElementOffset=function(f){var s=f.getBoundingClientRect(),d=this._boundingRect,u=o(f),C={left:s.left-d.left-u.marginLeft,top:s.top-d.top-u.marginTop,right:d.right-s.right-u.marginRight,bottom:d.bottom-s.bottom-u.marginBottom};
return C
},a.prototype.handleEvent=function(d){var f="on"+d.type;
this[f]&&this[f](d)
},a.prototype.bindResize=function(){this.isResizeBound||(e.bind(A,"resize",this),this.isResizeBound=!0)
},a.prototype.unbindResize=function(){this.isResizeBound&&e.unbind(A,"resize",this),this.isResizeBound=!1
},a.prototype.onresize=function(){function d(){f.resize(),delete f.resizeTimeout
}this.resizeTimeout&&clearTimeout(this.resizeTimeout);
var f=this;
this.resizeTimeout=setTimeout(d,100)
},a.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()
},a.prototype.needsResizeLayout=function(){var d=o(this.element),f=this.size&&d;
return f&&d.innerWidth!==this.size.innerWidth
},a.prototype.addItems=function(d){var f=this._itemize(d);
return f.length&&(this.items=this.items.concat(f)),f
},a.prototype.appended=function(d){var f=this.addItems(d);
f.length&&(this.layoutItems(f,!0),this.reveal(f))
},a.prototype.prepended=function(f){var s=this._itemize(f);
if(s.length){var d=this.items.slice(0);
this.items=s.concat(d),this._resetLayout(),this._manageStamps(),this.layoutItems(s,!0),this.reveal(s),this.layoutItems(d)
}},a.prototype.reveal=function(f){var s=f&&f.length;
if(s){for(var d=0;
s>d;
d++){var u=f[d];
u.reveal()
}}},a.prototype.hide=function(f){var s=f&&f.length;
if(s){for(var d=0;
s>d;
d++){var u=f[d];
u.hide()
}}},a.prototype.getItem=function(f){for(var s=0,d=this.items.length;
d>s;
s++){var u=this.items[s];
if(u.element===f){return u
}}},a.prototype.getItems=function(f){if(f&&f.length){for(var u=[],d=0,C=f.length;
C>d;
d++){var D=f[d],s=this.getItem(D);
s&&u.push(s)
}return u
}},a.prototype.remove=function(f){f=j(f);
var D=this.getItems(f);
if(D&&D.length){this._itemsOn(D,"remove",function(){this.emitEvent("removeComplete",[this,D])
});
for(var d=0,C=D.length;
C>d;
d++){var u=D[d];
u.remove(),k(u,this.items)
}}},a.prototype.destroy=function(){var f=this.element.style;
f.height="",f.position="",f.width="";
for(var s=0,d=this.items.length;
d>s;
s++){var u=this.items[s];
u.destroy()
}this.unbindResize(),delete this.element.outlayerGUID,g&&g.removeData(this.element,this.constructor.namespace)
},a.data=function(d){var f=d&&d.outlayerGUID;
return f&&r[f]
},a.create=function(f,d){function s(){a.apply(this,arguments)
}return Object.create?s.prototype=Object.create(a.prototype):v(s.prototype,a.prototype),s.prototype.constructor=s,s.defaults=v({},a.defaults),v(s.defaults,d),s.prototype.settings={},s.namespace=f,s.data=a.data,s.Item=function(){p.apply(this,arguments)
},s.Item.prototype=new p,t(function(){for(var G=b(f),D=y.querySelectorAll(".js-"+G),u="data-"+G+"-options",K=0,E=D.length;
E>K;
K++){var F,I=D[K],H=I.getAttribute(u);
try{F=H&&JSON.parse(H)
}catch(C){z&&z.error("Error parsing "+u+" on "+I.nodeName.toLowerCase()+(I.id?"#"+I.id:"")+": "+C);
continue
}var J=new s(I,F);
g&&g.data(I,f,J)
}}),g&&g.bridget&&g.bridget(f,s),s
},a.Item=p,a
}var y=A.document,z=A.console,g=A.jQuery,m=function(){},q=Object.prototype.toString,x="object"==typeof HTMLElement?function(a){return a instanceof HTMLElement
}:function(a){return a&&"object"==typeof a&&1===a.nodeType&&"string"==typeof a.nodeName
},w=Array.prototype.indexOf?function(a,c){return a.indexOf(c)
}:function(c,d){for(var a=0,f=c.length;
f>a;
a++){if(c[a]===d){return a
}}return -1
};
"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],B):A.Outlayer=B(A.eventie,A.docReady,A.EventEmitter,A.getSize,A.matchesSelector,A.Outlayer.Item)
}(window),function(a){function b(c){function d(){c.Item.apply(this,arguments)
}return d.prototype=new c.Item,d.prototype._create=function(){this.id=this.layout.itemGUID++,c.Item.prototype._create.call(this),this.sortData={}
},d.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();
var g=this.layout.options.getSortData,h=this.layout._sorters;
for(var f in g){var j=h[f];
this.sortData[f]=j(this.element,this)
}}},d
}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],b):(a.Isotope=a.Isotope||{},a.Isotope.Item=b(a.Outlayer))
}(window),function(a){function b(d,f){function c(e){this.isotope=e,e&&(this.options=e.options[this.namespace],this.element=e.element,this.items=e.filteredItems,this.size=e.size)
}return function(){function e(k){return function(){return f.prototype[k].apply(this.isotope,arguments)
}
}for(var i=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],j=0,h=i.length;
h>j;
j++){var g=i[j];
c.prototype[g]=e(g)
}}(),c.prototype.needsVerticalResizeLayout=function(){var h=d(this.isotope.element),g=this.isotope.size&&h;
return g&&h.innerHeight!==this.isotope.size.innerHeight
},c.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)
},c.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")
},c.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")
},c.prototype.getSegmentSize=function(h,j){var g=h+j,k="outer"+j;
if(this._getMeasurement(g,k),!this[g]){var l=this.getFirstItemSize();
this[g]=l&&l[k]||this.isotope.size["inner"+j]
}},c.prototype.getFirstItemSize=function(){var g=this.isotope.filteredItems[0];
return g&&g.element&&d(g.element)
},c.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)
},c.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size
},c.modes={},c.create=function(g,h){function i(){c.apply(this,arguments)
}return i.prototype=new c,h&&(i.options=h),i.prototype.namespace=g,c.modes[g]=i,i
},c
}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],b):(a.Isotope=a.Isotope||{},a.Isotope.LayoutMode=b(a.getSize,a.Outlayer))
}(window),function(b){function c(d,f){var g=d.create("masonry");
return g.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();
var e=this.cols;
for(this.colYs=[];
e--;
){this.colYs.push(0)
}this.maxY=0
},g.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var h=this.items[0],e=h&&h.element;
this.columnWidth=e&&f(e).outerWidth||this.containerWidth
}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)
},g.prototype.getContainerWidth=function(){var h=this.options.isFitWidth?this.element.parentNode:this.element,e=f(h);
this.containerWidth=e&&e.innerWidth
},g.prototype._getItemLayoutPosition=function(y){y.getSize();
var v=y.size.outerWidth%this.columnWidth,k=v&&1>v?"round":"ceil",l=Math[k](y.size.outerWidth/this.columnWidth);
l=Math.min(l,this.cols);
for(var i=this._getColGroup(l),z=Math.min.apply(Math,i),w=a(i,z),x={x:this.columnWidth*w,y:z},j=z+y.size.outerHeight,m=this.cols+1-i.length,q=0;
m>q;
q++){this.colYs[w+q]=j
}return x
},g.prototype._getColGroup=function(j){if(2>j){return this.colYs
}for(var k=[],h=this.cols+1-j,l=0;
h>l;
l++){var m=this.colYs.slice(l,l+j);
k[l]=Math.max.apply(Math,m)
}return k
},g.prototype._manageStamp=function(v){var l=f(v),j=this._getElementOffset(v),k=this.options.isOriginLeft?j.left:j.right,e=k+l.outerWidth,w=Math.floor(k/this.columnWidth);
w=Math.max(0,w);
var m=Math.floor(e/this.columnWidth);
m-=e%this.columnWidth?0:1,m=Math.min(this.cols-1,m);
for(var q=(this.options.isOriginTop?j.top:j.bottom)+l.outerHeight,h=w;
m>=h;
h++){this.colYs[h]=Math.max(q,this.colYs[h])
}},g.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);
var e={height:this.maxY};
return this.options.isFitWidth&&(e.width=this._getContainerFitWidth()),e
},g.prototype._getContainerFitWidth=function(){for(var h=0,i=this.cols;
--i&&0===this.colYs[i];
){h++
}return(this.cols-h)*this.columnWidth-this.gutter
},g.prototype.needsResizeLayout=function(){var e=this.containerWidth;
return this.getContainerWidth(),e!==this.containerWidth
},g
}var a=Array.prototype.indexOf?function(d,f){return d.indexOf(f)
}:function(f,g){for(var d=0,h=f.length;
h>d;
d++){var j=f[d];
if(j===g){return d
}}return -1
};
"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],c):b.Masonry=c(b.Outlayer,b.getSize)
}(window),function(b){function c(f,g){for(var d in g){f[d]=g[d]
}return f
}function a(g,f){var k=g.create("masonry"),l=k.prototype._getElementOffset,j=k.prototype.layout,h=k.prototype._getMeasurement;
c(k.prototype,f.prototype),k.prototype._getElementOffset=l,k.prototype.layout=j,k.prototype._getMeasurement=h;
var d=k.prototype.measureColumns;
k.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,d.call(this)
};
var e=k.prototype._manageStamp;
return k.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,e.apply(this,arguments)
},k
}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],a):a(b.Isotope.LayoutMode,b.Masonry)
}(window),function(a){function b(c){var d=c.create("fitRows");
return d.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0
},d.prototype._getItemLayoutPosition=function(f){f.getSize(),0!==this.x&&f.size.outerWidth+this.x>this.isotope.size.innerWidth&&(this.x=0,this.y=this.maxY);
var g={x:this.x,y:this.y};
return this.maxY=Math.max(this.maxY,this.y+f.size.outerHeight),this.x+=f.size.outerWidth,g
},d.prototype._getContainerSize=function(){return{height:this.maxY}
},d
}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],b):b(a.Isotope.LayoutMode)
}(window),function(a){function b(c){var d=c.create("vertical",{horizontalAlignment:0});
return d.prototype._resetLayout=function(){this.y=0
},d.prototype._getItemLayoutPosition=function(g){g.getSize();
var h=(this.isotope.size.innerWidth-g.size.outerWidth)*this.options.horizontalAlignment,f=this.y;
return this.y+=g.size.outerHeight,{x:h,y:f}
},d.prototype._getContainerSize=function(){return{height:this.y}
},d
}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],b):b(a.Isotope.LayoutMode)
}(window),function(w){function m(f,h){for(var a in h){f[a]=h[a]
}return f
}function j(a){return"[object Array]"===k.call(a)
}function d(a){var f=[];
if(j(a)){f=a
}else{if(a&&"number"==typeof a.length){for(var h=0,i=a.length;
i>h;
h++){f.push(a[h])
}}else{f.push(a)
}}return f
}function g(f,h){var a=l(h,f);
-1!==a&&h.splice(a,1)
}function b(A,n,a,z,o){function p(f,h){return function(E,C){for(var D=0,t=f.length;
t>D;
D++){var I=f[D],G=E.sortData[I],H=C.sortData[I];
if(G>H||H>G){var B=void 0!==h[I]?h[I]:h,F=B?1:-1;
return(G>H?1:-1)*F
}}return 0
}
}var y=A.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});
y.Item=z,y.LayoutMode=o,y.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),A.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];
for(var f in o.modes){this._initLayoutMode(f)
}},y.prototype.reloadItems=function(){this.itemGUID=0,A.prototype.reloadItems.call(this)
},y.prototype._itemize=function(){for(var h=A.prototype._itemize.apply(this,arguments),f=0,r=h.length;
r>f;
f++){var t=h[f];
t.id=this.itemGUID++
}return this._updateItemsSortData(h),h
},y.prototype._initLayoutMode=function(h){var f=o.modes[h],r=this.options[h]||{};
this.options[h]=f.options?m(f.options,r):r,this.modes[h]=new f(this)
},y.prototype.layout=function(){return !this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)
},y.prototype._layout=function(){var f=this._getIsInstant();
this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,f),this._isLayoutInited=!0
},y.prototype.arrange=function(f){this.option(f),this._getIsInstant(),this.filteredItems=this._filter(this.items),this._sort(),this._layout()
},y.prototype._init=y.prototype.arrange,y.prototype._getIsInstant=function(){var f=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;
return this._isInstant=f,f
},y.prototype._filter=function(L){function I(){H.reveal(E),H.hide(B)
}var F=this.options.filter;
F=F||"*";
for(var D=[],E=[],B=[],M=this._getFilterTest(F),J=0,K=L.length;
K>J;
J++){var C=L[J];
if(!C.isIgnored){var G=M(C);
G&&D.push(C),G&&C.isHidden?E.push(C):G||C.isHidden||B.push(C)
}}var H=this;
return this._isInstant?this._noTransition(I):I(),D
},y.prototype._getFilterTest=function(f){return x&&this.options.isJQueryFiltering?function(h){return x(h.element).is(f)
}:"function"==typeof f?function(h){return f(h.element)
}:function(h){return a(h.element,f)
}
},y.prototype.updateSortData=function(f){this._getSorters(),f=d(f);
var h=this.getItems(f);
h=h.length?h:this.items,this._updateItemsSortData(h)
},y.prototype._getSorters=function(){var h=this.options.getSortData;
for(var r in h){var f=h[r];
this._sorters[r]=s(f)
}},y.prototype._updateItemsSortData=function(h){for(var r=0,f=h.length;
f>r;
r++){var u=h[r];
u.updateSortData()
}};
var s=function(){function f(D){if("string"!=typeof D){return D
}var C=q(D).split(" "),G=C[0],H=G.match(/^\[(.+)\]$/),F=H&&H[1],E=h(F,G),B=y.sortDataParsers[C[1]];
return D=B?function(i){return i&&B(E(i))
}:function(i){return i&&E(i)
}
}function h(u,B){var r;
return r=u?function(i){return i.getAttribute(u)
}:function(D){var C=D.querySelector(B);
return C&&c(C)
}
}return f
}();
y.sortDataParsers={parseInt:function(f){return parseInt(f,10)
},parseFloat:function(f){return parseFloat(f)
}},y.prototype._sort=function(){var h=this.options.sortBy;
if(h){var r=[].concat.apply(h,this.sortHistory),f=p(r,this.options.sortAscending);
this.filteredItems.sort(f),h!==this.sortHistory[0]&&this.sortHistory.unshift(h)
}},y.prototype._mode=function(){var f=this.options.layoutMode,h=this.modes[f];
if(!h){throw Error("No layout mode: "+f)
}return h.options=this.options[f],h
},y.prototype._resetLayout=function(){A.prototype._resetLayout.call(this),this._mode()._resetLayout()
},y.prototype._getItemLayoutPosition=function(f){return this._mode()._getItemLayoutPosition(f)
},y.prototype._manageStamp=function(f){this._mode()._manageStamp(f)
},y.prototype._getContainerSize=function(){return this._mode()._getContainerSize()
},y.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()
},y.prototype.appended=function(h){var r=this.addItems(h);
if(r.length){var f=this._filterRevealAdded(r);
this.filteredItems=this.filteredItems.concat(f)
}},y.prototype.prepended=function(h){var r=this._itemize(h);
if(r.length){var f=this.items.slice(0);
this.items=r.concat(f),this._resetLayout(),this._manageStamps();
var u=this._filterRevealAdded(r);
this.layoutItems(f),this.filteredItems=u.concat(this.filteredItems)
}},y.prototype._filterRevealAdded=function(f){var h=this._noTransition(function(){return this._filter(f)
});
return this.layoutItems(h,!0),this.reveal(h),f
},y.prototype.insert=function(h){var B=this.addItems(h);
if(B.length){var f,C,D=B.length;
for(f=0;
D>f;
f++){C=B[f],this.element.appendChild(C.element)
}var u=this._filter(B);
for(this._noTransition(function(){this.hide(u)
}),f=0;
D>f;
f++){B[f].isLayoutInstant=!0
}for(this.arrange(),f=0;
D>f;
f++){delete B[f].isLayoutInstant
}this.reveal(u)
}};
var e=y.prototype.remove;
return y.prototype.remove=function(h){h=d(h);
var C=this.getItems(h);
if(e.call(this,h),C&&C.length){for(var f=0,B=C.length;
B>f;
f++){var u=C[f];
g(u,this.filteredItems)
}}},y.prototype._noTransition=function(h){var r=this.options.transitionDuration;
this.options.transitionDuration=0;
var f=h.call(this);
return this.options.transitionDuration=r,f
},y
}var x=w.jQuery,q=String.prototype.trim?function(a){return a.trim()
}:function(a){return a.replace(/^\s+|\s+$/g,"")
},v=document.documentElement,c=v.textContent?function(a){return a.textContent
}:function(a){return a.innerText
},k=Object.prototype.toString,l=Array.prototype.indexOf?function(a,f){return a.indexOf(f)
}:function(f,h){for(var a=0,n=f.length;
n>a;
a++){if(f[a]===h){return a
}}return -1
};
"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],b):w.Isotope=b(w.Outlayer,w.getSize,w.matchesSelector,w.Isotope.Item,w.Isotope.LayoutMode)
}(window);
function SHA256(p){var k=8;
var n=0;
function i(q,t){var s=(q&65535)+(t&65535);
var r=(q>>16)+(t>>16)+(s>>16);
return(r<<16)|(s&65535)
}function e(r,q){return(r>>>q)|(r<<(32-q))
}function f(r,q){return(r>>>q)
}function a(q,s,r){return((q&s)^((~q)&r))
}function d(q,s,r){return((q&s)^(q&r)^(s&r))
}function g(q){return(e(q,2)^e(q,13)^e(q,22))
}function b(q){return(e(q,6)^e(q,11)^e(q,25))
}function o(q){return(e(q,7)^e(q,18)^f(q,3))
}function j(q){return(e(q,17)^e(q,19)^f(q,10))
}function c(r,s){var E=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298);
var t=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225);
var q=new Array(64);
var G,F,D,C,A,y,x,w,v,u;
var B,z;
r[s>>5]|=128<<(24-s%32);
r[((s+64>>9)<<4)+15]=s;
for(var v=0;
v<r.length;
v+=16){G=t[0];
F=t[1];
D=t[2];
C=t[3];
A=t[4];
y=t[5];
x=t[6];
w=t[7];
for(var u=0;
u<64;
u++){if(u<16){q[u]=r[u+v]
}else{q[u]=i(i(i(j(q[u-2]),q[u-7]),o(q[u-15])),q[u-16])
}B=i(i(i(i(w,b(A)),a(A,y,x)),E[u]),q[u]);
z=i(g(G),d(G,F,D));
w=x;
x=y;
y=A;
A=i(C,B);
C=D;
D=F;
F=G;
G=i(B,z)
}t[0]=i(G,t[0]);
t[1]=i(F,t[1]);
t[2]=i(D,t[2]);
t[3]=i(C,t[3]);
t[4]=i(A,t[4]);
t[5]=i(y,t[5]);
t[6]=i(x,t[6]);
t[7]=i(w,t[7])
}return t
}function h(t){var s=Array();
var q=(1<<k)-1;
for(var r=0;
r<t.length*k;
r+=k){s[r>>5]|=(t.charCodeAt(r/k)&q)<<(24-r%32)
}return s
}function m(r){r=r.replace(/\r\n/g,"\n");
var q="";
for(var t=0;
t<r.length;
t++){var s=r.charCodeAt(t);
if(s<128){q+=String.fromCharCode(s)
}else{if((s>127)&&(s<2048)){q+=String.fromCharCode((s>>6)|192);
q+=String.fromCharCode((s&63)|128)
}else{q+=String.fromCharCode((s>>12)|224);
q+=String.fromCharCode(((s>>6)&63)|128);
q+=String.fromCharCode((s&63)|128)
}}}return q
}function l(s){var r=n?"0123456789ABCDEF":"0123456789abcdef";
var t="";
for(var q=0;
q<s.length*4;
q++){t+=r.charAt((s[q>>2]>>((3-q%4)*8+4))&15)+r.charAt((s[q>>2]>>((3-q%4)*8))&15)
}return t
}p=m(p);
return l(c(h(p),p.length*k))
}if(window.console===undefined){console={log:function(){},info:function(){},warn:function(){}}
}if(window.console.debug===undefined){window.console.debug=function(){}
}if(window.console.time===undefined){window.console.time=function(){}
}portalGGA={models:{},views:{},variables:{tracking_campaign_id:"btag","tracking_campaign_id.cookie.expires":30}};
portalGGA.utils={getURLParameter:function getURLParameter(a){var b=RegExp(a+"=(.+?)(&|$)").exec(location.search);
return b&&decodeURI(b[1])
},dividedByMillion:function commaFormatted(a){return parseFloat(a)/parseFloat(1000000)
},dividedByThousand:function dividedByThousand(a){return parseFloat(a)/parseFloat(1000)
},multiplyByHundred:function multiplyByHundred(a){return parseFloat(a)*parseFloat(100)
},currencyFormatted:function currencyFormatted(b,a){return a?(Math.round(b)/100).toFixed(2).split("").reverse().join("").replace(/(\d{3})(?=\d)/g,"$1,").split("").reverse().join(""):(Math.round(b)/100).toFixed(2)
},currencyCountFormatted:function currencyCountFormatted(a){return(Math.round(a)).toFixed(0).split("").reverse().join("").replace(/(\d{3})(?=\d)/g,"$1,").split("").reverse().join("")
},convertMilestoMeter:function convertMilestoMeter(a){return a*1609.344
},currencyFormattedWithoutCents:function currencyFormattedWithoutCents(b,a){return a?(Math.round(b)/100).toFixed(0).split("").reverse().join("").replace(/(\d{3})(?=\d)/g,"$1,").split("").reverse().join(""):(Math.round(b)/100).toFixed(0)
},currencyDeformatted:function currencyDeformatted(a){return Math.round(parseFloat(String(a).replace(/[,\s]/g,"").replace(/,/g,""))*100)
},formattedDate:function formattedDate(b,d){var e="America/New_York";
var c=moment.tz(parseInt(b),e).format("ddd").toUpperCase();
var a=moment.tz(parseInt(b),e).format("L");
return c+" "+a
},formattedTimeDate:function formattedTimeDate(b,d){var e="America/New_York";
var c=moment.tz(parseInt(b),e).format("ddd");
var a=moment.tz(parseInt(b),e).format("MMM D, YYYY h:mm:ss a");
return c+", "+a
},formattedDateWithFullWeekday:function formattedDateWithFullWeekday(b,d){var e="America/New_York";
var c=moment.tz(parseInt(b),e).format("dddd").toUpperCase();
var a=moment.tz(parseInt(b),e).format("L");
return c+" "+a
},formattedShortDate:function formattedShortDate(a,b){var c="America/New_York";
return moment.tz(parseInt(a),c).format("l")
},formattedLongDate:function formattedLongDate(a,b){var c="America/New_York";
return moment.tz(parseInt(a),c).format("L")
},formattedTime:function formattedTime(b,g,h,i,e){h=h||":";
var d="America/New_York";
if(i){var f=moment.tz(parseInt(b),d).format("hh");
var c=moment.tz(parseInt(b),d).format("mm");
var a=moment.tz(parseInt(b),d).format("ss");
return f+h+c+h+a
}else{var f=moment.tz(parseInt(b),d).format("hh");
var c=moment.tz(parseInt(b),d).format("mm");
return f+h+c
}},formattedHours:function formattedHours(a,b){var c="America/New_York";
return moment.tz(parseInt(a),c).format("hh")+" "+moment.tz(parseInt(a),c).format("a").toUpperCase()
},formattedHoursMinutes:function formattedHoursMinutes(d,f){var g="America/New_York";
var a=moment.tz(parseInt(d),g).format("hh");
var e=moment.tz(parseInt(d),g).format("mm");
var c=moment.tz(parseInt(d),g).format("ss");
var b=moment.tz(parseInt(d),g).format("a");
return a+":"+e+" "+b
},dayValue:function dayValue(a){var c=new Date(a);
var b=c.getDay();
var d;
switch(b){case 0:d="SUNDAY";
break;
case 1:d="MONDAY";
break;
case 2:d="TUESDAY";
break;
case 3:d="WEDNESDAY";
break;
case 4:d="THURSDAY";
break;
case 5:d="FRIDAY";
break;
case 6:d="SATURDAY";
break
}return d
},sortAsc:function sortAsc(d,c){return d-c
},sortDesc:function sortDesc(d,c){return c-d
},_sortArrayValue:function _sortArrayValue(b,c){var a=this;
b.sort(function(e,d){if(c=="asc"){return e-d
}else{return d-e
}});
return b
},_sortByValuePercentage:function _sortByValuePercentage(d,b,e,c){var a=this;
d.sort(function(g,f){if(e=="asc"){return(g[b]/c)-(f[b]/c)
}else{return(f[b]/c)-(g[b]/c)
}});
return d
},_sortByValue:function _sortByValue(c,b,d){var a=this;
c.sort(function(f,e){if(d=="asc"){return f[b]-e[b]
}else{return e[b]-f[b]
}});
return c
},_sortByName:function _sortByName(c,b,d){var a=this;
c.sort(function(f,e){if(d=="asc"){if(f[b]==e[b]){return 0
}return f[b]>e[b]?1:-1
}else{if(f[b]==e[b]){return 0
}return e[b]>f[b]?1:-1
}});
return c
},_sortByDate:function _sortByDate(c,b,d){var a=this;
c.sort(function(f,e){if(d=="asc"){return new Date(f[b])-new Date(e[b])
}else{return new Date(e[b])-new Date(f[b])
}});
return c
},noenter:function noenter(){return !(window.event&&window.event.keyCode==13)
},maskExternalId:function maskExternalId(a){return a=a.replace(/([I,S][0-9]+)(\-[0-9]+\-[0-9]+)([0-9]{4})/,"$1-xxxx$3").replace(/(F[0-9]+)(\-[0-9]+\-[0-9]+\-[0-9]+)([0-9]{4})/,"$1-xxxx$3")
},removeLeadingZero:function removeLeadingZero(a){console.log("Remove leading Zeros from Board Numbers : ",a);
return _.map(a,function b(c){return c&&parseInt(c,10)
})
},pointsFormatted:function pointsFormatted(b,a){return a?(b.toString()).split("").reverse().join("").replace(/(\d{3})(?=\d)/g,"$1,").split("").reverse().join(""):(b)
},getTimeInUTCFromLocalTimestamp:function getTimeInUTCFromLocalTImestamp(a){return new Date(a+new Date().getTimezoneOffset()*60000).getTime()
},getTimeInLocalFromUTCTimestamp:function getTimeInLocalFromUTCTimestamp(a){return new Date(a-new Date().getTimezoneOffset()*60000).getTime()
},countdown:function countdown(e,b,c){if(!b||!e){return
}if(!c){c={}
}c=$.extend({days:"d ",hours:"h ",minutes:"min ",seconds:"sec",zeroCountText:"Time's Up!",prefix:"",postfix:"",countup:false,callback:function(){}},c);
var g=$(e),h,a,d,f;
if(!portalGGA.variables.countdown){portalGGA.variables.countdown={}
}if(portalGGA.variables.countdown[e]){clearInterval(portalGGA.variables.countdown[e]);
delete portalGGA.variables.countdown[e]
}portalGGA.variables.countdown[e]=setInterval(function(){var i=portalGGA.utils.getTimeInUTCFromLocalTimestamp(new Date().getTime()),j=(c.countup)?(i-b)/1000:(b-i)/1000;
if(j<1&&!c.countup){g.html(c.zeroCountText);
clearInterval(portalGGA.variables.countdown[e]);
c.callback();
delete portalGGA.variables.countdown[e];
return
}h=parseInt(j/86400);
j=j%86400;
a=parseInt(j/3600);
j=j%3600;
d=parseInt(j/60);
f=parseInt(j%60);
h=(h<=0)?"":h+c.days;
a=(a<=0)?"":a+c.hours;
d=(d<=0)?"":d+c.minutes;
f=(f<=0)?"":f+c.seconds;
g.html(c.prefix+h+a+d+f+c.postfix)
},1000)
},returnDaysMinSec:function returnDaysMinSec(f){var c=[];
if(!f){return
}var e,a,b,d;
secondsLeft=f/1000;
e=parseInt(secondsLeft/86400);
secondsLeft=secondsLeft%86400;
a=parseInt(secondsLeft/3600);
secondsLeft=secondsLeft%3600;
b=parseInt(secondsLeft/60);
d=parseInt(secondsLeft%60);
e=(e<=0)?0:e;
a=(a<=0)?0:a;
b=(b<=0)?0:b;
d=(d<=0)?0:d;
c.push(e);
c.push(a);
c.push(b);
c.push(d);
return c
},getGameConfigByEsaGameName:function getGameConfigByEsaGameName(c,a){var b;
_.each(a,function(d){if(d.esaGameName===c){b=d
}});
return b
},getGameConfigByPortalGameName:function getGameConfigByPortalGameName(c,a){var b;
_.each(a,function(d){if(d.portalGameCode===c){b=d
}});
return b
},translateCard:function translateCard(b){var a=["2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH","AH","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD","AD","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS","AS","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC","AC"];
var c=a[b-1];
return c
},translateSymbol:function translateSymbol(b){var a="";
if(b=="S"){a="spades"
}else{if(b=="H"){a="hearts"
}else{if(b=="D"){a="diamonds"
}else{if(b=="C"){a="clubs"
}}}}return a
},translateCardValue:function translateCardValue(a){var b="";
var f=a.split("-")[0];
var d=a.split("-")[1];
var e="";
if(f=="clubs"){e="C"
}else{if(f=="hearts"){e="H"
}else{if(f=="diamonds"){e="D"
}else{if(f=="spades"){e="S"
}}}}var g=d+e;
var c=["2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH","AH","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD","AD","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS","AS","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC","AC"];
_.each(c,function(h,j){if(g==h){b=j+1
}});
return b
},getQueryParams:function getQueryParams(){var a={};
var e=window.location.search.substring(1);
if(!e){return
}var d=e.split("&");
for(var c=0;
c<d.length;
c++){var g=d[c].indexOf("=");
if(g>0){var b=d[c].substring(0,g);
var f=d[c].substring(g+1);
a[b]=f
}}return a
},getCookie:function getCookie(d){var b=d+"=";
var a=document.cookie.split(";");
for(var e=0;
e<a.length;
e++){var f=a[e].trim();
if(f.indexOf(b)==0){return f.substring(b.length,f.length)
}}return
},getTrackingCampaignId:function getTrackingCampaignId(){var a;
a=this.getQueryParams()&&this.getQueryParams()[portalGGA.variables.tracking_campaign_id];
return a
},writeTrackingCampaignIdCookie:function writeTrackingCampaignIdCookie(b){var c=new Date();
c.setTime(c.getTime()+(portalGGA.variables["tracking_campaign_id.cookie.expires"]*24*60*60*1000));
var a="expires="+c.toGMTString();
document.cookie=portalGGA.variables.tracking_campaign_id+"="+b+"; "+a
},readTrackingCampaignIdCookie:function readTrackingCampaignIdCookie(){var a;
a=this.getCookie(portalGGA.variables.tracking_campaign_id)
},padZero:function padZero(b){var a=parseInt(b,10);
return(a<10)?("0"+a):a
},prependZeros:function prependZeros(a){var b=a;
if(a&&a.length==4){b="0"+b
}else{if(a&&a.length==3){b="00"+b
}else{if(a&&a.length==2){b="000"+b
}}}return b
},formatAmount:function formatAmount(c){var a=1000000;
var b=1000000000;
var d="";
d=(Math.round(c)).toFixed(0).split("").reverse().join("").replace(/(\d{3})(?=\d)/g,"$1,").split("").reverse().join("");
return d
},formattedAmount:function formattedAmount(c){var a=1000000;
var b=1000000000;
var d="";
if(c>=b){d=parseFloat(c)/parseFloat(b);
d=(Math.floor(d*10))/10;
return d=d+" Billion"
}else{if(c>=a){d=parseFloat(c)/parseFloat(a);
d=(Math.floor(d*10))/10;
return d=d+" Million"
}else{d=(Math.round(c)).toFixed(0).split("").reverse().join("").replace(/(\d{3})(?=\d)/g,"$1,").split("").reverse().join("");
return d
}}},formattedJackpotAmount:function formattedJackpotAmount(c){var a=1000000;
var b=1000000000;
var d="";
if(c>=b){d=parseFloat(c)/parseFloat(b);
d=(Math.floor(d*10))/10;
return d=d+" B"
}else{if(c>=a){d=parseFloat(c)/parseFloat(a);
d=(Math.floor(d*10))/10;
return d=d+" M"
}else{d=(Math.round(c)).toFixed(0).split("").reverse().join("").replace(/(\d{3})(?=\d)/g,"$1,").split("").reverse().join("");
return d
}}},base64_encode:function base64_encode(j){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var d,c,b,n,m,l,k,o,h=0,p=0,g="",f=[];
if(!j){return j
}do{d=j.charCodeAt(h++);
c=j.charCodeAt(h++);
b=j.charCodeAt(h++);
o=d<<16|c<<8|b;
n=o>>18&63;
m=o>>12&63;
l=o>>6&63;
k=o&63;
f[p++]=e.charAt(n)+e.charAt(m)+e.charAt(l)+e.charAt(k)
}while(h<j.length);
g=f.join("");
var a=j.length%3;
return(a?g.slice(0,a-3):g)+"===".slice(a||3)
},base64_decode:function base64_decode(h){var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var c,b,a,m,l,k,j,n,g=0,o=0,e="",f=[];
if(!h){return h
}h+="";
do{m=d.indexOf(h.charAt(g++));
l=d.indexOf(h.charAt(g++));
k=d.indexOf(h.charAt(g++));
j=d.indexOf(h.charAt(g++));
n=m<<18|l<<12|k<<6|j;
c=n>>16&255;
b=n>>8&255;
a=n&255;
if(k==64){f[o++]=String.fromCharCode(c)
}else{if(j==64){f[o++]=String.fromCharCode(c,b)
}else{f[o++]=String.fromCharCode(c,b,a)
}}}while(g<h.length);
e=f.join("");
return e.replace(/\0+$/,"")
}};
(function(){function d(f,g){if(g.name.match(/\[\]/g)){console.warn("addToHash function improper input")
}var e=g.name.match(/[^\[\]\.]+/g);
if(e.length>1){f[e[0]]=f[e[0]]||(isNaN(e[1])?{}:[]);
d(f[e[0]],{name:"["+e.slice(1).join("][")+"]",value:g.value})
}else{f[e[0]]=g.value
}return f
}portalGGA.utils.forms={serializeJSON:function c(g,e){var f;
if(g){f=this.find("input:checkbox:not(:checked)").map(function(){return{name:this.name,value:this.checked?this.value:false}
}).toArray().concat(this.serializeArray())
}else{f=this.serializeArray()
}if(e){_.each(f,function e(h){var i=h.value.match&&h.value.match(/\{([^\}]*)\}(.*)?/);
if(i){switch(i){case"Boolean":h.value=i[2]=="false"?false:!!i[2];
break;
case"Number":h.value=parseInt(i[2],10);
break;
case"String":h.value=i[2];
break;
default:h.value=new window[i[1]](i[2])
}}})
}return _.reduce(f,d,{})
},deserializeJSON:function a(g,f){function e(j,i){var h=i.match(/([^\[]*)\[([^\]]*)\](.*)/);
if(h){return j[h[1]]&&e(j[h[1]],h[2]+h[3])
}else{return j[i]
}}return g.each(function(k,h){var m=$(h);
var j=m.attr("name");
if(j){var l=e(f,j);
if(typeof l!=="undefined"){switch(m.attr("type")){case"radio":m.attr("checked",new String(m.val()).valueOf()==new String(l).valueOf()?"checked":undefined);
break;
case"checkbox":m.attr("checked",l);
break;
default:m.val(l)
}}}})
},automaticTab:function b(h){var i=[8,9,16,17,18,19,20,27,33,34,35,36,37,38,39,40,45,46,144,145];
function f(l){var j=l.data.$element,k=l.data.elementIndex;
var m=j.attr("maxlength")||0;
if(j.attr("max")&&m>j.attr("maxlength").length){m=j.attr("maxlength").length
}if($.inArray(l.which,i)===-1&&k+1<h.length&&j.val().length==m){h.eq(k+1).select()
}else{if(j.val().length===0&&l.which===8&&k>0){h.eq(k-1).focus()
}}}for(var g=0;
g<h.length;
g++){var e=h.eq(g);
e.on("keyup",{$element:e,elementIndex:g},f)
}}}
}());
(function(){var h=Backbone.Router.extend({routes:{"*default":"defaultRoute"},defaultRoute:function(){}}),d,j,c,f,k=0,e=50,a=false;
portalGGA.routers={modal:new h()};
if(!Backbone.History.started){Backbone.history.start()
}if(location.hash!==""){if(d=location.hash.match(/modal-([^\/]*)/)){k=e;
g(d[1],true)
}}function g(l,n,m){j=$('[data-modal-router="'+l+'"]');
if(j.length>0){if(n&&!a){j.trigger("click")
}i();
if(m){c=(Backbone.history.fragment)?Backbone.history.fragment.replace(/\/?modal-.*/,""):"";
c+="/modal-"+l;
portalGGA.routers.modal.navigate(c,{trigger:true})
}f=l;
k=0
}else{if(k>0){setTimeout(function(){k--;
g(l,n,m)
},250)
}}}h.prototype.route("(tabNav-:tabId)(/)modal-:modalId","modal",function b(m,l){g(l,true,false)
});
Backbone.history.on("route",function(){if(!location.hash.match(/modal-([^\/]*)/)){$(".modal.in").modal("hide")
}});
$(document).on("click","[data-modal-router]",function(){k=e;
g($(this).data("modal-router"),false,true)
});
$(document).on("hide.bs.modal",".modal",function(){if(f&&Backbone.history.fragment){var l=new RegExp("/?modal-"+f);
portalGGA.routers.modal.navigate(Backbone.history.fragment.replace(l,""),{trigger:true})
}});
function i(){if(!a){a=true;
setTimeout(function(){a=false
},100)
}}}());
portalGGA.models.player=portalGGA.models.player||{};
!(function(){function c(){this.objects={}
}c.prototype.register=function a(g,f,e){this.objects[f]=this.objects[f]||{all:[],named:{}};
this.objects[f].all.push(g);
e&&(this.objects[f].named[e]=g)
};
c.prototype.getByPath=function b(e){return this.objects[e]&&this.objects[e].all||[]
};
c.prototype.getByPathAndName=function d(f,e){return this.objects[f]&&this.objects[f].named[e]||undefined
};
portalGGA.utils.communication=new c()
}());
!(function(){var f=null;
function d(g,i){this.container=g;
this.template=function h(j){return'<div class="alert"><button type="button" class="close" data-dismiss="alert">&times;</button>'+j+"</div>"
};
if(i||i===false){this.dictionaryPromise=Q.resolve(i)
}else{if(f){this.dictionaryPromise=f
}else{this.dictionaryPromise=f=this.loadMessageDictionary()
}}}function c(g,i){this.container=g;
this.template=function h(j){return'<div><label id="loginModal-username-error" class="error alert-danger" for="loginModal-username">'+j+"</label></div>"
};
if(i||i===false){this.dictionaryPromise=Q.resolve(i)
}else{if(f){this.dictionaryPromise=f
}else{this.dictionaryPromise=f=this.loadMessageDictionary()
}}}d.prototype.loadMessageDictionary=function e(){return Q.when($.ajax({url:CQURLInfo.requestPath+"/jcr:content.getMessageDictionary.json",context:this,dataType:"json"}))
};
d.prototype.show=function b(j,i){var h=this;
typeof j!=="string"&&(j=j.code||"unknown");
return this.dictionaryPromise.then(function g(m){var l=m&&m[j]||j;
var k=$(h.template(l)).addClass(i);
h.container.append(k);
return k.fadeIn().promise()
})
};
d.prototype.clear=function a(){var h=this.container.children();
h.fadeOut(function g(){h.remove()
});
return this
};
d.prototype.noAnimclear=function a(){var g=this.container.children();
g.remove();
return this
};
portalGGA.utils.ErrorNotifier=d;
c.prototype.loadMessageDictionary=function e(){return Q.when($.ajax({url:CQURLInfo.requestPath+"/jcr:content.getMessageDictionary.json",context:this,dataType:"json"}))
};
c.prototype.show=function b(j,i){var h=this;
typeof j!=="string"&&(j=j.code||"unknown");
return this.dictionaryPromise.then(function g(m){var l=m&&m[j]||j;
var k=$(h.template(l)).addClass(i);
h.container.append(k);
return k.fadeIn().promise()
})
};
c.prototype.clear=function a(){var h=this.container.children();
h.fadeOut(function g(){h.remove()
});
return this
};
c.prototype.noAnimclear=function a(){var g=this.container.children();
g.remove();
return this
};
portalGGA.utils.LoginErrorNotifier=c
}());
$(function documentReady_messageBar(){portalGGA.utils.globalErrorNotifier=new portalGGA.utils.ErrorNotifier($("#messageBar"));
var c=portalGGA.utils.redirect.get("message");
c&&portalGGA.utils.globalErrorNotifier.show(c.code,c.type);
var b=$.cookie.json;
$.cookie.json=true;
var a=$.cookie("message");
$.cookie.json=b;
a&&portalGGA.utils.globalErrorNotifier.show(a.code,a.type)&&$.cookie("message",null,{path:"/"})
});
!(function(f,e,h){portalGGA.views.NeedPlayerVerification=Backbone.View.extend({constructor:function g(k){var j=this;
Backbone.View.apply(this,arguments);
_.bindAll(this,"getVerificationNeededServices");
var l;
l=l||new portalGGA.models.player.GetRegistrationType();
var m=portalGGA.utils.localStorage.get("preferencestoBeDisplayThisTime");
if(m==null){m=false;
portalGGA.utils.localStorage.set("preferencestoBeDisplayThisTime",false)
}if(m!="displayed"){l.fetch().then(function i(){if(l&&!l.get("needPasswordChange")){if(k&&k.primaryService){j.getVerificationNeededServices();
if(!_.first(portalGGA.utils.communication.getByPath("verificationNeededEvents"))){portalGGA.utils.communication.register(_.extend({},Backbone.Events),"verificationNeededEvents","verificationNeededEvents")
}_.first(portalGGA.utils.communication.getByPath("verificationNeededEvents")).bind("nextService",function(n){j.initNextService()
})
}if(typeof this.dismiss==="function"){_.bindAll(this,"dismiss")
}if(typeof this.confirm==="function"){_.bindAll(this,"confirm")
}}else{if(l&&l.get("needPasswordChange")&&m==false){m=true;
portalGGA.utils.localStorage.set("preferencestoBeDisplayThisTime",true);
return h.send("/en-us/myaccount/changepassword.html",{message:{code:"convertedPlayerChecker.notVerified",type:"alert-danger"}})
}else{if(m){if(k&&k.primaryService){j.getVerificationNeededServices();
if(!_.first(portalGGA.utils.communication.getByPath("verificationNeededEvents"))){portalGGA.utils.communication.register(_.extend({},Backbone.Events),"verificationNeededEvents","verificationNeededEvents")
}_.first(portalGGA.utils.communication.getByPath("verificationNeededEvents")).bind("nextService",function(n){j.initNextService()
})
}if(typeof this.dismiss==="function"){_.bindAll(this,"dismiss")
}if(typeof this.confirm==="function"){_.bindAll(this,"confirm")
}}}}})
}},getVerificationNeededServices:function b(l){preferencestoBeDisplayThisTime=false;
portalGGA.utils.localStorage.set("preferencestoBeDisplayThisTime","displayed");
var i=this,k=new portalGGA.models.NeedPlayerVerifications();
return k.fetch({url:k.urlRoot}).then(function m(n){i.services=n;
i.currentServiceNo=0;
i.initNextService();
return e.resolve(n)
}).fail(function j(o){var n=f.parseJSON(o.responseText);
n&&n.code&&portalGGA.utils.globalErrorNotifier.show(n.code,"alert-danger");
return o
})
},initNextService:function a(){if(this.currentServiceView){this.currentServiceView.removeItself()
}this.currentServiceView=null;
if(this.services.length>0&&this.services[this.currentServiceNo]){if(this.services[this.currentServiceNo].verificationType==="AUTO_LOGIN"){this.currentServiceView=new portalGGA.views.VerificationVerifyEmail()
}else{if(this.services[this.currentServiceNo].verificationType==="PreferencesPopupCounter"){this.currentServiceView=new portalGGA.views.PlayerPreference({el:f("#myPreferenceModalFormWrapper"),fromMyAccount:false})
}}if(this.currentServiceView){this.currentServiceView.model=new portalGGA.models.NeedPlayerVerification(this.services[this.currentServiceNo]);
this.currentServiceView.services=this.services;
this.currentServiceView.currentServiceNo=this.currentServiceNo;
this.currentServiceView.render();
this.currentServiceNo++
}else{portalGGA.utils.globalErrorNotifier.show("verificationneeded.unsupported_type","alert-danger");
this.currentServiceNo++;
this.initNextService()
}}else{this.removeItself()
}},removeItself:function c(){this.undelegateEvents();
this.$el.removeData().unbind();
if(this.modal){this.modal.remove()
}this.remove();
Backbone.View.prototype.remove.call(this)
},dismiss:function d(k){var i=this,j=(this.model.get("counter")===null||isNaN(this.model.get("counter")))?3:this.model.get("counter")+1;
k&&k.preventDefault();
e.when(null).then(function(){if(j<3){return i.model.update({counter:j})
}else{return i.model.disable()
}}).fin(function(){i.modal.modal("hide");
i.modal.on("hidden.bs.modal",function(l){i.modal.off("hidden.bs.modal");
_.first(portalGGA.utils.communication.getByPath("verificationNeededEvents")).trigger("nextService",i.model)
})
})
}})
})(jQuery,Q,portalGGA.utils.redirect);
(function(){function f(){this.localStorage=store
}f.prototype.get=function d(h){if(this.enabled()){return this.localStorage.get(h)
}return
};
f.prototype.set=function g(i,h){if(this.enabled()){this.localStorage.set(i,h)
}};
f.prototype.remove=function b(h){if(this.enabled()){this.localStorage.remove(h)
}};
f.prototype.clear=function a(){if(this.enabled()){this.localStorage.clear()
}};
f.prototype.getAll=function e(){if(this.enabled()){return this.localStorage.getAll()
}return
};
f.prototype.enabled=function c(){return this.localStorage.enabled
};
portalGGA.utils.localStorage=new f()
}());
(function(b){var c={};
function a(){var d=this;
this.send=function f(g,h){h&&b.set("redirectData",h);
window.location=g
};
this.get=function e(h){if(!c[h]){var g=b.get("redirectData");
if(g!=undefined){c[h]=g[h];
delete g[h];
b.set("redirectData",g)
}}return c[h]
}
}portalGGA.utils.redirect=new a()
}(portalGGA.utils.localStorage));
!(function(){portalGGA.models.Draw=Backbone.Model.extend({defaults:{gameName:null,id:null,status:null,openTime:0,closeTime:0,drawTime:0,estimatedJackpot:0,wagerAvailable:false,wagerCloseTime:0,cancelAvailable:false,cancelCloseTime:0,gameRuleSet:null},parse:function b(c){c.compositeId=c.gameName+c.id;
return c
},idAttribute:"compositeId",constructor:function a(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.Draws=Backbone.Collection.extend({model:portalGGA.models.Draw,url:"/api/v2/draw-games/draws/",parse:function(c){return c&&c.draws
}})
}());
!(function(){portalGGA.models.DrawnResults=Backbone.Model.extend({defaults:{gameName:null,period:null,periodStartTime:null,mostDrawnResults:[],leastDrawnResults:[]},constructor:function a(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.DrawStatistics=Backbone.Collection.extend({model:portalGGA.models.DrawnResults,url:"/api/v1/draw-games/statistics",parse:function(b){return b&&b.drawStatistics[0].drawnResults
}})
}());
!(function(){portalGGA.models.SingleDraw=Backbone.Model.extend({url:function(){return"/api/v2/draw-games/draws/"+this.get("gameName")+"/"+this.get("id")
},defaults:{gameName:null,id:null,status:null,openTime:0,closeTime:0,drawTime:0,estimatedJackpot:0,wagerAvailable:false,wagerCloseTime:0,cancelAvailable:false,cancelCloseTime:0,gameRuleSet:null},constructor:function a(){Backbone.Model.apply(this,arguments)
},sync:function(d,c,b){console.info("Requires fixes from Backbone 1.1, or at least something around 027e8f638d (Aug 06, 2013).");
if(c&&(d==="create"||d==="update"||d==="patch")&&(!b||!b.saveAll&&!b.attrs)){b||(b={});
b.attrs=c.toJSON(b)
}return Backbone.Model.prototype.sync.apply(this,arguments)
}})
}());
!(function(b){portalGGA.models.InstantGame=Backbone.Model.extend({urlRoot:"/api/v1/instant-games/games/",idAttribute:"gameId",defaults:{gameId:null,gameName:null,validationStatus:null,ticketPrice:0,launchDate:null,startDistributionDate:null,endDistributionDate:null,disableDate:null,prizeTiers:{}},constructor:function a(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.InstantGames=Backbone.Collection.extend({model:portalGGA.models.InstantGame,url:"/api/v1/instant-games/games/",parse:function(c){return c&&c.games
}})
}());
!(function(){portalGGA.models.player.CommunicationPreferences=Backbone.Model.extend({url:"/api/v2/players/self/communication-preferences.json",defaults:{email:null,emailVerified:false,preferredChannel:"EMAIL",pushClientGlobalBlackoutTime:null,pushClientPersonalBlackoutTime:null,pushClients:null,sms:null,smsGlobalBlackoutTime:null,smsPersonalBlackoutTime:null,smsVerified:false},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
(function(d,e,b,w,s,o){portalGGA.views.PlayerPreference=w.extend({events:{submit:"savePreferences","change .checkbox":"changeInstantGame","change .push_checkbox":"changePushNotification","change .jackpot_checkbox":"selectJackpot","change .winning_checkbox":"selectWinningNos","change .jackpot_games":"selectJackpotGames","change .daily_games":"selectDailyGames","change .allow_push":"selectPushNotifications","change .instSelect":"openInstantGame","change .jck_checkbox":"selectJckpt","change .win_checkbox":"selectWinning","change .jcpt_games":"selectJctGame","change .dly_games":"selectDlyGame"},constructor:function j(A){this.communicationPreferencesModel=A.communicationPreferencesModel||new s();
this.notificationsCollection=A.notificationsCollection||new portalGGA.models.player.NotificationPreferences();
this.fromMyAccount=A.fromMyAccount;
w.apply(this,arguments);
if(this.fromMyAccount=="false"&&this.model&&this.model.get("counter")=="2"){d("#remindMeLater").fadeOut()
}var y=this;
this.notificationsMap={CSH5_INFO:["CSH5_INFO","GAME_CSH5"],P6_INFO:["P6_INFO","GAME_P6"],P4_INFO:["P4_INFO","GAME_P4"],P3_INFO:["P3_INFO","GAME_P3"],C4L_INFO:["C4L_INFO","GAME_C4L"],PB_INFO:["PB_INFO","GAME_PB"],MM_INFO:["MM_INFO","GAME_MM"],FASTPLAY_INFO:["FASTPLAY_INFO","GAME_FP"],FIVECARDCASH_INFO:["FIVECARDCASH_INFO","GAME_FIVE_CARD"],KENO_INFO:["KENO_INFO","GAME_QUICK_DRAW"],INSTANT_GAME_INFO:["INSTANT_GAME_INFO","GAME_INSTANT_GAME_INFO"],INSTANT_PRICE_1_INFO:["INSTANT_PRICE_1_INFO","INSTANT_GAME_PRICE_1"],INSTANT_PRICE_2_INFO:["INSTANT_PRICE_2_INFO","INSTANT_GAME_PRICE_2"],INSTANT_PRICE_3_INFO:["INSTANT_PRICE_3_INFO","INSTANT_GAME_PRICE_3"],INSTANT_PRICE_5_INFO:["INSTANT_PRICE_5_INFO","INSTANT_GAME_PRICE_5"],INSTANT_PRICE_10_INFO:["INSTANT_PRICE_10_INFO","INSTANT_GAME_PRICE_10"],INSTANT_PRICE_20_INFO:["INSTANT_PRICE_20_INFO","INSTANT_GAME_PRICE_20"],INSTANT_PRICE_30_INFO:["INSTANT_PRICE_30_INFO","INSTANT_GAME_PRICE_30"],JACKPOT_CSH5:["JACKPOT_CSH5","JACKPOT_CASH5"],JACKPOT_MM:["JACKPOT_MM","JACKPOT_MM"],JACKPOT_P6:["JACKPOT_P6","JACKPOT_P6"],JACKPOT_PB:["JACKPOT_PB","JACKPOT_PB"],RESULTS_CSH5:["RESULTS_CSH5","RESULT_C5"],RESULTS_MM:["RESULTS_MM","RESULT_MM"],RESULTS_P3:["RESULTS_P3","RESULT_P3"],RESULTS_P4:["RESULTS_P4","RESULT_P4"],RESULTS_P6:["RESULTS_P6","RESULT_P6"],RESULTS_C4L:["RESULTS_C4L","RESULT_C4"],RESULTS_PB:["RESULTS_PB","RESULT_PB"],RESULTS_FIVECARDCASH:["RESULTS_FIVECARDCASH","RESULT_5C"],PROMO_MESSAGE:["PROMO_MESSAGE","PROMOTION_MSG"],DailyWinningNumbers:["DailyWinningNumbers","winningNumbersAlert"],JackpotAlert:["JackpotAlert","jackpotAlerts"],SecondChanceOptIn:["SecondChanceOptIn","optinDrawingsAlerts"],NewsEvent:["NewsEvent","eventNewsletterAlerts"],ParticipateOnlineSurveys:["ParticipateOnlineSurveys","participateOnlineSurveys"],ResearchContactedFocusGroup:["ResearchContactedFocusGroup","researchContactedFocusGroup"],};
this.communicationPreferencesModel.fetch({success:function B(){y.$(".preloader_big").fadeOut()
}});
e.when(this.notificationsCollection.fetch({beforeSend:function(D){D.setRequestHeader("GK-Cookie",d.cookie("GK_AUTHE"))
}})).then(function z(){y.$(".preloader_big").fadeOut()
}).fail(function C(D){console.warn("Error",this,arguments);
y.$(".preloader_big").fadeOut();
if(D.status==403){portalGGA.utils.globalErrorNotifier.show("notification-preferences.error","alert-danger");
return e.reject(D)
}else{D&&D.responseText&&(D=d.parseJSON(D.responseText));
portalGGA.utils.globalErrorNotifier.show(D,"alert-danger");
return e.reject(D)
}});
this.notificationsCollection.on("sync",this.renderPreferences,this);
this.communicationPreferencesModel.isNew=function(){return false
};
d(".col-match-height").matchHeight()
},openInstantGame:function k(y){if(d(".instSelect").prop("checked")==true){d.fn.matchHeight._update(d(".col-match-height"));
d("#instExtras").show()
}else{d.fn.matchHeight._update(d(".col-match-height"));
d("#instExtras").hide();
d("#INSTANT_GAME_PRICE_1,#INSTANT_GAME_PRICE_2,#INSTANT_GAME_PRICE_3,#INSTANT_GAME_PRICE_5,#INSTANT_GAME_PRICE_10,#INSTANT_GAME_PRICE_20").prop("checked",false)
}},renderPreferences:function v(){var y=this;
_.each(this.notificationsMap,function(B){var A=y.notificationsCollection.get(B[0]);
if(A){var z=A.toJSON();
if(z&&z.channels&&z.channels.EMAIL&&z.channels.EMAIL.enabled){_.each(B,function(D,C){if(C!=0){y.$("#"+D).prop("checked",true)
}})
}else{if(z&&z.channels&&z.channels.PUSH_CLIENT&&z.channels.PUSH_CLIENT.enabled){_.each(B,function(D,C){if(C!=0){y.$("#"+D).prop("checked",true)
}})
}}}});
d("#emailFormat").val(y.communicationPreferencesModel.get("emailFormat"));
if(this.communicationPreferencesModel.get("preferredChannel")=="EMAIL"){y.$("#EMAIL").prop("checked",true);
y.$("#preferredFormat").fadeIn()
}else{if(this.communicationPreferencesModel.get("preferredChannel")=="SMS"){y.$("#SMS").prop("checked",true);
y.$("#preferredFormat").fadeOut()
}}if(d("#RESULT_PB").prop("checked")==true||d("#RESULT_MM").prop("checked")==true||d("#RESULT_P6").prop("checked")==true||d("#RESULT_C5").prop("checked")==true||d("#RESULT_C4").prop("checked")==true||d("#RESULT_P3").prop("checked")==true||d("#RESULT_P4").prop("checked")==true||d("#RESULT_5C").prop("checked")==true||d("#JACKPOT_PB").prop("checked")==true||d("#JACKPOT_MM").prop("checked")==true||d("#JACKPOT_P6").prop("checked")==true||d("#PROMOTION_MSG").prop("checked")==true){d(".allow_push").prop("checked",true)
}if(d("#RESULT_PB").prop("checked")==true&&d("#RESULT_MM").prop("checked")==true&&d("#RESULT_P6").prop("checked")==true&&d("#RESULT_C5").prop("checked")==true&&d("#RESULT_C4").prop("checked")==true&&d("#RESULT_P3").prop("checked")==true&&d("#RESULT_P4").prop("checked")==true&&d("#RESULT_5C").prop("checked")==true){d(".winning_checkbox").prop("checked",true)
}if(d("#JACKPOT_PB").prop("checked")==true&&d("#JACKPOT_MM").prop("checked")==true&&d("#JACKPOT_P6").prop("checked")==true){d(".jackpot_checkbox").prop("checked",true)
}if(d("#GAME_PB").prop("checked")==true&&d("#GAME_MM").prop("checked")==true&&d("#GAME_P6").prop("checked")==true){d(".jackpot_games").prop("checked",true)
}if(d("#GAME_P3").prop("checked")==true&&d("#GAME_P4").prop("checked")==true&&d("#GAME_CSH5").prop("checked")==true&&d("#GAME_FP").prop("checked")==true&&d("#GAME_FIVE_CARD").prop("checked")==true){d(".daily_games").prop("checked",true)
}if(d("#INSTANT_GAME_PRICE_1").prop("checked")==true||d("#INSTANT_GAME_PRICE_2").prop("checked")==true||d("#INSTANT_GAME_PRICE_3").prop("checked")==true||d("#INSTANT_GAME_PRICE_5").prop("checked")==true||d("#INSTANT_GAME_PRICE_10").prop("checked")==true||d("#INSTANT_GAME_PRICE_20").prop("checked")==true){d("#instSelect").prop("checked",true);
y.openInstantGame()
}return this
},closeVerificationPopup:function c(y){this.dismiss(y);
return this
},render:function x(){var y=this;
d("body").append(d("#preferencesVerificationContainer"));
this.modal=d("#modalMyPreferences");
this.modal.find("#verificationConfirm").on("click",this.confirm);
d("#modalMyPreferences").modal("show");
d('[data-toggle="popover"]').popover();
d("#modalMyPreferences").on("hidden.bs.modal",function(z){y.closeVerificationPopup()
});
return this
},changePushNotification:function m(y){if(d("#RESULT_PB").prop("checked")==true||d("#RESULT_MM").prop("checked")==true||d("#RESULT_P6").prop("checked")==true||d("#RESULT_C5").prop("checked")==true||d("#RESULT_C4").prop("checked")==true||d("#RESULT_P3").prop("checked")==true||d("#RESULT_P4").prop("checked")==true||d("#RESULT_5C").prop("checked")==true||d("#JACKPOT_PB").prop("checked")==true||d("#JACKPOT_MM").prop("checked")==true||d("#JACKPOT_P6").prop("checked")==true||d("#PROMOTION_MSG").prop("checked")==true){d(".allow_push").prop("checked",true)
}else{d(".allow_push").prop("checked",false)
}},selectJckpt:function f(y){if(d("#JACKPOT_PB").prop("checked")==true&&d("#JACKPOT_MM").prop("checked")==true&&d("#JACKPOT_P6").prop("checked")==true){d(".jackpot_checkbox").prop("checked",true)
}else{d(".jackpot_checkbox").prop("checked",false)
}},selectWinning:function p(y){if(d("#RESULT_PB").prop("checked")==true&&d("#RESULT_MM").prop("checked")==true&&d("#RESULT_P6").prop("checked")==true&&d("#RESULT_C5").prop("checked")==true&&d("#RESULT_C4").prop("checked")==true&&d("#RESULT_P3").prop("checked")==true&&d("#RESULT_P4").prop("checked")==true&&d("#RESULT_5C").prop("checked")==true){d(".winning_checkbox").prop("checked",true)
}else{d(".winning_checkbox").prop("checked",false)
}},selectWinningNos:function u(y){if(d(".winning_checkbox").prop("checked")==false){d("#RESULT_PB,#RESULT_MM,#RESULT_P6,#RESULT_C5,#RESULT_C4,#RESULT_P3,#RESULT_P4,#RESULT_5C").prop("checked",false)
}else{d("#RESULT_PB,#RESULT_MM,#RESULT_P6,#RESULT_C5,#RESULT_C4,#RESULT_P3,#RESULT_P4,#RESULT_5C").prop("checked",true)
}if(d("#RESULT_PB").prop("checked")==true||d("#RESULT_MM").prop("checked")==true||d("#RESULT_P6").prop("checked")==true||d("#RESULT_C5").prop("checked")==true||d("#RESULT_C4").prop("checked")==true||d("#RESULT_P3").prop("checked")==true||d("#RESULT_P4").prop("checked")==true||d("#RESULT_5C").prop("checked")==true||d("#JACKPOT_PB").prop("checked")==true||d("#JACKPOT_MM").prop("checked")==true||d("#JACKPOT_P6").prop("checked")==true||d("#PROMOTION_MSG").prop("checked")==true){d(".allow_push").prop("checked",true)
}else{d(".allow_push").prop("checked",false)
}},selectJackpot:function q(y){if(d(".jackpot_checkbox").prop("checked")==false){d("#JACKPOT_PB,#JACKPOT_MM,#JACKPOT_P6,#JACKPOT_CASH5").prop("checked",false)
}else{d("#JACKPOT_PB,#JACKPOT_MM,#JACKPOT_P6,#JACKPOT_CASH5").prop("checked",true)
}if(d("#RESULT_PB").prop("checked")==true||d("#RESULT_MM").prop("checked")==true||d("#RESULT_P6").prop("checked")==true||d("#RESULT_C5").prop("checked")==true||d("#RESULT_C4").prop("checked")==true||d("#RESULT_P3").prop("checked")==true||d("#RESULT_P4").prop("checked")==true||d("#RESULT_5C").prop("checked")==true||d("#JACKPOT_PB").prop("checked")==true||d("#JACKPOT_MM").prop("checked")==true||d("#JACKPOT_P6").prop("checked")==true||d("#PROMOTION_MSG").prop("checked")==true){d(".allow_push").prop("checked",true)
}else{d(".allow_push").prop("checked",false)
}},selectJackpotGames:function h(y){if(d(".jackpot_games").prop("checked")==false){d("#GAME_PB,#GAME_MM,#GAME_P6").prop("checked",false)
}else{d("#GAME_PB,#GAME_MM,#GAME_P6").prop("checked",true)
}},selectDailyGames:function r(y){if(d(".daily_games").prop("checked")==false){d("#GAME_P3,#GAME_P4,#GAME_CSH5,#GAME_FP,#GAME_FIVE_CARD").prop("checked",false)
}else{d("#GAME_P3,#GAME_P4,#GAME_CSH5,#GAME_FP,#GAME_FIVE_CARD").prop("checked",true)
}},selectPushNotifications:function l(y){if(d(".allow_push").prop("checked")==false){d("#RESULT_PB,#RESULT_MM,#RESULT_P6,#RESULT_C5,#RESULT_C4,#RESULT_P3,#RESULT_P4,#RESULT_5C,#JACKPOT_PB,#JACKPOT_MM,#JACKPOT_P6,#JACKPOT_CASH5,#PROMOTION_MSG,#WINNING_CHECKBOX,#JACKPOT_CHECKBOX").prop("checked",false)
}else{d("#RESULT_PB,#RESULT_MM,#RESULT_P6,#RESULT_C5,#RESULT_C4,#RESULT_P3,#RESULT_P4,#RESULT_5C,#JACKPOT_PB,#JACKPOT_MM,#JACKPOT_P6,#JACKPOT_CASH5,#PROMOTION_MSG,#WINNING_CHECKBOX,#JACKPOT_CHECKBOX").prop("checked",true)
}},selectJctGame:function i(y){if(d("#GAME_PB").prop("checked")==true&&d("#GAME_MM").prop("checked")==true&&d("#GAME_P6").prop("checked")==true){d(".jackpot_games").prop("checked",true)
}else{d(".jackpot_games").prop("checked",false)
}},selectDlyGame:function a(y){if(d("#GAME_P3").prop("checked")==true&&d("#GAME_P4").prop("checked")==true&&d("#GAME_CSH5").prop("checked")==true&&d("#GAME_FP").prop("checked")==true&&d("#GAME_FIVE_CARD").prop("checked")==true){d(".daily_games").prop("checked",true)
}else{d(".daily_games").prop("checked",false)
}},serialize:function n(){return portalGGA.utils.forms.serializeJSON.call(this.$el,true,true)
},changeInstantGame:function g(B){var C=B.target.id;
if(B.target.id.indexOf("PRICE")!=-1){if(d("#"+C).prop("checked")==true){d("#GAME_INSTANT_GAME_INFO").prop("checked","true")
}}if(B.target.id.indexOf("GAME_INSTANT_GAME_INFO")!=-1){if(d("#"+C).prop("checked")==false){var y=d("[id*=INSTANT_GAME_PRICE]").length;
for(var A=1,z=1;
A<=y;
A++){if(A==4){z=5
}else{if(A==5){z=10
}else{if(A==6){z=20
}else{if(A==7){z=30
}else{z=A
}}}}if(d("#INSTANT_GAME_PRICE_"+z).prop("checked")==true){d("#INSTANT_GAME_PRICE_"+z).prop("checked",false)
}}}}},savePreferences:function t(D){D&&D.preventDefault();
var z=this,B=this.$("[type=submit]");
B.button("loading");
var C=this.$(":input:disabled").removeAttr("disabled");
var y=d("input[name='preferredChannel']").serializeArray();
C.attr("disabled","disabled");
this.communicationPreferencesModel.set("emailFormat",d("#emailFormat").val());
if(d("#EMAIL").is(":checked")){this.communicationPreferencesModel.set("preferredChannel","EMAIL")
}else{if(d("#SMS").is(":checked")){this.communicationPreferencesModel.set("preferredChannel","SMS");
this.communicationPreferencesModel.set("emailFormat","TEXT")
}}this.communicationPreferencesModel.save().done(function E(F){_.each(z.notificationsMap,function(J){var I=z.notificationsCollection.get(J[0]);
if(I){if(d("#"+J[1]).prop("checked")){_.each(I.get("channels"),function(K){K.enabled=true
})
}else{_.each(I.get("channels"),function(K){K.enabled=false
})
}}if(I){z.notificationsCollection.add(I,{merge:true})
}});
return z.notificationsCollection.save(null,{silent:true,patch:true,type:"PUT"}).done(function H(I){if(!z.fromMyAccount){z.model.set("counter",3);
d("#modalMyPreferences").modal("hide")
}var J=handlePreferencesSuccessResponseTemplate();
d("#successPreferencesModal").html(J);
d("#successPreferencesModal").find(".modal").modal();
B.button("reset");
return I
}).fail(function G(K){var J="";
var K=d.parseJSON(K.responseText);
if(K&&K.code){J=K.code
}else{J=K
}d("#modalMyPreferences").modal("hide");
var I=handlePreferencesErrorResponseTemplate({errorCode:J});
d("#errorPreferencesModal").html(I);
d("#errorPreferencesModal").find(".modal").modal();
B.button("reset");
return F
})
}).fail(function A(H){var G="";
var H=d.parseJSON(H.responseText);
if(H&&H.code){G=H.code
}else{G=H
}d("#modalMyPreferences").modal("hide");
var F=handlePreferencesErrorResponseTemplate({errorCode:G});
d("#errorPreferencesModal").html(F);
d("#errorPreferencesModal").find(".modal").modal();
B.button("reset");
return H
})
}})
}(jQuery,Q,portalGGA.utils.session,portalGGA.views.NeedPlayerVerification,portalGGA.models.player.CommunicationPreferences,portalGGA.models.player.NotificationPreferences));
portalGGA.models.NeedPlayerVerifications=Backbone.Model.extend({urlRoot:"/api/v2/players/self/verification-needed",constructor:function NeedPlayerVerifications(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.NeedPlayerVerification=Backbone.Model.extend({defaults:{serviceId:null,verificationType:null,url:null,counter:null},urlRoot:"/api/v2/players/self/verification-needed",constructor:function NeedPlayerVerification(){Backbone.Model.apply(this,arguments)
},update:function update(a){return Q.when($.ajax("/api/v2/players/self/verification-needed/update/"+this.get("serviceId"),{type:"PUT",data:JSON.stringify(a),dataType:"json",contentType:"application/json"}))
},disable:function disable(){return Q.when($.ajax("/api/v2/players/self/verification-needed/disable/"+this.get("serviceId"),{type:"PUT",contentType:"application/json"}))
}});
!(function(){portalGGA.models.player.Profile=Backbone.Model.extend({url:"/api/v2/players/self/profile",defaults:{acceptsEmail:false,acceptsRewards:false,language:"",preferredCurrency:"",nickName:"",communicationPreferences:null,preferredPaymentMode:"",registrationDate:0,userName:"",loyaltyTier:""},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){function b(g){this.type=g||"";
this.postalCode="";
this.city="";
this.county="";
this.isoCountryCode="";
this.region="";
this.state="";
this.country="";
this.address1="";
this.address2="";
this.address3=""
}portalGGA.models.player.PersonalInfo=Backbone.Model.extend({url:"/api/v2/players/self/personal-info.json",defaults:{firstName:"",lastName:"",suffix:"",gender:"UNSPECIFIED",addresses:{},phones:{},emails:{},citizenship:"",taxCategory:"",businessTitle:"",timeZone:"",passwordHints:[]},constructor:function f(){Backbone.Model.apply(this,arguments)
}},{reparsePhones:function e(h){var i,j,g;
for(i in h){g=h[i];
g.type=i;
j=g.number.shift();
g.number=g.number.join("");
if(g.number){g.number=j+g.number
}else{delete h[i]
}}return h
},parsePhones:function a(g){var h;
for(h in g){g[h].type=h;
if(g[h].number.match(/\+/)){g[h].number=g[h].number.match(/\+1 (\d{0,3})(\d{0,3})(\d{0,4})(\d*)/);
g[h].number[0]="+1 "
}else{g[h].number=g[h].number.substr(1,g[h].number.length);
g[h].number=g[h].number.match(/(\d{0,3})(\d{0,3})(\d{0,4})(\d*)/);
g[h].number[0]="1"
}}return g
},zipSplit:function d(h){var g;
for(g in h){if(h[g].postalCode){h[g].postalCode=h[g].postalCode.match(/^(\d{5})\-?(\d*)/).splice(1)
}}return h
},zipJoin:function c(h){var g;
for(g in h){h[g].postalCode=h[g].postalCode.join("")
}return h
}})
}());
!(function(){portalGGA.models.player.NonpublicPersonalInfo=Backbone.Model.extend({defaults:{dateOfBirth:0,feinNumber:"",identificationNumber:"AAA12345",identificationIssuer:"DMV",socialSecurityNumber:"",securityCode:""},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.Card=Backbone.Model.extend({defaults:{id:"",status:"",level:"",preferredCurrency:"",requestedPhysicalCard:false},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.Player=Backbone.Model.extend({url:"/api/v2/players/self",validation:{password:{required:true,minLength:8}},defaults:{password:null,personalInfo:null,profile:null,nonpublicPersonalInfo:null,playerCard:null},constructor:function a(){Backbone.Model.apply(this,arguments);
this.personalInfo||(this.personalInfo=new portalGGA.models.player.PersonalInfo(this.get("personalInfo")));
this.attributes.personalInfo=this.personalInfo.attributes;
this.profile||(this.profile=new portalGGA.models.player.Profile(this.get("profile")));
this.attributes.profile=this.profile.attributes;
this.nonpublicPersonalInfo||(this.nonpublicPersonalInfo=new portalGGA.models.player.NonpublicPersonalInfo(this.get("nonpublicPersonalInfo")));
this.attributes.nonpublicPersonalInfo=this.nonpublicPersonalInfo.attributes
},set:function b(d,e,c){if(_.isObject(d)||d==null){attrs=d;
c=e
}else{attrs={};
attrs[d]=e
}if(attrs.nonpublicPersonalInfo&&attrs.nonpublicPersonalInfo.dateOfBirth){attrs.personalInfo||(attrs.personalInfo={});
attrs.personalInfo.dateOfBirth=attrs.nonpublicPersonalInfo&&attrs.nonpublicPersonalInfo.dateOfBirth
}if(attrs.personalInfo&&!(attrs.personalInfo instanceof Backbone.Model)===true){attrs.personalInfo=this.personalInfo.set(attrs.personalInfo).attributes
}if(attrs.profile&&!(attrs.profile instanceof Backbone.Model)===true){attrs.profile=this.profile.set(attrs.profile).attributes
}if(attrs.nonpublicPersonalInfo&&!(attrs.nonpublicPersonalInfo instanceof Backbone.Model)===true){attrs.nonpublicPersonalInfo=this.nonpublicPersonalInfo.set(attrs.nonpublicPersonalInfo).attributes
}return Backbone.Model.prototype.set.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.PlayerHeader=Backbone.Model.extend({url:"/api/v2/players/self/util/player-data",defaults:{playerId:null,playerCard:null,gmsSessionId:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.SSOToken=Backbone.Model.extend({url:"/api/v1/oauth/loginOneTime",defaults:{},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.GetRegistrationType=Backbone.Model.extend({url:"/api/v1/players/self/get-registration-type",defaults:{needPasswordChange:false},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.Account=Backbone.Model.extend({url:"/api/v2/players/self/account",defaults:{balances:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.Balance=Backbone.Model.extend({defaults:{type:null,balance:0,currency:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.CheckEmailAvailability=Backbone.Model.extend({url:"/api/v1/players/get-key-availability",defaults:{type:0,value:null,},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.ForgottenPassword=Backbone.Model.extend({url:"/api/v2/players/forgotten-password ",idAttribute:"emailAddress",defaults:{emailAddress:"",securityAnswer:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.SecurityHint=Backbone.Model.extend({defaults:{securityQuestion:null,securityAnswer:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.LoyaltyProfile=Backbone.Model.extend({url:"/api/v2/players/self/loyalty",defaults:{status:"",errorEncountered:false,errorCode:0,points:0,allTimePoints:0,pointsToChangeLevel:0,idLevel:0,level:null,idNextLevel:0,nextLevel:null},constructor:function b(){Backbone.Model.apply(this,arguments)
},sync:function c(f,e,d){d||(d={});
if(!d.data&&e&&(f==="create"||f==="update"||f==="patch")){d.data=JSON.stringify(e.reparse(d));
d.contentType="application/json"
}return Backbone.sync(f,e,d)
},reparse:function a(d){this.clear()
}})
}());
!(function(){portalGGA.models.player.Submissions=Backbone.Model.extend({url:"/api/v1/players/self/submissions",defaults:{type:".MultipleSubmissionDTO",drawId:null,totalTicketsSum:null,submissions:[]}})
}());
!(function(){portalGGA.models.player.Submission=Backbone.Model.extend({url:"/api/v1/players/self/submission",defaults:{type:".ScratcherSubmissionDTO",ticketId:null,entryCode:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
portalGGA.models.CurrentMonthSubmissionsCount=Backbone.Model.extend({url:"/api/v1/second-chance/players/self/submission-summary",constructor:function CurrentMonthSubmissionsCount(){Backbone.Model.apply(this,arguments)
}});
!(function(){portalGGA.models.player.Notification=Backbone.Model.extend({url:function(){return"/api/v2/players/self/notifications/"+this.get("id")
},defaults:{id:0,type:null,date:0,destinationAddress:null,channel:"",parameters:{extNotificationKey:""},subject:null,body:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.player.Notifications=Backbone.Collection.extend({model:portalGGA.models.player.Notification,url:"/api/v2/players/self/notifications",isNew:$.noop,save:function(c,b){return Backbone.Model.prototype.save.apply(this,arguments)
},parse:function(b){this.nextPageUrl=b.nextPageUrl;
this.prevPageUrl=b.prevPageUrl;
this.pageUrls=b.pageUrls;
return b&&b.notifications&&_.reject(b.notifications,function(c){return c.status=="Error"
})
},sync:function(d,c,b){console.info("Requires fixes from Backbone 1.1, or at least something around 027e8f638d (Aug 06, 2013).");
if(c&&(d==="create"||d==="update"||d==="patch")&&(!b||!b.saveAll&&!b.attrs)){b||(b={});
b.attrs=c.toJSON(b)
}return Backbone.Model.prototype.sync.apply(this,arguments)
},_validate:function(){return Backbone.Model.prototype._validate.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.LoginNotification=Backbone.Model.extend({url:function(){return"/api/v1/second-chance/players/self/notifications?acknowledged=false"
},defaults:{id:0,type:null,date:0,destinationAddress:null,channel:"",parameters:{extNotificationKey:""},subject:null,body:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.player.LoginNotifications=Backbone.Collection.extend({model:portalGGA.models.player.LoginNotification,url:"/api/v1/second-chance/players/self/notifications?acknowledged=false",isNew:$.noop,save:function(c,b){return Backbone.Model.prototype.save.apply(this,arguments)
},parse:function(b){return b
},sync:function(d,c,b){console.info("Requires fixes from Backbone 1.1, or at least something around 027e8f638d (Aug 06, 2013).");
if(c&&(d==="create"||d==="update"||d==="patch")&&(!b||!b.saveAll&&!b.attrs)){b||(b={});
b.attrs=c.toJSON(b)
}return Backbone.Model.prototype.sync.apply(this,arguments)
},_validate:function(){return Backbone.Model.prototype._validate.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.AckNotification=Backbone.Model.extend({url:function(){return"/api/v1/second-chance/players/self/notifications"
},defaults:{notificationId:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.player.AckNotifications=Backbone.Collection.extend({model:portalGGA.models.player.AckNotification,url:"/api/v1/second-chance/players/self/notifications",isNew:$.noop,save:function(c,b){return Backbone.Model.prototype.save.apply(this,arguments)
},parse:function(b){return b
},sync:function(d,c,b){console.info("Requires fixes from Backbone 1.1, or at least something around 027e8f638d (Aug 06, 2013).");
if(c&&(d==="create"||d==="update"||d==="patch")&&(!b||!b.saveAll&&!b.attrs)){b||(b={});
b.attrs=c.toJSON(b)
}return Backbone.Model.prototype.sync.apply(this,arguments)
},_validate:function(){return Backbone.Model.prototype._validate.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.NotificationPreference=Backbone.Model.extend({url:"/api/v2/players/self/notifications-preferences",parse:function b(c){if(_.isArray(c)){return _.findWhere(c,{id:this.id})
}return c
},defaults:{id:null,eventType:null,notificationType:null,required:true,channels:null,eventPreferences:{}},sync:function a(e,d,c){c||(c={});
if(c.attrs==null&&d&&(e==="create"||e==="update"||e==="patch")){c.attrs=[d.toJSON(c)]
}return Backbone.Model.prototype.sync.apply(this,arguments)
}});
portalGGA.models.player.NotificationPreferences=Backbone.Collection.extend({model:portalGGA.models.player.NotificationPreference,url:"/api/v2/players/self/notifications-preferences",comparator:"id",_validate:function(){return Backbone.Model.prototype._validate.apply(this,arguments)
},isNew:$.noop,save:function(d,c){return Backbone.Model.prototype.save.apply(this,arguments)
},sync:function(e,d,c){console.info("Requires fixes from Backbone 1.1, or at least something around 027e8f638d (Aug 06, 2013).");
if(d&&(e==="create"||e==="update"||e==="patch")&&(!c||!c.saveAll&&!c.attrs)){c||(c={});
c.attrs=_.map(this.where({required:false}),function(f){return f.toJSON(c)
})
}return Backbone.Model.prototype.sync.apply(this,arguments)
}})
}());
!(function(e,d,f){portalGGA.views.VerificationVerifyEmail=f.extend({el:e("#verificationVerifyEmailContainer"),constructor:function b(h){var g=this;
f.apply(this,arguments)
},render:function c(){e("body").append(verificationVerifyEmailTemplate(this.model));
this.modal=e("#verificationVerifyEmailModal");
this.modal.find("#verificationConfirm").on("click",this.confirm);
this.modal.modal({backdrop:"static",show:true});
return this
},confirm:function a(h){var g=this;
h&&h.preventDefault();
this.modal.modal("hide");
this.modal.on("hidden.bs.modal",function(i){g.modal.off("hidden.bs.modal");
_.first(portalGGA.utils.communication.getByPath("verificationNeededEvents")).trigger("nextService",g.model)
})
}})
}(jQuery,Q,portalGGA.views.NeedPlayerVerification));
!(function(){portalGGA.models.player.Password=Backbone.Model.extend({url:"/api/v2/players/self/password",defaults:{oldPassword:"",newPassword:""},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.NotificationsUnsubscribe=Backbone.Model.extend({url:function(){return"/api/v2/notifications/unsubscribe/"
},defaults:{},constructor:function a(b){Backbone.Model.apply(this,arguments);
this.url=this.url()+"?token="+b.token
}})
}());
!(function(){portalGGA.models.player.ResetPassword=Backbone.Model.extend({url:"/api/v2/players/reset-password",defaults:{oneTimeToken:"",newPassword:""},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.Security=Backbone.Model.extend({url:"/api/v2/players/security",defaults:{securityQuestion:"",securityAnswer:""},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.SecurityQuestion=Backbone.Model.extend({defaults:{id:null,question:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.SecurityQuestions=Backbone.Collection.extend({model:portalGGA.models.player.SecurityQuestion,url:"/api/v2/players/security",})
}());
!(function(){portalGGA.models.player.SecurityAnswer=Backbone.Model.extend({defaults:{id:null,answer:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.SelfExclusion=Backbone.Model.extend({url:"/api/v2/players/self/self-exclusion/retrieve",defaults:{playerIsSelfExcluded:false,selfExclusionTime:null,reason:null},constructor:function b(){Backbone.Model.apply(this,arguments)
},updateUrl:function c(){console.log("updateUrl",this,arguments);
return"/api/v2/players/self/self-exclusion/set"
},sync:function a(f,e,d){if(f=="update"&&!d.url){d.url=this.updateUrl()
}return Backbone.Model.prototype.sync.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.player.Service=Backbone.Model.extend({idAttribute:"serviceId",defaults:{"@class":null,creationDate:null,lastModificationDate:null,serviceId:0,status:0,serviceType:0,serviceGroupType:0,termsAndConditionsVersion:0,firstLoginDone:false},constructor:function a(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.player.Services=Backbone.Collection.extend({model:portalGGA.models.player.Service,url:"/api/v2/players/self/services"})
}());
!(function(){portalGGA.models.player.SessionLimits=Backbone.Model.extend({url:"/api/v2/players/self/session-limits",defaults:{singleSessionLimit:0,dailyLimit:0,weeklyLimit:0,monthlyLimit:0,maxSingleSessionLimit:0,maxDailyLimit:0,maxWeeklyLimit:0,maxMonthlyLimit:0},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}());
!(function(){portalGGA.models.Retailer=Backbone.Model.extend({url:"/api/v1/locations",defaults:{id:null,type:null,name:null,address1:null,address2:null,address3:null,city:null,county:null,state:null,country:null,postalCode:null,phoneNumber:null,businessHours:{},assisted:null,selfService:true,monitorDisplay:null,ticketSelfCheck:null,smokingAllowed:null,lucky:null,lattitude:0,longitude:0,distance:null,instantGames:null,winnerAwareness:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.Retailers=Backbone.Collection.extend({model:portalGGA.models.Retailer,url:"/api/v1/locations",parse:function(b){this.nextPageUrl=b.nextPageUrl;
this.prevPageUrl=b.previousPageUrl;
this.pageUrls=b.pageUrls;
this.currentPage=b.currentPage;
return b.luckyLocations
}})
}());
!(function(){portalGGA.models.HotColdNumber=Backbone.Model.extend({url:"/api/v1/draw-games/statistics",defaults:{},constructor:function a(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.HotColdNumbers=Backbone.Collection.extend({model:portalGGA.models.HotColdNumber,url:"/api/v1/draw-games/statistics",parse:function(b){return b
}})
}());
portalGGA.models.SCDraw=Backbone.Model.extend({idAttribute:"drawNumber",constructor:function SCDraw(){Backbone.Model.apply(this,arguments)
}});
portalGGA.SCDraws=Backbone.Collection.extend({model:portalGGA.models.SCDraw,url:"/api/v1/second-chance/draws",parse:function(a){this.nextPageUrl=a.nextPageUrl;
this.prevPageUrl=a.previousPageUrl;
this.pageUrls=a.pageUrls;
this.currentPage=a.currentPage;
return a.draws
}});
portalGGA.models.SCPlayerDrawDetails=Backbone.Model.extend({constructor:function SCPlayerDrawDetails(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.SCPlayerDraw=Backbone.Model.extend({idAttribute:"drawNumber",constructor:function SCPlayerDraw(){Backbone.Model.apply(this,arguments)
}});
portalGGA.SCPlayerDraws=Backbone.Collection.extend({model:portalGGA.models.SCPlayerDraw,url:"/api/v1/second-chance/players/self/draws",parse:function(a){this.nextPageUrl=a.nextPageUrl;
this.prevPageUrl=a.previousPageUrl;
this.pageUrls=a.pageUrls;
this.currentPage=a.currentPage;
return a.draws
}});
portalGGA.models.SCResultsandWinners=Backbone.Model.extend({constructor:function SCResultsandWinners(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.EligibleGame=Backbone.Model.extend({idAttribute:"gameId",gameName:null,amount:0,constructor:function EligibleGame(){Backbone.Model.apply(this,arguments)
}});
portalGGA.EligibleGames=Backbone.Collection.extend({model:portalGGA.models.EligibleGame,url:"/api/v1/second-chance/games",parse:function(a){this.nextPageUrl=a.nextPageUrl;
this.prevPageUrl=a.previousPageUrl;
this.pageUrls=a.pageUrls;
this.currentPage=a.currentPage;
return a.games
}});
portalGGA.models.MySubmission=Backbone.Model.extend({idAttribute:"submissionId",ticketId:null,constructor:function MySubmission(){Backbone.Model.apply(this,arguments)
}});
portalGGA.MySubmissions=Backbone.Collection.extend({model:portalGGA.models.MySubmission,url:"/api/v1/second-chance/players/self/submissions",parse:function(a){this.nextPageUrl=a.nextPageUrl;
this.prevPageUrl=a.previousPageUrl;
this.pageUrls=a.pageUrls;
this.currentPage=a.currentPage;
return a.submissions
}});
portalGGA.models.SCNotification=Backbone.Model.extend({idAttribute:"notificationId",url:"/api/v1/second-chance/players/self/notifications",constructor:function SCNotification(){Backbone.Model.apply(this,arguments)
}});
portalGGA.SCNotifications=Backbone.Collection.extend({model:portalGGA.models.SCNotification,url:"/api/v1/second-chance/players/self/notifications",parse:function(a){this.nextPageUrl=a.nextPageUrl;
this.prevPageUrl=a.previousPageUrl;
this.pageUrls=a.pageUrls;
this.currentPage=a.currentPage;
return a&&a.notifications
}});
portalGGA.models.SCDrawDropdownValue=Backbone.Model.extend({idAttribute:"drawConfigId",constructor:function SCDrawDropdownValue(){Backbone.Model.apply(this,arguments)
}});
portalGGA.SCDrawDropdownValues=Backbone.Collection.extend({model:portalGGA.models.SCDrawDropdownValue,url:"/api/v1/second-chance/draw-config",parse:function(a){this.nextPageUrl=a.nextPageUrl;
this.prevPageUrl=a.previousPageUrl;
this.pageUrls=a.pageUrls;
this.currentPage=a.currentPage;
return a.drawConfigs
}});
portalGGA.EligibleMDRGames=Backbone.Collection.extend({model:portalGGA.models.EligibleGame,url:"/api/v1/second-chance/games",parse:function(a){this.nextPageUrl=a.nextPageUrl;
this.prevPageUrl=a.previousPageUrl;
this.pageUrls=a.pageUrls;
this.currentPage=a.currentPage;
return a.games
}});
portalGGA.models.EligibleMDRGame=Backbone.Model.extend({idAttribute:"gameId",gameName:null,amount:0,constructor:function EligibleMDRGame(){Backbone.Model.apply(this,arguments)
}});
!(function(b){portalGGA.models.WinningNumber=Backbone.Model.extend({idAttribute:"game-names",urlRoot:"/api/v1/draw-games/draws/",defaults:{"game-names":null,selections:null,"date-from ":null,"date-to ":null,"previous-draws ":null,"next-draws ":null,"status ":null},constructor:function a(){Backbone.Model.apply(this,arguments)
}})
}(Q));
!(function(a){portalGGA.WinningNumbers=Backbone.Collection.extend({model:portalGGA.models.WinningNumber,url:"/api/v1/draw-games/draws/page",parse:function(b){this.nextPageUrl=b.nextPageUrl;
this.prevPageUrl=b.previousPageUrl;
this.pageUrls=b.pageUrls;
this.currentPage=b.currentPage;
return b.draws
}})
}(Q));
(function(e,f,g,k){var i=portalGGA.constants&&portalGGA.constants.SESSION_TIMEOUT||1000*60*15;
var a={isAuthenticated:false};
function c(){var w=this,D={timeoutID:null,data:a},x=false,C=false,r=false,s=false;
_.extend(this,Backbone.Events);
this.data={account:new portalGGA.models.player.Account(),notifications:new portalGGA.SCNotifications(),verificationsChecked:false};
n();
this.willBeReady=f.when(e.ajax({url:"/session-check",dataType:"json",doNotTouchGK:true,doNotTouchLocal:true})).then(l,q).then(m);
function l(E){console.log("sessionChecked: ",E&&E.isAuthenticated," js-session before:",D.data.isAuthenticated);
D.data=E;
w.trigger("change",w);
return w
}function q(){return l(a)
}function m(){var E=g.get("session");
if(E&&E.redirectedLogin){w.trigger("loggedIn loggedIn:sync",w)
}return w
}e.cookie("sessionTimeout")>(new Date()).getTime();
if(portalGGA.utils.isAccountBalanceEnabled=="true"){this.data.account.fetch()
}function n(){var F=e.ajaxSetup();
var H=F.beforeSend;
function G(J,I){J.pipe(I.doNotTouchLocal!==true?w.touchLocal:null,I.doNotFilterGKResponse!==true?E:null);
if(I.doNotTouchGK){J.setRequestHeader("GK-Cookie",e.cookie("GK_AUTHE"))
}return H?H.apply(this,arguments):this
}function E(I){console.log("filterGK403Timeout",this,arguments);
if(I.status==403&&I.responseText&&I.getResponseHeader("Content-Type").indexOf("application/json")!==-1){var J=e.parseJSON(I.responseText);
if(J.code==="gatekeeper.explicitAuthenticationExpired"){t(J.redirect,{message:{code:"gatekeeper.explicitAuthenticationExpired",type:"alert-danger"}})
}else{if(J.error&&J.error==="SESSION_ALREADY_EXISTS"&&!J.isAuthorized){if(!s){s=true;
g.send("/en-us/home.html",{message:{code:"SESSION_ALREADY_EXISTS",type:"alert-danger"}})
}}else{if(J.error&&J.error==="SESSION_DOES_NOT_EXIST"&&!J.isAuthorized){if(!C){C=true;
g.send("/en-us/home.html",{message:{code:"SESSION_DOES_NOT_EXIST",type:"alert-danger"}})
}}else{if(J.error&&J.error==="SESSION_LIMITS_EXCEEDED"&&!J.isAuthorized){if(!x){x=true;
g.send("/en-us/home.html",{message:{code:"SESSION_LIMITS_EXCEEDED",type:"alert-danger"}})
}}else{if(J.error&&J.error==="SESSION_TIMED_OUT"&&!J.isAuthorized){if(!r){r=true;
g.send("/en-us/home.html",{message:{code:"SESSION_TIMED_OUT",type:"alert-danger"}})
}}}}}}}}e.ajaxSetup({beforeSend:G})
}e(document).ajaxError(function(H,E,G,F){if(E.status==401&&E.responseText&&E.getResponseHeader("Content-Type").indexOf("application/json")!==-1){var I=e.parseJSON(E.responseText);
if(I.code==="GEO_COMPLIANCE"){e(window).scrollTop(0);
portalGGA.utils.globalErrorNotifier.show(I)
}}else{if(E.status==442&&E.getResponseHeader("Content-Type").indexOf("application/json")!==-1){var I=e.parseJSON(E.responseText);
if(I.code&&I.code==="PLAYER_AUTHORIZATION_FAILED"){portalGGA.utils.globalErrorNotifier.show("PLAYER_SELF_EXCLUDED","alert-danger")
}}else{if(E.status==400&&E.responseText&&E.getResponseHeader("Content-Type").indexOf("application/json")!==-1){var I=e.parseJSON(E.responseText);
if(I.code&&I.code==="SESSION_ALREADY_EXISTS"){if(!s){s=true;
g.send("/en-us/home.html",{message:{code:"SESSION_ALREADY_EXISTS",type:"alert-danger"}})
}}else{if(I.code&&I.code==="SESSION_DOES_NOT_EXIST"){if(!C){C=true;
g.send("/en-us/home.html",{message:{code:"SESSION_DOES_NOT_EXIST",type:"alert-danger"}})
}}else{if(I.code&&I.code==="SESSION_LIMITS_EXCEEDED"){if(!x){x=true;
g.send("/en-us/home.html",{message:{code:"SESSION_LIMITS_EXCEEDED",type:"alert-danger"}})
}}else{if(I.code&&I.code==="SESSION_TIMED_OUT"){if(!r){r=true;
g.send("/en-us/home.html",{message:{code:"SESSION_TIMED_OUT",type:"alert-danger"}})
}}}}}}}}});
this.get=function B(E){return D.data[E]
};
this.isAuthenticated=function u(){return D.data.isAuthenticated
};
this.isLoyaltyAvailable=function y(){if(D.data.loyalty){return D.data.loyalty
}else{return false
}};
this.login=function v(G,H,J,I){var F=this;
portalGGA.utils.localStorage.remove("preferencestoBeDisplayThisTime");
F.pageRedirect=null;
if(I){F.pageRedirect=I
}return f.when(e.ajax("/gk/controller/AuthenticationServlet",{type:"POST",data:{gkl:G,gkp:H,gkafep:"/content/portal/services/session.parseGKResponse.json?reason=explicitAuthenticationFailed",gkep:"/content/portal/services/session.login.json",gkse:"/content/portal/services/session.parseGKResponse.json?reason=systemError",gkaid:"test",gkat:"1",gkflag:"1",gksi:"1",gkst:"gk_player_portal"},dataType:"json",doNotTouchLocal:true})).then(j).then(h).then(function E(K){console.info("login success",(K));
l(K.sessionCheck);
F.touchLocal();
sessionStorage.removeItem("quickcheckout");
K.account&&F.data.account.set(K.account);
sessionStorage.setItem("redirectResponse",K.redirect);
if(F.pageRedirect!="topNav"){if(J!==false){g.send(J||K.redirect,{message:null,session:{redirectedLogin:true}});
return false
}}F.trigger("loggedIn loggedIn:async",F);
return F
},b)
};
this.touchLocal=function(){console.info("session touchLocal");
if(!D.data.isAuthenticated){return false
}z();
o();
return w
};
function o(F){console.info("session startTimeout");
var E=new Date().getTime();
F||(F=E+i);
e.cookie("sessionTimeout",F,{path:"/",expires:new Date(F)});
D.timeoutID=window.setTimeout(p,F-E);
return D.timeoutID
}function z(){console.info("session stopTimeout");
window.clearTimeout(D.timeoutID);
return w
}function p(){console.info("session timeout()");
if(e.cookie("sessionTimeout")>(new Date()).getTime()){o(e.cookie("sessionTimeout"))
}else{w.logout(null,{message:{code:"session.timeout",type:"alert-danger"}})
}return w
}this.logout=function A(F,E){console.info("session logout",this,arguments);
return f.when(e.ajax("/gk/controller/LogoutServlet",{type:"GET",data:{gkep:"/content/portal/services/session.logout.json"},dataType:"json",doNotTouchLocal:true})).then(_.bind(t,w,F,E))
};
function t(G,F,E){w.data.account.clear();
z();
e.cookie("sessionTimeout",null,{path:"/"});
l(a);
w.trigger("loggedOut",w);
if(G!==false){g.send(G||E&&E.redirect,F||{message:null});
return false
}return w
}this.touchLocal()
}function j(l){if(l.firstLogin){console.log("Trigger first login process");
d();
return f.when(e.getJSON("/content/portal/services/session.login.json"))
}else{return l
}}function h(l){return f.when(e.ajax({url:"/session-check",dataType:"json",doNotTouchLocal:true,doNotTouchGK:true})).then(function m(n){l.sessionCheck=n;
return l
})
}function b(l){l&&l.responseText&&(l=e.parseJSON(l.responseText));
return f.reject(l)
}function d(){var l=document.cookie.match(/GK_(AUTHO|SERV)_[^=]*/g),m=l.length;
while(m--){console.log(l[m]);
e.cookie(l[m],null,{path:"/"})
}}portalGGA.utils.session=new c()
}(jQuery,Q,portalGGA.utils.redirect,portalGGA.utils.localStorage));
!(function(b){portalGGA.models.KenoFeed=Backbone.Model.extend({urlRoot:"/api/v1/draw-games/prize-stats?game-names=KENO",idAttribute:"_id",defaults:{date:null,shareCount:null,productId:null,calculateTime:null,drawCount:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.KenoFeeds=Backbone.Collection.extend({model:portalGGA.models.KenoFeed,url:"/api/v1/draw-games/prize-stats?game-names=KENO",parse:function(c){return c
}})
}());
!(function(){portalGGA.views.NotificationsChecker=Backbone.View.extend({constructor:function b(c){Backbone.View.apply(this,arguments);
this.isSecondChanceEnabled=c.isSecondChanceEnabled;
_.bindAll(this,"checkAndRenderNotifications");
portalGGA.utils.session.on("loggedIn",this.checkAndRenderNotifications)
},checkAndRenderNotifications:function a(){var d=this;
var e=(d.isSecondChanceEnabled==="true");
if(e){portalGGA.utils.session.data.notifications.fetch({cache:false}).then(function c(){var f=portalGGA.utils.session.data.notifications;
f=f.where({confirmationStatus:0});
if(f&&f.length>0){portalGGA.utils.globalErrorNotifier.show('You have <a href="/content/portal/en/vipclub-logged-in/notifications.html">Winnings Notifications </a>',"alert-success")
}})
}}})
}(jQuery));
!(function(){portalGGA.views.PushNotificationsChecker=Backbone.View.extend({events:{"click  button.btn-primary":"_upadteNotificationsStatus"},constructor:function o(r){Backbone.View.apply(this,arguments);
this.notifications=r.notifications||new portalGGA.models.player.Notifications();
this.detailsModal=new portalGGA.views.PushNotificationsItemDetails({el:$("#pushNotificationsDetailsModal"),pushNotificationsChecker:this});
_.bindAll(this,"renderPushNotifications");
var q=this;
q.pushNotificationsInterval=r.pushNotificationsInterval;
portalGGA.utils.session.willBeReady.then(function p(s){if(portalGGA.utils.session.isAuthenticated()){q.checkForNotification()
}else{portalGGA.utils.localStorage.remove("lastNotificationCheck");
portalGGA.utils.localStorage.remove("lastNotificationCount")
}})
},checkForNotification:function g(){var r=this,s=new Date().getTime(),p=portalGGA.utils.localStorage.get("lastNotificationCheck")||s,q=r.pushNotificationsInterval;
nextCheckIn=q;
if(s-p===0||s-p>=q){if($(".modal").is(".in")){nextCheckIn=60000
}else{console.log("[checking for notification]");
r.renderPushNotifications();
portalGGA.utils.localStorage.set("lastNotificationCheck",s)
}}else{nextCheckIn=q-(s-p)
}setTimeout(function(){r.checkForNotification()
},nextCheckIn)
},serialize:function n(){var p={channel:"EMAIL_CHANNEL,SMS_CHANNEL,PLAYER_PORTAL_CHANNEL,PUSH_GOOGLE_CHANNEL,PUSH_APPLE_CHANNEL",priority:0,read:false};
return p
},renderPushNotifications:function b(){var p=this;
portalGGA.utils.globalErrorNotifier.clear();
var r=this.serialize();
this.notifications.fetch({data:r,beforeSend:function(s){s.setRequestHeader("GK-Cookie",$.cookie("GK_AUTHE"))
}}).done($.proxy(this._populateResults,this)).fail(function q(s){console.warn("Error",this,arguments);
return s
})
},_populateResults:function f(){console.info("_populateResults",this,arguments);
var p=this,q=(p.notifications.length)?p.notifications.models:[],r=p.notifications.clone();
p.notifications.remove(p.notifications.models);
if(r.length){_.each(r.models,function(s){if(s.attributes.read===false){p.notifications.add(s)
}});
if(p.notifications.length&&p.notifications.length>0){$(".notification-header-count").html("<span class='sr-only'>My Notifications</span><i class='icon-messages'></i><span class='messages-count'>"+p.notifications.length+"</span>");
$(".notification-header-count-fluid").html("<span class='sr-only'>My Notifications</span><i class='icon-messages'></i><span class='messages-count'>"+p.notifications.length+"</span>");
portalGGA.utils.localStorage.set("lastNotificationCount",p.notifications.length)
}else{$(".notification-header-count").html("<i class='icon-messages'></i>")
}}else{$(".notification-header-count").html("<i class='icon-messages'></i>")
}},_upadteNotificationsStatus:function h(){var p=this;
p.notifications.id="self";
if(p.notifications.length){_.each(p.notifications.models,function(s){s.attributes.parameters.read="true"
});
p.notifications.save().done(function r(s){console.info("Succeess",this,arguments);
return s
}).fail(function q(s){console.warn("Error",this,arguments);
return s
})
}},createNotificationViews:function e(){var p=this;
p.notificationViews=p.notifications.map(function(q){return new portalGGA.views.PushNotificationsItem({model:q,template:notificationsItemTemplate,detailsModal:p.detailsModal,parent:p})
});
return p.notificationViews
},openModal:function a(){$(".modal").modal("hide");
this.modal.modal()
}});
portalGGA.views.PushNotificationsItem=Backbone.View.extend({tagName:"tr",events:{"click .read-notification":"readNotification","click .skip-notification":"skipNotification"},constructor:function d(p){Backbone.View.apply(this,arguments);
this.model=p.model||new portalGGA.models.player.Notifications();
this.template=p.template;
this.detailsModal=p.detailsModal;
this.parent=p.parent;
this.model.on("change",_.bind(this.render,this))
},render:function i(){this.$el.html(this.template(this.model.toJSON()));
return this.$el
},readNotification:function l(p){this.detailsModal.render({model:this.model,parent:this})
},skipNotification:function c(p){this.parent.notificationViews=_.without(this.parent.notificationViews,this);
if(this.parent.notificationViews.length<1){$(".modal").modal("hide")
}this.remove()
}});
portalGGA.views.PushNotificationsItemDetails=Backbone.View.extend({events:{"click .close":"closeNotificationDetails"},constructor:function m(p){Backbone.View.apply(this,arguments);
this.pushNotificationsChecker=p.pushNotificationsChecker
},render:function j(r){var p=this;
this.model=r.model;
this.parent=r.parent;
p.model.fetch({beforeSend:function(t){t.setRequestHeader("GK-Cookie",$.cookie("GK_AUTHE"))
}}).done(function s(t){if(t){p.$el.html(pushnotificationsDetailTemplate(p.model.toJSON()));
$(".modal").modal("hide");
$("#pushNotificationsDetailsModal").find(".modal").modal()
}}).fail(function q(t){console.warn("PushNotificationsItemDetailsRender Error",this,arguments);
t=$.parseJSON(t.responseText);
portalGGA.utils.globalErrorNotifier.show(t,"alert-danger");
return t
})
},closeNotificationDetails:function k(p){this.model.set("read",true);
this.model.save();
this.pushNotificationsChecker.notificationViews=_.without(this.pushNotificationsChecker.notificationViews,this.parent);
this.parent.remove();
if(this.pushNotificationsChecker.notificationViews.length>0){this.pushNotificationsChecker.openModal()
}}})
}(jQuery));
$(function documentReady_emailVerificationChecker(){var b;
portalGGA.utils.session.on("loggedIn",a);
function a(){b=b||new portalGGA.models.player.PersonalInfo();
return b.fetch().then(function c(){var d=b.get("emails");
return d&&d.PERSONAL&&d.PERSONAL.verified||portalGGA.utils.globalErrorNotifier.show("emailVerificationChecker.notVerified","alert-success")
}).fail(function(d){return portalGGA.utils.globalErrorNotifier.show(d,"alert-danger")
})
}if(CQURLInfo.runModes=="author"){portalGGA.utils.globalErrorNotifier.show("emailVerificationChecker.willBeVerified","alert-danger")
}});
$(function(){if(location.hash!==""){var b=location.hash.match(/tab-([^\/]*)/);
if(b){$('a[data-toggle="tab"][href="'+location.hash.replace("tab-","")+'"]').tab("show")
}}Backbone.Router.prototype.route("tab-:tabId","tab",function a(f){$("[data-role='tabs-dropdown']").val(location.hash.replace("tab-",""));
$('a[data-toggle="tab"][href="'+location.hash.replace("tab-","")+'"]').tab("show")
});
Backbone.Router.prototype.route("","",function d(){$("[data-role='tabs-dropdown']").val(location.hash);
$('a[data-toggle="tab"][href="'+location.hash+'"]').tab("show")
});
$(".tabNav>li>a").click(function c(g){g&&g.preventDefault();
var f=g.target.getAttribute("href");
var i=g.target.getAttribute("resourcePath");
var h=portalGGA.utils.communication.getByPath(i);
_.each(h,function(j){if(_.isFunction(j.handleTabNavigation)){j.handleTabNavigation()
}},{});
if(location.hash!==""){$('a[data-toggle="tab"][href="'+location.hash.replace("tab-","")+'"]').tab("show")
}else{$('[data-toggle="tab"]:first').tab("show")
}$(".nav-tabs a[href="+f+"]").tab("show");
location.hash="tab-"+g.target.hash.substr(1);
return false
});
$(".tabs-dropdown").change(function e(g){g&&g.preventDefault();
var f=$(".tabs-dropdown option:selected").val();
var i=$(".tabs-dropdown option:selected").attr("resourcePath");
var h=portalGGA.utils.communication.getByPath(i);
_.each(h,function(j){if(_.isFunction(j.handleTabNavigation)){j.handleTabNavigation()
}},{});
return false
})
});
$(document).ready(function(){portalGGA.utils.session.on("change",a);
a(portalGGA.utils.session);
function a(b){$(".breadcrumb-homelink").toggleClass("hide",b.isAuthenticated());
$(".breadcrumb-playerhomelink").toggleClass("hide",!b.isAuthenticated());
$('.breadcrumb li:contains("Error")').toggleClass("hide",true);
$('.breadcrumb li:contains("Content")').toggleClass("hide",true)
}if($('.breadcrumb li:contains("News Input")')){$('.breadcrumb li:contains("News Input")').next().toggleClass("hide",true);
$('.breadcrumb li:contains("News Input")').next().next().toggleClass("hide",true);
$('.breadcrumb li:contains("News Input")').toggleClass("hide",true)
}});
var navU=navigator.userAgent;
var isAndroidMobile=navU.indexOf("Android")>-1&&navU.indexOf("Mozilla/5.0")>-1&&navU.indexOf("AppleWebKit")>-1;
var regExAppleWebKit=new RegExp(/AppleWebKit\/([\d.]+)/);
var resultAppleWebKitRegEx=regExAppleWebKit.exec(navU);
var appleWebKitVersion=(resultAppleWebKitRegEx===null?null:parseFloat(regExAppleWebKit.exec(navU)[1]));
var isAndroidBrowser=isAndroidMobile&&appleWebKitVersion!==null&&appleWebKitVersion<537;
$(window).bind("load",function(){_init()
});
function _init(){var b={Android:function(){return navigator.userAgent.match(/Android/i)
},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)
},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)
},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)
},Windows:function(){return navigator.userAgent.match(/IEMobile/i)
},any:function(){return(b.Android()||b.BlackBerry()||b.iOS()||b.Opera()||b.Windows())
}};
if(isAndroidBrowser){$("body").addClass("android")
}var c=$(".slide-panel");
if(b.any()){c.on("click",function(){$(this).toggleClass("active")
});
$("body").addClass("touch")
}else{c.hover(function(){$(this).addClass("active")
},function(){$(this).removeClass("active")
});
$("nav .dropdown,nav .slideout-menu").hover(function(){$(this).addClass("open")
},function(){$(this).removeClass("open")
});
$("nav .dropdown > a").on("click",function(){window.location=$(this).attr("href")
});
$("nav .dropdown > a").focus(function(){$("nav .dropdown, nav .slideout-menu").removeClass("open");
$(this).closest("li").addClass("open")
});
$("nav .slideout-menu > a").focus(function(){$("nav .slideout-menu").removeClass("open");
$(this).closest("li").addClass("open")
});
$("nav .dropdown:last-child .dropdown-menu .nav li:last-child a").blur(function(){$("nav .dropdown").removeClass("open")
});
$("nav .dropdown > a").on("click",function(){window.location=$(this).attr("href")
});
var a=$('a[href^="tel"]');
a.each(function(d,e){var f=$(this);
var g=f.text();
f.after(g);
f.remove()
})
}}function pad(b,a){b=b.toString();
return b.length<a?pad("0"+b,a):b
}function addThousandsSeparator(b){var a=b;
if(parseFloat(b)){b=new String(b);
var c=b.split(".");
c[0]=c[0].split("").reverse().join("").replace(/(\d{3})(?!$)/g,"$1,").split("").reverse().join("");
a=c.join(".")
}return a
}function loading(b,c){var a='<div class="loading">  <div></div>  <div></div>  <div></div>  <div></div>  </div>';
if(c=="hide"){$(b).find(".loading").remove()
}else{$(b).html(a)
}}function tabUpate(){$('a[data-toggle="tab"]').on("shown.bs.tab",function(b){var a=$(b.target).attr("href");
console.log(a);
$("[data-role='tabs-dropdown']").val(a);
$('.nav-tabs a[href="'+a+'"]').tab("show")
})
}function modalBodyScrollable(){var d=$('[data-role="scrollable"]');
var b=768;
var c=$(window).width();
var a=$(window).height();
if(c<b){var e=200
}else{var e=230
}d.height(a-e)
}$(document).ready(function(){$("body a[href^='http://www.youtube'], body a[href^='http://new.livestream.com'], body a[href^='https://new.livestream.com']").attr("target","_blank");
if(!Modernizr.svg){$('img[src*="svg"]').attr("src",function(){return $(this).attr("src").replace(".svg",".png")
})
}if(isAndroidBrowser){$(".dropdown-menu a").on("click",function(){alert("link");
window.location.href=$(this).attr("href")
})
}var d=$(".snap-content");
var c=new Snap({element:document.getElementById("snapContent"),tapToClose:true,touchToDrag:false});
$('[data-toggle="mainNav"]').on("click",function(){if(c.state().state=="left"){c.close()
}else{c.open("left")
}});
$('[data-toggle="accountNav"]').on("click",function(){if(c.state().state=="right"){c.close()
}else{c.open("right")
}});
$("[data-link]").on("click",function(){var e=$(this).data("link");
window.location=e
});
$(".modal").on("show.bs.modal",function(){c.close();
modalBodyScrollable()
});
$('[data-toggle="popover"]').popover({placement:"top",trigger:"focus"});
$('.accordion .panel-heading a[data-toggle="collapse"]').on("click",function(){$(this).closest(".panel-heading").toggleClass("active")
});
var a=window.location.pathname.split("/");
var b=a[a.length-1];
$("[data-role='sidemenu-dropdown']").val(b);
$("[data-role='sidemenu-dropdown']").on("change",function(g){g.preventDefault();
var f=$(this).val();
window.location.href=f
});
$("[data-role='tabs-dropdown']").on("change",function(g){g.preventDefault();
var f=$(this).val();
$('.nav-tabs a[href="'+f+'"]').tab("show")
});
tabUpate();
$(".modal").on("shown.bs.modal",function(f){tabUpate()
});
$(".retailer-search-generic").on("click",function(f){f&&f.preventDefault();
$.validator.setDefaults({errorPlacement:function(h,i){h.insertAfter(i)
},highlight:function(j,h,i){$(j).closest(".form-group").addClass("has-error")
},unhighlight:function(j,h,i){$(j).closest(".form-group").removeClass("has-error")
},});
jQuery.validator.addMethod("retailerFormat",function(j,h){if(j!=""){var i=new RegExp("(^[a-zA-Z0-9 ]+)$");
return i.test(j)
}else{return true
}},CQ.I18n.getMessage("jquery.validate.plugin.retailerFormat"));
var e=$(".retail-search-footer form").validate({rules:{"retail-search-ZIPCODE":{required:true,retailerFormat:true}}});
if($(".retail-search-footer form").valid()){var g=$("#retail-search-ZIPCODE").val();
if(location.href.indexOf("/es/")!=-1){window.location.href="/content/portal/es/retailer.html?zipCity="+g
}else{window.location.href="/content/portal/en/retailer/findretailer.html?zipCity="+g
}}});
$(".clover-club-sections .bg-primary").matchHeight();
$(".annual-reports .bg-primary").matchHeight();
$(".giving-back-lp .bg-primary").matchHeight();
$(".draw-games-tiles > div > div").matchHeight();
$("#lotteryCommission .annual-reports .panel").matchHeight()
});
$.validator.setDefaults({onkeyup:false});
$.validator.addMethod("unique",function(f,c,a){if(!f){return true
}var e=$(a).toArray(),b=e.length;
while(b--){var d=e[b];
if(d!=c&&f==$(d).val()){return false
}}return true
});
$.validator.addMethod("allequals",function(g,c,a){if(!g){return true
}var f=$(a).toArray(),b=f.length,e=0;
while(b--){var d=f[b];
if(d!=c&&g==$(d).val()){e++
}}if(e==(f.length-1)){return false
}else{return true
}});
$.extend($.validator.messages,CQI18nJqueryValidateMessageMap);
(function(c,d,b){function a(){var i=this,g="analytics",f="google_analytics_data_layer",j="ga",h=[{name:"ga",params:["send","event","%section%","%element%","%action%"]},{name:"changeValue",params:["%this%","%key%","%values%"],controller:function(r,p,s){var o=c(r.currentTarget),m=s.split(","),q=o.data(p),n=m[0];
if(q==m[0]){n=m[1]
}o.data(p,n).attr("data-"+p,n)
}}],e=["click","mouseover","keydown"],l,k=1000;
this.init=function(){c(document).ready(function(){i.bindEvents()
})
};
this.getModule=function(n){var m=function(o){if(o.hitCallback!==undefined){o.hitCallback.apply(window)
}};
c.each(h,function(o,p){if(n==p.name&&(window[p.name]||p.controller)){if(p.controller){m=p.controller
}else{m=window[p.name]
}}});
return m
};
this.getModuleParams=function(n){var m=[];
c.each(h,function(o,p){if(n==p.name&&p.params!==undefined&&(window[p.name]!==undefined||p.controller!==undefined)){m=p.params
}});
return m
};
this.bindEvents=function(){c(document).ajaxComplete(i.ajaxCompleteEvent)
};
this.updateEvents=function(){var n,m;
i.removeEvents();
i.objects=i.getObjects();
i.objects.each(function(){n=c(this);
m=i.getObjectParams(n);
if(e.indexOf(m.event)!=-1){n.on(m.event+".analytics",i.handleObjectEvent.bind(m))
}})
};
this.removeEvents=function(){if(i.objects instanceof jQuery){i.objects.off(".analytics")
}};
this.getObjects=function(){return c("[data-"+g+"]").not("[data-"+g+"-module=queueGA]")
};
this.getObjectParams=function(n){var m={event:"click",module:j};
if(n instanceof jQuery){c.each(n.data(),function(o,p){if(o.indexOf(g)!=-1){o=String(o.replace(g,"")).toLowerCase();
if(o.length){m[o]=p
}}})
}else{console.warn("analytics::getObjectParams require jQuery object passed as parameter")
}return m
};
this.handleObjectEvent=function(n){var o=c(n.currentTarget),p=i.getObjectParams(o),m=i.getModule(p.module),q=i.buildCallback(o,p);
if(p.callback===undefined||String(p.callback).toLowerCase()!=="false"){n.preventDefault();
n.stopPropagation()
}m.apply(m,i.parseParameters(n,p,q))
};
this.buildCallback=function(m,n){if(n.callback!==undefined&&String(n.callback).toLowerCase()==="false"){return function(){}
}return function(){m.off(n.event+".analytics");
if(n.event=="click"){m.get(0).click()
}else{m.trigger(n.event)
}}.bind(m,n)
};
this.parseParameters=function(o,p,q){var n=i.getModuleParams(p.module),m=[];
if(n!==undefined){c.each(n,function(r,s){if(s[0]!=="%"){m.push(s)
}else{if(s.replace(/%/g,"")==="this"){m.push(o)
}else{m.push(p[s.replace(/%/g,"")]||"")
}}})
}if(q!==undefined){m.push({hitCallback:q})
}return m
};
this.ajaxCompleteEvent=function(n,o,m){clearTimeout(l);
l=setTimeout(i.updateEvents,k)
};
this.sendGroup=function(n,s){var u=c.Deferred(),o,q=i.getModule(n),m=c('[data-analytics-group="nj.analytics"]');
elementsParams=[];
m.each(function(){o=i.getObjectParams(c(this));
o.module=n;
elementsParams.push(o)
});
var p=0,r=elementsParams.length,t=function(){if(++p>=r){u.resolve()
}};
m.each(function(v){q.apply(q,i.parseParameters(null,elementsParams[v],t))
});
return u
};
this.setDataLayer=function(o,n){if(n!=undefined&&n==true){i.sendEcommerceAnalytics(o)
}else{if(!d){return false
}var m=JSON.parse(d.getItem(f))||[];
if(typeof m==="object"){m.push(o)
}d.setItem(f,JSON.stringify(m))
}return true
};
this.getAnalyticsSessionKey=function(){return f
};
this.sendEcommerceAnalytics=function(m){if(b.isFunction(ga)){ga("ecommerce:send")
}};
this.sendAnalyticsFromCache=function(){if(d){var m=JSON.parse(d.getItem(i.getAnalyticsSessionKey()));
if(m&&m.length){c.each(m,function(o,n){i.sendEcommerceAnalytics(n)
});
d.setItem(portalGGA.utils.analytics.getAnalyticsSessionKey(),"[]")
}}};
i.init();
return i
}portalGGA.utils.analytics=new a()
}(jQuery,sessionStorage,_));
!(function(d,i,e){portalGGA.views.TopNav=Backbone.View.extend({_loginComplete:Q.defer(),errorNotifier:null,_redirectURL:null,events:{"click .loginBar-logout":"logout","click .loginBar-logout-fluid":"logout","submit form":"login"},isMobile:{Android:function(){return navigator.userAgent.match(/Android/i)
},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)
},iOS:function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)
},Opera:function(){return/Opera Mini/i.test(navigator.userAgent)
},Windows:function(){return/IEMobile/i.test(navigator.userAgent)
},any:function(){return(this.Android()||this.BlackBerry()||this.iOS()||this.Opera()||this.Windows())
}},constructor:function a(p){Backbone.View.apply(this,arguments);
this.createErrorNotifier();
this.template={loggedOut:_.template(this.$(".topNav-notLoggedIn").html()),loggedInWithoutLoyalty:_.template(this.$(".topNav-loggedIn").html()),loggedInWithLoyalty:_.template(this.$(".topNav-loggedIn-loyalty").html()),topRightNavLoggedOut:_.template(this.$(".topRightNav-notLoggedIn").html()),topRightNavWithoutLoyalty:_.template(this.$(".topRightNav-loggedInWithoutLoyalty").html()),topRightNavWithLoyalty:_.template(this.$(".topRightNav-loggedInWithLoyalty").html()),rightNavLoggedOut:_.template(this.$(".rightNav-notLoggedIn").html()),rightNavWithoutLoyalty:_.template(this.$(".rightNav-loggedInWithoutLoyalty").html()),rightNavWithLoyalty:_.template(this.$(".rightNav-loggedInWithLoyalty").html())};
var o=this;
_.bindAll(this,"render");
o.ackIndexArr=[];
var r=p.expiryDaysofAffiliateCoookie;
portalGGA.variables["tracking_campaign_id.cookie.expires"]=r;
if(!portalGGA.utils.getCookie(portalGGA.variables.tracking_campaign_id)){var q=portalGGA.utils.getTrackingCampaignId();
if(q){portalGGA.utils.writeTrackingCampaignIdCookie(q)
}}i.willBeReady.then(function n(s){if(s.isAuthenticated()){if(location.pathname.indexOf("vipclub/signup")!=-1||location.pathname.indexOf("forgotPassword")!=-1){location.pathname="/en-us/home.html"
}}o.render();
o.bindMenuHover();
return o
});
o.winnerNotifications=new portalGGA.models.player.LoginNotifications()
},render:function c(){console.info("TopNav render",i.isAuthenticated());
var q="";
var n="";
var p="";
var o=this;
delete this._loginComplete;
this._loginComplete=Q.defer();
jQuery.validator.setDefaults({highlight:function(v,t,u){if(v.type==="radio"||v.type==="checkbox"){this.findByName(v.name).addClass(t).removeClass(u)
}else{if(d(v).parent().hasClass("input-inline")||d(v).parent().hasClass("input-group")){d(v).closest(".form-group").addClass("has-error")
}else{d(v).closest(".form-group").removeClass("has-success").addClass("has-error has-feedback");
d('<span class="glyphicon glyphicon-remove form-control-feedback"></span>').insertAfter(v)
}}},unhighlight:function(v,t,u){if(v.type==="radio"||v.type==="checkbox"){this.findByName(v.name).removeClass(t).addClass(u)
}else{if(d(v).parent().hasClass("input-inline")||d(v).parent().hasClass("input-group")){d(v).closest(".form-group").removeClass("has-error")
}else{d(v).closest(".form-group").removeClass("has-error has-feedback");
d(v).parent().find("span.glyphicon").remove()
}}},errorPlacement:function(t,u){if(u.parent(".input-group").length||u.prop("type")==="checkbox"||u.prop("type")==="radio"){d("label.login-error").text("");
t.insertAfter(u.parent())
}else{if(d(u).parent().hasClass("input-inline")||d(u).parent().hasClass("input-group")){d("label.login-error").text("");
d(u).closest(".form-group").find(">div").append(t)
}else{d("label.login-error").text("");
t.insertAfter(u)
}}}});
var s=0;
if(i.isAuthenticated()){var r=i.data.account.get("balances");
if(r&&r.points){q=this.template.loggedInWithLoyalty();
n=this.template.topRightNavWithLoyalty();
p=this.template.rightNavWithLoyalty()
}else{q=this.template.loggedInWithoutLoyalty();
n=this.template.topRightNavWithoutLoyalty();
p=this.template.rightNavWithoutLoyalty()
}var s=portalGGA.utils.localStorage.get("lastNotificationCount")||0
}else{q=this.template.loggedOut();
n=this.template.topRightNavLoggedOut();
p=this.template.rightNavLoggedOut()
}this.$el.find("li:not(.topNav-cartWidget)").remove();
this.$el.find("#leftNav").append(q);
this.$el.find("#rightNav").append(p);
this.$el.find("#topRightNav").append(n);
this.$el.find("#leftNavFluid").append(q);
this.$el.find("#rightNavFluid").append(p);
this.$el.find("#leftNavFluid").append(n);
this.$el.find(".shopping-cart-widget").show();
d(".playerfirstname").text(i.get("name"));
d(".playerNameVIPClub").text(i.get("name"));
if(s&&s!=0){d(".notification-header-count").html("<span class='sr-only'>My Notifications</span><i class='icon-messages'></i><span class='messages-count'>"+s+"</span>");
d(".notification-header-count-fluid").html("<span class='sr-only'>My Notifications</span><i class='icon-messages'></i><span class='messages-count'>"+s+"</span>")
}d(".login-error").on("click",".close",function(){d("span.close").first().hide();
d(".login-error").removeClass("fade in")
});
d("#loginForm").validate({errorPlacement:function(t,u){d("span.close").first().show();
d("#loginForm").find(".login-error").removeClass("fade in").addClass("fade in").find(".errorNotifier").html(t)
}});
d("#leftNav").find("script.topNav-notLoggedIn").remove();
d("#leftNav").find("script.topNav-loggedIn").remove();
d("#leftNav").find("script.topNav-loggedIn-loyalty").remove();
return this._loginComplete.promise
},createErrorNotifier:function(){if(!this.errorNotifier){this.errorNotifier=new portalGGA.utils.LoginErrorNotifier(this.$(".errorNotifier"))
}},login:function j(s){s&&s.preventDefault();
portalGGA.utils.localStorage.remove("preferencestoBeDisplayThisTime");
if(this.$("form").valid()){var o=this,q=this.$("[type=submit]");
q.button("loading");
errorNotifier=new portalGGA.utils.LoginErrorNotifier(d(".errorNotifier"));
d(".login-error").removeClass("fade in");
if(o.isMobile.any()!=false){d("label.login-error").removeClass("error");
d("label.login-error").text("")
}errorNotifier.clear();
var u=this.$("[name=loginModal-username]").val();
var p=this.$("[name=loginModal-password]").val();
console.log("Starting login for "+u,this,this._loginComplete);
return Q.when(portalGGA.utils.session.login(u,p,this._redirectURL,"topNav")).then(function t(){console.log("Login processed for "+u,o,o._loginComplete);
o.getNotification();
o.hide();
q.button("reset");
return o._loginComplete.resolve(o)
},function r(y){console.log("Authentication error occurred",y);
var w=992;
var x=d(window).width();
var v=d(window).height();
if(o.isMobile.any()!=false){if(x>v){d("#loginForm").find(".login-error").addClass("fade in");
d("span.close").first().show();
return errorNotifier.show(y,"").then(function(){q.button("reset");
return Q.reject(y)
})
}else{d("label.login-error").addClass("error").append(CQ.I18n.getMessage(y.code));
d("label.login-error").removeAttr("style");
q.button("reset");
return Q.reject(y)
}}else{if(x<w){d("label.login-error").addClass("error").append(CQ.I18n.getMessage(y.code));
d("label.login-error").removeAttr("style");
q.button("reset");
return Q.reject(y)
}else{d("#loginForm").find(".login-error").addClass("fade in");
d("span.close").first().show();
return errorNotifier.show(y,"").then(function(){q.button("reset");
return Q.reject(y)
})
}}}).fin(function n(){sessionStorage.removeItem("checkout");
sessionStorage.removeItem("quickcheckout")
})
}return Q.reject("validation")
},getNotification:function l(){var n=this;
n.winnerNotifications.fetch({cache:false}).done(function o(q){var r=q.totalPages;
var s=q.currentPage;
n.mdrNotifArray=q.notifications;
if(s!==r&&q.nextPageUrl!==null){n.winnerNotifications.url=q.nextPageUrl;
n._getNextNotifications()
}else{n._showNotifyPopup(n.mdrNotifArray)
}}).fail(function p(q){n.redirectPage()
})
},_getNextNotifications:function b(){var n=this;
n.winnerNotifications.fetch({cache:false}).done(function o(q){var s=q.totalPages;
var t=q.currentPage;
for(var r=0;
r<q.notifications.length;
r++){n.mdrNotifArray.push(q.notifications[r])
}if(t!==s&&q.nextPageUrl!==null){n.winnerNotifications.url=q.nextPageUrl;
n._getNextNotifications()
}else{n._showNotifyPopup(n.mdrNotifArray)
}}).fail(function p(q){console.warn("Error",this,arguments);
n.$(".preloader_big").fadeOut();
if(q.status==403){portalGGA.utils.globalErrorNotifier.show("notification-preferences.error","alert-danger");
return Q.reject(q)
}else{q&&q.responseText&&(q=d.parseJSON(q.responseText));
portalGGA.utils.globalErrorNotifier.show(q,"alert-danger");
return Q.reject(q)
}})
},_showNotifyPopup:function k(u){var v=this;
d("#winning_tick_div").html('<tr><th colspan="2"><i class="icon-my-tickets"></i>Your Qualifying Tickets Are:</th></tr>');
var p=_.template(d(".modalWinnerNoify").html());
var t=[];
d("body").append(p);
var s;
for(var r=0;
r<u.length;
r++){if(d.inArray(u[r].notificationId,v.ackIndexArr)==-1){if(u[r].drawGroupName.indexOf("MDR")!=-1&&u[r].alternate==true){d("#winName").html("You're an Alternate Semi-Finalist")
}else{d("#winName").html("You're a Semi-Finalist")
}d("#draw_name").html(u[r].drawName);
if(u[r].drawDate!=null){}if(u[r].drawClaimByDate!=null){d("#claim_date").html(portalGGA.utils.formattedLongDate(u[r].drawClaimByDate,true))
}var o=u[r].winningTickets.length;
var n;
for(var q=0;
q<o;
q++){if(q%2==0&&q==0){n="<tr>"
}n+='<td class="mob-alert__td-full">'+u[r].winningTickets[q]+"<td>";
if(q%2==0||q==o-1){n+="</tr>"
}}d("#winning_tick_div").append(n);
if(u[r].prizePrice!=null){d("#prize_amt").html(u[r].prizeDescription)
}if(u[r].drawGroupName.indexOf("MDR")!=-1&&u[r].alternate==true){d("#prize_amt").html("Alternate Semi-Finalist")
}s=r;
v.ackIndexArr.push(u[r].notificationId);
t.push(u[r]);
break
}}if(t.length>0){d("#winnerNotiModal").modal({keyboard:false,backdrop:"static"})
}else{v.redirectPage()
}d(".acknowledge_btn").on("click",function(){var w={notificationId:v.mdrNotifArray[s].notificationId};
d.ajax("/api/v1/second-chance/players/self/notifications",{type:"PUT",dataType:"json",data:JSON.stringify(w),contentType:"application/json",success:function(y,A,x){var z=_.template(d(".claimInstNotify").html());
d("body").append(z);
d("#claimInst").modal({keyboard:false,backdrop:"static"});
d(".claim_btn").on("click",function(){if(v.mdrNotifArray[s].alternate==false){window.open("/en-us/mdr-semifinalist.html")
}else{window.open("/en-us/mdr-alternate.html")
}v._clearPopup();
v._showNotifyPopup(v.mdrNotifArray)
})
},error:function(x,z,y){v.redirectPage()
}})
})
},redirectPage:function g(){var o=this;
var n=sessionStorage.getItem("redirectResponse");
e.send(o.redirectURL||n,{message:null,session:{redirectedLogin:true}});
return false
},_clearPopup:function h(){d("#draw_name").html("N/A");
d("#claim_date").html("N/A");
d("#prize_amt").html("N/A")
},logout:function m(n){n&&n.preventDefault();
return i.logout()
},bindMenuHover:function f(n){var o=d(".slide-panel");
if(this.isMobile.any()){o.on("click",function(){d(this).toggleClass("active")
});
d("body").addClass("touch")
}else{o.hover(function(){d(this).addClass("active")
},function(){d(this).removeClass("active")
});
d("nav .dropdown,nav .slideout-menu").hover(function(){d(this).addClass("open")
},function(){d(this).removeClass("open")
});
d("nav .dropdown > a").on("click",function(){window.location=d(this).attr("href")
})
}}})
}(jQuery,portalGGA.utils.session,portalGGA.utils.redirect));
!(function(b){portalGGA.models.FastPlayGame=Backbone.Model.extend({urlRoot:"/api/v1/fastplay-games/games/",idAttribute:"gridId",defaults:{gridId:null,gridSize:null,ticketPrice:null,startDateMillis:null,endDateMillis:null,startDate:null,endDate:null,name:null,gridStatus:null,prizeTiers:{}},constructor:function a(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.FastPlayGames=Backbone.Collection.extend({model:portalGGA.models.FastPlayGame,url:"/api/v1/fastplay-games/games/",parse:function(c){return c&&c.games
}})
}());
!(function(b){portalGGA.models.FastPlayLuckyLocation=Backbone.Model.extend({urlRoot:"/api/v1/locations/fastplay-luckylocations/",idAttribute:"_id",defaults:{gameName:null,dateMillis:null,date:null,name:null,address1:null,address2:null,city:null,id:null,prizeAmount:null,prize:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.FastPlayLuckyLocations=Backbone.Collection.extend({model:portalGGA.models.FastPlayLuckyLocation,url:"/api/v1/locations/fastplay-luckylocations?size=500&days=30",parse:function(c){return c&&c.luckyLocations
}})
}());
!(function(b){portalGGA.models.LuckyLocation=Backbone.Model.extend({urlRoot:"/api/v1/locations/luckylocations-feed?days=30",idAttribute:"_id",defaults:{gameName:null,dateMillis:null,date:null,name:null,address1:null,address2:null,city:null,id:null,prizeAmount:null,prize:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.LuckyLocations=Backbone.Collection.extend({model:portalGGA.models.LuckyLocation,url:"/api/v1/locations/luckylocations-feed?days=30",parse:function(c){return c
}})
}());
(function(a,b,d){portalGGA.views.FastplayGameJackpot=Backbone.View.extend({constructor:function e(f){Backbone.View.apply(this,arguments);
this.gameId=f.gameId;
this.container=f.el;
this.imageUrl=f.imageUrl;
this.imageUrl2x=f.imageUrl2x;
this.fastplaygame=f.fastPlayGame||new portalGGA.models.FastPlayGame();
this.fastplaygame.set("gridId",this.gameId);
this.fastplaygame.fetch().then(b.bind(this._displayFastPlayGame,this))
},_displayFastPlayGame:function c(){var g=this;
var f=g.fastplaygame.toJSON();
if(f.jackpotInfo){$(".amount").html("$"+portalGGA.utils.formattedAmount(f.jackpotInfo.jackpotAmount/100));
var i="As of: ";
if(f.jackpotInfo){$(".jersey-jackpot-date").html(i+portalGGA.utils.formattedLongDate(f.jackpotInfo.time,true)+" "+portalGGA.utils.formattedHoursMinutes(f.jackpotInfo.time,true))
}var h={imageUrl:g.imageUrl,imageUrl2x:g.imageUrl2x};
$(".instants-gamepage-thumb").html(fastplaygameImageTemplate({fastplayJsonData:h}))
}window.picturefill();
return this.$el
}})
}(portalGGA.models.FastPlayGame,_,portalGGA.utils.session));
!(function(c,d){portalGGA.views.FeedbackFormView=Backbone.View.extend({currentStep:0,steps:null,events:{"click #submitConfirm":"_submitForm"},constructor:function b(f){Backbone.View.apply(this,arguments);
if(f.successUrl.indexOf(".html")==-1&&f.successUrl.indexOf("/content/")!=-1){f.successUrl=f.successUrl+".html"
}var g=f.successUrl;
portalGGA.utils.session.willBeReady.then(function e(i){if(i!=null&&i.get("email")!=undefined){c("#email").val(i.get("email"));
c("#fullname").val(i.get("name")+" "+i.get("surname"))
}});
c("#feedback_form").validate({rules:{field:{required:true,email:true}}});
var h=this._getUrlParam().gameName;
c("#submitConfirm").on("click",function(){var i=[];
var k=c("#email").val();
var j={comments:c("#comments").val(),additionalParams:{emailid:k,gameName:h}};
if(c("#feedback_form").valid()){c.ajax("/api/v1/players/feedback",{type:"POST",dataType:"json",data:JSON.stringify(j),contentType:"application/json",success:function(m,n,l){location.href=g
},error:function(l,n,m){c("#messageBar").html("");
c("#messageBar").addClass("show");
c("#messageBar").removeClass("hide");
if(m=="Unauthorized"){portalGGA.utils.globalErrorNotifier.show("Please login","alert-danger")
}else{portalGGA.utils.globalErrorNotifier.show("Internal server error,please try again later","alert-danger")
}c("#messageBar").focus()
}});
return false
}})
},_getUrlParam:function a(){var e=this;
var f={};
location.href.substring(1).replace(/[?&]+([^=&]+)=([^&]*)/gi,function(i,g,h){f[g]=h
});
return f
}})
}(jQuery,portalGGA.utils.session));
(function(a,b,c){portalGGA.views.WinnerAwareness=Backbone.View.extend({constructor:function e(f){Backbone.View.apply(this,arguments);
this.el=f.el;
this.displayGame=f.displayGame||new portalGGA.models.LuckyLocation();
this.displayGame.fetch().then(b.bind(this._displayWinner,this));
if(sessionStorage.getItem("winnerData")){$.cookie("winnerData",null)
}},_displayWinner:function d(){var f=this;
var h=f.displayGame.toJSON();
var k=0;
b.each(h,function(l,m){if(l!=null&&l.gameName){k=parseInt(m)+1
}});
if(k>0){var j=Math.floor(Math.random()*k)
}var g;
var i={randomNo:j};
b.each(h,function(m,o){if(o==j){$(""+f.el).addClass("winner-awareness");
m.city=m.city.replace(m.city.charAt(0),m.city.charAt(0).toUpperCase());
if(m.lattitude!=null){$.cookie("winnerData",JSON.stringify(m))
}$(".winner-awareness").html(winnerAwarenessTemplate({winnerData:m,data:i}));
var n=$(".winner-awareness");
var p="";
var l="";
if(m.productId==12){n.removeClass().addClass("winner-awareness powerball");
p="/en-us/drawgames/jackpotgames/powerball.html"
}else{if(m.productId==13){n.removeClass().addClass("winner-awareness cash4life");
p="/en-us/drawgames/cash4life.html"
}else{if(m.productId==23){n.removeClass().addClass("winner-awareness megamillions");
p="/en-us/drawgames/jackpotgames/megamillions.html"
}else{if(m.gameName=="$10 Jersey Jackpot"||m.gameType=="FASTPLAY"){n.removeClass().addClass("winner-awareness fastplay");
p="/en-us/fastplay.html"
}else{if(m.productId==10){n.removeClass().addClass("winner-awareness jerseycash5");
p="/en-us/drawgames/dailygames/jerseycash.html"
}else{if(m.productId==11){n.removeClass().addClass("winner-awareness pick6");
p="/en-us/drawgames/jackpotgames/pick6lotto.html"
}else{if(m.productId==14){n.removeClass().addClass("winner-awareness cardcash");
p="/en-us/drawgames/5CardCash.html"
}else{if(m.gameType=="INSTANT"){n.removeClass().addClass("winner-awareness instant-games");
p="/en-us/instant-games.html"
}else{if(m.productId==22){n.removeClass().addClass("winner-awareness keno");
p="/en-us/drawgames/quickDraw.html"
}}}}}}}}}$(".winner-awareness").attr("style","background-color:"+l);
if(location.href.indexOf("/es/")!=-1){$("#retailerLink").attr("href","/content/portal/es/retailer.html?from_winner_awareness")
}else{$("#retailerLink").attr("href","/en-us/retailer.html?from_winner_awareness")
}$("#linkUrl").attr("href",""+p+"?from_winner_awareness")
}})
}})
}(portalGGA.models.LuckyLocation,_,portalGGA.utils.session));
(function(h,n,i){portalGGA.views.TicketChecker=Backbone.View.extend({isMobile:{Android:function(){return navigator.userAgent.match(/Android/i)
},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)
},iOS:function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)
},Opera:function(){return/Opera Mini/i.test(navigator.userAgent)
},Windows:function(){return/IEMobile/i.test(navigator.userAgent)
},any:function(){return(this.Android()||this.BlackBerry()||this.iOS()||this.Opera()||this.Windows())
}},events:{"click .submit-ticket":"_submitForm","change [name=tcTicketType]":"_changePage","click #modalTcDrawGame":"openDrawGamesModal","click #modalTcInstantGames":"openInstantGamesModal","click .trbutton":"backtotc","click .retailerbutton":"retailerPage"},drawGameTicketEntry:"",instantGameTicketEntry:"",tabSelected:"",constructor:function m(q){Backbone.View.apply(this,arguments);
console.log("in ticket constructor");
this.options=q;
if(!this.isMobile.any()){portalGGA.utils.forms.automaticTab(this.$("input.autoTab-ticketNumber"))
}jQuery.validator.setDefaults({onkeyup:function(r){$(r).valid()
},highlight:function(t,r,s){if($(t).closest(".form-group").parent().hasClass("ticket-front")||$(t).closest(".form-group").parent().hasClass("ticket-back")){$(t).closest(".form-group").parent().removeClass("has-success").addClass("has-error").find("span").remove();
$(t).parent().find("span.glyphicon").remove()
}else{$(t).closest(".form-group").parent().removeClass("has-success").addClass("has-error").find("span").remove();
$(t).parent().find("span.glyphicon").remove()
}},unhighlight:function(t,r,s){if($(t).closest(".form-group").parent().hasClass("ticket-front")||$(t).closest(".form-group").parent().hasClass("ticket-back")){$(t).closest(".form-group").parent().removeClass("has-error").addClass("has-success has-feedback").find("span").remove();
$(t).closest(".form-group").parent().parent().find("has-error has-feedback").removeClass("has-error").addClass("has-success").find("span").remove();
$(t).parent().find("span.glyphicon").remove()
}else{$(t).closest(".form-group").parent().removeClass("has-error").addClass("has-success").find("span").remove();
$(t).parent().find("span.glyphicon").remove()
}},errorPlacement:function(r,s){if(s.parent(".input-group").length||s.prop("type")==="checkbox"||s.prop("type")==="radio"){r.insertAfter(s.parent())
}else{if($(s).parent().hasClass("input-inline")||$(s).parent().hasClass("input-group")){$(s).closest(".form-group").find(">div").append(r)
}else{if($(s).parent().hasClass("input-inline")||$(s).parent().hasClass("input-group")){$(s).closest(".form-group").find(">div").append(r)
}else{if(s.attr("id")=="tcInstantGameEntry1"||s.attr("id")=="tcInstantGameEntry2"||s.attr("id")=="tcInstantGameEntry3"||s.attr("id")=="tcInstantGameEntry4"||s.attr("id")=="tcInstantGameEntry5"){$(s).closest(".form-group").parent().parent().find(".error").remove();
$(s).closest(".form-group").parent().parent().append(r)
}else{if(s.attr("id")=="tcTicketEntry1"||s.attr("id")=="tcTicketEntry2"||s.attr("id")=="tcTicketEntry3"){$(s).closest(".form-group").parent().append(r)
}else{r.insertAfter(s)
}}}}}}});
jQuery.validator.addMethod("instantTicketNumberValidate",function(x,s){$(s).attr("data-numberValidate","true");
var y=JSON.parse($("#tcInstantGameEntry1").attr("data-instantNumberValidate"));
var w=JSON.parse($("#tcInstantGameEntry2").attr("data-instantNumberValidate"));
var u=JSON.parse($("#tcInstantGameEntry3").attr("data-instantNumberValidate"));
var t=JSON.parse($("#tcInstantGameEntry4").attr("data-instantNumberValidate"));
var r=JSON.parse($("#tcInstantGameEntry5").attr("data-instantNumberValidate"));
if(y&&w&&u&&t&&r){if(x!=""){if($(s).val().length==$(s).prop("maxlength")){this.settings.messages.ticketNumber=CQ.I18n.get("jquery.validate.plugin.instantTicketNumberValidate");
var v=$('input[name="tcInstantGameEntry1"]').val()+$('input[name="tcInstantGameEntry2"]').val()+$('input[name="tcInstantGameEntry3"]').val()+$('input[name="tcInstantGameEntry4"]').val()+$('input[name="tcInstantGameEntry5"]').val();
return this.optional(s)||v.length>0&&v.length==28&&!isNaN(v)
}else{return false
}}else{return true
}}else{return true
}},function(s,r){return CQ.I18n.get(this.settings.messages.ticketNumber)
});
jQuery.validator.addMethod("drawTicketNumberValidate",function(v,r){$(r).attr("data-drawNumberValidate","true");
var w=JSON.parse($("#tcTicketEntry1").attr("data-drawNumberValidate"));
var u=JSON.parse($("#tcTicketEntry2").attr("data-drawNumberValidate"));
var s=JSON.parse($("#tcTicketEntry3").attr("data-drawNumberValidate"));
if(w&&u&&s){if(v!=""){if($(r).val().length==$(r).prop("maxlength")){this.settings.messages.ticketNumber=CQ.I18n.get("jquery.validate.plugin.drawTicketNumberValidate");
var t=$('input[name="tcTicketEntry1"]').val()+$('input[name="tcTicketEntry2"]').val()+$('input[name="tcTicketEntry3"]').val();
return this.optional(r)||t.length>0&&t.length==19&&!isNaN(t)
}else{return false
}}else{return true
}}else{return true
}},function(s,r){return CQ.I18n.get(this.settings.messages.ticketNumber)
});
jQuery.validator.addMethod("instantTicketRequired",function(w,s){$(s).attr("data-instantNumberValidate","true");
var x=JSON.parse($("#tcInstantGameEntry1").attr("data-instantNumberValidate"));
var v=JSON.parse($("#tcInstantGameEntry2").attr("data-instantNumberValidate"));
var u=JSON.parse($("#tcInstantGameEntry3").attr("data-instantNumberValidate"));
var t=JSON.parse($("#tcInstantGameEntry4").attr("data-instantNumberValidate"));
var r=JSON.parse($("#tcInstantGameEntry5").attr("data-instantNumberValidate"));
if(x&&v&&u&&t&&r){if(w!=""){return w.indexOf(" ")<0&&w!=""
}else{return false
}}else{return false
}},CQ.I18n.getMessage("jquery.validate.plugin.ticketNumberRequired"));
jQuery.validator.addMethod("drawTicketRequired",function(u,r){$(r).attr("data-drawNumberValidate","true");
var v=JSON.parse($("#tcTicketEntry1").attr("data-drawNumberValidate"));
var t=JSON.parse($("#tcTicketEntry2").attr("data-drawNumberValidate"));
var s=JSON.parse($("#tcTicketEntry3").attr("data-drawNumberValidate"));
if(v&&t&&s){if(u!=""){return u.indexOf(" ")<0&&u!=""
}else{return false
}}else{return false
}},CQ.I18n.getMessage("jquery.validate.plugin.ticketNumberRequired"));
this.$("#tcForm").validate({rules:{tcTicketEntry1:{drawTicketRequired:true,drawTicketNumberValidate:true},tcTicketEntry2:{drawTicketRequired:true,drawTicketNumberValidate:true},tcTicketEntry3:{drawTicketRequired:true,drawTicketNumberValidate:true},tcInstantGameEntry1:{instantTicketRequired:true,instantTicketNumberValidate:true},tcInstantGameEntry2:{instantTicketRequired:true,instantTicketNumberValidate:true},tcInstantGameEntry3:{instantTicketRequired:true,instantTicketNumberValidate:true},tcInstantGameEntry4:{instantTicketRequired:true,instantTicketNumberValidate:true},tcInstantGameEntry5:{instantTicketRequired:true,instantTicketNumberValidate:true}},groups:{drawTicketRequired:"tcTicketEntry1 tcTicketEntry2 tcTicketEntry3",instantTicketRequired:"tcInstantGameEntry1tcInstantGameEntry2tcInstantGameEntry3tcInstantGameEntry4tcInstantGameEntry5",drawTicketNumberValidate:"tcTicketEntry1 tcTicketEntry2 tcTicketEntry3",instantTicketNumberValidate:"tcInstantGameEntry1tcInstantGameEntry2tcInstantGameEntry3tcInstantGameEntry4tcInstantGameEntry5"},messages:{drawTicketNumberValidate:CQ.I18n.getMessage("jquery.validate.plugin.drawTicketNumberValidate"),instantTicketNumberValidate:CQ.I18n.getMessage("jquery.validate.plugin.instantTicketNumberValidate"),tcTicketEntry1:{minlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMinlength"),maxlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMaxlength"),drawTicketRequired:CQ.I18n.getMessage("jquery.validate.plugin.ticketNumberRequired")},tcTicketEntry2:{minlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMinlength"),maxlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMaxlength"),drawTicketRequired:CQ.I18n.getMessage("jquery.validate.plugin.ticketNumberRequired")},tcTicketEntry3:{minlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMinlength"),maxlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMaxlength"),drawTicketRequired:CQ.I18n.getMessage("jquery.validate.plugin.ticketNumberRequired")},tcInstantGameEntry1:{minlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMinlength"),maxlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMaxlength"),instantTicketRequired:CQ.I18n.getMessage("jquery.validate.plugin.ticketNumberRequired")},tcInstantGameEntry2:{minlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMinlength"),maxlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMaxlength"),instantTicketRequired:CQ.I18n.getMessage("jquery.validate.plugin.ticketNumberRequired")},tcInstantGameEntry3:{minlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMinlength"),maxlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMaxlength"),instantTicketRequired:CQ.I18n.getMessage("jquery.validate.plugin.ticketNumberRequired")},tcInstantGameEntry4:{minlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMinlength"),maxlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMaxlength"),instantTicketRequired:CQ.I18n.getMessage("jquery.validate.plugin.ticketNumberRequired")},tcInstantGameEntry5:{minlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMinlength"),maxlength:CQ.I18n.getMessage("jquery.validate.plugin.phoneMaxlength"),instantTicketRequired:CQ.I18n.getMessage("jquery.validate.plugin.ticketNumberRequired")}},errorPlacement:function(r,s){if(s.parent(".input-group").length||s.prop("type")==="checkbox"||s.prop("type")==="radio"){r.insertAfter(s.parent())
}else{if($(s).parent().hasClass("input-inline")||$(s).parent().hasClass("input-group")){$(s).closest(".form-group").find(">div").append(r)
}else{if($(s).parent().hasClass("input-inline")||$(s).parent().hasClass("input-group")){$(s).closest(".form-group").find(">div").append(r)
}else{if(s.attr("id")=="tcInstantGameEntry1"||s.attr("id")=="tcInstantGameEntry2"||s.attr("id")=="tcInstantGameEntry3"||s.attr("id")=="tcInstantGameEntry4"||s.attr("id")=="tcInstantGameEntry5"){$(s).closest(".form-group").parent().parent().find(".error").remove();
$(s).closest(".form-group").parent().parent().append(r)
}else{if(s.attr("id")=="tcTicketEntry1"||s.attr("id")=="tcTicketEntry2"||s.attr("id")=="tcTicketEntry3"){$(s).closest(".form-group").parent().append(r)
}else{r.insertAfter(s)
}}}}}}})
},_submitForm:function c(G){G&&G.preventDefault();
var B=this;
var t=$(this).find("#tcForm");
var x=$("#tcResult");
var C=$("#tcResultWinners").html();
var u=$("#tcResultNoWinners").html();
var D=t.find('[type="submit"]').button("loading");
var H="";
var F="";
var E="";
var y="";
var s="";
var r=new Array();
var I="";
var z=B.options.esaAPIKey;
var v="";
var w="";
t.find("input").each(function(){r.push($(this).val())
});
console.log(r);
var A=B._validate();
if(B.tabSelected=="instantGame"){if($("#tcForm").valid()){var z=B.options.esaAPIKey;
var q="1,"+new Date();
H=$("#tcInstantGameEntry1").val()+$("#tcInstantGameEntry2").val()+$("#tcInstantGameEntry3").val()+$("#tcInstantGameEntry4").val()+$("#tcInstantGameEntry5").val();
w=$("#tcInstantGameEntry1").val()+" "+$("#tcInstantGameEntry2").val()+" "+$("#tcInstantGameEntry3").val()+" "+$("#tcInstantGameEntry4").val()+" "+$("#tcInstantGameEntry5").val();
E={barcode:H};
$.ajax({type:"POST",url:B.options.path,data:{ticketSerialNumber:H,gameType:"instantGames"},success:function(J){s="/api/v1/instant-games/tickets/inquire";
console.log("signature",J);
B.inquireCall(E,J,z,s,w)
}})
}}else{if($("#tcForm").valid()){B.drawGameTicketEntry="";
F=$("#tcTicketEntry1").val()+"-"+$("#tcTicketEntry2").val()+"-"+$("#tcTicketEntry3").val();
v=$("#tcTicketEntry1").val()+" "+$("#tcTicketEntry2").val()+" "+$("#tcTicketEntry3").val();
E={ticketSerialNumber:F};
$.ajax({type:"POST",url:B.options.path,data:{ticketSerialNumber:F,gameType:"drawGames"},success:function(J){s="/api/v1/draw-games/tickets/inquire";
B.inquireCall(E,J,z,s,v)
}})
}}},inquireCall:function p(v,u,s,r,t){var q=this;
$.ajax(r,{type:"POST",dataType:"json",data:JSON.stringify(v),contentType:"application/json",headers:{"x-esa-api-key":s,"x-originator-id":"0","X-Request-Id":"1","X-Session-Id":"1","X-Api-Key-Signature":$.trim(u)},success:function(x,y,w){if(q.tabSelected=="instantGame"){q.handleInstantTicket(q.tabSelected,x,t)
}else{q.handleDrawTicket(q.tabSelected,x,t)
}},error:function(x,z,y){$(".error").html("Internal server error, please try again later");
console.warn("Error",this,arguments);
reason=$.parseJSON(x.responseText);
if(reason&&reason.fieldErrors&&reason.fieldErrors[0]&&reason.fieldErrors[0].code){errorCode=reason.fieldErrors[0].code
}else{if(reason&&reason.code){errorCode=reason.code
}else{errorCode=reason
}}var w=handleResetErrorResponseTemplate({errorCode:errorCode});
$("#errorResetModal").html(w);
$("#errorResetModal").find(".modal").modal();
return reason
}})
},handleDrawTicket:function j(r,y,v){var w=y.status;
var A;
switch(w){case"ACCEPTED":A="ticketStatus";
break;
case"CONFIRM_PAYMENT":case"REJECTED":A="rejectReason";
break;
default:A="";
break
}var B=y[A];
var q="";
var C=false;
switch(B){case"ALREADY_CLAIMED":case"ALREADY_PAID":case"CLAIMED_BY_OTHER":case"ERROR_PREV_CLAIMED_OTHER":case"CLAIMED_BY_YOU":case"ERROR_PREV_PAID_OTHER":case"ERROR_PREV_PAID_YOU":case"PAID_BY_OTHER":case"PAID_BY_YOU":case"PAID":q=CQ.I18n.getMessage("ticket.UNABLE_TO_PROCESS_TICKET");
C=true;
break;
case"RESULTS_NOT_IN":case"RESULT_NOT_IN":q=CQ.I18n.getMessage("ticket.RESULTS_NOT_IN");
C=false;
break;
case"NOT_A_WINNER":case"EXPIRED":q=CQ.I18n.getMessage("ticket.notAWinner");
C=false;
break;
case"BAD_SERIAL":q=CQ.I18n.getMessage("ticket.UNRECOGNIZED_BARCODE");
C=true;
break;
case"PAID":q=CQ.I18n.getMessage("ticket.alreadyPaid");
C=true;
break;
case"CANTPAY":var s=y.totalAmount;
var x=y.prizes;
if(s!=0||(x&&x.length!=0)){if(x){q=CQ.I18n.getMessage("ticket.claimAtRetailerNextDay");
C=true
}else{q=CQ.I18n.getMessage("ticket.claimRetNextBusinessDay");
C=true
}}else{q=CQ.I18n.getMessage("ticket.inquiryError");
C=true
}break;
case"TICKET_EXPIRED":case"CANCELED":case"ON_HOLD":case"TICKET_ON_HOLD":q=CQ.I18n.getMessage("ticket.cannotProcess");
C=true;
break;
case"NOT_WINNER_DRAWS_REMAINING":q=CQ.I18n.getMessage("ticket.NOT_A_WINNER_DRAWS_REMAINING");
C=false;
break;
case"ERROR":var u=self.ticketData.get("error");
if(u&&u.code=="SUPPRESS"||u.code=="UNAVAILABLE"){q=CQ.I18n.getMessage("ticket.drawBreak");
C=true
}else{q=CQ.I18n.getMessage("ticket.inquiryError");
C=true
}break;
case"CLAIM_AT_LOTTERY_LATER":q=CQ.I18n.getMessage("ticket.claimAtOfficeNextDay");
C=true;
break;
case"WINNER":case"WINNER_DRAWS_REMAINING":case"CLAIM_AT_LOTTERY":q=CQ.I18n.getMessage("ticket.WINNER");
C=true;
break;
default:q=CQ.I18n.getMessage("ticket.inquiryError");
C=true;
break
}var z;
if(y.jackpot==true&&y.ticketStatus=="WINNER"){q="CONGRATULATIONS!<br/>JACKPOT WINNER! <br/>Take your ticket to a New Jersey Lottery Retailer"
}else{if((y.merchandise!=null||y.freeTicket!=null||y.exchangeTicket!=null)&&y.ticketStatus=="WINNER"){q=CQ.I18n.getMessage("ticket.WINNER")
}else{if((y.ticketStatus=="WINNER"&&y.cashAmount!=null)||(y.ticketStatus=="WINNER"&&y.claimAmount!=null)){var t=null;
if(y.cashAmount!=null){t=y.cashAmount
}else{t=y.claimAmount
}q="CONGRATULATIONS!<br/>YOU'VE WON $ "+portalGGA.utils.currencyFormatted(t,true)+" <br/>Take your ticket to a New Jersey Lottery Retailer"
}}}if(w=="REJECTED"&&B!="WINNER_DRAWS_REMAINING"){z=ticketNoResultsTemplate({msg:q})
}else{var D=y.claimAmount;
if(y.claimAmount==null){D=y.cashAmount
}z=ticketResultsTemplate({titleVal:q,showRetailer:C})
}$("#tcResult").html(z);
$("#tcResult").removeClass("hide").addClass("fade in");
$("#tcForm").addClass("hide")
},handleInstantTicket:function g(s,v,t){var u=v.winStatus;
var r;
var z=false;
switch(u){case"NOT_A_WINNER":r=CQ.I18n.getMessage("ticket.notAWinner");
z=false;
break;
case"ALREADY_PAID":case"ALREADY_CLAIMED":r=CQ.I18n.getMessage("ticket.UNABLE_TO_PROCESS_TICKET");
z=true;
break;
case"GAME_CLOSED":r=CQ.I18n.getMessage("ticket.cannotProcess");
z=true;
break;
case"REQUEST_REJECTED_SEE_RETAILER":r=CQ.I18n.getMessage("ticket.inquiryNotAccepted");
z=true;
break;
case"WINNER":r=CQ.I18n.getMessage("ticket.WINNER");
z=true;
break;
case"CLAIM_AT_LOTTERY":r=CQ.I18n.getMessage("ticket.WINNER");
z:true;
break;
default:r=CQ.I18n.getMessage("ticket.inquiryError");
z:true;
return
}var w;
var y=v.prizeTypes;
var q=false;
var x=false;
if(y!=null&&y.length==1&&y[0]=="CASH"){q=true
}else{n.each(y,function(A){if(A!="CASH"){q=false
}})
}n.each(y,function(A){if(A=="ANNUITY"){x=true
}else{x=false
}});
if((v.winStatus=="CLAIM_AT_LOTTERY"||v.winStatus=="WINNER")&&v.prizeValueAmount!=null&&q==true){r="CONGRATULATIONS!<br/>YOU'VE WON $ "+portalGGA.utils.currencyFormatted(v.prizeValueAmount,true)+" <br/>Take your ticket to a New Jersey Lottery Retailer"
}else{if((v.winStatus=="CLAIM_AT_LOTTERY"||v.winStatus=="WINNER")&&x==true){r="CONGRATULATIONS!<br/>JACKPOT WINNER! <br/>Take your ticket to a New Jersey Lottery Retailer"
}else{if((v.winStatus=="CLAIM_AT_LOTTERY"||v.winStatus=="WINNER")){r=CQ.I18n.getMessage("ticket.WINNER")
}}}if(u=="REQUEST_REJECTED_SEE_RETAILER"||u=="NOT_A_WINNER"){w=ticketNoResultsTemplate({msg:r})
}else{w=ticketResultsTemplate({titleVal:r,showRetailer:z})
}$("#tcResult").html(w);
$("#tcResult").removeClass("hide").addClass("fade in");
$("#tcForm").addClass("hide")
},_showFormBtn:function b(){$("#tcResult").find('[type="button"]').on("click",function(){$("#tcResult").removeClass("in").addClass("fade out");
$(".submit-ticket").find('input[type="text"]').val("");
setTimeout(function(){$("#tcResult").addClass("hide");
$(".submit-ticket").removeClass("hide").addClass("fade in")
},300)
})
},_changePage:function l(r){var q=this;
var s=r.currentTarget.value;
console.log("change val: "+s);
q.tabSelected=s;
q.drawGameTicketEntry=$("#drawGameTicketEntry");
q.instantGameTicketEntry=$("#instantGameTicketEntry");
if(s=="drawGame"){q._showHide(q.drawGameTicketEntry,q.instantGameTicketEntry)
}else{q._showHide(q.instantGameTicketEntry,q.drawGameTicketEntry)
}},_showHide:function f(q,r){r.removeClass("in").addClass("fade out");
setTimeout(function(){r.addClass("hide");
q.removeClass("hide").addClass("fade in")
},300)
},_validate:function k(){var s=this;
var t=false;
if(s.tabSelected=="instantGame"){var r=$("#tcInstantGameEntry1").val();
var q=$("#tcInstantGameEntry2").val();
var w=$("#tcInstantGameEntry3").val();
var v=$("#tcInstantGameEntry4").val();
var u=$("#tcInstantGameEntry5").val();
if(r.length==5&&q.length==6&&w.length==3&&v.length==10&&u.length==4){t=true
}}else{var r=$("#tcTicketEntry1").val();
var q=$("#tcTicketEntry2").val();
var w=$("#tcTicketEntry3").val();
if(r.length==4&&q.length==9&&w.length==6){t=true
}}return t
},openDrawGamesModal:function e(r){var q=drawGamesModalTemplate();
$("#drawGamesModal").html(q);
$("#modalDrawGame").modal("show")
},openInstantGamesModal:function a(r){var q=instantGamesModalTemplate();
$("#instantGamesModal").html(q);
$("#modalInstantGames").modal("show")
},backtotc:function d(q){$("#tcForm").removeClass("hide").addClass("fade in");
$("#tcResult").addClass("hide")
},retailerPage:function o(q){location.href="/en-us/retailer.html"
}})
}(portalGGA.models.FastPlayGame,_,portalGGA.utils.session));
(function(p,t,b){portalGGA.views.SearchInstantGames=Backbone.View.extend({events:{"click .sortable":"sortData","click .search_btn":"_search","click .reset_btn":"_reset","input .gameNumberSearch":"_clear","input .gameNameSearch":"_clear"},constructor:function g(v){Backbone.View.apply(this,arguments);
this.instantGames=v.instantGames||new p();
this.InstantGamesTemplate=t.template($(".instantGames-transactionTemplate").html());
this.InstantGamesHeaderTemplate=t.template($(".instantGames-transactionHeader").html());
this.specyficErrorNotifier=new portalGGA.utils.ErrorNotifier(this.$(".instantGames-error"));
this.sortField="GAME_NAME";
this.sortType="asc";
this.fieldsMap={GAME_NAME:"gameName",GAME_NUMBER:"gameId",PRICE_POINT:"pricePoint"},t.bindAll(this,"_populateHeader","_populateResults","_search","_populatePagination","_handleFailure","_loadTable","gameNameRestrict","populatePriceAmount");
this.submit()
},submit:function j(w,x){var v=this;
w&&w.preventDefault();
this.$(".pagination-container").fadeOut();
this.$(".preloader_big").fadeIn();
this.$(".sort").hide();
this._populateHeader();
this.$(".instantGames-noResults").fadeOut();
this.$(".instantGames-results").empty();
this.specyficErrorNotifier.clear();
loading("#instantsGames");
this.instantGames.url="/api/v1/instant-games/games";
return this.instantGames.fetch({cache:false,data:{size:1000}}).then(this._populateResults).fail(this._handleFailure)
},_populateHeader:function u(){console.info("_populateHeader",this,arguments);
$(".searchGames-header").html(this.InstantGamesHeaderTemplate({sortField:this.sortField,sortType:this.sortType,fieldsMap:this.fieldsMap}))
},_populatePagination:function o(){console.info("_populatePagination",this);
if(this.instantGames.length>0){var v=paginationTemplate({prevPageUrl:this.instantGames.prevPageUrl,nextPageUrl:this.instantGames.nextPageUrl,pageUrls:this.instantGames.pageUrls,currentPage:this.instantGames.currentPage});
this.$(".pagination-container").fadeIn();
this.$(".instant-games-pagination").addClass("pagination");
this.$(".instant-games-pagination").html(v)
}},_handleFailure:function e(w){var x=this.$(".instantGames-error"),v=this.$(".preloader_big");
this.specyficErrorNotifier.show("SCEligibleGames.generic.error","alert-danger");
v.hide();
return Q.reject(w)
},_populateResults:function a(){console.info("_populateResults",this,arguments);
var w=this;
var C=w.instantGames.toJSON();
var A="",v=this.$(".preloader_big"),z=this.$(".instantGames-table");
this.specyficErrorNotifier.clear();
if(this.instantGames.length){var y=w.instantGames.toJSON();
for(var B=0;
B<this.instantGames.length;
B++){if(new Date(y[B].endDistributionDate).getTime()>new Date().getTime()){y[B].endDistributionDate="ACTIVE";
y[B].disableDate="PENDING"
}else{y[B].endDistributionDate=portalGGA.utils.formattedLongDate(y[B].endDistributionDate);
y[B].disableDate=portalGGA.utils.formattedLongDate(y[B].disableDate)
}if(new Date(y[B].launchDate).getTime()<new Date().getTime()){A+=this.InstantGamesTemplate(y[B])
}}if(A.length>0){this.$(".instantGames-results").html(A);
w.$(".instantGames-noResults").fadeOut();
v.hide();
z.show();
$(".instantGames-error").hide()
}else{v.hide();
z.hide();
w.$(".instantGames-noResults").fadeIn()
}w.populatePriceAmount();
w.gameNameRestrict()
}else{var w=this;
v.fadeOut().promise().done(function x(){v.hide();
z.hide();
w.$(".instantGames-noResults").fadeIn()
})
}},sortData:function c(y,z){y&&y.preventDefault();
var w=this;
var A=$(y.target).closest("th");
this.sortField=A.attr("data-column-id");
var v=null;
if(this.sortField=="GAME_NUMBER"){v="gameId"
}if(this.sortField=="GAME_NAME"){v="gameName"
}if(this.sortField=="PRICE_POINT"){v="ticketPrice"
}if(this.sortField=="START_DATE"){v="launchDate"
}if(this.sortField=="END_DATE"){v="endDistributionDate"
}if(this.sortField=="EXPIRED_DATE"){v="disableDate"
}var x=w.instantGames.toJSON();
if(A.attr("data-sort-type")&&A.attr("data-sort-type")=="asc"){A.attr("data-sort-type","desc");
A.attr("class","header headerSortDown");
this.sortType="desc"
}else{A.attr("data-sort-type","asc");
A.attr("class","header headerSortUp");
this.sortType="asc"
}if(this.sortField=="PRICE_POINT"||this.sortField=="GAME_NUMBER"){x=portalGGA.utils._sortByValue(x,v,A.attr("data-sort-type"))
}else{if(this.sortField=="GAME_NAME"){x=portalGGA.utils._sortByName(x,v,A.attr("data-sort-type"))
}else{x=portalGGA.utils._sortByDate(x,v,A.attr("data-sort-type"))
}}w._loadTable(x)
},getFilters:function d(){var v={"group-name":this.groupName};
v["sort-columns"]=this.fieldsMap[this.sortField];
v["sort-orders"]=this.sortType;
return v
},_search:function r(y){y.preventDefault();
var v=this;
var w=$("#gameNumberSearch").val();
var B=$("#gameNameSearch").val();
var z=parseInt($("#pricePoint").val().split("$")[1]);
var A="";
var x=v.instantGames.toJSON();
if(w.length>0||B.length>0){if(w.length>0&&w.length<5){v.$el.find(".gamenumber-error").html("<label class='error' style='color:#f82323;'>Enter the five (5) digit game number</label>").show();
return false
}else{if(B.length>0&&B.length<3||$.isNumeric(B)){v.$el.find(".gamename-error").html("<label class='error' style='color:#f82323;'>Enter the game name</label>").show();
return false
}else{v.$el.find(".error").remove();
if(w!=""){A="gameId";
x=v._searchFilter(x,w,A)
}if(B!=""){A="gameName";
x=v._searchFilter(x,B.toUpperCase(),A)
}v._loadTable(x)
}}}else{v.$el.find(".error").remove();
if($.isNumeric(z)){A="ticketPrice";
x=v._searchFilter(x,z,A)
}v._loadTable(x)
}},_searchFilter:function n(w,v,x){return t.filter(w,function(y){if(x=="gameId"){return portalGGA.utils.prependZeros(y[x])==v
}else{if(x=="gameName"){return y[x].toUpperCase()==v
}else{if(x=="ticketPrice"){return portalGGA.utils.currencyFormatted(y[x])==v
}}}})
},_reset:function i(){var v=this;
v.$el.find(".error").remove();
if(v.instantGames.length>0){v._loadTable(v.instantGames.toJSON())
}},_clear:function f(w){var v=this;
if(w.target.id=="gameNumberSearch"&&$("#gameNumberSearch").val().length>0&&$("#gameNameSearch").val().length>0){$("#gameNameSearch").val("")
}else{if(w.target.id=="gameNameSearch"&&$("#gameNameSearch").val().length>0&&$("#gameNumberSearch").val().length>0){$("#gameNumberSearch").val("")
}}},_hideTable:function s(v){var w=this;
v.hide();
w.$(".instantGames-noResults").html(CQ.I18n.getMessage("instantgame.search.expired.error"));
w.$(".instantGames-noResults").show()
},_loadTable:function q(x){var w=this;
var z="",v=this.$(".preloader_big"),y=this.$(".instantGames-table");
if(x.length>0){for(var A=0;
A<x.length;
A++){if(new Date(x[A].endDistributionDate).getTime()>new Date().getTime()){x[A].endDistributionDate="ACTIVE";
x[A].disableDate="PENDING"
}else{x[A].endDistributionDate=portalGGA.utils.formattedLongDate(x[A].endDistributionDate);
x[A].disableDate=portalGGA.utils.formattedLongDate(x[A].disableDate)
}if(new Date(x[A].launchDate).getTime()<new Date().getTime()){z+=w.InstantGamesTemplate(x[A])
}}if(z.length>0){w.$(".instantGames-results").html(z);
w.$(".instantGames-noResults").fadeOut();
y.show();
$(".instantGames-error").hide()
}else{w._hideTable(y)
}}else{w._hideTable(y)
}},_getGameArr:function h(){var v=this;
var x=v.instantGames.toJSON();
var w=[];
t.each(x,function(y){w.push(y.gameName)
});
return w
},gameNameRestrict:function l(){var v=this;
var x=v.instantGames.toJSON();
var w=v._getGameArr();
var y=w;
$("#gameNameSearch").typeahead({source:y})
},array_unique:function m(w){var v=[];
for(var x=0;
x<w.length;
x++){if(v.indexOf(w[x])==-1){v.push(w[x])
}}return v
},populatePriceAmount:function k(){var v=this;
var x=v.instantGames.toJSON();
var w=[];
var y=[];
w.push('<option value="all">Show all</option>');
t.each(x,function(z){y.push(portalGGA.utils.currencyFormatted(z.ticketPrice))
});
y=v.array_unique(y);
y.sort(function(A,z){return A-z
});
t.each(y,function(z){w.push("<option value=$"+z+">$"+z+"</option>")
});
$("#pricePoint").append(w)
}})
}(portalGGA.models.InstantGames,_,portalGGA.utils.session));
!(function(b){portalGGA.models.FiveCardCashLuckyLocation=Backbone.Model.extend({urlRoot:"/api/v1/locations/draw-games/luckylocations/page?game-names=Five%20Card%20Cash&days=30",idAttribute:"_id",defaults:{gameName:null,dateMillis:null,date:null,name:null,address1:null,address2:null,city:null,id:null,prizeAmount:null,prize:null},constructor:function a(){Backbone.Model.apply(this,arguments)
}});
portalGGA.models.FiveCardCashLuckyLocations=Backbone.Collection.extend({model:portalGGA.models.FiveCardCashLuckyLocation,url:"/api/v1/locations/draw-games/luckylocations/page?game-names=Five%20Card%20Cash&days=30",parse:function(c){return c&&c.luckyLocations
}})
}());
(function(f,i,l,h){portalGGA.views.HighTierWinners=Backbone.View.extend({constructor:function a(m){Backbone.View.apply(this,arguments);
this.fpluckylocations=new i();
this.luckyLocationHeaderTemplate=l.template($(".luckylocation-header").html());
this.luckyLocationTemplate=l.template($(".luckylocationresult-transactionTemplate").html());
this.sortType="desc";
this.sortField="Date Won";
this.colTitles=[CQ.I18n.getMessage("fivecardcashgames.toptierwinners.wintype"),CQ.I18n.getMessage("fivecardcashgames.toptierwinners.amountwon"),CQ.I18n.getMessage("fivecardcashgames.toptierwinners.datewon"),CQ.I18n.getMessage("fivecardcashgames.toptierwinners.luckylocations"),CQ.I18n.getMessage("fivecardcashgames.toptierwinners.city")];
this.recentTopTierWinners()
},sortData:function b(p){p&&p.preventDefault();
var o=this;
var q=$(p.target).closest("th");
this.sortField=q.attr("data-column-id");
var n=null;
if(this.sortField=="Win Type"){n="prize"
}if(this.sortField=="Amount Won"){n="prizeAmount"
}if(this.sortField=="Date Won"){n="dateMillis"
}if(this.sortField=="Lucky Location"){n="name"
}if(this.sortField=="City"){n="city"
}var m=o.fpluckylocations.toJSON();
m=m.luckyLocations;
if(this.sortField=="Win Type"||this.sortField=="Lucky Location"||this.sortField=="City"){m=portalGGA.utils._sortByName(m,n,q.attr("data-sort-type"))
}if(this.sortField=="Date Won"){m=portalGGA.utils._sortByDate(m,n,q.attr("data-sort-type"))
}if(this.sortField=="Amount Won"){m=portalGGA.utils._sortByValue(m,n,q.attr("data-sort-type"))
}if(q.attr("data-sort-type")&&q.attr("data-sort-type")=="asc"){q.attr("data-sort-type","desc");
q.attr("class","header headerSortDown");
this.sortType="desc"
}else{q.attr("data-sort-type","asc");
q.attr("class","header headerSortUp");
this.sortType="asc"
}o._loadTable(m)
},_loadTable:function j(n){var m=this;
var o="";
if(n.length){for(var p=0;
p<n.length;
p++){o+=this.luckyLocationTemplate(n[p])
}$(".luckylocation-results").html(o)
}},_sortGames:function e(p,o){var m=this.fpluckylocations.toJSON();
m=m.luckyLocations;
var n;
if(o==CQ.I18n.getMessage("fastplaygames.toptierwinners.gamename")){n="gameName"
}if(o==CQ.I18n.getMessage("fastplaygames.toptierwinners.amountwon")){n="prizeAmount"
}if(o==CQ.I18n.getMessage("fastplaygames.toptierwinners.datewon")){n="dateMillis"
}if(o==CQ.I18n.getMessage("fastplaygames.toptierwinners.storepurchased")){n="name"
}if(o==CQ.I18n.getMessage("fastplaygames.toptierwinners.city")){n="city"
}if(p=="asc"){m.sort(function(r,q){if(r[n]>q[n]){return -1
}if(r[n]<q[n]){return 1
}return 0
})
}else{m.sort(function(r,q){if(r[n]<q[n]){return -1
}if(r[n]>q[n]){return 1
}return 0
})
}return m
},recentTopTierWinners:function d(){var m=this;
loading("#recent-winners");
m.fpluckylocations.fetch({cache:false}).then(function(){m._populateRecentWinnersHeader()
})
},_populateRecentWinnersHeader:function c(){var m=this;
var n=m.fpluckylocations.toJSON();
n=n.luckyLocations;
if(n.length>0){$(".searchContainer").removeClass("hide");
$("#recent-winners").removeClass("recent-winners");
$(".searchGames-header").html(this.luckyLocationHeaderTemplate({sortField:this.sortField,sortType:this.sortType}));
m._populateRecentWinners()
}else{$("#recent-winners").addClass("recent-winners");
$("#recent-winners").removeClass("hide");
$("#searchContainer").addClass("hide");
$("#recent-winners").html(noRecentTopTierWinnersTemplate({}))
}},_populateRecentWinners:function g(){console.log(" in _populateRecentWinners function... ",this,arguments);
var m=this;
loading("#recent-winners","hide");
$("#recent-winners").removeClass("hide");
var o=m.fpluckylocations.toJSON();
o=o.luckyLocations;
var n=portalGGA.utils._sortByValue(o,"prizeAmount","desc");
n=portalGGA.utils._sortByDate(n,"date","desc");
var p="";
for(var q=0;
q<n.length;
q++){p+=this.luckyLocationTemplate(n[q])
}$(".luckylocation-results").html(p);
m.renderEvents()
},renderEvents:function k(){var m=this;
$(".sortable").on("click",function(n){m.sortData(n)
})
}})
}(portalGGA.models.FastPlayGames,portalGGA.models.FiveCardCashLuckyLocation,_,portalGGA.utils.session));
!(function(h,g){portalGGA.views.LoginModal=Backbone.View.extend({_loginComplete:g.defer(),errorNotifier:null,_redirectURL:null,events:{"submit form":"login","click #signUp":"signUp"},constructor:function f(){Backbone.View.apply(this,arguments);
this.createErrorNotifier();
_.bindAll(this,"show","login","hide");
var i=this.$("#loginModal-username");
this.$el.on("shown.bs.modal",function(){i.focus()
})
},show:function c(j,i){if(i){sessionStorage.setItem("checkout","true")
}delete this._loginComplete;
this._loginComplete=g.defer();
this._redirectURL=j;
this.$el.modal("show");
return this._loginComplete.promise
},hide:function e(){this.$el.modal("hide");
return this
},createErrorNotifier:function(){if(!this.errorNotifier){this.errorNotifier=new portalGGA.utils.ErrorNotifier(this.$(".errorNotifier"))
}},login:function d(n){n&&n.preventDefault();
if(this.$("form").valid()){var j=this,l=this.$("[type=submit]");
l.button("loading");
this.errorNotifier.clear();
var p=this.$("[name=loginModal-username]").val();
var k=this.$("[name=loginModal-password]").val();
console.log("Starting login for "+p,this,this._loginComplete);
return g.when(portalGGA.utils.session.login(p,k,this._redirectURL)).then(function o(){console.log("Login processed for "+p,j,j._loginComplete);
j.hide();
l.button("reset");
return j._loginComplete.resolve(j)
},function m(q){console.log("Authentication error occurred",q);
return j.errorNotifier.show(q,"alert-danger").then(function(){l.button("reset");
return g.reject(q)
})
}).fin(function i(){sessionStorage.removeItem("checkout");
sessionStorage.removeItem("quickcheckout")
})
}return g.reject("validation")
},signUp:function b(){if(sessionStorage.getItem("checkout")){sessionStorage.setItem("quickcheckout",true);
sessionStorage.removeItem("checkout")
}return true
}});
h(function a(){portalGGA.utils.communication.register(new portalGGA.views.LoginModal({el:h("#loginModal")}),null,"loginModal")
})
}(jQuery,Q));
(function(){portalGGA.views.BaseModal=Backbone.View.extend({events:{"click [data-pd-action]":"triggerEvent",},initialize:function(){var c=this;
_.bindAll(this,"triggerEvent");
this.$el.html(baseModalTemplate());
$("body").append(this.$el);
$('[data-pd="modal"]').on("click",function(g){g.preventDefault();
var h=$(this).attr("data-pd-title");
var d=$(this).attr("data-pd-size");
var f=$($(this).attr("href"));
c.getModalContent(f).always(function(e){c.show(h,e,d)
})
})
},show:function a(f,e,d,c){$("#baseModal").find(".modal-dialog").removeClass().addClass("modal-dialog");
$("#baseModal").find(".modal-title").html(f);
$("#baseModalContent").html(e);
if(d){$("#baseModal").find(".modal-dialog").addClass("modal-"+d)
}$("#baseModal").modal("show");
$("#baseModal").off("shown.bs.modal").on("shown.bs.modal",function(){if(typeof popovers=="function"){popovers()
}});
$("#baseModal").off("hidden.bs.modal").on("hidden.bs.modal",function(){$("#baseModalContent").html("");
if(typeof c==="function"){c()
}})
},hide:function b(){$("#baseModal").modal("hide")
},loadModalContentFromUrl:function(d){var c=$.Deferred();
$.get(d).done(function(e){c.resolve(e)
}).fail(function(e){c.reject(e)
});
return c
},getModalContent:function(f){var e=$.Deferred(),d=this;
var c=f.find('[data-pd-loadcontent="true"]');
if(c.length>0&&c.html().length==0){d.loadModalContentFromUrl(c.attr("data-pd-content-url")).done(function(g){c.html(g);
e.resolve(f.html())
})
}else{e.resolve(f.html())
}return e
},triggerEvent:function(d){d&&d.preventDefault();
var c=$(d.currentTarget).attr("data-pd-action");
this.trigger(c)
}})
}());
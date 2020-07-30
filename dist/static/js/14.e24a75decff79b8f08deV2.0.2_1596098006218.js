webpackJsonp([14],{Ju2i:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("X2Oc");var a=function(e,t,i){this.options=i,this.wId=e;var a,o,s,n,r,c,l=function(e){return document.createElement(e)};for(n in this.bg={AV:"Attack Vector",AC:"Attack Complexity",PR:"Privileges Required",UI:"User Interaction",S:"Scope",C:"Confidentiality",I:"Integrity",A:"Availability"},this.bm={AV:{N:{l:"Network",d:"<b>Worst:</b> A vulnerability exploitable with network access means the vulnerable authorization scope is bound to the network stack and the attacker's path to the vulnerable system is at the network layer. Such a vulnerability is often termed 'remotely exploitable'."},A:{l:"Adjacent",d:"<b>Worse:</b> A vulnerability exploitable with adjacent network access means the vulnerable authorization scope is bound to the network stack and the attacker's path to the vulnerable system is at the data link layer. Examples include local IP subnet, Bluetooth, IEEE 802.11, and local Ethernet segment."},L:{l:"Local",d:"<b>Bad:</b> A vulnerability exploitable with local access means the vulnerable authorization scope is not bound to the network stack and the attacker's path to the vulnerable authorization scope is via read / write / execute capabilities. If the attacker has the necessary Privileges Required to interact with the vulnerable authorization scope, they may be logged in locally; otherwise, they may deliver an exploit to a user and rely on User Interaction"},P:{l:"Physical",d:"<b>Bad:</b> A vulnerability exploitable with physical access requires the ability to physically touch or manipulate a vulnerable authorization scope. Physical interaction may be brief (evil maid attack) or persistent."}},AC:{L:{l:"Low",d:"<b>Worst:</b> Specialized access conditions or extenuating circumstances do not exist. An attacker can expect repeatable exploit success against a vulnerable target."},H:{l:"High",d:"<b>Bad:</b> A successful attack depends on conditions outside the attacker's control. That is, a successful attack cannot be accomplished at-will, but requires the attacker to invest in some measurable amount of effort in preparation or execution against a specific target before successful attack can be expected. A successful attack depends on attackers overcoming one OR both of the following conditions: the attacker must gather target-specific reconnaissance; or the attacker must prepare the target environment to improve exploit reliability."}},PR:{N:{l:"None",d:"<b>Worst:</b> The attacker is unprivileged or unauthenticated."},L:{l:"Low",d:"<b>Worse</b> The attacker is authenticated with privileges that provide basic, low-impact capabilities. With these starting privileges an attacker is able to cause a Partial impact to one or more of: Confidentiality, Integrity, or Availability. Alternatively, an attacker with Low privileges may have the ability to cause an impact only to non-sensitive resources."},H:{l:"High",d:"<b>Bad:</b> The attacker is authenticated with privileges that provide significant control over component resources. With these starting privileges an attacker can cause a Complete impact to one or more of: Confidentiality, Integrity, or Availability. Alternatively, an attacker with High privileges may have the ability to cause a Partial impact to sensitive resources."}},UI:{N:{l:"None",d:"<b>Worst:</b> The vulnerable system can be exploited without any interaction from any user."},R:{l:"Required",d:"<b>Bad:</b> Successful exploitation of this vulnerability requires a user to take one or more actions that may or may not be expected in a scenario involving no exploitation, or a scenario involving content provided by a seemingly trustworthy source."}},S:{C:{l:"Changed",d:"<b>Worst:</b> The attacker attacks the vulnerable authorization scope and has an impact to its environment. This causes a direct impact to another scope. Score Impact relative to the Changed Scope."},U:{l:"Unchanged",d:"<b>Bad:</b> The attacker attacks and impacts the environment that authorizes actions taken by the vulnerable authorization scope. Score Impact relative to the original authorization authority."}},C:{H:{l:"High",d:"<b>Worst:</b> There is total information disclosure, resulting in all resources in the affected scope being divulged to the attacker. Alternatively, access to only some restricted information is obtained, but the disclosed information presents a direct, serious impact to the affected scope (e.g. the attacker can read the administrator's password, or private keys in memory are disclosed to the attacker)."},L:{l:"Low",d:"<b>Bad:</b> There is informational disclosure or a bypass of access controls. Access to some restricted information is obtained, but the attacker does not have control over what is obtained, or the scope of the loss is constrained. The information disclosure does not have a direct, serious impact on the affected scope."},N:{l:"None",d:"<b>Good:</b> There is no impact to confidentiality within the affected scope."}},I:{H:{l:"High",d:"<b>Worst:</b> There is a total compromise of system integrity. There is a complete loss of system protection, resulting in the entire system being compromised. The attacker is able to modify any files on the target system."},L:{l:"Low",d:"<b>Bad:</b> Modification of data is possible, but the attacker does not have control over the end result of a modification, or the scope of modification is constrained. The data modification does not have a direct, serious impact on the affected scope."},N:{l:"None",d:"<b>Good:</b> There is no impact to integrity within the affected scope."}},A:{H:{l:"High",d:"<b>Worst:</b> There is total loss of availability, resulting in the attacker being able to fully deny access to resources in the affected scope; this loss is either sustained (while the attacker continues to deliver the attack) or persistent (the condition persists even after the attack has completed). Alternatively, the attacker has the ability to deny some availability, but the loss of availability presents a direct, serious impact to the affected scope (e.g. the attacker cannot disrupt existing connections, but can prevent new connections; the attacker can repeatedly exploit a vulnerability that, in each instance of a successful attack, leaks a only small amount of memory, but after repeated exploitation causes a service to become completely unavailable)."},L:{l:"Low",d:"<b>Bad:</b> There is reduced performance or interruptions in resource availability. The attacker does not have the ability to completely deny service to legitimate users, even through repeated exploitation of the vulnerability. The resources in the affected scope are either partially available all of the time, or fully available only some of the time, but the overall there is no direct, serious impact to the affected scope."},N:{l:"None",d:"<b>Good:</b> There is no impact to availability within the affected scope."}}},this.bme={},this.bmgReg={AV:"NALP",AC:"LH",PR:"NLH",UI:"NR",S:"CU",C:"HLN",I:"HLN",A:"HLN"},this.bmoReg={AV:"NALP",AC:"LH",C:"C",I:"C",A:"C"},this.el=t,this.el.appendChild(a=l("style")),a.innerHTML="",this.el.appendChild(o=l("form")),o.className="cvssjs",this.calc=o,this.bg){o.appendChild(s=l("dl")),s.setAttribute("class",n);var h=l("dt");for(a in h.innerHTML=this.bg[n],s.appendChild(h),this.bm[n]){r=l("dd"),s.appendChild(r);var d=l("input");d.setAttribute("name",n),d.setAttribute("value",a),d.setAttribute("id",e+n+a),d.setAttribute("class",n+a),d.setAttribute("type","radio"),this.bme[n+a]=d;var u=this;d.onchange=function(){u.setMetric(this)},r.appendChild(d),c=l("label"),r.appendChild(c),c.setAttribute("for",e+n+a),c.appendChild(l("i")).setAttribute("class",n+a),c.appendChild(document.createTextNode(this.bm[n][a].l+" ")),r.appendChild(l("small")).innerHTML=this.bm[n][a].d}}o.appendChild(s=l("dl")),s.innerHTML="<dt>Severity&sdot;Score&sdot;Vector</dt>",r=l("dd"),s.appendChild(r),(c=r.appendChild(l("label"))).className="results",c.appendChild(this.severity=l("span")),this.severity.className="severity",c.appendChild(this.score=l("span")),this.score.className="score",c.appendChild(document.createTextNode(" ")),c.appendChild(this.vector=l("a")),this.vector.className="vector",this.vector.innerHTML="CVSS:3.0/AV:_/AC:_/PR:_/UI:_/S:_/C:_/I:_/A:_",i.onsubmit&&(o.appendChild(l("hr")),this.submitButton=o.appendChild(l("input")),this.submitButton.setAttribute("type","submit"),this.submitButton.onclick=i.onsubmit)};a.prototype.severityRatings=[{name:"None",bottom:0,top:0},{name:"Low",bottom:.1,top:3.9},{name:"Medium",bottom:4,top:6.9},{name:"High",bottom:7,top:8.9},{name:"Critical",bottom:9,top:10}],a.prototype.severityRating=function(e){var t,i=this.severityRatings.length;for(t=0;t<i;t++)if(e>=this.severityRatings[t].bottom&&e<=this.severityRatings[t].top)return this.severityRatings[t];return{name:"?",bottom:"Not",top:"defined"}},a.prototype.valueofradio=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t].value;return null},a.prototype.calculate=function(){var e,t={AV:{N:.85,A:.62,L:.55,P:.2},AC:{H:.44,L:.77},PR:{U:{N:.85,L:.62,H:.27},C:{N:.85,L:.68,H:.5}},UI:{N:.85,R:.62},S:{U:6.42,C:7.52},C:{N:0,L:.22,H:.56},I:{N:0,L:.22,H:.56},A:{N:0,L:.22,H:.56}},i={},a={};try{for(e in this.bg){if(i[e]=this.valueofradio(this.calc.elements[e]),void 0===i[e]||null===i[e])return"?";a[e]=t[e][i[e]]}}catch(e){return e}a.PR=t.PR[i.S][i.PR];try{var o,s,n=8.22*a.AV*a.AC*a.PR*a.UI,r=1-(1-a.C)*(1-a.I)*(1-a.A);return o=(s="U"===i.S?a.S*r:a.S*(r-.029)-3.25*Math.pow(r-.02,15))<=0?0:"U"===i.S?Math.min(n+s,10):Math.min(1.08*(n+s),10),o=Math.ceil(10*o)/10}catch(e){return e}},a.prototype.get=function(){return{score:this.score.innerHTML,vector:this.vector.innerHTML}},a.prototype.setMetric=function(e){var t=this.vector.innerHTML;/AV:.\/AC:.\/PR:.\/UI:.\/S:.\/C:.\/I:.\/A:./.test(t)||(t="AV:_/AC:_/PR:_/UI:_/S:_/C:_/I:_/A:_");var i=t.replace(new RegExp("\\b"+e.name+":."),e.name+":"+e.value);this.set(i)},a.prototype.set=function(e){var t="CVSS:3.0/",i="";for(var a in this.bm){var o=new RegExp("\\b("+a+":["+this.bmgReg[a]+"])").exec(e);if(null!==o){var s=o[0].replace(":","");this.bme[s].checked=!0,t=t+i+o[0]}else if(a in{C:"",I:"",A:""}&&null!==(o=new RegExp("\\b("+a+":C)").exec(e)))this.bme[a+"H"].checked=!0,t=t+i+a+":H";else for(var n in t=t+i+a+":_",this.bm[a])this.bme[a+n].checked=!1;i="/"}this.update(t)},a.prototype.update=function(e){this.vector.innerHTML=e;var t=this.calculate();this.score.innerHTML=t;var i=this.severityRating(t);this.severity.className=i.name+" severity",this.severity.innerHTML=i.name+"<sub>"+i.bottom+" - "+i.top+"</sub>",this.severity.title=i.bottom+" - "+i.top,void 0!==this.options&&void 0!==this.options.onchange&&this.options.onchange()};var o={components:{},data:function(){return{}},mounted:function(){console.log(this.$refs);new a("cvssboard",this.$refs.cvssboard,{onchange:function(){}})},methods:{changeMonth:function(e,t,i){console.log("changeMonth",e.format(),t.format(),i.format())},eventClick:function(e,t,i){console.log("eventClick",e,t,i)},dayClick:function(e,t){console.log("dayClick",e,t)},moreClick:function(e,t,i){console.log("moreCLick",e,t,i)}}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-tickets"}),this._v(" CVSS评分计算\n      ")])],1)],1),this._v(" "),t("div",{staticClass:"container"},[t("div",{ref:"cvssboard",attrs:{id:"cvssboard"}})])])},staticRenderFns:[]};var n=i("VU/8")(o,s,!1,function(e){i("lPJK")},null,null);t.default=n.exports},lPJK:function(e,t){}});
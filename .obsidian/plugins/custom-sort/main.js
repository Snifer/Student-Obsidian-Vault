/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var j=Object.defineProperty;var je=Object.getOwnPropertyDescriptor;var qe=Object.getOwnPropertyNames;var Ye=Object.prototype.hasOwnProperty;var Ke=(t,e)=>{for(var r in e)j(t,r,{get:e[r],enumerable:!0})},Je=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of qe(e))!Ye.call(t,n)&&n!==r&&j(t,n,{get:()=>e[n],enumerable:!(i=je(e,n))||i.enumerable});return t};var Qe=t=>Je(j({},"__esModule",{value:!0}),t);var Gt={};Ke(Gt,{default:()=>X});module.exports=Qe(Gt);var f=require("obsidian");function me(t,e){let r=Object.keys(e).map(i=>et(t,i,e[i]));return r.length===1?r[0]:function(){r.forEach(i=>i())}}function et(t,e,r){let i=t[e],n=t.hasOwnProperty(e),o=r(i);return i&&Object.setPrototypeOf(o,i),Object.setPrototypeOf(s,o),t[e]=s,a;function s(...l){return o===i&&t[e]===s&&a(),o.apply(this,l)}function a(){t[e]===s&&(n?t[e]=i:delete t[e]),o!==i&&(o=i,Object.setPrototypeOf(s,i||Function))}}var Y=require("obsidian");var P="sort-index-value";function b(t){return t!=null}function R(t){return(t==null?void 0:t.length)>0?t[t.length-1]:void 0}var A=new Intl.Collator(void 0,{usage:"sort",sensitivity:"base",numeric:!0}).compare,K=new Intl.Collator(void 0,{usage:"sort",sensitivity:"base",numeric:!1}).compare,he=!0,Se=!0,xe=!1,v=(t,e)=>{let r=e?K:A;return(i,n)=>{if(t&&([i,n]=[n,i]),i.metadataFieldValue&&n.metadataFieldValue){let o=r(i.metadataFieldValue,n.metadataFieldValue);return o===0?r(i.sortString,n.sortString):o}return i.metadataFieldValue?t?1:-1:n.metadataFieldValue?t?-1:1:r(i.sortString,n.sortString)}},q={[1]:(t,e)=>A(t.sortString,e.sortString),[2]:(t,e)=>K(t.sortString,e.sortString),[3]:(t,e)=>A(e.sortString,t.sortString),[4]:(t,e)=>K(e.sortString,t.sortString),[5]:(t,e)=>t.isFolder&&e.isFolder?A(t.sortString,e.sortString):t.mtime-e.mtime,[6]:(t,e)=>t.mtime-e.mtime,[7]:(t,e)=>t.isFolder&&e.isFolder?A(t.sortString,e.sortString):e.mtime-t.mtime,[8]:(t,e)=>e.mtime-t.mtime,[9]:(t,e)=>t.isFolder&&e.isFolder?A(t.sortString,e.sortString):t.ctimeNewest-e.ctimeNewest,[10]:(t,e)=>t.ctimeNewest-e.ctimeNewest,[11]:(t,e)=>t.isFolder&&e.isFolder?A(t.sortString,e.sortString):e.ctimeOldest-t.ctimeOldest,[12]:(t,e)=>e.ctimeOldest-t.ctimeOldest,[13]:v(xe),[14]:v(xe,he),[15]:v(Se),[16]:v(Se,he),[17]:(t,e)=>A(t.sortString,e.sortString)};function rt(t,e,r){var i,n;if(t.groupIdx!=null&&e.groupIdx!=null)if(t.groupIdx===e.groupIdx){let o=r.groups[t.groupIdx];return(o==null?void 0:o.regexSpec)&&o.secondaryOrder&&t.matchGroup===e.matchGroup?q[(i=o.secondaryOrder)!=null?i:1](t,e):q[(n=o==null?void 0:o.order)!=null?n:1](t,e)}else return t.groupIdx-e.groupIdx;else return q[1](t,e)}var Ce=t=>!!t.isRoot,be=t=>t===13||t===15||t===14||t===16,Ae=0,J=0,it=function(t,e){var g,S,h,O,u,se,ae,le,de,ce,ue,pe,ge,fe;let r,i=!1,n,o,s=Ce(t),a=!s,l=t,p=s?t.name:l.basename;for(r=0;r<e.groups.length;r++){n=null;let c=e.groups[r];if(c.foldersOnly&&a||c.filesOnly&&s)continue;let m=c.matchFilenameWithExt?t.name:p;switch(c.type){case 3:if(c.exactPrefix)m.startsWith(c.exactPrefix)&&(i=!0);else{let x=(g=c.regexSpec)==null?void 0:g.regex.exec(m);x&&(i=!0,n=(S=c.regexSpec)==null?void 0:S.normalizerFn(x[1]))}break;case 4:if(c.exactSuffix)m.endsWith(c.exactSuffix)&&(i=!0);else{let x=(h=c.regexSpec)==null?void 0:h.regex.exec(m);x&&(i=!0,n=(O=c.regexSpec)==null?void 0:O.normalizerFn(x[1]))}break;case 5:if(c.exactPrefix&&c.exactSuffix)m.length>=c.exactPrefix.length+c.exactSuffix.length&&m.startsWith(c.exactPrefix)&&m.endsWith(c.exactSuffix)&&(i=!0);else if(c.exactPrefix&&m.startsWith(c.exactPrefix)||c.exactSuffix&&m.endsWith(c.exactSuffix)){let x=(u=c.regexSpec)==null?void 0:u.regex.exec(m);if(x){let C=x[0];n=(se=c.regexSpec)==null?void 0:se.normalizerFn(x[1]),C.length+((le=(ae=c.exactPrefix)==null?void 0:ae.length)!=null?le:0)+((ce=(de=c.exactSuffix)==null?void 0:de.length)!=null?ce:0)<=m.length?i=!0:n=null}}break;case 2:if(c.exactText)m===c.exactText&&(i=!0);else{let x=(ue=c.regexSpec)==null?void 0:ue.regex.exec(m);x&&(i=!0,n=(pe=c.regexSpec)==null?void 0:pe.normalizerFn(x[1]))}break;case 6:if(c.withMetadataFieldName&&e._mCache){let x=a?t.path:`${t.path}/${t.name}.md`,C=(ge=e._mCache.getCache(x))==null?void 0:ge.frontmatter;(C==null?void 0:C.hasOwnProperty(c.withMetadataFieldName))&&(i=!0)}break;case 1:i=!0;break}if(i)break}let d=r;if(i||(b(e.outsidersFilesGroupIdx)&&a?(d=e.outsidersFilesGroupIdx,i=!0):b(e.outsidersFoldersGroupIdx)&&s?(d=e.outsidersFoldersGroupIdx,i=!0):b(e.outsidersGroupIdx)&&(d=e.outsidersGroupIdx,i=!0)),i&&d!==void 0){let c=e.groups[d];if(be(c==null?void 0:c.order)){let m=c.byMetadataField;if(m||be(e.defaultOrder)&&(m=e.byMetadataField),m||(m=c.withMetadataFieldName),m||(m=P),m&&e._mCache){let x=a?t.path:`${t.path}/${t.name}.md`,C=(fe=e._mCache.getCache(x))==null?void 0:fe.frontmatter;o=C==null?void 0:C[m]}}}return{groupIdx:d,sortString:n?n+"//"+t.name:t.name,metadataFieldValue:o,matchGroup:n!=null?n:void 0,isFolder:s,folder:s?t:void 0,path:t.path,ctimeNewest:a?l.stat.ctime:J,ctimeOldest:a?l.stat.ctime:J,mtime:a?l.stat.mtime:Ae}},Fe=new Set([6,8,10,12]),nt=(t,e)=>Fe.has(t!=null?t:17)||Fe.has(e!=null?e:17),ot=(t,e)=>{let r=Ae,i=J,n=e;return t.children.forEach(o=>{if(!Ce(o)){let s=o;s.stat.mtime>r&&(r=s.stat.mtime),s.stat.ctime>i&&(i=s.stat.ctime),s.stat.ctime<n&&(n=s.stat.ctime)}}),[r,i,n]},st=(t,e,r={})=>{let i=Date.now();t.forEach(n=>{let o=n.groupIdx;if(o!==void 0&&r[o]>1){let s=e.groups[o].order;nt(s)&&n.folder&&([n.mtime,n.ctimeNewest,n.ctimeOldest]=ot(n.folder,i))}})},Te=function(t,e){var s;let r=this.fileExplorer,i={};t._mCache=(s=t.plugin)==null?void 0:s.app.metadataCache;let n=(t.itemsToHide?this.file.children.filter(a=>!t.itemsToHide.has(a.name)):this.file.children).map(a=>{var d;let l=it(a,t),p=l.groupIdx;return p!==void 0&&(i[p]=1+((d=i[p])!=null?d:0)),l});st(n,t,i),n.sort(function(a,l){return rt(a,l,t)});let o=n.map(a=>r.fileItems[a.path]);Y.requireApiVersion&&(0,Y.requireApiVersion)("0.15.0")?this.vChildren.setChildren(o):this.children=o,t._mCache=void 0,t.plugin=void 0};var Oe=" *([MDCLXVI]+)";var Ie=" *([MDCLXVI]+(?:\\.[MDCLXVI]+)*)";var Re=" *([MDCLXVI]+(?:-[MDCLXVI]+)*)";var Me=" *(\\d+)";var Ne=" *(\\d+(?:\\.\\d+)*)";var Le=" *(\\d+(?:-\\d+)*)",ee=".",te="-";var Pe="|";function D(t,e){if(t.length<e){let r=e-t.length;return"000000000000000000000000000".substring(0,r)+t}else return t}function w(t="",e,r){return e?`${t.split(e).filter(n=>n).map(n=>D(n,r!=null?r:8)).join(Pe)}//`:`${D(t,r!=null?r:8)}//`}function Q(t){let e="0iIvVxXlLcCdDmM",r=[0,1,1,5,5,10,10,50,50,100,100,500,500,1e3,1e3];if(t){let i=e.indexOf(t[0]);return i>0?r[i]:0}else return 0}function Ee(t){if(t==null)return"0";let e=Q(t.charAt(0)),r,i;for(let n=1;n<t.length;n++)i=Q(t.charAt(n)),r=Q(t.charAt(n-1)),i<=r?e+=i:e=e-r*2+i;return`${e}`}function _(t,e,r){return e?`${t.split(e).filter(n=>n).map(n=>D(Ee(n),r!=null?r:8)).join(Pe)}//`:`${D(Ee(t),r!=null?r:8)}//`}var at="/",V="...",De="*",G=`/${V}`,z=`/${V}/`,H=`/${De}`,ve=t=>t.split(at).filter(e=>!!e),W=class{constructor(){this.tree={subtree:{}};this.determinedWildcardRules={};this.addWildcardDefinition=(e,r)=>{let i=ve(e),n=i.pop();if(n!==De&&n!==V)return null;let o=this.tree;if(i.forEach(s=>{let a=o.subtree[s];if(a)o=a;else{let l={name:s,subtree:{}};o.subtree[s]=l,o=l}}),n===V){if(o.matchChildren)return{errorMsg:`Duplicate wildcard '${n}' specification for ${e}`};o.matchChildren=r}else{if(o.matchAll)return{errorMsg:`Duplicate wildcard '${n}' specification for ${e}`};o.matchAll=r}};this.folderMatch=e=>{var i,n,o;let r=this.determinedWildcardRules[e];if(r)return(i=r.spec)!=null?i:null;{let s=this.tree.matchChildren,a=this.tree.matchAll,l=ve(e),p=this.tree,d=l.length-1;for(let g=0;g<=d;g++){let S=l[g],h=p.subtree[S];if(h)p=h,s=(n=h==null?void 0:h.matchChildren)!=null?n:null,a=(o=h.matchAll)!=null?o:a;else{g<d&&(s=a);break}}return s=s!=null?s:a,s?(this.determinedWildcardRules[e]={spec:s},s):(this.determinedWildcardRules[e]={},null)}}}};var Ge=(u=>(u[u.SyntaxError=0]="SyntaxError",u[u.SyntaxErrorInGroupSpec=1]="SyntaxErrorInGroupSpec",u[u.DuplicateSortSpecForSameFolder=2]="DuplicateSortSpecForSameFolder",u[u.DuplicateOrderAttr=3]="DuplicateOrderAttr",u[u.DanglingOrderAttr=4]="DanglingOrderAttr",u[u.MissingAttributeValue=5]="MissingAttributeValue",u[u.NoSpaceBetweenAttributeAndValue=6]="NoSpaceBetweenAttributeAndValue",u[u.InvalidAttributeValue=7]="InvalidAttributeValue",u[u.TargetFolderNestedSpec=8]="TargetFolderNestedSpec",u[u.TooManyNumericSortingSymbols=9]="TooManyNumericSortingSymbols",u[u.NumericalSymbolAdjacentToWildcard=10]="NumericalSymbolAdjacentToWildcard",u[u.ItemToHideExactNameWithExtRequired=11]="ItemToHideExactNameWithExtRequired",u[u.ItemToHideNoSupportForThreeDots=12]="ItemToHideNoSupportForThreeDots",u[u.DuplicateWildcardSortSpecForSameFolder=13]="DuplicateWildcardSortSpecForSameFolder",u[u.StandardObsidianSortAllowedOnlyAtFolderLevel=14]="StandardObsidianSortAllowedOnlyAtFolderLevel",u))(Ge||{}),lt=new Set([2,13]),y="...",re=y.length,dt=1,ct={"a-z":{asc:1,desc:3},"true a-z":{asc:2,desc:4},created:{asc:9,desc:11},modified:{asc:5,desc:7},"advanced modified":{asc:6,desc:8},"advanced created":{asc:10,desc:12},"a-z, created":{asc:1,desc:3,secondary:9},"a-z, created desc":{asc:1,desc:3,secondary:11},"a-z, modified":{asc:1,desc:3,secondary:5},"a-z, modified desc":{asc:1,desc:3,secondary:7},"a-z, advanced created":{asc:1,desc:3,secondary:10},"a-z, advanced created desc":{asc:1,desc:3,secondary:12},"a-z, advanced modified":{asc:1,desc:3,secondary:6},"a-z, advanced modified desc":{asc:1,desc:3,secondary:8}},we="by-metadata:";var _e={"target-folder:":1,"order-asc:":2,"order-desc:":3,"sorting:":4,"::::":1,"<":2,"\\<":2,">":3,"\\>":3},Ve=".",ut="/:files",pt="/:",gt="/:files.",ft="/:.",mt="/folders",ht="/",St="%",xt="--%",bt="/--hide:",We="with-metadata:",Ft="//",ie={[pt]:{filesOnly:!0},[ut]:{filesOnly:!0},[ft]:{filesOnly:!0,filenameWithExt:!0},[gt]:{filesOnly:!0,filenameWithExt:!0},[ht]:{foldersOnly:!0},[mt]:{foldersOnly:!0},[St]:{},[xt]:{itemToHide:!0},[bt]:{itemToHide:!0}},F=t=>t===y,ne=t=>t.indexOf(y)!==-1,ze="\\R+",He="\\.R+",$e="\\-R+",ke="\\d+",Ue="\\.d+",Be="\\-d+",yt=/[\^$.\-+\[\]{}()|*?=!\\]/g,T=t=>t.replace(yt,"\\$&"),Ct=[T(ke),T(ze),T(Ue),T(Be),T(He),T($e)],E=new RegExp(Ct.join("|"),"gi"),At=t=>(E.lastIndex=0,E.test(t)&&E.test(t)),Tt=t=>(E.lastIndex=0,E.test(t)),Et=t=>{if(t){E.lastIndex=0;let e=E.exec(t);return e?e[0]:null}else return null},Ot=t=>_(t),It=t=>_(t,ee),Rt=t=>_(t,te),Mt=t=>w(t),Nt=t=>w(t,ee),Lt=t=>w(t,te),Pt={[ze.toLowerCase()]:{regexpStr:Oe,normalizerFn:Ot},[He.toLowerCase()]:{regexpStr:Ie,normalizerFn:It},[$e.toLowerCase()]:{regexpStr:Re,normalizerFn:Rt},[ke.toLowerCase()]:{regexpStr:Me,normalizerFn:Mt},[Ue.toLowerCase()]:{regexpStr:Ne,normalizerFn:Nt},[Be.toLowerCase()]:{regexpStr:Le,normalizerFn:Lt}};var M=(t,e)=>{let r=Et(t);if(r){let i=Pt[r.toLowerCase()],[n,o]=t.split(r),s=e===1||e===3?"^":"",a=e===2||e===3?"$":"";return{regexpSpec:{regex:new RegExp(`${s}${T(n)}${i.regexpStr}${T(o)}${a}`,"i"),normalizerFn:i.normalizerFn},prefix:n,suffix:o}}else return null},$=t=>({noPrefix:t.prefix.length===0,noSuffix:t.suffix.length===0}),vt=t=>t.endsWith(G)||t.endsWith(z)||t.endsWith(H);var Dt=t=>t.endsWith(H)?(t=t.slice(0,-H.length),[t.length>0?t:"/",3]):t.endsWith(G)?(t=t.slice(0,-G.length),[t.length>0?t:"/",2]):t.endsWith(z)?(t=t.slice(0,-z.length),[t.length>0?t:"/",2]):[t,1],wt=(t,e)=>{var i,n;let r=(n=(i=t.trim().split(" "))==null?void 0:i[0])==null?void 0:n.trim();return r||e},k="Numerical sorting symbol must not be directly adjacent to a wildcard because of potential performance problem. An additional explicit separator helps in such case.",U=class{constructor(e){this.errorLogger=e;this.pathMatchPriorityForPath={};this.problem=(e,r)=>{var a;let i=Ge[e],n=(a=this.errorLogger)!=null?a:console.error,o=!lt.has(e),s=o?` line ${this.currentEntryLineIdx} of`:"";n(`Sorting specification problem: ${e}:${i} ${r} ---encountered in${s} sorting spec in file ${this.currentSortingSpecContainerFilePath}`),s&&n(`Content of problematic line: "${this.currentEntryLine}"`),this.recentErrorMessage=`File: ${this.currentSortingSpecContainerFilePath}
`+(o?`Specification line #${this.currentEntryLineIdx}: "${this.currentEntryLine}"
`:"")+`Problem: ${e}:${i}
Details: ${r}`,this.problemAlreadyReportedForCurrentLine=!0};this.parseAttribute=e=>{let r=e.trimStart(),i=e.length-r.length,n=r.indexOf(" ");if(n===-1)return null;let o=r.substring(0,n),s=o.toLowerCase(),a=_e[s];if(a){let l=r.substring(n).trim();if(l){let p=this.attrValueValidators[a];if(p){let d=p(l);if(d)return{nesting:i,attribute:a,value:d};this.problem(7,`Invalid value of the attribute "${o}"`)}else return{nesting:i,attribute:a,value:l}}else this.problem(5,`Attribute "${o}" requires a value to follow`)}return null};this.checkForRiskyAttrSyntaxError=e=>{let r=e.trimStart(),i=r.toLowerCase();for(let n of Object.keys(_e))if(i.startsWith(n)){let o=r.substring(0,n.length);return i.length===n.length?(this.problem(5,`Attribute "${o}" requires a value to follow`),!0):(this.problem(6,`Space required after attribute name "${o}"`),!0)}return!1};this.parseSortingGroupSpec=e=>{let r=e.trim();if(At(r))return this.problem(9,"Maximum one numeric sorting indicator allowed per line"),null;let i=ie[r];if(i)return i.itemToHide?(this.problem(11,"Exact name with ext of file or folders to hide is required"),null):{outsidersGroup:!0,filesOnly:i.filesOnly,foldersOnly:i.foldersOnly};for(let n of Object.keys(ie))if(r.startsWith(n+" ")){let o=ie[n];return o.itemToHide?{itemToHide:!0,plainSpec:r.substring(n.length+1),filesOnly:o.filesOnly,foldersOnly:o.foldersOnly}:{plainSpec:r.substring(n.length+1),filesOnly:o.filesOnly,foldersOnly:o.foldersOnly,matchFilenameWithExt:o.filenameWithExt}}return null};this.validateTargetFolderAttrValue=e=>{if(e){let r=e.trim();return r||null}else return null};this.internalValidateOrderAttrValue=e=>{var s,a;e=e.trim();let r=e,i={},n=!1;if(e.indexOf(we)>0){let l=e.split(we);r=(s=l[0])==null?void 0:s.trim();let p=(a=l[1])==null?void 0:a.trim();p&&(i.applyToMetadataField=p),n=!0}let o=r?ct[r.toLowerCase()]:null;if(o)if(n&&(o.asc===1||o.desc===3||o.asc===2||o.desc===4)){let l=o.asc===2||o.desc===4;o={...o,asc:l?14:13,desc:l?16:15}}else i.applyToMetadataField=void 0;return o?{...o,...i}:null};this.validateOrderAscAttrValue=e=>{let r=this.internalValidateOrderAttrValue(e);return r?{order:r.asc,secondaryOrder:r.secondary,applyToMetadataField:r.applyToMetadataField}:null};this.validateOrderDescAttrValue=e=>{let r=this.internalValidateOrderAttrValue(e);return r?{order:r.desc,secondaryOrder:r.secondary,applyToMetadataField:r.applyToMetadataField}:null};this.validateSortingAttrValue=e=>e.trim().toLowerCase()==="standard"?{order:17}:null;this.attrValueValidators={[1]:this.validateTargetFolderAttrValue.bind(this),[2]:this.validateOrderAscAttrValue.bind(this),[3]:this.validateOrderDescAttrValue.bind(this),[4]:this.validateSortingAttrValue.bind(this)};this.convertPlainStringSortingGroupSpecToArraySpec=e=>{if(e=e.trim(),F(e))return[y];if(e.startsWith(y))return[y,e.substring(re)];if(e.endsWith(y))return[e.substring(0,e.length-re),y];let r=e.indexOf(y);return r>0?[e.substring(0,r),y,e.substring(r+re)]:[e]};this.consumeParsedSortingGroupSpec=e=>{var r,i,n;if(e.outsidersGroup)return{type:0,filesOnly:e.filesOnly,foldersOnly:e.foldersOnly,matchFilenameWithExt:e.matchFilenameWithExt};if(((r=e.arraySpec)==null?void 0:r.length)===1){let o=e.arraySpec[0];if(F(o))return{type:1,filesOnly:e.filesOnly,foldersOnly:e.foldersOnly,matchFilenameWithExt:e.matchFilenameWithExt};if(o.startsWith(We)){let s=wt(o.substring(We.length),P);return{type:6,withMetadataFieldName:s,filesOnly:e.filesOnly,foldersOnly:e.foldersOnly,matchFilenameWithExt:e.matchFilenameWithExt}}else return{type:2,exactText:o,filesOnly:e.filesOnly,foldersOnly:e.foldersOnly,matchFilenameWithExt:e.matchFilenameWithExt}}if(((i=e.arraySpec)==null?void 0:i.length)===2){let o=e.arraySpec[0],s=e.arraySpec[1];return F(o)&&!F(s)&&!ne(s)?{type:4,exactSuffix:s,filesOnly:e.filesOnly,foldersOnly:e.foldersOnly,matchFilenameWithExt:e.matchFilenameWithExt}:!F(o)&&F(s)&&!ne(o)?{type:3,exactPrefix:o,filesOnly:e.filesOnly,foldersOnly:e.foldersOnly,matchFilenameWithExt:e.matchFilenameWithExt}:(this.problem(1,"three dots occurring more than once and no more text specified"),null)}if(((n=e.arraySpec)==null?void 0:n.length)===3){let o=e.arraySpec[0],s=e.arraySpec[1],a=e.arraySpec[2];return F(s)&&!F(o)&&!F(a)&&!ne(a)?{type:5,exactPrefix:o,exactSuffix:a,filesOnly:e.filesOnly,foldersOnly:e.foldersOnly,matchFilenameWithExt:e.matchFilenameWithExt}:(this.problem(1,"three dots occurring more than once or unrecognized specification of sorting rule"),null)}return this.problem(1,"Unrecognized specification of sorting rule"),null};this.adjustSortingGroupForNumericSortingSymbol=e=>{switch(e.type){case 3:let r=M(e.exactPrefix,1);if(r){if($(r).noSuffix)return this.problem(10,k),!1;delete e.exactPrefix,e.regexSpec=r.regexpSpec}break;case 4:let i=M(e.exactSuffix,2);if(i){if($(i).noPrefix)return this.problem(10,k),!1;delete e.exactSuffix,e.regexSpec=i.regexpSpec}break;case 5:let n=M(e.exactPrefix,1);if(n){if($(n).noSuffix)return this.problem(10,k),!1;delete e.exactPrefix,e.regexSpec=n.regexpSpec}else{let s=M(e.exactSuffix,2);if(s){if($(s).noPrefix)return this.problem(10,k),!1;delete e.exactSuffix,e.regexSpec=s.regexpSpec}}break;case 2:let o=M(e.exactText,3);o&&(delete e.exactText,e.regexSpec=o.regexpSpec);break}return!0}}parseSortSpecFromText(e,r,i,n){this.ctx={folderPath:r,specs:[]},this.currentEntryLine=null,this.currentEntryLineIdx=null,this.currentSortingSpecContainerFilePath=null,this.problemAlreadyReportedForCurrentLine=null,this.recentErrorMessage=null;let o=!1,s=0;for(let a of e){s++,this.currentEntryLine=a,this.currentEntryLineIdx=s,this.currentSortingSpecContainerFilePath=`${r==="/"?"":r}/${i}`,this.problemAlreadyReportedForCurrentLine=!1;let l=a.trim();if(l===""||l.startsWith(Ft))continue;o=!1;let p=this.parseAttribute(a);if(p)o=this.processParsedSortingAttribute(p),this.ctx.previousValidEntryWasTargetFolderAttr=o&&p.attribute===1;else if(!this.problemAlreadyReportedForCurrentLine&&!this.checkForRiskyAttrSyntaxError(a)){let d=this.parseSortingGroupSpec(a);!this.problemAlreadyReportedForCurrentLine&&!d&&(d={plainSpec:l}),d&&(o=this.processParsedSortGroupSpec(d)),this.ctx.previousValidEntryWasTargetFolderAttr=void 0}if(!o){this.problemAlreadyReportedForCurrentLine||this.problem(0,"Sorting specification line doesn't match any supported syntax");break}}if(o){if(this.ctx.specs.length>0){for(let l of this.ctx.specs)this.postprocessSortSpec(l);let a;for(let l of this.ctx.specs)for(let p=0;p<l.targetFoldersPaths.length;p++){let d=l.targetFoldersPaths[p];if(vt(d)){a=a!=null?a:new W;let g=a.addWildcardDefinition(d,l);if(g!=null&&g.errorMsg)return this.problem(13,g==null?void 0:g.errorMsg),null}}a&&(n=n!=null?n:{sortSpecByPath:{}},n.sortSpecByWildcard=a);for(let l of this.ctx.specs)for(let p=0;p<l.targetFoldersPaths.length;p++){let d=l.targetFoldersPaths[p];n=n!=null?n:{sortSpecByPath:{}};let g,S;[S,g]=Dt(d);let h=!0,O=this.pathMatchPriorityForPath[S];if(O){if(O===1&&g===1)return this.problem(2,`Duplicate sorting spec for folder ${S}`),null;g>=O&&(h=!1)}h&&(n.sortSpecByPath[S]=l,this.pathMatchPriorityForPath[S]=g)}}return n}else return null}processParsedSortingAttribute(e){if(e.attribute===1)return e.nesting===0?(this.ctx.previousValidEntryWasTargetFolderAttr?this.ctx.currentSpec?this.ctx.currentSpec.targetFoldersPaths.push(e.value):this.ctx.currentSpec=this.putNewSpecForNewTargetFolder(e.value):this.ctx.currentSpec=this.putNewSpecForNewTargetFolder(e.value),!0):(this.problem(8,"Nested (indented) specification of target folder is not allowed"),!1);if(e.attribute===2||e.attribute===3||e.attribute===4){if(e.nesting===0){if(this.ctx.currentSpec||(this.ctx.currentSpec=this.putNewSpecForNewTargetFolder()),this.ctx.currentSpec.defaultOrder){let r=this.ctx.currentSpec.targetFoldersPaths.join(" :: ");return this.problem(3,`Duplicate order specification for folder(s) ${r}`),!1}return this.ctx.currentSpec.defaultOrder=e.value.order,this.ctx.currentSpec.byMetadataField=e.value.applyToMetadataField,!0}else if(e.nesting>0){if(!this.ctx.currentSpec||!this.ctx.currentSpecGroup)return this.problem(4,"Nested (indented) attribute requires prior sorting group definition"),!1;if(this.ctx.currentSpecGroup.order){let r=this.ctx.currentSpec.targetFoldersPaths.join(" :: ");return this.problem(3,`Duplicate order specification for a sorting rule of folder ${r}`),!1}return e.value.order===17?(this.problem(14,"The standard Obsidian sort order is only allowed at a folder level (not nested syntax)"),!1):(this.ctx.currentSpecGroup.order=e.value.order,this.ctx.currentSpecGroup.byMetadataField=e.value.applyToMetadataField,this.ctx.currentSpecGroup.secondaryOrder=e.value.secondaryOrder,!0)}}return!1}processParsedSortGroupSpec(e){if(this.ctx.currentSpec||(this.ctx.currentSpec=this.putNewSpecForNewTargetFolder()),e.plainSpec&&(e.arraySpec=this.convertPlainStringSortingGroupSpecToArraySpec(e.plainSpec),delete e.plainSpec),e.itemToHide)return this.consumeParsedItemToHide(e)?!0:(this.problem(12,"For hiding of file or folder, the exact name with ext is required and no numeric sorting indicator allowed"),!1);{let r=this.consumeParsedSortingGroupSpec(e);return r&&this.adjustSortingGroupForNumericSortingSymbol(r)&&this.ctx.currentSpec?(this.ctx.currentSpec.groups.push(r),this.ctx.currentSpecGroup=r,!0):!1}}postprocessSortSpec(e){var o;e.outsidersGroupIdx=void 0,e.outsidersFilesGroupIdx=void 0,e.outsidersFoldersGroupIdx=void 0;let r,i;for(let s=0;s<e.groups.length;s++){let a=e.groups[s];a.type===0&&(a.filesOnly?b(e.outsidersFilesGroupIdx)?console.warn(`Ignoring duplicate Outsiders-files sorting group definition in sort spec for folder '${R(e.targetFoldersPaths)}'`):(e.outsidersFilesGroupIdx=s,i=!0):a.foldersOnly?b(e.outsidersFoldersGroupIdx)?console.warn(`Ignoring duplicate Outsiders-folders sorting group definition in sort spec for folder '${R(e.targetFoldersPaths)}'`):(e.outsidersFoldersGroupIdx=s,r=!0):b(e.outsidersGroupIdx)?console.warn(`Ignoring duplicate Outsiders sorting group definition in sort spec for folder '${R(e.targetFoldersPaths)}'`):(e.outsidersGroupIdx=s,r=!0,i=!0))}b(e.outsidersGroupIdx)&&(b(e.outsidersFilesGroupIdx)||b(e.outsidersFoldersGroupIdx))&&console.warn(`Inconsistent Outsiders sorting group definition in sort spec for folder '${R(e.targetFoldersPaths)}'`),i&&r||(e.outsidersGroupIdx=e.groups.length,e.groups.push({type:0}));for(let s of e.groups)s.order||(s.order=(o=e.defaultOrder)!=null?o:dt,s.byMetadataField=e.byMetadataField);let n=`${Ve}/`;e.targetFoldersPaths.forEach((s,a)=>{s===Ve?e.targetFoldersPaths[a]=this.ctx.folderPath:s.startsWith(n)&&(e.targetFoldersPaths[a]=`${this.ctx.folderPath}/${s.substring(n.length)}`)})}putNewSpecForNewTargetFolder(e){let r={targetFoldersPaths:[e!=null?e:this.ctx.folderPath],groups:[]};return this.ctx.specs.push(r),this.ctx.currentSpec=void 0,this.ctx.currentSpecGroup=void 0,r}consumeParsedItemToHide(e){var r,i,n;if(((r=e.arraySpec)==null?void 0:r.length)===1){let o=e.arraySpec[0];if(!F(o)){let s=o.trim();if(s&&!Tt(s)&&this.ctx.currentSpec){let a=(n=(i=this.ctx.currentSpec)==null?void 0:i.itemsToHide)!=null?n:new Set;return a.add(s),this.ctx.currentSpec.itemsToHide=a,!0}}}return!1}};var N=require("obsidian"),I="custom-sort-icon-active",B="custom-sort-icon-suspended",L="custom-sort-icon-enabled-not-applied",Z="custom-sort-icon-syntax-error";function Ze(){(0,N.addIcon)(I,`<path d="M 93.54751 9.983795 L 79.21469 31.556912 C 78.297815 32.93695 76.4358 33.31242 75.05576 32.395544 C 74.72319 32.174593 74.43808 31.88948 74.21713 31.556912 L 59.8843 9.983795 C 58.96743 8.603756 59.3429 6.74174 60.722935 5.824865 C 61.21491 5.4980047 61.792426 5.3236456 62.383084 5.3236456 L 91.04873 5.3236456 C 92.70559 5.3236456 94.04873 6.666791 94.04873 8.323646 C 94.04873 8.914304 93.87437 9.49182 93.54751 9.983795 Z" fill="currentColor"/>  
<path d="M 11.096126 32.678017 L 20.217128 18.949499 C 21.134003 17.56946 22.99602 17.193992 24.376058 18.110867 C 24.708624 18.331818 24.99374 18.616933 25.21469 18.949499 L 34.33569 32.678017 C 35.252567 34.058055 34.8771 35.92007 33.49706 36.836947 C 33.005085 37.163807 32.42757 37.338166 31.83691 37.338166 L 13.594907 37.338166 C 11.938053 37.338166 10.594907 35.99502 10.594907 34.338166 C 10.594907 33.747508 10.769266 33.16999 11.096126 32.678017 Z" fill="currentColor"/>  
<path d="M 11.096126 55.71973 L 20.217128 41.991214 C 21.134003 40.611175 22.99602 40.235707 24.376058 41.15258 C 24.708624 41.373533 24.99374 41.65865 25.21469 41.991214 L 34.33569 55.71973 C 35.252567 57.09977 34.8771 58.96179 33.49706 59.87866 C 33.005085 60.20552 32.42757 60.37988 31.83691 60.37988 L 13.594907 60.37988 C 11.938053 60.37988 10.594907 59.036736 10.594907 57.37988 C 10.594907 56.78922 10.769266 56.21171 11.096126 55.71973 Z" fill="currentColor"/>  
<path d="M 2.5382185 90.37054 L 20.217128 63.76105 C 21.134003 62.38101 22.99602 62.005545 24.376058 62.92242 C 24.708624 63.14337 24.99374 63.428486 25.21469 63.76105 L 42.8936 90.37054 C 43.810475 91.75058 43.435006 93.6126 42.05497 94.52947 C 41.562993 94.85633 40.985477 95.03069 40.39482 95.03069 L 5.0369993 95.03069 C 3.380145 95.03069 2.0369993 93.68755 2.0369993 92.03069 C 2.0369993 91.44004 2.2113584 90.86252 2.5382185 90.37054 Z" fill="currentColor"/>  
<path d="M 88.33569 46.24901 L 79.21469 59.97753 C 78.297815 61.35757 76.4358 61.73304 75.05576 60.81616 C 74.72319 60.59521 74.43808 60.310096 74.21713 59.97753 L 65.09613 46.24901 C 64.17925 44.868973 64.55472 43.006957 65.93476 42.09008 C 66.42673 41.76322 67.00425 41.588863 67.59491 41.588863 L 85.83691 41.588863 C 87.49377 41.588863 88.83691 42.93201 88.83691 44.58886 C 88.83691 45.17952 88.66255 45.757036 88.33569 46.24901 Z" fill="currentColor"/>  
<path d="M 88.33569 77.48964 L 79.21469 91.21816 C 78.297815 92.5982 76.4358 92.97366 75.05576 92.05679 C 74.72319 91.83584 74.43808 91.55072 74.21713 91.21816 L 65.09613 77.48964 C 64.17925 76.1096 64.55472 74.247585 65.93476 73.33071 C 66.42673 73.00385 67.00425 72.82949 67.59491 72.82949 L 85.83691 72.82949 C 87.49377 72.82949 88.83691 74.17264 88.83691 75.82949 C 88.83691 76.42015 88.66255 76.99766 88.33569 77.48964 Z"  fill="currentColor"/>`),(0,N.addIcon)(B,`<path d="M 93.54751 9.983795 L 79.21469 31.556912 C 78.297815 32.93695 76.4358 33.31242 75.05576 32.395544 C 74.72319 32.174593 74.43808 31.88948 74.21713 31.556912 L 59.8843 9.983795 C 58.96743 8.603756 59.3429 6.74174 60.722935 5.824865 C 61.21491 5.4980047 61.792426 5.3236456 62.383084 5.3236456 L 91.04873 5.3236456 C 92.70559 5.3236456 94.04873 6.666791 94.04873 8.323646 C 94.04873 8.914304 93.87437 9.49182 93.54751 9.983795 Z" stroke="currentColor" stroke-width="2" fill="none"/>  
<path d="M 2.5382185 90.37054 L 20.217128 63.76105 C 21.134003 62.38101 22.99602 62.005545 24.376058 62.92242 C 24.708624 63.14337 24.99374 63.428486 25.21469 63.76105 L 42.8936 90.37054 C 43.810475 91.75058 43.435006 93.6126 42.05497 94.52947 C 41.562993 94.85633 40.985477 95.03069 40.39482 95.03069 L 5.0369993 95.03069 C 3.380145 95.03069 2.0369993 93.68755 2.0369993 92.03069 C 2.0369993 91.44004 2.2113584 90.86252 2.5382185 90.37054 Z" stroke="currentColor" stroke-width="2" fill="none"/>`),(0,N.addIcon)(Z,`<path d="M 93.54751 9.983795 L 79.21469 31.556912 C 78.297815 32.93695 76.4358 33.31242 75.05576 32.395544 C 74.72319 32.174593 74.43808 31.88948 74.21713 31.556912 L 59.8843 9.983795 C 58.96743 8.603756 59.3429 6.74174 60.722935 5.824865 C 61.21491 5.4980047 61.792426 5.3236456 62.383084 5.3236456 L 91.04873 5.3236456 C 92.70559 5.3236456 94.04873 6.666791 94.04873 8.323646 C 94.04873 8.914304 93.87437 9.49182 93.54751 9.983795 Z" fill="red"/>  
<path d="M 11.096126 32.678017 L 20.217128 18.949499 C 21.134003 17.56946 22.99602 17.193992 24.376058 18.110867 C 24.708624 18.331818 24.99374 18.616933 25.21469 18.949499 L 34.33569 32.678017 C 35.252567 34.058055 34.8771 35.92007 33.49706 36.836947 C 33.005085 37.163807 32.42757 37.338166 31.83691 37.338166 L 13.594907 37.338166 C 11.938053 37.338166 10.594907 35.99502 10.594907 34.338166 C 10.594907 33.747508 10.769266 33.16999 11.096126 32.678017 Z" stroke="red" stroke-width="2" fill="none"/>  
<path d="M 11.096126 55.71973 L 20.217128 41.991214 C 21.134003 40.611175 22.99602 40.235707 24.376058 41.15258 C 24.708624 41.373533 24.99374 41.65865 25.21469 41.991214 L 34.33569 55.71973 C 35.252567 57.09977 34.8771 58.96179 33.49706 59.87866 C 33.005085 60.20552 32.42757 60.37988 31.83691 60.37988 L 13.594907 60.37988 C 11.938053 60.37988 10.594907 59.036736 10.594907 57.37988 C 10.594907 56.78922 10.769266 56.21171 11.096126 55.71973 Z" stroke="red" stroke-width="2" fill="none"/>  
<path d="M 2.5382185 90.37054 L 20.217128 63.76105 C 21.134003 62.38101 22.99602 62.005545 24.376058 62.92242 C 24.708624 63.14337 24.99374 63.428486 25.21469 63.76105 L 42.8936 90.37054 C 43.810475 91.75058 43.435006 93.6126 42.05497 94.52947 C 41.562993 94.85633 40.985477 95.03069 40.39482 95.03069 L 5.0369993 95.03069 C 3.380145 95.03069 2.0369993 93.68755 2.0369993 92.03069 C 2.0369993 91.44004 2.2113584 90.86252 2.5382185 90.37054 Z" stroke="red" stroke-width="2" fill="none"/>  
<path d="M 88.33569 46.24901 L 79.21469 59.97753 C 78.297815 61.35757 76.4358 61.73304 75.05576 60.81616 C 74.72319 60.59521 74.43808 60.310096 74.21713 59.97753 L 65.09613 46.24901 C 64.17925 44.868973 64.55472 43.006957 65.93476 42.09008 C 66.42673 41.76322 67.00425 41.588863 67.59491 41.588863 L 85.83691 41.588863 C 87.49377 41.588863 88.83691 42.93201 88.83691 44.58886 C 88.83691 45.17952 88.66255 45.757036 88.33569 46.24901 Z" fill="red"/>  
<path d="M 88.33569 77.48964 L 79.21469 91.21816 C 78.297815 92.5982 76.4358 92.97366 75.05576 92.05679 C 74.72319 91.83584 74.43808 91.55072 74.21713 91.21816 L 65.09613 77.48964 C 64.17925 76.1096 64.55472 74.247585 65.93476 73.33071 C 66.42673 73.00385 67.00425 72.82949 67.59491 72.82949 L 85.83691 72.82949 C 87.49377 72.82949 88.83691 74.17264 88.83691 75.82949 C 88.83691 76.42015 88.66255 76.99766 88.33569 77.48964 Z" fill="red"/>`),(0,N.addIcon)(L,`<path d="M 93.54751 9.983795 L 79.21469 31.556912 C 78.297815 32.93695 76.4358 33.31242 75.05576 32.395544 C 74.72319 32.174593 74.43808 31.88948 74.21713 31.556912 L 59.8843 9.983795 C 58.96743 8.603756 59.3429 6.74174 60.722935 5.824865 C 61.21491 5.4980047 61.792426 5.3236456 62.383084 5.3236456 L 91.04873 5.3236456 C 92.70559 5.3236456 94.04873 6.666791 94.04873 8.323646 C 94.04873 8.914304 93.87437 9.49182 93.54751 9.983795 Z" stroke="orange" stroke-width="2" fill="none"/>  
<path d="M 11.096126 55.71973 L 20.217128 41.991214 C 21.134003 40.611175 22.99602 40.235707 24.376058 41.15258 C 24.708624 41.373533 24.99374 41.65865 25.21469 41.991214 L 34.33569 55.71973 C 35.252567 57.09977 34.8771 58.96179 33.49706 59.87866 C 33.005085 60.20552 32.42757 60.37988 31.83691 60.37988 L 13.594907 60.37988 C 11.938053 60.37988 10.594907 59.036736 10.594907 57.37988 C 10.594907 56.78922 10.769266 56.21171 11.096126 55.71973 Z" stroke="orange" stroke-width="2" fill="none"/>  
<path d="M 2.5382185 90.37054 L 20.217128 63.76105 C 21.134003 62.38101 22.99602 62.005545 24.376058 62.92242 C 24.708624 63.14337 24.99374 63.428486 25.21469 63.76105 L 42.8936 90.37054 C 43.810475 91.75058 43.435006 93.6126 42.05497 94.52947 C 41.562993 94.85633 40.985477 95.03069 40.39482 95.03069 L 5.0369993 95.03069 C 3.380145 95.03069 2.0369993 93.68755 2.0369993 92.03069 C 2.0369993 91.44004 2.2113584 90.86252 2.5382185 90.37054 Z" stroke="orange" stroke-width="2" fill="none"/>  
<path d="M 88.33569 46.24901 L 79.21469 59.97753 C 78.297815 61.35757 76.4358 61.73304 75.05576 60.81616 C 74.72319 60.59521 74.43808 60.310096 74.21713 59.97753 L 65.09613 46.24901 C 64.17925 44.868973 64.55472 43.006957 65.93476 42.09008 C 66.42673 41.76322 67.00425 41.588863 67.59491 41.588863 L 85.83691 41.588863 C 87.49377 41.588863 88.83691 42.93201 88.83691 44.58886 C 88.83691 45.17952 88.66255 45.757036 88.33569 46.24901 Z" stroke="orange" stroke-width="2" fill="none"/>`)}var _t={additionalSortspecFile:"",suspended:!0,statusBarEntryEnabled:!0,notificationsEnabled:!0},Vt="sortspec.md",Xe="sorting-spec",Wt=1e4,X=class extends f.Plugin{showNotice(r,i){this.settings.notificationsEnabled&&new f.Notice(r,i)}readAndParseSortingSpec(){let r=this.app.metadataCache,i=!1,n=!1,o=null;this.sortSpecCache=null;let s=new U;f.Vault.recurseChildren(this.app.vault.getRoot(),a=>{var l,p,d;if(!i&&a instanceof f.TFile){let g=a,S=g.parent;if(g.name===Vt||g.basename===S.name||g.basename===this.settings.additionalSortspecFile||g.path===this.settings.additionalSortspecFile||g.path===this.settings.additionalSortspecFile+".md"){let h=(p=(l=r.getCache(g.path))==null?void 0:l.frontmatter)==null?void 0:p[Xe];h&&(n=!0,this.sortSpecCache=s.parseSortSpecFromText(h.split(`
`),S.path,g.name,this.sortSpecCache),this.sortSpecCache===null&&(i=!0,o=(d=s.recentErrorMessage)!=null?d:""))}}}),this.sortSpecCache?this.showNotice("Parsing custom sorting specification SUCCEEDED!"):(n?o=o||`No valid '${Xe}:' key(s) in YAML front matter or multiline YAML indentation error or general YAML syntax error`:o="No custom sorting specification found or only empty specification(s)",this.showNotice(`Parsing custom sorting specification FAILED. Suspending the plugin.
${o}`,Wt),this.settings.suspended=!0,this.saveSettings())}switchPluginStateTo(r,i=!0){this.settings.suspended=!r,this.saveSettings();let n;this.settings.suspended?(this.showNotice("Custom sort OFF"),this.sortSpecCache=null,n=B):(this.readAndParseSortingSpec(),this.sortSpecCache?(this.showNotice("Custom sort ON"),this.initialAutoOrManualSortingTriggered=!0,n=I):(n=Z,this.settings.suspended=!0,this.saveSettings()));let o=this.getFileExplorer();o?(this.fileExplorerFolderPatched||(this.fileExplorerFolderPatched=this.patchFileExplorerFolder(o)),this.fileExplorerFolderPatched&&o.requestSort()):n===I&&(n=L,i&&(this.ribbonIconStateInaccurate=!0)),i&&(0,f.setIcon)(this.ribbonIconEl,n),this.updateStatusBar()}async onload(){console.log(`loading custom-sort v${this.manifest.version}`),await this.loadSettings(),this.settings.statusBarEntryEnabled&&(this.statusBarItemEl=this.addStatusBarItem(),this.updateStatusBar()),Ze(),this.ribbonIconEl=this.addRibbonIcon(this.settings.suspended?B:L,"Toggle custom sorting",r=>{this.switchPluginStateTo(this.settings.suspended)}),this.settings.suspended||(this.ribbonIconStateInaccurate=!0),this.addSettingTab(new oe(this.app,this)),this.registerEventHandlers(),this.registerCommands(),this.initialize()}registerEventHandlers(){let r=this;this.registerEvent(this.app.metadataCache.on("resolved",()=>{if(!this.settings.suspended&&!this.initialAutoOrManualSortingTriggered)if(this.readAndParseSortingSpec(),this.initialAutoOrManualSortingTriggered=!0,this.sortSpecCache){this.showNotice("Custom sort ON");let i=this.getFileExplorer();i?((0,f.setIcon)(this.ribbonIconEl,I),i.requestSort()):((0,f.setIcon)(this.ribbonIconEl,L),r.ribbonIconStateInaccurate=!0),this.updateStatusBar()}else this.settings.suspended=!0,(0,f.setIcon)(this.ribbonIconEl,Z),this.saveSettings()}))}registerCommands(){let r=this;this.addCommand({id:"enable-custom-sorting",name:"Enable and apply the custom sorting, (re)parsing the sorting configuration first. Sort-on.",callback:()=>{r.switchPluginStateTo(!0,!0)}}),this.addCommand({id:"suspend-custom-sorting",name:"Suspend the custom sorting. Sort-off.",callback:()=>{r.switchPluginStateTo(!1,!0)}})}initialize(){this.app.workspace.onLayoutReady(()=>{this.fileExplorerFolderPatched=this.patchFileExplorerFolder()})}patchFileExplorerFolder(r){let i=this;if(r=r!=null?r:this.getFileExplorer(),r){let n=new f.TFolder(f.Vault,""),o=r.createFolderDom(n).constructor,s=me(o.prototype,{sort(a){return function(...l){var g,S,h;if(i.settings.suspended)return a.call(this,...l);i.ribbonIconStateInaccurate&&i.ribbonIconEl&&(i.ribbonIconStateInaccurate=!1,(0,f.setIcon)(i.ribbonIconEl,I));let p=this.file,d=(g=i.sortSpecCache)==null?void 0:g.sortSpecByPath[p.path];return d?d.defaultOrder===17&&(d=null):(S=i.sortSpecCache)!=null&&S.sortSpecByWildcard&&(d=(h=i.sortSpecCache)==null?void 0:h.sortSpecByWildcard.folderMatch(p.path),(d==null?void 0:d.defaultOrder)===17&&(d=null)),d?(d.plugin=i,Te.call(this,d,...l)):a.call(this,...l)}}});return this.register(s),!0}else return!1}getFileExplorer(){var i,n;return(n=(i=this.app.workspace.getLeavesOfType("file-explorer"))==null?void 0:i.first())==null?void 0:n.view}onunload(){}updateStatusBar(){this.statusBarItemEl&&this.statusBarItemEl.setText(`Custom sort:${this.settings.suspended?"OFF":"ON"}`)}async loadSettings(){this.settings=Object.assign({},_t,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}},oe=class extends f.PluginSettingTab{constructor(r,i){super(r,i);this.plugin=i}display(){let{containerEl:r}=this;r.empty(),r.createEl("h2",{text:"Settings for Custom File Explorer Sorting Plugin"}),new f.Setting(r).setName("Path to the designated note containing sorting specification").setDesc("The YAML front matter of this note will be scanned for sorting specification, in addition to the `sortspec` notes and folder notes. The `.md` filename suffix is optional.").addText(i=>i.setPlaceholder("e.g. Inbox/sort").setValue(this.plugin.settings.additionalSortspecFile).onChange(async n=>{this.plugin.settings.additionalSortspecFile=n.trim()?(0,f.normalizePath)(n):"",await this.plugin.saveSettings()})),new f.Setting(r).setName("Enable the status bar entry").setDesc("The status bar entry shows the label `Custom sort:ON` or `Custom sort:OFF`, representing the current state of the plugin.").addToggle(i=>i.setValue(this.plugin.settings.statusBarEntryEnabled).onChange(async n=>{this.plugin.settings.statusBarEntryEnabled=n,n?(this.plugin.statusBarItemEl&&this.plugin.statusBarItemEl.detach(),this.plugin.statusBarItemEl=this.plugin.addStatusBarItem(),this.plugin.updateStatusBar()):this.plugin.statusBarItemEl&&this.plugin.statusBarItemEl.detach(),await this.plugin.saveSettings()})),new f.Setting(r).setName("Enable notifications of plugin state changes").setDesc("The plugin can show notifications about its state changes: e.g. when successfully parsed and applied the custom sorting specification, or, when the parsing failed. If the notifications are disabled, the only indicator of plugin state is the ribbon button icon. The developer console presents the parsing error messages regardless if the notifications are enabled or not.").addToggle(i=>i.setValue(this.plugin.settings.notificationsEnabled).onChange(async n=>{this.plugin.settings.notificationsEnabled=n,await this.plugin.saveSettings()}))}};
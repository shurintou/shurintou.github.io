"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[329],{26e3:function(e,n,t){var r=t(1413),o=t(97788),i=t(59220),a=t(68438),l=t(80184),s=o.Z.Text;n.Z=function(e){return(0,l.jsxs)("span",{style:(0,r.Z)({},e.layoutStyle),children:[(0,l.jsx)(i.Z,{title:e.title,color:a.Z.antdProps.themeColor,children:(0,l.jsx)("span",{children:e.slot})}),(0,l.jsx)(s,{style:{marginLeft:"1em"},children:e.text})]})}},60393:function(e,n,t){var r=t(97788),o=t(59220),i=t(68438),a=t(63153),l=t(2395),s=t(80184),c=r.Z.Text;n.Z=function(e){var n=(0,a.C)((function(e){return e.language.value}));return(0,s.jsx)("div",{style:{marginBottom:"1em"},children:(0,s.jsx)(o.Z,{title:e.dateLocal,placement:"right",color:i.Z.antdProps.themeColor,children:(0,s.jsx)(c,{type:"secondary",children:(0,s.jsx)("span",{lang:n,children:n===l.mb.ja.key?e.dateFromNow+" "+e.text:e.text+" "+e.dateFromNow})})})})}},10166:function(e,n,t){var r=t(1413),o=t(72791),i=t(40718),a=t.n(i),l=(t(24458),t(68438)),s=t(50119),c=t(63153),d=t(80184),u=function(e){var n=(0,c.C)((function(e){return e.language.value})),t=e.postId;return(0,o.useEffect)((function(){e.shouldRender&&function(e){var t=(0,r.Z)((0,r.Z)({},s.Z),{},{language:n,number:e,perPage:l.Z.postProps.commentCountPerPage}),o=new(a())(t),i=document.querySelector("#gitalk-container");i&&i.childNodes.forEach((function(e){i.removeChild(e)})),o.render("gitalk-container")}(t)}),[t,n,e.shouldRender]),(0,d.jsx)("div",{id:"gitalk-container",lang:n})};n.Z=function(e){return(0,d.jsx)(u,(0,r.Z)({},e))}},54342:function(e,n,t){var r=t(1413),o=t(29439),i=t(72791),a=t(97788),l=t(47528),s=t(59220),c=t(25671),d=t(93859),u=t(93285),f=t(68438),m=t(63153),p=t(41706),g=t(2395),h=t(91636),Z=t(80184),x=a.Z.Text,v=function(e){var n=(0,i.useState)({id:0,name:"undefined",description:"",color:"cyan"}),t=(0,o.Z)(n,2),a=t[0],v=t[1],b=(0,i.useState)([]),j=(0,o.Z)(b,2),y=j[0],C=j[1],k=(0,m.C)((function(e){return e.language.value})),w=(0,m.C)((function(e){return e.filterLabel.value})),S=(0,m.T)(),P=(0,i.useState)(N(k,"tag")),_=(0,o.Z)(P,2),B=_[0],I=_[1],L=(0,i.useState)(N(k,"category")),T=(0,o.Z)(L,2),E=T[0],z=T[1];function N(e,n){if("tag"===n||"category"===n)return g.mb[e].tagCategoryObj[n]}var A=window.location.href.indexOf(g.jJ.list)>=0,R=function(e){return A&&w.findIndex((function(n){return n.id===e.id}))>=0},W=function(e){var n=w.filter((function(n){return n.id!==e.id}));S((0,p.qu)(n))};(0,i.useEffect)((function(){I(N(k,"tag")),z(N(k,"category"))}),[k]),(0,i.useEffect)((function(){var n=[];e.labelList.length>0&&(e.labelList.forEach((function(t,o){var i=t.name.split(":"),a=i[0];if("category"===a)v((0,r.Z)((0,r.Z)({},t),{},{color:"cyan"}));else if("language"===a){var l="";switch(i[1].toLowerCase()){case g.mb.zh.lowerCase:l=g.mb.zh.key;break;case g.mb.ja.lowerCase:l=g.mb.ja.key;break;default:l=g.mb.en.key}e.setPostLanguage(l)}else n.push(t)})),n.sort((function(e,n){return e.name.localeCompare(n.name)})),C(n))}),[]);var q=function(e){var n=e.label,t=/^[A-F0-9]+$/i.test(n.color);return(0,Z.jsx)(l.Z,{style:{borderRadius:"1em",cursor:A?"pointer":"default",color:t?(0,d.nt)(n.color):"#000000",display:"inline-block"},color:(t?"#":"")+n.color,onClick:function(){return function(e){if(A)if(-1===w.findIndex((function(n){return n.id===e.id}))){var n=w.filter((function(){return!0}));n.push(e),S((0,p.qu)(n))}else W(e)}(n)},closable:R(n),onClose:function(){W(n)},icon:A&&w.some((function(e){return e.id===n.id}))?(0,Z.jsx)(h.Z,{}):null,children:(0,Z.jsx)(x,{strong:!0,style:{color:t?(0,d.nt)(n.color):""},children:n.name.split(":")[1]})})},O=function(e){var n=e.tag;return A&&(0,u.TI)()?(0,Z.jsx)(q,{label:n}):(0,Z.jsxs)(s.Z,{title:n.description,color:f.Z.antdProps.themeColor,trigger:["hover","click","focus"],children:[(0,Z.jsx)(q,{label:n}),"\xa0"]})};return(0,Z.jsxs)(c.Z,{style:(0,r.Z)({},e.layoutStyle),children:[(0,Z.jsxs)("div",{style:{marginBottom:"1em"},children:[(0,Z.jsx)(x,{style:{marginRight:"0.5em"},children:(0,Z.jsx)("span",{lang:k,children:E})}),(0,Z.jsx)(O,{tag:a})]}),y.length>0&&(0,Z.jsxs)("div",{style:{marginBottom:"1em"},children:[(0,Z.jsx)(x,{style:{marginRight:"0.5em"},children:(0,Z.jsx)("span",{lang:k,children:B})}),y.map((function(e){return(0,Z.jsx)("span",{children:(0,Z.jsx)(O,{tag:e})},e.id)}))]})]})};n.Z=function(e){return(0,Z.jsx)(v,(0,r.Z)({},e))}},87621:function(e,n,t){t.d(n,{Z:function(){return L}});var r=t(44925),o=t(1413),i=t(29439),a=t(72791),l=t(52366),s=t(97788),c=t(70141),d=t(25671),u=t(83099),f=t(66106),m=t(30914),p=t(51992),g=t(18096),h=t(52792),Z=t(64209),x=t(49316),v=t(68438),b=t(2395),j=t(93859),y="markdown_pTagInsideBlockquote__6-IYA",C="markdown_textFontSize__JukC1",k="markdown_tableTr__O4d48",w=t(80184),S=["node","inline","className","children"],P=["node","className","children"],_=s.Z.Link,B=function(e){var n=e.postText,t=e.postLang,s=function(e){var n=e.level,t=e.children,r=.15*(7-n)+.8,o=new RegExp("#anchor\\d","i"),i=String(t).match(o),l={style:{fontSize:r+"em",marginTop:.1*(5-n)+1+"em",fontWeight:700},children:t=String(t).replace(o,"")};if(i&&(l.id=i[0].split("#")[1]),3===n){var s=l.style;s.borderLeft=v.Z.markdownProps.hLeftBorderColor+" solid 8px",s.paddingLeft="0.5em"}else if(n<3){var c=l.style;c.borderBottom=v.Z.markdownProps.hBottomBorderColor+" solid "+(1===n?"8px":"4px"),c.paddingLeft="0.5em"}return a.createElement("h"+n,l)},B=(0,j.WA)((function(e,n){var t=n.children,r={style:{borderStyle:"solid",borderWidth:"2px",borderColor:v.Z.markdownProps.trBorderColor,padding:"0.4em 0.8em",textAlign:"center"},children:t};return a.createElement(e,r)})),L=function(){return window.location.href.indexOf(b.jJ.list)>=0},T=c.Z.TabPane,E=(0,a.useState)("0"),z=(0,i.Z)(E,2),N=z[0],A=z[1],R={borderRadius:"6px"},W={fontSize:"1.2em"},q={fontWeight:"bold"};return(0,w.jsx)("div",{style:(0,o.Z)((0,o.Z)({},e.layoutStyle),{},{flex:1}),children:(0,w.jsx)(l.D,{children:n?L()?function(e){var n=(0,j.p0)(e,"\r\n",v.Z.postProps.previewLine);return e.substring(0,n)}(n):n:"",remarkPlugins:[g.Z,h.Z],className:C,includeElementIndex:!0,components:{h1:s,h2:s,h3:s,h4:s,h5:s,h6:s,code:function(e){e.node;var n,i=e.inline,a=e.className,l=e.children,s=(0,r.Z)(e,S),f=/language-(\w+)/.exec(a||""),m=null===f||void 0===f?void 0:f.at(1),p=["success","info","warning","error"].includes(m),g="multi"===m,h=null===(n=v.Z.alertProps[m])||void 0===n?void 0:n.icon,b=0,j=[];return g&&String(l).replace(/\n$/,"").split("```").filter((function(e,n){return n>0})).forEach((function(e){for(var n=e.split("\r\n");""===n[n.length-1];)n.pop();n.length>b&&(b=n.length),j.push({language:n[0].split(" ")[0],children:[n.filter((function(e,n){return n>0})).join("\r\n"),n[0].split(" ")[1]]})})),i||!f||L()?l.toString().trim().length>0?(0,w.jsx)("code",(0,o.Z)((0,o.Z)({style:(0,o.Z)({padding:".2em .4em",margin:0,backgroundColor:"rgba(175,184,193,0.2)"},R),className:a},s),{},{children:l})):(0,w.jsx)("span",{}):p?(0,w.jsxs)(d.Z,{style:v.Z.alertProps[m].style,children:[(0,w.jsx)(h,{style:v.Z.alertProps[m].iconStyle}),(0,w.jsx)(u.Z,{wrap:!0,size:16,children:(0,w.jsx)(I,{postText:l.toString(),isInAlertBlock:!0,postLang:t})})]}):g?(0,w.jsx)(c.Z,{defaultActiveKey:"0",activeKey:N,style:(0,o.Z)({backgroundColor:"rgb(45, 45, 45)"},R),className:"tabStyle",type:"card",tabBarGutter:0,onChange:function(e){return A(e)},tabBarStyle:(0,o.Z)({backgroundColor:"rgb(80, 80, 80)",margin:0},R),children:j.map((function(e,n){return(0,w.jsx)(T,{tab:(0,w.jsx)("span",{style:(0,o.Z)((0,o.Z)((0,o.Z)({},W),q),{},{color:N===n.toString()?v.Z.antdProps.themeColor:v.Z.antdProps.inactiveTabFontColor}),children:e.children[1]}),children:(0,w.jsx)(Z.Z,{children:e.children[0],style:x.Z?x.Z:void 0,customStyle:(0,o.Z)((0,o.Z)((0,o.Z)({},R),{},{height:1.6*b+"em"},W),q),language:e.language,PreTag:"div"})},n)}))}):(0,w.jsx)(Z.Z,{children:String(l).replace(/\n$/,""),style:x.Z?x.Z:void 0,customStyle:(0,o.Z)((0,o.Z)({},R),q),language:f[1],PreTag:"div"})},blockquote:function(e){e.node,e.className;var n=e.children,t=(0,r.Z)(e,P);return(0,w.jsx)("blockquote",(0,o.Z)((0,o.Z)({},t),{},{className:y,style:{borderLeft:".25em solid",borderLeftColor:v.Z.antdProps.borderColor,padding:"0 1em"},children:n}))},a:function(e){var n=e.children,t=e.href;return(0,w.jsx)(_,{underline:!0,onClick:function(e){return function(e,n){if(e.preventDefault(),window.location.href.indexOf(b.jJ.list)>=0)return!1;if(n&&n.startsWith("#")){var t=document.querySelector(n);t&&(0,j.k6)(t,500)}else window.open(n,"_blank");return!1}(e,t)},children:n})},table:function(e){var n=e.children;return(0,w.jsx)("div",{style:{overflowX:"auto"},children:(0,w.jsx)("table",{children:n})})},tr:function(e){var n=e.children,t=e.isHeader,r=e.index;return(0,w.jsx)("tr",{className:k,style:{borderStyle:"solid",borderWidth:"2px",borderColor:v.Z.markdownProps.trBorderColor,backgroundColor:t||r&&r%2===1?v.Z.markdownProps.trBackgroundColorDark:v.Z.markdownProps.trBackgroundColorLight},children:n})},th:B("th"),td:B("td"),img:function(e){var n=e.src,t=e.alt;return L()?(0,w.jsx)("span",{}):(0,w.jsx)(f.Z,{justify:"center",style:{marginBottom:"1em",marginTop:"1em"},children:(0,w.jsx)(m.Z,{children:(0,w.jsx)(p.Z,{alt:t,src:n})})})},p:function(n){var r=n.children;return r.some((function(e){var n;return"img"===(null===e||void 0===e||null===(n=e.type)||void 0===n?void 0:n.name)}))?a.createElement("div",{children:r}):(0,w.jsx)("p",{style:{fontSize:e.isInAlertBlock?"0.8em":"1em",lineHeight:e.isInAlertBlock?1:t===b.mb.en.key?"2em":"2.5em"},children:r})},li:function(n){var t=n.children;return(0,w.jsx)("li",{style:{marginBottom:"1em",lineHeight:e.isInAlertBlock?1:"2em"},children:t})}}})})},I=function(e){return(0,w.jsx)(B,(0,o.Z)({},e))},L=a.memo(I)},65814:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var r=t(1413),o=t(29439),i=t(72791),a=t(20501),l=t(16871),s=t(97788),c=t(37083),d=t(25671),u=t(66106),f=t(30914),m=t(87309),p=t(91333),g=t(83099),h=t(43292),Z=t(76864),x=t(92995),v=t(26e3),b=t(54534),j=t(27021),y=t(87621),C=t(10166),k=t(60393),w=t(54342),S=t(93859),P=t(68438),_={icon:function(e,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z",fill:e}},{tag:"path",attrs:{d:"M679.7 201c-73.1 0-136.5 40.8-167.7 100.4C480.8 241.8 417.4 201 344.3 201c-104 0-188.3 82.6-188.3 184.5 0 201.2 356 429.3 356 429.3s356-228.1 356-429.3C868 283.6 783.7 201 679.7 201z",fill:n}}]}},name:"heart",theme:"twotone"},B=t(54291),I=function(e,n){return i.createElement(B.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:_}))};I.displayName="HeartTwoTone";var L=i.forwardRef(I),T=t(47391),E=t(90544),z=t(50119),N=t(41982),A="https://api.github.com";function R(e){return(0,N.fm)()?(0,E.Z)({url:A+"/graphql",method:"post",data:{operationName:"getReactions",query:'\n                query getReactions {\n                    repository(owner:"'.concat(z.Z.owner,'", name:"').concat(z.Z.repo,'") {\n                        issue(number:').concat(e.issue_number,") {\n                            reactions(last: ").concat(e.per_page,", content: ").concat(e.content.toUpperCase(),") {\n                                edges {\n                                    node {\n                                        databaseId\n                                        content\n                                        user {\n                                            databaseId\n                                            login\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            ")},headers:{Authorization:"bearer "+(0,N.fm)()}}):Promise.reject()}var W=t(80184);var q=function(e){var n=(0,i.useState)(0),t=(0,o.Z)(n,2),r=t[0],a=t[1],l="heart",s={issue_number:e.number,content:l,per_page:100};(0,i.useEffect)((function(){var e,n=15;return e=setInterval((function(){n--,R(s).then(c).then((function(){return clearInterval(e)})).catch((function(e){})),n<=0&&clearInterval(e)}),1e3),function(){return clearInterval(e)}}),[]);var c=function(n){var t=n.data.repository.issue.reactions.edges,r=t.length;if(e.likeHandler(r),r>0){var o=t.find((function(e){return e.node.user.databaseId===(0,N.CS)().id&&e.node.user.login===(0,N.CS)().login}));a(void 0!==o?o.node.databaseId:0)}else a(0)},d=function(){R(s).then(c)};return(0,W.jsx)("span",{style:{cursor:"pointer"},onClick:function(){var n;0!==r?(n={number:e.number,id:r},(0,E.Z)({url:A+"/repos/"+z.Z.owner+"/"+z.Z.repo+"/issues/"+n.number+"/reactions/"+n.id,method:"delete",headers:{Authorization:"token "+(0,N.fm)(),Accept:"application/vnd.github.v3+json"}})).then(d):function(e){return(0,E.Z)({url:A+"/repos/"+z.Z.owner+"/"+z.Z.repo+"/issues/"+e.number+"/reactions",method:"post",headers:{Authorization:"token "+(0,N.fm)(),Accept:"application/vnd.github.v3+json"},data:{content:e.content}})}({number:e.number,content:l}).then(d)},children:0!==r?(0,W.jsx)(L,{}):(0,W.jsx)(T.Z,{})})},O=t(93285),F=t(63153),D=t(2395),H=s.Z.Title,J=s.Z.Text,$=function(){var e,n=(0,l.s0)(),t=(0,a.lr)(),s=(0,o.Z)(t,1)[0],_=(0,i.useState)(s.get("id")),B=(0,o.Z)(_,2),I=B[0],L=B[1],T=(0,i.useState)(!1),E=(0,o.Z)(T,2),z=E[0],A=E[1],R=(0,i.useState)(!0),$=(0,o.Z)(R,2),M=$[0],U=$[1],K=(0,i.useState)(),Q=(0,o.Z)(K,2),G=Q[0],X=Q[1],Y=(0,i.useState)(0),V=(0,o.Z)(Y,2),ee=V[0],ne=V[1],te=(0,i.useState)(!0),re=(0,o.Z)(te,2),oe=re[0],ie=re[1],ae=(0,i.useState)((0,O.f8)()),le=(0,o.Z)(ae,2),se=le[0],ce=le[1],de=(0,i.useState)(!1),ue=(0,o.Z)(de,2),fe=ue[0],me=ue[1];(0,i.useEffect)((function(){var e=s.get("id");L(e),ge(e)}),[s]);var pe=(0,F.C)((function(e){return e.language.value}));(0,i.useEffect)((function(){function e(){ie(window.innerWidth>=768)}ge(I);var n=(0,S.Ds)(e,P.Z.eventProps.resizeDebounceDelay);return e(),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[pe]);var ge=function(e){if(e){var n=parseInt(e),t=sessionStorage.getItem(D.Uf.postId+n);me(!1),U(!0),t?setTimeout((function(){X(JSON.parse(t)),A(!0),me(!0),U(!1)}),500):(0,b.s)({number:n}).then((function(e){var t=Object.assign(e,{created_at_local:(0,j.Ph)(e.created_at),updated_at_local:(0,j.Ph)(e.updated_at),created_from_now:(0,j.wQ)((0,j.$I)(e.created_at),pe),updated_from_now:(0,j.wQ)((0,j.$I)(e.updated_at),pe)});X(t),A(!0),me(!0),sessionStorage.setItem(D.Uf.postId+n,JSON.stringify(t))})).finally((function(){return U(!1)}))}},he=(0,i.useState)((0,j.W6)(pe,!0)),Ze=(0,o.Z)(he,2),xe=Ze[0],ve=Ze[1],be=(0,i.useState)((0,j.W6)(pe,!1)),je=(0,o.Z)(be,2),ye=je[0],Ce=je[1];(0,i.useEffect)((function(){ve((0,j.W6)(pe,!0)),Ce((0,j.W6)(pe,!1)),_e(ke(pe)[0]),Te(ke(pe)[1])}),[pe]);var ke=function(e){var n=D.mb[e];return[n.likeText,n.commentText]},we=(0,i.useState)(ke(pe)[0]),Se=(0,o.Z)(we,2),Pe=Se[0],_e=Se[1],Be=(0,i.useState)(ke(pe)[1]),Ie=(0,o.Z)(Be,2),Le=Ie[0],Te=Ie[1],Ee={backgroundColor:P.Z.antdProps.postBackgroundColor};return(0,W.jsx)(c.Z,{spinning:M,size:"large",tip:D.mb[pe].loading,children:(0,W.jsxs)(d.Z,{lang:se,children:[(0,W.jsxs)(u.Z,{children:[(0,W.jsx)(f.Z,{xs:0,sm:0,md:3,lg:3,xl:3}),(0,W.jsxs)(f.Z,{xs:24,sm:24,md:18,lg:18,xl:18,children:[z?(0,W.jsxs)(d.Z,{children:[(0,W.jsx)(d.Z,{children:(0,W.jsxs)(H,{level:3,style:{backgroundColor:oe?P.Z.antdProps.titleBackgroundColor:P.Z.antdProps.postBackgroundColor,borderWidth:"2px",borderStyle:"solid",borderColor:oe?P.Z.antdProps.borderColor:P.Z.antdProps.postBackgroundColor,borderRadius:oe?"6px 6px 0px 0px":"0px",marginBottom:"0em",paddingLeft:oe?"0.5em":"0em"},children:[(0,W.jsx)(m.Z,{style:{backgroundColor:oe?P.Z.antdProps.borderColor:P.Z.antdProps.postBackgroundColor,verticalAlign:"0px",borderColor:oe?P.Z.antdProps.borderColor:P.Z.antdProps.postBackgroundColor},icon:(0,W.jsx)(Z.Z,{}),onClick:function(){n(-1)}}),(0,W.jsx)(J,{style:{color:P.Z.antdProps.themeColor},children:null===G||void 0===G?void 0:G.title})]})}),(0,W.jsxs)(d.Z,{style:(0,r.Z)({padding:"1em 1em",borderWidth:oe?"2px":"",borderStyle:oe?"solid":"none",borderColor:P.Z.antdProps.borderColor,borderRadius:oe?"0px 0px 6px 6px":"0px"},Ee),children:[(0,W.jsxs)(u.Z,{children:[(0,W.jsx)(f.Z,{span:16,children:(0,W.jsx)(k.Z,{dateFromNow:G?G.created_from_now:"",dateLocal:G?G.created_at_local:"",text:xe})}),(0,W.jsx)(f.Z,{span:1,offset:7})]}),G&&(0,W.jsx)(w.Z,{layoutStyle:(0,r.Z)({},Ee),labelList:null===G||void 0===G?void 0:G.labels,setPostLanguage:ce}),(0,W.jsx)(p.Z,{style:{margin:"0em 0em 1em 0em"}}),(0,W.jsx)(y.Z,{postText:null===G||void 0===G?void 0:G.body,postLang:se}),(null===G||void 0===G?void 0:G.updated_at)!==(null===G||void 0===G?void 0:G.created_at)&&(0,W.jsx)(k.Z,{dateFromNow:G?G.updated_from_now:"",dateLocal:G?G.updated_at_local:"",text:ye}),(0,W.jsxs)(g.Z,{size:"small",split:(0,W.jsx)(p.Z,{type:"vertical",style:{borderLeftColor:"rgba(0,0,0,0.6)"}}),children:[(0,W.jsx)(v.Z,{title:Pe,slot:(0,W.jsx)(q,{number:G?null===G||void 0===G?void 0:G.number:0,likeHandler:ne}),text:G?(0,W.jsx)(J,{children:G.reactions["+1"]+G.reactions.hooray+G.reactions.laugh+G.reactions.rocket+(0===(null===(e=(0,N.CS)())||void 0===e?void 0:e.id)?G.reactions.heart:ee)}):(0,W.jsx)(c.Z,{})}),(0,W.jsx)(v.Z,{title:Le,slot:(0,W.jsx)(x.Z,{onClick:function(){var e=document.getElementById("gitalk-container");e&&(0,S.k6)(e,500)}}),text:G?(0,W.jsx)(J,{children:G.comments}):(0,W.jsx)(c.Z,{})})]})]})]}):(0,W.jsx)(d.Z,{style:{marginTop:"5em"}}),(0,W.jsx)(d.Z,{style:{padding:oe?"0em":"0.5em"},children:I&&(0,W.jsx)(C.Z,{postId:parseInt(I),shouldRender:fe})})]}),(0,W.jsx)(f.Z,{xs:0,sm:0,md:3,lg:3,xl:3})]}),(0,W.jsx)(h.Z,{target:function(){return document}})]})})},M=function(){return(0,W.jsx)($,{})}}}]);
//# sourceMappingURL=Home14.5bd8be1c.chunk.js.map
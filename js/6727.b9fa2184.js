"use strict";(self["webpackChunktailkit"]=self["webpackChunktailkit"]||[]).push([[6727],{96727:function(e,t,o){o.r(t),o.d(t,{default:function(){return w}});var i=o(1987);const a=(0,i.Uk)(),l={class:"inline-flex"},c=(0,i._)("span",null,[(0,i.Uk)("Copying "),(0,i._)("span",{class:"text-red-500"},"bg-*"),(0,i.Uk)(" class")],-1),s=(0,i.Uk)(),n=(0,i._)("span",null,[(0,i.Uk)("Copying "),(0,i._)("span",{class:"text-red-500"},"text-*"),(0,i.Uk)(" class")],-1),r=(0,i.Uk)(),d=(0,i.Uk)(),p={class:"grid grid-cols-10 gap-2 lg:gap-5 lg:my-5"},u=["onClick"],g=(0,i.Uk)();function y(e,t,o,y,k,m){const C=(0,i.up)("tk-page-heading"),v=(0,i.up)("tk-button"),f=(0,i.up)("tk-icon"),h=(0,i.up)("tk-badge"),w=(0,i.up)("tk-card-header"),b=(0,i.up)("tk-card-body"),x=(0,i.up)("tk-card"),_=(0,i.up)("tk-section");return(0,i.wg)(),(0,i.j4)(_,{variant:"boxed",class:"space-y-4 lg:space-y-8"},{default:(0,i.w5)((()=>[(0,i.Wm)(C,{title:"Color Palette",subtitle:"Click to copy your color"}),a,(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i.Wm)(w,{class:"bg-gray-50 flex flex-col sm:flex-row lg:items-center lg:justify-between"},{default:(0,i.w5)((()=>[(0,i._)("div",l,[(0,i.Wm)(v,{size:"sm",variant:"simple",onClick:t[0]||(t[0]=e=>k.typeText=!1),"in-group":"left",active:!k.typeText},{default:(0,i.w5)((()=>[c]),void 0,!0),_:1},8,["active"]),s,(0,i.Wm)(v,{size:"sm",variant:"simple",onClick:t[1]||(t[1]=e=>k.typeText=!0),"in-group":"right",active:k.typeText},{default:(0,i.w5)((()=>[n]),void 0,!0),_:1},8,["active"])]),r,(0,i._)("span",{class:(0,i.C_)(["transition-opacity duration-150 ease-out text-center mt-4 sm:mt-0",{"opacity-100":k.codeCopied,"opacity-0":!k.codeCopied}])},[(0,i.Wm)(h,{color:"emerald"},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{name:"check",size:"4"}),(0,i.Uk)(" "+(0,i.zw)(k.codeCopy)+" copied\r\n          ",1)]),void 0,!0),_:1})],2)]),void 0,!0),_:1}),d,(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i._)("div",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(k.colors,(e=>((0,i.wg)(),(0,i.iD)(i.HY,null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(k.variants,((t,o)=>((0,i.wg)(),(0,i.iD)("div",{key:`${e}-variants-${o}`,class:"text-center"},[(0,i._)("button",{class:(0,i.C_)(["h-5 w-5 lg:w-12 lg:h-12 rounded shadow-inner inline-block hover:opacity-75 active:opacity-100 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25",`bg-${e}-${t}`]),onClick:o=>m.copyColor(e,t)},null,10,u)])))),128))],64)))),256))])]),void 0,!0),_:1})]),void 0,!0),_:1}),g]),void 0,!0),_:1})}var k=o(32875),m=o.n(k);const{toClipboard:C}=m()();var v={data(){return{colors:["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"],variants:["50","100","200","300","400","500","600","700","800","900"],typeText:!1,codeCopy:"",codeCopied:!1,codeCopiedError:!1,codeCopiedTimeout:!1}},methods:{copyColor(e,t){this.codeCopy=(this.typeText?"text":"bg")+"-"+e+"-"+t,clearTimeout(this.codeCopiedTimeout);try{C(this.codeCopy),this.codeCopied=!0,this.codeCopiedTimeout=setTimeout((()=>{this.codeCopied=!1}),2e3)}catch(o){this.codeCopiedError=!0,this.codeCopiedTimeout=setTimeout((()=>{this.codeCopiedError=!1}),2e3)}}}},f=o(40089);const h=(0,f.Z)(v,[["render",y]]);var w=h}}]);
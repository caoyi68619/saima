import"./vendor.9f72332b.js";/* empty css             *//* empty css               */import{_ as a,N as e,K as o,f as t,b as r,D as s,i as l,A as i,B as n,C as d,E as p,o as c,c as g,w as u,a as m,e as b,n as f,G as h,l as k,I as y,v}from"./index.f782953c.js";/* empty css                     *//* empty css              *//* empty css                 */const w={class:"header"},C=["src"],_={key:0,style:{color:"green"}},x={key:1,style:{color:"red"}},j=["onClick"],I=["onClick"],P=["onClick"];var S=a({__name:"Good",setup(a){const S=e(),{goTop:z}=S.appContext.config.globalProperties,D=o(),N=t({loading:!1,tableData:[],total:0,currentPage:1,pageSize:10});r((()=>{G()}));const G=()=>{N.loading=!0,s.get("/goods/list",{params:{pageNumber:N.currentPage,pageSize:N.pageSize}}).then((a=>{N.tableData=a.list,N.total=a.totalCount,N.currentPage=a.currPage,N.loading=!1,z&&z()}))},$=()=>{D.push({path:"/add"})},q=a=>{N.currentPage=a,G()},A=(a,e)=>{s.put(`/goods/status/${e}`,{ids:a?[a]:[]}).then((()=>{v.success("修改成功"),G()}))};return(a,e)=>{const o=l,t=i,r=n,s=d,v=p;return c(),g(v,{class:"good-container"},{header:u((()=>[m("div",w,[b(o,{type:"primary",icon:h(y),onClick:$},{default:u((()=>e[0]||(e[0]=[f("新增商品")]))),_:1},8,["icon"])])])),default:u((()=>[b(r,{load:N.loading,data:N.tableData,"tooltip-effect":"dark",style:{width:"100%"}},{default:u((()=>[b(t,{prop:"goodsId",label:"商品编号"}),b(t,{prop:"goodsName",label:"商品名"}),b(t,{prop:"goodsIntro",label:"商品简介"}),b(t,{label:"商品图片",width:"150px"},{default:u((e=>[(c(),k("img",{style:{width:"100px",height:"100px"},key:e.row.goodsId,src:a.$filters.prefix(e.row.goodsCoverImg),alt:"商品主图"},null,8,C))])),_:1}),b(t,{prop:"stockNum",label:"商品库存"}),b(t,{prop:"sellingPrice",label:"商品售价"}),b(t,{label:"上架状态"},{default:u((a=>[0==a.row.goodsSellStatus?(c(),k("span",_,"销售中")):(c(),k("span",x,"已下架"))])),_:1}),b(t,{label:"操作",width:"100"},{default:u((a=>[m("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:e=>{return o=a.row.goodsId,void D.push({path:"/add",query:{id:o}});var o}},"修改",8,j),0==a.row.goodsSellStatus?(c(),k("a",{key:0,style:{cursor:"pointer","margin-right":"10px"},onClick:e=>A(a.row.goodsId,1)},"下架",8,I)):(c(),k("a",{key:1,style:{cursor:"pointer","margin-right":"10px"},onClick:e=>A(a.row.goodsId,0)},"上架",8,P))])),_:1})])),_:1},8,["load","data"]),b(s,{background:"",layout:"prev, pager, next",total:N.total,"page-size":N.pageSize,"current-page":N.currentPage,onCurrentChange:q},null,8,["total","page-size","current-page"])])),_:1})}}},[["__scopeId","data-v-1e078d77"],["__file","D:/trail/js代码/vueProject/vue3-admin-main/src/views/Good.vue"]]);export{S as default};

"use strict";(self.webpackChunkkalyan=self.webpackChunkkalyan||[]).push([[672],{291:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var l=s(43),a=s(722),c=s(580),r=s(641),n=s(579);a.A.defaults.baseURL="https://kalyanblog.onrender.com/kalyan";const i=()=>{const[e,t]=(0,l.useState)([]),[s,i]=(0,l.useState)([]),[o,d]=(0,l.useState)(!0),[h,x]=(0,l.useState)([]),g=(0,c.Zp)(),[u,m]=(0,l.useState)(!0);(0,l.useEffect)((()=>{a.A.get("/blogs").then((e=>{t(e.data),console.log(e.data),i(e.data),d(!1)})).catch((e=>{console.error("There was an error fetching the blogs:",e),d(!1)}))}),[]),(0,l.useEffect)((()=>{const e=setTimeout((()=>m(!1)),2e3);return()=>clearTimeout(e)}),[]);const f=t=>{if("all"===t)i(e);else{const s=e.filter((e=>e.category===t));i(s)}};return u||o?(0,n.jsx)("div",{className:"flex justify-center items-center",children:(0,n.jsx)(r.A,{})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"p-1",children:(0,n.jsxs)("div",{className:"mb-6 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:[(0,n.jsx)("button",{onClick:()=>f("all"),className:"px-4 py-2 rounded-full bg-fuchsia-500 text-white",children:"All"}),(0,n.jsx)("button",{onClick:()=>f("Tech"),className:"px-4 py-2 rounded-full bg-blue-500 text-white",children:"Tech"}),(0,n.jsx)("button",{onClick:()=>{a.A.get("/blogslatest").then((e=>{x(e.data),i(e.data)})).catch((e=>{console.error("There was an error fetching the latest blogs:",e)}))},className:"px-4 py-2 rounded-full bg-red-500 text-white",children:"Latest"}),(0,n.jsx)("button",{onClick:()=>f("Lifestyle"),className:"px-4 py-2 rounded-full bg-black text-white",children:"Lifestyle"}),(0,n.jsx)("button",{onClick:()=>f("Tech Hacks"),className:"px-15 py-2  rounded-full bg-emerald-500 text-white",children:"Tech Hacks"})]})}),(0,n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 ml-8 justify-center",children:s.map(((e,t)=>(0,n.jsxs)("div",{className:"max-w-xs rounded-lg overflow-hidden shadow-lg bg-white ",children:[e.images.length>0&&(0,n.jsx)("img",{className:"w-full h-48 object-cover",src:e.images[0],alt:e.title}),(0,n.jsxs)("div",{className:"px-6 py-4",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold text-gray-800 font-serif  ",children:e.title}),(0,n.jsxs)("p",{className:"text-gray-600 text-sm mt-2",children:[(0,n.jsx)("strong",{children:"Category:"})," ",e.category]}),(0,n.jsx)("p",{className:"text-gray-600 text-sm mt-2 truncate",children:e.description}),(0,n.jsxs)("p",{className:"text-gray-500 text-xs mt-2",children:["Posted on: ",new Date(e.createdAt).toLocaleDateString()]})]}),(0,n.jsx)("button",{className:"px-4 px-2 p-2 m-2 rounded-full bg-black text-white",onClick:()=>{var t;t=e._id,g("/kalyan/".concat(t))},children:"Read More.."})]},t)))})]})}}}]);
//# sourceMappingURL=672.15838358.chunk.js.map
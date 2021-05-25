async function t({fetch:t,page:a,dataFun:n=null}){const o=`http://localhost:1337${a.path}`,s=await t(o);if(s.ok){const t=t=>n?n(a):a,a=await s.json();return{props:{data:t()}}}}export{t as l};

import{u as X,k as Z,a as t,o as ee,b as te,t as a,i as s,c as i,N as se,h as le,S as $,f as ne}from"./index-DXDLFBei.js";import{c as ae}from"./axiosApi-B-s5UtN4.js";import{F as ie}from"./Footer-B75p_J2n.js";var re=a('<span class="text-red-400 font-bold">Debit'),oe=a('<div class="flex flex-col justify-center items-center "><div class="mx-5 md:w-3/6 px-5 py-5 rounded-lg bg-white"><div class="flex flex-row"><p class=w-30>Nama Pasien</p><p>: </p></div><div class="flex flex-row"><p class=w-30>Nama Dokter</p><p>: </p></div><div class="flex flex-row"><p class=w-30>Nomor RM</p><p>: </p></div><div class="flex flex-row"><p class=w-30>Tanggal Periksa</p><p>: </p></div><div class="flex flex-row"><p class=w-30>Biaya</p><p>: <!> </p></div><div class="flex flex-row"><p class=w-30>Keterangan</p><p>: </p></div><div class="flex flex-row mt-15 gap-3"><button class="px-3 py-1 text-xs inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none shadow-sm hover:shadow-md bg-blue-800 relative bg-gradient-to-b from-blue-600 to-blue-800 border-blue-900 text-blue-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-700 hover:to-stone-700 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">EDIT</button><div class="hidden md:block"><button class="px-2 py-1 text-xs inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none shadow-sm hover:shadow-md bg-blue-800 relative bg-gradient-to-b from-blue-600 to-blue-800 border-blue-900 text-blue-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-700 hover:to-stone-700 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Cetak RM'),de=a('<div class="flex flex-col min-h-screen bg-blue-200"><main class=flex-grow>'),ce=a('<div class="flex h-full justify-center items-center">'),fe=a('<span class="text-green-400 font-bold">cash');function he(){const C=X(),o=Z(),[S,D]=t(""),[be,M]=t(0),[N,k]=t(""),[y,I]=t(""),[Y,R]=t(!1),[me,P]=t(""),[j,E]=t(""),[pe,F]=t(""),[O,T]=t(""),[A,B]=t(""),[d,K]=t("");return ee(()=>document.title="Detail Rekam Medis"),te(()=>{const n=new AbortController;ae.get("mr/"+o.id,{signal:n.signal}).then(l=>{const e=l.data.data;D(e.fee),M(e.disc),k(e.createdOn),I(e.comment),R(e.isDebit),P(e.patientId),E(e.patientName),F(e.doctorId),T(e.doctorName),B(e.numberRM)}).catch(l=>{console.log(l),K(l.response.data.message)})}),(()=>{var n=de(),l=n.firstChild;return s(n,i(se,{}),l),s(l,i($,{get when(){return d()===""},get fallback(){return(()=>{var e=ce();return s(e,d),e})()},get children(){var e=oe(),L=e.firstChild,c=L.firstChild,q=c.firstChild,f=q.nextSibling;f.firstChild;var b=c.nextSibling,z=b.firstChild,m=z.nextSibling;m.firstChild;var p=b.nextSibling,G=p.firstChild,u=G.nextSibling;u.firstChild;var x=p.nextSibling,H=x.firstChild,g=H.nextSibling;g.firstChild;var h=x.nextSibling,J=h.firstChild,r=J.nextSibling,Q=r.firstChild,_=Q.nextSibling;_.nextSibling;var v=h.nextSibling,U=v.firstChild,w=U.nextSibling;w.firstChild;var V=v.nextSibling,W=V.firstChild;return s(f,j,null),s(m,O,null),s(u,A,null),s(g,()=>le(N(),"YYYY-MM-DD").format("DD MMMM YYYY"),null),s(r,()=>Number(S()).toLocaleString(),_),s(r,i($,{get when(){return Y()},get fallback(){return fe()},get children(){return re()}}),null),s(w,y,null),W.$$click=()=>C("/mr/"+o.id+"/edit"),e}})),s(n,i(ie,{}),null),n})()}ne(["click"]);export{he as default};

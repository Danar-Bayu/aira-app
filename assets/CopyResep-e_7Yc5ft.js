import{m as We,n as et,g as tt,a as _,b as ke,h as Q,o as nt,t as g,i as n,c as P,N as ot,s as w,S as W,d as p,j as Se,e as st,F as rt,f as lt}from"./index-DXDLFBei.js";import{F as at}from"./Footer-B75p_J2n.js";import{c as it}from"./axiosApi-B-s5UtN4.js";const dt="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%2022C7.28595%2022%204.92893%2022%203.46447%2020.5355C2%2019.0711%202%2016.714%202%2012C2%207.28595%202%204.92893%203.46447%203.46447C4.92893%202%207.28595%202%2012%202C16.714%202%2019.0711%202%2020.5355%203.46447C22%204.92893%2022%207.28595%2022%2012C22%2016.714%2022%2019.0711%2020.5355%2020.5355C19.0711%2022%2016.714%2022%2012%2022ZM8.96965%208.96967C9.26254%208.67678%209.73742%208.67678%2010.0303%208.96967L12%2010.9394L13.9696%208.96969C14.2625%208.6768%2014.7374%208.6768%2015.0303%208.96969C15.3232%209.26258%2015.3232%209.73746%2015.0303%2010.0303L13.0606%2012L15.0303%2013.9697C15.3232%2014.2625%2015.3232%2014.7374%2015.0303%2015.0303C14.7374%2015.3232%2014.2625%2015.3232%2013.9696%2015.0303L12%2013.0607L10.0303%2015.0303C9.73744%2015.3232%209.26256%2015.3232%208.96967%2015.0303C8.67678%2014.7374%208.67678%2014.2626%208.96967%2013.9697L10.9393%2012L8.96965%2010.0303C8.67676%209.73744%208.67676%209.26256%208.96965%208.96967Z'%20fill='%231C274C'/%3e%3c/svg%3e",ct=(G,H)=>{let y;const v=()=>clearTimeout(y);return We()&&et(v),Object.assign((...L)=>{y!==void 0&&v(),y=setTimeout(()=>G(...L),H)},{clear:v})};var ut=g('<div class="flex flex-col min-h-screen bg-blue-200"><main class="flex-grow flex flex-col md:flex-row mx-5 gap-3"><div class="w-full bg-white rounded-lg p-3"><div class="space-y-1 mb-3"><div class="flex flex-row gap-2"><label class="flex items-center w-2/5 font-sans antialiased text-sm text-stone-800 font-semibold">Nama Pasien</label><input placeholder="Nama Pasien"type=text class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"></div></div><div class="space-y-1 mb-3"><div class="flex flex-row gap-2"><label class="flex items-center w-2/5 font-sans antialiased text-sm text-stone-800 font-semibold">Tanggal Resep</label><input type=date class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"></div></div><div class="space-y-1 mb-3"><div class="flex flex-row gap-2"><label class="flex items-center w-2/5 font-sans antialiased text-sm text-stone-800 font-semibold">Nama Dokter</label><input placeholder="Nama Dokter"type=text class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"></div></div><div class="space-y-1 mb-3"><div class="flex flex-row gap-2"><label class="flex items-center w-2/5 font-sans antialiased text-sm text-stone-800 font-semibold">Tgl salinan resep</label><input type=date class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"></div></div><div><button class="px-5 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-1.5 px-3 shadow-sm hover:shadow bg-blue-800 hover:bg-stone-700 relative bg-gradient-to-b from-blue-700 to-blue-800 border-stone-900 text-blue-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Tambah</button></div></div><div class="w-full bg-white rounded-lg p-3"><h3></h3><p></p><p>SIA : </p><p>Telp : </p><p>Apoteker : </p><p>SIPA : </p><hr><h3>SALINAN RESEP</h3><table><tbody><tr><td>Dokter</td><td></td></tr><tr><td>Tanggal Resep</td><td></td></tr><tr><td>Pasien</td><td></td></tr><tr><td>Tanggal salinan</td><td></td></tr></tbody></table><div>'),pt=g('<div class="flex flex-row gap-2 mb-2"><div class=w-full></div><button class="px-4 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-1.5 px-3 shadow-sm hover:shadow bg-blue-800 hover:bg-stone-700 relative bg-gradient-to-b from-blue-700 to-blue-800 border-stone-900 text-blue-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">++'),gt=g('<div class="flex flex-col gap-2 mb-2"><input class="aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"type=text><input class="aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"type=text><input class="aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"type=text>'),bt=g('<input class="aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"type=number>'),ft=g('<div class="bg-gray-200 rounded-lg mb-3 p-3"><div class="flex justify-between mb-2"><div class="inline-flex items-center"><label class="flex items-center cursor-pointer relative"><input type=checkbox class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm hover:shadow border border-stone-500 checked:bg-stone-800 checked:border-stone-800"><span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><svg stroke-width=1.5 class="w-3.5 h-3.5"viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg color=#ffffff><path d="M5 13L9 17L19 7"stroke=#ffffff stroke-width=1.5 stroke-linecap=round stroke-linejoin=round></path></svg></span></label><label class="cursor-pointer ml-2 text-stone-800 text-sm">Racikan</label></div><button class="flex flex-row"><img class="w-7 "><i class=font-semibold>Hapus</i></button></div><ul></ul><div class="flex flex-row items-center gap-2 mb-2"><label class="flex items-center cursor-pointer relative"><input type=checkbox class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow-sm hover:shadow border border-stone-500 checked:bg-stone-800 checked:border-stone-800"><span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><svg stroke-width=1.5 class="w-3.5 h-3.5"viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg color=#ffffff><path d="M5 13L9 17L19 7"stroke=#ffffff stroke-width=1.5 stroke-linecap=round stroke-linejoin=round></path></svg></span></label><label class="cursor-pointer ml-2 text-stone-800 text-sm">Iter</label></div><div class="flex flex-row gap-2 mb-3"><div class="flex items-center">DET</div><input class="aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"type=text>'),ht=g('<li class="flex flex-row gap-2 mb-2"><input class="aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"type=text><button class="px-4 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-1.5 px-3 shadow-sm hover:shadow bg-red-800 hover:bg-stone-700 relative bg-gradient-to-b from-red-700 to-red-800 border-stone-900 text-red-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Hapus'),xt=g('<input class="mb-2 aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"type=text>'),vt=g("<div><div></div><div></div><div>"),mt=g('<div><div class="flex flex-row gap-2"><div>R/</div><div class=flex-grow><ul></ul></div></div><div class="flex flex-row items-center gap-3"><hr class=flex-grow><div>'),De=g("<li>"),$t=g("<div>"),wt=g("<div>Iter <!>X"),_t=g('<div class=autocomplete-container><input type=text placeholder="Ketikan Nama Obat..."class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer">'),yt=g("<ul class=suggestions-list>");function Mt(G){const y=tt().state||{},[v,S]=_(""),[L,E]=_(""),[R,j]=_(""),[ee,J]=_(""),[D,te]=_({}),[d,s]=_([]),h=()=>{s([...d(),{iter:!1,jumlahIter:1,racikan:!1,sirplus:"add sirplus qs",jumlahRacikan:"mf pulv dtd 10",drugs:[],signa:"2 x Sehari 1",deteur:"det"}])},O=r=>{s(d().filter((o,e)=>e!==r))},c=(r,o)=>{s(d().map((e,a)=>a===r?{...e,[o]:!e[o]}:e))},A=(r,o)=>{s(d().map((e,a)=>a===r?{...e,signa:o}:e))},K=(r,o)=>{s(d().map((e,a)=>a===r?{...e,deteur:o}:e))},m=(r,o)=>{s(d().map((e,a)=>a===r?{...e,sirplus:o}:e))},N=(r,o)=>{s(d().map((e,a)=>a===r?{...e,jumlahRacikan:o}:e))},Z=(r,o)=>{s(d().map((e,a)=>a===r?{...e,jumlahIter:o}:e))},B=(r,o)=>{o.trim()&&s(d().map((e,a)=>a===r?{...e,drugs:[...e.drugs,o]}:e))},Me=(r,o)=>{s(d().map((e,a)=>a===r?{...e,drugs:e.drugs.filter((q,F)=>F!==o)}:e))},Ye=(r,o,e)=>{s(d().map((a,q)=>q===r?{...a,drugs:a.drugs.map((F,z)=>z===o?e:F)}:a))};return ke(()=>{const r=new AbortController;it.get("profile",{signal:r.signal}).then(o=>te(o.data.data)).catch(o=>alert(o.message))}),ke(()=>{E(y.pasienName||""),S(y.doktorName||""),j(Q(y.createdOn||new Date).format("YYYY-MM-DD")),J(Q().format("YYYY-MM-DD"))}),nt(()=>document.title="Copy Resep"),(()=>{var r=ut(),o=r.firstChild,e=o.firstChild,a=e.firstChild,q=a.firstChild,F=q.firstChild,z=F.nextSibling,de=a.nextSibling,Pe=de.firstChild,Le=Pe.firstChild,ce=Le.nextSibling,ue=de.nextSibling,Re=ue.firstChild,Ne=Re.firstChild,pe=Ne.nextSibling,ge=ue.nextSibling,je=ge.firstChild,Ae=je.firstChild,be=Ae.nextSibling,fe=ge.nextSibling,he=fe.firstChild,Te=e.nextSibling,xe=Te.firstChild,ve=xe.nextSibling,ne=ve.nextSibling;ne.firstChild;var oe=ne.nextSibling;oe.firstChild;var se=oe.nextSibling;se.firstChild;var re=se.nextSibling;re.firstChild;var Ie=re.nextSibling,Ee=Ie.nextSibling,me=Ee.nextSibling,Oe=me.firstChild,$e=Oe.firstChild,Be=$e.firstChild,Fe=Be.nextSibling,we=$e.nextSibling,Ve=we.firstChild,Ge=Ve.nextSibling,_e=we.nextSibling,He=_e.firstChild,Je=He.nextSibling,Ke=_e.nextSibling,Ze=Ke.firstChild,qe=Ze.nextSibling,ze=me.nextSibling;return n(r,P(ot,{}),o),z.$$input=t=>E(t.currentTarget.value),ce.addEventListener("change",t=>j(t.currentTarget.value)),pe.$$input=t=>S(t.currentTarget.value),be.addEventListener("change",t=>J(t.currentTarget.value)),n(fe,()=>d().map((t,l)=>(()=>{var M=ft(),T=M.firstChild,U=T.firstChild,I=U.firstChild,V=I.firstChild,le=I.nextSibling,X=U.nextSibling,ae=X.firstChild,b=T.nextSibling,f=b.nextSibling,x=f.firstChild,Y=x.firstChild,Ue=x.nextSibling,Xe=f.nextSibling,Qe=Xe.firstChild,ye=Qe.nextSibling;return w(M,"key",l),w(I,"for",`racikan-checkbox-${l}`),V.addEventListener("change",()=>c(l,"racikan")),w(V,"id",`racikan-checkbox-${l}`),w(le,"for",`racikan-checkbox-${l}`),X.$$click=i=>O(l),w(ae,"src",dt),n(M,P(W,{get when(){return t.racikan||!t.racikan&&t.drugs.length===0},fallback:[],get children(){var i=pt(),u=i.firstChild,k=u.nextSibling;return n(u,P(kt,{id:`drug-input-${l}`,options:Ce})),k.$$click=()=>{const $=document.getElementById(`drug-input-${l}`);if(B(l,$.value),!t.racikan){const C=Ce.find(ie=>ie.name===$.value);A(l,C.signa)}$.value=""},i}}),b),n(b,()=>t.drugs.map((i,u)=>(()=>{var k=ht(),$=k.firstChild,C=$.nextSibling;return w(k,"key",u),$.$$input=ie=>Ye(l,u,ie.target.value),$.value=i,C.$$click=()=>Me(l,u),k})())),n(M,P(W,{get when(){return t.racikan},get fallback(){return(()=>{var i=xt();return i.$$input=u=>A(l,u.target.value),p(()=>i.value=t.signa),i})()},get children(){var i=gt(),u=i.firstChild,k=u.nextSibling,$=k.nextSibling;return u.$$input=C=>m(l,C.target.value),k.$$input=C=>N(l,C.target.value),$.$$input=C=>A(l,C.target.value),p(()=>u.value=t.sirplus),p(()=>k.value=t.jumlahRacikan),p(()=>$.value=t.signa),i}}),f),w(x,"for",`iter-checkbox-${l}`),Y.addEventListener("change",()=>c(l,"iter")),w(Y,"id",`iter-checkbox-${l}`),w(Ue,"for",`iter-checkbox-${l}`),n(f,P(W,{get when(){return t.iter},fallback:[],get children(){var i=bt();return i.$$input=u=>Z(l,u.target.value),p(()=>i.value=t.jumlahIter),i}}),null),ye.$$input=i=>K(l,i.target.value),p(()=>V.checked=t.racikan),p(()=>Y.checked=t.iter),p(()=>ye.value=t.deteur),M})()),he),he.$$click=h,n(xe,()=>D().name),n(ve,()=>D().address),n(ne,()=>D().sia,null),n(oe,()=>D().telp,null),n(se,()=>D().apoteker,null),n(re,()=>D().sipa,null),n(Fe,v),n(Ge,()=>Q(R(),"YYYY-MM-DD").format("DD MMMM YYYY")),n(Je,L),n(qe,()=>Q(ee(),"YYYY-MM-DD").format("DD MMMM YYYY")),n(ze,()=>d().map((t,l)=>(()=>{var M=mt(),T=M.firstChild,U=T.firstChild,I=U.nextSibling,V=I.firstChild,le=T.nextSibling,X=le.firstChild,ae=X.nextSibling;return n(V,()=>t.drugs.map((b,f)=>(()=>{var x=De();return n(x,b),x})())),n(I,P(W,{get when(){return t.racikan},get fallback(){return(()=>{var b=$t();return n(b,()=>t.signa),b})()},get children(){var b=vt(),f=b.firstChild,x=f.nextSibling,Y=x.nextSibling;return n(f,()=>t.sirplus),n(x,()=>t.jumlahRacikan),n(Y,()=>t.signa),b}}),null),n(T,(()=>{var b=Se(()=>!!t.iter);return()=>b()&&(()=>{var f=wt(),x=f.firstChild,Y=x.nextSibling;return Y.nextSibling,n(f,()=>t.jumlahIter,Y),f})()})(),null),n(ae,()=>t.deteur),M})())),n(r,P(at,{}),null),p(()=>z.value=L()),p(()=>ce.value=R()),p(()=>pe.value=v()),p(()=>be.value=ee()),r})()}function kt({options:G,id:H}){const[y,v]=_(""),[S,L]=_([]),[E,R]=_(!1),[j,ee]=_(0),J=ct(({value:s})=>{if(s.length>0){const h=G.filter(O=>O.name.toLowerCase().includes(s.toLowerCase()));L(h),R(!0)}else L([]),R(!1)},300),D=s=>{const h=s.target.value;v(h),J({value:h})},te=s=>{v(s),R(!1)},d=s=>{s.key==="Enter"&&E()&&(s.preventDefault(),S().length>0&&(v(S()[j()]),R(!1)))};return(()=>{var s=_t(),h=s.firstChild;return s.style.setProperty("position","relative"),h.$$keydown=d,h.$$input=D,w(h,"id",H),n(s,(()=>{var O=Se(()=>!!(E()&&S().length>0));return()=>O()&&(()=>{var c=yt();return c.style.setProperty("position","absolute"),c.style.setProperty("z-index","1000"),c.style.setProperty("list-style","none"),c.style.setProperty("padding","0"),c.style.setProperty("margin","0"),c.style.setProperty("background","white"),c.style.setProperty("border","1px solid #ccc"),c.style.setProperty("max-height","200px"),c.style.setProperty("overflow","auto"),c.style.setProperty("width","100%"),n(c,P(rt,{get each(){return S()},children:(A,K)=>(()=>{var m=De();return m.$$click=()=>te(A.name),m.style.setProperty("padding","8px 12px"),m.style.setProperty("cursor","pointer"),n(m,()=>A.name),p(N=>{var Z=`suggestion-item ${K()===j()?"active":""}`,B=K()===j()?"#f0f0f0":"transparent";return Z!==N.e&&st(m,N.e=Z),B!==N.t&&((N.t=B)!=null?m.style.setProperty("background-color",B):m.style.removeProperty("background-color")),N},{e:void 0,t:void 0}),m})()})),c})()})(),null),p(()=>h.value=y()),s})()}const Ce=[{name:"Acetylcystein 200 mg",signa:"3 x sehari 1 kapsul"},{name:"Alco drop No 1",signa:"3 x sehari 0.5 ml"},{name:"Alco plus DMP No 1",signa:"3x sehari 2.5ml"},{name:"Alco plus No 1",signa:"3 x sehari 2.5 ml"},{name:"Amoxsan 125mg/5ml No 1",signa:"2 x sehari 5 ml"},{name:"Amoxsan drop No 1",signa:"2 x sehari 1 ml"},{name:"Amoxsan forte 250mg/5ml No 1",signa:"2 x sehari 5 ml"}];lt(["input","click","keydown"]);export{Mt as default};

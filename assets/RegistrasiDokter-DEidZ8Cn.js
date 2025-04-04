import{a as l,c as r,t as b,i as t,S as d,d as s,s as m,F as re,f as se}from"./index-DXDLFBei.js";var c=b('<small class="font-sans antialiased text-sm text-red-500 mt-1 block">'),oe=b('<div class="container mt-2 mx-auto px-4 h-full"><div class="flex content-center items-center justify-center h-full"><div class="w-full lg:w-6/12 "><div class="flex flex-col min-w-0 break-words w-full mb-8 p-2 shadow-lg rounded-lg bg-gray-300 border-0"><h1>Formulir Pendaftaran</h1><p></p><form><div class="w-72 space-y-1"><label for=name class="font-sans antialiased text-sm text-stone-800 font-semibold">Nama Pasien</label><div class="relative w-full"><input id=name placeholder="Nama Pasien"type=text class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"></div></div><div class="w-72 space-y-1"><label for=dob class="font-sans antialiased text-sm text-stone-800 font-semibold">Tangal Lahir</label><div class="relative w-full"><input id=dob type=date class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"></div></div><div class="w-72 space-y-1"><label for=gender class="font-sans antialiased text-sm text-stone-800 font-semibold">Jenis Kelamin</label><div class="flex gap-2"></div></div><div class="w-72 space-y-1"><label for=parent class="font-sans antialiased text-sm text-stone-800 font-semibold">Nama Orang Tua</label><div class="relative w-full"><input id=parent placeholder="Nama Orang Tua"type=text class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"></div></div><div class="w-72 space-y-1"><label for=telp class="font-sans antialiased text-sm text-stone-800 font-semibold">Nomor Telp</label><div class="relative w-full"><input id=telp placeholder="Nomor Telepon"type=tel class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"></div></div><div class="max-w-md space-y-1.5"><label for=address class="font-sans antialiased text-sm text-stone-800 font-semibold">Alamat Rumah</label><textarea rows=8 id=address placeholder="Alamat rumah"class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"></textarea></div><button type=submit class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-1.5 px-3 shadow-sm hover:shadow bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">DAFTAR'),ie=b('<label class="flex items-center cursor-pointer relative"><input type=radio name=gender class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-full shadow-sm hover:shadow border border-stone-200 checked:bg-stone-800 checked:border-stone-800"><span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><svg class="w-3 h-3"viewBox="0 0 12 12"fill=none xmlns=http://www.w3.org/2000/svg><circle cx=6 cy=6 r=4 fill=currentColor>'),de=b('<label class="font-sans antialiased text-base text-stone-600">');function ge(ce){const[x,T]=l(""),[F,ue]=l(""),[w,P]=l("MALE"),[D,R]=l(""),[be,fe]=l({id:"",name:""}),[_,j]=l(""),[$,M]=l(""),[a,O]=l({}),J=[{label:"Laki-laki",value:"MALE"},{label:"Perempuan",value:"FEMALE"}],B=()=>{let n={};x().trim()||(n.name="Nama tidak boleh kosong"),F().trim()||(n.sip="SIP dokter tidak boleh kosong"),w().trim()||(n.gender="Jenis kelamin tidak boleh kosong"),D()||(n.dob="Tanggal lahir tidak boleh kosong"),_()||(n.telp="Nomor Telp tidak boleh kosong"),$()||(n.address="Alamat tidak boleh kosong"),O(n),Object.keys(n).length},I=n=>{n.preventDefault(),B()&&alert("Form berhasil")};return[r(Navbar,{}),(()=>{var n=oe(),K=n.firstChild,q=K.firstChild,z=q.firstChild,G=z.firstChild,H=G.nextSibling,y=H.nextSibling,f=y.firstChild,Q=f.firstChild,U=Q.nextSibling,k=U.firstChild,p=f.nextSibling,V=p.firstChild,W=V.nextSibling,X=W.firstChild,g=p.nextSibling,Y=g.firstChild,Z=Y.nextSibling,h=g.nextSibling,ee=h.firstChild,te=ee.nextSibling,S=te.firstChild,v=h.nextSibling,ne=v.firstChild,ae=ne.nextSibling,C=ae.firstChild,E=v.nextSibling,le=E.firstChild,L=le.nextSibling;return y.addEventListener("submit",I),k.addEventListener("change",e=>T(e.target.value)),t(f,r(d,{get when(){return a().name},fallback:[],get children(){var e=c();return t(e,()=>a().name),e}}),null),X.addEventListener("change",e=>R(e.target.value)),t(p,r(d,{get when(){return a().dob},fallback:[],get children(){var e=c();return t(e,()=>a().dob),e}}),null),t(Z,r(re,{each:J,class:"flex items-center gap-2",children:e=>[(()=>{var o=ie(),u=o.firstChild;return u.$$input=i=>P(i.currentTarget.value),s(i=>{var A="id_"+e.value,N="id_"+e.value;return A!==i.e&&m(o,"for",i.e=A),N!==i.t&&m(u,"id",i.t=N),i},{e:void 0,t:void 0}),s(()=>u.value=e.value),s(()=>u.checked=e.value===w()),o})(),(()=>{var o=de();return t(o,()=>e.label),s(()=>m(o,"for","id_"+e.value)),o})()]})),t(g,r(d,{get when(){return a().gender},fallback:[],get children(){var e=c();return t(e,()=>a().gender),e}}),null),S.addEventListener("change",e=>setParent(e.target.value)),t(h,r(d,{get when(){return a().parent},fallback:[],get children(){var e=c();return t(e,()=>a().parent),e}}),null),C.addEventListener("change",e=>j(e.target.value)),t(v,r(d,{get when(){return a().telp},fallback:[],get children(){var e=c();return t(e,()=>a().telp),e}}),null),L.addEventListener("change",e=>M(e.target.value)),t(E,r(d,{get when(){return a().address},fallback:[],get children(){var e=c();return t(e,()=>a().address),e}}),null),s(()=>k.value=x()),s(()=>S.value=parent()),s(()=>C.value=_()),s(()=>L.value=$()),n})()]}se(["input"]);export{ge as default};

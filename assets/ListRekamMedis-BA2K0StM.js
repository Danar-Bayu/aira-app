import{u as Fe,c as g,a as Ne,o as Ee,n as y,p as Le,t as d,i as e,d as i,N as je,S as p,e as Ie,l as Oe,f as w,g as ae,A as Pe,F as Ae,h as He,j as Be}from"./index-CZkt39m6.js";import{c as le}from"./axiosApi-L_elCyjK.js";import{L as ie}from"./LoadingSpinner-BWr-j03i.js";import{b as Ge,c as Ke,d as Ue,e as ze}from"./index-Dbiy-Oif.js";var P=d('<p class="text-red-500 text-xs mt-1">'),qe=d('<div class="flex justify-center py-12">'),Je=d('<div><div class="flex flex-col min-h-screen "><main class="flex-grow container mx-auto px-4 py-6"><div class="bg-white rounded-lg shadow-md p-6"><div class=mb-6><h1 class="text-2xl font-bold text-gray-800 mb-4">Daftar Rekam Medis</h1><div class="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"><div><label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai</label><input type=date class="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Akhir</label><input type=date class="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></div><div class=md:col-span-2><button class="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">Cari Rekam Medis</button></div></div></div><hr class="my-4 border-gray-200">'),Qe=d('<svg class="w-5 h-5 mr-2"fill=none stroke=currentColor viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">'),Ve=d('<div class=overflow-x-auto><table class="min-w-full divide-y divide-gray-200"><thead class=bg-gray-200><tr><th class="md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pasien</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Dokter</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Biaya</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Keterangan</th></tr></thead><tbody class="bg-white divide-y divide-gray-200">'),We=d('<div class="text-center py-8 bg-gray-50 rounded-lg"><p class=text-gray-600>'),Xe=d('<span class="font-sans antialiased text-sm text-red-500 mt-1 block">copied'),Ze=d(`<tr><td class="md:px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900"></div><div class="text-xs text-gray-500 font-bold">'<!>'</div></td><td class="px-6 py-4"><div class=md:hidden><div class="text-sm font-medium text-gray-900"></div><div class="text-xs text-gray-500"></div><div class="text-xs text-gray-500"></div></div><div class="hidden md:block"><div class="flex items-center"><div class="text-sm font-medium text-gray-900"></div><button class="ml-2 px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">Salin</button></div><div class="text-xs text-gray-500"></div></div></td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell"></td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell"></td><td class="px-6 py-4 whitespace-nowrap"><label class="inline-flex items-center cursor-pointer"><input type=checkbox class="sr-only peer"><div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div><span class="ms-3 text-sm font-medium text-gray-700"></span></label><div class="md:hidden text-xs text-gray-500 mt-1"></div></td><td class="px-6 py-4 text-sm text-gray-500 hidden md:table-cell">`),et=d('<tr class=bg-blue-200><td colspan=6 class="px-6 py-4"><div class="flex flex-wrap gap-2"><button class="px-3 py-1 md:py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors flex items-center">Profil Pasien</button><button class="hidden md:inline-flex px-3 py-1 md:py-1.5 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700 transition-colors flex items-center">Kwitansi</button><button class="hidden md:inline-flex px-3 py-1 md:py-1.5 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition-colors flex items-center">Resep');function st(){const[re,tt]=Fe(He),[$,se]=g(""),[v,ne]=g(""),[A,de]=g(""),[H,B]=g([]),[S,k]=g(!1),[oe,G]=g("Silakan pilih rentang tanggal"),[f,ce]=g({}),[ge,K]=g(""),E=Ne();Ee(()=>{document.title="Rekam Medis";const a=y().format("YYYY-MM-DD");U(a,a)});let C;Le(()=>{C&&C.abort()});const U=(a,s)=>{k(!0),C=new AbortController;const r=y(a,"YYYY-MM-DD").startOf("day").format("YYYY-MM-DDTHH:mm:ss.SSS"),o=y(s,"YYYY-MM-DD").endOf("day").format("YYYY-MM-DDTHH:mm:ss.SSS");le.get("mr",{params:{start:r,end:o},signal:C.signal}).then(c=>{B(c.data.data),G(c.data.data.length===0?"Tidak ada data pada rentang tanggal tersebut":"")}).catch(c=>{c.name!=="AbortError"&&(G("Gagal memuat data rekam medis"),console.error("Error fetching records:",c))}).finally(()=>k(!1))},me=()=>{const a={};return $()||(a.start="Tanggal mulai harus diisi"),v()||(a.end="Tanggal akhir harus diisi"),$()&&v()&&y(v()).isBefore($())&&(a.range="Tanggal akhir tidak boleh sebelum tanggal mulai"),ce(a),Object.keys(a).length===0},ue=()=>{me()&&U($(),v())},xe=(a,s)=>{navigator.clipboard.writeText(a).then(()=>{K(s),setTimeout(()=>K(""),2e3)}).catch(r=>console.error("Gagal menyalin:",r))},pe=async(a,s)=>{try{k(!0),await le.put(`mr/${a.id}`,{...a,isDebit:s}),B(r=>r.map(o=>o.id===a.id?{...o,isDebit:s}:o))}catch(r){alert("Gagal memperbarui status debit"),console.error("Update error:",r)}finally{k(!1)}},fe=a=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(a);return(()=>{var a=Je(),s=a.firstChild,r=s.firstChild,o=r.firstChild,c=o.firstChild,be=c.firstChild,he=be.nextSibling,L=he.firstChild,ye=L.firstChild,z=ye.nextSibling,D=L.nextSibling,$e=D.firstChild,q=$e.nextSibling,ve=D.nextSibling,M=ve.firstChild,_e=M.firstChild;return c.nextSibling,e(s,i(je,{}),r),z.$$input=t=>se(t.currentTarget.value),e(L,i(p,{get when(){return f().start},get children(){var t=P();return e(t,()=>f().start),t}}),null),q.$$input=t=>ne(t.currentTarget.value),e(D,i(p,{get when(){return f().end},get children(){var t=P();return e(t,()=>f().end),t}}),null),e(D,i(p,{get when(){return f().range},get children(){var t=P();return e(t,()=>f().range),t}}),null),M.$$click=ue,e(M,(()=>{var t=Ie(()=>!!S());return()=>t()?i(ie,{class:"w-5 h-5 mr-2"}):Qe()})(),_e),e(o,i(p,{get when(){return S()},get fallback(){return i(p,{get when(){return H().length>0},get fallback(){return(()=>{var t=We(),b=t.firstChild;return e(b,()=>oe()||"Tidak ada data yang ditemukan"),t})()},get children(){var t=Ve(),b=t.firstChild,Y=b.firstChild,we=Y.nextSibling;return e(we,i(Oe,{get each(){return H()},children:(l,j)=>[(()=>{var m=Ze(),R=m.firstChild,_=R.firstChild,u=_.nextSibling,I=u.firstChild,x=I.nextSibling;x.nextSibling;var T=R.nextSibling,h=T.firstChild,F=h.firstChild,J=F.nextSibling,Se=J.nextSibling,ke=h.nextSibling,O=ke.firstChild,Q=O.firstChild,Ce=Q.nextSibling,De=O.nextSibling,V=T.nextSibling,W=V.nextSibling,X=W.nextSibling,Z=X.firstChild,N=Z.firstChild,Me=N.nextSibling,Ye=Me.nextSibling,Re=Z.nextSibling,Te=X.nextSibling;return m.$$click=()=>de(l.id),e(_,()=>j()+1),e(u,()=>l.numberRM,x),e(F,()=>l.patientName),e(J,()=>y(l.createdOn).format("DD MMM YYYY")),e(Se,()=>l.doctorName),e(Q,()=>l.patientName),Ce.$$click=n=>{n.stopPropagation(),xe(l.patientName,j())},e(O,i(p,{get when(){return ge()===j()},get children(){return Xe()}}),null),e(De,()=>y(l.createdOn).format("DD MMM YYYY")),e(V,()=>l.doctorName),e(W,()=>fe(l.fee)),N.$$input=n=>pe(l,n.currentTarget.checked),e(Ye,()=>l.isDebit?"Debit":"Cash"),e(Re,()=>l.comment),e(Te,()=>l.comment||"-"),w(n=>{var ee=`cursor-pointer ${A()===l.id?"bg-blue-200":"hover:bg-gray-100"}`,te=S();return ee!==n.e&&ae(m,n.e=ee),te!==n.t&&(N.disabled=n.t=te),n},{e:void 0,t:void 0}),w(()=>N.checked=l.isDebit),m})(),i(p,{get when(){return A()===l.id},get children(){var m=et(),R=m.firstChild,_=R.firstChild,u=_.firstChild,I=u.firstChild,x=u.nextSibling,T=x.firstChild,h=x.nextSibling,F=h.firstChild;return u.$$click=()=>E(`/pasien/${l.patientId}`),e(u,i(Ge,{class:"mr-2"}),I),x.$$click=()=>E("/kwitansi",{state:l}),e(x,i(Ke,{class:"mr-2"}),T),h.$$click=()=>E("/copy-resep",{state:l}),e(h,i(Ue,{class:"mr-2"}),F),e(_,i(Pe,{get href(){return`/mr/${l.id}`},class:"px-3 py-1 md:py-1.5 bg-gray-600 text-white rounded-md text-sm hover:bg-gray-700 transition-colors flex items-center",get children(){return[i(ze,{class:"mr-2"}),"Detail Rekam Medis"]}}),null),m}})]})),t}})},get children(){var t=qe();return e(t,i(ie,{class:"w-12 h-12"})),t}}),null),e(a,i(Ae,{}),null),w(t=>{var b=`flex flex-col ${re.bg}`,Y=S();return b!==t.e&&ae(a,t.e=b),Y!==t.t&&(M.disabled=t.t=Y),t},{e:void 0,t:void 0}),w(()=>z.value=$()),w(()=>q.value=v()),a})()}Be(["input","click"]);export{st as default};

import{u as Q,a as W,c as n,b as X,t as i,i as t,d as o,N as Y,S as p,e as Z,F as ee,f as x,g as A,s as te,h as se,j as re}from"./index-CZkt39m6.js";import{c as ae}from"./axiosApi-L_elCyjK.js";var z=i('<small class="font-sans antialiased text-sm text-red-500 mt-1 block">'),le=i('<svg xmlns=http://www.w3.org/2000/svg class="h-5 w-5 text-gray-500"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21">'),ne=i('<div><div class="flex flex-col min-h-screen"><main class="flex flex-grow items-center justify-center"><div class="container max-w-md lg:w-4/12 mx-10"><div class="w-full bg-white shadow-lg rounded-2xl p-5"><div class="rounded-2xl border border-gray-400"><div class=p-6><h1 class="text-center uppercase text-4xl mb-6 font-bold text-gray-800">Login</h1><form><div class="relative w-full mb-4"><label class="block uppercase text-xs font-bold mb-2 text-gray-700">Username</label><input type=text class="border border-gray-300 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition-all duration-150"placeholder=Username autocomplete=username required></div><div class="relative w-full mb-6"><label class="block uppercase text-xs font-bold mb-2 text-gray-700">Password</label><div class=relative><input class="border border-gray-300 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition-all duration-150"placeholder=Password autocomplete=current-password required><button type=button class="absolute inset-y-0 right-0 pr-3 flex items-center"></button></div></div><div class=text-center><button type=submit>'),oe=i('<svg xmlns=http://www.w3.org/2000/svg class="h-5 w-5 text-gray-500"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">'),ie=i('<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24"><circle class=opacity-25 cx=12 cy=12 r=10 stroke=currentColor stroke-width=4></circle><path class=opacity-75 fill=currentColor d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">');function ge(){const[E,de]=Q(se),N=W(),[v,B]=n(""),[y,I]=n(""),[d,_]=n({}),[s,$]=n(!1),{loadUser:q}=X(),[c,F]=n(!1),T=async r=>{r.preventDefault(),_({}),$(!0);try{const a=new AbortController,g=(await ae.post("auth/login",{username:v(),password:y()},{signal:a.signal})).data.token;localStorage.setItem("jwt",g),q(),N("/",{replace:!0})}catch{_({username:"Username atau password salah",password:"Username atau password salah"})}finally{$(!1)}};return(()=>{var r=ne(),a=r.firstChild,u=a.firstChild,g=u.firstChild,D=g.firstChild,H=D.firstChild,R=H.firstChild,V=R.firstChild,C=V.nextSibling,w=C.firstChild,G=w.firstChild,b=G.nextSibling,h=w.nextSibling,J=h.firstChild,K=J.nextSibling,l=K.firstChild,f=l.nextSibling,O=h.nextSibling,m=O.firstChild;return t(a,o(Y,{}),u),C.addEventListener("submit",T),b.$$input=e=>B(e.currentTarget.value),t(w,o(p,{get when(){return d().username},get children(){var e=z();return t(e,()=>d().username),e}}),null),l.$$input=e=>I(e.currentTarget.value),f.$$click=()=>F(!c()),t(f,o(p,{get when(){return!c()},get fallback(){return oe()},get children(){return le()}})),t(h,o(p,{get when(){return d().password},get children(){var e=z();return t(e,()=>d().password),e}}),null),t(m,(()=>{var e=Z(()=>!!s());return()=>e()?[ie(),"Processing..."]:"Sign In"})()),t(r,o(ee,{}),null),x(e=>{var k=`flex flex-col ${E.bg}`,S=s(),M=c()?"text":"password",j=s(),U=s(),L=s(),P=`w-full inline-flex items-center justify-center border align-middle select-none font-sans text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-base uppercase py-3 px-4 shadow-sm hover:shadow bg-blue-800 hover:bg-blue-700 relative bg-gradient-to-b from-blue-700 to-blue-800 border-blue-900 text-white rounded-lg after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition-all antialiased ${s()?"cursor-not-allowed":""}`;return k!==e.e&&A(r,e.e=k),S!==e.t&&(b.disabled=e.t=S),M!==e.a&&te(l,"type",e.a=M),j!==e.o&&(l.disabled=e.o=j),U!==e.i&&(f.disabled=e.i=U),L!==e.n&&(m.disabled=e.n=L),P!==e.s&&A(m,e.s=P),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),x(()=>b.value=v()),x(()=>l.value=y()),r})()}re(["input","click"]);export{ge as default};

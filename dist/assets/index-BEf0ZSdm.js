(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const L=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <!-- selected -->\r
            <li>\r
                <a class="filter" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filter" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filter" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`,S=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;function v(e){return typeof e=="string"&&S.test(e)}function A(e){if(!v(e))throw TypeError("Invalid UUID");let t;return Uint8Array.of((t=parseInt(e.slice(0,8),16))>>>24,t>>>16&255,t>>>8&255,t&255,(t=parseInt(e.slice(9,13),16))>>>8,t&255,(t=parseInt(e.slice(14,18),16))>>>8,t&255,(t=parseInt(e.slice(19,23),16))>>>8,t&255,(t=parseInt(e.slice(24,36),16))/1099511627776&255,t/4294967296&255,t>>>24&255,t>>>16&255,t>>>8&255,t&255)}const c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));function T(e,t=0){return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}let y;const I=new Uint8Array(16);function b(){if(!y){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");y=crypto.getRandomValues.bind(crypto)}return y(I)}const h={};function P(e,t,s){var n;let i;const r=(e==null?void 0:e._v6)??!1;if(e){const o=Object.keys(e);o.length===1&&o[0]==="_v6"&&(e=void 0)}if(e)i=C(e.random??((n=e.rng)==null?void 0:n.call(e))??b(),e.msecs,e.nsecs,e.clockseq,e.node,t,s);else{const o=Date.now(),l=b();k(h,o,l),i=C(l,h.msecs,h.nsecs,r?void 0:h.clockseq,r?void 0:h.node,t,s)}return t??T(i)}function k(e,t,s){return e.msecs??(e.msecs=-1/0),e.nsecs??(e.nsecs=0),t===e.msecs?(e.nsecs++,e.nsecs>=1e4&&(e.node=void 0,e.nsecs=0)):t>e.msecs?e.nsecs=0:t<e.msecs&&(e.node=void 0),e.node||(e.node=s.slice(10,16),e.node[0]|=1,e.clockseq=(s[8]<<8|s[9])&16383),e.msecs=t,e}function C(e,t,s,i,r,n,o=0){if(e.length<16)throw new Error("Random bytes length must be >= 16");if(!n)n=new Uint8Array(16),o=0;else if(o<0||o+16>n.length)throw new RangeError(`UUID byte range ${o}:${o+15} is out of buffer bounds`);t??(t=Date.now()),s??(s=0),i??(i=(e[8]<<8|e[9])&16383),r??(r=e.slice(10,16)),t+=122192928e5;const l=((t&268435455)*1e4+s)%4294967296;n[o++]=l>>>24&255,n[o++]=l>>>16&255,n[o++]=l>>>8&255,n[o++]=l&255;const a=t/4294967296*1e4&268435455;n[o++]=a>>>8&255,n[o++]=a&255,n[o++]=a>>>24&15|16,n[o++]=a>>>16&255,n[o++]=i>>>8|128,n[o++]=i&255;for(let p=0;p<6;++p)n[o++]=r[p];return n}function q(e){const t=typeof e=="string"?A(e):e,s=V(t);return typeof e=="string"?T(s):s}function V(e){return Uint8Array.of((e[6]&15)<<4|e[7]>>4&15,(e[7]&15)<<4|(e[4]&240)>>4,(e[4]&15)<<4|(e[5]&240)>>4,(e[5]&15)<<4|(e[0]&240)>>4,(e[0]&15)<<4|(e[1]&240)>>4,(e[1]&15)<<4|(e[2]&240)>>4,96|e[2]&15,e[3],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}function F(e,t,s){e??(e={});let i=P({...e,_v6:!0},new Uint8Array(16));return i=q(i),T(i)}class O{constructor(t){this.id=F(),this.description=t,this.done=!1,this.createdAT=new Date}}const u={All:"all",Completed:"completed",Pending:"pending"},d={todos:[],filter:u.All},U=()=>{E(),console.log(d)},E=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=u.All}=JSON.parse(localStorage.getItem("state"));d.todos=e,d.filter=t},x=()=>{localStorage.setItem("state",JSON.stringify(d))},D=(e=u.All)=>{switch(e){case u.All:return[...d.todos];case u.Completed:return d.todos.filter(t=>t.done);case u.Pending:return d.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid`)}},M=e=>{if(!e)throw new Error("Description is required");d.todos.push(new O(e)),x()},R=e=>{d.todos=d.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),x()},$=e=>{d.todos=d.todos.filter(t=>t.id!==e),x()},N=()=>{d.todos=d.todos.filter(e=>!e.done),x()},H=(e=u.All)=>{d.filter=e,x()},_=()=>d.filter,f={initStore:U,loadStore:E,addTodo:M,toggleTodo:R,deleteTodo:$,deleteCompleted:N,setFilter:H,getCurrentFilter:_,getTodos:D};let w;const j=e=>{if(w||(w=document.querySelector(e)),!w)throw new Error(`Element ${e} not found`);w.innerHTML=f.getTodos(u.Pending).length},J=e=>{if(!e)throw new Error("a Todo object is required");const{done:t,description:s,id:i}=e,r=`
                <div class="view">
                    <input class="toggle" type="checkbox" ${t?"checked":""}>
                    <label>${s}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">

            `,n=document.createElement("li");return n.innerHTML=r,n.setAttribute("data-id",i),e.done&&n.classList.add("completed"),n};let g;const K=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error(`Element ${e} not found`);g.innerHTML="",t.forEach(s=>{g.append(J(s))})},m={TodoList:".todo-list",NewTodoInput:"#new-todo-input",ClearCompleted:".clear-completed",TodoFilters:".filter",PendingCount:"#pending-count"},G=e=>{const t=()=>{const l=f.getTodos(f.getCurrentFilter());K(m.TodoList,l),s()},s=()=>{j(m.PendingCount)};(()=>{const l=document.createElement("div");l.innerHTML=L,document.querySelector(e).append(l),t()})();const i=document.querySelector(m.NewTodoInput),r=document.querySelector(m.TodoList),n=document.querySelector(m.ClearCompleted),o=document.querySelectorAll(m.TodoFilters);i.addEventListener("keyup",l=>{l.keyCode===13&&l.target.value.trim().length!==0&&(f.addTodo(l.target.value),t(),l.target.value="")}),r.addEventListener("click",l=>{const a=l.target.closest("[data-id]");f.toggleTodo(a.getAttribute("data-id")),t()}),r.addEventListener("click",l=>{const a=l.target.className==="destroy",p=l.target.closest("[data-id]");!p||!a||(f.deleteTodo(p.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{f.deleteCompleted(),t()}),o.forEach(l=>{l.addEventListener("click",a=>{switch(o.forEach(p=>p.classList.remove("selected")),a.target.classList.add("selected"),a.target.text){case"Todos":f.setFilter(u.All);break;case"Pendientes":f.setFilter(u.Pending);break;case"Completados":f.setFilter(u.Completed);break}t()})})};f.initStore();G("#app");

(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{107:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(24),o=t.n(r),i=(t(67),t(8)),l=t(10),s=t(9),m=(t(68),t(32)),p=t.n(m),_=t(49),d=t(15),u=t.n(d),v=t(16),E=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).scrollToTop=function(){v.animateScroll.scrollToTop()},e}return Object(_.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:u.a.navMenu},c.a.createElement("a",{href:"#main",className:u.a.link,onClick:this.scrollToTop},c.a.createElement(v.Link,{activeClass:"active",to:"main",spy:!0,smooth:!0,offset:-70,duration:700},"Main")),c.a.createElement("a",{href:"#skills",className:u.a.link,onClick:this.scrollToTop},c.a.createElement(v.Link,{activeClass:"active",spy:!0,to:"skills",smooth:!0,offset:-70,duration:700},"Skills")),c.a.createElement("a",{href:"#project",className:u.a.link,onClick:this.scrollToTop},c.a.createElement(v.Link,{activeClass:"active",to:"project",spy:!0,smooth:!0,offset:-70,duration:700},"Project")),c.a.createElement("a",{href:"#contact",className:u.a.link,onClick:this.scrollToTop},c.a.createElement(v.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:700},"Contact")))}}]),t}(c.a.Component);var h=function(e){return c.a.createElement("div",{className:p.a.headerBox},c.a.createElement("div",{className:p.a.headerContainer},c.a.createElement(E,null)))},f=t(11),k=t.n(f);var j=function(){return c.a.createElement("div",{className:k.a.main,id:"main"},c.a.createElement("div",{className:k.a.container},c.a.createElement("div",{className:k.a.greeting},c.a.createElement("span",null,"Hi!"),c.a.createElement("span",null,"My name is ",c.a.createElement("span",null,"Nataliya Gerasimovich")),c.a.createElement("div",{className:k.a.greetingIam},c.a.createElement("h1",{className:k.a.tittle},"I'm Frontend developer"))),c.a.createElement("div",{className:k.a.mainPhoto},c.a.createElement("div",null))))},g=t(2),N=t.n(g),b=t(25),S=t.n(b),P=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).render=function(){return c.a.createElement("div",{className:S.a.skillBox},c.a.createElement("span",{className:S.a.skillTitle},e.props.title),c.a.createElement("span",{className:S.a.skillDescription},e.props.description))},e}return t}(c.a.Component),x=t(13),C=t.n(x),T=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).render=function(){return c.a.createElement(C.a,{bottom:!0},c.a.createElement("div",{className:N.a.skills,id:"skills"},c.a.createElement("div",{className:N.a.wrapper},c.a.createElement("div",{className:N.a.skillTitle},c.a.createElement("span",{name:"top"}," My skills "),c.a.createElement("div",{className:N.a.moduleLine})),c.a.createElement("div",{className:N.a.skillsWrapper},c.a.createElement("div",{className:N.a.paddings_one},c.a.createElement("div",{className:N.a.icon}),c.a.createElement(P,{title:e.props.tasks[0].title})),c.a.createElement("div",{className:N.a.paddings_one},c.a.createElement("div",{className:N.a.icon1}),c.a.createElement(P,{title:e.props.tasks[1].title})),c.a.createElement("div",{className:N.a.paddings_one},c.a.createElement("div",{className:N.a.icon2}),c.a.createElement(P,{title:e.props.tasks[2].title})),c.a.createElement("div",{className:N.a.paddings_one},c.a.createElement("div",{className:N.a.icon3}),c.a.createElement(P,{title:e.props.tasks[3].title})),c.a.createElement("div",{className:N.a.paddings_one},c.a.createElement("div",{className:N.a.icon4}),c.a.createElement(P,{title:e.props.tasks[4].title})),c.a.createElement("div",{className:N.a.paddings_one},c.a.createElement("div",{className:N.a.icon5}),c.a.createElement(P,{title:e.props.tasks[5].title}))))))},e}return t}(c.a.Component),w=t(17),y=t.n(w),L=t(14);var M=function(){return c.a.createElement(L.Flip,{top:!0},c.a.createElement("div",{className:y.a.slogan},c.a.createElement("div",{className:y.a.sloganContainer},c.a.createElement("span",{className:y.a.sloganTitle},"I Am Available For Freelancer"),c.a.createElement("div",{className:y.a.wrapper},c.a.createElement("a",{href:"#!",className:y.a.btn}," Hire me",c.a.createElement("svg",null,c.a.createElement("rect",null)))))))},I=t(26),R=t(5),F=t.n(R);function A(e){var a=Object(n.useState)(""),t=Object(I.a)(a,2),r=t[0],o=t[1],i=Object(n.useState)(""),l=Object(I.a)(i,2),s=l[0],m=l[1],p=Object(n.useState)(""),_=Object(I.a)(p,2),d=_[0],u=_[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:F.a.form,id:"contact-form",onSubmit:function(a){a.preventDefault(),e.onSubmit(r,s,d)}},c.a.createElement(L.Fade,{bottom:!0},c.a.createElement("input",{className:F.a.formArea,type:"text",placeholder:"Name",id:"name",value:r,onChange:function(e){return o(e.currentTarget.value)}})),c.a.createElement(L.Fade,{bottom:!0},c.a.createElement("input",{className:F.a.formArea,type:"text",placeholder:"E-mail",id:"e_mail",value:s,onChange:function(e){return m(e.currentTarget.value)}})),c.a.createElement(L.Fade,{bottom:!0},c.a.createElement("textarea",{className:F.a.formArea,type:"text",placeholder:"Message",id:"message",value:d,onChange:function(e){return u(e.currentTarget.value)}})),c.a.createElement("div",{className:F.a.wrapper},c.a.createElement("button",{className:F.a.btn},"Send Message",c.a.createElement("svg",null,c.a.createElement("rect",null))))))}var O=function(e){return c.a.createElement("div",{className:F.a.contacts,id:"contact"},c.a.createElement("div",{className:F.a.container},c.a.createElement("span",{className:F.a.contactSpan},"Contact"),c.a.createElement("div",{className:F.a.moduleLine}," "),c.a.createElement(A,{onSubmit:e.onSubmit})))},B=t(7),G=t.n(B),J=t(21),W=t(51),H=t(20),q=t(50),z=t.n(q);H.b.add(W.a);var D=function(){return c.a.createElement("div",{className:G.a.footer},c.a.createElement("div",{className:G.a.name},c.a.createElement("div",null,"Gerasimovich Natalia"),c.a.createElement("div",{className:G.a.moduleLine}),c.a.createElement("div",{className:G.a.containerIcon},c.a.createElement(z.a,null,c.a.createElement("div",{className:G.a.icon},c.a.createElement("a",{href:"https://t.me/natali_kul",target:"_blank"},c.a.createElement(J.a,{icon:["fab","telegram-plane"],size:"2x"}))),c.a.createElement("div",{className:G.a.icon},c.a.createElement("a",{href:"https://www.instagram.com/natali_gerasimovich/?hl=ru",target:"_blank"},c.a.createElement(J.a,{icon:["fab","instagram"],size:"2x"}))),c.a.createElement("div",{className:G.a.icon},c.a.createElement("a",{href:"https://m.vk.com/natali_gerasimovich",target:"_blank"},c.a.createElement(J.a,{icon:["fab","vk"],size:"2x"}))),c.a.createElement("div",{className:G.a.icon},c.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=375293452559",target:"_blank"},c.a.createElement(J.a,{icon:["fab","whatsapp"],size:"2x"}))))),c.a.createElement("span",{className:G.a.prava},"\xa92020 \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b")))},Y=t(18),Z=t.n(Y),K=t(12),Q=t.n(K);var U=function(e){return"../../ProjectPicture/".concat(e.urlImage),c.a.createElement("div",{className:Q.a.project},c.a.createElement("div",{className:Q.a.projectImg,style:{backgroundImage:"url(".concat(e.urlImage,")")}}),c.a.createElement("a",{className:Q.a.btn,href:e.href,target:"_blank"},"Look"),c.a.createElement("div",{className:Q.a.container},c.a.createElement("span",{className:Q.a.title},e.titleProject),c.a.createElement("span",{className:Q.a.description},e.descriptionProject)))},V=t(52),X=t.n(V),$=t(53),ee=t.n($),ae=t(54),te=t.n(ae),ne=t(55),ce=t.n(ne),re=t(56),oe=t.n(re);var ie=function(e){var a=["https://natasha17-spec.github.io/Network/#/profile","https://natasha17-spec.github.io/ToDoListIT","https://github.com/natasha17-spec/Portfolio","https://natasha17-spec.github.io/Simple_Counter_Redux","https://natasha17-spec.github.io/Advanced_counter_Redux","https://natasha17-spec.github.io/Simple_Counter_Redux"],t=[X.a,ee.a,te.a,ce.a,oe.a],n=e.project.map((function(e,n){return c.a.createElement(U,{titleProject:e.titleProject,urlImage:t[n],href:a[n],descriptionProject:e.descriptionProject})}));return c.a.createElement("div",{className:Z.a.projectsBlock},c.a.createElement("div",{className:Z.a.projectContainer},c.a.createElement("div",{className:Z.a.projectTitle},c.a.createElement("span",null,"My Project"),c.a.createElement("div",{className:Z.a.moduleLine}," ")),c.a.createElement(C.a,{right:!0},c.a.createElement("div",{className:Z.a.projects},n))))},le=t(57),se=t.n(le),me=t(58),pe=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={tasks:[{title:"REACT",description:"React \u2014 \u044d\u0442\u043e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 JavaScript \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430. \u041e\u043d\u0430 \u0431\u044b\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0435\u0439 Facebook \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c \u0432 2013 \u0433\u043e\u0434\u0443."},{title:"HTML",description:"\u0421\u0442\u0438\u043b\u0435\u043c \u0438\u043b\u0438 CSS (Cascading Style Sheets, \u043a\u0430\u0441\u043a\u0430\u0434\u043d\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441\u0442\u0438\u043b\u0435\u0439) \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0431\u043e\u0440 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0445 \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434."},{title:"CSS",description:"JavaScript \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043e\u043c Brendan Eich \u0438\u0437 Netscape \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432 \u0434\u0435\u043a\u0430\u0431\u0440\u0435 1995 \u0433\u043e\u0434\u0430 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c LiveScript."},{title:"TYPESCRIPT",description:"JavaScript \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043e\u043c Brendan Eich \u0438\u0437 Netscape \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432 \u0434\u0435\u043a\u0430\u0431\u0440\u0435 1995 \u0433\u043e\u0434\u0430 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c LiveScript."},{title:"JS",description:"JavaScript \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043e\u043c Brendan Eich \u0438\u0437 Netscape \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432 \u0434\u0435\u043a\u0430\u0431\u0440\u0435 1995 \u0433\u043e\u0434\u0430 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c LiveScript."},{title:"REACT/REDUX",description:"JavaScript \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043e\u043c Brendan Eich \u0438\u0437 Netscape \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432 \u0434\u0435\u043a\u0430\u0431\u0440\u0435 1995 \u0433\u043e\u0434\u0430 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c LiveScript."}],project:[{titleProject:"Social Network",descriptionProject:"React/React-Redux, Thunk, API/Ajax, Cookie"},{titleProject:"TodoList",descriptionProject:"React/React-Redux,Thunk, API/Ajax, Type Script"},{titleProject:"Portfolio",descriptionProject:"React, HTML, CSS, JS, Flexbox, Node Express"},{titleProject:"Simple Count",descriptionProject:"React,Redux, HTML, CSS, JS"},{titleProject:"Advanced Count",descriptionProject:"React, Redux, HTML, CSS, JS"}]},e.render=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"portfolio"},c.a.createElement(se.a,{className:"particles",params:{particles:{number:{value:450},color:{value:"#5ec5e1"},shape:{type:"circle",stroke:{width:.3,color:"#5ec5e1"},polygon:{nb_sides:6},image:{src:"http://www.iconsdb.com/icons/preview/white/contacts-xxl.png"}},opacity:{value:.4,random:!0,anim:{enable:!1,speed:3}},size:{value:3,random:!1,anim:{enable:!1,speed:40}},line_linked:{enable:!0,distance:140,color:"#fff",width:1},move:{enable:!0,speed:8,direction:"none",bounce:!1}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"push"}},modes:{repulse:{distance:50,duration:.4},bubble:{distance:100,size:10}}}}}),c.a.createElement(h,{tasks:e.state.tasks}),c.a.createElement(j,null),c.a.createElement(T,{tasks:e.state.tasks}),c.a.createElement(ie,{project:e.state.project}),c.a.createElement(M,null),c.a.createElement(O,{onSubmit:function(e,a,t){me.post("https://g-mail-portfolio.herokuapp.com/sendMessage",{name:e,email:a,message:t}).then((function(e){alert("\u0412\u0430\u0448\u0435 \u043f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e")}))}}),c.a.createElement(D,null)))},e}return t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _e=t(61);o.a.render(c.a.createElement(_e.a,null,c.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},11:function(e,a,t){e.exports={main:"Main_main__29wbA",container:"Main_container__3NIQG",greeting:"Main_greeting__PWoMI",greetingIam:"Main_greetingIam__Gilk-",tittle:"Main_tittle__ewRx1","flashing-border":"Main_flashing-border__3ywTi","printed-text":"Main_printed-text__1r-Mi",mainPhoto:"Main_mainPhoto__3XdjO"}},12:function(e,a,t){e.exports={projectContainer:"Project_projectContainer__3g2W5",project:"Project_project__3nD7j",projectImg:"Project_projectImg__3PX_G",container:"Project_container__24Z2s",btn:"Project_btn__3u3UK",title:"Project_title__1kqhx",description:"Project_description__2lVwW",boxProject:"Project_boxProject__2-BtX",projectTitle:"Project_projectTitle__1piPJ",moduleLine:"Project_moduleLine__MI5b7",name:"Project_name__1qKqt"}},15:function(e,a,t){e.exports={navMenu:"NavMenu_navMenu__2GB7A",link:"NavMenu_link__-NTIj",activeLink:"NavMenu_activeLink__eQq5G"}},17:function(e,a,t){e.exports={slogan:"Slogan_slogan__3mcIc",sloganContainer:"Slogan_sloganContainer__36LyK",sloganTitle:"Slogan_sloganTitle__G6V0I",wrapper:"Slogan_wrapper__Mlh9I",btn:"Slogan_btn__3oM4N"}},18:function(e,a,t){e.exports={projectContainer:"Projects_projectContainer__vhnjb",projects:"Projects_projects__2NqxZ",icon:"Projects_icon__BFvLV",containerSpan:"Projects_containerSpan__2sEEM",btn:"Projects_btn__3-deQ",title:"Projects_title__3o3mx",description:"Projects_description__5Ar1y",boxProject:"Projects_boxProject__3LWdq",projectTitle:"Projects_projectTitle__R_FHh",moduleLine:"Projects_moduleLine__2YBaM"}},2:function(e,a,t){e.exports={skills:"Skills_skills__ZZfo0",wrapper:"Skills_wrapper__sPm9U",icon:"Skills_icon__32ay4",skillTitle:"Skills_skillTitle__3temW",skillsWrapper:"Skills_skillsWrapper__2tS4N",icon1:"Skills_icon1__2YvSs",icon2:"Skills_icon2__aF3VC",icon3:"Skills_icon3__2iGyO",icon4:"Skills_icon4__kCY-x",icon5:"Skills_icon5__3pkRw",paddings_one:"Skills_paddings_one___qhu9",moduleLine:"Skills_moduleLine__2Gz3d"}},25:function(e,a,t){e.exports={skillBox:"Skill_skillBox__3GGjR",icon:"Skill_icon__3PUFY",skillTitle:"Skill_skillTitle__1WRu1",skillDescription:"Skill_skillDescription__3N-fY"}},32:function(e,a,t){e.exports={headerBox:"Header_headerBox__1tfu6",headerContainer:"Header_headerContainer__1s_lh"}},5:function(e,a,t){e.exports={contacts:"Contacts_contacts__39BzE",contactSpan:"Contacts_contactSpan__3qJTz",container:"Contacts_container__259lW",form:"Contacts_form__J3ybq",conteiner:"Contacts_conteiner__1iGKm",button:"Contacts_button__3c3xK",wrapper:"Contacts_wrapper__1cPZC",btn:"Contacts_btn__1Mkog",formArea:"Contacts_formArea__1SC68",moduleLine:"Contacts_moduleLine__1FjJu"}},52:function(e,a,t){e.exports=t.p+"static/media/social_network.a111b285.png"},53:function(e,a,t){e.exports=t.p+"static/media/todolist.01236eee.png"},54:function(e,a,t){e.exports=t.p+"static/media/portfolio.cd5ca201.PNG"},55:function(e,a,t){e.exports=t.p+"static/media/Simpl_Count_On_Redux.fd7795de.PNG"},56:function(e,a,t){e.exports=t.p+"static/media/advanced.ecf6a1de.png"},62:function(e,a,t){e.exports=t(107)},67:function(e,a,t){},68:function(e,a,t){},7:function(e,a,t){e.exports={footer:"Footer_footer__2aZFg",name:"Footer_name__1DRi5",title:"Footer_title__1SBWT",containerIcon:"Footer_containerIcon__3HOi-",icon:"Footer_icon__WFuoR",prava:"Footer_prava__1td9Q",moduleLine:"Footer_moduleLine__1dLPs"}}},[[62,1,2]]]);
//# sourceMappingURL=main.8f2a6e91.chunk.js.map
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[7],{2268:function(e,t,r){"use strict";var a=r(7294),l=r(5444);t.Z=function(e){var t=e.blogs,r=e.title;return a.createElement("div",{className:"container"},a.createElement("div",{className:"text-center font-bold  text-2xl mb-2"},a.createElement("header",{className:"py-6 md:py-10 flex flex-wrap items-center justify-between md:pt-0 md:pr-6"},a.createElement("h2",{className:"text-5xl capitalize"},r))),a.createElement("ul",{className:"flex flex-wrap md:-mr-6 pb-4 md:pb-10"},t.map((function(e){var t=e.node;return a.createElement("div",{className:"w-full md:w-1/2  mb-6 md:mb-10 md:pr-6",key:t.id},a.createElement("div",{className:"group relative"},a.createElement("figure",{className:" rounded-lg"},a.createElement("img",{class:"transform transition duration-300 ease-in-out group-hover:scale-110 filter-mask w-full h-blog-img shadow-lg object-cover rounded-lg",src:t.frontmatter.cover,lazy:"loaded",style:{height:"350px",width:"800px",filter:"brightness(.3)"}})),a.createElement(l.rU,{to:t.fields.slug,className:"absolute inset-0 p-6 flex flex-col items-start cursor-pointer hover:cursor-planet focus:cursor-planet transition-cursor duration-300 ease-in-out text-white"},a.createElement("header",{className:"w-full"},a.createElement("p",{className:"bg-gradient-to-r from-blue-700 to-green-800 w-max font-medium text-white block uppercase py-1 px-2 text-xs rounded"},t.frontmatter.category," "),a.createElement("h2",{className:"w-blog-title max-w-full pt-4 font-bold text-2xl md:text-3xl leading-snug text-white"},t.frontmatter.title)),a.createElement("p",{className:"mt-auto ml-auto uppercase font-medium text-sm text-white leading-tight"},"Read more"))))}))))}},62:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var a=r(7294),l=(r(5444),r(8708)),n=r(2268);function s(e){var t=e.data,r=e.pageContext;return a.createElement(l.Z,null,a.createElement("section",{className:"blog-list"},a.createElement(n.Z,{blogs:t.allMarkdownRemark.edges,title:r.category}),a.createElement("nav",{className:"w-full flex justify-center mb-5"},function(){if(r.currentPage>1)return!0}()&&a.createElement("a",{className:"border border-black px-4 py-2 mr-2",href:r.currentPage<=2?"/"+r.category+"/":"/"+r.category+"/"+(r.currentPage-1)},"Previous"),function(){if(r.currentPage<r.numPages)return!0}()&&a.createElement("a",{className:"border border-black px-4 py-2 mr-2",href:"/"+r.category+"/"+(r.currentPage+1)},"Next"))))}}}]);
//# sourceMappingURL=component---src-template-blog-category-js-b4a1a3b8e580032ab659.js.map
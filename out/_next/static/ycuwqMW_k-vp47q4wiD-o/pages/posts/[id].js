(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"16Ul":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return Array.isArray(e)?"[".concat(e.map((function(e){return'"'.concat(e,'"')})),"]"):'"'.concat(e,'"')};t.default=a},"3XIN":function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=a(n("8Kt/")),c=a(n("Q4nh")),i=(o.default.createElement,function(e){var t=e.url,n=e.logo,a='{\n    "@context": "http://schema.org",\n    "@type": "Organization",\n    "url": "'.concat(t,'",\n    "logo": "').concat(n,'"\n  }');return o.default.createElement(r.default,null,o.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,c.default)(a),key:"jsonld-logo"}))});t.default=i},"3eiv":function(e,t,n){"use strict";var a=n("284h"),o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("lwsE")),c=o(n("W8MJ")),i=o(n("a1gu")),l=o(n("Nsbk")),d=o(n("7W2i")),u=o(n("8Kt/")),p=a(n("q1tI")),s=o(n("X8E+")),f=(p.default.createElement,function(e){function t(){return(0,r.default)(this,t),(0,i.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.noindex,a=e.nofollow,o=e.description,r=e.canonical,c=e.openGraph,i=e.facebook,l=e.twitter,d=e.additionalMetaTags,f=e.titleTemplate,m=e.mobileAlternate,h=e.languageAlternates;return p.default.createElement(u.default,null,(0,s.default)({title:t,noindex:void 0!==n&&n,nofollow:a,description:o,canonical:r,facebook:i,openGraph:c,additionalMetaTags:d,twitter:l,titleTemplate:f,mobileAlternate:m,languageAlternates:h}))}}]),t}(p.Component));t.default=f},"3jjq":function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=a(n("8Kt/")),c=a(n("Q4nh")),i=a(n("16Ul")),l=a(n("fKyl")),d=(o.default.createElement,function(e){var t=e.name,n=e.startDate,a=e.endDate,d=e.location,u=e.url,p=e.description,s=e.images,f='{\n    "@context": "http://schema.org",\n    "@type": "Event",\n    "startDate": "'.concat(n,'",\n    "endDate": "').concat(a,'",\n    ').concat(function(e){return'\n  "location": {\n    "@type": "Place",\n    '.concat((0,l.default)(e.address),"\n    ").concat(e.sameAs?'"sameAs": "'.concat(e.sameAs,'",'):"",'\n    "name": "').concat(e.name,'"\n  },\n')}(d),"\n    ").concat(s?'"image":'.concat((0,i.default)(s),","):"","\n    ").concat(u?'"url": "'.concat(u,'",'):"","\n    ").concat(p?'"description": "'.concat(p,'",'):"",'\n    "name": "').concat(t,'"\n  }');return o.default.createElement(r.default,null,o.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,c.default)(f),key:"jsonld-event"}))});t.default=d},"7gbB":function(e,t,n){"use strict";var a=n("284h"),o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("lwsE")),c=o(n("W8MJ")),i=o(n("a1gu")),l=o(n("Nsbk")),d=o(n("7W2i")),u=o(n("8Kt/")),p=a(n("q1tI")),s=o(n("X8E+")),f=(p.default.createElement,function(e){function t(){return(0,r.default)(this,t),(0,i.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.titleTemplate,a=e.dangerouslySetAllPagesToNoIndex,o=e.dangerouslySetAllPagesToNoFollow,r=e.description,c=e.canonical,i=e.facebook,l=e.openGraph,d=e.additionalMetaTags,f=e.twitter,m=e.defaultOpenGraphImageWidth,h=e.defaultOpenGraphImageHeight,g=e.defaultOpenGraphVideoWidth,y=e.defaultOpenGraphVideoHeight,v=e.mobileAlternate,b=e.languageAlternates;return p.default.createElement(u.default,null,(0,s.default)({title:t,titleTemplate:n,dangerouslySetAllPagesToNoIndex:void 0!==a&&a,dangerouslySetAllPagesToNoFollow:void 0!==o&&o,description:r,canonical:c,facebook:i,openGraph:l,additionalMetaTags:d,twitter:f,defaultOpenGraphImageWidth:m,defaultOpenGraphImageHeight:h,defaultOpenGraphVideoWidth:g,defaultOpenGraphVideoHeight:y,mobileAlternate:v,languageAlternates:b}))}}]),t}(p.Component));t.default=f},DwSc:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=a(n("8Kt/")),c=a(n("Q4nh")),i=(o.default.createElement,function(e){var t=e.baseSalary,n=e.datePosted,a=e.description,i=e.employmentType,l=e.hiringOrganization,d=e.jobLocation,u=e.applicantLocationRequirements,p=e.jobLocationType,s=e.title,f=e.validThrough,m='{\n    "@context": "http://schema.org",\n    "@type": "JobPosting",\n    '.concat(t?function(e){return'\n  "baseSalary": {\n    "@type": "MonetaryAmount",\n    '.concat(e.currency?'"currency": "'.concat(e.currency,'",'):"",'\n    "value": {\n      "@type": "QuantitativeValue",\n      ').concat(e.value?'"value": "'.concat(e.value,'",'):"","\n      ").concat(e.unitText?'"unitText": "'.concat(e.unitText,'"'):"","\n    }\n  },\n")}(t):"",'\n    "datePosted": "').concat(n,'",\n    "description": "').concat(a,'",\n    ').concat(i?'"employmentType": "'.concat(i,'",'):"",'\n    "hiringOrganization" : {\n      "@type" : "Organization",\n      "name" : "').concat(l.name,'",\n      "sameAs" : "').concat(l.sameAs,'"\n    },\n    \n    "jobLocation": {\n      "@type": "Place",\n      "address": {\n        "@type": "PostalAddress",\n        "addressLocality": "').concat(d.addressLocality,'",\n        "addressRegion": "').concat(d.addressRegion,'",\n        "postalCode" : "').concat(d.postalCode,'",\n        "streetAddress" : "').concat(d.streetAddress,'",\n        "addressCountry" : "').concat(d.addressCountry,'"\n      }\n    },\n    ').concat(u?' "applicantLocationRequirements": {\n        "@type": "Country",\n        "name": "'.concat(u,'"\n    },'):"","\n    ").concat(p?'"jobLocationType": "'.concat(p,'",'):"","\n    ").concat(f?'"validThrough": "'.concat(f,'",'):"",'\n    "title": "').concat(s,'"\n  }');return o.default.createElement(r.default,null,o.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,c.default)(m),key:"jsonld-jobPosting"}))});t.default=i},EqzI:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return n("yG97")}])},FNEe:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=a(n("8Kt/")),c=a(n("Q4nh")),i=(o.default.createElement,function(e){return Array.isArray(e)?"[".concat(e.map((function(e){return'"'.concat(e,'"')})),"]"):'"'.concat(e,'"')}),l=function(e){var t=e.url,n=e.logo,a=e.contactPoint,l='{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "url": "'.concat(t,'",\n    ').concat(n?'"logo": "'.concat(n,'",'):"",'\n    "contactPoint": [').concat(function(e){return e.map((function(e){return'{\n    "@type": "ContactPoint",\n    "telephone": "'.concat(e.telephone,'",\n    "contactType": "').concat(e.contactType,'"').concat(e.areaServed?',\n    "areaServed": '.concat(i(e.areaServed)):"").concat(e.availableLanguage?',\n    "availableLanguage": '.concat(i(e.availableLanguage)):"").concat(e.contactOption?',\n    "contactOption": "'.concat(e.contactOption,'"'):"","\n    }")}))}(a),"]\n  }");return o.default.createElement(r.default,null,o.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,c.default)(l),key:"jsonld-corporate-contact"}))};t.default=l},IH7m:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=a(n("8Kt/")),c=a(n("Q4nh")),i=(o.default.createElement,function(e){var t=e.url,n=e.title,a=e.images,i=void 0===a?[]:a,l=e.datePublished,d=e.dateModified,u=void 0===d?null:d,p=e.authorName,s=e.description,f='{\n    "@context": "http://schema.org",\n    "@type": "Blog",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'.concat(t,'"\n    },\n    "headline": "').concat(n,'",\n    "image": [\n      ').concat(i.map((function(e){return'"'.concat(e,'"')})),'\n     ],\n    "datePublished": "').concat(l,'",\n    "dateModified": "').concat(u||l,'",\n    "author": {\n      "@type": "Person",\n      "name": "').concat(p,'"\n    },\n    "description": "').concat(s,'"\n  }');return o.default.createElement(r.default,null,o.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,c.default)(f),key:"jsonld-blog"}))});t.default=i},JQZL:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=a(n("8Kt/")),c=a(n("Q4nh")),i=a(n("16Ul")),l=a(n("fKyl")),d=(o.default.createElement,function(e){return'\n  {\n    "@type": "OpeningHoursSpecification",\n    "opens": "'.concat(e.opens,'",\n    "closes": "').concat(e.closes,'",\n    ').concat(e.dayOfWeek?'"dayOfWeek": '.concat((0,i.default)(e.dayOfWeek),","):"","\n    ").concat(e.validFrom?'"validFrom": "'.concat(e.validFrom,'",'):"","\n    ").concat(e.validThrough?'"validThrough": "'.concat(e.validThrough,'"'):"","\n  }\n")}),u=function(e){var t=e.type,n=e.id,a=e.name,u=e.description,p=e.url,s=e.telephone,f=e.address,m=e.geo,h=e.images,g=e.rating,y=e.priceRange,v=e.sameAs,b=e.openingHours,P='{\n    "@context": "http://schema.org",\n    "@type": "'.concat(t,'",\n    "@id": "').concat(n,'",\n    ').concat(u?'"description": "'.concat(u,'",'):"","\n    ").concat(p?'"url": "'.concat(p,'",'):"","\n    ").concat(s?'"telephone": "'.concat(s,'",'):"","\n    ").concat((0,l.default)(f),"\n    ").concat(m?"".concat(function(e){return'\n  "geo": {\n    "@type": "GeoCoordinates",\n    "latitude": "'.concat(e.latitude,'",\n    "longitude": "').concat(e.longitude,'"\n  },\n')}(m)):"","\n    ").concat(g?"".concat(function(e){return'\n  "aggregateRating": {\n    "@type": "AggregateRating",\n    "ratingValue": "'.concat(e.ratingValue,'",\n    "ratingCount": "').concat(e.ratingCount,'"\n  },\n')}(g)):"","\n    ").concat(y?'"priceRange": "'.concat(y,'",'):"",'\n    "image":').concat((0,i.default)(h),",\n    ").concat(v?'"sameAs": ['.concat(v.map((function(e){return'"'.concat(e,'"')})),"],"):"","\n    ").concat(b?'"openingHoursSpecification": '.concat(Array.isArray(b)?"[".concat(b.map((function(e){return"".concat(d(e))})),"]"):d(b),","):"",'\n    "name": "').concat(a,'"\n  }');return o.default.createElement(r.default,null,o.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,c.default)(P),key:"jsonld-local-business"}))};t.default=u},LPvk:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=a(n("8Kt/")),c=a(n("Q4nh")),i=(o.default.createElement,function(e){var t=e.courseName,n=e.description,a=e.providerName,i=e.providerUrl,l='{\n    "@context": "http://schema.org",\n    "@type": "Course",\n    "name": "'.concat(t,'",\n    "description": "').concat(n,'",\n    "provider": {\n      "@type": "Organization",\n      "name": "').concat(a,'"').concat(i?',\n      "sameAs": "'.concat(i,'"'):"","\n    }\n  }");return o.default.createElement(r.default,null,o.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,c.default)(l),key:"jsonld-course"}))});t.default=i},N0Ro:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=a(n("8Kt/")),c=a(n("Q4nh")),i=(o.default.createElement,function(e){var t=e.type,n=e.name,a=e.url,i=e.sameAs,l=void 0===i?[]:i,d='{\n    "@context": "http://schema.org",\n    "@type": "'.concat(t,'",\n    "name": "').concat(n,'",\n    "url": "').concat(a,'",\n    "sameAs": [\n      ').concat(l.map((function(e){return'"'.concat(e,'"')})),"\n     ]\n  }");return o.default.createElement(r.default,null,o.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,c.default)(d),key:"jsonld-social"}))});t.default=i},"O2h/":function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=a(n("8Kt/")),c=a(n("Q4nh")),i=(o.default.createElement,function(e){var t=e.url,n=e.title,a=e.images,i=void 0===a?[]:a,l=e.datePublished,d=e.dateModified,u=void 0===d?null:d,p=e.authorName,s=e.description,f=e.publisherName,m=e.publisherLogo,h='{\n    "@context": "http://schema.org",\n    "@type": "Article",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'.concat(t,'"\n    },\n    "headline": "').concat(n,'",\n    "image": [\n      ').concat(i.map((function(e){return'"'.concat(e,'"')})),'\n     ],\n    "datePublished": "').concat(l,'",\n    "dateModified": "').concat(u||l,'",\n    "author": {\n      "@type": "Person",\n      "name": "').concat(p,'"\n    },\n    "publisher": {\n      "@type": "Organization",\n      "name": "').concat(f,'",\n      "logo": {\n        "@type": "ImageObject",\n        "url": "').concat(m,'"\n      }\n    },\n    "description": "').concat(s,'"\n  }');return o.default.createElement(r.default,null,o.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,c.default)(h),key:"jsonld-article"}))});t.default=i},Q4nh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{__html:e}};t.default=a},VgMC:function(e,t,n){},"X8E+":function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("pVnL")),r=a(n("q1tI")),c=(r.default.createElement,{templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0}),i=function(e){var t=[];e.titleTemplate&&(c.templateTitle=e.titleTemplate);var n="";e.title&&(n=e.title,c.templateTitle&&(n=c.templateTitle.replace(/%s/g,(function(){return n}))),t.push(r.default.createElement("title",{key:"title"},n)));var a=e.noindex||c.noindex||e.dangerouslySetAllPagesToNoIndex,i=e.nofollow||c.nofollow||e.dangerouslySetAllPagesToNoFollow;if(a||i?(e.dangerouslySetAllPagesToNoIndex&&(c.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(c.nofollow=!0),t.push(r.default.createElement("meta",{key:"robots",name:"robots",content:"".concat(a?"noindex":"index",",").concat(i?"nofollow":"follow")})),t.push(r.default.createElement("meta",{key:"googlebot",name:"googlebot",content:"".concat(a?"noindex":"index",",").concat(i?"nofollow":"follow")}))):(t.push(r.default.createElement("meta",{key:"robots",name:"robots",content:"index,follow"})),t.push(r.default.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"}))),e.description&&t.push(r.default.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&t.push(r.default.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&0<e.languageAlternates.length&&e.languageAlternates.forEach((function(e){t.push(r.default.createElement("link",{rel:"alternate",key:"languageAlternate-".concat(e.hrefLang),hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&t.push(r.default.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(r.default.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(r.default.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&t.push(r.default.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push(r.default.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var l=e.openGraph.type.toLowerCase();t.push(r.default.createElement("meta",{key:"og:type",property:"og:type",content:l})),"profile"===l&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(r.default.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(r.default.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(r.default.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(r.default.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===l&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,n){t.push(r.default.createElement("meta",{key:"book:author:0".concat(n),property:"book:author",content:e}))})),e.openGraph.book.isbn&&t.push(r.default.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(r.default.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,n){t.push(r.default.createElement("meta",{key:"book:tag:0".concat(n),property:"book:tag",content:e}))}))):"article"===l&&e.openGraph.article?(e.openGraph.article.publishedTime&&t.push(r.default.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(r.default.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(r.default.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,n){t.push(r.default.createElement("meta",{key:"article:author:0".concat(n),property:"article:author",content:e}))})),e.openGraph.article.section&&t.push(r.default.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,n){t.push(r.default.createElement("meta",{key:"article:tag:0".concat(n),property:"article:tag",content:e}))}))):("video.movie"===l||"video.episode"===l||"video.tv_show"===l||"video.other"===l)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,n){e.profile&&t.push(r.default.createElement("meta",{key:"video:actor:0".concat(n),property:"video:actor",content:e.profile})),e.role&&t.push(r.default.createElement("meta",{key:"video:actor:role:0".concat(n),property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,n){t.push(r.default.createElement("meta",{key:"video:director:0".concat(n),property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,n){t.push(r.default.createElement("meta",{key:"video:writer:0".concat(n),property:"video:writer",content:e}))})),e.openGraph.video.duration&&t.push(r.default.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&t.push(r.default.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,n){t.push(r.default.createElement("meta",{key:"video:tag:0".concat(n),property:"video:tag",content:e}))})),e.openGraph.video.series&&t.push(r.default.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&t.push(r.default.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||n})),(e.openGraph.description||e.description)&&t.push(r.default.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(c.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(c.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,n){t.push(r.default.createElement("meta",{key:"og:image:0".concat(n),property:"og:image",content:e.url})),e.alt&&t.push(r.default.createElement("meta",{key:"og:image:alt0".concat(n),property:"og:image:alt",content:e.alt})),e.width?t.push(r.default.createElement("meta",{key:"og:image:width0".concat(n),property:"og:image:width",content:e.width.toString()})):c.defaultOpenGraphImageWidth&&t.push(r.default.createElement("meta",{key:"og:image:width0".concat(n),property:"og:image:width",content:c.defaultOpenGraphImageWidth.toString()})),e.height?t.push(r.default.createElement("meta",{key:"og:image:height".concat(n),property:"og:image:height",content:e.height.toString()})):c.defaultOpenGraphImageHeight&&t.push(r.default.createElement("meta",{key:"og:image:height".concat(n),property:"og:image:height",content:c.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(c.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(c.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,n){t.push(r.default.createElement("meta",{key:"og:video:0".concat(n),property:"og:video",content:e.url})),e.alt&&t.push(r.default.createElement("meta",{key:"og:video:alt0".concat(n),property:"og:video:alt",content:e.alt})),e.width?t.push(r.default.createElement("meta",{key:"og:video:width0".concat(n),property:"og:video:width",content:e.width.toString()})):c.defaultOpenGraphVideoWidth&&t.push(r.default.createElement("meta",{key:"og:video:width0".concat(n),property:"og:video:width",content:c.defaultOpenGraphVideoWidth.toString()})),e.height?t.push(r.default.createElement("meta",{key:"og:video:height".concat(n),property:"og:video:height",content:e.height.toString()})):c.defaultOpenGraphVideoHeight&&t.push(r.default.createElement("meta",{key:"og:video:height".concat(n),property:"og:video:height",content:c.defaultOpenGraphVideoHeight.toString()}))})),e.openGraph.locale&&t.push(r.default.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(r.default.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(r.default.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&0<e.additionalMetaTags.length&&e.additionalMetaTags.forEach((function(e){t.push(r.default.createElement("meta",(0,o.default)({key:e.name?e.name:e.property},e)))})),t};t.default=i},e7Nu:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=a(n("8Kt/")),c=a(n("Q4nh")),i=(o.default.createElement,function(e){var t=e.itemListElements,n='{\n    "@context": "http://schema.org",\n    "@type": "BreadcrumbList",\n    "itemListElement": [\n      '.concat((void 0===t?[]:t).map((function(e){return'{\n        "@type": "ListItem",\n        "position": '.concat(e.position,',\n        "item": {\n          "@id": "').concat(e.item,'",\n          "name": "').concat(e.name,'"\n        }\n      }')})),"\n     ]\n  }");return o.default.createElement(r.default,null,o.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,c.default)(n),key:"jsonld-breadcrumb"}))});t.default=i},fKyl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return'\n  "address": {\n    "@type": "PostalAddress",\n    "streetAddress": "'.concat(e.streetAddress,'",\n    "addressLocality": "').concat(e.addressLocality,'",\n    ').concat(e.addressRegion?'"addressRegion": "'.concat(e.addressRegion,'",'):"",'\n    "postalCode": "').concat(e.postalCode,'",\n    "addressCountry": "').concat(e.addressCountry,'"\n  },\n')}},ffb8:function(e,t,n){"use strict";var a=n("284h"),o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DefaultSeo",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"NextSeo",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ArticleJsonLd",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ArticleJsonLdProps",{enumerable:!0,get:function(){return i.ArticleJsonLdProps}}),Object.defineProperty(t,"BreadcrumbJsonLd",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"BreadCrumbJsonLdProps",{enumerable:!0,get:function(){return l.BreadCrumbJsonLdProps}}),Object.defineProperty(t,"FAQPageJsonLd",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"FAQPageJsonLdProps",{enumerable:!0,get:function(){return d.FAQPageJsonLdProps}}),Object.defineProperty(t,"JobPostingJsonLd",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"JobPostingJsonLdProps",{enumerable:!0,get:function(){return u.JobPostingJsonLdProps}}),Object.defineProperty(t,"BlogJsonLd",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"BlogJsonLdProps",{enumerable:!0,get:function(){return p.BlogJsonLdProps}}),Object.defineProperty(t,"CourseJsonLd",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"CourseJsonLdProps",{enumerable:!0,get:function(){return s.CourseJsonLdProps}}),Object.defineProperty(t,"DatasetJsonLd",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"DatasetJsonLdProps",{enumerable:!0,get:function(){return f.DatasetJsonLdProps}}),Object.defineProperty(t,"LocalBusinessJsonLd",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"LocalBusinessJsonLdProps",{enumerable:!0,get:function(){return m.LocalBusinessJsonLdProps}}),Object.defineProperty(t,"LogoJsonLd",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"LogoJsonLdProps",{enumerable:!0,get:function(){return h.LogoJsonLdProps}}),Object.defineProperty(t,"ProductJsonLd",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"ProductJsonLdProps",{enumerable:!0,get:function(){return g.ProductJsonLdProps}}),Object.defineProperty(t,"SocialProfileJsonLd",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"SocialProfileJsonLdProps",{enumerable:!0,get:function(){return y.SocialProfileJsonLdProps}}),Object.defineProperty(t,"CorporateContactJsonLd",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"CorporateContactJsonLdProps",{enumerable:!0,get:function(){return v.CorporateContactJsonLdProps}}),Object.defineProperty(t,"NewsArticleJsonLd",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"NewsArticleJsonLdProps",{enumerable:!0,get:function(){return b.NewsArticleJsonLdProps}}),Object.defineProperty(t,"EventJsonLd",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"EventJsonLdProps",{enumerable:!0,get:function(){return P.EventJsonLdProps}}),Object.defineProperty(t,"DefaultSeoProps",{enumerable:!0,get:function(){return E.DefaultSeoProps}}),Object.defineProperty(t,"NextSeoProps",{enumerable:!0,get:function(){return E.NextSeoProps}});var r=o(n("7gbB")),c=o(n("3eiv")),i=a(n("O2h/")),l=a(n("e7Nu")),d=a(n("fmQT")),u=a(n("DwSc")),p=a(n("IH7m")),s=a(n("LPvk")),f=a(n("sG4i")),m=a(n("JQZL")),h=a(n("3XIN")),g=a(n("gI05")),y=a(n("N0Ro")),v=a(n("FNEe")),b=a(n("wUsm")),P=a(n("3jjq")),E=n("VgMC")},fmQT:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=a(n("8Kt/")),c=a(n("Q4nh")),i=(o.default.createElement,function(e){var t=e.mainEntity,n='{\n    "@context": "http://schema.org/",\n    "@type": "FAQPage",\n    "mainEntity": ['.concat(function(e){return"\n  ".concat(e.map((function(e){return'{\n      "@type": "Question",\n      "name": "'.concat(e.questionName,'",\n      "acceptedAnswer": {\n        "@type": "Answer",\n        "text": "').concat(e.acceptedAnswerText,'"\n      }\n  }')})))}(void 0===t?[]:t),"]\n  }");return o.default.createElement(r.default,null,o.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,c.default)(n),key:"jsonld-faq-page"}))});t.default=i},gI05:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=a(n("8Kt/")),c=a(n("Q4nh")),i=a(n("16Ul")),l=(o.default.createElement,function(e){return'\n  {\n    "@type": "Offer",\n    "priceCurrency": "'.concat(e.priceCurrency,'",\n    ').concat(e.priceValidUntil?'"priceValidUntil": "'.concat(e.priceValidUntil,'",'):"","\n    ").concat(e.itemCondition?'"itemCondition": "'.concat(e.itemCondition,'",'):"","\n    ").concat(e.availability?'"availability": "'.concat(e.availability,'",'):"","\n    ").concat(e.url?'"url": "'.concat(e.url,'",'):"","\n    ").concat(e.seller?'\n      "seller": {\n      "@type": "Organization",\n      "name": "'.concat(e.seller.name,'"\n    },\n    '):"",'\n    "price": "').concat(e.price,'"\n  }\n')}),d=function(e){var t=e.productName,n=e.images,a=void 0===n?[]:n,d=e.description,u=e.sku,p=e.gtin8,s=e.gtin13,f=e.gtin14,m=e.mpn,h=e.brand,g=e.reviews,y=void 0===g?[]:g,v=e.aggregateRating,b=e.offers,P='{\n    "@context": "http://schema.org/",\n    "@type": "Product",\n    "image":'.concat((0,i.default)(a),",\n    ").concat(d?'"description": "'.concat(d,'",'):"","\n    ").concat(m?'"mpn": "'.concat(m,'",'):"","\n    ").concat(u?'"sku": "'.concat(u,'",'):"","\n    ").concat(p?'"gtin8": "'.concat(p,'",'):"","\n    ").concat(s?'"gtin13": "'.concat(s,'",'):"","\n    ").concat(f?'"gtin14": "'.concat(f,'",'):"","\n    ").concat(h?function(e){return'\n  "brand": {\n      "@type": "Thing",\n      "name": "'.concat(e,'"\n    },\n')}(h):"","\n    ").concat(y.length?function(e){return'\n"review": [\n  '.concat(e.map((function(e){return'{\n      "@type": "Review",\n      '.concat(e.author?function(e){return'\n  "author": {\n      "@type": "'.concat(e.type,'",\n      "name": "').concat(e.name,'"\n  },\n')}(e.author):"","\n      ").concat(e.publisher?function(e){return'\n  "publisher": {\n      "@type": "'.concat(e.type,'",\n      "name": "').concat(e.name,'"\n  },\n')}(e.publisher):"","\n      ").concat(e.datePublished?'"datePublished": "'.concat(e.datePublished,'",'):"","\n      ").concat(e.reviewBody?'"reviewBody": "'.concat(e.reviewBody,'",'):"","\n      ").concat(e.name?'"name": "'.concat(e.name,'",'):"","\n      ").concat(function(e){return e?'"reviewRating": {\n          "@type": "Rating",\n          '.concat(e.bestRating?'"bestRating": "'.concat(e.bestRating,'",'):"","\n          ").concat(e.worstRating?'"worstRating": "'.concat(e.worstRating,'",'):"",'\n          "ratingValue": "').concat(e.ratingValue,'"\n        }'):""}(e.reviewRating),"\n  }")})),"],")}(y):"","\n    ").concat(v?function(e){return'\n  "aggregateRating": {\n      "@type": "AggregateRating",\n      "ratingValue": "'.concat(e.ratingValue,'",\n      "reviewCount": "').concat(e.reviewCount,'"\n    },\n')}(v):"","\n    ").concat(b?'"offers": '.concat(Array.isArray(b)?"[".concat(b.map((function(e){return"".concat(l(e))})),"]"):l(b),","):"",'\n    "name": "').concat(t,'"\n  }');return o.default.createElement(r.default,null,o.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,c.default)(P),key:"jsonld-product"}))};t.default=d},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},sG4i:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=a(n("8Kt/")),c=a(n("Q4nh")),i=(o.default.createElement,function(e){var t=e.description,n=e.name,a=e.license,i='{\n    "@context": "http://schema.org",\n    "@type": "Dataset",\n    "description": "'.concat(t,'",\n    "name": "').concat(n,'"').concat(a?',\n        "license": "'.concat(a,'"'):"","\n  }");return o.default.createElement(r.default,null,o.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,c.default)(i),key:"jsonld-dataset"}))});t.default=i},wUsm:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=a(n("8Kt/")),c=a(n("Q4nh")),i=(o.default.createElement,function(e){var t=e.url,n=e.title,a=e.images,i=void 0===a?[]:a,l=e.section,d=e.keywords,u=e.datePublished,p=e.dateCreated,s=void 0===p?null:p,f=e.dateModified,m=void 0===f?null:f,h=e.authorName,g=e.description,y=e.body,v=e.publisherName,b=e.publisherLogo,P='{\n    "@context": "http://schema.org",\n    "@type": "NewsArticle",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'.concat(t,'"\n    },\n    "headline": "').concat(n,'",\n    "image": [\n      ').concat(i.map((function(e){return'"'.concat(e,'"')})),'\n     ],\n    "articleSection":"').concat(l,'",\n    "keywords": "').concat(d,'",    \n    "datePublished": "').concat(u,'",\n    "dateCreated": "').concat(s||u,'",\n    "dateModified": "').concat(m||u,'",\n    "author": {\n      "@type": "Person",\n      "name": "').concat(h,'"\n    },\n    "publisher": {\n      "@type": "Organization",\n      "name": "').concat(v,'",\n      "logo": {\n        "@type": "ImageObject",\n        "url": "').concat(b,'"\n      }\n    },\n    "description": "').concat(g,'",\n    "articleBody": "').concat(y,'"\n  }');return o.default.createElement(r.default,null,o.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,c.default)(P),key:"jsonld-newsarticle"}))});t.default=i},yG97:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return f})),n.d(t,"default",(function(){return m}));var a=n("q1tI"),o=n.n(a),r=n("8Kt/"),c=n.n(r),i=n("YFqc"),l=n.n(i),d=o.a.createElement,u=function(e){return d(o.a.Fragment,null,d(c.a,null,d("title",null,"Open Blog "),d("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),d("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"}),d("link",{rel:"stylesheet",href:"".concat("/blog-next","/fontawesome-free-5.13.0-web/css/all.css")}),d("link",{rel:"stylesheet",href:"".concat("/blog-next","/style.css")})),d("div",null,d("div",{className:"py-3 d-flex align-items-center header mb-5"},d("div",{className:"container"},d("div",{className:""},d(l.a,{href:"/",as:"/blog-next"},d("a",{href:"/blog-next"},d("h1",{className:"logo"}," Open Blog ")))))),d("main",{className:"container"},d("div",{className:"row"},d("div",{className:"col-12 col-lg-9"},e.children,d("hr",{className:"mb-1"}),d("div",{className:"w-100 text-right"},d(l.a,{href:"/",as:"/blog-next"},d("a",null,d("i",{className:"fas fa-home"})))))))),d("footer",{className:"d-flex align-items-center",style:{height:"8em"}},d("div",{className:"container"},d("p",null,d("a",{href:"mailto:vachirawit.mark@gmail.com",className:"text-secondary"},"vachirawit.mark@gmail.com")))))},p=n("ffb8"),s=o.a.createElement,f=!0;function m(e){var t=e.postData;return s(u,null,s(p.NextSeo,{title:t.title,description:t.description}),s("div",{className:"post mb-5",dangerouslySetInnerHTML:{__html:t.contentHtml}}))}}},[["EqzI",0,2,1,3]]]);
if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>a(e,n),o={module:{uri:n},exports:r,require:t};s[n]=Promise.all(c.map((e=>o[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/dynamic-css-manifest.json",revision:"d751713988987e9331980363e24189ce"},{url:"/_next/static/O3iWCBAxqDgFAkBKrMUgF/_buildManifest.js",revision:"085d21e079e3aa55b7378f67d740ee84"},{url:"/_next/static/O3iWCBAxqDgFAkBKrMUgF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2635.c7d5c718cac70ea5.js",revision:"c7d5c718cac70ea5"},{url:"/_next/static/chunks/5803.8fa3255169a154d7.js",revision:"8fa3255169a154d7"},{url:"/_next/static/chunks/8387.3b4b32bcd8927151.js",revision:"3b4b32bcd8927151"},{url:"/_next/static/chunks/9438.54eaf4e00ac07c60.js",revision:"54eaf4e00ac07c60"},{url:"/_next/static/chunks/9447-c856c7d923fade54.js",revision:"c856c7d923fade54"},{url:"/_next/static/chunks/9792-f3a1bc08473d01c2.js",revision:"f3a1bc08473d01c2"},{url:"/_next/static/chunks/cd97a040-ccaebf6c03a0b062.js",revision:"ccaebf6c03a0b062"},{url:"/_next/static/chunks/framework-cfec649a806093c8.js",revision:"cfec649a806093c8"},{url:"/_next/static/chunks/main-4ad45db72c0d4bc8.js",revision:"4ad45db72c0d4bc8"},{url:"/_next/static/chunks/pages/2021/speakers/speakergrid-6420cb3feec4580c.js",revision:"6420cb3feec4580c"},{url:"/_next/static/chunks/pages/2023/hacktober-88bd2408446307c9.js",revision:"88bd2408446307c9"},{url:"/_next/static/chunks/pages/2023/notable-companies-c0ce548ece5ae264.js",revision:"c0ce548ece5ae264"},{url:"/_next/static/chunks/pages/_app-a8017a3098993fd8.js",revision:"a8017a3098993fd8"},{url:"/_next/static/chunks/pages/_error-f52132c52c00efee.js",revision:"f52132c52c00efee"},{url:"/_next/static/chunks/pages/about-the-conference-b3754512a056c641.js",revision:"b3754512a056c641"},{url:"/_next/static/chunks/pages/agenda-8b63f67f98c49bb3.js",revision:"8b63f67f98c49bb3"},{url:"/_next/static/chunks/pages/code-of-conduct-cfecab6a444350ee.js",revision:"cfecab6a444350ee"},{url:"/_next/static/chunks/pages/contact-33370af39958320e.js",revision:"33370af39958320e"},{url:"/_next/static/chunks/pages/guides/crew-f02e8f3c56d872e6.js",revision:"f02e8f3c56d872e6"},{url:"/_next/static/chunks/pages/guides/speakers-dc3d1d099e7f46ff.js",revision:"dc3d1d099e7f46ff"},{url:"/_next/static/chunks/pages/guides/sponsors-931e4f273b81ad66.js",revision:"931e4f273b81ad66"},{url:"/_next/static/chunks/pages/index-435dd77bc4bc5359.js",revision:"435dd77bc4bc5359"},{url:"/_next/static/chunks/pages/information/accessibility-information-956ed6acbaad3956.js",revision:"956ed6acbaad3956"},{url:"/_next/static/chunks/pages/information/apply-to-speak-ac8054643817a6b6.js",revision:"ac8054643817a6b6"},{url:"/_next/static/chunks/pages/information/attendee-information-460cb21c5487250c.js",revision:"460cb21c5487250c"},{url:"/_next/static/chunks/pages/information/covid-precautions-86591d2fa7f9e779.js",revision:"86591d2fa7f9e779"},{url:"/_next/static/chunks/pages/information/demographics-013dd123f2bd23f2.js",revision:"013dd123f2bd23f2"},{url:"/_next/static/chunks/pages/information/event-activities-62c1a9c699171fc3.js",revision:"62c1a9c699171fc3"},{url:"/_next/static/chunks/pages/information/supporting-speakers-98c76ab973725aa4.js",revision:"98c76ab973725aa4"},{url:"/_next/static/chunks/pages/information/ticket-information-dce200848b8d39d6.js",revision:"dce200848b8d39d6"},{url:"/_next/static/chunks/pages/information/venue-information-300d92acdf91e6f4.js",revision:"300d92acdf91e6f4"},{url:"/_next/static/chunks/pages/organisers/james-hayward-41f644c2aeaeb4a7.js",revision:"41f644c2aeaeb4a7"},{url:"/_next/static/chunks/pages/organisers/jessica-white-57a15d8d7fca9201.js",revision:"57a15d8d7fca9201"},{url:"/_next/static/chunks/pages/organisers/mia-gordon-0508aa164f3ee3f3.js",revision:"0508aa164f3ee3f3"},{url:"/_next/static/chunks/pages/organisers/moreton-brockley-c09661876907f103.js",revision:"c09661876907f103"},{url:"/_next/static/chunks/pages/organisers/rachel-watson-ba309032f7468c51.js",revision:"ba309032f7468c51"},{url:"/_next/static/chunks/pages/organisers/steven-pears-57f2f7a29a3ed941.js",revision:"57f2f7a29a3ed941"},{url:"/_next/static/chunks/pages/pastconferences/album-ae2ee202b896945d.js",revision:"ae2ee202b896945d"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/anthony-dang-add5225d3d229490.js",revision:"add5225d3d229490"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/cara-holland-a1436d0ece7b8a6a.js",revision:"a1436d0ece7b8a6a"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/dylan-beattie-96e1d8c7cada91fd.js",revision:"96e1d8c7cada91fd"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/galiya-warrier-f28de8d1e107db34.js",revision:"f28de8d1e107db34"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/helen-joy-3bbb899d6d1d027c.js",revision:"3bbb899d6d1d027c"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/ian-cooper-803aec598124a10e.js",revision:"803aec598124a10e"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/ian-johnson-444cd73db6f42a4b.js",revision:"444cd73db6f42a4b"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/jessica-salisbury-3b339af1d857ffc4.js",revision:"3b339af1d857ffc4"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/joel-hammond-turner-ccbf8e816668d836.js",revision:"ccbf8e816668d836"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/mark-towndrow-9c74471dfe4b467c.js",revision:"9c74471dfe4b467c"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/matt-brunt-2a63c302e031a583.js",revision:"2a63c302e031a583"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/neil-oconnor-6a8625c8debee837.js",revision:"6a8625c8debee837"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/robin-ninan-d42d7158d5961b0e.js",revision:"d42d7158d5961b0e"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/samathy-barratt-19dbe46b90f1b55d.js",revision:"19dbe46b90f1b55d"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/simon-painter-f44b4fac3bd220d8.js",revision:"f44b4fac3bd220d8"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2019/zac-braddy-99c009c10879c676.js",revision:"99c009c10879c676"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/clifford-agius-1d2dc6aa7338d37a.js",revision:"1d2dc6aa7338d37a"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/connell-sharp-5cd2d071bb5f6e2b.js",revision:"5cd2d071bb5f6e2b"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/dylan-beattie-7d038587b2778dca.js",revision:"7d038587b2778dca"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/james-croft-da042c3914898888.js",revision:"da042c3914898888"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/jennifer-mackown-d41874087305d901.js",revision:"d41874087305d901"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/kojo-hinson-8b672d8ead283538.js",revision:"8b672d8ead283538"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/leke-sholuade-12ed1fc86a008aa3.js",revision:"12ed1fc86a008aa3"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/lex-lofthouse-f6f72098f8718f8f.js",revision:"f6f72098f8718f8f"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/manu-magalhaes-0f651af763fa7e23.js",revision:"0f651af763fa7e23"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/matt-whetton-f076c44aa2411bdd.js",revision:"f076c44aa2411bdd"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/poornima-nayar-ee77b09e45b156f0.js",revision:"ee77b09e45b156f0"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/riz-akmal-khan-5c2aae943eac34dd.js",revision:"5c2aae943eac34dd"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/simon-painter-d200d08982b3d974.js",revision:"d200d08982b3d974"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/stephen-haunts-6f888296c701b4f3.js",revision:"6f888296c701b4f3"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/stephen-jackson-ec6278b141e28bcc.js",revision:"ec6278b141e28bcc"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/steve-collins-96f4ec1ea0ddce7c.js",revision:"96f4ec1ea0ddce7c"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/tania-allard-7d5f94d91755f724.js",revision:"7d5f94d91755f724"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2021/tom-morton-af20a983c9eb416b.js",revision:"af20a983c9eb416b"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/ashley-smith-d5bd403d1d90d067.js",revision:"d5bd403d1d90d067"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/connell-sharp-1b8c13d42e569b87.js",revision:"1b8c13d42e569b87"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/dan-clarke-61a90448d747b808.js",revision:"61a90448d747b808"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/eli-holderness-ed6d391224dcf081.js",revision:"ed6d391224dcf081"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/gosia-borzecka-e97dfc6ee282d4ca.js",revision:"e97dfc6ee282d4ca"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/jamie-tanna-0dc857aac4da95ed.js",revision:"0dc857aac4da95ed"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/marc-steele-e64c9775118285f5.js",revision:"e64c9775118285f5"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/marcus-noble-dbfa4694e1c6c029.js",revision:"dbfa4694e1c6c029"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/mark-goodwin-ca8833e1ce72ea78.js",revision:"ca8833e1ce72ea78"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/martyn-kilbryde-6242e6d90f32a587.js",revision:"6242e6d90f32a587"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/matt-brunt-336d4032afd67dab.js",revision:"336d4032afd67dab"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/matt-hunt-6767948b3ca00708.js",revision:"6767948b3ca00708"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/paul-bailey-b4eeadf166b50f1c.js",revision:"b4eeadf166b50f1c"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/poornima-nayar-c051ceb4e2b67c39.js",revision:"c051ceb4e2b67c39"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/rachel-breeze-1abc10dda2ac441f.js",revision:"1abc10dda2ac441f"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/sean-farmar-3a802206c5c9bb95.js",revision:"3a802206c5c9bb95"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/shaun-lawrence-9330bdcdf98ae4f8.js",revision:"9330bdcdf98ae4f8"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/2023/soumaya-erradi-e3c48075c982a831.js",revision:"e3c48075c982a831"},{url:"/_next/static/chunks/pages/pastconferences/pastspeakers/pastspeakergrid-24d12f6c4adc2c50.js",revision:"24d12f6c4adc2c50"},{url:"/_next/static/chunks/pages/sponsor/social-responsibility-224369f7f1f0e09d.js",revision:"224369f7f1f0e09d"},{url:"/_next/static/chunks/pages/sponsor/sponsor-the-event-f49985104669c8c6.js",revision:"f49985104669c8c6"},{url:"/_next/static/chunks/pages/sponsor/sponsorship-tiers-3639de6fad77b21b.js",revision:"3639de6fad77b21b"},{url:"/_next/static/chunks/pages/sponsor/testimonials-0c59f94e42d79911.js",revision:"0c59f94e42d79911"},{url:"/_next/static/chunks/pages/sponsor/why-sponsor-f59b7274c1baf9e1.js",revision:"f59b7274c1baf9e1"},{url:"/_next/static/chunks/pages/talks-c7fc547387ae50b2.js",revision:"c7fc547387ae50b2"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-d54018257a36c021.js",revision:"d54018257a36c021"},{url:"/_next/static/css/26d3835ffb0a4063.css",revision:"26d3835ffb0a4063"},{url:"/icons/android-icon-192x192-dunplab-manifest-20421.jpg",revision:"03d5f2acd8f45a8cc4f7b87b37152a57"},{url:"/icons/apple-icon-114x114-dunplab-manifest-20421.jpg",revision:"3114ccd7a01606ca53daafc0c9cd0064"},{url:"/icons/apple-icon-120x120-dunplab-manifest-20421.jpg",revision:"9a443a87fcdb1ba61a3ae1e62c39f891"},{url:"/icons/apple-icon-144x144-dunplab-manifest-20421.jpg",revision:"e0888e827350f3a2339e49d3fcd89a6f"},{url:"/icons/apple-icon-152x152-dunplab-manifest-20421.jpg",revision:"f3798dbbe15e1da7df86b4956db2b3ec"},{url:"/icons/apple-icon-180x180-dunplab-manifest-20421.jpg",revision:"4ef0d5687d59f42d022cf286a27681b8"},{url:"/icons/apple-icon-57x57-dunplab-manifest-20421.jpg",revision:"5db97081c3cca2726fc5dfb725cb4ce9"},{url:"/icons/apple-icon-60x60-dunplab-manifest-20421.jpg",revision:"3c1ffcb426cd8d771e32ba206f8186c8"},{url:"/icons/apple-icon-72x72-dunplab-manifest-20421.jpg",revision:"e8eb9fec1d5d40a11af7d5c03e311c9d"},{url:"/icons/apple-icon-76x76-dunplab-manifest-20421.jpg",revision:"43f5e08edd48e3b4abea7a2fe25d5407"},{url:"/icons/favicon-16x16-dunplab-manifest-20421.jpg",revision:"ef9437a773dee9d7a311643e7e438f25"},{url:"/icons/favicon-32x32-dunplab-manifest-20421.jpg",revision:"0c6def766473bbae1546e9c9951cbf73"},{url:"/icons/favicon-96x96-dunplab-manifest-20421.jpg",revision:"6c9b4865758931658f2a1a9724710d21"},{url:"/icons/maskable-icon-192x192-dunplab-manifest-20241.png",revision:"f261071b24f09822b8d5465d2a2ca4c4"},{url:"/icons/splash-screen-icon-512x512-dunplab-manifest-20241.jpg",revision:"b0da458a04400994d51c241a4561fcfb"},{url:"/manifest.json",revision:"72cdacb728493f786d9709f4bb855cba"},{url:"/robots.txt",revision:"6ec5d3f49384dee6bca959de5312dca7"},{url:"/static/appqrcode.png",revision:"fba09db0a956b944b1ff97a5eef4364e"},{url:"/static/banners/about.jpg",revision:"c7755be9b52644024e7d3fcd19753504"},{url:"/static/banners/accessibility.jpg",revision:"4839055103c43ef1c121802a10d4d720"},{url:"/static/banners/activities.jpg",revision:"610a8190fb6978bdda3a280b5cbc8ddf"},{url:"/static/banners/album.jpg",revision:"7b55109beee9484be832c51ea7d0a700"},{url:"/static/banners/apply.jpg",revision:"1e558ad618a05a5dc239344e7c67512f"},{url:"/static/banners/attendee.jpg",revision:"f51e1b203df85e9b090846829dde9a8b"},{url:"/static/banners/coc.jpg",revision:"94092ca25385e5f6cf5db5e3fda73360"},{url:"/static/banners/coffee.png",revision:"7e331592963886c85c8078e63d85dddd"},{url:"/static/banners/contact.jpg",revision:"5099cecc5dd76e1e73f59a517bb1584d"},{url:"/static/banners/covid.jpg",revision:"06644cdd0f8ed10d3a05774bdb573eab"},{url:"/static/banners/crew.jpg",revision:"fd8604c9a91a66f3e51f271f4b0bed05"},{url:"/static/banners/hacktober.jpg",revision:"97bc57bb85318a385be702415b3d4802"},{url:"/static/banners/homepage.jpg",revision:"e4da370b8d7d2ffb0d22872c404f9105"},{url:"/static/banners/organisers.jpg",revision:"fdd77bd8812896358f34cdbd36f4adc2"},{url:"/static/banners/organisers/jess.jpg",revision:"2487f42cd975fba449483f95d6a1fdaf"},{url:"/static/banners/organisers/mia.jpg",revision:"61703f88b7ad682d05a46bd72072b930"},{url:"/static/banners/organisers/mort.jpg",revision:"7ff7e74e40535b4aa47b33ee31dd4708"},{url:"/static/banners/organisers/rach.jpg",revision:"caa590ba72ca136373b0f6048ecd3306"},{url:"/static/banners/speaker-info.jpg",revision:"d544d396c3c071e45b720a570804e51c"},{url:"/static/banners/speakers.jpg",revision:"8a2364253e4decf019beb6f8ed48ba30"},{url:"/static/banners/sponsor.jpg",revision:"ce638571bb46c2420c6db6326b0bfe66"},{url:"/static/banners/sponsorship-tiers.png",revision:"990f54015d32aa5c19fb993678ff8ea7"},{url:"/static/banners/support.jpg",revision:"63861ddf3fd7a8c9b5b897043ddfe23a"},{url:"/static/banners/testimonials.jpg",revision:"41459374e45d0aade78260ee7691018e"},{url:"/static/banners/ticket.jpg",revision:"92d191428d46d0d44fb01e978f2b605a"},{url:"/static/banners/venue.jpg",revision:"33e99bd489030c89eba9e79e6a2c2130"},{url:"/static/banners/why-sponsor.jpg",revision:"11688fd3790fb8d4321cffbfaee06d0d"},{url:"/static/client/object-assign-auto.min.js",revision:"3bddb8b52a177c246d12eadec8728688"},{url:"/static/client/sessionize.css",revision:"8fcd72ec7b91a0e1f444fa4b61fd3cc1"},{url:"/static/client/sessionize.js",revision:"609857aef370de4e3ec8f65c8245eaee"},{url:"/static/ddd_avatar_300.jpg",revision:"84c5477ae29be417c02cae20112c64d1"},{url:"/static/ddd_avatar_400x400.jpg",revision:"66965d73a5e7abae552cd5977634db13"},{url:"/static/demographics/2019-jobs.png",revision:"2ab8a4b47f0e1b9ab0b0567c3e7e5864"},{url:"/static/demographics/2019-level.png",revision:"9968b4e5fccdbb0cfc942f87e8b2ad63"},{url:"/static/demographics/2019-topics.png",revision:"0ac47412bcb5ff1c8f51072244217094"},{url:"/static/demographics/2021-jobs.png",revision:"b874dc1e3abd089432c2a92cefeef3d0"},{url:"/static/demographics/2021-level.png",revision:"b8fd2cb365da0e9158b70b6d00784126"},{url:"/static/demographics/2021-topics.png",revision:"1cca3aa6ace987441dd6d7d7da88d169"},{url:"/static/favicon/android-icon-144x144.png",revision:"e8a1e2aefbd9abd6ca49d99046aac86c"},{url:"/static/favicon/android-icon-192x192.png",revision:"5898ce70d2be693f04985ad9f21cf0ef"},{url:"/static/favicon/android-icon-36x36.png",revision:"c4a26f66dc6bfea65591f82f564cb076"},{url:"/static/favicon/android-icon-48x48.png",revision:"b77eecd6e54cb5e53a71033d1bddc2d7"},{url:"/static/favicon/android-icon-72x72.png",revision:"e567f4b0ebf15b4db66aa373c143e46c"},{url:"/static/favicon/android-icon-96x96.png",revision:"2c5d02a7547f92197c0bfd143e50bd5d"},{url:"/static/favicon/apple-icon-114x114.png",revision:"5d8b9de927564f7d114dd4225cc9b0b0"},{url:"/static/favicon/apple-icon-120x120.png",revision:"1cbfe9c67e658f900444e29d877d49f8"},{url:"/static/favicon/apple-icon-144x144.png",revision:"e8a1e2aefbd9abd6ca49d99046aac86c"},{url:"/static/favicon/apple-icon-152x152.png",revision:"5d8a1e2d00f528a12d4c5395a9135c1f"},{url:"/static/favicon/apple-icon-180x180.png",revision:"96f4756e0ae5d26f381a315a432347b9"},{url:"/static/favicon/apple-icon-57x57.png",revision:"8a8e2978459ec93d49a6445bfe10e884"},{url:"/static/favicon/apple-icon-60x60.png",revision:"5c0fb9cf80367a598baeefc4c067e5ed"},{url:"/static/favicon/apple-icon-72x72.png",revision:"e567f4b0ebf15b4db66aa373c143e46c"},{url:"/static/favicon/apple-icon-76x76.png",revision:"86dc4ca39e4f521fbca947a12276d4c5"},{url:"/static/favicon/apple-icon-precomposed.png",revision:"5898ce70d2be693f04985ad9f21cf0ef"},{url:"/static/favicon/apple-icon.png",revision:"5898ce70d2be693f04985ad9f21cf0ef"},{url:"/static/favicon/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/static/favicon/favicon-16x16.png",revision:"abe2ed49272ced3d7f29133a674c6e00"},{url:"/static/favicon/favicon-32x32.png",revision:"a22f7d0cc6b9c616679bba2fd9320c16"},{url:"/static/favicon/favicon-96x96.png",revision:"2c5d02a7547f92197c0bfd143e50bd5d"},{url:"/static/favicon/favicon.ico",revision:"7279ed3ca87d28e3a53f5e07b4ead74f"},{url:"/static/favicon/manifest.json",revision:"f92495f5c65456e414d93695b52ed231"},{url:"/static/favicon/ms-icon-144x144.png",revision:"e8a1e2aefbd9abd6ca49d99046aac86c"},{url:"/static/favicon/ms-icon-150x150.png",revision:"5fba8f384e04e1d32abde6bb346415bc"},{url:"/static/favicon/ms-icon-310x310.png",revision:"68f84d1e5042a76a58a6cad288689eb4"},{url:"/static/favicon/ms-icon-70x70.png",revision:"af6db1c876b0abeed44fa054186f5181"},{url:"/static/hacktoberfest/codesnip.png",revision:"2985e000b7ba1975d96cfb95d6f6bff6"},{url:"/static/hacktoberfest/hacktoberfest.png",revision:"27c257bd0b6e05376f03f135c561dbe1"},{url:"/static/hacktoberfest/screenshot.png",revision:"be95bfda907bd3a03dbc3c5687dfc9b8"},{url:"/static/info/Precautions.png",revision:"a55b3a462f9c6074c8f599c941932b41"},{url:"/static/info/crew.jpg",revision:"c57558cc7396b2f7e7c15de8e62660d6"},{url:"/static/info/exhibition.png",revision:"916259ea5d4f5d349d7ce8c9fb7006c8"},{url:"/static/info/hacktoberfest.png",revision:"5adcdbe40d014429faa891ae4ec12bee"},{url:"/static/info/sponsors/promo.png",revision:"4ffededa19662ed91d8dd83b0c32dab6"},{url:"/static/organisers/james.png",revision:"574471a53249738219d098eb9d02a89f"},{url:"/static/organisers/jess.png",revision:"b9118737ed4c2569b7d7080d48d8a797"},{url:"/static/organisers/mia.png",revision:"5be1090231f50040743cccd2382399f0"},{url:"/static/organisers/mort.png",revision:"a55bb928ea48012e1f0fabba529f6dfe"},{url:"/static/organisers/rachel.png",revision:"8ddb2365d8a02195446b1c6f558a26f8"},{url:"/static/organisers/steven.png",revision:"52ea54caa58b8b4bb4f09a4549ffa490"},{url:"/static/pageimage/happy.jpg",revision:"68b0b2a111dfec010a7a01e1cad3e622"},{url:"/static/partners/codebar.png",revision:"37049879f4ea470c91ed02b86b2ddcf7"},{url:"/static/partners/muslamic-makers.png",revision:"eb17c53cdbc9350749ada511e847952e"},{url:"/static/partners/ndc.png",revision:"ac2e21ce5bb4240b073e90ae205258c0"},{url:"/static/partners/newday.png",revision:"add3909b098077aa5cea137be3e5d16d"},{url:"/static/partners/next-tech-girls.png",revision:"467cacd0f1781c90763e4c3db212a199"},{url:"/static/partners/ntu.png",revision:"9297d8df31a6e3d750027fc01073916e"},{url:"/static/rooms/LT2.jpg",revision:"54e9e6696f3265428ebefc7cd495723c"},{url:"/static/rooms/LT2.png",revision:"ae6d4db72c47487cbcaea02fe7c69562"},{url:"/static/rooms/LT4.jpg",revision:"71de93fa61af7f2265cbd74d0d5b464c"},{url:"/static/rooms/LT4.png",revision:"c1c0446c73737809590c148e6c46ca50"},{url:"/static/rooms/LT4_Back.jpg",revision:"c3763a873c2c5ddcb88505846b5780e7"},{url:"/static/rooms/LT5.jpg",revision:"27934ce26dd805e8b276eedd96984ce4"},{url:"/static/rooms/LT5.png",revision:"d257ab65e14a4ead61025b8580492d49"},{url:"/static/rooms/LT5_Back.jpg",revision:"78c437336caf647b0775416bc3949447"},{url:"/static/speakers/2019/Anthony_D.jpg",revision:"79fbf4358e153f09d6efcbd1607bf862"},{url:"/static/speakers/2019/Cara_H.jpg",revision:"92ebe63add10c72fb6a2bc0e4fc985a1"},{url:"/static/speakers/2019/Dylan_B.jpg",revision:"f13e60d80d76a2cc5ffb13f5f74554c2"},{url:"/static/speakers/2019/Galiya_W.jpg",revision:"aedcf28efb68d19335205e44ab3b8402"},{url:"/static/speakers/2019/Helen_J.jpg",revision:"dac5322356fcbfa92c9fe40a16e84312"},{url:"/static/speakers/2019/Ian_C.jpg",revision:"29c82baf10ca4346fdb6d802478f60c4"},{url:"/static/speakers/2019/Ian_J.jpg",revision:"569d147702a88794c66740cb3e78012a"},{url:"/static/speakers/2019/Jessica_S.jpg",revision:"fc2303941a704628c29a21d70622cf86"},{url:"/static/speakers/2019/Joel_HT.jpg",revision:"8a35aeea8aa752f5ae60deaac7e1fe15"},{url:"/static/speakers/2019/Mark_T.jpg",revision:"c8fd7698d69545f5563b2f9535b16e19"},{url:"/static/speakers/2019/Matt_B.jpg",revision:"f771918dd8748b25a453c18029877afa"},{url:"/static/speakers/2019/Neil_OC.jpg",revision:"65ed383dd7b8470dc78eb7ad14e3aece"},{url:"/static/speakers/2019/Robin_N.jpg",revision:"5f59d490e68a31c2ad391b618d0cff58"},{url:"/static/speakers/2019/Samathy_B.jpg",revision:"24ce5e87932a690cc704166e0e42ab4d"},{url:"/static/speakers/2019/Simon_P.jpg",revision:"4d053ff25be28badb526a754827784f5"},{url:"/static/speakers/2019/Zac_B.jpg",revision:"4373d8abd37797f5d5d43679bde767a7"},{url:"/static/speakers/2021/Clifford_A.jpg",revision:"6d282e6be44b080f0df2d783aa56d338"},{url:"/static/speakers/2021/Connell.jpg",revision:"797bc7de84d9bafffa30a3ed0c8ae4f0"},{url:"/static/speakers/2021/Dylan_B.jpg",revision:"7e33eefa2757ee57509c3128bf7ae044"},{url:"/static/speakers/2021/James_C.jpg",revision:"cd8c60a1eb688cc27301824142fac664"},{url:"/static/speakers/2021/Jen_M.jpg",revision:"51e178d46402f9a5297f73e6bc8b4a40"},{url:"/static/speakers/2021/Kojo_H.jpg",revision:"f25f5a6c24326c75fff0d888e73c83d8"},{url:"/static/speakers/2021/Leke_S.jpg",revision:"07bb4129cfa14b2794bd73dfef34553e"},{url:"/static/speakers/2021/Lex_L.jpg",revision:"01b24a999ec70ca5680fbcdd6a3cd00a"},{url:"/static/speakers/2021/Manu_M.jpg",revision:"7f21ade72053c80113daa21eba974267"},{url:"/static/speakers/2021/Matt_W.jpg",revision:"650bab5836572305946899faaa4cc913"},{url:"/static/speakers/2021/Poornima_N.jpg",revision:"c25174b7064fd9f0bf05a21a07ec802e"},{url:"/static/speakers/2021/Rizwana_A.jpg",revision:"5a1016106dd09c6a401772793f83d6f7"},{url:"/static/speakers/2021/Simon_P.jpg",revision:"8687446c3c776aa07046f35f1f8caa25"},{url:"/static/speakers/2021/Stephen_H.jpg",revision:"1852222613647167b616ff97c8b6a03e"},{url:"/static/speakers/2021/Stephen_J.jpg",revision:"1765ecd1f32e2ac742cc347e497a4f3f"},{url:"/static/speakers/2021/Steve_C.jpg",revision:"abd56783de71e7864c2231e00bdf157b"},{url:"/static/speakers/2021/Tania_A.jpg",revision:"4862d56837debc7898d3b1ef64bf8c00"},{url:"/static/speakers/2021/Tom_M.jpg",revision:"cf313859569b2ddd996ee5c643a82702"},{url:"/static/speakers/2023/Ashley_S.jpg",revision:"5581c643c50ecfc14c6136fcd6558dde"},{url:"/static/speakers/2023/Connell_S.jpg",revision:"bdef01e1e071bd2678e238108c7bf1f8"},{url:"/static/speakers/2023/Dan_C.jpg",revision:"29c922086b3ca046ec72bcfc457c504d"},{url:"/static/speakers/2023/Eli_H.jpg",revision:"19909332346d44b96f39cbb8f24086e3"},{url:"/static/speakers/2023/Gosia_B.jpg",revision:"559acf87af5835a477f663cf128d0d84"},{url:"/static/speakers/2023/Jamie_T.jpg",revision:"d4b1b70d6d0fa8a25ecb051a346ad370"},{url:"/static/speakers/2023/Marc_S.jpg",revision:"067b9c1835b8e1c38c1839d83964e4f5"},{url:"/static/speakers/2023/Marcus_N.jpg",revision:"d1f9f8ffd11e0821df6b66be46c92eb7"},{url:"/static/speakers/2023/Mark_G.jpg",revision:"00bb151e8ddc846a657d0df80fb50846"},{url:"/static/speakers/2023/Martyn_K.jpg",revision:"f14a162f036b23f5bd54a5737c2c6781"},{url:"/static/speakers/2023/Matt_B.jpg",revision:"cf0ff05cef003a2eec76366a7116e8fe"},{url:"/static/speakers/2023/Matt_H.jpg",revision:"6a462df4e0f41d302c3b50d1ded66f3e"},{url:"/static/speakers/2023/Paul_B.jpg",revision:"27f1e7f10985965708fa87878f8068e9"},{url:"/static/speakers/2023/Poornima_N.jpg",revision:"437c34c795d3e855b0019feac3ebe707"},{url:"/static/speakers/2023/Rachel_B.jpg",revision:"0011c15c59d1dc841eaa4f8c47b6bd20"},{url:"/static/speakers/2023/Sean_F.jpg",revision:"57d84c32ee3a10425c0ebe8a3ba3cfc2"},{url:"/static/speakers/2023/Shaun_L.jpg",revision:"60373ee25717dfc65e37984aa6a17a0a"},{url:"/static/speakers/2023/Soumaya_E.jpg",revision:"d1a0c24573bb729a001dc03a3f3e2c6c"},{url:"/static/speakers/TBC.png",revision:"dc6121b20f75ac078aafeff35383f7cd"},{url:"/static/sponsors/BJSS.png",revision:"159c15f74a76944fda0d79e248762734"},{url:"/static/sponsors/Cronofy.png",revision:"8c5d25ebcc27aea8cc4cb55253361988"},{url:"/static/sponsors/Experian.png",revision:"194938f1596f1a25ce4a5b67266f521d"},{url:"/static/sponsors/MHR.png",revision:"8eb4f971f47a1911ff074b656ad06748"},{url:"/static/sponsors/Mindera.png",revision:"7618b43d6d2ce3a2d7b8e5f392937100"},{url:"/static/sponsors/Motorpoint.png",revision:"6d7c1d12ecc6af6b067b00f799103304"},{url:"/static/sponsors/empty.png",revision:"7fcd1642fbe2c2f3445f408691b4be34"},{url:"/static/sponsorship/testimonials/bjss.png",revision:"ba687b198a841877bd6465c56ddd04c7"},{url:"/static/sponsorship/testimonials/ert.png",revision:"b64c2554e80e4cdcd922b3728bfb9cb5"},{url:"/static/sponsorship/testimonials/oakbrook.png",revision:"866d11f7f8454220eb9cfc7efdbf118d"},{url:"/static/sponsorship/tiers/booth.jpg",revision:"7a57b61a9e61ac1381d142e7afbf608b"},{url:"/static/sponsorship/tiers/gold.jpg",revision:"553f5d2ef8ea37c0d139372171fdc7d5"},{url:"/static/sponsorship/tiers/platinum.jpg",revision:"b389a8b9db748d4c9ec308755086661a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

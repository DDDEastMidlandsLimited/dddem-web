function sessionize_load() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("data-sessionize-load-url");
      if (file) {
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
              if (this.readyState === 4 && this.status === 200) {
                  elmnt.innerHTML = this.responseText;
                  elmnt.removeAttribute("data-sessionize-load-url");
                  sessionize_load();



                  if (sessionize_onload) sessionize_onload();
              }
          }
          xhttp.open("GET", file, true);
          xhttp.send();
          return;
      }
  }
}

if (typeof sessionize_loaded === 'undefined') {
  sessionize_loaded = true;
  document.addEventListener("DOMContentLoaded", function (event) {
  sessionize_load();
  });
}

"use strict";function sessionize_showmodal(n,t,i){var r=document.getElementById("sz-modal-container"),u=new XMLHttpRequest;return r.innerHTML='<div class="sz-modal-overlay"><div class="sz-spinner"><\/div><\/div>',r.classList.remove("is-hidden"),u.onreadystatechange=function(){var t,n;if(this.readyState===4&&this.status===200)for(r.innerHTML=this.responseText,r.classList.remove("is-hidden"),t=document.getElementsByClassName("sz-modal__close-on-click"),n=0;n<t.length;n++)t[n].onclick=function(){document.getElementById("sz-modal-container").classList.add("is-hidden")};else(this.status===404||this.status===500)&&r.classList.add("is-hidden")},u.open("POST","https://sessionize.com/api/v2/"+n+"/"+t+"?id="+i,!0),u.send(),!1}function sessionize_inittabs(){var i=document.getElementsByClassName("sz-tab-container"),t,n;if(i.length>1){for(n=0;n<i.length;n++)i[n].classList.remove("sz-tab-container--active");for(t=document.getElementsByClassName("sz-tabs__item"),t.length>0&&t[0].classList.add("sz-tabs__item--active"),sessionize_tabchanged(),n=0;n<t.length;n++)t[n].children[0].onclick=sessionize_tabchange}}function sessionize_tabchange(n){for(var r,i=document.getElementsByClassName("sz-tabs__item"),t=0;t<i.length;t++)i[t].classList.remove("sz-tabs__item--active");return r=n.target.parentElement,r.classList.add("sz-tabs__item--active"),sessionize_tabchanged(),!1}function sessionize_tabchanged(){var i=document.getElementsByClassName("sz-tabs__item--active"),t,n,r;if(i.length>0){for(t=document.getElementsByClassName("sz-tab-container"),n=0;n<t.length;n++)t[n].classList.remove("sz-tab-container--active");r=i[0].children[0].href.split("#")[1];document.getElementById(r).classList.add("sz-tab-container--active")}}function sessionize_onload(){if(sessionize_inittabs(),window.location.hash&&window.location.hash.lastIndexOf("#sz-",0)===0){var n=document.getElementById(window.location.hash.substr(1));n&&setTimeout(function(){document.location=window.location.hash},1e3)}}window.onload=sessionize_onload;
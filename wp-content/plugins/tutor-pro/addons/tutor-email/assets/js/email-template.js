(()=>{"use strict";var r={619:(e,t,r)=>{var m=r(120);document.addEventListener("DOMContentLoaded",function(){var r,e=document.querySelector("#tutor-email-settings-form")||document.querySelector("#tutor-mailer-form");e&&(e.querySelectorAll("input").forEach(function(e){e.addEventListener("input",function(e){var e=e.target,t=e.name,r=e.value,e=document.querySelector(".template-preview iframe");if(e){var o=e.contentWindow.document,n=o.querySelector(".tutor-email-logo img"),a=o.querySelector(".tutor-email-header"),i=o.querySelector(".tutor-email-content"),c=o.querySelector(".tutor-email-footer"),u=o.querySelector(".tutor-email-footer-text"),l=o.querySelector(".tutor-email-heading"),s=o.querySelector(".tutor-email-buttons"),d=o.querySelector(".tutor-email-button"),p=o.querySelector(".tutor-email-button-bordered");switch(t){case"email_logo_position":(0,m.Kd)(n.parentElement,"text-align",r);break;case"email_logo_height":(0,m.Kd)(n,"height",r+"px");break;case"email_logo_alt_text":n.setAttribute("alt",r);break;case"email_template_button_position":(0,m.Kd)(s,"text-align",r);break;case"email_template_colors[header_background_color]":(0,m.Kd)(a,"background-color",r);break;case"email_template_colors[header_divider_color]":(0,m.Kd)(a,"border-color",r);break;case"email_template_colors[body_background_color]":(0,m.Kd)(i,"background-color",r),(0,m.Kd)(c,"background-color",r);break;case"email_template_colors[email_title_color]":(0,m.Kd)(l,"color",r);break;case"email_template_colors[email_text_color]":(0,m.Kd)(i,"color",r);break;case"email_template_colors[email_short_code_color]":o.querySelectorAll("strong").forEach(function(e){(0,m.Kd)(e,"color",r)});break;case"email_template_colors[footnote_color]":(0,m.Kd)(u,"color",r);break;case"email_template_colors[primary_button_color]":(0,m.Kd)(d,"--primary-button-color",r);break;case"email_template_colors[primary_button_hover_color]":(0,m.Kd)(d,"--primary-button-hover-color",r);break;case"email_template_colors[primary_button_text_color]":(0,m.Kd)(d,"color",r,"important");break;case"email_template_colors[secondary_button_color]":(0,m.Kd)(p,"--secondary-button-color",r);break;case"email_template_colors[secondary_button_hover_color]":(0,m.Kd)(p,"--secondary-button-hover-color",r);break;case"email_template_colors[secondary_button_text_color]":(0,m.Kd)(p,"color",r,"important")}}})}),null!=(e=document.querySelector(".tutor-thumbnail-uploader"))&&e.addEventListener("tutor_settings_media_selected",function(e){var t=document.querySelector(".template-preview iframe");t&&t.contentWindow.document.querySelector(".tutor-email-logo img").setAttribute("src",e.detail.attachment.url)}),r=document.querySelector(".tutor-email-colors"),document.querySelector(".tutor-color-restore-button").addEventListener("click",function(e){var t=JSON.parse(e.target.dataset.defaults);r.querySelectorAll("input[type=color]").forEach(function(e){e.value=t[e.dataset.picker],e.dispatchEvent(new Event("input"))})}),jQuery(document).on("input","input.email-logo-url",function(){var e=jQuery(this),t=e.val(),e=e.parent().parent().find(".thumbnail-preview img").eq(0);e&&e.attr("src",t)})),jQuery(".tutor-card-collapse-button").click(function(e){jQuery(this).find("i").hasClass("tutor-icon-angle-up")?jQuery(this).find("i").removeClass("tutor-icon-angle-up").addClass("tutor-icon-angle-down"):jQuery(this).find("i").removeClass("tutor-icon-angle-down").addClass("tutor-icon-angle-up"),jQuery(e.target.closest(".tutor-card")).find(".tutor-card-body").slideToggle()})})},60:(e,t,r)=>{var a=r(120);window.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".tutor-option-field-input.tutor-email-placeholders").forEach(function(e){var t=e.dataset.placeholders,r=document.createElement("div"),t=(r.setAttribute("class","tutor-dropdown-parent"),r.innerHTML=(0,a.RW)(t?JSON.parse(t):window._tutorEmailPlaceholders),e.classList.contains("tutor-has-tinymce-editor"));e.insertBefore(r,t?e.firstChild:e.lastChild)}),document.querySelectorAll('.tutor-option-field-input.tutor-email-placeholders input[type="text"], .tutor-option-field-input.tutor-email-placeholders textarea').forEach(function(e){e.addEventListener("input",function(e){var t=e.target.parentNode.querySelector(".tutor-dropdown-parent");t&&("{"===e.data?(e.target.blur(),t.classList.add("is-open"),t.querySelectorAll(".tutor-dropdown-item")[0].classList.add("is-active"),t.querySelectorAll(".tutor-dropdown-item")[0].focus(),document.querySelector("body").style.overflow="hidden",setTimeout(function(){t.querySelector(".tutor-dropdown").scrollTop=0},100)):(t.classList.remove("is-open"),document.querySelector("body").style.overflow="auto"))})});document.querySelectorAll(".tutor-option-field-input.tutor-email-placeholders .tutor-dropdown-item").forEach(function(n){n.addEventListener("click",function(e){e.preventDefault();var t,r,e=(e=n.getAttribute("data-state-text")).slice(1,e.length),o=n.closest(".tutor-option-field-input").querySelector(":scope > input, :scope > textarea");o?(r=(t=o.selectionStart)+e.length,o.value=o.value.substring(0,t)+e+o.value.substring(t),o.dispatchEvent(new Event("input",{bubbles:!0})),o.setSelectionRange(r,r),o.focus()):tinymce.activeEditor&&(tinymce.activeEditor.insertContent(e),tinymce.triggerSave())})});var n=0;document.addEventListener("keydown",function(e){var t,r,o=document.querySelector(".tutor-email-placeholders .tutor-dropdown-parent.is-open");o&&(t=o.querySelectorAll(".tutor-dropdown-item"),"ArrowUp"===e.key?0<n&&(--n,t.forEach(function(e){e.classList.remove("is-active"),e.blur()}),t[n].classList.add("is-active"),t[n].focus()):"ArrowDown"===e.key?n<t.length-1&&(n+=1,t.forEach(function(e){e.classList.remove("is-active"),e.blur()}),t[n].classList.add("is-active"),t[n].focus()):"Enter"===e.key?(r=document.querySelector(".tutor-email-placeholders .tutor-dropdown-item.is-active"))&&(r.click(),n=0,t.forEach(function(e){e.classList.remove("is-active"),e.blur()})):n=0,"Escape"===e.key)&&(o.classList.remove("is-open"),t.forEach(function(e){e.classList.remove("is-active"),e.blur()}),(r=o.closest(".tutor-option-field-input").querySelector(":scope > input, :scope > textarea"))?r.focus():tinymce.activeEditor&&tinymce.activeEditor.focus())}),document.querySelectorAll(".tutor-email-placeholders .tutor-dropdown-parent").forEach(function(e){e.addEventListener("tutor_dropdown_closed",function(e){document.querySelector("body").style.overflow="auto",e.target.querySelectorAll(".tutor-dropdown-item").forEach(function(e){return e.classList.remove("is-active")})})})}),document.addEventListener("readystatechange",function(){"undefined"!=typeof tinymce&&tinymce.activeEditor&&tinymce.activeEditor.on("input",function(e){var t=(0,a.fW)(tinymce.activeEditor),r=t.offsetTop,o=(t.offsetLeft,document.querySelector(".wp-editor-wrap").parentNode.querySelector(".tutor-dropdown-parent"));o&&("{"===e.data?(t=document.createElement("input"),o.appendChild(t),t.focus(),o.removeChild(t),o.classList.add("is-open"),o.querySelector(".tutor-dropdown").style.top=r+"px",o.querySelectorAll(".tutor-dropdown-item")[0].classList.add("is-active"),o.querySelectorAll(".tutor-dropdown-item")[0].focus(),document.querySelector("body").style.overflow="hidden",setTimeout(function(){o.querySelector(".tutor-dropdown").scrollTop=0},100)):(o.classList.remove("is-open"),document.querySelector("body").style.overflow="auto"))})})},120:(e,t,r)=>{r.d(t,{Hc:()=>function(e){var t=e.querySelector(".tutor-email-body"),r=e.querySelector(".tutor-email-footer-text"),o=e.querySelector(".tutor-email-footer-content"),e=e.querySelectorAll("a");t.style.paddingTop="0px",t.style.paddingLeft="0px",t.style.paddingRight="0px",t.style.backgroundColor="transparent",o.style.backgroundColor="transparent",e.forEach(function(e){e.classList.add("preview-only"),e.addEventListener("click",function(e){return e.preventDefault()})}),r&&"settings"===new URLSearchParams(window.location.href).get("edit")&&(r.innerText="Example of a no-reply or instructional footnote");t.querySelectorAll(".user-avatar").forEach(function(e){e.src="http://2.gravatar.com/avatar/bc78e9eeca4abe2043bb671018d504ef?s=96&d=mm&r=g"})},Iy:()=>l,Kd:()=>function(e,t,r,o){e&&e.style.setProperty(t,r,o)},Kz:()=>function(e,t){var r=new FormData;r.append(_tutorobject.nonce_key,_tutorobject._tutor_nonce),r.append("action","tutor_manual_email_receiver_count_help_text"),r.append("receiver_type",e),t&&t.forEach(function(e){r.append("course_ids[]",e)});return jQuery.ajax({url:_tutorobject.ajaxurl,method:"POST",data:r,processData:!1,contentType:!1})},MC:()=>function(i,c){return new Promise(function(r,o){var e=new FormData(i),t=(e.append(_tutorobject.nonce_key,_tutorobject._tutor_nonce),e.get("action"));if("save_email_template"===t&&e.append(c.name,c.value),"save_email_settings"===t){var t=e.get("email_from_address"),n=e.get("email_from_name");if(!t||!n)return i.reportValidity(),o(u("Sender Email Address and Name are required!","tutor-pro"));if(!l(t))return i.reportValidity(),o(u("Please provide a valid Email Address","tutor-pro"))}else{n=e.get("email-subject")||e.get("email_subject"),t=e.get("email-heading")||e.get("email_heading");if(!n||!t)return i.reportValidity(),o(u("Email subject and heading are required!","tutor-pro"))}var a=new XMLHttpRequest;a.open("POST",_tutorobject.ajaxurl,!0),a.send(e),a.onreadystatechange=function(e){var t;4===a.readyState&&((t=JSON.parse(a.response)).success?r:o)(t.message)}})},RW:()=>function(e){return e&&0!==e.length?'\t\n        <ul class="tutor-dropdown" style="width: 100%; margin: 0; max-height: 200px; overflow: scroll;">\n            '.concat(e.map(function(e){return'\n                    <li>\n                        <a class="tutor-dropdown-item tutor-d-flex tutor-justify-between" href="#" data-state-text="'.concat(e.placeholder,'">\n                            <span class="tutor-color-muted">').concat(e.placeholder,"</span>\n                            <span>").concat(e.label,"</span>\n                        </a>\n                    </li>\n                ")}).join(""),"\n        </ul>\n    "):""},WD:()=>function(r){var o={subject:"email-subject",heading:"email-heading",message:"email-additional-message",before_button:"email-before-button",footer_text:"email-footer-text"};Object.keys(r).map(function(e){var t;"message"===e?(t=tinymce.get(o[e]))&&(t.setContent(JSON.parse(r[e])),tinymce.triggerSave()):(t=document.querySelector("[name=".concat(o[e],"]")))&&(t.value=r[e],t.dispatchEvent(new Event("input",{bubbles:!0})))})},fW:()=>function(e){e=e.selection.getRng().getClientRects()[0];if(e)return{offsetTop:e.top+124,offsetLeft:e.left};return{}},rX:()=>function(e){var t=document.createElement("iframe");return t.width="100%",t.height="800px",t.src="".concat(_tutorobject.home_url,"?page=tutor-email-preview&template=").concat(e),t},up:()=>function(e,t){e&&(e.src?e.src=t:e.innerHTML=t)}});var r=wp.i18n,u=r.__;r._x,r._n,r._nx;function l(e){for(var t=e.split(","),r=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,o=0;o<t.length;o++){var n=t[o].trim();if(!r.test(n))return!1}return!0}}},o={};function n(e){var t=o[e];return void 0!==t||(t=o[e]={exports:{}},r[e](t,t.exports,n)),t.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var _,e,b,S,w,E;function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(){q=function(){return i};var i={},e=Object.prototype,u=e.hasOwnProperty,l=Object.defineProperty||function(e,t,r){e[t]=r.value},t="function"==typeof Symbol?Symbol:{},o=t.iterator||"@@iterator",r=t.asyncIterator||"@@asyncIterator",n=t.toStringTag||"@@toStringTag";function a(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(e){a=function(e,t,r){return e[t]=r}}function c(e,t,r,o){var n,a,i,c,t=t&&t.prototype instanceof p?t:p,t=Object.create(t.prototype),o=new S(o||[]);return l(t,"_invoke",{value:(n=e,a=r,i=o,c="suspendedStart",function(e,t){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===e)throw t;return E()}for(i.method=e,i.arg=t;;){var r=i.delegate;if(r){r=function e(t,r){var o=r.method,n=t.iterator[o];if(void 0===n)return r.delegate=null,"throw"===o&&t.iterator.return&&(r.method="return",r.arg=void 0,e(t,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),d;o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;n=o.arg;return n?n.done?(r[t.resultName]=n.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,d):n:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}(r,i);if(r){if(r===d)continue;return r}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===c)throw c="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);c="executing";r=s(n,a,i);if("normal"===r.type){if(c=i.done?"completed":"suspendedYield",r.arg===d)continue;return{value:r.arg,done:i.done}}"throw"===r.type&&(c="completed",i.method="throw",i.arg=r.arg)}})}),t}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}i.wrap=c;var d={};function p(){}function m(){}function f(){}var t={},y=(a(t,o,function(){return this}),Object.getPrototypeOf),y=y&&y(y(w([]))),v=(y&&y!==e&&u.call(y,o)&&(t=y),f.prototype=p.prototype=Object.create(t));function h(e){["next","throw","return"].forEach(function(t){a(e,t,function(e){return this._invoke(t,e)})})}function g(i,c){var t;l(this,"_invoke",{value:function(r,o){function e(){return new c(function(e,t){!function t(e,r,o,n){var a,e=s(i[e],i,r);if("throw"!==e.type)return(r=(a=e.arg).value)&&"object"==x(r)&&u.call(r,"__await")?c.resolve(r.__await).then(function(e){t("next",e,o,n)},function(e){t("throw",e,o,n)}):c.resolve(r).then(function(e){a.value=e,o(a)},function(e){return t("throw",e,o,n)});n(e.arg)}(r,o,e,t)})}return t=t?t.then(e,e):e()}})}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function b(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function w(t){if(t){var r,e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return r=-1,(e=function e(){for(;++r<t.length;)if(u.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e}).next=e}return{next:E}}function E(){return{value:void 0,done:!0}}return l(v,"constructor",{value:m.prototype=f,configurable:!0}),l(f,"constructor",{value:m,configurable:!0}),m.displayName=a(f,n,"GeneratorFunction"),i.isGeneratorFunction=function(e){e="function"==typeof e&&e.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,a(e,n,"GeneratorFunction")),e.prototype=Object.create(v),e},i.awrap=function(e){return{__await:e}},h(g.prototype),a(g.prototype,r,function(){return this}),i.AsyncIterator=g,i.async=function(e,t,r,o,n){void 0===n&&(n=Promise);var a=new g(c(e,t,r,o),n);return i.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},h(v),a(v,n,"Generator"),a(v,o,function(){return this}),a(v,"toString",function(){return"[object Generator]"}),i.keys=function(e){var t,r=Object(e),o=[];for(t in r)o.push(t);return o.reverse(),function e(){for(;o.length;){var t=o.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},i.values=w,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!e)for(var t in this)"t"===t.charAt(0)&&u.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var o=this;function e(e,t){return a.type="throw",a.arg=r,o.next=e,t&&(o.method="next",o.arg=void 0),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t],a=n.completion;if("root"===n.tryLoc)return e("end");if(n.tryLoc<=this.prev){var i=u.call(n,"catchLoc"),c=u.call(n,"finallyLoc");if(i&&c){if(this.prev<n.catchLoc)return e(n.catchLoc,!0);if(this.prev<n.finallyLoc)return e(n.finallyLoc)}else if(i){if(this.prev<n.catchLoc)return e(n.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return e(n.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&u.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}var a=(n=n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc?null:n)?n.completion:{};return a.type=e,a.arg=t,n?(this.method="next",this.next=n.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),b(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r,o,n=this.tryEntries[t];if(n.tryLoc===e)return"throw"===(r=n.completion).type&&(o=r.arg,b(n)),o}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:w(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},i}function u(e,t,r,o,n,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(o,n)}function L(c){return function(){var e=this,i=arguments;return new Promise(function(t,r){var o=c.apply(e,i);function n(e){u(o,t,r,n,a,"next",e)}function a(e){u(o,t,r,n,a,"throw",e)}n(void 0)})}}n(60),n(619),_=n(120),e=wp.i18n,b=e.__,e._x,e._n,e._nx,S=["instructors_of_courses","instructors_except_courses","students_of_courses","students_except_courses","students_completed_courses"],w=b("Success","tutor-pro"),E=b("Error","tutor-pro"),document.addEventListener("DOMContentLoaded",L(q().mark(function e(){var o,n,a,i,c,u,t,l,r,s,d,p,m,f,y,v,h,g;return q().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=document.querySelector("#email_template_title"),n=document.querySelector("#email_option_data"),a=document.querySelector("#tutor-email-template-form"),i=document.querySelector("#tutor-email-settings-form"),c=document.querySelector("#tutor-mailer-form"),a?u=a:i?u=i:c&&(u=c),t=document.querySelector("[action-tutor-email-template-save]"),l=document.querySelector("#tutor-btn-test-mail"),r=document.querySelector("#tutor-btn-save-draft"),s=document.querySelector("#tutor-btn-confirm-manual-mail"),d=document.querySelector("#tutor-btn-send-manual-mail"),g=document.querySelector(".template-preview"),p=g.dataset.email_template,m=(0,_.rX)(p),g.append(m),m.addEventListener("load",function(e){null!=(o=document.querySelector(".loading-spinner"))&&o.remove();var t,r,o,n=e.target.contentWindow.document,a=((0,_.Hc)(n),document.querySelectorAll(".tutor-email-preview-responsive-buttons button"));a.forEach(function(t){t.addEventListener("click",function(e){e.stopImmediatePropagation(),a.forEach(function(e){return e.classList.remove("active")}),t.classList.add("active"),"mobile"===t.dataset.previewMode?m.width="375px":m.width="100%"})}),"undefined"!=typeof tinymce&&tinymce.activeEditor&&tinymce.activeEditor.on("change",function(e){var e=n.querySelector("[data-source=".concat(e.target.id,"]")),t=tinymce.activeEditor.getContent().replace("/<[/]{0,1}div[^>]*>/i","");e&&(e.innerHTML=t),tinymce.triggerSave()}),document.querySelectorAll('.tutor-email-edit-form input[type="hidden"], .tutor-email-edit-form input[type="text"], .tutor-email-edit-form textarea').forEach(function(e){var t,r=e.name,o=e.value;r&&(t=n.querySelector("[data-source=".concat(r,"]")),(0,_.up)(t,o),e.addEventListener("input",function(e){(0,_.up)(t,e.target.value)}))}),c&&(t=n.querySelector(".tutor-email-buttons"),r=document.querySelector(".mailer-page input[name=email_action_button]"),o=document.querySelector(".mailer-page input[name=email_action_position]"),"off"===r.value&&(t.style.display="none",r.closest(".tutor-card").querySelector(".tutor-card-body").style.display="none"),r.nextElementSibling.addEventListener("change",function(e){jQuery(e.target.closest(".tutor-card")).find(".tutor-card-body").slideToggle(),"on"===r.value?t.style.display="block":t.style.display="none"}),o.addEventListener("input",function(e){t.style.textAlign=e.target.value}),e=c.querySelector("input[name=email_footer]"))&&(e.value?n.querySelector(".tutor-email-footer").style.display="block":n.querySelector(".tutor-email-footer").style.display="none",e.addEventListener("input",function(e){e.target.value?n.querySelector(".tutor-email-footer").style.display="block":n.querySelector(".tutor-email-footer").style.display="none"}))}),c)if(f=c.querySelector("select[name=receiver_type]"),y=c.querySelector("#tutor-mailer-course-ids"),v=c.querySelector(".tutor-receiver-count-message"),f&&y){if(jQuery(y).select2(),y.dataset.selected&&jQuery(y).val(JSON.parse(y.dataset.selected)).trigger("change"),S.includes(f.value)||(y.parentElement.style.display="none"),f.value)return g=[],(h=jQuery(y).select2("data")).length&&(g=h.map(function(e){return e.id})),e.next=30,(0,_.Kz)(f.value,g);e.next=32}else e.next=34;else e.next=34;break;case 30:(h=e.sent).success&&v&&(v.style.setProperty("display","flex","important"),v.querySelector("div").innerText=h.data.message,document.querySelector(".tutor-email-modal-title strong").innerText=h.data.count);case 32:f.addEventListener("change",function(){var t=L(q().mark(function e(t){var r;return q().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.target.value,S.includes(r)?y.parentElement.style.display="block":y.parentElement.style.display="none",jQuery(y).select2("data").length&&jQuery(y).val(null).trigger("change"),S.includes(f.value)){e.next=8;break}return e.next=6,(0,_.Kz)(r);case 6:(r=e.sent).success&&v&&(v.style.setProperty("display","flex","important"),v.querySelector("div").innerText=r.data.message,document.querySelector(".tutor-email-modal-title strong").innerText=r.data.count);case 8:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}()),jQuery(y).on("change",function(){var t=L(q().mark(function e(t){var r;return q().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((r=jQuery(y).select2("data")).length)return r=r.map(function(e){return e.id}),e.next=5,(0,_.Kz)(f.value,r);e.next=7;break;case 5:(r=e.sent).success&&v&&(v.style.setProperty("display","flex","important"),v.querySelector("div").innerText=r.data.message,document.querySelector(".tutor-email-modal-title strong").innerText=r.data.count);case 7:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}());case 34:(g=document.querySelector(".tutor-trigger-restore-button"))&&g.addEventListener("click",function(e){e.target.dataset.defaults&&(0,_.WD)(JSON.parse(e.target.dataset.defaults))}),l&&l.addEventListener("click",function(e){e.preventDefault();var t,r,e=document.getElementsByName("testing_email")[0].value;(0,_.Iy)(e)?(a?t="trigger_template":i?t="email_settings":c&&(t="mailer"),(r=new FormData).append(_tutorobject.nonce_key,_tutorobject._tutor_nonce),r.append("test_type",t),r.append("email_template",p),r.append("action","send_test_email_ajax"),r.append("testing_email",e),a&&(r.append("email_to",document.getElementsByName("to")[0].value),r.append("email_key",document.getElementsByName("key")[0].value)),l.classList.add("is-loading"),l.disabled=!0,(0,_.MC)(u,n).then(function(){jQuery.ajax({url:_tutorobject.ajaxurl,method:"POST",data:r,processData:!1,contentType:!1,success:function(e){var t=l.closest(".tutor-dropdown-parent");t&&t.classList.remove("is-open"),tutor_toast(w,b('A test email for "'.concat(o.innerText,'" has been sent to admin!'),"tutor-pro"),"success")},complete:function(){l.classList.remove("is-loading"),l.disabled=!1}})}).catch(function(e){tutor_toast(E,e,"error"),l.classList.remove("is-loading"),l.disabled=!1})):tutor_toast(b("Sorry","tutor-pro"),b("Invalid e-mail address","tutor-pro"),"error")}),t&&t.addEventListener("click",function(e){t.classList.add("is-loading"),t.disabled=!0,e.detail&&1!=e.detail||(e.preventDefault(),(0,_.MC)(u,n).then(function(){tutor_toast(w,b('"'.concat(o.innerText,'" email template updated!'),"tutor-pro"),"success")}).catch(function(e){tutor_toast(E,e,"error")}).finally(function(){t.classList.remove("is-loading"),t.disabled=!1}))}),r&&r.addEventListener("click",function(e){e.preventDefault();var t=e.target;t.classList.add("is-loading"),t.disabled=!0,(0,_.MC)(c).then(function(){tutor_toast(w,b("Email saved successfully!","tutor-pro"),"success")}).catch(function(e){tutor_toast(E,e,"error")}).finally(function(){t.classList.remove("is-loading"),t.disabled=!1})}),s&&s.addEventListener("click",function(e){e.preventDefault();var e=c.querySelector("#tutor-mailer-course-ids"),e=jQuery(e).select2("data"),t=null==(t=c.querySelector("select[name=receiver_type]"))?void 0:t.value;return t?S.includes(t)&&0===e.length?tutor_toast(E,b("Select courses is required!","tutor-pro"),"error"):void document.querySelector("#tutor-email-confirmation-modal").classList.add("tutor-is-active"):tutor_toast(E,b("Email receiver type is required!","tutor-pro"),"error")}),d&&d.addEventListener("click",function(e){e.preventDefault();var t=e.target,r=new FormData;r.append(_tutorobject.nonce_key,_tutorobject._tutor_nonce),r.append("email_template",p),r.append("action","tutor_sent_manual_email"),t.classList.add("is-loading"),t.disabled=!0,(0,_.MC)(c).then(function(){jQuery.ajax({url:_tutorobject.ajaxurl,method:"POST",data:r,processData:!1,contentType:!1,success:function(e){e.success?tutor_toast(w,e.message,"success"):tutor_toast(E,e.message,"error")},complete:function(){t.classList.remove("is-loading"),t.disabled=!1,document.querySelector("#tutor-email-confirmation-modal").classList.remove("tutor-is-active")}})}).catch(function(e){tutor_toast(E,e,"error"),t.classList.remove("is-loading"),t.disabled=!1})});case 41:case"end":return e.stop()}},e)})))})();
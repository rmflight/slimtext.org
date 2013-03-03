(function(){var e;window.editor=ace.edit("editor"),e=document.getElementById("file_manager"),window.combine_path=function(n,t){return e.combine(n,t)},window.save_file=function(){var n;return window.storage.file?(n=e.write(window.storage.file,editor.getValue()),n?(window.notice(chrome.i18n.getMessage("saved"),window.storage.file),document.title=""+e.filename(window.storage.file)+" - Slim Text"):alert(""+chrome.i18n.getMessage("unable_to_save")+" "+window.storage.file)):void 0},window.show_breadcrumb=function(n){var t,o,a,s,i,r,l,d,c,g,p,u,w;if($("#route").empty(),r=e.route(n),r.reverse(),-1!==navigator.appVersion.indexOf("Windows")){if(a=_.first(r),r=_.rest(r),l=_.first(r),l&&(l.name=a.name),0===r.length){for(o=$('<select id="drives_select"></select>'),u=e.drives(),d=0,g=u.length;g>d;d++)t=u[d],o.append('<option value="'+t+'">'+t.substr(0,t.length-1)+"</option>");o.val(a.name.toUpperCase()+"/"),$("#route").append(o)}}else 0===r.length&&$("#route").append("/");for(w=_.initial(r),c=0,p=w.length;p>c;c++)s=w[c],i=$('<a class="file-link">'+s.name+"</a>"),i.data("path",s.path),$("#route").append(i),"/"===s.name?$("#route").append(" "):$("#route").append(" / ");return s=_.last(r),s?$("#route").append(""+s.name):void 0},window.show_sidebar=function(n){var t,o,a,s,i,r;for($("#sidebar").empty(),o=e.list(n),o=_.filter(o,function(n){var t;if("folder"===n.type)return!0;if("file"===n.type){if(t=e.extension(n.name),""===t)return!0;if(t===n.name)return!0;if(t=t.toLowerCase().substr(1,t.length-1),window.known_extension(t))return!0}return!1}),o=_.sortBy(o,function(e){return e.name.toLowerCase()}),r=[],s=0,i=o.length;i>s;s++)t=o[s],t.path===window.storage.file?$("#sidebar").append(t.name):(a=$('<a class="file-link">'+t.name+"</a>"),a.data("path",t.path),$("#sidebar").append(a),"folder"===t.type&&$("#sidebar").append("/")),r.push($("#sidebar").append("<br/>"));return r},window.add_topbar=function(){var e,n,t,o,a,s,i,r,l,d,c,g;for($(".ui-layout-resizer-north").append('<div id="navbar">\n  <span class="dropdown">\n    <a class="dropdown-toggle" data-toggle="dropdown">\n      '+chrome.i18n.getMessage("file")+'\n      <b class="caret"></b>\n    </a>\n    <ul class="dropdown-menu">\n        <li><a class="save_btn">'+chrome.i18n.getMessage("save")+'</a></li>\n    </ul>\n  </span>\n  <span class="dropdown">\n    <a class="dropdown-toggle" data-toggle="dropdown">\n      '+chrome.i18n.getMessage("edit")+'\n      <b class="caret"></b>\n    </a>\n    <ul class="dropdown-menu">\n      <li><a class="indent_btn">'+chrome.i18n.getMessage("indent")+'</a></li>\n      <li><a class="outdent_btn">'+chrome.i18n.getMessage("outdent")+'</a></li>\n      <li><a class="lower_case_btn">'+chrome.i18n.getMessage("lower_case")+'</a></li>\n      <li><a class="upper_case_btn">'+chrome.i18n.getMessage("upper_case")+'</a></li>\n      <li><a class="remove_lines_btn">'+chrome.i18n.getMessage("remove_lines")+'</a></li>\n      <li><a class="toggle_comment_btn">'+chrome.i18n.getMessage("toggle_comment")+'</a></li>\n    </ul>\n  </span>\n  <span class="dropdown">\n    <a class="dropdown-toggle" data-toggle="dropdown">\n      '+chrome.i18n.getMessage("view")+'\n      <b class="caret"></b>\n    </a>\n    <ul class="dropdown-menu">\n        <li class="dropdown-submenu">\n            <a>'+chrome.i18n.getMessage("syntax")+'</a>\n            <ul class="dropdown-menu" id="mode_list"></ul>\n        </li>\n        <li><a class="full_window_btn">'+chrome.i18n.getMessage("full_window")+'</a></li>\n    </ul>\n  </span>\n  <span class="dropdown">\n    <a class="dropdown-toggle" data-toggle="dropdown">\n      '+chrome.i18n.getMessage("preferences")+'\n      <b class="caret"></b>\n    </a>\n    <ul class="dropdown-menu">\n        <li><a class="options_btn">'+chrome.i18n.getMessage("options")+'</a></li>\n    </ul>\n  </span>\n  <span class="dropdown">\n    <a class="dropdown-toggle" data-toggle="dropdown">\n      '+chrome.i18n.getMessage("help")+'\n      <b class="caret"></b>\n    </a>\n    <ul class="dropdown-menu">\n        <li><a href="https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts" target="_blank">'+chrome.i18n.getMessage("keyboard_shortcuts")+'</a></li>\n        <li><a href="http://slimtext.org" target="_blank">'+chrome.i18n.getMessage("website")+'</a></li>\n        <li><a href="https://github.com/tylerlong/slimtext.org/issues" target="_blank">'+chrome.i18n.getMessage("report_issue")+'</a></li>\n        <li><a class="about_btn">'+chrome.i18n.getMessage("about")+' Slim Text</a></li>\n    </ul>\n  </span>\n</div>\n<div id="toolbar">\n<a class="save_btn" title="'+chrome.i18n.getMessage("save")+'"><i class="icon-save"></i></a>\n<a class="indent_btn" title="'+chrome.i18n.getMessage("indent")+'"><i class="icon-indent-right"></i></a>\n<a class="outdent_btn" title="'+chrome.i18n.getMessage("outdent")+'"><i class="icon-indent-left"></i></a>\n<a class="full_window_btn" title="'+chrome.i18n.getMessage("full_window")+'"><i class="icon-fullscreen"></i></a>\n<a class="about_btn" title="'+chrome.i18n.getMessage("about")+' Slim Text"><i class="icon-info-sign"></i></a>\n<i class="icon-fullscreen" id="hidden_btn"></i>\n</div>'),i=[["a","d"],["e","j"],["k","o"],["p","s"],["t","z"]],a=[],r=0,d=i.length;d>r;r++)s=i[r],$("#mode_list").append('<li class="dropdown-submenu">\n    <a>'+s[0].toUpperCase()+" - "+s[1].toUpperCase()+'</a>\n    <ul class="dropdown-menu" id="'+s[0]+"_to_"+s[1]+'"></ul>\n</li>'),a.push([RegExp("^["+s[0]+"-"+s[1]+"]","i"),"#"+s[0]+"_to_"+s[1]]);g=window.modes;for(n in g)for(t=g[n],e='<li><a data-mode="'+n+'" class="mode-link">'+t+"</a></li>",l=0,c=a.length;c>l;l++)if(o=a[l],t.match(o[0])){$(o[1]).append(e);break}return window.layout.allowOverflow($(".ui-layout-resizer-north")),window.layout.state.north.isClosed?($("#navbar").hide(),$("#toolbar").hide()):void 0},window.open_path=function(n){var t,o,a,s,i,r,l,d;{if(e.exists(n)){if(i=e.type(n),"file"===i){if(0===document.title.indexOf("* ")&&!confirm('"'+window.storage.file+'" '+chrome.i18n.getMessage("save_before_leaving")))return;window.storage.file=n,t=e.read(n),editor.session.setValue(t,-1),o=e.extension(n),o&&(o=o.toLowerCase().substr(1,o.length-1)),editor.getSession().setMode(window.guess_mode(o)),document.title=""+e.filename(n)+" - Slim Text",n=e.container(n)}for(;!e.can_list(n);)window.notice(chrome.i18n.getMessage("permission_denied"),n),n=e.container(n);return window.storage.path=n,show_breadcrumb(n),show_sidebar(n)}for(window.notice(chrome.i18n.getMessage("does_not_exist"),n),s=e.route(n),d=_.rest(s),r=0,l=d.length;l>r;r++)if(a=d[r],e.exists(a.path))return window.open_path(a.path),void 0}},$(function(){return chrome.storage.local.get(["path","file"],function(n){var t;return t=n.file||n.path||e.home_folder()||e.temp_folder(),window.storage={file:n.file,path:t},open_path(t),t=n.path||e.home_folder()||e.temp_folder(),open_path(t)}),chrome.storage.sync.get(["theme","font_size"],function(e){return e.theme||(e.theme="monokai"),e.font_size||(e.font_size="12"),editor.setTheme("ace/theme/"+e.theme),editor.setFontSize(""+e.font_size+"px")}),window.layout=$("body").layout({spacing_closed:5,stateManagement__enabled:!0,north:{slidable:!1,spacing_open:14,size:18,resizable:!1,togglerLength_open:0,togglerTip_closed:chrome.i18n.getMessage("exit_full_window"),onopen_start:function(){return window.layout.open("west"),$("#navbar").show(),$("#toolbar").show(),window.editor.focus()},onclose_start:function(){return window.layout.close("west"),$("#navbar").hide(),$("#toolbar").hide(),window.editor.focus()}},west:{spacing_open:5,livePaneResizing:!0,size:128,togglerLength_open:0,togglerLength_closed:0,slideTrigger_open:"mouseover"},center:{onresize_end:function(){return editor.resize()}}}),window.add_topbar()})}).call(this);
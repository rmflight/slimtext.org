(function(){$(function(){return $("#theme_label").text(chrome.i18n.getMessage("theme")),$("#font_size_label").text(chrome.i18n.getMessage("font_size")),$("#tab_size_label").text(chrome.i18n.getMessage("tab_size")),$("#key_binding_label").text(chrome.i18n.getMessage("key_binding")),$("#save_btn").text(chrome.i18n.getMessage("save")),_.each(_.range(8,33),function(e){return $("#font_size").append($('<option value="'+e+'">'+e+"px</option>"))}),chrome.storage.sync.get(["theme","font_size","key_binding","tab_size"],function(e){return e.theme||(e.theme="monokai"),e.font_size||(e.font_size="12"),e.key_binding||(e.key_binding="ace"),e.tab_size||(e.tab_size=4),$("select#theme").val(e.theme),$("select#font_size").val(e.font_size),$("select#key_binding").val(e.key_binding),$("input#tab_size").val(e.tab_size),$("span#tab_size_value").text(e.tab_size),$("input#tab_size").change(function(){return $("span#tab_size_value").text($(this).val())}),$("button#save_btn").click(function(){var e;return e={theme:$("select#theme").val(),font_size:$("select#font_size").val(),key_binding:$("select#key_binding").val(),tab_size:$("input#tab_size").val()},chrome.storage.sync.set(e,function(){return window.notice(chrome.i18n.getMessage("saved"),"")})})})})}).call(this);
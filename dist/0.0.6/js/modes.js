(function(){var l,e,s;window.modes={abap:"ABAP",asciidoc:"AsciiDoc",c_cpp:"C/C++",clojure:"Clojure",coffee:"CoffeeScript",coldfusion:"Coldfusion",csharp:"C#",css:"CSS",curly:"Curly",dart:"Dart",diff:"Diff",django:"Django",dot:"Dot",ftl:"FreeMarker",glsl:"Glsl",golang:"Golang",groovy:"Groovy",haml:"HAML",haxe:"haXe",html:"HTML",jade:"Jade",java:"Java",javascript:"Javascript",json:"JSON",jsp:"JSP",jsx:"JSX",latex:"LaTex",less:"LESS",liquid:"Liquid",lisp:"Lisp",livescript:"LiveScript",logiql:"LogiQL",lsl:"LSL",lua:"Lua",luapage:"LuaPage",lucene:"Lucene",makefile:"Makefile",markdown:"Markdown",objectivec:"Objective-C",ocaml:"Ocaml",pascal:"Pascal",perl:"Perl",pgsql:"pgSQL",php:"PHP",powershell:"Powershell",python:"Python",r:"R",rdoc:"RDoc",rhtml:"RHTML",ruby:"Ruby",sass:"SASS",scad:"OpenSCAD",scala:"Scala",scheme:"Scheme",scss:"SCSS",sh:"SH",sql:"SQL",stylus:"Stylus",svg:"SVG",tcl:"Tcl",tex:"Tex",text:"Text",textible:"Textile",tm_snippet:"tmSnippet",toml:"toml",typescript:"Typescript",vbscript:"VBScript",xml:"XML",xquery:"XQuery",yaml:"YAML"},e={abap:"abap",asciidoc:"asciidoc",cpp:"c_cpp",h:"c_cpp",hh:"c_cpp",c:"c_cpp",hpp:"c_cpp",cc:"c_cpp",hxx:"c_cpp",cxx:"c_cpp","c++":"c_cpp",clj:"clojure",clojure:"clojure",coffee:"coffee",cf:"coffee",cfm:"coldfusion",cfml:"coldfusion",coldfusion:"coldfusion",cs:"csharp",csharp:"csharp",css:"css",curly:"curly",dart:"dart",diff:"diff",patch:"diff",dot:"dot",ftl:"ftl",freemarker:"ftl",glsl:"glsl",vert:"glsl",frag:"glsl",go:"golang",golang:"golang",groovy:"groovy",gvy:"groovy",gy:"groovy",gsh:"groovy",haml:"haml",hx:"haxe",haxe:"haxe",htm:"html",html:"html",xhtml:"html",jade:"jade",java:"java",js:"javascript",javascript:"javascript",json:"json",jsp:"jsp",jsx:"jsx",latex:"latex",tex:"latex",ltx:"latex",bib:"latex",less:"less",liquid:"liquid",lisp:"lisp",lua:"lua",luapage:"luapage",lp:"luapage",lucene:"lucene",livescript:"livescript",ls:"livescript",logiql:"logiql",lql:"logiql",logic:"logiql",lsl:"lsl",cmake:"makefile",make:"makefile",makefile:"makefile",md:"markdown",markdown:"markdown",m:"objectivec",mm:"objectivec",objectivec:"objectivec",ml:"ocaml",mli:"ocaml",ocaml:"ocaml",pascal:"pascal",p:"pascal",pas:"pascal",pl:"perl",pm:"perl",perl:"perl",pgsql:"pgsql",php:"php",phtml:"php",ps1:"powershell",ps1xml:"powershell",psc1:"powershell",psd1:"powershell",psm1:"powershell",powershell:"powershell",py:"python",python:"python",r:"r",rdoc:"rdoc",rd:"rdoc",rhtml:"rhtml",erb:"rhtml",rb:"ruby",ru:"ruby",gemspec:"ruby",rake:"ruby",ruby:"ruby",scad:"scad",scala:"scala",scm:"scheme",rkt:"scheme",scheme:"scheme",sass:"sass",scss:"scss",sh:"sh",bash:"sh",bat:"sh",sql:"sql",stylus:"stylus",styl:"stylus",svg:"svg",tcl:"tcl",tex:"tex",txt:"text",text:"text",log:"text",conf:"text",textile:"textile",tmSnippet:"tm_snippet",tm_snippet:"tm_snippet",toml:"toml",typescript:"typescript",ts:"typescript",str:"typescript",vbscript:"vbscript",vbs:"vbscript",xml:"xml",rdf:"xml",rss:"xml",wsdl:"xml",xslt:"xml",atom:"xml",mathml:"xml",mml:"xml",xul:"xml",xbl:"xml",xquery:"xquery",xq:"xquery",yaml:"yaml",yml:"yaml"},s={Cakefile:"coffee",Gemfile:"ruby",GNUmakefile:"makefile",makefile:"makefile",Makefile:"makefile",OCamlMakefile:"makefile"},l={gif:!0,png:!0,jpg:!0,jpeg:!0,ico:!0,bmp:!0,psd:!0,tiff:!0,iso:!0,zip:!0,rar:!0,tar:!0,jar:!0,"7z":!0,war:!0,gzip:!0,bz2:!0,cab:!0,uue:!0,gz:!0,bzip2:!0,dmg:!0,deb:!0,rpm:!0,tgz:!0,z:!0,mp3:!0,mp4:!0,avi:!0,mov:!0,rm:!0,rmvb:!0,asf:!0,mtv:!0,amv:!0,swf:!0,divx:!0,wmv:!0,smv:!0,"3gp":!0,mkv:!0,flv:!0,f4v:!0,webm:!0,wav:!0,pyc:!0,swp:!0,dll:!0,so:!0,woff:!0,eot:!0,ttf:!0,otf:!0,rsrc:!0,exe:!0,msi:!0,doc:!0,docx:!0,ppt:!0,xls:!0,wk4:!0,shw:!0,wb2:!0,wpd:!0,wpg:!0,pdf:!0},window.guess_mode_by_extension=function(l){var s;return s=e[l],s||(s="text"),"ace/mode/"+s},window.guess_mode_by_name=function(l){var e;return e=s[l],e||(e="text"),"ace/mode/"+e},window.is_binary=function(e){return l[e]?!0:!1}}).call(this);
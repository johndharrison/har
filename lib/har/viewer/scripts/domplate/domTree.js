require.def("domplate/domTree",["domplate/domplate","core/lib"],function(g,e){with(g){g=function(a){this.input=a};g.prototype=domplate({tag:TABLE({"class":"domTable",cellpadding:0,cellspacing:0,onclick:"$onClick"},TBODY(FOR("member","$object|memberIterator",TAG("$member|getRowTag",{member:"$member"})))),rowTag:TR({"class":"memberRow $member.open $member.type\\Row $member|hasChildren",$hasChildren:"$member|hasChildren",_repObject:"$member",level:"$member.level"},TD({"class":"memberLabelCell",style:"padding-left: $member.indent\\px"},
SPAN({"class":"memberLabel $member.type\\Label"},"$member.name")),TD({"class":"memberValueCell"},TAG("$member.tag",{object:"$member.value"}))),valueTag:SPAN({"class":"objectTitle"},"$object|getTitle"),loop:FOR("member","$members",TAG("$member|getRowTag",{member:"$member"})),hasChildren:function(a){return a.hasChildren?"hasChildren":""},memberIterator:function(a){return this.getMembers(a)},getRowTag:function(){return this.rowTag},getTitle:function(a){if(jQuery.isArray(a))return"Array";a=h(a);var b=
/\[object (.*?)\]/.exec(a);return b?b[1]:a},onClick:function(a){a=$.event.fix(a||window.event);if(e.isLeftClick(a)){var b=e.getAncestorByClass(a.target,"memberRow");e.getAncestorByClass(a.target,"memberLabel")&&e.hasClass(b,"hasChildren")&&this.toggleRow(b)}},toggleRow:function(a){var b=parseInt(a.getAttribute("level"));if(e.hasClass(a,"opened")){e.removeClass(a,"opened");for(var c=a.parentNode,d=a.nextSibling;d;d=a.nextSibling){if(parseInt(d.getAttribute("level"))<=b)break;c.removeChild(d)}}else{e.setClass(a,
"opened");if(c=a.repObject)(b=this.getMembers(c.value,b+1))&&this.loop.insertRows({members:b},a)}},getMembers:function(a,b){b||(b=0);var c=[];for(var d in a){var f=a[d];typeof f!="function"&&c.push(this.createMember("dom",d,f,b))}return c},createMember:function(a,b,c,d){var f=typeof c;f=this.hasProperties(c)&&f=="object";return{name:b,value:c,type:a,rowClass:"memberRow-"+a,open:"",level:d,indent:d*16,hasChildren:f,tag:this.valueTag}},hasProperties:function(a){for(var b in a)return true;return false},
append:function(a){a=this.tag.append({object:this.input},a);a.firstChild.firstChild&&this.toggleRow(a.firstChild.firstChild)}});var h=function(a){try{return a.toString()}catch(b){return""}};return g}});
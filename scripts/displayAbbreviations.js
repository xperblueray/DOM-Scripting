function displayAbbreviations() {
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    //取得所有缩略语
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.lenth < 1) return false;
    //遍历所有缩略语
    var defs = new Array();
    /*for( var i=0; i<abbreviations.length; i++) {
        var definition = abbreviations[i].getAttribute("title");
        var key = abbreviations[i].lastChild.nodeValue;
        defs[key] = definition;
    }
    for( var i=0; i<abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        var key = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }*/
    for ( var i=0; i<abbreviations.length; i++) {
        defs[abbreviations[i].lastChild.nodeValue] = abbreviations[i].getAttribute("title");
    }
    //创建定义列表
    var dlist = document.createElement("dl");
    //遍历定义
    for ( key in defs) {
        var definition = defs[key];
        //创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //创建定义描述
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //把他们添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    //创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviation");
    header.appendChild(header_text);
    //把标题添加到页面主体
    document.body.appendChild(header);
    //把列表添加到页面主体
    document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);

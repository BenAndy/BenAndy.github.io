// Do not steal code without direct permission from it's owner

API.on(API.chatLog("AutoPlug: Loading... "));
$("#woot").click();
$("#dj-button").click();
API.on(API.ADVANCE, autoplug);
function autoplug(){ $("#woot").click(); $("#dj-button").click(); }
API.on(API.chatLog("AutoPlug: AutoPlug activated! "));
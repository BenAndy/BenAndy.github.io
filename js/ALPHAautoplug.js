/*
Developed by Ben_Andy
http://benandy.github.io

DO NOT STEAL ANY CODE WITHOUT DIRECTLY GIVEN PERMISSIONS FROM IT'S OWNER
*/

API.on(API.chatLog("AutoPlug| Loading AutoPlug version 0.1.5 "));
// Enter Dj Wait List
$("#dj-button").click();
// Cancel leaving Dj Wait List
$("div.button.cancel").click();
// 'Woot' the current song
$("#woot").click();
// Advertise in chat
$("#chat-input-field").input("test");
API.on(API.ADVANCE, autoplug);
function autoplug(){  $("#dj-button").click(); $("div.button.cancel").click(); $("#woot").click(); $("#chat-input-field").input("test"); }
API.on(API.chatLog("AutoPlug| AutoPlug loaded! "));
API.on(API.chatLog(" "));
API.on(API.chatLog("AutoPlug| Share AutoPlug with your freinds! "));
API.on(API.chatLog("AutoPlug| http://benandy.github.io/randoms/autoplug "));

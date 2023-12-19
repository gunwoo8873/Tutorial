/*
Window 객체 = Web Page 자체를 나타냄
1. alert(msg) = Error Function Papup
2. prompt(msg, value) = Prompt Output
 */

let Output = ''

// Web UsedInfo Function
Output += 'appCodeName: ' + navigator.appCodeName + '\n'
Output += 'appName: ' + navigator.appName + '\n'
Output += 'appVersion: ' + navigator.appVersion + '\n'
Output += 'platfora: ' + navigator.platfora + '\n'
Output += 'userAgent: ' + navigator.userAgent + '\n'
alert(Output)

if (
    navigator.userActivation.toLowerCase().indexOf('iphone') >= 0
    || navigator.userActivation.toLowerCase().indexOf('ipad') >= 0
    || navigator.userActivation.toLowerCase().indexOf('ipod') >= 0
    || navigator.userActivation.toLowerCase().indexOf('android') >= 0
    ) 
    { alert('Phone Web'); }
else {alert('Desktop Web')};

// Web Prompt Input
const Input = prompt('Input Text:');
alert(Input);

// Web Next Page Delay (1000 = 1sec)
setInterval(function () {
    /* 
    1. Page Move List
    assign = method
    replace = Web BackPage (x)

    2. History
    forward = Page (->)
    bakc = Page (<-)
    */
    
    location = 'url'
}, 3000);
// ==UserScript==
// @name          Google HTTPS
// @namespace     http://lepture.com/project/js-google
// @description   Always use https on google. Fix search results links.
// @include       http://www.google.com/*
// @include       http://code.google.com/*
// @include       http://reader.google.com/*
// @include       http://maps.google.com/*
// @include       http://www.google.com.hk/*
// @include       https://www.google.com/*
// ==/UserScript==
//
// @author        lepture
//

if (location.host == 'www.google.com.hk') {
    location.assign('https://www.google.com/ncr');
    return;
}
if (location.protocol == 'http:') {
    location.assign(location.toString().replace('http://','https://'));
    return;
}

if (location.host != 'www.google.com') return;

function repl() {
    window.onhashchange = function() {
        var ires = document.getElementById('ires');
        var h3s = ires.getElementsByTagName('h3');
        for(i=0; i<h3s.length; i++) {
            var a = h3s[i].getElementsByTagName('a')[0];
            a.onmousedown = function(){};
            a.onclick = function(){};
        }
    }
}

setTimeout(repl, 300);

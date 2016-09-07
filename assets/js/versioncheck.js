const VERSION_CHECK_SUPPORTED="Your iOS version is supported 😄";const VERSION_CHECK_NEEDS_UPGRADE="This package requires an upgrade to at least iOS %s.";const VERSION_CHECK_UNCONFIRMED="This package is not yet confirmed to work on iOS %s.";const VERSION_CHECK_NO_LONGER_SUPPORTED="This package is only compatible with iOS %s to %s, and is no longer supported.";(function(document){"use strict";function parseVersionString(version){var bits=version.split(".");return[bits[0],bits[1]?bits[1]:0,bits[2]?bits[2]:0];}

var prerequisite=document.querySelector(".prerequisite"),version=navigator.appVersion.match(/CPU( iPhone)? OS (\d+)_(\d+)(_(\d+))? like/i);if(!prerequisite||!version){return;}
var osVersion=[version[2],version[3],version[4]?version[4]:0],osString=osVersion[0]+"."+osVersion[1]+(osVersion[2]&&osVersion[2]!=0?"."+osVersion[2]:""),minString=prerequisite.dataset.minIos,maxString=prerequisite.dataset.maxIos,testString=prerequisite.dataset.maxTestedIos,minVersion=parseVersionString(minString),maxVersion=maxString?parseVersionString(maxString):null,testVersion=testString?parseVersionString(testString):null,message=VERSION_CHECK_SUPPORTED,isBad=false;if(minVersion[0]>osVersion[0]||minVersion[1]>osVersion[1]||minVersion[2]>osVersion[2]){message=VERSION_CHECK_NEEDS_UPGRADE.replace("%s",minString);isBad=true;}else if(maxVersion&&(osVersion[0]>maxVersion[0]||osVersion[1]>maxVersion[1])){if(prerequisite.dataset.unsupported){message=VERSION_CHECK_NO_LONGER_SUPPORTED.replace("%s",minString).replace("%s",maxString);}else{message=VERSION_CHECK_UNCONFIRMED.replace("%s",osString);}
isBad=true;}

prerequisite.querySelector("p").textContent = message;
if(isBad) {
  prerequisite.classList.add("info");
} else {
  prerequisite.querySelector("ul").style.backgroundColor = "#E8FFEE";
}

})(document);
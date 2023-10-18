var preloadedScript = document.createElement("script");
preloadedScript.src = "/wp-includes/js/jquery/jquery.js";
preloadedScript.src = "/wp-includes/js/jquery/jquery-migrate.min.js";
preloadedScript.src = "/wp-content/plugins/svg-support/js/svgs-inline.js";
preloadedScript.src = "/wp-content/themes/bdotcom/assets/js/bdotcom.js";
preloadedScript.src = "/wp-content/themes/bdotcom/assets/js/blazy.min.js";
preloadedScript.src = "/wp-content/themes/bdotcom/assets/js/bootstrap.min.js";
//preloadedScript.src = "/wp-content/themes/bdotcom/assets/js/popover.js";
preloadedScript.as = "script";
document.body.appendChild(preloadedScript);


var preloadLink = document.createElement("link");
preloadLink.href = "/wp-content/themes/bdotcom/assets/fonts/biasa/hinted-Colfax-Regular.woff2";
preloadLink.href = "/wp-content/themes/bdotcom/assets/fonts/biasa/hinted-Colfax-Light.woff2";
preloadLink.href = "/wp-content/themes/bdotcom/assets/fonts/biasa/hinted-Colfax-Bold.woff2";
preloadLink.href = "/wp-content/themes/bdotcom/assets/fonts/biasa/hinted-Colfax-Medium.woff2";
preloadLink.href = "/wp-content/themes/bdotcom/assets/fonts/blog/8d78c54a61a51929208d1e6a1e45c340.woff2";
preloadLink.href = "/wp-content/themes/bdotcom/assets/fonts/blog/ebd781fe9f3cc10ad51679060d8ccbb4.woff2";
preloadLink.rel = "preload";
preloadLink.as = "font";
crossorigin="anonymous";
document.head.appendChild(preloadLink);

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {
  createCookie(name,"",-1);
}
//lazyload
;(function() {
    // Initialize
	var bLazy = new Blazy();
	selector: 'img' // all images
})();


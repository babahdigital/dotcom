//Cookies jQuery
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof exports==='object'){factory(require('jquery'))}else{factory(jQuery)}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s)}
function decode(s){return config.raw?s:decodeURIComponent(s)}
function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value))}
function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\')}
try{s=decodeURIComponent(s.replace(pluses,' '));return config.json?JSON.parse(s):s}catch(e){}}
function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value}
var config=$.cookie=function(key,value,options){if(value!==undefined&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setTime(+t+days*864e+5)}
return(document.cookie=[encode(key),'=',stringifyCookieValue(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''))}
var result=key?undefined:{};var cookies=document.cookie?document.cookie.split('; '):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=parts.join('=');if(key&&key===name){result=read(cookie,value);break}
if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie}}
return result};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined){return!1}
$.cookie(key,'',$.extend({},options,{expires:-1}));return!$.cookie(key)}}))

//Script Refresh Quiz /wp-content/plugins/contact-form-7/includes/js/scripts.js Line 443
//Tambahkan Script Ini $form.find( ':input[name="' + i + '"]' ).attr( 'placeholder',n[0] );
document.addEventListener( 'wpcf7invalid', function( event ) {
    wpcf7.refill(jQuery('.wpcf7-form'));
}, false );
//Menu Select
jQuery(document).ready(function() {
	jQuery('#layanan, #order-sub, #kelamin').SumoSelect();
	jQuery('.SumoSelect').css('width', '100%');
	var hash=window.location.hash;
        if(hash == '#Konsultasi') {
            jQuery('select.layanan')[0].sumo.selectItem(3);
            jQuery('#layanan').change();
        }
        if(hash == '#CallMe') {
            jQuery('select.layanan')[0].sumo.selectItem(1);
            jQuery('#layanan').change();
        }
		if(hash == '#Kontak') {
            jQuery('select.layanan')[0].sumo.selectItem(2);
            jQuery('#layanan').change();
        }
        if(hash == '#VC') {
            jQuery('select.layanan')[0].sumo.selectItem(4);
            jQuery('#layanan').change();
        }
        if(hash == '#ITMS') {
            jQuery('select.layanan')[0].sumo.selectItem(5);
            jQuery('#layanan').change();
        }
		if(hash == '#Order') {
            jQuery('select.layanan')[0].sumo.selectItem(6);
            jQuery('#layanan').change();
        }
		if(hash == '#Website') {
			jQuery('select.layanan')[0].sumo.selectItem(6);
			jQuery('#layanan').change();
            jQuery('select.order-sub')[0].sumo.selectItem(2);
            jQuery('#order-sub').change();
        }
		if(hash == '#CCTV') {
			jQuery('select.layanan')[0].sumo.selectItem(6);
			jQuery('#layanan').change();
            jQuery('select.order-sub')[0].sumo.selectItem(8);
            jQuery('#order-sub').change();
        }
		if(hash == '#Fiber') {
			jQuery('select.layanan')[0].sumo.selectItem(6);
			jQuery('#layanan').change();
            jQuery('select.order-sub')[0].sumo.selectItem(6);
            jQuery('#order-sub').change();
        }
		if(hash == '#Dedicated') {
			jQuery('select.layanan')[0].sumo.selectItem(6);
			jQuery('#layanan').change();
            jQuery('select.order-sub')[0].sumo.selectItem(5);
            jQuery('#order-sub').change();
        }
		if(hash == '#VPS') {
			jQuery('select.layanan')[0].sumo.selectItem(6);
			jQuery('#layanan').change();
            jQuery('select.order-sub')[0].sumo.selectItem(3);
            jQuery('#order-sub').change();
        }
		if(hash == '#SEO') {
			jQuery('select.layanan')[0].sumo.selectItem(6);
			jQuery('#layanan').change();
            jQuery('select.order-sub')[0].sumo.selectItem(9);
            jQuery('#order-sub').change();
        }
		if(hash == '#Apps') {
			jQuery('select.layanan')[0].sumo.selectItem(6);
			jQuery('#layanan').change();
            jQuery('select.order-sub')[0].sumo.selectItem(1);
            jQuery('#order-sub').change();
        }
		if(hash == '#Web') {
			jQuery('select.layanan')[0].sumo.selectItem(6);
			jQuery('#layanan').change();
            jQuery('select.order-sub')[0].sumo.selectItem(2);
            jQuery('#order-sub').change();
        }
});


jQuery(document).ready( function($) {
 
    // Disable scroll when focused on a number input.
    $('form').on('focus', 'input[type=number]', function(e) {
        $(this).on('wheel', function(e) {
            e.preventDefault();
        });
    });
 
    // Restore scroll on number inputs.
    $('form').on('blur', 'input[type=number]', function(e) {
        $(this).off('wheel');
    });
 
    // Disable up and down keys.
    $('form').on('keydown', 'input[type=number]', function(e) {
        if ( e.which == 38 || e.which == 40 )
            e.preventDefault();
    });  
      
});
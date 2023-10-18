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

jQuery('img').attr('src',jQuery(this).attr('data-src'));
(function ( $ ) {
	$(document).ready(function(e) {
		var t = !0;
		e(".js-open-nav").click(function(t) {
			t.preventDefault();
			var o = e(".bd-header");
			e(o).toggleClass("is-open"), e("body").toggleClass("nav-open")
		}), e(".js-nav-toggler").click(function(o) {
			o.preventDefault();
			var s = e(".js-nav-toggler"),
			n = e(".bd-dropdown"),
			i = e(this),
			r = e(this).parents(".bd-header__nav-list__item").find(".bd-dropdown");
			e(i).hasClass("is-active") ? (e(this).removeClass("is-active"), e(r).removeClass("is-open"), t = !0) : (e(s).removeClass("is-active"), e(i).addClass("is-active"), e(n).removeClass("is-open"), e(r).addClass("is-open"), t = !1)
		}), e("body").on("click", function() {
			t && (e(".js-nav-toggler").removeClass("is-active"), e(".bd-dropdown").removeClass("is-open")), t = !0
		}), e(".bd-dropdown").on("click", function(e) {
			e.stopPropagation()
		})
	});
}( jQuery ));

jQuery(function($) {
    $(".bd-text-wrapper > span:nth-of-type(1)").addClass('show');
    setInterval(function() {
        var $current = $(".bd-text-wrapper > span").filter('.show');
        var $next = $current.next();
        $(".bd-text-wrapper > span").removeClass('show');
        if ($next.length > 0) {
            $next.addClass('show');;
        } else {
            $(".bd-text-wrapper > span:nth-of-type(1)").addClass('show');
        }
    }, 5850);

})

jQuery(document).ready(function() {
  if (!readCookie('hide')) {
    jQuery('#messagebox').show();
  }
  jQuery('#bd-btnclose').click(function() {
    jQuery('#messagebox').hide();
    createCookie('hide', true, 1)
    return false;
  });
});

jQuery(function(){
	jQuery('#cari, #cari-lagi').click(function () {
	jQuery('#qnimate').addClass('popup-box-on');
	jQuery('html').css('overflow', 'hidden');
	jQuery('html').css('position', 'fixed');
});
jQuery('#removeClass').click(function () {
	jQuery('#qnimate').removeClass('popup-box-on');
	jQuery('html').removeAttr( 'style' );
	}); 
})
  
jQuery(document).ready(myfunction);
jQuery(window).on('resize',myfunction);
function myfunction() {
    if( jQuery( window ).width() <= 900 ){
		jQuery( ".bd-sec-header-main" ).removeClass( "b-lazy b-loaded" );
		jQuery( ".bdpage-text" ).removeClass( "bdpage-text-ganal" );
		jQuery( ".bdkolom-standart" ).removeClass( "bdkonten-main-page-tengah" );
		jQuery( ".bd-sec-header-main" ).removeAttr( 'data-src' );
		jQuery( ".bd-sec-header-main" ).removeAttr( 'style' );
    }
}

jQuery(document).ready(subklienheader);
jQuery(window).on('resize',subklienheader);
function subklienheader() {
    if( jQuery( window ).width() <= 990 ){
		jQuery("div").remove(".sub-klien-gambar");
    }
}

;(function(jQuery){
  
  /**
   * jQuery function to prevent default anchor event and take the href * and the title to make a share popup
   *
   * @param  {[object]} e           [Mouse event]
   * @param  {[integer]} intWidth   [Popup width defalut 500]
   * @param  {[integer]} intHeight  [Popup height defalut 400]
   * @param  {[boolean]} blnResize  [Is popup resizeabel default true]
   */
  jQuery.fn.customerPopup = function (e, intWidth, intHeight, blnResize) {
    
    // Prevent default anchor event
    e.preventDefault();
    
    // Set values for window
    intWidth = intWidth || '600';
    intHeight = intHeight || '300';
    strResize = (blnResize ? 'yes' : 'no');

    // Set title and open popup with focus on it
    var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
        strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,            
        objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
  }
  
	/* ================================================ */
  
	jQuery(document).ready(function (jQuery) {
		jQuery('.bagi').on("click", function(e) {
		  jQuery(this).customerPopup(e);
		});
		
		var elm_class = '.bdfloating-shared-icon'; // Adjust this accordingly. 

		//Check to see if the window is top if not then display button
		jQuery(window).scroll(function(){
			if (jQuery(this).scrollTop() >= 550) { // 300px from top
				jQuery(elm_class).show();
			} else {
				jQuery(elm_class).hide();
			}		

		});

	});

	jQuery(window).scroll(function() {
		var fixedBottom = jQuery(".bdfloating-shared-icon");
		if (jQuery("article").height() <= (jQuery(window).height() + jQuery(window).scrollTop()-1240)) {
			fixedBottom.css("opacity", 0 );
		} else {
			fixedBottom.css("opacity", .4 );
		}
	});
    
}(jQuery));

//Footer Subcribe Cookies, Kalo Di Tutup Gak Muncul Lagi
(function ( $ ) {
	$(document).on('click','.close_subs_sec', function(){
		$(this).closest('.footer-section').remove();
		$.cookie("is_subscriber", 1);
		
	});

	$(document).on('submit', '.footer_bbbb form', function(){
		var CurrentForm = $(this);
		var ActionURL   = $(this).attr('action');
		var FormData    = $(this).find(':input').serializeArray();

		$.ajax({
			dataType: 'json',
			type: 'POST',
			data: FormData,
			url: ActionURL,
			beforeSend: function(){},

			success: function(Response){
				var MsgSuccess = ( Response.success );
				var Msghtml = ( Response.html );
				var MsgError = ( Response.MsgError );

				if (MsgSuccess) {
					CurrentForm.css('display', 'none');
					$('.SuccessMessage').css('display', 'block');
					// alert(Msghtml);
					$.cookie("is_subscriber", 1);

					CurrentForm.trigger('reset');
				};

				if (MsgError) {
					alert(MsgError);
				};
			}
		});
		return false;
	});

}( jQuery ));
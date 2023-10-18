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
		jQuery( ".bd-class-main-header" ).removeClass( "b-lazy b-loaded" );
		jQuery( ".bd-class-main-header" ).removeAttr( 'style' );
		jQuery( ".bd-class-main-header" ).removeAttr( 'data-src' );
    } else {
  		jQuery( ".bd-class-main-header" ).addClass( "b-lazy b-loaded" ); 
		jQuery( ".bdsolusi" ).css( 'background-image', "url('/wp-content/uploads/2019/02/solusi1.png')");
		jQuery( ".bdjaringan" ).css( 'background-image', "url('/wp-content/uploads/2019/02/jaringan-header.png')");
		jQuery( ".bdserver" ).css( 'background-image', "url('/wp-content/uploads/2019/03/server.png')");
		jQuery( ".bdmultimedia" ).css( 'background-image', "url('/wp-content/uploads/2019/03/multimedia3.png')");
    }
}
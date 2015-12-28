function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* cookie.JS
 ========================================================*/
// include('js/jquery.cookie.js');

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');


/* Stick up menus
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/tmstickup.js');

        $(document).ready(function () {
            $('#stuck_container').TMStickUp({})
        });
    }
})(jQuery);

/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({easingType: 'easeOutQuart'});
        });
    }
})(jQuery);

/* EqualHeights
 ========================================================*/
;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);

/* SMOOTH SCROLLIG
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.mousewheel.min.js');
        include('js/jquery.simplr.smoothscroll.min.js');

        $(document).ready(function () {
            $.srSmoothscroll({
                step: 150,
                speed: 800
            });
        });
    }
})(jQuery);

/* Copyright Year
 ========================================================*/
;
(function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);


/* Superfish menus
 ========================================================*/
// include('superfish.js');
// jQuery(function () {
// 	jQuery('.sf-menu').mobileMenu();
// })

;
(function ($) {
    function include(url) {
	document.write('<script src="js/' + url + '"></script>');
	return false;
}
	include('superfish.js');
	jQuery(function () {
	// jQuery('.sf-menu').mobileMenu();
})
	// include('jquery.mobilemenu.js');
})(jQuery);

/* Mobilemenu
========================================================*/


/* Navbar
 ========================================================*/
;
(function ($) {
    include('js/jquery.rd-navbar.js');
})(jQuery);


/* Google Map
 ========================================================*/
// ;
// (function ($) {
//     var o = document.getElementById("google-map");
//     if (o) {
//         include('//maps.google.com/maps/api/js?sensor=false');
//         include('js/jquery.rd-google-map.js');

//         $(document).ready(function () {
//             var o = $('#google-map');
//             if (o.length > 0) {
//                 o.googleMap();
//             }
//         });
//     }
// })
// (jQuery);

/* Owl Carousel
========================================================*/
// ;(function ($) {
//     var o = $('.owl-carousel');
//     if (o.length > 0) {
//         include('js/owl.carousel.min.js');
//         $(document).ready(function () {
//             o.owlCarousel({
//                 margin: 30,
//                 smartSpeed: 450,
//                 loop: true,
//                 dots: false,
//                 dotsEach: 1,
//                 nav: true,
//                 navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
//                 responsive: {
//                     0: { items: 1 },
//                     768: { items: 1},
//                     980: { items: 1}
//                 }
//             });
//         });
//     }
// })(jQuery);


/* WOW
 ========================================================*/
;
(function ($) {
    var o = $('html');

    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {
            include('js/wow.js');

            $(document).ready(function () {
                new WOW().init();
            });
        }
    }
})(jQuery);

// Contact form commented out for development. Uncomment for originonal theme code.
/* Mailform
 =============================================*/
;
// (function ($) {
//     include('js/mailform/jquery.form.min.js');
//     include('js/mailform/jquery.rd-mailform.js');
// })(jQuery);


/* Orientation tablet fix
 ========================================================*/
$(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');

/* Camera
========================================================*/
// ;(function ($) {
// var o = $('#camera');
//     if (o.length > 0) {
//         if (!(isIE() && (isIE() > 9))) {
//             include('js/jquery.mobile.customized.min.js');
//         }

//         include('js/camera.js');

//         $(document).ready(function () {
//             o.camera({
//                 autoAdvance: false,
//                 height: '29.75609756097561%',
//                 minHeight: '350px',
//                 pagination: true,
//                 thumbnails: false,
//                 playPause: false,
//                 hover: false,
//                 loader: 'none',
//                 navigation: false,
//                 navigationHover: false,
//                 mobileNavHover: false,
//                 fx: 'simpleFade'
//             })
//         });
//     }
// })(jQuery);

/* Search.js
 ========================================================*/
// ;
// (function ($) {
//     var o = $('.search-form');
//     if (o.length > 0) {
//         include('js/TMSearch.js');
//     }
// })(jQuery);

/* Booking Form
 ========================================================*/
;
(function ($) {
    var o = $('#bookingForm');
    if (o.length > 0) {
        include('js/booking/booking.js');
        include('js/booking/jquery-ui-1.10.3.custom.min.js');
        include('js/booking/jquery.fancyform.js');
        include('js/booking/jquery.placeholder.js');
        include('js/booking/regula.js');
        $(document).ready(function () {
            o.bookingForm({
                ownerEmail: '#'
            });
        });
    }
})(jQuery);

/* Subscribe Form
 ========================================================*/
// ;
// (function ($) {
//     var o = $('#subscribe-form');
//     if (o.length > 0) {
//         include('js/sForm.js');
//     }
// })(jQuery);








/* FancyBox
========================================================*/
;(function ($) {
    var o = $('.thumb');
    if (o.length > 0) {
        include('js/jquery.fancybox.js');
        include('js/jquery.fancybox-media.js');
        include('js/jquery.fancybox-buttons.js');
        $(document).ready(function () {
            o.fancybox();
        });
    }
})(jQuery);

/* Parallax
=============================================*/
// ;(function ($) {
//     include('js/jquery.rd-parallax.js');
// })(jQuery);




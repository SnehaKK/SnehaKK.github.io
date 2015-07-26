/*
 * Portfolio Script
 *
 */
'use strict';

var appMaster = {

    preLoader: function(){
        var imageSources = [];
        $('img').each(function() {
            var sources = $(this).attr('src');
            imageSources.push(sources);
        });
        if($(imageSources).load()){
            $('.pre-loader').fadeOut('slow');
        }
    },

    navSpy: function(){
        /* affix the navbar after scroll below header */
        $('#nav.navbar-static-top').affix({
            offset: {
                top: $(window).height()
            }
        });

        /* highlight the top nav as scrolling occurs */
        $('body').scrollspy({
            target: '#nav'
        });
    },

    smoothScroll: function() {
        // Smooth Scrolling
        $('a[href*=#]:not([href=#carousel-example-generic], [href=#testimonials-carousel])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    },

    scollToTop: function(){
        /* smooth scrolling for scroll to top */
        $('.scroll-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
        });
    },

    revSlider: function(){

        var docHeight = $(window).height();
        
        var revapi;
        revapi = jQuery('.tp-banner').revolution(
        {
            delay: 7000,
            startwidth: 1170,
            startheight: docHeight,
            hideThumbs: 10,
            fullWidth: "off",
            fullScreen: "on",
            onHoverStop: "off",
            touchenabled:false,
            fullScreenOffsetContainer: "",
            navigationHAlign: "right",
            navigationVAlign:"bottom",
            navigationHOffset: 80,
            navigationStyle:"square",
            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"bottom",
            soloArrowRightHalign:"left",
            soloArrowRightValign:"bottom",
            soloArrowLeftVOffset:55,
            soloArrowRightVOffset:10,
            dottedOverlay: 'none'
        });
    },

    stellar: function(){
        $(window).stellar();
    },

    skillsChart: function(){
        $('.chart').easyPieChart({
            animate: 2000,
            size: 180,
            lineWidth:10,
            barColor: "#22a3df"
        });
    },

    maps: function(){
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);
        google.maps.event.addDomListener(window, 'resize', init);

        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                zoom: 9,
                draggable: true,
                zoomControl: true, 
                scrollwheel:false,
                streetViewControl:false,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng( 37.3357192 , -121.8867076), // 40.869108,-73.892609 New York

                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                // styles: [
                //     {
                //         "featureType": "landscape",
                //         "stylers": [
                //             {
                //                 "saturation": -100
                //             },
                //             {
                //                 "lightness": 65
                //             },
                //             {
                //                 "visibility": "on"
                //             }
                //         ]
                //     },
                //     {
                //         "featureType": "poi",
                //         "stylers": [
                //             {
                //                 "saturation": -100
                //             },
                //             {
                //                 "lightness": 51
                //             },
                //             {
                //                 "visibility": "simplified"
                //             }
                //         ]
                //     },
                //     {
                //         "featureType": "road.highway",
                //         "stylers": [
                //             {
                //                 "saturation": -100
                //             },
                //             {
                //                 "visibility": "simplified"
                //             }
                //         ]
                //     },
                //     {
                //         "featureType": "road.arterial",
                //         "stylers": [
                //             {
                //                 "saturation": -100
                //             },
                //             {
                //                 "lightness": 30
                //             },
                //             {
                //                 "visibility": "on"
                //             }
                //         ]
                //     },
                //     {
                //         "featureType": "road.local",
                //         "stylers": [
                //             {
                //                 "saturation": -100
                //             },
                //             {
                //                 "lightness": 40
                //             },
                //             {
                //                 "visibility": "on"
                //             }
                //         ]
                //     },
                //     {
                //         "featureType": "transit",
                //         "stylers": [
                //             {
                //                 "saturation": -100
                //             },
                //             {
                //                 "visibility": "simplified"
                //             }
                //         ]
                //     },
                //     {
                //         "featureType": "administrative.province",
                //         "stylers": [
                //             {
                //                 "visibility": "off"
                //             }
                //         ]
                //     },
                //     {
                //         "featureType": "water",
                //         "elementType": "labels",
                //         "stylers": [
                //             {
                //                 "visibility": "on"
                //             },
                //             {
                //                 "lightness": -25
                //             },
                //             {
                //                 "saturation": -100
                //             }
                //         ]
                //     },
                //     {
                //         "featureType": "water",
                //         "elementType": "geometry",
                //         "stylers": [
                //             {
                //                 "hue": "#ffff00"
                //             },
                //             {
                //                 "lightness": -25
                //             },
                //             {
                //                 "saturation": -97
                //             }
                //         ]
                //     }
                // ]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using out element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);
            var myLatlng = new google.maps.LatLng(37.3357192 , -121.8867076);
            var image = {
                url: 'img/map_pin.png',
                // This marker is 20 pixels wide by 32 pixels tall.
                size: new google.maps.Size(27, 42),
                // The origin for this image is 0,0.
                origin: new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at 0,32.
                anchor: new google.maps.Point(0, 32)
            };

            var marker = new google.maps.Marker({
                position: myLatlng,
                icon: image,
                map: map,
                title: 'Sneha Kulkarni'
            });

        }
    },

    isoTop: function(){
        var $container = $('#container');
        // init
        $container.isotope({
            // options
            itemSelector: '.item'
        });

        $('#filters').on('click', 'button', function() {
            $('#filters button').removeClass("current");
            $(this).addClass("current");
            var filterValue = $(this).attr('data-filter');
            $container.isotope({
                filter: filterValue
            });
        });
    },

    animateScript: function() {
        $('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'100%'});
       $('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'100%'});
       $('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'100%'});
       $('.scrollpoint.sp-effect4').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeIn');},{offset:'100%'});
       $('.scrollpoint.sp-effect5').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInUp');},{offset:'100%'});
       $('.scrollpoint.sp-effect6').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated bounceIn');},{offset:'100%'});
    },

    canvasHack: function(){
        // so non-IE won't freak out in canvasInit
        var G_vmlCanvasManager; 

        function canvasInit() {
            var cv = document.createElement('canvas');
            if (G_vmlCanvasManager != undefined) { // ie IE
                G_vmlCanvasManager.initElement(cv);
            }

            if (cv.getContext) {
                var ctx = cv.getContext('2d');
            }
        }
    }

};



$(document).ready(function() {

    appMaster.scollToTop();
    // appMaster.ThemeSwitcher();


/*============================================
    Project thumbs - Masonry
    ==============================================*/
    $(window).load(function(){

        $('#projects-container').css({visibility:'visible'});

        $('#projects-container').masonry({
            itemSelector: '.project-item:not(.filtered)',
            columnWidth:350,
            isFitWidth: true,
            isResizable: true,
            isAnimated: !Modernizr.csstransitions,
            gutterWidth: 0
        });

        scrollSpyRefresh();
        waypointsRefresh();
    });

    /*============================================
    Filter Projects
    ==============================================*/
    $('#filter-works a').click(function(e){
        e.preventDefault();

        $('#filter-works li').removeClass('active');
        $(this).parent('li').addClass('active');

        var category = $(this).attr('data-filter');

        $('.project-item').each(function(){
            if($(this).is(category)){
                $(this).removeClass('filtered');
            }
            else{
                $(this).addClass('filtered');
            }

            $('#projects-container').masonry('reload');
        });

        scrollSpyRefresh();
        waypointsRefresh();
    });

    /*============================================
    Project Preview
    ==============================================*/
    $('.project-item').click(function(e){
        e.preventDefault();

        var elem = $(this),
            title = elem.find('.project-title').text(),
            link = elem.attr('href'),
            descr = elem.find('.project-description').html(),
            slidesHtml = '<ul class="slides">',

            slides = elem.data('images').split(',');

        for (var i = 0; i < slides.length; ++i) {
            slidesHtml = slidesHtml + '<li><img src='+slides[i]+' alt=""></li>';
        }
        
        slidesHtml = slidesHtml + '</ul>';
        

        $('#project-modal').on('show.bs.modal', function () {
            $(this).find('h1').text(title);
            $(this).find('.btn').attr('href',link);
            $(this).find('.project-descr').html(descr);
            $(this).find('.image-wrapper').addClass('flexslider').html(slidesHtml);
            
            setTimeout(function(){
                $('.image-wrapper.flexslider').flexslider({
                    slideshowSpeed: 3000,
                    animation: 'slide',
                    controlNav: false,
                    start: function(){
                        $('#project-modal .image-wrapper')
                        .addClass('done')
                        .prev('.loader').fadeOut();
                    }
                });
            },1000);
        }).modal();  
    });

    $('#project-modal').on('hidden.bs.modal', function () {
        $(this).find('.loader').show();
        $(this).find('.image-wrapper')
            .removeClass('flexslider')
            .removeClass('done')
            .html('')
            .flexslider('destroy');
    });

    /*============================================
    Scrolling Animations
    ==============================================*/
    $('.scrollimation').waypoint(function(){
        $(this).toggleClass('in');
    },{offset:'90%'});

    /*============================================
    Refresh scrollSpy function
    ==============================================*/
    function scrollSpyRefresh(){
        setTimeout(function(){
            $('body').scrollspy('refresh');
        },1000);
    }

    /*============================================
    Refresh waypoints function
    ==============================================*/
    function waypointsRefresh(){
        setTimeout(function(){
            $.waypoints('refresh');
        },1000);
    }
/*============================================
    Resize Functions
    ==============================================*/
    $(window).resize(function(){
        $('.jumbotron').height($(window).height());
        $('.message-box').css({'marginTop':$(window).height()*0.4});
        scrollSpyRefresh();
        waypointsRefresh();
    });
    
});
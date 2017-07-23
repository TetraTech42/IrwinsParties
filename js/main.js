$(document).ready(function() {


	// Scroll Events
	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		// Activate menu
		if (wScroll > 20) {
			$('#main-nav').addClass('active');
			$('#slide_out_menu').addClass('scrolled');
		}
		else {
			$('#main-nav').removeClass('active');
			$('#slide_out_menu').removeClass('scrolled');
		};


		//Scroll Effects

	});


	// Navigation
	$('#navigation').on('click', function(e){
		e.preventDefault();
		$(this).addClass('open');
		$('#slide_out_menu').toggleClass('open');

		if ($('#slide_out_menu').hasClass('open')) {
			$('.menu-close').on('click', function(e){
				e.preventDefault();
				$('#slide_out_menu').removeClass('open');
			})
		}
	});


	// Products Toggle
	$('.switch-toggles').find('.first').addClass('active');

	$('.content').hide();

	//Inflatables
	$('.moon-bounces').show();

	$('.switch-toggles').find('.moon-bounces-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.moon-bounces').show();
	});
	$('.switch-toggles').find('.dry-slides-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.dry-slides').show();
	});
	$('.switch-toggles').find('.water-slides-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.water-slides').show();
	});
	$('.switch-toggles').find('.water-fun-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.water-fun').show();
	});
	$('.switch-toggles').find('.combo-bounces-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.combo-bounces').show();
	});
	$('.switch-toggles').find('.obstacles-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.obstacles').show();
	});
	$('.switch-toggles').find('.sports-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.sports').show();
	});
	$('.switch-toggles').find('.everything-else-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.everything-else').show();
	});

	//Games
	$('.classic-games').show();

	$('.switch-toggles').find('.classic-games-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.classic-games').show();
	});
	$('.switch-toggles').find('.interactive-fun-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.interactive-fun').show();
	});
	$('.switch-toggles').find('.casino-fun-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.casino-fun').show();
	});
	$('.switch-toggles').find('.virtual-entertainment-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.virtual-entertainment').show();
	});
	
	//Fun Foods And Arts & Crafts
	$('.fun-foods').show();

	$('.switch-toggles').find('.fun-foods-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.fun-foods').show();
	});
	$('.switch-toggles').find('.arts-crafts-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.arts-crafts').show();
	});

	//Packages
	$('.package-a').show();

	$('.switch-toggles').find('.package-a-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.package-a').show();
	});
	$('.switch-toggles').find('.package-b-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.package-b').show();
	});
	$('.switch-toggles').find('.package-c-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.package-c').show();
	});
	$('.switch-toggles').find('.package-d-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.package-d').show();
	});
	$('.switch-toggles').find('.package-d1-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.package-d1').show();
	});
	$('.switch-toggles').find('.package-e-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.package-e').show();
	});
	$('.switch-toggles').find('.package-f-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.package-f').show();
	});
	$('.switch-toggles').find('.package-g-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.package-g').show();
	});
	$('.switch-toggles').find('.package-h-button').on('click', function(){
		$('.category').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();
		$('.package-h').show();
	});
	// Wow Animations
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();


    // Menu For Xs Mobile Screens
    if ($(window).height() < 450) {
    	$('#slide_out_menu').addClass('xs-screen');
    }

    $(window).on('resize', function(){
	    if ($(window).height() < 450) {
	    	$('#slide_out_menu').addClass('xs-screen');
	    } else{
	    	$('#slide_out_menu').removeClass('xs-screen');
	    }
    });


    // Magnific Popup
    $(".lightbox").magnificPopup();

	//dropdown 
	$('ul.nav li.dropdown').hover(
      function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
      }, 
      function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
      }
    );

});

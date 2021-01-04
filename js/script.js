
// Scrolll  

   $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });

//END of Scrollll // 

 //  SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

//End of Social Panel //

//Validate Form//

// const form = document.getElementId('form');
// const username = document.getElementId('username');
// const email = document.getElementId('email');
// const message = document.getElementId('message');

// form.addEventListener('submit' , e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });

// function checkInputs(); {
// 	// trim to remove the whitespaces
// 	const usernameValue = username.value.trim();
// 	const emailValue = email.value.trim();
// 	const messageValue = password.value.trim();
	
// 	if (usernameValue === '') {
// 		setErrorFor(username, 'Username Cannot be Blank');
// 	} else {
// 		setSucessFor(username);
// 	}

// 	if(emailValue === '') {
// 		setErrorFor(email, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);
// 	}

// 	if (messageValue === '') {
// 		setErrorFor(message, 'Please Type Some Message')
// 	} else {
// 		setSuccessFor(message);
// 	}
// }

// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }
	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }
  

  

// (function($){
// 	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
// 	  if (!$(this).next().hasClass('show')) {
// 		$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
// 	  }
// 	  var $subMenu = $(this).next(".dropdown-menu");
// 	  $subMenu.toggleClass('show');

// 	  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
// 		$('.dropdown-submenu .show').removeClass("show");
// 	  });

// 	  return false;
// 	});
// })(jQuery)


//NAVBAR COLOR ON SCROLL
//    $(function () {
//   $(document).scroll(function () {
// 	  var $nav = $(".fixed-top");
// 	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
// 	});
// });


// ///
// (function($) {
//   "use strict";

//   var nav = $('nav');
//   var navHeight = nav.outerHeight();

//   $('.navbar-toggler').on('click', function() {
//     if (!$('#main_navbar').hasClass('navbar-reduce')) {
//       $('#main_navbar').addClass('navbar-reduce');
//     }
//   })
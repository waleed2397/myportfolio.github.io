// // Add active class to the current button (highlight it)
// var header = document.getElementById("head-btn");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   if (current.length > 0) { 
//     current[0].className = current[0].className.replace(" active", "");
//   }
//   this.className += " active";
//   });
// }

//ACTIVE NAVBAR

$( '.navbar .navbar-nav a' ).on( 'click', function () {
  $( '.navbar .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
  $( this ).parent( 'li' ).addClass( 'active' );
});

// End

//COUNTER
  // Fact Counter
  function factCounter() {
    if($('.fact-counter').length){
      $('.fact-counter .column.animated').each(function() {
    
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);
          
        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text()
          }).animate({
            countNum: n
          }, {
            duration: r,
            easing: "linear",
            step: function() {
              $t.find(".count-text").text(Math.floor(this.countNum));
            },
            complete: function() {
              $t.find(".count-text").text(this.countNum);
            }
          });
        }
        
      });
    }
  }
  
  function priceFilter () {
  if($('.range-slider-price').length){

    var priceRange = document.getElementById('range-slider-price');

    noUiSlider.create(priceRange, {
      start: [ 12, 30 ],
      limit: 60,
      behaviour: 'drag',
      connect: true,
      range: {
        'min': 12,
        'max': 60
      }
    });

    var limitFieldMin = document.getElementById('min-value-rangeslider');
    var limitFieldMax = document.getElementById('max-value-rangeslider');
    
    priceRange.noUiSlider.on('update', function( values, handle ){
      (handle ? limitFieldMax : limitFieldMin).value = values[handle];
    });
  };
}

  
  // Scroll to a Specific Div
  if($('.scroll-to-target').length){
    $(".scroll-to-target").on('click', function() {
      var target = $(this).attr('data-target');
       // animate
       $('html, body').animate({
         scrollTop: $(target).offset().top
       }, 10);
  
    });
  }

  

// var a = 0;
// $(window).scroll(function() {

//   var oTop = $('#counter').offset().top - window.innerHeight;
//   if (a == 0 && $(window).scrollTop() > oTop) {
//     $('.count-title').each(function() {
//       var $this = $(this),
//         countTo = $this.attr('data-count');
//       $({
//         countNum: $this.text()
//       }).animate({
//           countNum: countTo
//         },

//         {

//           duration: 7000,
//           easing: 'swing',
//           step: function() {
//             $this.text(Math.floor(this.countNum));
//           },
//           complete: function() {
//             $this.text(this.countNum);
//             //alert('finished');
//           }

//         });
//     });
//     a = 1;
//   }

// });


//COUNTER///////////

(function ($) {
  $.fn.countTo = function (options) {
    options = options || {};
    
    return $(this).each(function () {
      // set options for current element
      var settings = $.extend({}, $.fn.countTo.defaults, {
        from:            $(this).data('from'),
        to:              $(this).data('to'),
        speed:           $(this).data('speed'),
        refreshInterval: $(this).data('refresh-interval'),
        decimals:        $(this).data('decimals')
      }, options);
      
      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;
      
      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};
      
      $self.data('countTo', data);
      
      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);
      
      // initialize the element with the starting value
      render(value);
      
      function updateTimer() {
        value += increment;
        loopCount++;
        
        render(value);
        
        if (typeof(settings.onUpdate) == 'function') {
          settings.onUpdate.call(self, value);
        }
        
        if (loopCount >= loops) {
          // remove the interval
          $self.removeData('countTo');
          clearInterval(data.interval);
          value = settings.to;
          
          if (typeof(settings.onComplete) == 'function') {
            settings.onComplete.call(self, value);
          }
        }
      }
      
      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };
  
  $.fn.countTo.defaults = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };
  
  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
  formatter: function (value, options) {
    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
  }
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
  var $this = $(this);
  options = $.extend({}, options || {}, $this.data('countToOptions') || {});
  $this.countTo(options);
  }
});


//ACTIVE SOCIAL

$( '.team .team-col img' ).on( 'click', function () {
  $( '.team .social' ).find( 'li .active' ).removeClass( 'active' );
  $( this ).parent( 'li' ).addClass( 'active' );
});

// End


// Sponsors Carousel
  if ($('.sponsors-carousel').length) {
    $('.sponsors-carousel').owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      smartSpeed: 500,
      autoplay: 4000,
      navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
      responsive:{
        0:{
          items:1
        },
        480:{
          items:2
        },
        600:{
          items:3
        },
        800:{
          items:5
        },
        1024:{
          items:5
        }
      }
    });       
  }
  

  //END
// ///TESTIMONIAL SLIDER
jQuery(document).ready(function($) {
            "use strict";
            //  TESTIMONIALS CAROUSEL HOOK
            $('#myCarousel').owlCarousel({
                loop: true,
                center: true,
                items: 3,
                margin: 0,
                autoplay: true,
                dots:true,
                autoplayTimeout: 8500,
                smartSpeed: 450,
                responsive: {
                  0: {
                    items: 1
                  },
                  768: {
                    items: 2
                  },
                  1170: {
                    items: 3
                  }
                }
            });
          });
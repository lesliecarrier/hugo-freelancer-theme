/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
 
});


// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Contact form
function getFormData() {
    let postData = [];
  
    // Grab form data
    jQuery(jQuery('#contactForm').children()[2].children[0]).find(':input').each((index, data) => {
      postData.push(data);
    });
  
    // Filter out input used on left side for some reason
    let result = postData.filter(data => {
      if (data.type != 'hidden' && data.name != "") return data;
    });
  
    // Build post data
    payload = result.map(item => {
      return {
        // Cleanup key values
        key: item.name.split('__')[0].split('_').join(' '),
        value: item.value
      };
    });
  
  
    return payload;
  }


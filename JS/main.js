window.addEventListener('scroll', function(){

  if(window.scrollY > 150){
   $('#navbar').addClass('solid');
  }else{
    $('#navbar').removeClass('solid');
  }
});

// smooth scroll

$(document).ready(function(){
  // Add smooth scrolling to all links with scroll class
  $('.scroll').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// this is to get the length of the ELSAID svg

// const elsaid = document.querySelectorAll('#elsaid path');

// for(let i = 0; i<elsaid.length; i++){
//   console.log(`letter ${i} is ${elsaid[i].getTotalLength()}`);
// }

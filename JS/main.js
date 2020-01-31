window.addEventListener('scroll', function(){
  if(window.scrollY > 150){
   $('#navbar').addClass('solid');
  }else{
    $('#navbar').removeClass('solid');
  }
});




//smooth scrolling

// $('#navbar a, .my-btn').on('click', function(event){
//   if(this.hash!==''){
//     event.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate(
//       {
//         scrollTop: $(hash).offset().top -100
//       },
//       800
//     );
//   }


// });

// const elsaid = document.querySelectorAll('#elsaid path');

// for(let i = 0; i<elsaid.length; i++){
//   console.log(`letter ${i} is ${elsaid[i].getTotalLength()}`);
// }

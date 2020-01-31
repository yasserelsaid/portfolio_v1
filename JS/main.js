window.addEventListener('scroll', function(){
  if(window.scrollY > 150){
   $('#navbar').addClass('solid');
  }else{
    $('#navbar').removeClass('solid');
  }
});

// scroll spy




// this is to get the length of the ELSAID svg

// const elsaid = document.querySelectorAll('#elsaid path');

// for(let i = 0; i<elsaid.length; i++){
//   console.log(`letter ${i} is ${elsaid[i].getTotalLength()}`);
// }

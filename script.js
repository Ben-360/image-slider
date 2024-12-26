 // Get DOM elements
 let next = document.querySelector('.next');
 let prev = document.querySelector('.prev');
 let img = document.querySelector('img'); 

 // Add event listners
 next.addEventListener('click', nextPic);
 prev.addEventListener('click', prevPic);

 let images = [
    "city-1.jpeg",
    "city-2.jpeg",
    "city-3.jpeg",
    "city-4.jpeg",
    "city-5.jpeg",
    "nature-1.jpeg",
    "nature-2.jpeg",
    "nature-3.jpeg"
 ];

 let index = 0;

 function nextPic() {
   index++;

   // Go to first image when you reach the last image
   if(index === images.length){
      index = 0;
   }

   let path = `images/${images[index]}`;
   img.setAttribute('src', path);
 }

 function prevPic() {
   index--;

   // Go to last image when you reach the first image
   if(index < 0){
      index = images.length - 1; 
   }

   let path = `images/${images[index]}`;
   img.setAttribute('src', path);
 }




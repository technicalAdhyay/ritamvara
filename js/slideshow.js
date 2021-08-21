var allSlideshowButtons = document.querySelectorAll('.slideshow__buttons--button');
var allslides = document.querySelectorAll('.slideshow__slide');
var allSlideImages = document.querySelectorAll('.slideshow__imagebox--image');
var currentSlide = 0;

function slideshow(index){
    if( currentSlide === index ){
        //if the current slide button clicked then do nothing
    }else{
        clearTimeout(slideshowTimeout);
        allslides[currentSlide].classList.remove('select');
        let old = currentSlide;
        allslides[index].classList.add('select');
        allSlideImages[old].classList.remove('opacity');
        allSlideImages[index].classList.remove('unset');
        allSlideImages[index].classList.add('select');
        allSlideImages[index].classList.add('opacity');
        setTimeout( function(){
            allSlideImages[old].classList.add('unset');
            allSlideImages[old].classList.remove('select');
        },300 )
        currentSlide = index;
        //Slideshow timing function for next slides
        slideshowTimeout = setTimeout( function(){
            let index = currentSlide >= allslides.length - 1 ? 0 : currentSlide+1;
            slideshow(index);
        },8000 );
    }
    
}

var slideshowTimeout = setTimeout( function(){
    let index = currentSlide >= allslides.length - 1 ? 0 : currentSlide+1;
    slideshow(index);
},8000 );

Array.from( allSlideshowButtons ).forEach( (button,index) => {
    button.addEventListener( 'click' ,function(){
        slideshow(index);
    } );
} );
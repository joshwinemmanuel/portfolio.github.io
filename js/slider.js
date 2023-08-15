var zoomImg = function () {
    
    var clone = this.cloneNode();
    clone.classList.remove("zoomD");
  
  
    var lb = document.getElementById("lb-img");
    lb.innerHTML = "";
    lb.appendChild(clone);
  
   
  
  
    lb = document.getElementById("lb-back");
    lb.classList.add("show");
  };
  
  window.addEventListener("load", function(){
   
    var images = document.getElementsByClassName("zoomD");
    if (images.length>0) {
      for (var img of images) {
        img.addEventListener("click", zoomImg);
      }
    }
  
  
    document.getElementById("lb-back").addEventListener("click", function(){
      this.classList.remove("show");
    })
  });
  
  
  
  
  
  var slideshow1 = document.getElementById("slideshow1");
  slideshow1.currentSlideIndex = 1;
  showSlides(slideshow1.currentSlideIndex, slideshow1);
  
  var slideshow2 = document.getElementById("slideshow2");
  slideshow2.currentSlideIndex = 1;
  showSlides(slideshow2.currentSlideIndex, slideshow2);

  var slideshow3 = document.getElementById("slideshow3");
  slideshow3.currentSlideIndex = 1;
  showSlides(slideshow3.currentSlideIndex, slideshow3);
  
  var slideshow4 = document.getElementById("slideshow4");
  slideshow4.currentSlideIndex = 1;
  showSlides(slideshow4.currentSlideIndex, slideshow4);
  
  
  var slideshow5 = document.getElementById("slideshow5");
  slideshow5.currentSlideIndex = 1;
  showSlides(slideshow5.currentSlideIndex, slideshow5);
  
  
  var slideshow6 = document.getElementById("slideshow6");
  slideshow6.currentSlideIndex = 1;
  showSlides(slideshow6.currentSlideIndex, slideshow6);
  
  
  var slideshow7 = document.getElementById("slideshow7");
  slideshow7.currentSlideIndex = 1;
  showSlides(slideshow7.currentSlideIndex, slideshow7);
  
  
  var slideshow8 = document.getElementById("slideshow8");
  slideshow8.currentSlideIndex = 1;
  showSlides(slideshow8.currentSlideIndex, slideshow8);
  
  
  var slideshow9 = document.getElementById("slideshow9");
  slideshow9.currentSlideIndex = 1;
  showSlides(slideshow9.currentSlideIndex, slideshow9);
  
  
  var slideshow10 = document.getElementById("slideshow10");
  slideshow10.currentSlideIndex = 1;
  showSlides(slideshow10.currentSlideIndex, slideshow10);
  
  
  var slideshow11 = document.getElementById("slideshow11");
  slideshow11.currentSlideIndex = 1;
  showSlides(slideshow11.currentSlideIndex, slideshow11);
  
  
  
  function plusSlides(n, slideshow) {
    showSlides(slideshow.currentSlideIndex += n, slideshow);
  }
  
  function currentSlide(n, slideshow) {
    showSlides(slideshow.currentSlideIndex = n, slideshow);
  }
  
  function showSlides(n, slideshow) {
    
  
  
    var i;
    var slides = slideshow.getElementsByClassName("mySlides");
    var dots = slideshow.getElementsByClassName("dot");
    if (n > slides.length) {slideshow.currentSlideIndex = 1}    
    if (n < 1) {slideshow.currentSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideshow.currentSlideIndex-1].style.display = "block";  
    dots[slideshow.currentSlideIndex-1].className += " active";
  }
  
  
  
  
$(document).ready(function() {
    let currentSlide = 0;
    const slides = $(".slide");
    const numSlides = slides.length;
  
    function showSlide(n) {
      slides.removeClass("active");
      slides.eq(n).addClass("active");
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % numSlides;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + numSlides) % numSlides;
      showSlide(currentSlide);
    }
  
    showSlide(currentSlide);
  
    let intervalId = setInterval(nextSlide, 3000);
  
      $("#next").click(function() {
          clearInterval(intervalId);
          nextSlide();
          intervalId = setInterval(nextSlide, 3000);
      });
  
      $("#prev").click(function() {
          clearInterval(intervalId);
          prevSlide();
          intervalId = setInterval(nextSlide, 3000);
      });
  
  });
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $(document).ready(function(){
        // Your existing JavaScript code for sticky navbar, scroll-up button, and toggle menu
    
        // Typing text animation script
        var typed = new Typed(".typing", {
            strings: ["Quality Hardware", "Electrical products", "Building Materials"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    
        // Animate text on page load
        document.addEventListener('DOMContentLoaded', function () {
            const textElements = document.querySelectorAll('.animated-text');
    
            textElements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('animate');
                }, index * 1000); // Adjust the delay between animations (in milliseconds)
            });
        });
    
        // Animate photos when they come into the viewport
        const photoElements = document.querySelectorAll('.animated-photo');
    
        function checkViewport() {
            photoElements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
                if (rect.top <= windowHeight) {
                    element.classList.add('animate');
                }
            });
        }

        $(document).ready(function () {
            // Your existing JavaScript code for sticky navbar, scroll-up button, and toggle menu
          
            // Collapsing image gallery script
            const slides = document.querySelectorAll(".about2 .slide");
          
            slides.forEach(function (oneSlide) {
              oneSlide.addEventListener("click", function () {
                // Remove active class from all slides within the "about2" section
                deleteActiveClass();
                // Add active class to the clicked slide within the "about2" section
                oneSlide.classList.add("active");
              });
            });
          
            function deleteActiveClass() {
              slides.forEach(function (mySlide) {
                mySlide.classList.remove("active");
              });
            }
          });
          
          
    
        // Listen for scroll events and check if elements are in the viewport
        window.addEventListener('scroll', checkViewport);
        window.addEventListener('resize', checkViewport);
        window.addEventListener('load', checkViewport);
    });

















































    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
